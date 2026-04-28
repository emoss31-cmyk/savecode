// story.printCharacterText("This is a E studios game, Z to ready or shoot,")
namespace SpriteKind {
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
let charaval1 = [true, false, false, false, false, false, false, false, false, false, false, false]
let charaval2 = [true, false, false, false, false, false, false, false, false, false, false, false]
tiles.setCurrentTilemap(tilemap`home`)

let p1 = sprites.create(assets.image`Daryl`, SpriteKind.Player1)
tiles.placeOnTile(p1, tiles.getTileLocation(2, 4))
p1.y -= 10
let p2 = sprites.create(assets.image`Daryl`, SpriteKind.Player2)
tiles.placeOnTile(p2, tiles.getTileLocation(7, 4))
p2.y -= 10
let p1ready = false
let p2ready = false
browserEvents.Q.onEvent(browserEvents.KeyEvent.Pressed, function() {
    p1ready = !p1ready
    ready1()
})
function ready1() {
    
    if (p1ready) {
        tiles.setTileAt(tiles.getTileLocation(3, 3), (assets.tile`Check`))
    } else {
        tiles.setTileAt(tiles.getTileLocation(3, 3), (assets.tile`X`))
    }
    if (p1ready == true && p2ready == true) {
        setupmap()
    }
    
    
}
browserEvents.M.onEvent(browserEvents.KeyEvent.Pressed, function () {
    p2ready = !p2ready
    ready2()
})
function ready2() {

    if (p2ready) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), (assets.tile`Check`))
    } else {
        tiles.setTileAt(tiles.getTileLocation(8, 3), (assets.tile`X`))
    }
    if (p1ready == true && p2ready == true) {
        setupmap()
    }


}
let ingame = false
function setupmap() {
    
    tiles.setCurrentTilemap(tilemap`map`)
    ingame = true
    controller.moveSprite(p1)
    p1.ay = 300
    p2.ay = 300
    
}
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function() {
    
    if (ingame) {
        p1.vx = -50
    }
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Released, function () {
    
    
    if (ingame) {
        if (browserEvents.D.isPressed()) {
            p1.vx = 50
        } else {
            p1.vx = 0

        }
    }
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {

    if (ingame) {
        p1.vx = 50
    }
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Released, function () {


    if (ingame) {
        if (browserEvents.A.isPressed()) {
            p1.vx = -50
        } else {
            p1.vx = 0

        }
    }
})
browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, function() {
    
    jump1()
})
function jump1() {
    if (ingame) {
        if (p1.isHittingTile(CollisionDirection.Bottom)) {
            p1.vy = -60
            pause(300)
            p1.vy = 60
        }
        
        
    }
}