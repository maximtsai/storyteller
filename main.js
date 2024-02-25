let config = {
    type: Phaser.CANVAS,
    scale: {
        parent: 'phaser-app',
        width: 780,
        height: 640,
        autoRound: true,
        mode: Phaser.Scale.FIT
    },
    render: {
        // Leave on to prevent pixelated graphics
        antialias: true,
        roundPixels: true,
    },
    transparent: true,
    parent: 'phaser-app',
    expandParent: true,
    clearBeforeRender: false,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    dom: {
        createContainer: true,
    },
};
// scale: {...
// mode: Phaser.Scale.FIT,
//     autoCenter: Phaser.Scale.CENTER_BOTH,

function isSafariIOS() {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    return iOSSafari;
}

let game;
let canvas;

// console.log(game.canvas);
let gameConsts = {
    width: config.scale.width,
    halfWidth: config.scale.width * 0.5,
    height: config.scale.height,
    halfHeight: config.scale.height * 0.5,
    SDK: null,
    outdoorStartY: 2000,
    shedStartY: 4000
};
let gameVars = {
    gameScale: 1,
    typeWriterOverflow: 0,
    averageDeltaScale: 1,
    gameConstructed: false,
    mousedown: false,
    mouseJustDowned: false,
    mouseposx: 0,
    mouseposy: 0,
    lastmousedown: {x: 0, y: 0},
    timeSlowRatio: 1,
    playerSpeed: 1,
    cameraPosX: -30,
    cameraPosY: 0,
    cameraPosMaxX: 1690,
    cameraPosMinX: -1400,
    cameraPosMaxXInside: 1690,
    cameraPosMinXInside: -1400,
    cameraPosMaxXOutside: 1520,
    cameraPosMinXOutside: -500,
    cameraMoveVel: 0,
    cameraMoveAcc: 0,
    moveSine: 0
};
let gameState = {
    currentScene: 1,
    brunaIntroduced: false,
    juanIntroduced: false,
    EthanIntroduced: false,
    EdithIntroduced: false,
    MaggieIntroduced: false
}
let gameCharacters = {};

// gameState.brunaIntroduced && gameState.butchIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced

let keyPresses = {};
let globalObjsTemp = {
    noPower: false
};
let globalObjects = {};
let PhaserScene = null; // Global
let oldTime = 0;
let deltaScale = 1;
let timeUpdateCounter = 0;
let timeUpdateCounterMax = 5;
let url1 = '';
let url2 = '';
// let url1 = 'crazygames';
// let url2 = '1001juegos';

function fullRestart() {
    if (game) {
        updateManager.removeAllFunctions();
        dialogManager.reset();
        soundList = [];
        dialogDisplay.reset();
        miscSubscribe.reset();
        gameFinal.reset();
        game.destroy(true);
    }
    let oldGameScale = gameVars.gameScale;
    if (!document.location.href.includes(url1) && !document.location.href.includes(url2)) {
        return;
    }
    gameVars = {
        gameScale: oldGameScale,
        typeWriterOverflow: 0,
        averageDeltaScale: 1,
        gameConstructed: false,
        mousedown: false,
        mouseJustDowned: false,
        mouseposx: 0,
        mouseposy: 0,
        lastmousedown: {x: 0, y: 0},
        timeSlowRatio: 1,
        playerSpeed: 1,
        cameraPosX: -30,
        cameraPosY: 0,
        cameraPosMaxX: 1690,
        cameraPosMinX: -1400,
        cameraPosMaxXInside: 1690,
        cameraPosMinXInside: -1400,
        cameraPosMaxXOutside: 1520,
        cameraPosMinXOutside: -500,
        cameraMoveVel: 0,
        cameraMoveAcc: 0,
        moveSine: 0
    };
    gameState = {
        currentScene: 1,
        brunaIntroduced: false,
        juanIntroduced: false,
        EthanIntroduced: false,
        EdithIntroduced: false,
        MaggieIntroduced: false,
        DogSaved: false,
        BrunaSaved: false,
        MaggieSaved: false,
        EdithSaved: false,
        EthanSaved: false,
        JuanSaved: false
    }
    gameCharacters = {};

    globalObjsTemp = {
        noPower: false
    };
    globalObjects = {};
    PhaserScene = null; // Global
    oldTime = 0;
    deltaScale = 1;
    timeUpdateCounter = 0;
    // Rebegin
    game = new Phaser.Game(config); // var canvas = game.canvas;
    canvas = game.canvas;
}

setTimeout(() => {
    fullRestart();
}, 10)


function preload ()
{
    resizeGame();
    let gameDiv = document.getElementById('preload-notice');
    gameDiv.innerHTML = "";
    loadFileList(this, imageFilesPreload, 'image');
}

