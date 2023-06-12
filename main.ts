let timer = 0
let min = 0
let Tid = ""
input.onGesture(Gesture.Shake, function () {
    timer = randint(1, 12)
    min = randint(1, 59)
    Tid = "" + timer + (":" + min)
    basic.showString(Tid)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . #
        . . # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
