let Userinput = ""
let Password = "7"
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        Userinput = "7" + Userinput
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
})
