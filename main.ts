basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 55) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
