let mainBackground;
let loadingBar;
let loadingText;

function setBackground(atlas, ref) {
    mainBackground.destroy();
    mainBackground = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, atlas, ref);
}

function setupLoadingBar(scene) {
    // Basic loading bar visual
    mainBackground = scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'loading1');
    loadingBarBack = scene.add.image(gameConsts.halfWidth, gameConsts.height - 164, 'blackPixel');
    loadingBarBack.scaleX = 101;
    loadingBarBack.scaleY = 4
    loadingBar = scene.add.image(gameConsts.halfWidth, gameConsts.height - 164, 'whitePixel');
    loadingBar.setAlpha(0.85);
    loadingBarBack.scaleY = 3;

    loadingText = scene.add.text(gameConsts.halfWidth, gameConsts.height - 200, '  DRIVING...');
    loadingText.setTint(0x000000);
    loadingText.setFontSize(28);
    loadingText.setAlign('center');
    loadingText.setOrigin(0.5, 0);
    loadingText.alpha = 0.85;

    // Setup loading bar logic

    scene.load.on('progress', function (value) {
        loadingBar.scaleX = 100 * value;
    });

    scene.load.on('complete', () => {
        setTimeout(() => {
            loadingBar.scaleX = 100;
            scene.tweens.add({
                targets: [loadingText, loadingBar, loadingBarBack],
                alpha: 0,
                duration: 500,
                ease: 'Cubic.easeIn',
                onComplete: () => {
                    loadingText.destroy();
                    loadingBar.destroy();
                    loadingBarBack.destroy();
                    onLoadComplete(scene);
                }
            });
        }, 900);
    });

}



function setupGame() {
    // PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'background');
    createAnimations(PhaserScene)
    globalObjects.optionsButton = new Button({
        normal: {
            "ref": "buttonStart",
            "x": gameConsts.halfWidth,
            "y": gameConsts.height - 180
        },
        hover: {
            "ref": "buttonStart2"
        },
        press: {
            "ref": "buttonStart3"
        },
        onMouseUp: () => {
            runIntroSequence();
        }
    });


    createWorldButtons();
    setupMoveButtons();
    setupDialogManager();
    let dialogDisplay = new DialogDisplay(PhaserScene);
    let miscSubscribe = new MiscSubscribe(PhaserScene);
    setupKeyPresses(PhaserScene);

    initializeMisc();
}

function initializeMisc() {
    globalObjsTemp.songs = {
        235.75: 'slowwalk',
        294.25: 'dabbda',
        356: 'foolrushin_poor',
        386.25: 'guitarboogieshuffle',
        446.75: 'weatherblur',
        506: 'news1'
    };
}

function setupKeyPresses(scene) {
    keyPresses.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyPresses.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyPresses.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyPresses.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    keyPresses.keyEnter = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    keyPresses.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    updateManager.addFunction(tickKeyPresses);
}

