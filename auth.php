<?php


function getdbconnection(){
  
   $conn = new mysqli('localhost', 'root', '', 'maxi');

	if ($conn->connect_error) {
		die('Connect Error (' . $conn->connect_errno . ') '
				. $conn->connect_error);
	}
	
	return $conn;
}

function addGameCondition($conn,$table,$data){
	$sql= "INSERT INTO ".$table." (";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql."".$data[$i][0].",";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql= $sql.") values (";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql."'".$data[$i][1]."',";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql= $sql.")";

	if ($conn->query( $sql )) {
		return 1;
	}
	else{
		return "Table creation failed: (" . $conn->errno . ") " . $conn->error;
	}
}

function addtodb($conn,$table,$data){
	$sql= "INSERT INTO ".$table." (";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql."".$data[$i][0].",";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql= $sql.") values (";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql."'".$data[$i][1]."',";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql= $sql.")";

	$file = fopen("test.txt","a+");
	echo fwrite($file,$sql);
	fclose($file);

	if (!$conn->query( $sql )) {
		return "Insert failed: (" . $conn->errno . ") " . $conn->error;
	}
   // var_dump($sql);
   return mysqli_insert_id($conn);
   
}

function updatedb($conn,$table,$data,$conditions){
	$sql= "UPDATE ".$table." SET ";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql.$data[$i][0]." = '".$data[$i][1]."',";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql=$sql." WHERE ";
	for($i=0;$i<sizeof($conditions);$i++){
		$sql= $sql.$conditions[$i][0]." = ".$conditions[$i][1]." AND ";
	}
	$sql=substr($sql,0,strlen($sql)-strlen(" AND"));
		$file = fopen("test.txt","w");
		echo fwrite($file,$sql);
		fclose($file);
	if (!$conn->query( $sql )) {
		return "Table creation failed: (" . $conn->errno . ") " . $conn->error;
	}
   return 0;
   
}

function updaterp($conn,$table,$data,$game){
	$sql= "UPDATE ".$table." SET ";
	for($i=0;$i<sizeof($data);$i++){
		$sql= $sql.$data[$i][0]." = '".$data[$i][1]."',";
	}
	$sql=substr($sql,0,strlen($sql)-1);
	$sql=$sql." WHERE game='".$game."'";
		$file = fopen("test.txt","w");
		echo fwrite($file,$sql);
		fclose($file);
	if (!$conn->query( $sql )) {
		return "Table creation failed: (" . $conn->errno . ") " . $conn->error;
	}
   return 0;
   
}


function viewdb($conn,$table,$conditions,$columns){
	$sql="SELECT ";

	if($columns == null){
		$sql=$sql."* ";
	}else{
		$sql= $sql."";
		for($i=0;$i<sizeof($columns);$i++){
			$sql= $sql."".$columns[$i].",";
		}
		$sql=substr($sql,0,strlen($sql)-1);
		$sql= $sql."";
	}
	
	$sql=$sql." FROM ".$table;
	if($conditions != null){
		$sql=$sql." WHERE ";
		for($i=0;$i<sizeof($conditions);$i++){
			$sql= $sql.$conditions[$i][0]." = '".$conditions[$i][1]."' AND ";
		}
		$sql=substr($sql,0,strlen($sql)-strlen(" AND"));
	}

	$result=$conn->query( $sql );
	if (!$result) {
		return json_encode("Table failed: (" . $conn->errno . ") " . $conn->error);
	}
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		$rows[] = $r;
	}
	$temp = json_encode($rows);
	// var_dump($temp);

    return $temp;
}

function deleteentry($conn,$table,$conditions){	
	$sql="DELETE FROM ".$table;
	if($conditions != null){
		$sql=$sql." WHERE ";
		for($i=0;$i<sizeof($conditions);$i++){
			$sql= $sql.$conditions[$i][0]." = ".$conditions[$i][1]." AND ";
		}
		$sql=substr($sql,0,strlen($sql)-strlen(" AND"));
		$result=$conn->query( $sql );
		if (!$result) {
			return "Error in deletion";
		}
		return 0;
	}
}

//show
	
?>