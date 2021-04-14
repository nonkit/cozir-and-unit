input.onButtonPressed(Button.A, function () {
    basic.showString("" + convertToText(Math.round(COZIR.readCo2())) + "ppm")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + convertToText(Math.round(COZIR.readTemp())) + "C")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + convertToText(Math.round(COZIR.readRh())) + "%")
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(500)
