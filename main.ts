namespace SpriteKind {
    export const prop = SpriteKind.create()
    export const interaction = SpriteKind.create()
    export const pedistalButtonOne = SpriteKind.create()
    export const cubeOne = SpriteKind.create()
    export const ui = SpriteKind.create()
    export const portalGun = SpriteKind.create()
    export const bluePortal = SpriteKind.create()
    export const blueBullet = SpriteKind.create()
    export const orangeBullet = SpriteKind.create()
    export const orangePortal = SpriteKind.create()
}
function controlSceme (num: number) {
    if (num == 1) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.W,
        Keybinds.CustomKey.S,
        Keybinds.CustomKey.A,
        Keybinds.CustomKey.D,
        Keybinds.CustomKey.Q,
        Keybinds.CustomKey.E
        )
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.TWO,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.R,
        Keybinds.CustomKey.N
        )
    }
    if (num == 2) {
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.ONE,
        Keybinds.CustomKey.UP,
        Keybinds.CustomKey.DOWN,
        Keybinds.CustomKey.LEFT,
        Keybinds.CustomKey.RIGHT,
        Keybinds.CustomKey.Z,
        Keybinds.CustomKey.X
        )
        Keybinds.setSimulatorKeymap(
        Keybinds.PlayerNumber.TWO,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.N,
        Keybinds.CustomKey.C,
        Keybinds.CustomKey.N
        )
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    ButtonTwo = false
    level = 99
    Render.setViewAngleInDegree(90)
    tiles.setTileAt(location, assets.tile`myTile24`)
    sprites.destroyAllSpritesOfKind(SpriteKind.cubeOne)
    scene.cameraShake(2, 1000)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    tiles.setWallAt(tiles.getTileLocation(11, 9), true)
    timer.after(1000, function () {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        scene.cameraShake(3, 2000)
        tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile15`)
        timer.after(200, function () {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.LoopingInBackground)
            tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile17`)
            timer.after(200, function () {
                tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile18`)
                timer.after(200, function () {
                    tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`cellingTile1`)
                    timer.after(1000, function () {
                        tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile23`)
                        timer.after(200, function () {
                            tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile22`)
                            timer.after(200, function () {
                                tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile21`)
                                timer.after(200, function () {
                                    music.stopAllSounds()
                                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                                    tiles.setTileAt(tiles.getTileLocation(11, 9), assets.tile`myTile1`)
                                    timer.after(3000, function () {
                                        game.setGameOverMessage(true, "Yay!")
                                        game.gameOver(true)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
events.spriteEvent(SpriteKind.Player, SpriteKind.orangePortal, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(spriteutils.isDestroyed(bluePortalSprite)) && bluePortalSprite) {
        if (portaling) {
            portaling = false
        } else {
            portaling = true
            tiles.placeOnTile(sprite, bluePortalSprite.tilemapLocation())
        }
    }
})
sprites.onOverlap(SpriteKind.pedistalButtonOne, SpriteKind.interaction, function (sprite, otherSprite) {
    pedistalButtonPressed(1)
    sprite.setKind(SpriteKind.prop)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
    sprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 3 2 7 7 . . . . . 
        . . . . . 7 3 2 2 2 7 . . . . . 
        . . . . . 7 2 2 2 2 7 . . . . . 
        . . . . . 7 7 2 2 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 4 7 7 4 7 . . . . . 
        . . . . . 7 4 7 7 4 7 . . . . . 
        . . . . . 7 4 7 7 4 7 . . . . . 
        . . . . c 7 7 7 7 7 7 c . . . . 
        . . . c c c c c c c c c c . . . 
        . . . c c . . c c . . c c . . . 
        . . . . . . . c c . . . . . . . 
        `)
    timer.after(2000, function () {
        sprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 3 2 7 7 . . . . . 
            . . . . . 7 3 2 2 2 7 . . . . . 
            . . . . . 7 2 2 2 2 7 . . . . . 
            . . . . . 7 7 2 2 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . c 7 7 7 7 7 7 c . . . . 
            . . . c c c c c c c c c c . . . 
            . . . c c . . c c . . c c . . . 
            . . . . . . . c c . . . . . . . 
            `)
        sprite.setKind(SpriteKind.pedistalButtonOne)
    })
})
function pedistalButtonPressed (num: number) {
    if (level == 1) {
        summmonCubeSprite(1, 2, 2, true)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hasPortalGun) {
        portalBulletSprite = sprites.create(img`
            3 3 
            3 3 
            `, SpriteKind.orangeBullet)
        portalBulletSprite.setPosition(playerSprite.x, playerSprite.y)
        portalBulletSprite.setVelocity(Render.getAttribute(Render.attribute.dirX) * 250, Render.getAttribute(Render.attribute.dirY) * 250)
    }
})
sprites.onOverlap(SpriteKind.interaction, SpriteKind.portalGun, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    otherSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c a a a a a c . . . . . 
        . . . . c c c 7 c c c . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        . . . . . . c 7 c . . . . . . . 
        `)
    hasPortalGun = true
    mySprite = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ..................................................................................................................ff............................................
        ...................................................................................................................ff...........................................
        .....................................................................................................................f..........................................
        ......................................................................................................................f.........................................
        ......................................................................................................................f................ff.......................
        .......................................................................................................................f................f.......................
        .......................................................................................................................f.................f......................
        .......................................................................................................................1111111............f.....................
        ...................................................................................................................1111111111111...........f....................
        ..................................................................................................................111111111111111..........f....................
        .................................................................................................................11111111111111111aaa......f....................
        ................................................................................................................11111111ccccccccccaaaaa....f....................
        ..............................................................................................................1111111cccffffffffffcccaaaa..f....................
        ..............................................................................................................111111cfffffffffffffffcaaaaaff....................
        ............................................................................................................aaa111ccffffffffffffffffccaaaaaa....................
        ...........................................................................................................aaaaa11cffffffffffffffffffcaaaaaa....................
        ...........................................................................................................aaaaaacfffffffffffffffffffccaaaaa....................
        ..........................................................................................................aaaaaaacffffffffffffffffffffcaaaaa....................
        ................................................................................................ff........aaaaaacfffffffffffffffffffffcaaaaa....................
        .................................................................................................f........aaaaaacffffffffffffffffffff1caaaaa....................
        .................................................................................................f........aaaaaacfffffffffffffffff4441aaaaaa....................
        .................................................................................................f........aaaaaacfffffffffffff444444441aaaaa....................
        .................................................................................................ff.......aaaaaacfffffffff4444333344441aaaaa....................
        ..................................................................................................ff......aaaaaacfffffff4443333333444441aaa.....................
        ...................................................................................................ff.....aaaaaacc1f44444333333333344441aaa.....................
        ....................................................................................................fff...aaaaaacc14444444333333333444441a......................
        ......................................................................................................ffffaaaaaaccc14444443333333333444441......................
        ..........................................................................................................aaaaaaaccc1444444333333333344441......................
        ..........................................................................................................aaaaaaaccc14444443333333333344441.....................
        ..........................................................................................................aaaaaaacccc1444443333333333344441.....................
        ..........................................................................................................aaaaaaaccccc1444433333333333344441....................
        ..........................................................................................................aaaaaaaccccc1444443333333333334441....................
        ..........................................................................................................aaaaaaacccccc1444433333333333344441aaaa...............
        ..........................................................................................................aaaaaaacccccc144443333333aaaaaaaaaaaaaaaa.............
        ...........................................................................................................aaaaaaacccccc14444333aaaffaaaaaaaaaaaaaaaaaa.........
        ............................................................................................................aaaaaaccccccc1444333aafafffaaaaaaaaaaaaaaaaaa.......
        ............................................................................................................aaaaaaacccccc144443aaaaaaaffaaaaaaaaaaaaaaaaaaa.....
        ..............................................................................................................aaaaaccccccc1444aaaaaaaaaafaaaaaaaaaaaaaaaaaaa....
        ................................................................................................................aaaaaccccc4144aaaaaaaaaaafaaaaaaaaaaaaaaaaaaaa..
        ....................................................................................................................ccccccc14aaaaaaaaaaaaafaaaaaaaaaaaaaaaaaaaa.
        ....................................................................................................................cccccccc1aaaaaaaaaaaaafaaaaaaaaaaaaaaaaaaaaa
        .....................................................................................................................cccccccaaaaaaaaaaaaaaafffffffffaaaaaaaaaaaa
        .....................................................................................................................ccccccaaaaaaaaaaaaaaffcccccccccffaaaaaaaaaa
        ......................................................................................................................cccccaaaaaaaaaaaaafcccccccccccccfaaaaaaaaa
        .......................................................................................................................cccaaaaaaaaaaaaafcccccccccccccccfaaaaaaaa
        ........................................................................................................................ccaaaaaaaaaaaafcccccccccccccccccfaaaaaaa
        .........................................................................................................................caaaaaaaaaaafcccccccccccccccccccfaaaaaa
        .........................................................................................................................aaaaaaaaaaaafccccccccc999cccccccfaaaaaa
        .........................................................................................................................aaaaaaaaaaafccccccc99999999ccccccfaaaaa
        .........................................................................................................................aaaaaaaaaaafccccccc999999999cccccfaaaaa
        .........................................................................................................................aaaaaaaaaaafcccccc99999999999ccccfaaaaa
        .........................................................................................................................aaaaaaaaaaafcccccc99999999999ccccfaaaaa
        .........................................................................................................................aaaaaaaaaaafcccccc999999999999cccfaaaaa
        ........................................................................................................................aaaaaaaaaaaafcccccc999999999999cccfaaaaa
        ........................................................................................................................aaaaaaaaaaaafcccccc999999999999cccfaaaaa
        ........................................................................................................................aaaaaaaaaaaafccccccc99999999999cccfaaaaa
        ........................................................................................................................aaaaaaaaaaaafccccccc9999999999ccccfaaaaa
        ........................................................................................................................aaaaaaaaaaaaafccccccc999cccccccccfaaaaaa
        ........................................................................................................................aaaaaaaaaaaaafcccccccccccccccccccfaaaaaa
        ........................................................................................................................aaaaaaaaaaaaaafcccccccccccccccccfaaaaaaa
        ........................................................................................................................aaaaaaaaaaaaaaafcccccccccccccccfaaaaaaaa
        ........................................................................................................................aaaaaaaaaaaaaaaafcccccccccccccfaaaaaaaaa
        .........................................................................................................................aaaaaaaaaaaaaaaaffcccccccccffaaaaaaaaaa
        .........................................................................................................................aaaaaaaaaaaaaaaaaaffffffffffaaaaaaaaaaa
        .........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaaaa
        .........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaaa
        ..........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaa
        ..........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaa
        ..........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaaa
        ..........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaaa
        ...........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaa
        ...........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaaa
        ...........................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaaa
        ............................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaa
        .............................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaa
        .............................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaa
        .............................................................................................................................aaaaaaaaaaaaaaaaaaaaaaaaaaaaaafaaaa
        `, SpriteKind.ui)
    mySprite.setFlag(SpriteFlag.RelativeToCamera, true)
})
function summmonCubeSprite (num: number, col: number, row: number, fall: boolean) {
    if (num == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.cubeOne)
        cubeSpriteOne = sprites.create(img`
            c c c c c c c c 
            c 1 7 1 1 7 1 c 
            c 7 9 9 9 9 7 c 
            c 1 9 1 1 9 1 c 
            c 1 9 1 1 9 1 c 
            c 7 9 9 9 9 7 c 
            c 1 7 1 1 7 1 c 
            c c c c c c c c 
            `, SpriteKind.cubeOne)
        tiles.placeOnTile(cubeSpriteOne, tiles.getTileLocation(col, row))
        cubeSpriteOne.fx = 100
        cubeSpriteOne.fy = 100
        if (fall) {
            cubeSpriteOne.setKind(SpriteKind.prop)
            Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 5000)
            timer.after(100, function () {
                Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 4500)
                timer.after(100, function () {
                    Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 4000)
                    timer.after(100, function () {
                        Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 3000)
                        timer.after(100, function () {
                            Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 2000)
                            timer.after(100, function () {
                                Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 1000)
                                timer.after(100, function () {
                                    Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, 0)
                                    timer.after(100, function () {
                                        Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, -500)
                                        cubeSpriteOne.setKind(SpriteKind.cubeOne)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        } else {
            Render.setSpriteAttribute(cubeSpriteOne, RCSpriteAttribute.ZPosition, -500)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hasPortalGun) {
        portalBulletSprite = sprites.create(img`
            9 9 
            9 9 
            `, SpriteKind.blueBullet)
        portalBulletSprite.setPosition(playerSprite.x, playerSprite.y)
        portalBulletSprite.setVelocity(Render.getAttribute(Render.attribute.dirX) * 250, Render.getAttribute(Render.attribute.dirY) * 250)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (holdingCubeOne) {
        holdingCubeOne = false
        summmonCubeSprite(1, 1, 1, false)
        cubeSpriteOne.setPosition(playerSprite.x, playerSprite.y)
        cubeSpriteOne.setVelocity(Render.getAttribute(Render.attribute.dirX) * 80, Render.getAttribute(Render.attribute.dirY) * 80)
    } else {
        interactionSprite = sprites.create(img`
            f f f 
            f f f 
            f f f 
            `, SpriteKind.interaction)
        interactionSprite.lifespan = 1000
        interactionSprite.setPosition(playerSprite.x, playerSprite.y)
        interactionSprite.setVelocity(Render.getAttribute(Render.attribute.dirX) * 60, Render.getAttribute(Render.attribute.dirY) * 60)
        interactionSprite.setFlag(SpriteFlag.DestroyOnWall, true)
        Render.setSpriteAttribute(interactionSprite, RCSpriteAttribute.ZPosition, 9000)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    buttonOne = true
})
function doorOpen (bool: boolean, col: number, row: number) {
    if (bool) {
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile`)
        tiles.setWallAt(tiles.getTileLocation(col, row), false)
    } else {
        tiles.setWallAt(tiles.getTileLocation(col, row), true)
        tiles.setTileAt(tiles.getTileLocation(col, row), assets.tile`myTile1`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    ButtonTwo = true
})
function loadLevel (num: number) {
    level = num
    if (num == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        Render.setCeilingTilemap(tilemap`level4`)
        buttonSprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 7 7 7 7 . . . . . . 
            . . . . . 7 7 3 2 7 7 . . . . . 
            . . . . . 7 3 2 2 2 7 . . . . . 
            . . . . . 7 2 2 2 2 7 . . . . . 
            . . . . . 7 7 2 2 7 7 . . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . . 7 9 7 7 9 7 . . . . . 
            . . . . c 7 7 7 7 7 7 c . . . . 
            . . . c c c c c c c c c c . . . 
            . . . c c . . c c . . c c . . . 
            . . . . . . . c c . . . . . . . 
            `, SpriteKind.pedistalButtonOne)
        Render.setSpriteAttribute(buttonSprite, RCSpriteAttribute.ZPosition, -900)
        tiles.placeOnTile(buttonSprite, tiles.getTileLocation(1, 3))
        portalGunStatue = sprites.create(img`
            . . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . f f f 
            . . . . . . . . . . . . . . f . . . 
            . . . b b b . . . . . b b f . . . . 
            . b b 7 7 b . . b b b 7 b . . . . . 
            b 7 7 7 7 b 9 9 b 7 7 7 b f f . . . 
            b 7 7 7 7 b 3 3 b 7 7 7 b . . . . . 
            b 7 7 7 7 b . . b 7 7 7 b f . . . . 
            b b b b b b . . b b b b . . f . . . 
            . . . . c c c c c c c . . . . f f f 
            . . . . c a a a a a c . . . . . . . 
            . . . . c c c 7 c c c . . . . . . . 
            . . . . . . c 7 c . . . . . . . . . 
            . . . . . . c 7 c . . . . . . . . . 
            . . . . . . c 7 c . . . . . . . . . 
            . . . . . . c 7 c . . . . . . . . . 
            `, SpriteKind.portalGun)
        tiles.placeOnTile(portalGunStatue, tiles.getTileLocation(5, 8))
        Render.setSpriteAttribute(portalGunStatue, RCSpriteAttribute.ZPosition, -900)
    }
}
scene.onOverlapTile(SpriteKind.cubeOne, assets.tile`myTile4`, function (sprite, location) {
    buttonOne = true
})
events.tileEvent(SpriteKind.Player, assets.tile`myTile2`, events.TileEvent.Enters, function (sprite) {
    game.setGameOverMessage(false, "Pitfall")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.interaction, SpriteKind.cubeOne, function (sprite, otherSprite) {
    holdingCubeOne = true
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.cubeOne, assets.tile`myTile3`, function (sprite, location) {
    ButtonTwo = true
})
scene.onHitWall(SpriteKind.orangeBullet, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile0`)) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.orangePortal)
        orangePortalSprite = sprites.create(img`
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . 4 3 3 3 3 3 3 4 . . . . 
            . . . 4 3 f f f f f f 3 4 . . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . 4 3 f f f f f f f f 3 4 . . 
            . . . 4 3 f f f f f f 3 4 . . . 
            . . . . 4 3 3 3 3 3 3 4 . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            `, SpriteKind.orangePortal)
        tiles.placeOnTile(orangePortalSprite, sprite.tilemapLocation())
        sprites.destroy(sprite)
    }
})
events.spriteEvent(SpriteKind.Player, SpriteKind.bluePortal, events.SpriteEvent.StartOverlapping, function (sprite, otherSprite) {
    if (!(spriteutils.isDestroyed(orangePortalSprite)) && orangePortalSprite) {
        if (portaling) {
            portaling = false
        } else {
            portaling = true
            tiles.placeOnTile(sprite, orangePortalSprite.tilemapLocation())
        }
    }
})
scene.onHitWall(SpriteKind.blueBullet, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile0`)) {
        music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
        sprites.destroyAllSpritesOfKind(SpriteKind.bluePortal)
        bluePortalSprite = sprites.create(img`
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . 6 9 9 9 9 9 9 6 . . . . 
            . . . 6 9 f f f f f f 9 6 . . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . 6 9 f f f f f f f f 9 6 . . 
            . . . 6 9 f f f f f f 9 6 . . . 
            . . . . 6 9 9 9 9 9 9 6 . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            `, SpriteKind.bluePortal)
        tiles.placeOnTile(bluePortalSprite, sprite.tilemapLocation())
        sprites.destroy(sprite)
    }
})
function tickMechinsums () {
    if (level == 1) {
        if (buttonOne) {
            tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`myTile11`)
            tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile12`)
            tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`myTile10`)
            doorOpen(true, 3, 6)
        } else {
            tiles.setTileAt(tiles.getTileLocation(4, 4), assets.tile`myTile8`)
            tiles.setTileAt(tiles.getTileLocation(3, 4), assets.tile`myTile6`)
            tiles.setTileAt(tiles.getTileLocation(3, 5), assets.tile`myTile7`)
            doorOpen(false, 3, 6)
        }
        if (ButtonTwo) {
            doorOpen(true, 11, 9)
            tiles.setTileAt(tiles.getTileLocation(11, 10), assets.tile`myTile10`)
            tiles.setTileAt(tiles.getTileLocation(11, 11), assets.tile`myTile10`)
        } else {
            doorOpen(false, 11, 9)
            tiles.setTileAt(tiles.getTileLocation(11, 10), assets.tile`myTile7`)
            tiles.setTileAt(tiles.getTileLocation(11, 11), assets.tile`myTile7`)
        }
    }
    buttonOne = false
    ButtonTwo = false
}
let orangePortalSprite: Sprite = null
let portalGunStatue: Sprite = null
let buttonSprite: Sprite = null
let buttonOne = false
let interactionSprite: Sprite = null
let cubeSpriteOne: Sprite = null
let mySprite: Sprite = null
let portalBulletSprite: Sprite = null
let hasPortalGun = false
let portaling = false
let bluePortalSprite: Sprite = null
let level = 0
let ButtonTwo = false
let holdingCubeOne = false
let playerSprite: Sprite = null
playerSprite = Render.getRenderSpriteVariable()
Render.setSpriteAttribute(playerSprite, RCSpriteAttribute.ZPosition, 600)
controlSceme(2)
Render.moveWithController(2, 3, 1)
loadLevel(1)
let cubeUI = sprites.create(img`
    ..ccccc..ccccc..ccccc..
    .c77777cc77777cc77777c.
    c7777777bb777bb7777777c
    c7777777bbb9bbb7777777c
    c7777777bbb9bbb7777777c
    c777777bbbb9bbbb777777c
    c77777bbbbb9bbbbb77777c
    .c777bbbbbb9bbbbbb777c.
    .cbbbbbbb77777bbbbbbbc.
    c7bbbbbb7779977bbbbbb7c
    c77bbbbb7997977bbbbb77c
    c779999979777979999977c
    c77bbbbb7797997bbbbb77c
    c7bbbbbb7799777bbbbbb7c
    .cbbbbbbb77777bbbbbbbc.
    .c777bbbbbb9bbbbbb777c.
    c77777bbbbb9bbbbb77777c
    c777777bbbb9bbbb777777c
    c7777777bbb9bbb7777777c
    c7777777bbb9bbb7777777c
    c7777777bb777bb7777777c
    .c77777cc77777cc77777c.
    ..ccccc..ccccc..ccccc..
    `, SpriteKind.ui)
cubeUI.setPosition(15, 105)
cubeUI.setFlag(SpriteFlag.RelativeToCamera, true)
spriteutils.onSpriteUpdateInterval(cubeUI, 100, function (sprite) {
    if (holdingCubeOne) {
        cubeUI.setImage(img`
            ..ccccc..ccccc..ccccc..
            .c77777cc77777cc77777c.
            c7777777bb777bb7777777c
            c7777777bbb9bbb7777777c
            c7777777bbb9bbb7777777c
            c777777bbbb9bbbb777777c
            c77777bbbbb9bbbbb77777c
            .c777bbbbbb9bbbbbb777c.
            .cbbbbbbb77777bbbbbbbc.
            c7bbbbbb7779977bbbbbb7c
            c77bbbbb7997977bbbbb77c
            c779999979777979999977c
            c77bbbbb7797997bbbbb77c
            c7bbbbbb7799777bbbbbb7c
            .cbbbbbbb77777bbbbbbbc.
            .c777bbbbbb9bbbbbb777c.
            c77777bbbbb9bbbbb77777c
            c777777bbbb9bbbb777777c
            c7777777bbb9bbb7777777c
            c7777777bbb9bbb7777777c
            c7777777bb777bb7777777c
            .c77777cc77777cc77777c.
            ..ccccc..ccccc..ccccc..
            `)
    } else {
        cubeUI.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
Render.setViewAngleInDegree(90)
game.onUpdate(function () {
    tickMechinsums()
})
