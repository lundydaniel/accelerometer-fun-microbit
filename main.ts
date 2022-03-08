let alarm_triggered = false
let z = input.acceleration(Dimension.Z)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        z = input.acceleration(Dimension.Z)
        alarm_triggered = false
        basic.clearScreen()
    }
    if (Math.abs(input.acceleration(Dimension.Z) - z) > 160) {
        alarm_triggered = true
        if (alarm_triggered) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
