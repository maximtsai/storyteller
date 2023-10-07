function createWorldButtons() {
    globalObjects.diner = {};
    globalObjects.diner.maggieButton = new Button({
        normal: {
            "atlas": "pixels",
            "ref": "blue_pixel.png",
            "x": 350,
            "y": 250,
            "scaleX": 125,
            scaleY: 170,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.maggieButton.getXPos());
            clickMaggie();
        }
    });
    globalObjects.diner.maggieButton.setDepth(1);
    globalObjects.diner.maggieButton.setState(DISABLE);

    // Edith
    globalObjects.diner.EdithButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1080,
            y: 370,
            scaleX: 110,
            scaleY: 170,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.EdithButton.getXPos());
            clickEdith();
        }
    });
    globalObjects.diner.EdithButton.setDepth(1);
    globalObjects.diner.EdithButton.setState(DISABLE);

    // Ethan
    globalObjects.diner.EthanButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1315,
            y: 360,
            scaleX: 120,
            scaleY: 180,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.EthanButton.getXPos());
            clickEthan();
        }
    });
    globalObjects.diner.EthanButton.setDepth(1);
    globalObjects.diner.EthanButton.setState(DISABLE);

    // Juan
    globalObjects.diner.JuanButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1875,
            y: 390,
            scaleX: 240,
            scaleY: 200,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.JuanButton.getXPos());
            clickJuan();
        }
    });

    globalObjects.diner.JuanButton.setOrigin(0.75, 0.5);
    globalObjects.diner.JuanButton.setDepth(1);
    globalObjects.diner.JuanButton.setState(DISABLE);

    // Bruna
    globalObjects.diner.BrunaButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -635,
            y: 420,
            scaleX: 110,
            scaleY: 170,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.BrunaButton.getXPos());
            clickBruna();
        }
    });
    globalObjects.diner.BrunaButton.setDepth(1);
    globalObjects.diner.BrunaButton.setState(DISABLE);

    // Bruna
    globalObjects.diner.CasparButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -1135,
            y: 420,
            scaleX: 110,
            scaleY: 170,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.CasparButton.getXPos());
            clickCaspar();
        }
    });
    globalObjects.diner.CasparButton.setDepth(1);
    globalObjects.diner.CasparButton.setState(DISABLE);

    // Exit
    globalObjects.diner.ExitButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 2195,
            y: 360,
            scaleX: 100,
            scaleY: 200,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.ExitButton.getXPos());
            clickExit();
        }
    });
    globalObjects.diner.ExitButton.setDepth(1);
    globalObjects.diner.ExitButton.setState(DISABLE);

    globalObjects.diner.BackdoorButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -190,
            y: 315,
            scaleX: 115,
            scaleY: 260,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.BackdoorButton.getXPos());
            clickBackdoor();
        }
    });
    globalObjects.diner.BackdoorButton.setDepth(1);
    globalObjects.diner.BackdoorButton.setState(DISABLE);

    globalObjects.diner.TVButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1330,
            y: 80,
            scaleX: 100,
            scaleY: 80,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.TVButton.getXPos());
            clickTV();
        }
    });
    globalObjects.diner.TVButton.setDepth(1);
    globalObjects.diner.TVButton.setState(DISABLE);

    globalObjects.diner.RadioButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 800,
            y: 385,
            scaleX: 80,
            scaleY: 90,
            alpha: 0.1
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
            shiftOver(globalObjects.diner.RadioButton.getXPos());
            clickRadio();
        }
    });
    globalObjects.diner.RadioButton.setDepth(1);
    globalObjects.diner.RadioButton.setState(DISABLE);
}

function enableDinerButtons() {
    for (let i in globalObjects.diner) {
        let button = globalObjects.diner[i];
        button.setState(NORMAL);
    }
}


