basic.forever(function () {
	
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playMelody("A G F A G F A G ", 120)
        basic.showString("Fire")
    }
    basic.clearScreen()
})
