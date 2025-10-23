/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alexander
 * Created on: Oct 2025
 * This program ...
*/

// variables
let distanceToObjest: number = 0
let xandersNeopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
xandersNeopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // gets distance to object in cm
    basic.clearScreen()
    xandersNeopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    xandersNeopixelStrip.show()
    distanceToObjest = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Centimeters)

    if (distanceToObjest < 10) {
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        xandersNeopixelStrip.show()
    } else {
        xandersNeopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        xandersNeopixelStrip.show()
    }
})
