// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyBNIfWWD-dsJsLqpsdFSHHmclpPNfgGrDQ",
      authDomain: "pactice-eaecb.firebaseapp.com",
      databaseURL: "https://pactice-eaecb-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "pactice-eaecb",
      storageBucket: "pactice-eaecb.appspot.com",
      messagingSenderId: "144470659321",
      appId: "1:144470659321:web:a9e1c656f600b8ad3f5228",
    
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name")
   document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() { room_name = document.getElementById(room_name).value;

 
firebase.database().ref("/").child(room_name).update({
      purpose:"fire"

});
localStorage.setItem("room_name", room_name); window.location = "kwittermessage.html"; }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

