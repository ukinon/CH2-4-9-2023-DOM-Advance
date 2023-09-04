let drums = document.querySelectorAll('.drum')

document.querySelector('body').addEventListener('mouseup', function(){
    drums.forEach(function(drums){
        drums.style.filter = "brightness(100%)"
    })
})
document.querySelector('body').addEventListener('keyup', function(){
    drums.forEach(function(drums){
        drums.style.filter = "brightness(100%)"
    })
})

drums.forEach(function(drums){
    drums.addEventListener('mousedown', function(){
        let buttons = this.innerHTML;

        this.style.filter = "brightness(75%)"

        switch(buttons){
            case("w"):
            var audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break;

            case("a"):
            var audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;

            case("s"):
            var audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break;

            case("d"):
            var audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break;
            
            case("j"):
            var audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break;

            case("k"):
            var audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break;

            case("l"):
            var audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break;
        }

    });
})


document.addEventListener('keydown', function(event){
    var key = event.key

    switch(key){
        case 'w':
            var audio = new Audio('./sounds/snare.mp3')
           audio.play()

           document.querySelector('.w').style.filter = "brightness(75%)"
           document.querySelector('.w').style.filter = "brightness(75%)"
           break;

           case 'a':
            var audio = new Audio('./sounds/crash.mp3')
           audio.play()

           document.querySelector('.a').style.filter = "brightness(75%)"
           break;

        case 's':
     var audio = new Audio('./sounds/kick-bass.mp3')
    audio.play()

    document.querySelector('.s').style.filter = "brightness(75%)"
    break;

    case 'd':
        var audio = new Audio('./sounds/tom-1.mp3')
       audio.play()

       document.querySelector('.d').style.filter = "brightness(75%)"
       break;

       case 'j':
        var audio = new Audio('./sounds/tom-2.mp3')
       audio.play()

       document.querySelector('.j').style.filter = "brightness(75%)"
       break;

       case 'k':
        var audio = new Audio('./sounds/tom-3.mp3')
       audio.play()
       
       document.querySelector('.k').style.filter = "brightness(75%)"
       break;

       case 'l':
        var audio = new Audio('./sounds/tom-4.mp3')
       audio.play()

       document.querySelector('.l').style.filter = "brightness(75%)"
       break;
    }
    
});

