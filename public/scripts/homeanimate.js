alert("This is an alpha build of the website, please do not share outside of the group")

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++){
      var windowHeight = window.innerHeight;
      var revealTop = reveals[i].getBoundingClientRect().top;
      var revealPoint = 130

      if (revealTop < windowHeight - revealPoint){
          reveals[i].classList.add('active');
          console.log("added")
          console.log(reveals[i])
      }else{
          reveals[i].classList.remove('active');
          console.log("removed")
      }
  }
}


window.addEventListener('scroll', reveal)
