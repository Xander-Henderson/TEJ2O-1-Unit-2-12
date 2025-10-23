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


