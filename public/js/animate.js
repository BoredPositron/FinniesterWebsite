function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 120

        if (revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
            console.log("added")
        }else{
            reveals[i].classList.remove('active');
            console.log("removed")
        }
    }
}


window.addEventListener('scroll', reveal)