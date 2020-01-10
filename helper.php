<?php header('Access-Control-Allow-Origin: *'); ?>
<?php
error_reporting(E_ERROR | E_PARSE);
include ('auth.php');

function registerEntry($name,$sec,$games_allocated,$phno,$email,$profile,$json){
	$data=array();
	$data[0]=["name",$name];
	$data[1]=["sec",$sec];
	$data[2]=["games_allocated",$games_allocated];
	$data[3]=["phno",$phno];
	$data[4]=["email",$email];
	$data[5]=["profile",$profile];
	$data[6]=["json",$json];

	$UID=addtodb(getdbconnection(),"registrations",$data);
	if(!is_numeric($UID)){
		return badJSONResponse($UID);
		die;
	}
	return okJSONResponse("Success");
}

function viewConditions(){
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"dynamicrp",null,null)));
}

function addDynamic($game,$sec,$marital,$gender,$age,$education,$CanDrive,$ReadsHindiNP,$AccompaniedChild,$internet){
	$data=array();
	$data[0]=["game",$game];
	$data[1]=["sec",$sec];
	$data[2]=["marital",$marital];
	$data[3]=["gender",$gender];
	$data[4]=["age",$age];
	$data[5]=["education",$education];
	$data[6]=["drive",$CanDrive];
	$data[7]=["child",$AccompaniedChild];
	$data[8]=["newspaper",$ReadsHindiNP];
	$data[9]=["internet",$internet];
	$data[10]=["Time",$time];

	$returnID=addGameCondition(getdbconnection(),"dynamicrp",$data);
	if(!is_numeric($returnID)){
		$returnID=updaterp(getdbconnection(),"dynamicrp",$data,$game);
		if(!is_numeric($returnID)){
			return badJSONResponse("Update Failed");
		}
		else return okJSONResponse("Success");
	}
	return okJSONResponse("Success");
}

function addEntry($uid,$name,$sec,$games_allocated,$phno,$email,$profile,$json){
	$data=array();
	$data[0]=["UID",$uid];
	$data[1]=["name",$name];
	$data[2]=["sec",$sec];
	$data[3]=["games_allocated",$games_allocated];
	$data[4]=["phno",$phno];
	$data[5]=["email",$email];
	$data[6]=["profile",$profile];
	$data[7]=["json",$json];
	$check=viewUID($uid);
	$file = fopen("test1.txt","w");
		echo fwrite($file,$check);
		fclose($file);
	if(strlen($check)>30){ 
		return "a";
		die;
	}
	$temp=addtodb(getdbconnection(),"participant",$data);
	if(!is_numeric($temp)){
		return "badJSONResponse($temp)";
		die;
	}
	$data=array();	
	$data[0]=["UID",$uid];
	$data[1]=["played",0];
	$games_allocated=strtolower($games_allocated);
	for($i=0;$i<strlen($games_allocated);$i++){
		$temp=addtodb(getdbconnection(),"game".$games_allocated[$i],$data);
		
		if(!is_numeric($temp)){
			return badJSONResponse($temp);
			die;
		}
	}
	return okJSONResponse("Success");
	
}

//update game
//remove
//archive
function updatePlayed($UID,$newplayed){
	$data=array();
	$conditions[0]=["UID",$UID];
	$columns=["games_played"];
	$object=viewdb(getdbconnection(),"participant",$conditions,$columns);
	$object=json_decode($object);	
	$played=$object[0]->games_played;
	if(strpos($played,$newplayed ) !== false ){
		return badJSONResponse("Game ".$newplayed." is already allocated to this person");
		die;
	}
	$data[0]=["games_played",$played.$newplayed];
	date_default_timezone_set('Asia/Kolkata');
	$data[1]=["last_update",date('Y-m-d H:i:s')];
	$temp=updatedb(getdbconnection(),"participant",$data,$conditions);
	if(!is_numeric($temp)){
		return badJSONResponse($temp);
	}
	$data[0]=["played",1];
	$temp=updatedb(getdbconnection(),"game".$newplayed,$data,$conditions);
	if(!is_numeric($temp)){
		return badJSONResponse($temp);
	}
	$data[0]=["queued",0];
	$temp=updatedb(getdbconnection(),"game".$newplayed,$data,$conditions);
	if(!is_numeric($temp)){
		return badJSONResponse($temp);
	}
	return okJSONResponse("Success");
}

function updateCurrent($UID,$game){
	$data[0]=["queued",1];
	$conditions[0]=["UID",$UID];
	$temp=updatedb(getdbconnection(),"game".$game,$data,$conditions);
	if(!is_numeric($temp)){
		return badJSONResponse($temp);
	}
	return okJSONResponse("Success");
}

function updateAllocated($UID,$games){
	$conditions[0]=["UID",$UID];
	$data=array();
	$data[0]=["games_allocated",$games];
	date_default_timezone_set('Asia/Kolkata');
	$data[1]=["last_update",date('Y-m-d H:i:s')];
	$columns=["games_allocated"];
	$object=viewdb(getdbconnection(),"participant",$conditions,$columns);
	$object=json_decode($object);	
	$oldallocated=$object[0]->games_allocated;
	$temp=updatedb(getdbconnection(),"participant",$data,$conditions);
	if(!is_numeric($temp)){
			return badJSONResponse($temp);
			die;
		}
	for($i=0;$i<strlen($oldallocated);$i++){
		$temp=deleteentry(getdbconnection(),"game".$oldallocated[$i],$conditions);
		if(!is_numeric($temp)){
			return badJSONResponse($temp);
			die;
		}
	}

	$data=array();	
	$data[0]=["UID",$UID];
	$data[1]=["played",0];
	for($i=0;$i<strlen($games);$i++){
		$temp=addtodb(getdbconnection(),"game".$games[$i],$data);
		if(!is_numeric($temp)){
			return badJSONResponse($temp);
			die;
		}
	}
	return okJSONResponse("Success");
}

