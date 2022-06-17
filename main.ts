let player: game.LedSprite = null
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    player = game.createSprite(2, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Rayan")
})
