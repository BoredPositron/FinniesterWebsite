import {initializeApp} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import {getDatabase,ref,set} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';
const firebaseConfig = {
    apiKey: "AIzaSyAupYnXBPvjGSjSe8duxF8YSYB-FugQ89w",
    authDomain: "finniester1.firebaseapp.com",
    projectId: "finniester1",
    storageBucket: "finniester1.appspot.com",
    messagingSenderId: "65367119678",
    appId: "1:65367119678:web:cb8719f6696573c10c3e6f",
    measurementId: "G-YG528MSYVS"
  };    
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const animationPath = "/images/animation.json";
const container = document.getElementById('animation-container');

function generateSessionToken(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCode = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomCode += charset[randomIndex];
    }
    return randomCode;
}

function writeData(){
    const email = sessionStorage.getItem("email")
    const phone = sessionStorage.getItem("phone")
    const issue = sessionStorage.getItem("issue")
    const token = generateSessionToken(10)
    set(ref(database, ""+token+"/"),{
        email: email,
        phone: phone,
        issue: issue
    }).then(()=>{
        console.log("successful")
        window.location.href = "/html/home.html"
    }).catch((error)=>{
        alert("Error Occured, Please try again in sometime")
        window.location.href = "/html/contactus.html"
    })
}
// Load the Lottie animation
const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
});

const animationDuration = 7500;

// Set a timeout to ensure the animation stops after the specified duration
setTimeout(() => {
    writeData()
    animation.stop
}, animationDuration);
