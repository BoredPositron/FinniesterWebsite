import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyAupYnXBPvjGSjSe8duxF8YSYB-FugQ89w",
    authDomain: "finniester1.firebaseapp.com",
    databaseURL: "https://finniester1-default-rtdb.firebaseio.com",
    projectId: "finniester1",
    appId: "1:65367119678:web:aa6c178b7f1d31f40c3e6f",
  };



const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const button = document.getElementById("submit")
button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Button Pressed");
    signUp();
});


function signUp(){
    const emailId_txt = document.getElementById("email").value
    const name_txt = document.getElementById("name").value
    const phoneNumber_txt = document.getElementById("phone").value
    const message_txt = document.getElementById("message").value
    const requestToken_txt = generateRequestToken()

    set(ref(db,requestToken_txt+"/"), {
        name: name_txt,
        emailId: emailId_txt,
        phoneNumber: phoneNumber_txt,
        message:message_txt,
    }).then(() => {
    console.log("Data Sent!")
    window.location.reload()
    })
    .catch((error) => {
        console.log(error)
    })   
}


function generateRequestToken() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@';

    for (let i = 1; i <= 14; i++) {
        var char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    return pass;
}