function setupMoveButtons() {
    globalObjects.moveLeftBtn = new Button({
        normal: {
            "atlas": "buttons",
            "ref": "move_btn_normal.png",
            "x": 15,
            "y": gameConsts.halfHeight,
            "scaleX": -1
        },
        hover: {
            "atlas": "buttons",
            "ref": "move_btn_over.png"
        },
        press: {
            "atlas": "buttons",
            "ref": "move_btn_press.png"
        },
        disable: {
            "atlas": "buttons",
            "ref": "move_btn_disable.png"
        }
    });
    globalObjects.moveLeftBtn.setDepth(20);
    globalObjects.moveLeftBtn.setState(DISABLE);
    globalObjects.moveLeftBtn.setOnMouseUpFunc(() => {
        if (gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    })


    globalObjects.moveRightBtn = new Button({
        normal: {
            "atlas": "buttons",
            "ref": "move_btn_normal.png",
            "x": gameConsts.width - 15,
            "y": gameConsts.halfHeight,
            "scaleX": 1
        },
        hover: {
            "atlas": "buttons",
            "ref": "move_btn_over.png"
        },
        press: {
            "atlas": "buttons",
            "ref": "move_btn_press.png"
        },
        disable: {
            "atlas": "buttons",
            "ref": "move_btn_disable.png"
        }
    });
    globalObjects.moveRightBtn.setDepth(20);
    globalObjects.moveRightBtn.setState(DISABLE);
    globalObjects.moveRightBtn.setOnMouseUpFunc(() => {
        if (gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    })
}

function tickKeyPresses(deltaScale) {
    if (gameVars.canSkipIntro) {
        if (keyPresses.keySpace.isDown) {
            manualSkipIntro();
        }
    } else if (!gameVars.dialogCanProgress && (keyPresses.keySpace.isUp && keyPresses.keyEnter.isUp)) {
        gameVars.dialogCanProgress = true;
    } else if (gameVars.dialogCanProgress && (keyPresses.keySpace.isDown || keyPresses.keyEnter.isDown)) {
        gameVars.dialogCanProgress = false;
        messageBus.publish('clickNextDialog');
    }

    if (globalObjects.moveLeftBtn.getState() == PRESS) {
        if (gameVars.cameraPosX > gameVars.cameraPosMinX) {
            if (gameVars.cameraMoveAcc > -0.1) {
                gameVars.cameraMoveVel -= 1;
            }
            gameVars.cameraMoveAcc = -0.6;
            gameVars.stickyAcc = 25;

        }
    }
    if (globalObjects.moveRightBtn.getState() == PRESS) {
        if (gameVars.cameraPosX < gameVars.cameraPosMaxX) {
            if (gameVars.cameraMoveAcc < 0.1) {
                gameVars.cameraMoveVel += 1;
            }
            gameVars.cameraMoveAcc = 0.6;
            gameVars.stickyAcc = 25;
        }
    }

    let deltaDecay = (0.3 + 0.7 * deltaScale);

    if (gameVars.cameraMoveAcc != 0) {
        gameVars.cameraMoveVel += gameVars.cameraMoveAcc;
        if (gameVars.stickyAcc <= 0) {
            if (gameVars.cameraMoveAcc > 0) {
                gameVars.cameraMoveAcc = Math.max(0, gameVars.cameraMoveAcc - 0.08 * deltaDecay);
            } else if (gameVars.cameraMoveAcc < 0) {
                gameVars.cameraMoveAcc = Math.min(0, gameVars.cameraMoveAcc + 0.08 * deltaDecay);
            }
        } else {
            gameVars.stickyAcc -= deltaScale
        }
    }

    if (gameVars.cameraMoveVel != 0) {
        let sineMoveMult = Math.min(1, 1 + 0.2 * Math.sin(gameVars.moveSine));
        let outdoorsMoveMult = gameState.isOutdoors ? 0.6 : 1;
        gameVars.moveSine += deltaScale * 0.165 * outdoorsMoveMult;
        gameVars.cameraPosX += gameVars.cameraMoveVel * sineMoveMult * deltaScale * deltaDecay * (outdoorsMoveMult * 0.8 + 0.2);
        if(gameVars.cameraPosX > gameVars.cameraPosMaxX) {
            gameVars.cameraPosX = gameVars.cameraPosMaxX;
            gameVars.cameraMoveVel = 0;
        } else if (gameVars.cameraPosX < gameVars.cameraPosMinX) {
            gameVars.cameraPosX = gameVars.cameraPosMinX;
            gameVars.cameraMoveVel = 0;
        }
        gameVars.cameraMoveVel *= 1 - 0.075 * deltaDecay;
        if (gameVars.cameraMoveVel > 0) {
            gameVars.cameraMoveVel = Math.max(0, gameVars.cameraMoveVel - 0.055 * deltaDecay);
        } else if (gameVars.cameraMoveVel < 0) {
            gameVars.cameraMoveVel = Math.min(0, gameVars.cameraMoveVel + 0.055 * deltaDecay);
        }

        let dampenedSine = Math.sin(gameVars.moveSine);
        if (dampenedSine < -0.5) {
            dampenedSine = -0.5 + 0.5 * dampenedSine;
        } else if (dampenedSine > 0.5) {
            dampenedSine = 0.5 + 0.5 * dampenedSine;
        }
        gameVars.cameraPosY += dampenedSine * 0.6;

        let startY = 0;
        if (gameState.isInShed) {
            startY = gameConsts.shedStartY;
        } else if (gameState.isOutdoors) {
            startY = gameConsts.outdoorStartY;
        }

        let distToStartY = startY - gameVars.cameraPosY;
        gameVars.cameraPosY = startY - distToStartY * 0.8;
        PhaserScene.cameras.main.scrollX = gameVars.cameraPosX;
        PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
        let offsetY = 0
        if (gameState.isInShed) {
            offsetY = gameConsts.shedStartY;
        } else if (gameState.isOutdoors) {
            offsetY = gameConsts.outdoorStartY;
        }
        globalObjects.moveLeftBtn.setPos(15 + gameVars.cameraPosX, gameConsts.halfHeight + offsetY);
        globalObjects.moveRightBtn.setPos(gameConsts.width - 15 + gameVars.cameraPosX, gameConsts.halfHeight + offsetY);

        let radioCenter = 450;
        let distToRadio = radioCenter - gameVars.cameraPosX;
        if (Math.abs(distToRadio) < 220) {
            setRadioPan(0);
        } else {
            let panAmt = 0;
            if (distToRadio > 0) {
                panAmt = Math.min(0.38, (distToRadio - 220) / 1100);
                setRadioPan(panAmt);
            } else {
                panAmt = Math.max(-0.38, (distToRadio + 220) / 1100);
                setRadioPan(panAmt);
            }
        }

    } else {
        gameVars.moveSine = 0;
        let startY = 0;
        if (gameState.isInShed) {
            startY = gameConsts.shedStartY;
        } else if (gameState.isOutdoors) {
            startY = gameConsts.outdoorStartY;
        }
        let distToStartY = startY - gameVars.cameraPosY;
        gameVars.cameraPosY = startY - distToStartY * 0.95;
        PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
    }
}

function manualSkipIntro() {
    gameVars.canSkipIntro = false;
    globalObjsTemp.skipBox.destroy();
    globalObjsTemp.skipText.destroy();
    if (globalObjsTemp.rainForeground) globalObjsTemp.rainForeground.destroy();
    if (globalObjsTemp.outdoorsrain) globalObjsTemp.outdoorsrain.stop();
    globalObjects.indoorRain = playSound('brownnoise', 1, true);
    enterShop();
}

function realGameStart() {
    setBackground('intro', 'diner1.png');
    // 1000
    let bgRain = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'rain.png');
    bgRain.setScale(2, 2);
    bgRain.depth = -2;
    bgRain.scrollFactorX = 0.5;
    let bg1 = PhaserScene.add.image(-987.5, gameConsts.halfHeight, 'backgrounds', 'bg1.png');
    let bg2 = PhaserScene.add.image(12, gameConsts.halfHeight, 'backgrounds', 'bg2.png');
    let bg3 = PhaserScene.add.image(1011.05, gameConsts.halfHeight, 'backgrounds', 'bg3.png');
    let bg4 = PhaserScene.add.image(2011, gameConsts.halfHeight, 'backgrounds', 'bg4.png');
    let fakeBase = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'startFakeBase.png');
    let darkGloom = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(999, 999);
    let fakeBaseOverlay = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'startFakeBaseOverlay.png');
    let time = Date.now();
    console.log("Time log start");
    console.log(Date.now() - time);

    setTimeout(() => {
        console.log(Date.now() - time);

        darkGloom.setAlpha(0.9);
        setTimeout(() => {
            darkGloom.setAlpha(1);
        }, 20);
        setTimeout(() => {
            console.log(Date.now() - time);
            darkGloom.setAlpha(0.85);
            setTimeout(() => {
                console.log(Date.now() - time);
                darkGloom.setAlpha(1);
                setTimeout(() => {
                    console.log(Date.now() - time);
                    darkGloom.setAlpha(0.8);
                    PhaserScene.tweens.add({
                        targets: globalObjects.indoorRain,
                        volume: 0.35,
                        duration: 1000
                    });
                    setTimeout(() => {
                        console.log(Date.now() - time);
                        darkGloom.destroy();
                        fakeBaseOverlay.destroy();
                        fakeBase.destroy();
                        setupCharacters();
                        setRadioMusic('guitarboogieshuffle', 0.75);
                        enableDinerButtons();
                        dialogManager.showDialogNode('intro');
                    }, 200);
                }, 1100);
            }, 20);
        }, 200);
    }, 1100);

    globalObjsTemp.gloom = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(5000, 999).setDepth(8).setAlpha(0);
    globalObjsTemp.gloom.setBlendMode(Phaser.BlendModes.DARKEN);
}


