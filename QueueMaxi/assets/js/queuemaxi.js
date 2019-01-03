//MaxiFair 2019
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
var ip="10.10.20.89"

function remove(){ 
var uid = document.getElementById("uid").value;
    var url = "http://"+ip+"/api.php?action=viewuid&uid="+uid;

    $.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewuid&uid= failed with status " + status + " " + error) ;
		},
		success: function(data){
			var JSONdata = JSON.parse(data);
			console.log("games allocated "+JSONdata.data[0].games_allocated);
            var gameslist = JSONdata.data[0].games_allocated;
            var checklist = document.getElementsByClassName("game");
            for(var i=0;i<checklist.length;i++){
                (function(i){
                //console.log(checklist[i].value.trim());
                //console.log(checklist[i].checked);
                if(checklist[i].checked == true) {
                    console.log(checklist[i].value.trim());
                    var gamePlayed = checklist[i].value;
                    if(gameslist.includes(gamePlayed)){
                        
                        var url = "http://"+ip+"/api.php?action=updategame&uid="+uid+"&game="+gamePlayed;
                        console.log("remove: "+url);
                         $.ajax({
                            url: url,
                            error: function(xhr, status, error){
                                console.log("action=updategame&uid failed with status " + status);
                            },
                            success: function(data){
                              console.log(JSON.stringify(data,null,4));
                            }
                        });         
                    }   
                }    
            })(i);
            }
        window.location.reload();
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

            //not sure about the this alternative implementaion, please check if this is equivalent
            var url = "http://"+ip+"/api.php?action=addparticipant&uid="+uid+"&name="+name+"&sec="+sec+"&games_allocated="+gameAlt+"&phno="+phn+"&email="+email+"&profile="+profile+"&json="+json;
            $.ajax({
                url: url,
                error: function(xhr, status, error){
                    console.log("action=addparticipant&uid= Failed with status " + status);
                },
                success: function(data){
                    
                    console.log(data.slice(-1));
                    if(data.slice(-1)=="a") {
                        window.alert("Press the Unarchive Button !!!!");
                    }
                    else {
                        gameAlt = gameAlt.toLowerCase();
                        var queueLength = [];
                        for (var i = 0, len = gameAlt.length; i < len; i++) {
                            queueLength.push(document.getElementById("tent"+gameAlt.charAt(i)).innerHTML);
                        }
                        var index = queueLength.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
                        window.alert(" First game: "+(gameAlt.charAt(index)).toUpperCase());
                    }
                    window.location.reload();
                }
            });
		}
	});
	$.ajax({
		url: url,
		error: function(xhr, status, error){
			console.log("action=viewuid2= Failed with status " + status);
		},
		success: function(data2){
			var JSONdata = JSON.parse(data2);
			//code if call is successfull
            var gameA = JSONdata.data2[0].time;
            var gameB = JSONdata.data2[1].time;
            var gameC = JSONdata.data2[2].time;
            var gameD = JSONdata.data2[3].time;
            var gameE = JSONdata.data2[4].time;
            var gameF = JSONdata.data2[5].time; 
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
    var url = "http://"+ip+"/api.php?action=gamequeue&game=a";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tenta").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tenta").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=b";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentb").innerHTML = JSONdata.data.length;
                    //console.log("hello");
                    }).catch(function() {
                    document.getElementById("tentb").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=c";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentc").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentc").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=d";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentd").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentd").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=e";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tente").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tente").innerHTML = "Error";
                    console.log("ERROR");
                    });

    var url = "http://"+ip+"/api.php?action=gamequeue&game=f";
                    fetch(url,{mode: 'cors'}).then(function(response) {
                    return response.json();
                    }).then(function(JSONdata) {
                    document.getElementById("tentf").innerHTML = JSONdata.data.length;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentf").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tentauid").innerHTML = UIDs;
					
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentauid").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tentbuid").innerHTML = UIDs;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentbuid").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tentcuid").innerHTML = UIDs;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentcuid").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tentduid").innerHTML = UIDs;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentduid").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tenteuid").innerHTML = UIDs;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tenteuid").innerHTML = "Error";
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
                            UIDs=UIDs + JSONdata.data[i].UID + ", ";
                            //console.log("uid"+UIDs);
                        }
                    }
                    document.getElementById("tentfuid").innerHTML = UIDs;
                    //console.log(JSONdata);
                    }).catch(function() {
                    document.getElementById("tentfuid").innerHTML = "Error";
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

}

function onloadFunctions(){
    initializeFields();
}