var ip="10.10.24.16/MaxiFair2019";
var gameAllocatedGlobal = "O";
/* Sample ajax query template that can be used
var url = "http://"+ip+"/api.php?action=call-to-your-api";
	  $.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("Failed with status " + status);
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			//code if call is successfull
		}
	});
*/
function searchUID(UID){
	
    var url = "http://"+ip+"/api.php?action=viewregistrations&filter=[[\"UID\",\""+UID+"\"]]";
    console.log(url);

	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewregistrations&filter=[[\"UID\",\""+UID+"\"]] failed with status " + status);
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			if(JSONdata.data.length > 0){
				document.getElementById("Name").innerHTML = "Name: " + JSONdata.data[0].name;
				document.getElementById("id").innerHTML = "UID: " + JSONdata.data[0].UID;
				document.getElementById("gamesalc").innerHTML = "Games Allocated: "+ JSONdata.data[0].games_allocated;
			}else{
				document.getElementById("Name").innerHTML = "Name: No record found";
				document.getElementById("id").innerHTML = "UID: N/A";
				document.getElementById("gamesalc").innerHTML = "Games Allocated: 0";								
			}
		}
	});	
}


function searchPhn(phone){
	  
      var url = "http://"+ip+"/api.php?action=viewregistrations&filter=[[\"phno\",\""+phone+"\"]]";
 
	  $.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewregistrations&filter=[[\"phno\",\""+phone+"\"]] failed with status " + status);
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			if(JSONdata.data.length > 0){
				document.getElementById("Name").innerHTML = "Name: " + JSONdata.data[0].name;
				document.getElementById("id").innerHTML = "UID: " + JSONdata.data[0].UID;
				document.getElementById("gamesalc").innerHTML = "Games Allocated: "+ JSONdata.data[0].games_allocated;
			}else{
				document.getElementById("Name").innerHTML = "Name: No record found";
				document.getElementById("id").innerHTML = "UID: N/A";
				document.getElementById("gamesalc").innerHTML = "Games Allocated: 0";								
			}
		}
	});
		
}
function searchName(name){
	
	var url = "http://"+ip+"/api.php?action=viewregistrations&filter=[[\"name\",\""+name+"\"]]";

	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=action=viewregistrations&filter=[[\"name\",\""+name+"\"]] failed with status " + status);
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			if(JSONdata.data.length > 0){
				document.getElementById("Name").innerHTML = "Name: " + JSONdata.data[0].name;
				document.getElementById("id").innerHTML = "UID: " + JSONdata.data[0].UID;
				document.getElementById("gamesalc").innerHTML = "Games Allocated: "+ JSONdata.data[0].games_allocated;
			}else{
				document.getElementById("Name").innerHTML = "Name: No record found";
				document.getElementById("id").innerHTML = "UID: N/A";
				document.getElementById("gamesalc").innerHTML = "Games Allocated: 0";								
			}
		}
	});
}


function get_sec()
{
	var item = 0;
    if (document.getElementById("ElectricityConnection").checked) { item = item+1;}
  	if (document.getElementById("CeilingFan").checked) {item = item+1;}
	if (document.getElementById("LPGStove").checked) {item = item+1;}
	if (document.getElementById("TwoWheeler").checked) {item = item+1;}
	if (document.getElementById("ColorTV").checked) {item = item+1;}
	if (document.getElementById("Refrigerator").checked) {item = item+1;}
	if (document.getElementById("WashingMachine").checked) {item = item+1;}
	if (document.getElementById("PCLaptop").checked) {item = item+1;}
	if (document.getElementById("FourWheeler").checked) {item = item+1;}
	if (document.getElementById("AC").checked) {item = item+1;}
	if (document.getElementById("AgriculturalLand").checked){item = item+1;}

	var sec;
	var education = document.getElementById("education")[document.getElementById("education").selectedIndex].value;

	if (item >= 9)
	{
		if (education == "edu6") {sec = "A";}
		else if (education == "edu5") {sec = "A";}
		else if (education == "edu4") {sec = "A";}
		else if (education == "edu2") {sec = "A";}
		else if (education == "edu3") {sec = "A";}
		else {sec = "B";}
		console.log(sec);
	}
	else if (item == 8)
	{
		if (education == "edu6") {sec = "A";}
		else if (education == "edu5") {sec = "A";}
		else if (education == "edu4") {sec = "A";}
		else if (education == "edu2") {sec = "A";}
		else if (education == "edu3") {sec = "A";}
		else {sec = "B";}
		console.log(sec);
	}
	else if (item == 7)
	{
		if (education == "edu6") {sec = "A";}
		else if (education == "edu5") {sec = "A";}
		else if (education == "edu4") {sec = "A";}
		else if (education == "edu2") {sec = "B";}
		else if (education == "edu3") {sec = "B";}
		else {sec = "C";}
		console.log(sec);
	}
	else if (item == 6)
	{
		if (education == "edu6") {sec = "A";}
		else if (education == "edu5") {sec = "A";}
		else if (education == "edu4") {sec = "B";}
		else if (education == "edu2") {sec = "B";}
		else if (education == "edu3") {sec = "B";}
		else {sec = "C";}
		console.log(sec);
	}
	else if (item == 5)
	{
		if (education == "edu6") {sec = "B";}
		else if (education == "edu5") {sec = "B";}
		else if (education == "edu4") {sec = "B";}
		else if (education == "edu2") {sec = "C";}
		else if (education == "edu3") {sec = "C";}
		else {sec = "C";}
		console.log(sec);
	}
	else if (item == 4)
	{
		if (education == "edu6") {sec = "B";}
		else if (education == "edu5") {sec = "C";}
		else if (education == "edu4") {sec = "C";}
		else if (education == "edu2") {sec = "C";}
		else if (education == "edu3") {sec = "C";}
		else {sec = "X";}
		console.log(sec);
	}
	else {
		sec = "X";
	}
	console.log(sec);
	return sec;
	
}

