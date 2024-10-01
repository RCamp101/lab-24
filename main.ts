info.onCountdownEnd(function () {
    Frog.setVelocity(0, 0)
    game.splash("Once upon a time the was a frog.")
    Frog.sayText("My name is " + Proper_Noun)
})
let Frog: Sprite = null
let Proper_Noun = ""
Proper_Noun = game.askForString("Proper Noun")
let Location = game.askForString("Location")
let Adjective = game.askForString("Adjective")
let Noun = game.askForString("Noun")
let AbstractThought = game.askForString("Abstract Thought")
Frog = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
    7 7 7 f f 7 7 7 7 7 7 f f 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 f 7 7 7 7 7 7 7 7 7 7 7 7 f 7 
    7 f f 7 7 7 7 7 7 7 7 7 7 f f 7 
    7 7 f f 7 7 7 7 7 7 7 7 f f 7 7 
    7 7 7 f f f f f f f f f f 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
Frog.setPosition(-10, -10)
Frog.setVelocity(100, 65)
info.startCountdown(1)
