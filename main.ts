input.onButtonPressed(Button.A, function () {
    radio.sendString("receivedString")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
