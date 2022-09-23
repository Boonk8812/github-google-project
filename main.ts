let _0digit: grove.TM1637 = null
for (let index = 0; index < 4; index++) {
    _0digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P0)
    _0digit.bit(0, 0)
    pins.setAudioPin(AnalogPin.P0)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo3, 0)
            powerbrick.Servo360(powerbrick.Servos.S1, 0)
            Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
            datalogger.log(
            datalogger.createCV("1", 0),
            datalogger.createCV("2", 0),
            datalogger.createCV("2", 0),
            datalogger.createCV("3", 0),
            datalogger.createCV("4", 0),
            datalogger.createCV("5", images.createBigImage(`
                . # # # # # # # # #
                # # # # # # # # # #
                # # # # # # # # # #
                # # # # # # # # # #
                . # # # # # # # # #
                `)),
            datalogger.createCV("6", images.createBigImage(`
                . # # # # # # # # #
                # # # # # # # # # #
                # # # # # # # # # #
                # # # # # # # # # #
                . # # # # # # # # #
                `))
            )
            break;
pins.setAudioPin(AnalogPin.P0)
            pins.digitalWritePin(DigitalPin.P0, 0)
            serial.redirect(
            SerialPin.P0,
            SerialPin.P1,
            BaudRate.BaudRate115200
            )
            serial.writeValue("y", 2)
            serial.writeNumber(0)
            serial.writeLine("5-88")
            serial.redirect(
            SerialPin.USB_TX,
            SerialPin.P8,
            BaudRate.BaudRate115200
            )
            serial.writeNumbers([0, 1])
            control.raiseEvent(
            control.deviceSerialNumber(),
            EventBusValue.MICROBIT_EVT_ANY
            )
            serial.writeNumber(1)
            servos.P0.setAngle(90)
            servos.P0.setAngle(90)
            servos.P0.setAngle(90)
            servos.P0.setAngle(90)
            pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
            pins.servoWritePin(AnalogPin.P0, 180)
            serial.writeNumber(1234567890)
            kitronik_servo_lite.forward()
            break;
serial.writeNumbers([0, 1])
            soroban.showNumber(0)
        }
    }
}
