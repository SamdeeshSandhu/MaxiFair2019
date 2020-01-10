/* Sample ajax query that can be used
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
var ip="localhost/MaxiFair2019"

function remove(){ 
var uid = document.getElementById("uid").value;
    var url = "http://"+ip+"/api.php?action=viewuid&uid="+uid;

    $.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewuid&uid= failed with status " + status + " " + error) ;
		},
		success: function(data){
			var flag = 0;
			var JSONdata = JSON.parse(data);
			JSONdatatoparse = JSONdata;
			console.log("games allocated "+JSONdata.data[0].games_allocated);
            var gameslist = JSONdata.data[0].games_allocated;
            var checklist = document.getElementsByClassName("game");
            console.log(checklist);
            for(var i=0;i<checklist.length;i++){
                (function(i){
                //console.log(checklist[i].value.trim());
                //console.log(checklist[i].checked);
                if(checklist[i].checked == true) {
                    console.log(checklist[i].value.trim());
                    var gamePlayed = checklist[i].value;
                    if(gameslist.includes(gamePlayed))
					{
						lastgame = gamePlayed;
                        var url = "http://"+ip+"/api.php?action=updategame&uid="+uid+"&game="+gamePlayed;
                        console.log("remove: "+url);
                         $.ajax({
                            url: url,
                            error: function(xhr, status, error)
							{
                                console.log("action=updategame&uid failed with status " + status);
                            },
                            success: function(data)
							{
                              console.log(JSON.stringify(data,null,4));
							  var JSONdata = JSONdatatoparse ;
							  console.log("Logging:");
							  console.log(JSONdata);
							  var gameAlt = JSONdata.data[0].games_allocated;
								//window.alert("Alloted games: "+gameAlt);
								var AgameAlt = gameAlt.split("");
								AgameAlt = AgameAlt.sort();
								AgameAlt = AgameAlt.join('');
								//window.alert(": "+ AgameAlt);
								var gamePlayed = JSONdata.data[0].games_played ;
								if(gamePlayed == null)
								{
									gamePlayed = lastgame;
								}
								else
								{
									gamePlayed = gamePlayed + lastgame;
								}	
								var AgamePlayed = gamePlayed.split("");
								AgamePlayed = AgamePlayed.sort();
								AgamePlayed = AgamePlayed.join('');
								//window.alert("Played games: "+ AgamePlayed);
								var gamesLeft = AgameAlt.replace(AgamePlayed,"");
								if(gamesLeft.length == 0)
								{
									alert("Ok Bye");
								}
								else
								{
									gamesLeft = gamesLeft.toLowerCase();
									var queueLength = [];
									for (var i = 0, len = gamesLeft.length; i < len; i++) {
										 queueLength.push(Number(document.getElementById("tent"+gamesLeft.charAt(i)+"current").innerHTML));
									}	
									console.log("queueLength");
									console.log(queueLength);
									//window.alert(queueLength);
									var index = queueLength.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
									console.log("index");
									console.log(index);
									var gameAllocated =(gamesLeft.charAt(index)).toUpperCase();
									gameAllocated = gameAllocated.replace("F", "F1");
									gameAllocated = gameAllocated.replace("G", "F2");
									window.alert(" Next game: "+(gameAllocated));
									addtocurrentqueue(uid,gamesLeft.charAt(index));
								}
								window.location.reload();
                            }
                        });
                    }   
                }    
            })(i);
            }
		}
	});
}

function addParticipant(){
    var uid = document.getElementById("uidB").value;
    var url = "http://"+ip+"/api.php?action=viewuid1&uid="+uid;
    $.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewuid1&uid= Failed with status " + status);
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			//code if call is successfull
            var name = JSONdata.data[0].name;
            var sec = JSONdata.data[0].sec;
            var gameAlt = JSONdata.data[0].games_allocated
            var phn = JSONdata.data[0].phno
            var email = JSONdata.data[0].email
            var profile = JSONdata.data[0].profile
            var json = JSONdata.data[0].json

            
            var url = "http://"+ip+"/api.php?action=addparticipant&uid="+uid+"&name="+name+"&sec="+sec+"&games_allocated="+gameAlt+"&phno="+phn+"&email="+email+"&profile="+profile+"&json="+json;
            $.ajax({
                url: url,
                error: function(xhr, status, error){
                    console.log("action=addparticipant&uid= Failed with status " + status);
                },
                success: function(data){
                    console.log("data");
                    console.log(data);
                    console.log(data.slice(-1));
                    if(data.slice(-1)=="a") {
                        window.alert("Press the Unarchive Button !!!!");
                    }
                    else {
                        gameAlt = gameAlt.toLowerCase();
                        var queueLength = [];
                        for (var i = 0, len = gameAlt.length; i < len; i++) {
                            queueLength.push(Number(document.getElementById("tent"+gameAlt.charAt(i)+"current").innerHTML));
                        }
						console.log("queueLength");
						console.log(queueLength);
                        var index = queueLength.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
						console.log("index");
						console.log(index);
						var gameAllocated =(gameAlt.charAt(index)).toUpperCase();
						gameAllocated = gameAllocated.replace("F", "F1");
						gameAllocated = gameAllocated.replace("G", "F2");
                        window.alert(" First game: "+(gameAllocated));
						addtocurrentqueue(uid,gameAlt.charAt(index));
                    }
                    window.location.reload();
                }
            });
		}
	});
}

function addtocurrentqueue(uid,game){ 
	//window.alert(" Hi from current queue");
	var url = "http://"+ip+"/api.php?action=currentqueue&uid="+uid+"&game="+game;
    console.log("currentqueue: "+url);
                         $.ajax({
                            url: url,
                            error: function(xhr, status, error){
                                console.log("action=currentqueue&uid failed with status " + status);
                            },
                            success: function(data){
                              console.log(JSON.stringify(data,null,4));
                            }
						 });
}

function unarchive(){
    var uid = document.getElementById("uidB").value;
    console.log("Unarchive UID = "+uid);
    var url = "http://"+ip+"/api.php?action=unarchive&uid="+uid;
    console.log("Unarchive "+ url);
    fetch(url,{mode: 'cors'}).then(function(response) {
        return response.json();
        }).then(function(data) {
        console.log("Inside");
        alert(JSON.stringify(data));
        }).catch(function() {
        //alert("ERROR");
        //document.getElementById("output").innerHTML = "ERROR";
        });
        window.location.reload();
        window.location.reload();
        window.location.reload();
}

function archive(){
	
    var uid = document.getElementById("uidB").value;
	console.log("Archive "+uid);
    var archiveUrl = "http://"+ip+"/api.php?action=archive&uid="+uid;
    console.log("Archive "+ archiveUrl);

    $.ajax({
        url: archiveUrl,
        error: function(xhr, status, error){
            console.log("Failed with status " + status);
        },
        success: function(data){
            var JSONdata = JSON.parse(data);
            
        }
    });
    window.location.reload();
    window.location.reload();
    window.location.reload();

}

function getQueueLength(tentNum){
    var url = "http://"+ip+"/api.php?action=gamequeue&game="+tentNum;
        fetch(url,{mode: 'cors'}).then(function(response) {
        return response.json();
        }).then(function(data) {
            document.getElementById("tent"+tentNum).innerHTML = JSON.stringify(data);
        //document.getElementById("output").innerHTML = "what"+ JSON.stringify(data);
        //alert(JSON.stringify(data,null,4));
        console.log(data);
        }).catch(function() {
        //alert("ERROR");
        //document.getElementById("output").innerHTML = "ERROR";
        console.log("ERROR");
        });
}

function initializeFields(){
	// average time for games
	
	var timea = 0;
	var timeb = 0;
	var timec = 0;
	var timed = 0;
	var timee = 0;
	var timef = 0;
	
	
	function fetchTimeA(){
		var url="http://"+ip+"/api.php?action=gametime&game=a";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timea = text;
			});
		});
	}
	
	function fetchTimeB(){
		var url="http://"+ip+"/api.php?action=gametime&game=b";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timeb = text;
			});
		});
	}
	
	function fetchTimeC(){
		var url="http://"+ip+"/api.php?action=gametime&game=c";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timec = text;
			});
		});
	}
	
	function fetchTimeD(){
		var url="http://"+ip+"/api.php?action=gametime&game=d";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timed = text;
			});
		});
	}
	
	function fetchTimeE(){
		var url="http://"+ip+"/api.php?action=gametime&game=e";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timee = text;
			});
		});
	}
	
	function fetchTimeF(){
		var url="http://"+ip+"/api.php?action=gametime&game=f";
		fetch(url).then(function(response) {
			return response.text().then(function(text) {
				timef = text;
			});
		});
	}
	
	fetchTimeA();
	fetchTimeB();
	fetchTimeC();
	fetchTimeD();
	fetchTimeE();
	fetchTimeF();
		
    var url = "http://"+ip+"/api.php?action=gamequeue&game=a";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tenta").innerHTML = JSONdata.data.length*timea;
					console.log("tenta");
                    console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tenta").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=a";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentacurrent").innerHTML = JSONdata.data.length*timea;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentacurrent").innerHTML = "Error";
					console.log("ERROR");
					});

    var url = "http://"+ip+"/api.php?action=gamequeue&game=b";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentb").innerHTML = JSONdata.data.length*timeb;
					console.log("tentb");
                    console.log(JSONdata);                    
					}).catch(function() {
                    document.getElementById("tentb").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=b";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentbcurrent").innerHTML = JSONdata.data.length*timeb;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentbcurrent").innerHTML = "Error";
					console.log("ERROR");
					});

    var url = "http://"+ip+"/api.php?action=gamequeue&game=c";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentc").innerHTML = JSONdata.data.length*timec;
					console.log("tentc");
                    console.log(JSONdata);                    }).catch(function() {
                    document.getElementById("tentc").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=c";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentccurrent").innerHTML = JSONdata.data.length*timec;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentccurrent").innerHTML = "Error";
					console.log("ERROR");
					});

    var url = "http://"+ip+"/api.php?action=gamequeue&game=d";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentd").innerHTML = JSONdata.data.length*timed;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentd").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=d";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentdcurrent").innerHTML = JSONdata.data.length*timed;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentdcurrent").innerHTML = "Error";
					console.log("ERROR");
					});

    var url = "http://"+ip+"/api.php?action=gamequeue&game=e";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tente").innerHTML = JSONdata.data.length*timee;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tente").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=e";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentecurrent").innerHTML = JSONdata.data.length*timee;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentecurrent").innerHTML = "Error";
					console.log("ERROR");
					});


    var url = "http://"+ip+"/api.php?action=gamequeue&game=f";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentf").innerHTML = JSONdata.data.length*timee;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentf").innerHTML = "Error";
                    console.log("ERROR");
                    });
					
	var url = "http://"+ip+"/api.php?action=currentgamequeue&game=f";
					fetch(url,{mode: 'cors'}).then(function(response) {
					return response.json();
					}).then(function(JSONdata) {
					document.getElementById("tentfcurrent").innerHTML = JSONdata.data.length*timee;
					console.log("tenta");
					console.log(JSONdata);
					}).catch(function() {
					document.getElementById("tentfcurrent").innerHTML = "Error";
					console.log("ERROR");
					});			

	
					
    var url = "http://"+ip+"/api.php?action=gamequeue&game=a";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tentauid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentauid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=a";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentacurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentacurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=b";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tentbuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentbuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=b";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentbcurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentbcurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
					

    var url = "http://"+ip+"/api.php?action=gamequeue&game=c";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tentcuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentcuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=c";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentccurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentccurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=d";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tentduid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentduid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=d";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentdcurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentdcurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=e";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tenteuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tenteuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=e";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentecurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentecurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });


    var url = "http://"+ip+"/api.php?action=gamequeue&game=f";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].played==0){
							var x = document.getElementById("tentfuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentfuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });
	    var url = "http://"+ip+"/api.php?action=currentgamequeue&game=f";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    var UIDs="";
                    for(var i=0;i<JSONdata.data.length;i++){
                        //console.log("played"+JSONdata.data[i].played)
                        if(JSONdata.data[i].queued==1){
							var x = document.getElementById("tentfcurrentuid");
							var option = document.createElement("option");
							option.text = JSONdata.data[i].UID;
							x.add(option);
                            //console.log("uid"+UIDs);
                        }
                    }
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentfcurrentuid").innerHTML = "Error";
                    console.log("ERROR UID Printing");
                    });


    var url = "http://"+ip+"/api.php?action=viewplayed&game=a";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentatotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentatotal").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=viewplayed&game=b";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentbtotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentbtotal").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=viewplayed&game=c";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentctotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentctotal").innerHTML = "Error";
                    console.log("ERROR");
                    });


    var url = "http://"+ip+"/api.php?action=viewplayed&game=d";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentdtotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentdtotal").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=viewplayed&game=e";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentetotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentetotal").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=viewplayed&game=f";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentftotal").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentftotal").innerHTML = "Error";
                    console.log("ERROR");
                    });


     var url = "http://"+ip+"/api.php?action=getConditions";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    
                   for (var i = 0, len = JSONdata.data.length; i < len; i++) {
                   	var element = document.getElementById("button"+JSONdata.data[i].game);
                   		if(JSONdata.data[i].isTentActive == 1){
                            document.getElementById("game"+JSONdata.data[i].game+"Status").innerHTML = "RUNNING";
                            
                            element.style.backgroundColor = "#ff0000"
            				element.value = "STOP";
                   		}else{
                   			document.getElementById("game"+JSONdata.data[i].game+"Status").innerHTML = "STOPPED";
                   			element.style.backgroundColor = "#7FFF00"
            				element.value = "START";
                   		}
                       }
                    
                    }).catch(function() {
                    //document.getElementById("tentgtotal").innerHTML = "Error";
                    console.log("ERROR");
                    });

}

var inactiveTents = []; 
var tentMap = new Map();
tentMap.set("buttona","a");
tentMap.set("buttonb","b");
tentMap.set("buttonc","c");
tentMap.set("buttond","d");
tentMap.set("buttone","e");
tentMap.set("buttonf","f");

function changeTentStatus(btn) {
	
	var answer = window.confirm("Are you sure you want to proceed?");
	if(!answer){
		return;
	}
	var property = document.getElementById(btn);
        var tentStatus = 1;
        var gameTent = tentMap.get(property.id);

        if (property.value == "STOP") {
            property.style.backgroundColor = "#7FFF00"
            property.value = "START";
            tentStatus = 0;
            document.getElementById("game" + gameTent +"Status").innerHTML = "STOPPED";
        }
        else {
            property.style.backgroundColor = "#ff0000"
            property.value = "STOP";
            tentStatus = 1;
            document.getElementById("game" + gameTent +"Status").innerHTML = "RUNNING";
        }

        var url = "http://"+ip+"/api.php?action=updateTentStatus&tentStatus=" + tentStatus + "&game=" + gameTent;
  	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("Call to action=getConditions failed with error: ", xhr.status);
			console.log(url);
		},
		success: function(JSONdata){
			console.log(JSONdata);
		}});

    }

function onloadFunctions(){
    initializeFields();
}