function resizeGame() {
    return;
    var canvas = game.canvas; //document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;
    var gameScale = 1;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = windowWidth / gameRatio + "px";
        gameScale = windowWidth / game.config.width;
        gameVars.canvasXOffset = 0;
    } else {
        canvas.style.width = windowHeight * gameRatio + "px";
        canvas.style.height = windowHeight + "px";
        gameScale = windowHeight / game.config.height;
        gameVars.canvasXOffset = (windowWidth - game.config.width * gameScale) * 0.5;
    }
    gameVars.gameScale = gameScale;
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
    // setupFPS(scene);
}

let shakingObjects = [];
let shakeCd = 0;
let shakeOffset = 5;

function addToShakeObjects(obj) {
    shakingObjects.push(obj);
}

function setupFPS(scene) {
    globalObjects.fpsBack = scene.add.sprite(30, 28, 'blackPixel').setDepth(10001).setScale(12, 10);
    globalObjects.fpsBack.scrollFactorX = 0; globalObjects.fpsBack.scrollFactorY = 0;
    globalObjects.fps = scene.add.text(20, 20, '0').setDepth(10002);
    globalObjects.fps.scrollFactorX = 0; globalObjects.fps.scrollFactorY = 0;
    gameVars.fpsCount = 0;
    gameVars.elapsedFPS = 0;
}
function update(time, delta) {
    // if (globalObjects.fps) {
    //     gameVars.fpsCount++;
    //     gameVars.elapsedFPS += delta;
    //     if (gameVars.fpsCount >= 60) {
    //         let fps = 60000 / gameVars.elapsedFPS;
    //         globalObjects.fps.setText(Math.floor(fps))
    //         gameVars.fpsCount = 0;
    //         gameVars.elapsedFPS = 0;
    //     }
    // }
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

    if (globalObjsTemp.rainBackground && gameVars.updateRain && gameVars.updateRainCounter <= 0) {
        gameVars.updateRainCounter = 8;
        let xOffset = 0;
        if (gameState.isOutdoors) {
            xOffset = 10;
        }
        globalObjsTemp.rainBackground.x = xOffset + gameConsts.halfWidth + (Math.random() - 0.5) * 100;
        globalObjsTemp.rainBackground.y = gameConsts.halfHeight + (Math.random() - 0.6) * 300;
        globalObjsTemp.rainForeground.x = xOffset + gameConsts.halfWidth + (Math.random() - 0.5) * 100;
        globalObjsTemp.rainForeground.y = gameConsts.halfHeight + (Math.random() - 0.6) * 300;
    } else if (gameVars.updateRain) {
        globalObjsTemp.rainBackground.y += deltaScale * 25;
        globalObjsTemp.rainForeground.y += deltaScale * 30;
        gameVars.updateRainCounter -= deltaScale;
    }


    if (PhaserScene.cameras && PhaserScene.cameras.main.shakeAmt) {

        let randAngle = Math.PI * 2 * Math.random();
        let xShift = PhaserScene.cameras.main.shakeAmt * 2 * Math.sin(randAngle);
        let yShift = PhaserScene.cameras.main.shakeAmt * Math.cos(randAngle);

        let finalShiftX = xShift - PhaserScene.cameras.main.xAway * 0.05 * deltaScale;
        let finalShiftY = yShift - PhaserScene.cameras.main.yAway * 0.05 * deltaScale;

        PhaserScene.cameras.main.scrollX += finalShiftX;
        PhaserScene.cameras.main.scrollY += finalShiftY;
        PhaserScene.cameras.main.xAway += finalShiftX;
        PhaserScene.cameras.main.yAway += finalShiftY;
    } else if (PhaserScene.cameras.main.xAway) {
        let shiftAmt = 0.005 + 0.02 * deltaScale;
        PhaserScene.cameras.main.scrollX -= PhaserScene.cameras.main.xAway * shiftAmt;
        PhaserScene.cameras.main.scrollY -= PhaserScene.cameras.main.yAway * shiftAmt;
        PhaserScene.cameras.main.xAway *= 1 - shiftAmt;
        PhaserScene.cameras.main.yAway *= 1 - shiftAmt;
        if (Math.abs(PhaserScene.cameras.main.xAway) < 0.1) {
            PhaserScene.cameras.main.scrollX = Math.floor(PhaserScene.cameras.main.scrollX);
            PhaserScene.cameras.main.scrollY = Math.floor(PhaserScene.cameras.main.scrollY);
            PhaserScene.cameras.main.xAway = 0;
            PhaserScene.cameras.main.yAway = 0;
        }
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
