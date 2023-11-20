const button = document.getElementById("submit")

function submitForm(email, phoneNumber, issue){
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("phone", phoneNumber)
    sessionStorage.setItem("issue", issue)
    window.location.href = "/html/submitform.html"
    console.log("Submitted")

}

button.addEventListener("click", function(e){
    e.preventDefault
    const emailId = document.getElementById("email").value
    const phoneNumber = document.getElementById("phone").value
    const issue = document.getElementById("issue").value
    submitForm(emailId, phoneNumber, issue)
})