function clickMaggie() {
    if (gameState.isSceneOne) {
        if (!gameState.askedSeat) {
            dialogManager.showDialogNode('findSeat');
        } else {
            dialogManager.showDialogNode('findSeatEnd');
        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }


}

function clickEdith() {
    if (gameState.isSceneOne) {
        gameState.EdithIntroduced = true;
        dialogManager.showDialogNode('introEdith');
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickEthan() {
    if (gameState.isSceneOne) {
        if (gameState.EthanAct1Fin) {
            dialogManager.showDialogNode('EthanActOneEnd');
        } else if (gameState.EthanIntroduced) {
            dialogManager.showDialogNode('EthanActOneInstruct');
        } else {
            dialogManager.showDialogNode('introEthan');
        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickJuan() {
    if (gameState.isSceneOne) {
        if (!gameState.juanIntroduced) {
            dialogManager.showDialogNode('JuanIntro');
        } else if (gameState.juanAskedSeat) {
            dialogManager.showDialogNode('Juan1Endb');
        } else {
            dialogManager.showDialogNode('Juan1Enda');
        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickBruna() {
    if (gameState.isSceneOne) {
        if (gameState.CasparActOneFin) {
            // do nothing
        }else if (!gameState.brunaIntroduced) {
            dialogManager.showDialogNode('BrunaIntro');
        } else {
            dialogManager.showDialogNode('BrunaActOneEnd');

        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickCaspar() {
    if (gameState.isSceneOne) {
        if (gameState.CasparActOneFin) {
            // do nothing.
        } else if (!gameState.casparIntroduced) {
            gameState.casparIntroduced = true;
            dialogManager.showDialogNode('CasparIntro');
        } else if (true || (gameState.brunaIntroduced && gameState.juanIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced)) {
            dialogManager.showDialogNode('CasparTalkOthersDone');
        } else {
            dialogManager.showDialogNode('CasparTalkOthersNotDone');
        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickExit() {
    if (gameState.isSceneOne) {
        dialogManager.showDialogNode('ExitNoReason');

    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickRadio() {
    if (!globalObjsTemp.radio) {
        PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.height - 180, 'blackPixel');
        updateManager.addFunction(updateRadio);
        globalObjsTemp.radio = {
            radioClickBlocker: {},
            radioDeviceButtonBlocker: {},
            knobButton: {},
            backing: PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'radio', 'backing.png'),
            indicator: PhaserScene.add.sprite(gameConsts.halfWidth + 122.5, gameConsts.halfHeight + 70, 'misc', 'indicator.png'),
            knob: PhaserScene.add.sprite(gameConsts.halfWidth + 122.5, gameConsts.halfHeight + 70, 'radio', 'knob.png'),
            bar: PhaserScene.add.sprite(386, gameConsts.halfHeight - 148, 'radio', 'bar.png'),
            cover: PhaserScene.add.sprite(gameConsts.halfWidth + 7, gameConsts.halfHeight - 150, 'radio', 'cover.png'),
            arrow: PhaserScene.add.sprite(gameConsts.halfWidth + 7, gameConsts.halfHeight - 150, 'misc', 'guide_arrow.png'),
        };
        // 206 leftmost = 88,
        // 235.75 = 90 slowwalk, 266.5,
        // 294.25 = 94 dabbda,
        // 326 = 96 guitarboogieshuffle,
        // 356 = 98 secret
        // 386.25 = 100,
        // 446.75 = 104, 506 = 108
        globalObjsTemp.songs = {
            235.75: 'slowwalk',
            294.25: 'dabbda',
            356: 'foolrushin_poor',
            386.25: 'guitarboogieshuffle',
            446.75: 'gibberish',
            506: 'weatherblur'
        };
        globalObjsTemp.radioStatic1 = playSound('radiostatic1', 0, true);
        globalObjsTemp.radioStatic2 = playSound('radiostatic2', 0, true);
        globalObjsTemp.radio.radioClickBlocker = new Button({
            normal: {
                ref: "blackPixel",
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight,
                alpha: 0.01,
                scaleX: 5000,
                scaleY: 1000
            },
            hover: {
                alpha: 0.15
            },
            press: {
                alpha: 0
            },
            disable: {
                alpha: 0
            },
            onMouseUp: () => {
                leaveRadio();
            }
        });
        globalObjsTemp.radio.radioDeviceButtonBlocker = new Button({
            normal: {
                ref: "whitePixel",
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight + 4,
                alpha: 0.001,
                scaleX: 307,
                scaleY: 253
            },
            disable: {
                alpha: 0
            },
            onMouseUp: () => {
                if (globalObjsTemp.radio.indicator.alpha == 1) {
                    globalObjsTemp.radio.indicator.setScale(1.4);
                    globalObjsTemp.radio.indicator.alpha = 0.5;
                    PhaserScene.tweens.add({
                        targets: globalObjsTemp.radio.indicator,
                        alpha: 0,
                        ease: 'Cubic.easeOut',
                        scaleX: 2.4,
                        scaleY: 2.4,
                        duration: 900,
                        onComplete: () => {
                            globalObjsTemp.radio.indicator.setScale(1);
                            globalObjsTemp.radio.indicator.alpha = 1;
                        }
                    });
                }
            }
        });
        globalObjsTemp.radio.radioDeviceButtonBlocker.setDepth(100);
        globalObjsTemp.radio.radioDeviceButtonBlocker.setScrollFactor(0, 0);

        globalObjsTemp.radio.knobButton = new Button({
            normal: {
                ref: "whitePixel",
                x: globalObjsTemp.radio.knob.x,
                y: globalObjsTemp.radio.knob.y,
                alpha: 0.001,
                scaleX: 140,
                scaleY: 140
            },
            disable: {
                alpha: 0
            },
            isDraggable: true,
            onHover: () => {
                let distFromKnobX = globalObjsTemp.radio.knob.x - gameVars.mouseposx;
                let distFromKnobY = globalObjsTemp.radio.knob.y - gameVars.mouseposy;
                let distFromKnob = Math.sqrt(distFromKnobX * distFromKnobX + distFromKnobY * distFromKnobY);
                if (distFromKnob <= 140) {
                    globalObjsTemp.radio.knob.setScale(1.012);
                }
            },
            onHoverOut: () => {
                globalObjsTemp.radio.knob.setScale(1);
            },
            onMouseDown: () => {
                let distFromKnobX = globalObjsTemp.radio.knob.x - gameVars.mouseposx;
                let distFromKnobY = globalObjsTemp.radio.knob.y - gameVars.mouseposy;
                let distFromKnob = Math.sqrt(distFromKnobX * distFromKnobX + distFromKnobY * distFromKnobY);
                if (distFromKnob > 140) {
                    globalObjsTemp.radio.knobButton.onDrop();
                } else {
                    gameVars.radioDragged = true;
                    let dragStartPosX = distFromKnobX;
                    let dragStartPosY = distFromKnobY;
                    if (distFromKnob < 60) {
                        let multAmt = 60 / (distFromKnob + 0.01);
                        dragStartPosX *= multAmt;
                        dragStartPosY *= multAmt;
                    }
                    console.log(dragStartPosX, dragStartPosY, distFromKnob);
                    globalObjsTemp.radio.arrow.setPosition(globalObjsTemp.radio.knob.x - dragStartPosX, globalObjsTemp.radio.knob.y - dragStartPosY);
                    globalObjsTemp.radio.arrow.alpha = 1;
                    globalObjsTemp.radio.arrow.setScale(0.05, 1);
                }
            },
            onDrop: () => {
                gameVars.radioDragged = false;
                globalObjsTemp.radio.arrow.alpha = 0;
                globalObjsTemp.radio.knob.setScale(1);
                globalObjsTemp.radio.knobButton.setPos(globalObjsTemp.radio.knob.x, globalObjsTemp.radio.knob.y);
                // actually do nothing
            }
        });
        globalObjsTemp.radio.knobButton.setScrollFactor(0, 0);
        for (let i in globalObjsTemp.radio) {
            globalObjsTemp.radio[i].scrollFactorX = 0;
            globalObjsTemp.radio[i].setDepth(100);
        }
        globalObjsTemp.radio.radioClickBlocker.setDepth(99);
        globalObjsTemp.radio.arrow.setOrigin(-0.05, 0.5);
        globalObjsTemp.radio.arrow.alpha = 0;

    }
    openRadio();
}

function updateRadio(deltaTime) {
    if (gameVars.radioDragged) {
        let goalX = gameVars.mouseposx;
        let goalY = gameVars.mouseposy;

        let diffX = goalX - globalObjsTemp.radio.arrow.x;
        let diffY = goalY - globalObjsTemp.radio.arrow.y;
        let arrowToKnobX = globalObjsTemp.radio.arrow.x - globalObjsTemp.radio.knob.x;
        let arrowToKnobY = globalObjsTemp.radio.arrow.y - globalObjsTemp.radio.knob.y;
        let distArrowToKnob = Math.sqrt(arrowToKnobX * arrowToKnobX + arrowToKnobY * arrowToKnobY);
        let dist = Math.sqrt(diffX * diffX + diffY * diffY);
        globalObjsTemp.radio.arrow.setRotation(Math.atan2(diffY, diffX));
        globalObjsTemp.radio.arrow.setScale(Math.max(0.1, Math.min(1, dist * 0.01)), 1)
        let dotProd = arrowToKnobY * -diffX + arrowToKnobX * diffY;
        let rotAmt = 0;
        let arrowPositionAngle = Math.atan2(arrowToKnobY, arrowToKnobX);

        let dragMult = Math.max(1, dist / 80);
        if (dotProd > 400 * dragMult) {
            rotAmt = (deltaTime * 0.75 + 0.25) * 0.033;
            if (globalObjsTemp.radio.bar.x >= 506) {
                globalObjsTemp.radio.bar.x = 506;
                rotAmt = 0;
            }
        } else if (dotProd < -400 * dragMult) {
            rotAmt = (deltaTime * 0.75 + 0.25) * -0.033;
            if (globalObjsTemp.radio.bar.x <= 206) {
                globalObjsTemp.radio.bar.x = 206
                rotAmt = 0;
            }
        }

        globalObjsTemp.radio.knob.rotation += rotAmt;
        globalObjsTemp.radio.bar.x += rotAmt * 18;
        adjustRadioUpdate(globalObjsTemp.radio.bar.x);

        globalObjsTemp.radio.arrow.setPosition(Math.cos(arrowPositionAngle + rotAmt) * distArrowToKnob + globalObjsTemp.radio.knob.x, globalObjsTemp.radio.knob.y + Math.sin(arrowPositionAngle + rotAmt) * distArrowToKnob)
    }
}

function leaveRadio() {
    globalObjects.moveRightBtn.setState(NORMAL);
    globalObjects.moveLeftBtn.setState(NORMAL);
    for (let i in globalObjsTemp.radio) {
        globalObjsTemp.radio[i].visible = false;
    }
    globalObjsTemp.radio.radioClickBlocker.setState(DISABLE);
    globalObjsTemp.radio.radioDeviceButtonBlocker.setState(DISABLE);
    globalObjsTemp.radio.knobButton.setState(DISABLE);
    if (!globalObjsTemp.noPower) {
        setRadioVolume(0.75);
    }
}

function openRadio() {
    globalObjects.moveRightBtn.setState(DISABLE);
    globalObjects.moveLeftBtn.setState(DISABLE);
    for (let i in globalObjsTemp.radio) {
        globalObjsTemp.radio[i].visible = true;
    }
    globalObjsTemp.radio.radioClickBlocker.setState(NORMAL);
    globalObjsTemp.radio.radioDeviceButtonBlocker.setState(NORMAL);
    globalObjsTemp.radio.knobButton.setState(NORMAL);

    if (!globalObjsTemp.noPower) {
        setRadioVolume(1);
    }
}

function adjustRadioUpdate(barPos) {
    let distToObj = 99;
    let distToClosestObj = 99;
    let closestObj = null;
    for (let i in globalObjsTemp.songs) {
        distToObj = Math.abs(i - barPos);
        if (distToObj < distToClosestObj) {
            distToClosestObj = distToObj;
            closestObj = globalObjsTemp.songs[i];
        }
    }
    // 206 leftmost = 88 slowwalk,
    // 235.75 = 90, 266.5. 294.25, 326, 356 = 98 386.25 = 100, 446.75 = 104, 506 = 108
    if (distToClosestObj > 5) {
        // globalObjsTemp.radioStatic1
        let staticSoundMult = 1 - Math.min(0.99, (10 - distToClosestObj) / 5);
        let panMult = (barPos - 206) / 300
        globalObjsTemp.radioMusic.volume = 1 - staticSoundMult;
        let sqrtSoundMult = Math.sqrt(staticSoundMult);
        globalObjsTemp.radioStatic1.volume = sqrtSoundMult * (1 - panMult) * 0.5;
        globalObjsTemp.radioStatic2.volume = sqrtSoundMult * panMult * 0.5;
        if (distToClosestObj > 10) {
            if (globalObjsTemp.radioMusic.isPlaying) {
                globalObjsTemp.radioMusic.stop();
            }
        } else {
            if (globalObjsTemp.radioMusic.key != closestObj) {
                globalObjsTemp.radioMusic.stop();
                globalObjsTemp.radioMusic = playSound(closestObj, 1, true);
            }
            if (!globalObjsTemp.radioMusic.isPlaying) {
                globalObjsTemp.radioMusic.play();
            }
        }
    } else {
        globalObjsTemp.radioMusic.volume = 1;
        globalObjsTemp.radioStatic1.volume = 0;
        globalObjsTemp.radioStatic2.volume = 0;
        // closestObj
        // globalObjsTemp.radioMusic
    }
}

function clickTV() {
    if (gameState.isSceneOne) {
        if (gameState.tvended) {
            dialogManager.showDialogNode('tv4');
        } else {
            let tvNum = gameState.tvNum || 1;
            dialogManager.showDialogNode('tv' + tvNum);
            gameState.tvNum = tvNum + 1;
        }
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}

function clickBackdoor() {
    if (gameState.isSceneOne) {
        dialogManager.showDialogNode('BackdoorActOne');
    } else if (gameState.isSceneTwo) {

    } else if (gameState.isSceneThree) {

    }
}


function shiftOver(x) {
    let distDiff = x - (gameVars.cameraPosX + gameConsts.halfWidth);
    if (distDiff < -175) {
        gameVars.cameraMoveAcc = (distDiff / 300) - 0.25;
    } else if (distDiff > 175) {
        gameVars.cameraMoveAcc = (distDiff / 300) + 0.25;
    }
    messageBus.publish("delayUpdateClickLocation");

}

