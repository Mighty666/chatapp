const firebaseConfig = {
    apiKey: "AIzaSyAxLQmyaHTNVZj475M9kilvrU391idAGqU",
    authDomain: "chatapp-7c10b.firebaseapp.com",
    databaseURL: "https://chatapp-7c10b-default-rtdb.firebaseio.com",
    projectId: "chatapp-7c10b",
    storageBucket: "chatapp-7c10b.appspot.com",
    messagingSenderId: "1090955708115",
    appId: "1:1090955708115:web:0f3b9e4a853fa07fa8b626"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);



roomnamedata = localStorage.getItem("room");
usernamedata = localStorage.getItem("username1");

function Send(){
    msg = document.getElementById("input3").value;
    firebase.database().ref(roomnamedata).push({
        name:usernamedata,
        message:msg,
        like:0
    });

    document.getElementById("input3").value="";
}

function GetData(){
    firebase.database().ref("/"+roomnamedata).on('value',function(snapshot){
        snapshot.forEach(function (childSnapshot){
        childKey=childSnapshot.key;
        childData=childSnapshot.val();
        if(childKey!="purpose"){
        message_id = childKey;
        message_data = childData;
        message1 = "<h4>"+message_data['message']+"</h4>";
        name123 = "<h4>"+message_data['name']+"</h4>";
        like_button = "<button id="+message_id+" value="+message_data['like']+" onclick='likeButtons(this.id)'>";
        like_button_span = "<span class='glyphicon glyphicon-thumbs-up'>Likes:"+message_data['like']+"</span></button><hr>";
        row=name123+message1+like_button+like_button_span;
        document.getElementById("outputmsg").innerHTML+=row;
        }
        });
    });
}
GetData();

function likeButtons(message_id){
    likes = document.getElementById(message_id).value;
    newlikes = Number(likes)+1;

    firebase.database().ref(roomnamedata).child(message_id).update({
        like:newlikes
    })
}
function logout(){
    localStorage.removeItem("room");
    localStorage.removeItem("username1");
    window.location.replace("index.html");
}
