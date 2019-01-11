var ip="10.10.21.178";
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

	if (document.getElementById("graduate").checked)
	{
		if (item <= 3) {sec = "C";}
		else if (item <= 5) {sec = "B";}
		else if (item <= 9) {sec = "B1";}
		else {sec = "A";}
		console.log(sec);
	}
	else
	{
		if (item <= 4) {sec = "C";}
		else if (item == 5) {sec = "B";}
		else if (item <= 9) {sec = "B1";}
		else {sec = "A";}
		
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
	var inputElements = document.getElementsByClassName('AgeRange');
	for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
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
    var Car="";
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
    }
    
    var education = document.getElementById("education")[document.getElementById("education").selectedIndex].value;

    var url = "http://"+ip+"/api.php?action=addDynamic&game="+game+"&sec="+sec+"&marital="+marital+"&gender="+gender+"&age="+age+"&education="+education+"&Juice="+Juice+"&Dryer="+Dryer+"&ReadsHindiNP="+ReadsHindiNP+"&internet="+internet;
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
	
	var education;
	if (document.getElementById("graduate").checked) {
    	education = document.getElementById("graduate").value;
    }
	if (document.getElementById("nonGraduate").checked) {
    	education = document.getElementById("nonGraduate").value;
    }

    var Juice="";
    if (document.getElementById("Juice").checked) {
    Juice = "Yes";
    console.log(Juice);
    }
    else
    {
    	Juice = "NO";
    }
    var Dryer="";
    if (document.getElementById("Dryer").checked) {
    Dryer = "Yes";
    }
    else
    {
    	Dryer = "No";
    }
    var ReadsHindiNP="";
    if (document.getElementById("ReadHindiNP").checked) {
    ReadsHindiNP = "Yes";
    }
    else
    {
    	ReadsHindiNP = "No";
    }
    var Car="";
    if (document.getElementById("Car").checked) {
    Car = "Yes";
    }
    else
    {
    	Car = "No";
    }
    var Phone="";
    if (document.getElementById("Phone").checked) {
    Phone = "Yes";
    }
    else
    {
    	Phone = "No";
    }
    var internet="";
    if (document.getElementById("internet").checked) {
    internet = "Yes";
    }
    else
    {
    	internet = "No";
    }

	var sec = get_sec();
	console.log("SEC: "+sec);
	var gameAllocated = "";
	var secbit = ""
	if(sec=="A") secbit="1000";
	else if(sec=="B1") secbit="0100";
  	else if(sec=="B") secbit="0010";
  	else secbit="0001";

  	if(gender=="Male") genderbit="10";
  	else genderbit="01";

  	if(education=="Graduate") educationbit="10";
  	else educationbit="01";

  	if(marital=="Single") maritalbit="10";
  	else maritalbit="01";

  	if(Juice=="Yes") juicebit="1";
  	else juicebit="0";

  	if(Dryer=="Yes") dryerbit="1";
  	else dryerbit="0";

  	if(ReadsHindiNP=="Yes") newspaperbit="1";
  	else newspaperbit="0";

  	if(Car=="Yes") carbit="1";
  	else carbit="0";

  	if(Phone=="Yes") phonebit="1";
  	else phonebit="0";

  	if(internet=="Yes") internetbit="1";
  	else internetbit="0";

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
				var flag = 1;

				if((parseInt(JSONdata.data[i].sec,2) & parseInt(secbit,2)).toString(10) == 0){ flag = 0;}
				if((JSONdata.data[i].min_age > age) || (JSONdata.data[i].max_age < age)){ flag = 0;}
				if((parseInt(JSONdata.data[i].marital,2) & parseInt(maritalbit,2)).toString(10) == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].education,2) & parseInt(educationbit,2)).toString(10) == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].gender,2) & parseInt(genderbit,2)).toString(10) == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].juice,2) == 1) & juicebit == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].dryer,2) == 1) & dryerbit == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].newspaper,2) == 1) & newspaperbit == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].internet,2) == 1) & internetbit == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].car,2) == 1) & carbit == 0){ flag = 0;}
				if((parseInt(JSONdata.data[i].phone,2) == 1) & phonebit == 0){ flag = 0;}
				if(flag==1){gameAllocated += (JSONdata.data[i].game).charAt(0);}
			}
			if(gameAllocated == ""){gameAllocated = "O"}
			gameAllocated=gameAllocated.toUpperCase();
			console.log("game allocated: "+ gameAllocated);
			gameAllocatedGlobal = gameAllocated;
			gameAllocated = gameAllocated.replace("F", "F");
			gameAllocated = gameAllocated.replace("G", "F");
  			document.getElementById('gameAllocatedLabel').innerHTML = gameAllocated;
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

    var education;
	if (document.getElementById("graduate").checked) {
    	education = document.getElementById("graduate").value;
    }
	if (document.getElementById("nonGraduate").checked) {
    	education = document.getElementById("nonGraduate").value;
    }

    var Juice="";
    if (document.getElementById("Juice").checked) {
    Juice = "Yes";
    console.log(Juice);
    }
    else
    {
    	Juice = "NO";
    }
    var Dryer="";
    if (document.getElementById("Dryer").checked) {
    Dryer = "Yes";
    }
    else
    {
    	Dryer = "No";
    }
    var ReadsHindiNP="";
    if (document.getElementById("ReadHindiNP").checked) {
    ReadsHindiNP = "Yes";
    }
    else
    {
    	ReadsHindiNP = "No";
    }
    var internet="";
    if (document.getElementById("internet").checked) {
    internet = "Yes";
    }
    else
    {
    	internet = "No";
    }
	
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
	objJson.accompaniedbyChildBelow15 = Dryer;
	objJson.readsHindiNewspaper = ReadsHindiNP;
	objJson.hasInternet = internet;
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

