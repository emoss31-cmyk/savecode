// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "home":
            case "home1":return tiles.createTilemap(hex`0a00080001020202020202020203070c0909090909090c040709090909090909090407090c100909090c100407090a090909090b090407090909090909090904070d0f0f09090d0e0e0408060606060606060605`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath5,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "map":
            case "map1":return tiles.createTilemap(hex`0a0008000000000000000000000000020000020000000000000000000000000002000200000200000000000000000000000000020000000002000000000000000000000000000200000001010101010101010101`, img`
. . . . . . . . . . 
. 2 . . 2 . . . . . 
. . . . . . . . 2 . 
2 . . 2 . . . . . . 
. . . . . . . 2 . . 
. . 2 . . . . . . . 
. . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile9,myTiles.tile10], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "p1podium1":
            case "tile1":return tile1;
            case "p1podium":
            case "tile2":return tile2;
            case "p1podium0":
            case "tile3":return tile3;
            case "coins":
            case "tile4":return tile4;
            case "lineb0":
            case "tile5":return tile5;
            case "linea":
            case "tile6":return tile6;
            case "X":
            case "tile7":return tile7;
            case "Check":
            case "tile8":return tile8;
            case "redpillar":
            case "tile9":return tile9;
            case "myTile0":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