function changeCondition(){
	var game = document.getElementById("game").value;

	var sec = ""; 
	var inputElements = document.getElementsByClassName('sec');
	for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
        sec += "1";
      }else{
      	sec += "0";
      }
	}

    var age = ""; 
	var inputElements = document.getElementsByClassName('agerange');
	for(var i=0; inputElements[i]; ++i){
      if(inputElements[i]){
        age += "1";
      }else{
      	age += "0";
      }
	}

	var marital="";
		if (document.getElementById("single").checked) {
    marital = document.getElementById("single").value;
    }
	if (document.getElementById("married").checked) {
    marital = document.getElementById("married").value;
    }
    else {
    	marital = "11";
    }

    var gender="";
	if (document.getElementById("male").checked) {
    	gender = document.getElementById("male").value;
    }
	if (document.getElementById("female").checked) {
    	gender = document.getElementById("female").value;
    }
    else {
    	gender = "11";
    }

    var Juice="";
    if (document.getElementById("Juice").checked) {
    Juice = "1";
    console.log(Juice);
    }
    else
    {
    	Juice = "0";
    }
    var Dryer="";
    if (document.getElementById("Dryer").checked) {
    Dryer = "1";
    }
    else
    {
    	Dryer = "0";
    }
    var ReadsHindiNP="";
    if (document.getElementById("ReadsHindiNP").checked) {
    ReadsHindiNP = "1";
    }
    else
    {
    	ReadsHindiNP = "0";
    }
/*    var Car="";
    if (document.getElementById("Car").checked) {
    Car = "1";
    }
    else
    {
    	Car = "0";
    }
    var Phone="";
    if (document.getElementById("Phone").checked) {
    Phone = "1";
    }
    else
    {
    	Phone = "0";
    }
    var hasChild="";
    if (document.getElementById("hasChild").checked) {
    hasChild = "1";
    }
    else
    {
    	hasChild = "0";
    }*/
    
    var education = document.getElementById("education")[document.getElementById("education").selectedIndex].value;

    var url = "http://"+ip+"/api.php?action=addDynamic&game="+game+"&sec="+sec+"&marital="+marital+"&gender="+gender+"&age="+age+"&education="+education+"&Juice="+Juice+"&Dryer="+Dryer+"&ReadsHindiNP="+ReadsHindiNP+"&internet=1";
    console.log(url);

	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=addDynamic&game failed with status " + status);
		},
		success: function(data){
			window.alert(data);
		}
	});

}

