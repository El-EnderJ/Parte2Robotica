basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # # . .
                . . # . .
                # . # . .
                # . # # #
                # . # . #
                `)
            basic.pause(1000)
            basic.showLeds(`
                . # . # .
                . # . # .
                . . # . .
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.showLeds(`
                # # . . .
                . # . # #
                . # . # #
                . # # # .
                . . . . .
                `)
            basic.pause(1000)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                # . . # .
                # . . # .
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . # # # #
                . # . . #
                . # . . #
                . # # # #
                . # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . # # #
                . . # . .
                . . # . .
                . . # # #
                . . # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . # #
                . . . # .
                . . . # .
                . . . # #
                . . . # #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                . . . . #
                `)
            basic.pause(100)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # # . . .
                . # . . .
                . # . . .
                # # . . .
                # # . . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # . .
                . . # . .
                . . # . .
                # # # . .
                # # # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # .
                # . . # .
                # . . # .
                # # # # .
                # # # # .
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                . # . . #
                . # . . #
                # # # # #
                # # # # #
                `)
            basic.pause(100)
            basic.showLeds(`
                # # # # #
                . . # . .
                . . # . .
                # # # # #
                # # # # #
                `)
        }
    }
})