function setupCharacters() {
    gameCharacters.caspar = PhaserScene.add.image(-1132, gameConsts.halfHeight + 120, 'characters', 'caspar1.png').setDepth(11);
    gameCharacters.bruna = PhaserScene.add.image(-614, gameConsts.halfHeight + 134, 'characters', 'bruna1.png').setDepth(11);
    gameCharacters.maggie = PhaserScene.add.image(370, gameConsts.halfHeight - 25, 'characters', 'maggie1.png').setDepth(11);
    gameCharacters.edith = PhaserScene.add.image(1085, gameConsts.halfHeight + 117, 'characters', 'edith1.png').setDepth(11);
    gameCharacters.ethan = PhaserScene.add.image(1310, gameConsts.halfHeight + 103, 'characters', 'ethan1.png').setDepth(11);
    gameCharacters.juan = PhaserScene.add.image(1870, gameConsts.halfHeight + 107, 'characters', 'juan1.png').setDepth(11);
    gameCharacters.tv = PhaserScene.add.sprite(1319, gameConsts.halfHeight - 257, 'characters').play('tv');
    gameCharacters.dog = PhaserScene.add.sprite(-189, gameConsts.halfHeight + 188, 'characters', 'dog.png').setDepth(1);
    gameCharacters.backdoor = PhaserScene.add.sprite(-48, gameConsts.halfHeight + 39, 'characters', 'backdoor1.png').setDepth(1).setOrigin(1, 0.5);
}