function getGame(){
	var uid;
	var name = document.getElementById("name").value;
	var phn = document.getElementById("phn").value;
	var email = document.getElementById("email").value;
	var region = document.getElementById("region")[document.getElementById("region").selectedIndex].value;	
	if (region == "Others")
	{region = document.getElementById("otherstext").value;}
		
	var age = document.getElementById("age").value;
	
	var gender;
	if (document.getElementById("male").checked) {
    	gender = document.getElementById("male").value;
    }
	if (document.getElementById("female").checked) {
    	gender = document.getElementById("female").value;
    }
	
	var marital;
	if (document.getElementById("single").checked) {
    	marital = document.getElementById("single").value;
    }
	if (document.getElementById("married").checked) {
    	marital = document.getElementById("married").value;
    }

    var Juice="";
    if (document.getElementById("Juice").checked) {
	    Juice = "Yes";
    }
    else
    {
    	Juice = "No";
    }
    var Pub="";
    if (document.getElementById("Pub").checked) {
    	Pub = "Yes";
    }
    else
    {
    	Pub = "No";
    }
    var HouseRenov="";
    if (document.getElementById("HouseRenov").checked) {
    	HouseRenov = "Yes";
    }
    else
    {
    	HouseRenov = "No";
    }
    var Employed="";
    if (document.getElementById("Employed").checked) {
    	Employed = "Yes";
    }
    else
    {
    	Employed = "No";
    }
    var AccompaniedChild="";
    if (document.getElementById("AccompaniedChild").checked) {
    AccompaniedChild = "Yes";
    }
    else
    {
    	AccompaniedChild = "No";
    }

	var ChildAge = document.getElementById("ChildAge").value;
    if(ChildAge == "") {
    	ChildAge = "0";
    }

	var sec = get_sec();
	console.log("SEC: "+sec);
	var gameAllocated = "";
	var secbit = ""
	if(sec=="A") secbit="1000";
	else if(sec=="B") secbit="0100";
  	else if(sec=="C") secbit="0010";
  	else secbit="0001";

  	if(gender=="Male") genderbit="10";
  	else genderbit="01";

  	if(marital=="Single") maritalbit="10";
  	else maritalbit="01";

  	if(Juice=="Yes") juicebit="1";
  	else juicebit="0";

  	if(Pub=="Yes") pubbit="1";
  	else pubbit="0";

  	if(HouseRenov=="Yes") renovbit="1";
  	else renovbit="0";

  	if(Employed=="Yes") employedbit="1";
  	else employedbit="0";

  	if(AccompaniedChild=="Yes") accompaniedchildbit="1";
  	else accompaniedchildbit="0";

  	var url = "http://"+ip+"/api.php?action=getConditions";
  	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("Call to action=getConditions failed with error: ", xhr.status);
			console.log(url);
		},
		success: function(JSONdata){
			console.log(JSONdata);
			JSONdata = JSON.parse(JSONdata);
			var gameAllocated = "";
			for (var i=0; i<Object.keys(JSONdata.data).length; i++) {
				var tempGame = JSONdata.data[i].game;
				tempGame = tempGame.toUpperCase();
				var flag = 1;

				if((parseInt(JSONdata.data[i].sec,2) & parseInt(secbit,2)).toString(10) == 0) { 
					flag = 0;
				}
				if((JSONdata.data[i].min_age > age) || (JSONdata.data[i].max_age < age)) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].marital,2) & parseInt(maritalbit,2)).toString(10) == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].gender,2) & parseInt(genderbit,2)).toString(10) == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].juice,2) == 1) & juicebit == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].pub,2) == 1) & pubbit == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].houseRenov,2) == 1) & renovbit == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].employed,2) == 1) & employedbit == 0) { 
					flag = 0;
				}
				if((parseInt(JSONdata.data[i].accompaniedChild,2) == 1) & accompaniedchildbit == 0) { 
					flag = 0;
				}

				if(tempGame.charAt(0) == "A") {
					if(gameAllocated == "") {
						var ageTemp = parseInt(ChildAge,10);
						if(ageTemp < 5 || ageTemp > 15) {
							flag = 0;
						}
					}
					else flag = 0;
				}

				if(tempGame.charAt(0) == "B") {
					var ageTemp = parseInt(ChildAge,10);
					if(ageTemp < 6 || ageTemp > 14) {
						flag = 0;
					}
				}
				if(JSONdata.data[i].isTentActive.charAt(0) == "0") {
					flag = 0;
				}

				if(flag==1){
					gameAllocated += tempGame.charAt(0)
				}
			}
			if(gameAllocated.length < 2) {
				if(gender == "Female" && age >= 18 && JSONdata.data[5].isTentActive.charAt(0) == "1") {
					gameAllocated += "E";
				}
				if(JSONdata.data[6].isTentActive.charAt(0) == "1" && gameAllocated.length < 2) {
					gameAllocated += "F";
				}
			}
			gameAllocated=gameAllocated.toUpperCase();
			console.log("game allocated: "+ gameAllocated);
			gameAllocatedGlobal = gameAllocated;
			gameAllocated = gameAllocated.replace("F", "F");
			gameAllocated = gameAllocated.replace("G", "F");
  			document.getElementById('gameAllocatedLabel').innerHTML = '<font size="5">'+gameAllocated+'</font>';
  			document.getElementById("Submit").disabled = false; 
		}
		});
}