function viewData($all,$filter){
	if($all){
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"participant",null,null)));
	}else{
		$data=array();
		$data=json_decode($filter);
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"participant",$data,null)));
	}
}

function viewRegistrations($all,$filter){
	if($all){
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"registrations",null,null)));
	}else{
		$data=array();
		$data=json_decode($filter);
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"registrations",$data,null)));
	}
}

function viewDynamic($all,$filter){
	if($all){
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"dynamicgameallocation",null,null)));
	}else{
		$data=array();
		$data=json_decode($filter);
		return okJSONResponse(json_decode(viewdb(getdbconnection(),"dynamicgameallocation",$data,null)));
	}
}

function archivePlayer($uid){
	$data[0]=["UID",$uid];
	$temp=addtodb(getdbconnection(),"archive",$data);
	if(!is_numeric($temp)){
		return badJSONResponse($temp);
	}
	//Write logic to remove unplayed games
	$columns=["games_allocated"];
	$object=viewdb(getdbconnection(),"participant",$data,$columns);
	$object=json_decode($object);	
	$games=$object[0]->games_allocated;
	$columns=["played"];
	for($i=0;$i<strlen($games);$i++){
		$played=viewdb(getdbconnection(),"game".$games[$i],$data,$columns);
		$played=json_decode($played);
		if(intval($played[0]->played) == 0){
			deleteentry(getdbconnection(),"game".$games[$i],$data);
		}
	}
	return okJSONResponse("Success");
	
}

function unarchivePlayer($uid){
	$data[0]=["UID",$uid];
	$temp[0]=["UID",$uid];
	$temp[1]=["played",0];
	$temp[2]=["queued",1];
	$queuedCount = 1;
	$currentGame;
	deleteentry(getdbconnection(),"archive",$data);
	//Write Logic to add back to unplayed games
	$columns=["games_allocated"];
	$object=viewdb(getdbconnection(),"participant",$data,$columns);
	$object=json_decode($object);
	$games=$object[0]->games_allocated;
	$columns=["played"];
	for($i=0;$i<strlen($games);$i++){
		$played=viewdb(getdbconnection(),"game".$games[$i],$data,$columns);
		$played=json_decode($played);
		if($played == null){
			$currentGame = $games[$i];
			if($queuedCount == 1){
				$temp[2]=["queued",1];
				$queuedCount = 0;
			}else {
				$temp[2]=["queued",0];
			}
			addtodb(getdbconnection(),"game".$games[$i],$temp);
		}
	}
	return okJSONResponse($currentGame);
}

function gametime($game){
	$conn = new mysqli('localhost', 'root', '',maxi);
	$sql = "SELECT time FROM dynamicrp where game='$game'";
	$retval = $conn->query( $sql );
	$row = mysqli_fetch_assoc($retval);
      return $row['time'];
}

function gameQueue($game){
	$data[0]=["played",0];
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"game".$game,$data,null)));
}

function currentGameQueue($game){
	$data[0]=["queued",1];
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"game".$game,$data,null)));
}

function viewArchive(){
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"archive",null,null)));
}

function viewPlayed($game){
	$data[0]=["played",1];
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"game".$game,$data,null)));
}

function viewUID($uid){
	$data[0]=["UID",$uid];
	$object=json_decode(viewdb(getdbconnection(),"participant",$data,null));
	if(!empty($object)){
		$archive=json_decode(viewdb(getdbconnection(),"archive",$data,null));
		if(empty($archive)){
			$object[0]->archived=false;
		}else{
			$object[0]->archived=true;
		}
	}
	return okJSONResponse($object);
}

function viewUID1($uid){
	$data[0]=["UID",$uid];
	$object=json_decode(viewdb(getdbconnection(),"registrations",$data,null));
	if(!empty($object)){
		$archive=json_decode(viewdb(getdbconnection(),"archive",$data,null));
		if(empty($archive)){
			$object[0]->archived=false;
		}else{
			$object[0]->archived=true;
		}
	}
	return okJSONResponse($object);
}

function getUID($name,$phn){
	$data[0]=["name",$name];
	$data[1]=["phno",$phn];
	return okJSONResponse(json_decode(viewdb(getdbconnection(),"registrations",$data,null)));
}

function badJSONResponse($message){
	$json=new response();
	$json->status=False;
	$json->data=$message;
	return json_encode($json);
}

function okJSONResponse($message){
	$json=new response();
	$json->status=True;
	$json->data=$message;
	return json_encode($json);
}

class response{
	public $status;
	public $data;
}

function updateTentStatus($tentStatus,$game){
	$data[0]=["isTentActive",$tentStatus];
	$temp=updaterp(getdbconnection(),"dynamicrp",$data,$game);
		if(!is_numeric($temp)){
			return badJSONResponse("Update Failed");
		}
		else return okJSONResponse("Success");
	
}

//updatePlayed(10,'a');
//archive(10);
//addEntry("Uday","c","a","9960531044","Sample","None");
//unarchive(10);
?>