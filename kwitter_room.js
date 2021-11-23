//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB9IX9Fck-60qhhAyDNwnUexwsUcxD7Vos",
    authDomain: "kwitter-d8790.firebaseapp.com",
    databaseURL: "https://kwitter-d8790-default-rtdb.firebaseio.com",
    projectId: "kwitter-d8790",
    storageBucket: "kwitter-d8790.appspot.com",
    messagingSenderId: "12055409293",
    appId: "1:12055409293:web:dc7ec8374427a9351ce8c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter_login.html";
}