function insert(){
	var uid;
	var name = document.getElementById("name").value;
	var phn = document.getElementById("phn").value;
	var email = document.getElementById("email").value;
	var region = document.getElementById("region")[document.getElementById("region").selectedIndex].value;	
	if (region == "Others")
	{region = document.getElementById("otherstext").value;}
		
	var age = document.getElementById("age").value;
	
	var gender;
	if (document.getElementById("male").checked) {
    	gender = document.getElementById("male").value;
    }
	if (document.getElementById("female").checked) {
    	gender = document.getElementById("female").value;
    }
	
	var marital;
	if (document.getElementById("single").checked) {
    	marital = document.getElementById("single").value;
    }
	if (document.getElementById("married").checked) {
    	marital = document.getElementById("married").value;
    }

    var education = document.getElementById("education")[document.getElementById("education").selectedIndex].value;

    var Juice="";
    if (document.getElementById("Juice").checked) {
	    Juice = "Yes";
    }
    else
    {
    	Juice = "No";
    }
    var Pub="";
    if (document.getElementById("Pub").checked) {
    	Pub = "Yes";
    }
    else
    {
    	Pub = "No";
    }
    var HouseRenov="";
    if (document.getElementById("HouseRenov").checked) {
    	HouseRenov = "Yes";
    }
    else
    {
    	HouseRenov = "No";
    }
    var Employed="";
    if (document.getElementById("Employed").checked) {
    	Employed = "Yes";
    }
    else
    {
    	Employed = "No";
    }
    var AccompaniedChild="";
    if (document.getElementById("AccompaniedChild").checked) {
    	AccompaniedChild = "Yes";
    }
    else
    {
    	AccompaniedChild = "No";
    }

    var ChildAge="0";
    ChildAge = document.getElementById("ChildAge").value;
	
	var ElectricityConnection;
	   if (document.getElementById("ElectricityConnection").checked) {
       ElectricityConnection = "Yes";}
	   else ElectricityConnection = "No";
       
	var CeilingFan;
		if (document.getElementById("CeilingFan").checked) {
		CeilingFan = "Yes";}
	   else CeilingFan = "No";
       
		var LPGStove;
		if (document.getElementById("LPGStove").checked) {
		LPGStove = "Yes";}
	   else LPGStove = "No";
    
		var TwoWheeler;
		if (document.getElementById("TwoWheeler").checked) {
		TwoWheeler = "Yes";}
	   else TwoWheeler = "No";
    
		var ColorTV;
		if (document.getElementById("ColorTV").checked) {
		ColorTV = "Yes";}
	   else ColorTV = "No";
    
		var Refrigerator;
		if (document.getElementById("Refrigerator").checked) {
		Refrigerator = "Yes";}
	   else Refrigerator = "No";
    
		var WashingMachine;
		if (document.getElementById("WashingMachine").checked) {
		WashingMachine = "Yes";}
	   else WashingMachine = "No";
    
		var PCLaptop;
		if (document.getElementById("PCLaptop").checked) {
		PCLaptop = "Yes";}
	   else PCLaptop = "No";
    
		var FourWheeler;
		if (document.getElementById("FourWheeler").checked) {
		FourWheeler = "Yes";}
	   else FourWheeler = "No";
    
		var AC;
		if (document.getElementById("AC").checked) {
		AC = "Yes";}
	   else AC = "No";
    
		var AgriculturalLand;
		if (document.getElementById("AgriculturalLand").checked) {
		AgriculturalLand = "Yes";}
	   else AgriculturalLand = "No";
    
	var objJson = new Object();
	objJson.region = region;
	objJson.age = age;
	objJson.gender = gender;
	objJson.marital = marital;
	objJson.education = education;
	objJson.Juice = Juice;
	objJson.Pub = Pub;
	objJson.HouseRenov = HouseRenov;
	objJson.Employed = Employed;
	objJson.AccompaniedChild = AccompaniedChild;
	objJson.ChildAge = ChildAge;
	objJson.ElectricityConnection = ElectricityConnection;
	objJson.CeilingFan = CeilingFan;
	objJson.LPGStove = LPGStove;
	objJson.TwoWheeler = TwoWheeler;
	objJson.ColorTV = ColorTV;
	objJson.Refrigerator = Refrigerator;
	objJson.WashingMachine = WashingMachine;
	objJson.PCLaptop = PCLaptop;
	objJson.FourWheeler = FourWheeler;
	objJson.AC = AC;
	objJson.AgriculturalLand = AgriculturalLand;	
	  
	var profile = JSON.stringify(objJson);
	console.log(profile);
	var sec = get_sec();
	console.log("SEC: "+sec);
	var comment = "NA";

  	console.log("game allocated: "+ gameAllocatedGlobal);
	var url = "http://"+ip+"/api.php?action=new&name="+name+"&sec="+sec+"&games_allocated="+gameAllocatedGlobal+"&email="+email+"&phno="+phn+"&profile="+profile+"&json="+comment;
	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("Call to action=new failed with error: ", xhr.status);
			console.log(url);
		},
		success: function(result){
			console.log(JSON.stringify(result));
		}
	});
			
}

