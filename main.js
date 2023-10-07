let config = {
    type: Phaser.CANVAS,
    scale: {
        parent: 'phaser-app',
        width: 720,
        height: 640
    },
    antialias: true,
    transparent: true,
    roundPixels: false,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

function isSafariIOS() {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
}

let game = new Phaser.Game(config); // var canvas = game.canvas;
let gameConsts = {
    width: config.scale.width,
    halfWidth: config.scale.width * 0.5,
    height: config.scale.height,
    halfHeight: config.scale.height * 0.5,
    SDK: null
};
let gameVars = {
    averageDeltaScale: 1,
    gameConstructed: false,
    mousedown: false,
    mouseJustDowned: false,
    mouseposx: 0,
    mouseposy: 0,
    lastmousedown: {x: 0, y: 0},
    timeSlowRatio: 1,
    playerSpeed: 1,
    cameraPosX: 0,
    cameraPosY: 0,
    cameraPosMaxX: 1750,
    cameraPosMinX: -1400,
    cameraMoveVel: 0,
    cameraMoveAcc: 0,
    moveSine: 0
};
let gameState = {
    isSceneOne: true,
    isSceneTwo: false,
    isSceneThree: false,

    brunaIntroduced: false,
    juanIntroduced: false,
    EthanIntroduced: false,
    EdithIntroduced: false

}
let gameCharacters = {};

// gameState.brunaIntroduced && gameState.butchIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced

let keyPresses = {};
let globalObjsTemp = {
    noPower: false
};
let globalObjects = {};
let updateFunctions = {};
let PhaserScene = null; // Global
let oldTime = 0;
let deltaScale = 1;
let timeUpdateCounter = 0;
let timeUpdateCounterMax = 5;

function preload ()
{
    loadFileList(this, imageFilesPreload, 'image');
}

function create ()
{
    oldTime = Date.now();
    PhaserScene = this;
    onPreloadComplete(this);
}

function onPreloadComplete (scene)
{
    setupMouseInteraction(scene);
    setupLoadingBar(scene);

    loadFileList(scene, audioFiles, 'audio');
    loadFileList(scene, imageAtlases, 'atlas');
    loadFileList(scene, imageFiles, 'image');
    loadFileList(scene, fontFiles, 'bitmap_font');

    scene.load.start();
}

function onLoadComplete(scene) {
    initializeSounds(scene);
    setupGame(scene);
}

let shakingObjects = [];
let shakeCd = 0;
let shakeOffset = 3;

function addToShakeObjects(obj) {
    shakingObjects.push(obj);
}

function update(time, delta) {
    // check mouse
    if (timeUpdateCounter >= timeUpdateCounterMax) {
        timeUpdateCounter = 0;
        let newTime = Date.now();
        let deltaTime = newTime - oldTime;
        oldTime = newTime;
        deltaScale = Math.min(5, deltaTime / 100);
    } else {
        timeUpdateCounter++;
    }
    if (shakeCd > 400) {
        shakeCd = 0;
        for (let i = shakingObjects.length - 1; i >= 0; i--) {
            shakingObjects[i].x += shakeOffset;
            if (!shakingObjects[i].active) {
                shakingObjects.splice(i, 1);
            }
        }
        shakeOffset = -shakeOffset;
    } else {
        shakeCd += delta;
    }

    buttonManager.update(deltaScale);
    updateManager.update(deltaScale);
    gameVars.averageDeltaScale = deltaScale * 0.1 + gameVars.averageDeltaScale * 0.9;

    gameVars.mouseJustDowned = false;
    gameVars.mouseJustUpped = false;
    if (!gameVars.wasTouch && !game.input.mousePointer.isDown) {
        gameVars.mousedown = false;
    }
}

function loadFileList(scene, filesList, type) {
    for (let i in filesList) {
        let data = filesList[i];
        let sourceName = data.src;
        switch (type) {
            case 'audio':
                scene.load.audio(data.name, data.src);
                break;
            case 'image':
                scene.load.image(data.name, data.src);
                break;
            case 'bitmap_font':
                scene.load.bitmapFont(data.name, data.imageUrl, data.url);
                break;
            case 'atlas':
                scene.load.multiatlas(data.name, sourceName);
                break;
            default:
                console.warn('unrecognized type: ', type);
                break;
        }
    }
}

function zoomTemp(zoomAmt) {
    PhaserScene.cameras.main.setZoom(zoomAmt);
    PhaserScene.tweens.add({
        targets: PhaserScene.cameras.main,
        zoom: 1,
        ease: "Cubic.easeOut",
        duration: 200
    });
}