function showExclamation() {
    let charactersToShowExclaim = [
        gameCharacters.bruna,
        gameCharacters.maggie,
        gameCharacters.edith,
        gameCharacters.ethan,
        gameCharacters.juan,
    ];
    for (let i in charactersToShowExclaim) {
        let char = charactersToShowExclaim[i];
        let randDelay = Math.floor(Math.random() * 150);
        setTimeout(() => {
            let exclam = PhaserScene.add.image(char.x, char.y - 220, 'misc', 'exclamation.png').setDepth(12).setScale(0.25, 0.25);
            PhaserScene.tweens.add({
                targets: exclam,
                scaleX: 0.65,
                scaleY: 0.65,
                y: "-=20",
                ease: 'Cubic.easeOut',
                duration: 150,
                onComplete: () => {
                    PhaserScene.tweens.add({
                        targets: exclam,
                        scaleX: 0,
                        scaleY: 0,
                        y: "-=50",
                        ease: 'Cubic.easeIn',
                        duration: 300 + Math.floor(Math.random() * 150),
                        onComplete: () => {
                            exclam.destroy();
                        }
                    });
                }
            });
        }, randDelay);


    }

    if (gameState.currentScene == 1) {
        gameCharacters.tv.stop();
        gameCharacters.tv.setFrame('tv_red.png');
    }
}

function setCharactersDark() {
    gameCharacters.caspar.setFrame('caspar_dark_calm.png');
    gameCharacters.bruna.setFrame('bruna_dark.png');
    gameCharacters.maggie.setFrame('maggie_dark.png');
    gameCharacters.edith.setFrame('edith_dark.png');
    gameCharacters.ethan.setFrame('ethan_dark.png');
    gameCharacters.juan.setFrame('juan_dark.png');
    gameCharacters.tv.stop();
    gameCharacters.tv.setFrame('tv_off.png');
}

function setCharactersNormal() {
    gameCharacters.caspar.setFrame('caspar1.png');
    gameCharacters.bruna.setFrame('bruna1.png');
    gameCharacters.maggie.setFrame('maggie1.png');
    if (gameState.EthanEdithSeparated) {
        gameCharacters.edith.setFrame('edith2.png');
    } else {
        gameCharacters.edith.setFrame('edith1.png');
    }
    gameCharacters.ethan.setFrame('ethan1.png');
    gameCharacters.juan.setFrame('juan1.png');
}


