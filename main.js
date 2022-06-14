function addUser(){
    username=document.getElementById("username").value;
    localStorage.setItem("username1",username);
    window.location="kwitterroom.html";
}