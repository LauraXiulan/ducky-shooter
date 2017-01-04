//Spawn Ducks
$(document).ready(function() {
    createDucks(25)
})

//Optional additions
var screenWidth = $(document).width()
var screenHeight = $(document).height()

var low = 150
var high = 250

var hitCount = 0
var missCount = 0

function playSound(soundfile) {
  document.getElementById("dummy").innerHTML= "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\"loop=\"false\" />";
}

var span = $('<span id = "dummy"></span>')
span.appendTo('#container')
//End Optional

function createDucks (count) {
    var delay = 0
    var hit = $("<h1>" + "Hits: " + "<span id='hits'>" + 0 + "</span>" + "</h1>")
    for(var i = 0; i < count; i++) {
        var width = Math.floor(Math.random() * (high - low) + low)
        var duck = $('<img src="img/ducky.png" onclick = playSound("duck.mp3")>')
        duck.css({
            position: 'absolute',
            left: 0,
            top: Math.floor(Math.random() * (screenHeight - Math.floor(screenHeight / 5))), //Give random starting position
            width: width
        })
        duck.appendTo('#duck')
        delay = delay + Math.floor(Math.random() * 2000) //Random delays
        var speed = Math.floor(Math.random() * 450) + 100 //Random speed
        duck.hide().delay(delay).show(1).animate({"left": screenWidth}, { //Hide duck on start and show one after random delay
            duration: ($(document).width() / speed * 1000),
            easing: "linear",
            complete: function() {
                $(this).hide()
                // missCount++;
            }
        })
        duck.click(function() {
            // $(this).stop()
            $(this).hide()
            hitCount++;
            hit.appendTo('#container')
            document.getElementById('hits').innerHTML = hitCount
        })
    } 
} 