function runIntroSequence() {
    globalObjects.optionsButton.destroy();
    gameVars.canSkipIntro = true;
    setBackground('intro', 'start.png');
    let thunderSfx = playSound('thunder', 0.8);
    let dinerSign = PhaserScene.add.image(gameConsts.width, 230, 'intro', 'dinersign.png').setScale(0.7).setAlpha(0);
    let greyCover = PhaserScene.add.image(gameConsts.width, 210, 'intro', 'greycover.png').setScale(0.7, 1).setOrigin(0.5, 0.68);

    globalObjsTemp.rainForeground = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'startrain.png');
    globalObjsTemp.rainForeground.setDepth(1);
    addToShakeObjects(globalObjsTemp.rainForeground);

    globalObjsTemp.skipBox = PhaserScene.add.image(gameConsts.width, 210, 'blackPixel').setScale(146, 15).setOrigin(1, 1);
    globalObjsTemp.skipBox.setPosition(gameConsts.width - 10, gameConsts.height - 18);
    globalObjsTemp.skipBox.alpha = 0;
    globalObjsTemp.skipBox.setDepth(999);

    globalObjsTemp.skipText = PhaserScene.add.text(gameConsts.width - 20, gameConsts.height - 40, 'PRESS SPACE TO SKIP INTRO');
    globalObjsTemp.skipText.setFontSize(18);
    globalObjsTemp.skipText.setAlign('right');
    globalObjsTemp.skipText.setOrigin(1, 0);
    globalObjsTemp.skipText.alpha = 0;
    globalObjsTemp.skipText.setDepth(999);

    globalObjsTemp.skipButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "gloom_pixel.png",
            x: gameConsts.width - 100,
            y: gameConsts.height - 25,
            scaleX: 200,
            scaleY: 25,
            alpha: 0.001
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onMouseUp() {
            manualSkipIntro();
        }
    });

    PhaserScene.tweens.add({
        delay: 500,
        targets: [globalObjsTemp.skipText, globalObjsTemp.skipBox],
        alpha: 0.7,
        ease: 'Cubic.easeInOut',
        duration: 1200
    });

    PhaserScene.tweens.add({
        targets: [dinerSign, greyCover],
        alpha: 1,
        x: gameConsts.width - 100,
        scaleX: 1.35,
        scaleY: 1.35,
        duration: 3400,
        ease: 'Cubic.easeIn',
        onComplete: () => {
            dinerSign.destroy();
            greyCover.destroy();
            thunderSfx.stop();

            if (!gameVars.canSkipIntro) return;
            globalObjsTemp.outdoorsrain = playSound('staticloop', 0.8, true);
            setBackground('intro', 'offtruck.png');

            playSound('truckdoor', 0.8);

            setTimeout(() => {
                if (!gameVars.canSkipIntro) return;
                setBackground('intro', 'offtruck2.png');
                setTimeout(() => {
                    if (!gameVars.canSkipIntro) return;
                    setBackground('intro', 'offtruck3.png');
                    playSound('puddlestep', 0.8);
                    setTimeout(() => {
                        if (!gameVars.canSkipIntro) return;
                        cleanupIntro();
                        setTimeout(() => {
                            enterShop();
                        }, 2000);
                    }, 2000);
                }, 1500);
            }, 1700);
        }
    });
}

function cleanupIntro() {
    globalObjsTemp.skipBox.destroy();
    globalObjsTemp.skipText.destroy();

    gameVars.canSkipIntro = false;
    globalObjsTemp.rainForeground.destroy();
    setBackground('intro', 'diner1.png');
    if (globalObjsTemp.outdoorsrain) {
        globalObjsTemp.outdoorsrain.stop();
    }
    globalObjects.indoorRain = playSound('brownnoise', 1, true);
}

