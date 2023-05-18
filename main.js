


var blueCar = document.getElementById('blueCar')
var redCar = document.getElementById('redCar')
var result = document.getElementById('result')
var score = document.getElementById('score')
var game = document.getElementById('game')
var counter = 0


blueCar.addEventListener('animationiteration', function () {
    let random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + 'px'
    counter++
})


window.addEventListener('keydown', function (e) {
    if (e.keyCode == '39') {
        var redCarleft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if (redCarleft < 260) {
            redCar.style.left = (redCarleft + 130) + 'px'
        }
    }
    if (e.keyCode == "37") {
        var redCarleft = parseInt(window.getComputedStyle(redCar).getPropertyValue("left"))
        if (redCarleft > 0) {
            redCar.style.left = (redCarleft - 130) + 'px'

        }
    }

})


setInterval(function GameOver() {
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue('top'))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'))
    var redCarLeft = parseInt(window.getComputedStyle(redCar).getPropertyValue('left'))
    console.log(blueCarLeft)
    if ((blueCarLeft === redCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
        console.log('i here')
        result.style.display = 'block'
        game.style.display = 'none'
        score.innerHTML = `your score is ${counter}`

        counter = 0
    }
},100)

