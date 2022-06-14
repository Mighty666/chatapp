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

function addRoom(){
  roomz=document.getElementById("input2").value
  localStorage.setItem("room",roomz);
  firebase.database().ref("/").child(roomz).update({
    purpose:"adding room name"
  })
  window.location="kwitterpage.html";
}
function getData() {
  firebase.database().ref("/").on('value',function(snapshot) {
    document.getElementById("output1").innerHTML ="";
    snapshot.forEach(function(childSnapshot){childKey = childSnapshot.key;
roomz = childKey;
//Start code
console.log("room_name - " + roomz);
row = "<div class='roomname' id="+roomz+" onclick='redirect(this.id)'>#"+roomz+"</div><hr>";
document.getElementById("output1").innerHTML += row;
//End code
});});}
getData();
function redirect(roomsz){
  console.log(roomsz);
  localStorage.setItem("room",roomsz);
  window.location = "kwitterpage.html";
}
function logout() {
  localStorage.removeItem("username1");
  localStorage.removeItem("room");
  window.location = "index.html";
}