function enterShop() {

    globalObjsTemp.skipButton.destroy();
    playSound('entershop');
    setBackground('intro', 'diner2.png');
    let dinerLighting = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'dinerlighting.png').setAlpha(0);
    setTimeout(() => {
        dinerLighting.alpha = 1;
        setTimeout(() => {
            dinerLighting.alpha = 0;
            setTimeout(() => {
                dinerLighting.alpha = 1;
                setTimeout(() => {
                    dinerLighting.alpha = 0;
                    dinerLighting.destroy();
                    let darkScreen = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setAlpha(0);
                    darkScreen.setScale(999, 999);
                    PhaserScene.tweens.add({
                        targets: [darkScreen],
                        delay: 300,
                        alpha: 1,
                        ease: 'Cubic.easeIn',
                        duration: 600,
                        completeDelay: 250,
                        onComplete: () => {
                            darkScreen.destroy();
                            realGameStart();
                        }
                    });
                }, 150);
            }, 250);
        }, 250);
    }, 150);
}

function setupDialogManager() {
    for (let nodeName in dialogList1) {
        let dialogNode = new DialogNode(dialogList1[nodeName]);
        dialogManager.addDialogNode(nodeName, dialogNode);
    }


    for (let nodeName in furnitureDialog) {
        let dialogNode = new DialogNode(furnitureDialog[nodeName]);
        dialogManager.addDialogNode(nodeName, dialogNode);
    }
}

function setRadioMusic(music, volume = 0.1) {
    globalObjsTemp.radioMusic = playSound(music, volume, true);
    setRadioPan(0.25);
}

function setRadioVolume(vol = 1) {
    gameVars.radioVolume = vol;
    globalObjsTemp.radioMusic.volume = vol;

    if (globalObjsTemp.radioStatic1 && globalObjsTemp.radioStatic1.trueVolume !== undefined) {
        globalObjsTemp.radioStatic1.volume = globalObjsTemp.radioStatic1.trueVolume * vol;
        globalObjsTemp.radioStatic2.volume = globalObjsTemp.radioStatic2.trueVolume * vol;
    }
}

function setRadioPan(pan) {
    globalObjsTemp.radioMusic.setPan(pan);
    if (globalObjsTemp.radioStatic1) {
        globalObjsTemp.radioStatic1.setPan(pan);
        globalObjsTemp.radioStatic1.setPan(pan);
    }
}

function girlsMoveAwayFromDoor() {
    let charactersToShowExclaim = [
        gameCharacters.bruna,
        gameCharacters.maggie,
        gameCharacters.edith,
    ];
    for (let i in charactersToShowExclaim) {
        let char = charactersToShowExclaim[i];
        let randDelay = 400;
        setTimeout(() => {
            let exclam = PhaserScene.add.image(char.x, char.y - 220, 'misc', 'exclamation.png').setDepth(12).setScale(0.25, 0.25);
            PhaserScene.tweens.add({
                targets: exclam,
                scaleX: 0.65,
                scaleY: 0.65,
                y: "-=20",
                ease: 'Cubic.easeOut',
                duration: 150,
                onComplete: () => {
                    PhaserScene.tweens.add({
                        targets: exclam,
                        scaleX: 0,
                        scaleY: 0,
                        y: "-=50",
                        ease: 'Cubic.easeIn',
                        duration: 300 + Math.floor(Math.random() * 150),
                        onComplete: () => {
                            exclam.destroy();
                        }
                    });
                }
            });
        }, randDelay);
    }
    if (gameState.EthanEdithSeparated) {
        gameCharacters.edith.scaleX = -1;
        const EdithFinalPos = 625;
        let edithOrigButtonPosY = globalObjects.diner.EdithButton.getPosY();
        globalObjects.diner.EdithButton.setPos(EdithFinalPos, globalObjects.diner.EdithButton.getPosY() - 9999);
        // gameCharacters.edith
        globalObjects.scratchSound = playSound('scratchsound', 1, true);

        PhaserScene.tweens.add({
            targets: gameCharacters.edith,
            duration: 2000,
            x: EdithFinalPos,
            delay: 1000,
            ease: 'Quad.easeInOut',
            onComplete: () => {
                globalObjects.diner.EdithButton.setPos(EdithFinalPos, edithOrigButtonPosY);
            }
        });
    }

}
