<?php
include ('helper.php');
if(!isset($_GET["action"])){
	echo badJSONResponse("Bad arguments");
	die;	
}
$action=$_GET["action"];
if($action == "new"){
	$name=$_GET["name"];
	$sec=$_GET["sec"];
	$games_allocated=$_GET["games_allocated"];
	$phno=$_GET["phno"];
	$email=$_GET["email"];
	$profile=$_GET["profile"];
	$json=$_GET["json"];
	if(empty($name) || empty($sec) || empty($games_allocated) || empty($profile) ){
		echo badJSONResponse("Bad arguments");
	}else{
			echo registerEntry($name,$sec,$games_allocated,$phno,$email,$profile,$json);
	}
}else if($action == "addparticipant"){
	$uid=$_GET["uid"];
	$name=$_GET["name"];
	$sec=$_GET["sec"];
	$games_allocated=$_GET["games_allocated"];
	$phno=$_GET["phno"];
	$email=$_GET["email"];
	$profile=$_GET["profile"];
	$json=$_GET["json"];
	if(empty($uid) || empty($name) || empty($sec) || empty($games_allocated) || empty($profile) ){
		echo badJSONResponse("Bad arguments");
	}else{
			echo addEntry($uid,$name,$sec,$games_allocated,$phno,$email,$profile,$json);
		}
}else if($action == "addDynamic"){
	$game=$_GET["game"];
	$sec=$_GET["sec"];
	$marital=$_GET["marital"];
	$gender=$_GET["gender"];
	$age=$_GET["age"];
	$CanDrive=$_GET["CanDrive"];
	$ReadsHindiNP=$_GET["ReadsHindiNP"];
	$AccompaniedChild=$_GET["AccompaniedChild"];
	$education=$_GET["education"];
	$internet=$_GET["internet"];
	$time=$_GET["Time"];

	if(empty($game) || empty($sec) || empty($marital) || empty($gender) || empty($age) || empty($education)){
		echo badJSONResponse("Bad arguments");
	}else{
			echo addDynamic($game,$sec,$marital,$gender,$age,$education,$CanDrive,$ReadsHindiNP,$AccompaniedChild,$internet,$time);
		}
		
}else if($action == "getConditions"){
	echo viewConditions();
}else if ($action == "updategame"){
	$uid=$_GET["uid"];
	$game=$_GET["game"];
	if(empty($uid) || empty($game)){
		echo badJSONResponse("Bad arguments");
	}else{
		echo updatePlayed($uid,$game);
	}
}else if($action == "updateallocated"){
	$uid=$_GET["uid"];
	$games=$_GET["games"];
	if(empty($uid) || empty($games)){
		echo badJSONResponse("Bad arguments");
	}else{
		echo updateAllocated($uid,$games);
	}
}else if($action == "archive"){
	$uid=$_GET["uid"];
	if(empty($uid)){
		echo badJSONResponse("Bad arguments");
	}else{
		echo archivePlayer($uid);
	}
}else if($action == "unarchive"){
	$uid=$_GET["uid"];
	if(empty($uid)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		echo unarchivePlayer($uid);
	}
}else if($action == "view"){
	$allenteries=$_GET["allenteries"];
	$filter=$_GET["filter"];
	echo viewData($allenteries,$filter);
}else if($action == "viewregistrations"){
	$allenteries=$_GET["allenteries"];
	$filter=$_GET["filter"];
	echo viewRegistrations($allenteries,$filter);
}else if($action == "viewDynamic"){
	$allenteries=$_GET["allenteries"];
	$filter=$_GET["filter"];
	echo viewRegistrations($allenteries,$filter);
}else if($action == "gamequeue"){
	$game=$_GET["game"];
	if(empty($game)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		echo gameQueue($game);
	}
}else if($action == "currentgamequeue"){
	$game=$_GET["game"];
	if(empty($game)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		echo currentGameQueue($game);
	}
}else if($action == "gametime"){
	$game=$_GET["game"];
	if(empty($game)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		echo gametime($game);
	}
}else if($action == "viewuid"){
	$uid=$_GET["uid"];
	if(empty($uid)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		echo viewUID($uid);
	}
}else if($action == "viewuid1"){			//Returns row from Registrations table
	$uid=$_GET["uid"];
	if(empty($uid)){
		 echo badJSONResponse("Bad arguments");
	}else{		
		
		echo viewUID1($uid);
	}
}
else if($action == "viewarchive"){
	echo viewArchive();
}else if($action == "viewplayed"){
	$game=$_GET["game"];
	if(empty($game)){
		echo badJSONResponse("Bad arguments");
	}else{
		echo viewPlayed($game);
	}
}else if($action == "getUID"){
	$name=$_GET["name"];
	$phno=$_GET["phno"];
	echo getUID($name,$phno);
}
else {
	echo badJSONResponse("Bad arguments");
}



?>