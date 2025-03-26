class MiscSubscribe {
    constructor(scene) {
        this.scene = scene || PhaserScene;
        this.subscriptions = [
            messageBus.subscribe("startAction", this.startAction.bind(this)),
            messageBus.subscribe("startDark", this.startDark.bind(this)),
            messageBus.subscribe("MaggieCoffee", this.maggieCoffee.bind(this)),
            messageBus.subscribe("maggieCoffeeEnd", this.maggieCoffeeEnd.bind(this)),
            messageBus.subscribe("harshStorm", this.harshStorm.bind(this)),

            messageBus.subscribe("ActOneEnd", this.actOneEnd.bind(this)),
            messageBus.subscribe("playSound", this.playSound.bind(this)),
            messageBus.subscribe("tvemergency", this.tvemergency.bind(this)),
            messageBus.subscribe("tvemergencyEnd", this.tvemergencyEnd.bind(this)),
            messageBus.subscribe("tvJumpscare", this.tvJumpscare.bind(this)),
            messageBus.subscribe("tvSmash", this.tvSmash.bind(this)),

            messageBus.subscribe("generatorFixed", this.generatorFixed.bind(this)),

            messageBus.subscribe("edithStandCorner", this.edithStandCorner.bind(this)),

            messageBus.subscribe("startEldritchEthan", this.startEldritchEthan.bind(this)),
            messageBus.subscribe("endEldritchEthan", this.endEldritchEthan.bind(this)),

            messageBus.subscribe("ethanEldritch1", this.ethanEldritch1.bind(this)),
            messageBus.subscribe("ethanEldritch2", this.ethanEldritch2.bind(this)),
            messageBus.subscribe("EthanRefreshed", this.ethanRefreshed.bind(this)),
            messageBus.subscribe("ethanAsleep", this.ethanAsleep.bind(this)),
            messageBus.subscribe("ethanAwake", this.ethanAwake.bind(this)),

            messageBus.subscribe("BrunaFrown", this.brunaFrown.bind(this)),

            messageBus.subscribe("startPhaseThree", this.startPhaseThree.bind(this)),

            messageBus.subscribe("radioTempQuiet", this.radioTempQuiet.bind(this)),
            messageBus.subscribe("radioTempQuietSprawl", this.radioTempQuietSprawl.bind(this)),

            messageBus.subscribe("radioTempQuietResume", this.radioTempQuietResume.bind(this)),

            messageBus.subscribe("JuanScratchDoorInterrupt", this.juanScratchDoorInterrupt.bind(this)),

            messageBus.subscribe("lockScratchDoor", this.lockScratchDoor.bind(this)),
            messageBus.subscribe("openScratchDoor", this.openScratchDoor.bind(this)),

            messageBus.subscribe("windowBreak", this.windowBreak.bind(this)),
            messageBus.subscribe("doggoJump", this.doggoJump.bind(this)),
            messageBus.subscribe("doggoAngry", this.doggoAngry.bind(this)),

            messageBus.subscribe("fixWindow", this.fixWindow.bind(this)),
            messageBus.subscribe("juanLeft", this.juanLeft.bind(this)),

            messageBus.subscribe("edithSaved", this.edithSaved.bind(this)),
            messageBus.subscribe("ethanStandUp", this.ethanStandUp.bind(this)),
            messageBus.subscribe("ethanApproachEdith", this.ethanApproachEdith.bind(this)),
            messageBus.subscribe("edithScootTowardsEthan", this.edithScootTowardsEthan.bind(this)),

            messageBus.subscribe("casparExit", this.casparExit.bind(this)),
            messageBus.subscribe("casparGoodExit", this.casparGoodExit.bind(this)),
            messageBus.subscribe("casparExitFast", this.casparExitFast.bind(this)),
            messageBus.subscribe("casparCloseDoor", this.casparCloseDoor.bind(this)),
            messageBus.subscribe("casparFadeAway", this.casparFadeAway.bind(this)),
            messageBus.subscribe("casparReturn", this.casparReturn.bind(this)),

            messageBus.subscribe("goodEndLocked", this.goodEndLocked.bind(this)),
            messageBus.subscribe("casparToBackdoor", this.casparToBackdoor.bind(this)),
            messageBus.subscribe("BrunaStandUp", this.brunaStandUp.bind(this)),

            messageBus.subscribe("MaggieInfluence", (amt) => this.updateInfluence("MaggieInfluence", amt)),
            messageBus.subscribe("BrunaInfluence", (amt) => this.updateInfluence("BrunaInfluence", amt)),
            messageBus.subscribe("JuanInfluence", (amt) => this.updateInfluence("JuanInfluence", amt)),
            messageBus.subscribe("EdithInfluence", (amt) => this.updateInfluence("EdithInfluence", amt)),
            messageBus.subscribe("EthanInfluence", (amt) => this.updateInfluence("EthanInfluence", amt)),

            messageBus.subscribe("savePoint", (data) => this.savePoint(data)),
            messageBus.subscribe("loadSavePoint", this.loadSavePoint.bind(this)),
            messageBus.subscribe("showUndoPoint", this.showUndoPoint.bind(this)),
            messageBus.subscribe("hideUndoPoint", this.hideUndoPoint.bind(this)),

        ];
    }

    showUndoPoint() {
        if (globalObjsTemp.saveGameVars) {
            // showUndoButton();
            // buttonManager.bringToTop(globalObjects.undoButton);
        }
    }

    hideUndoPoint() {
        // hideUndoButton();
    }

    savePoint(data) {
        globalObjsTemp.saveGameVars = gameVars;
        globalObjsTemp.saveGameState = gameState;
        globalObjsTemp.saveGameData = data;
    }

    loadSavePoint() {
        if (globalObjsTemp.saveGameVars) {
            gameVars = globalObjsTemp.saveGameVars;
            gameState = globalObjsTemp.saveGameState;
            dialogManager.showDialogNode(globalObjsTemp.saveGameData.node, globalObjsTemp.saveGameData.num);

            globalObjsTemp.saveGameState = null;
            globalObjsTemp.saveGameVars = null;
            globalObjsTemp.saveGameData = null;

        } else {

        }
    }

    updateInfluence(character = "MaggieInfluence", amt = 1) {
        if (!gameState[character]) {
            gameState[character] = amt;
        } else {
            gameState[character] += amt;
        }
        messageBus.publish('updateInfluenceAnimation', amt);
    }

    casparExit() {
        buttonManager.disableAllInput();
        gameState.casparGone = true;
        gameCharacters.caspar.setFrame('caspar2.png');
        globalObjects.diner.CasparButton.destroy();
        this.scene.tweens.add({
            targets: gameCharacters.caspar,
            duration: 3000,
            x: gameCharacters.backdoor.x - 150,
            ease: 'Quad.easeInOut',
            onComplete: () => {
                this.scene.tweens.add({
                    targets: [gameCharacters.backdoor],
                    scaleX: 1,
                    ease: 'Cubic.easeIn',
                    duration: 1,
                    onComplete: () => {
                        this.scene.tweens.add({
                            targets: gameCharacters.caspar,
                            scaleX: 0.95,
                            scaleY: 0.95,
                            alpha: 0,
                            duration: 1200,
                            y: "-=40",
                            ease: 'Quad.easeInOut',
                            onComplete: () => {
                                buttonManager.enableAllInput();
                            }
                        });
                    }
                });
            }
        });
    }

    casparGoodExit() {
        buttonManager.disableAllInput();
        gameCharacters.caspar.setFrame('caspar2.png');
        globalObjects.diner.CasparButton.destroy();
        this.scene.tweens.add({
            targets: gameCharacters.caspar,
            duration: 800,
            x: gameCharacters.backdoor.x - 170,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                shiftOver(gameCharacters.backdoor.x, true);
                buttonManager.enableAllInput();
                globalObjects.diner.graveButton.setRotation(0);
                dialogManager.showDialogNode('CasparExitGood');
            }
        });
    }

    casparExitFast() {
        buttonManager.disableAllInput();
        this.scene.tweens.add({
            targets: [gameCharacters.backdoor],
            scaleX: 0.25,
            ease: 'Cubic.easeInOut',
            duration: 1250,
            onComplete: () => {
                buttonManager.enableAllInput();
                dialogManager.showDialogNode('CasparExitGood3');
            }
        });
    }

    // Todo test this
    casparCloseDoor() {
        console.log("caspar closed door");
        buttonManager.disableAllInput();
        this.scene.tweens.add({
            targets: [gameCharacters.backdoor],
            scaleX: 1,
            ease: 'Cubic.easeIn',
            duration: 1000,
            onComplete: () => {
                buttonManager.enableAllInput();
            }
        });
    }

    casparReturn() {
        gameCharacters.casparTemp.scaleX = -1;
        this.scene.tweens.add({
            delay: 200,
            targets: [gameCharacters.casparTemp],
            x: "-=400",
            ease: 'Cubic.easeIn',
            alpha: 0,
            duration: 2000,
            onComplete: () => {
                gameCharacters.casparTemp.destroy();
            }
        });
    }

    casparFadeAway() {
        gameState.casparGone = true;
        shiftOver(gameCharacters.backdoor.x);
        buttonManager.disableAllInput();
        this.scene.tweens.add({
            targets: [gameCharacters.caspar],
            x: gameCharacters.backdoor.x - 165,
            y: "-=40",
            scaleX: 0.95,
            scaleY: 0.95,
            ease: 'Cubic.easeIn',
            duration: 1000,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: [gameCharacters.caspar],
                    alpha: 0,
                    duration: 1000,
                    onComplete: () => {
                        buttonManager.enableAllInput();
                    }
                });
            }
        });
    }

    brunaStandUp() {
        gameCharacters.bruna.setFrame('bruna2.png');
    }

    goodEndLocked() {
        this.scene.tweens.add({
            targets: [globalObjsTemp.radioMusic, globalObjsTemp.radioStatic1, globalObjsTemp.radioStatic2],
            volume: 0,
            duration: 2000,
            onComplete: () => {
                if (globalObjsTemp.radioStatic1) {
                    globalObjsTemp.radioStatic1.stop();
                }
                if (globalObjsTemp.radioStatic2) {
                    globalObjsTemp.radioStatic2.stop();
                }
                globalObjsTemp.radioStatic1 = playSound('radiostatic1', 0.05, true);
                globalObjsTemp.radioStatic2 = playSound('radiostatic2', 0.05, true);
                resetRadioPosition();
                this.updateRadioChannels();
            }
        });
        gameState.goodEndLocked = true;
    }

    casparToBackdoor() {
        gameCharacters.caspar.setFrame('caspar2.png');
        let casparButtonY = globalObjects.diner.CasparButton.getPosY();
        this.scene.tweens.add({
            targets: gameCharacters.caspar,
            duration: 3000,
            x: gameCharacters.backdoor.x - 300,
            ease: 'Quad.easeInOut',
            onComplete: () => {
                globalObjects.diner.CasparButton.setPos(gameCharacters.backdoor.x - 310, casparButtonY);

            }
        });
    }

    edithSaved() {
        gameCharacters.edith.scaleX = 1;
        if (gameState.EthanSaved) {
            let EdithFinalPosX = 1100;
            globalObjects.diner.EdithButton.setPos(EdithFinalPosX, globalObjects.diner.EdithButton.getPosY());
            // gameCharacters.edith
            this.scene.tweens.add({
                targets: gameCharacters.edith,
                duration: 1000,
                x: EdithFinalPosX,
                ease: 'Cubic.easeInOut'
            });
        }
    }

    ethanStandUp() {
        gameState.ethanStandingUp = true;
        this.scene.tweens.add({
            targets: [gameCharacters.ethan],
            alpha: 0.8,
            duration: 500,
            onComplete: () => {
                gameCharacters.ethan.setFrame('ethan2.png');
                this.scene.tweens.add({
                    targets: [gameCharacters.ethan],
                    alpha: 1,
                    duration: 500
                });
            }
        });
    }

    edithScootTowardsEthan() {
        this.scene.tweens.add({
            targets: [gameCharacters.edith],
            x: "+=30",
            ease: 'Cubic.easeOut',
            duration: 1250
        });
    }

    ethanApproachEdith() {
        shiftOver(globalObjects.diner.EthanButton.getXPos() * 0.4 + globalObjects.diner.EdithButton.getXPos() * 0.6, true);

        let ethanGoalPosX = 1200;
        globalObjects.diner.EthanButton.setPos(ethanGoalPosX, globalObjects.diner.EthanButton.getPosY());
        this.scene.tweens.add({
            targets: [gameCharacters.ethan],
            x: ethanGoalPosX,
            ease: 'Cubic.easeInOut',
            duration: 2000
        });
    }

    juanLeft() {
        gameState.juanLeft = true;
        gameCharacters.juan.scaleX = -1;
        this.scene.tweens.add({
            targets: [gameCharacters.juan],
            x: 2150,
            ease: 'Cubic.easeInOut',
            duration: 2000,
            onComplete: () => {
                this.scene.tweens.add({
                    targets: [gameCharacters.juan],
                    alpha: 0,
                    duration: 750,
                });
            }
        });
        this.scene.tweens.add({
            targets: [gameCharacters.juan],
            delay: 500,
            y: gameConsts.halfHeight + 55,
            scaleX: -0.92,
            scaleY: 0.92,
            ease: 'Cubic.easeInOut',
            duration: 1500,
        });
        globalObjects.diner.JuanButton.destroy();
    }

    doggoAngry() {
        this.scene.tweens.add({
            targets: [gameCharacters.dog],
            x: "-=60",
            ease: 'Cubic.easeOut',
            duration: 300,
            yoyo: true,
        });
        playSound('bark');
    }

    doggoJump() {
        this.scene.tweens.add({
            delay: 400,
            targets: [gameCharacters.dog],
            y: "-=60",
            ease: 'Cubic.easeOut',
            duration: 220,
            yoyo: true,
        });
        playSound('barksmall');
    }

    windowBreak() {
        randGloomShow(5);
        gameCharacters.tv.setFrame('tv_cracked.png');
        gameCharacters.sign.rotation = 0.135;
        gameState.currentScene = 3;
        resetRadioPosition(206);
        this.updateRadioChannels();
        playSound('glassbreak');
        gameState.windowBroken = true;

        PhaserScene.tweens.add({
            targets: gameCharacters.sprawl,
            x: 900,
            scaleX: 1.25,
            scaleY: 1.4,
            alpha: 0.5,
            ease: 'Back.easeIn',
            duration: 700,
            onComplete: () => {
                gameCharacters.sprawl.destroy();
            }
        });
        setTimeout(() => {
            PhaserScene.tweens.add({
                targets: globalObjects.indoorRain,
                trueVolume: 0.8,
                volume: 0.8 * globalVolume,
                duration: 1000
            });
            showExclamation();
            if (!gameState.ethan2Chatted) {
                gameCharacters.ethan.setFrame('ethan_sleep.png');
                globalObjects.diner.EthanButton.setPos(1275, 418);
                globalObjects.diner.EthanButton.setScale(90, 140);
                gameState.ethanSleeping = true;
            }
            this.moveEdithToBrokenWindow();
            this.moveMaggieToBrokenWindow();
            gameCharacters.juan.setFrame('juan2.png');
            gameCharacters.juan.x = 1920; gameCharacters.juan.y = gameConsts.halfHeight + 90;
            globalObjects.diner.JuanButton.setPos(1925, globalObjects.diner.JuanButton.getPosY());
            globalObjects.diner.JuanButton.setScale(170, 200);

            globalObjsTemp.gloom.setAlpha(0.4);
            PhaserScene.tweens.add({
                targets: globalObjsTemp.gloom,
                alpha: 0,
                ease: 'Cubic.easeOut',
                duration: 1000
            });


            globalObjects.window2.setFrame('window_broken.png');
        }, 300);
        // Dog run off
        if (gameState.dogAlive) {
            this.scene.tweens.add({
                delay: 480,
                targets: [gameCharacters.dog],
                y: "-=60",
                ease: 'Cubic.easeOut',
                duration: 220,
                yoyo: true,
                onComplete: () => {
                    gameCharacters.dog.scaleX = 1;
                    this.scene.tweens.add({
                        targets: [gameCharacters.dog],
                        x: -980,
                        y: "+=35",
                        ease: 'Quad.easeIn',
                        duration: 1000,
                        onComplete: () => {// Create click
                            gameCharacters.dog.scaleX = -1;
                            globalObjects.diner.DogButton = new Button({
                                normal: {
                                    atlas: "pixels",
                                    ref: "blue_pixel.png",
                                    x: gameCharacters.dog.x,
                                    y: gameCharacters.dog.y,
                                    scaleX: 70,
                                    scaleY: 80,
                                    alpha: 0.001
                                },
                                hover: {
                                    alpha: 0.001
                                },
                                press: {
                                    alpha: 0.001
                                },
                                disable: {
                                    alpha: 0.001
                                },
                                onHover: () => {
                                    globalObjects.exclamation.setAlpha(0.75);
                                },
                                onHoverOut: () => {
                                    globalObjects.exclamation.setAlpha(0);
                                },
                                onMouseUp() {
                                    shiftOver(globalObjects.diner.DogButton.getXPos());
                                    clickDog();
                                }
                            });
                            globalObjects.diner.DogButton.setDepth(1);
                            messageBus.publish('setDialogBtnToTop');
                        }
                    });
                }
            });
        }
    }

    moveEdithToBrokenWindow() {
        let EdithFinalPosX = 1450;
        gameCharacters.edith.scaleX = 1;
        if (!gameState.ethanSleeping) {
            EdithFinalPosX = 600;
        }
        gameCharacters.edith.setFrame('edith2.png');
        globalObjects.diner.EdithButton.setPos(EdithFinalPosX, globalObjects.diner.EdithButton.getPosY());
        globalObjects.diner.EdithButton.setScale(75, 170)
        // gameCharacters.edith
        this.scene.tweens.add({
            targets: gameCharacters.edith,
            duration: 1000,
            x: EdithFinalPosX,
            delay: 100,
            ease: 'Cubic.easeInOut',
            onComplete:() => {
                if (gameState.ethanSleeping) {
                    gameCharacters.edith.scaleX = -1;
                } else {
                    gameCharacters.edith.scaleX = 1;
                }
            }
        });
    }

    moveMaggieToBrokenWindow() {
        this.scene.tweens.add({
            targets: gameCharacters.maggie,
            duration: 1000,
            delay: 100,
            alpha: 0,
        });
        globalObjects.diner.maggieButton.setPos(1055, 400);
        globalObjects.diner.maggieButton.setScale(75, 160);

        if (!gameCharacters.maggieCoffee) {
            gameCharacters.maggieCoffee = this.scene.add.image(-580, gameConsts.halfHeight + 105, 'characters', 'maggie_coffee.png');
            gameCharacters.maggieCoffee.setDepth(11);
        }

        gameCharacters.maggieCoffee.visible = true; gameCharacters.maggieCoffee.alpha = 1;
        gameCharacters.maggieCoffee.setFrame('maggie_coffee_sad.png');
        gameCharacters.maggieCoffee.scaleX = -1;
        gameCharacters.maggieCoffee.x = 1050;
    }

    fixWindow(youFixed) {
        gameState.windowFixed = true;
        gameState.youHelpedWindowFix = youFixed;
        if (!globalObjsTemp.black) {
            globalObjsTemp.black = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setScale(5000, 999);
        }

        globalObjsTemp.black.visible = true;
        globalObjsTemp.black.depth = 9999;
        globalObjsTemp.black.alpha = 0;
        buttonManager.disableAllInput();
        this.scene.tweens.add({
            targets: globalObjsTemp.black,
            alpha: 1,
            duration: 1100,
            onComplete: () => {
                PhaserScene.tweens.add({
                    targets: globalObjects.indoorRain,
                    trueVolume: 0.38,
                    volume: 0.38 * globalVolume,
                    duration: 1000
                });
                playSound('hammermany');
                gameCharacters.maggieCoffee.visible = false;
                globalObjects.window2.setFrame('window_fixed.png').setDepth(9).setAlpha(0.8);
                this.scene.tweens.add({
                    delay: 1250,
                    targets: globalObjsTemp.black,
                    alpha: 0,
                    duration: 1400,
                });
                gameCharacters.maggie.alpha = 1;
                globalObjects.diner.maggieButton.setPos(360, 290);
                globalObjects.diner.maggieButton.setScale(120, 110);

                gameCharacters.edith.scaleX = 1;
                let EdithFinalPosX = gameState.edithThinking ? 920 : 660;
                if (gameState.ethanSleeping) {
                    EdithFinalPosX = 1100;
                }
                let clickShiftAmt = gameState.edithThinking ? 15 : -15;
                globalObjects.diner.EdithButton.setPos(EdithFinalPosX + clickShiftAmt, globalObjects.diner.EdithButton.getPosY());
                globalObjects.diner.EdithButton.setScale(60, 170);
                gameCharacters.edith.x = EdithFinalPosX;

                setTimeout(() => {
                    buttonManager.enableAllInput();
                    if (youFixed) {
                        dialogManager.showDialogNode('WindowFixed');
                    } else {
                        dialogManager.showDialogNode('WindowFixedJuan');
                    }
                }, 1400);
            }
        });
    }

    lockScratchDoor() {
        this.createTentacle();
        this.stopAnimDoor();
    }

    createTentacle() {
        gameCharacters.sprawl = PhaserScene.add.sprite(-100, -100, 'lowq', 'sprawl.png').setDepth(2).setScale(1.5, 1.5).setOrigin(0.5, 0).setBlendMode(Phaser.BlendModes.MULTIPLY).setAlpha(0.001);
        globalObjsTemp.sprawlAnim = this.scene.tweens.add({
            targets: [gameCharacters.sprawl],
            alpha: 0.007,
            duration: 10000,
        });
    }

    openScratchDoor() {
        this.createTentacle();
        buttonManager.disableAllInput();
        gameState.dogAlive = true;
        this.stopAnimDoor();
        messageBus.publish("radioTempQuiet");
        playSound('dooropen2');
        this.scene.tweens.add({
            targets: [gameCharacters.backdoor],
            scaleX: 0.95,
            ease: 'Cubic.easeOut',
            duration: 50,
            onComplete: () => {
                this.scene.tweens.add({
                    delay: 100,
                    targets: [gameCharacters.backdoor],
                    scaleX: 0.25,
                    ease: 'Cubic.easeIn',
                    duration: 5000,
                    onComplete: () => {
                        setTimeout(() => {
                            playSound('barksmall');
                        }, 450);
                        this.scene.tweens.add({
                            delay: 400,
                            targets: [gameCharacters.dog],
                            y: "-=60",
                            ease: 'Cubic.easeOut',
                            duration: 220,
                            onComplete: () => {
                                this.scene.tweens.add({
                                    targets: [gameCharacters.dog],
                                    y: "+=60",
                                    ease: 'Cubic.easeIn',
                                    duration: 250,
                                    onComplete: () => {
                                        gameCharacters.dog.setDepth(3);
                                        this.scene.tweens.add({
                                            targets: [gameCharacters.dog],
                                            rotation: -0.1,
                                            ease: 'Cubic.easeOut',
                                            duration: 200,
                                            onComplete: () => {
                                                this.scene.tweens.add({
                                                    targets: [gameCharacters.dog],
                                                    rotation: 0.1,
                                                    ease: 'Cubic.easeInOut',
                                                    duration: 500,
                                                    yoyo: true,
                                                    repeat: 1,
                                                    onComplete: () => {
                                                        this.scene.tweens.add({
                                                            targets: [gameCharacters.dog],
                                                            rotation: 0,
                                                            ease: 'Cubic.easeInOut',
                                                            duration: 300,
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                        this.scene.tweens.add({
                                            delay: 100,
                                            targets: [gameCharacters.dog],
                                            y: "+=25",
                                            x: "-=130",
                                            ease: 'Quad.easeInOut',
                                            duration: 1400,
                                            onComplete: () => {
                                                gameCharacters.dog.scaleX = -1;
                                                playSound('bark');
                                                this.scene.tweens.add({
                                                    delay: 250,
                                                    targets: [gameCharacters.dog],
                                                    y: "-=60",
                                                    ease: 'Cubic.easeOut',
                                                    duration: 220,
                                                    onComplete: () => {
                                                        this.scene.tweens.add({
                                                            delay: 250,
                                                            targets: [gameCharacters.dog],
                                                            y: "+=60",
                                                            ease: 'Cubic.easeIn',
                                                            duration: 280,
                                                            onComplete: () => {
                                                                this.scene.tweens.add({
                                                                    targets: [gameCharacters.backdoor],
                                                                    scaleX: 1,
                                                                    ease: 'Quad.easeIn',
                                                                    duration: 500
                                                                });
                                                                buttonManager.enableAllInput();
                                                                messageBus.publish("radioTempQuietResume");
                                                                if (gameState.ethan2Chatted) {
                                                                    dialogManager.showDialogNode('OpenScratchDoorFinish');
                                                                } else {
                                                                    dialogManager.showDialogNode('OpenScratchDoorFinishEthanTired');
                                                                }
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    stopAnimDoor() {
        gameCharacters.backdoor.stop();
        gameCharacters.backdoor.setFrame('backdoor1.png');
        if (globalObjects.scratchSound) {
            globalObjects.scratchSound.stop();
        }
    }

    juanScratchDoorInterrupt() {
        setTimeout(() => {
            globalObjsTemp.black.setAlpha(0.2);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
            },60);
        },200);
        setTimeout(() => {
            if (!gameState.scratchDoorInterrupt) {
                gameState.scratchDoorInterrupt = true;
                if (gameState.ethan2Chatted) {
                    dialogManager.showDialogNode('ScratchDoorInterrupt');
                } else {
                    dialogManager.showDialogNode('ScratchDoorInterruptEthanTired');
                }
            }
        }, 500);

    }

    radioTempQuietSprawl() {
        this.radioTempQuiet();
        if (globalObjsTemp.sprawlAnim) {
            globalObjsTemp.sprawlAnim.stop();
        } else {
            gameCharacters.sprawl = PhaserScene.add.sprite(-100, -100, 'lowq', 'sprawl.png').setDepth(2).setScale(1.5, 1.5).setOrigin(0.5, 0).setBlendMode(Phaser.BlendModes.MULTIPLY).setAlpha(0.1);
        }
        gameCharacters.sprawl.setAlpha(0.05);
        setTimeout(() => {
            gameCharacters.sprawl.setAlpha(0.005);
        }, 10);

    }

    radioTempQuiet() {
        if (gameVars.radioVolume > 0.05) {
            globalObjsTemp.tempRadioVolume = gameVars.radioVolume;
            setRadioVolume(0.01);
        }
    }

    radioTempQuietResume() {
        setTimeout(() => {
            setRadioVolume(globalObjsTemp.tempRadioVolume);
        }, 150);
    }

    startPhaseThree() {
        if (gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            dialogManager.showDialogNode('DoorScratchStart');
        }
    }

    ethanEldritch1() {
        setTimeout(() => {
            globalObjsTemp.black.setAlpha(0.2);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
            },60);
        },500);
    }

    ethanEldritch2() {
        setTimeout(() => {
            globalObjsTemp.black.setAlpha(0.1);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0.25);
                    gameCharacters.tv.play('tv_shake');
                    setTimeout(() => {
                        globalObjsTemp.black.setAlpha(0);
                    },40);
                },1200 + Math.floor(1200 * Math.random()));
            },30);
        },200 + Math.floor(Math.random() * 800));
    }

    ethanRefreshed() {
        messageBus.publish('EthanInfluence');
        gameCharacters.ethan.setFrame('ethan1.png');
    }

    ethanAsleep() {
        gameCharacters.ethan.setFrame('ethan_sleep.png');
    }

    ethanAwake() {
        gameCharacters.ethan.setFrame('ethan_tired.png');
    }

    brunaFrown() {
        gameCharacters.bruna.setFrame('bruna1_worry.png');

    }

    startEldritchEthan() {
        setRadioVolume(0);
        globalObjsTemp.gloom.setAlpha(0.96);
        playSound('crackle1', 1);
        setCharactersDark();
        globalObjects.indoorRain.setVolume(0);
        let blackBg = this.scene.add.image(1000, gameConsts.halfHeight, 'blackPixel').setDepth(-1).setScale(5000, 1000);

        let spikesEldritch = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'lowq', 'spikes.png').setDepth(10000);
        let realisticEye = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'lowq', 'spook0.jpg').setDepth(10000);
        spikesEldritch.scrollFactorX = 0;
        spikesEldritch.setScale(1.875);
        realisticEye.scrollFactorX = 0;
        realisticEye.setScale(0.86);
        realisticEye.visible = false;
        realisticEye.alpha = 0.03;

        globalObjsTemp.eldritchBlack = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setDepth(10000).setScale(5000, 1000).setAlpha(0.1);
        globalObjsTemp.eldritchBlack.visible = false;

        globalObjsTemp.eyeShakeAmt = 1;
        globalObjsTemp.eyeEldritch = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'characters', 'blackCircle.png').setDepth(10000).setScale(0.413);
        globalObjsTemp.eyeEldritch.startX = globalObjsTemp.eyeEldritch.x; globalObjsTemp.eyeEldritch.startY = globalObjsTemp.eyeEldritch.y;
        globalObjsTemp.eyeEldritch.velX = 0; globalObjsTemp.eyeEldritch.velY = 0;
        globalObjsTemp.eyeEldritch.scrollFactorX = 0;
        globalObjsTemp.eyeEldritchCorner1 = PhaserScene.add.image(globalObjsTemp.eyeEldritch.x, globalObjsTemp.eyeEldritch.y, 'characters', 'eyeCorner.png').setDepth(10000).setScale(0.355);
        globalObjsTemp.eyeEldritchCorner1.scrollFactorX = 0;
        globalObjsTemp.eyeEldritchCorner2 = PhaserScene.add.image(globalObjsTemp.eyeEldritch.x, globalObjsTemp.eyeEldritch.y, 'characters', 'eyeCorner.png').setDepth(10000).setScale(-0.355, 0.355);
        globalObjsTemp.eyeEldritchCorner2.scrollFactorX = 0;
        globalObjsTemp.eyeEldritchCorner3 = PhaserScene.add.image(globalObjsTemp.eyeEldritch.x, globalObjsTemp.eyeEldritch.y - 40, 'characters', 'eyeCorner.png').setDepth(10000).setScale(0.33).setRotation(-1.57);
        globalObjsTemp.eyeEldritchCorner3.scrollFactorX = 0;
        globalObjsTemp.eyeEldritchCorner3.visible = false;

        let funcToAdd = updateManager.addFunction(this.shakeEldritchEye);
        playSound('sizzle', 1);
        setTimeout(() => {
            globalObjsTemp.eyeEldritchCorner3.visible = true;
            globalObjsTemp.eldritchBlack.visible = true;
            realisticEye.visible = true;
            realisticEye.alpha = 0.03;
            setTimeout(() => {
                globalObjsTemp.eldritchBlack.visible = false;
                setTimeout(() => {
                    realisticEye.visible = false;
                }, 10);
            }, 30);
            this.scene.tweens.add({
                targets: globalObjsTemp.eyeEldritchCorner3,
                delay: 500,
                scaleX: 0.355,
                scaleY: 0.355,
                y: globalObjsTemp.eyeEldritch.y,
                ease: 'Quart.easeOut',
                duration: 650,
                completeDelay: 100,
                onComplete: () => {
                    globalObjsTemp.eldritchBlack.visible = true;
                    globalObjsTemp.eldritchBlack.alpha = 0.2;
                    setTimeout(() => {
                        globalObjsTemp.eldritchBlack.visible = false;
                        realisticEye.alpha = 0.2;
                        realisticEye.setScale(1.2);
                        realisticEye.visible = true;
                        setTimeout(() => {
                            realisticEye.visible = false;
                        }, 20);
                    }, 10);
                    this.scene.tweens.add({
                        targets: [globalObjsTemp.eyeEldritchCorner1, globalObjsTemp.eyeEldritchCorner2, globalObjsTemp.eyeEldritchCorner3],
                        scaleX: 0.2,
                        scaleY: 0.2,
                        ease: 'Quad.easeOut',
                        duration: 60,
                        onComplete: () => {
                            realisticEye.visible = true;
                            realisticEye.x = gameConsts.halfWidth + 200; realisticEye.y = gameConsts.halfHeight - 350;
                            setTimeout(() => {
                                globalObjsTemp.eldritchBlack.visible = true;
                                realisticEye.x = gameConsts.halfWidth - 40; realisticEye.y = gameConsts.halfHeight - 10;
                                setTimeout(() => {
                                    globalObjsTemp.eldritchBlack.visible = false;
                                    realisticEye.visible = false;
                                }, 20);
                            }, 15);
                            globalObjsTemp.eyeEldritchCorner1.destroy();
                            globalObjsTemp.eyeEldritchCorner2.destroy();
                            globalObjsTemp.eyeEldritchCorner3.destroy();
                            globalObjsTemp.eyeEldritchCorner1 = null;
                        }
                    });
                    globalObjsTemp.blackEye = PhaserScene.add.image(globalObjsTemp.eyeEldritch.x, globalObjsTemp.eyeEldritch.y, 'characters', 'blackEye.png').setDepth(10000).setScale(0.45);
                    globalObjsTemp.blackEye.scrollFactorX = 0;
                    this.scene.tweens.add({
                        targets: globalObjsTemp.blackEye,
                        scaleX: 0.845,
                        scaleY: 0.845,
                        ease: 'Quad.easeOut',
                        duration: 750,
                        onComplete: () => {
                            // Zoom in starts
                            let eyeZoominSound = playSound('zoomin', 1);
                            globalObjsTemp.eldritchBlack.alpha = 0;
                            globalObjsTemp.eldritchBlack.visible = true;
                            setTimeout(() => {
                                realisticEye.visible = true;
                                realisticEye.alpha = 0.5;
                                realisticEye.x = gameConsts.halfWidth - 30; realisticEye.y = gameConsts.halfHeight + 10;
                                setTimeout(() => {
                                    realisticEye.visible = false;
                                    setTimeout(() => {
                                        playSound('eyeclose', 1);
                                        realisticEye.x = gameConsts.halfWidth; realisticEye.y = gameConsts.halfHeight;
                                        realisticEye.setFrame('spook1.jpg')
                                        realisticEye.visible = true; realisticEye.alpha = 1;
                                        let startScale = 3.05;
                                        realisticEye.setScale(startScale);
                                        setTimeout(() => {
                                            realisticEye.setFrame('spook2.jpg')
                                            realisticEye.setScale(startScale + 0.04 * 1);
                                            setTimeout(() => {
                                                realisticEye.setFrame('spook3.jpg')
                                                realisticEye.setScale(startScale + 0.04 * 2);
                                                setTimeout(() => {
                                                    realisticEye.setFrame('spook1.jpg')
                                                    realisticEye.setScale(startScale + 0.04 * 3);
                                                    setTimeout(() => {
                                                        realisticEye.setFrame('spook2.jpg')
                                                        realisticEye.setScale(startScale + 0.04 * 4);
                                                        setTimeout(() => {
                                                            realisticEye.visible = false;
                                                            setTimeout(() => {
                                                                realisticEye.visible = true;
                                                                realisticEye.setFrame('spook1.jpg')
                                                                realisticEye.setScale(startScale + 0.04 * 7);
                                                                setTimeout(() => {
                                                                    realisticEye.setFrame('spook2.jpg')
                                                                    realisticEye.setScale(startScale + 0.04 * 8);
                                                                    setTimeout(() => {
                                                                        realisticEye.setFrame('spook3.jpg')
                                                                        realisticEye.setScale(startScale + 0.04 * 9);
                                                                        setTimeout(() => {
                                                                            realisticEye.destroy();
                                                                        }, 30);
                                                                    }, 30);
                                                                }, 30);
                                                            }, 75);
                                                        }, 30);
                                                    }, 30);
                                                }, 30);
                                            }, 30);
                                        }, 30);
                                    }, 3200);
                                }, 10);
                            }, 1800);
                            this.scene.tweens.add({
                                targets: globalObjsTemp.eldritchBlack,
                                alpha: 0.25,
                                ease: 'Cubic.easeIn',
                                duration: 6020,
                            });
                            this.scene.tweens.add({
                                targets: globalObjsTemp,
                                eyeShakeAmt: 20,
                                ease: 'Cubic.easeIn',
                                duration: 6020,
                            });
                            this.scene.tweens.add({
                                targets: [globalObjsTemp.blackEye],
                                scaleX: 3.83,
                                scaleY: 3.83,
                                ease: 'Cubic.easeIn',
                                duration: 6020,
                            });
                            this.scene.tweens.add({
                                targets: [globalObjsTemp.eyeEldritch],
                                scaleX: 1.5,
                                scaleY: 1.5,
                                ease: 'Cubic.easeIn',
                                duration: 5980,
                                onComplete: () => {
                                    setTimeout(() => {
                                        eyeZoominSound.destroy();
                                    }, 25);
                                    globalObjsTemp.eyeEldritch.destroy();
                                    globalObjsTemp.blackEye.destroy();
                                    globalObjsTemp.eldritchBlack.destroy();
                                    updateManager.removeFunction(funcToAdd);
                                    spikesEldritch.destroy();
                                    globalObjects.indoorRain.trueVolume = 0.8;
                                    globalObjects.indoorRain.setVolume(0.8 * globalVolume);
                                    setTimeout(() => {
                                        globalObjsTemp.gloom.setAlpha(0.8);
                                        setTimeout(() => {
                                            globalObjsTemp.gloom.setAlpha(0.96);
                                            setTimeout(() => {
                                                globalObjsTemp.gloom.setAlpha(0.8);
                                                setTimeout(() => {
                                                    blackBg.setDepth(99);
                                                    setTimeout(() => {
                                                        blackBg.destroy();
                                                    }, 50);
                                                    globalObjsTemp.gloom.setAlpha(0.96);

                                                    setTimeout(() => {
                                                        dialogManager.showDialogNode('Ethan2EldritchFlash');
                                                        setTimeout(() => {
                                                            this.endEldritchEthan();
                                                        }, 1100);
                                                    }, 900);
                                                }, 50);
                                            }, 175);
                                        }, 50);
                                    }, 1500);
                                }
                            });
                            this.scene.tweens.add({
                                targets: spikesEldritch,
                                scaleX: 1.06,
                                scaleY: 1.06,
                                ease: 'Quint.easeIn',
                                duration: 6000,
                            });
                        }
                    });
                }
            });
            this.scene.tweens.add({
                targets: [globalObjsTemp.eyeEldritchCorner1],
                rotation: 0.524,
                ease: 'Quart.easeInOut',
                duration: 1250
            });
            this.scene.tweens.add({
                targets: [globalObjsTemp.eyeEldritchCorner2],
                rotation: -0.524,
                ease: 'Quart.easeInOut',
                duration: 1250
            });
        }, 2250);

        //             updateManager.removeFunction(funcToAdd);
        /*

        this.scene.tweens.add({
            targets: eyeEldritch,
            scaleX: 1.28,
            scaleY: 1.28,
            ease: 'Quad.easeIn',
            duration: 5750,
            onComplete: () => {

            }
        });

         */
    }

    shakeEldritchEye() {
        globalObjsTemp.eyeEldritch.velX += (Math.random() - 0.5) * globalObjsTemp.eyeShakeAmt * 0.5 + (globalObjsTemp.eyeEldritch.startX - globalObjsTemp.eyeEldritch.x) * 0.5;
        globalObjsTemp.eyeEldritch.x += globalObjsTemp.eyeEldritch.velX + (globalObjsTemp.eyeEldritch.startX - globalObjsTemp.eyeEldritch.x) * 0.4;

        globalObjsTemp.eyeEldritch.velY += (Math.random() - 0.5) * globalObjsTemp.eyeShakeAmt * 0.5 + (globalObjsTemp.eyeEldritch.startY - globalObjsTemp.eyeEldritch.y) * 0.5;
        globalObjsTemp.eyeEldritch.y += globalObjsTemp.eyeEldritch.velY + (globalObjsTemp.eyeEldritch.startY - globalObjsTemp.eyeEldritch.y) * 0.4;

        if (globalObjsTemp.eyeEldritchCorner1) {
            globalObjsTemp.eyeEldritchCorner1.x = globalObjsTemp.eyeEldritch.x + (Math.random() - 0.5) * 1.5;
            globalObjsTemp.eyeEldritchCorner1.y = globalObjsTemp.eyeEldritch.y + (Math.random() - 0.5);
            globalObjsTemp.eyeEldritchCorner2.x = globalObjsTemp.eyeEldritch.x + (Math.random() - 0.5) * 1.5;
            globalObjsTemp.eyeEldritchCorner2.y = globalObjsTemp.eyeEldritch.y + (Math.random() - 0.5);
            globalObjsTemp.eyeEldritchCorner3.x = globalObjsTemp.eyeEldritch.x + (Math.random() - 0.5) * 1.5;
        }
    }

    endEldritchEthan() {
        this.scene.tweens.add({
            targets: globalObjects.indoorRain,
            duration: 400,
            trueVolume: 0.32,
            volume: 0.32 * globalVolume,
        });
        setRadioVolume(0.7);
        globalObjsTemp.gloom.setAlpha(0);
        setCharactersNormal();
        dialogManager.showDialogNode('Ethan2EldritchFin');
    }

    tvemergency() {
        playSound('emergency', 0.85);
        setRadioVolume(0);
        showExclamation();
    }

    tvemergencyEnd() {
        setRadioVolume(0.75);
        gameVars.emergencyBroadcasted = true;
    }

    tvSmash() {
        randGloomShow(0);
        gameCharacters.tv.setFrame('tv_broken.png');
        globalObjsTemp.tvScreamSound.stop();
        gameState.tvSmashed = true;
        gameState.tvSmashedAskMaggie = true;
        playSound('break', 1);

    }
    tvJumpscare() {
        gameCharacters.tv.setFrame('tv_red.png');
        globalObjsTemp.tvScreamSound = playSound('emergency', 1, true);
        gameState.tvSceneThreeEnded = true;
        randGloomShow(0);

        if (globalObjsTemp.black) {
            globalObjsTemp.black.setAlpha(0.4)
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(1);
                    setTimeout(() => {
                        globalObjsTemp.black.setAlpha(0);
                    }, 10);
                }, 1500);
            }, 10);
        }

        dialogManager.showDialogNode('turnOffTV');
    }

    playSound(sound) {
        playSound(sound);
    }

    startDark() {
        randGloomShow();
        clearGoalText();
        globalObjsTemp.black.setAlpha(0).setDepth(8);
        setTimeout(() => {
            globalObjsTemp.black.setAlpha(0.12);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0.1);
                    setTimeout(() => {
                        globalObjsTemp.black.setAlpha(0);
                    }, 50);
                }, 550);
            }, 20);
        }, 250);
    }

    maggieCoffee() {
        gameCharacters.maggieCoffee = this.scene.add.image(-580, gameConsts.halfHeight + 105, 'characters', 'maggie_coffee.png');
        gameCharacters.maggieCoffee.alpha = 0.25;
        gameCharacters.maggieCoffee.setDepth(11);
        this.scene.tweens.add({
            targets: gameCharacters.maggieCoffee,
            alpha: 1,
            duration: 1000,
        });
        this.scene.tweens.add({
            targets: gameCharacters.maggieCoffee,
            duration: 1200,
            x: -810,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                playSound('crackle1', 1);
                globalObjsTemp.black.setAlpha(0.2);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0);
                }, 60);
            }
        });
    }

    maggieCoffeeEnd() {
        this.scene.tweens.add({
            targets: gameCharacters.maggieCoffee,
            alpha: 0,
            duration: 1200,
        });
        this.scene.tweens.add({
            targets: gameCharacters.maggieCoffee,
            duration: 1200,
            x: -580,
            ease: 'Cubic.easeIn'
        });
    }

    harshStorm() {
        let shadow = globalObjsTemp.shadow;
        let eye = this.scene.add.image(-850, gameConsts.halfHeight - 75, 'lowq', 'shadowEye.png').setDepth(-1);
        eye.setScale(1.26, 1.26);
        eye.alpha = 0.05;
        setTimeout(() => {
            this.scene.tweens.add({
                targets: eye,
                duration: 3250,
                scaleX: 1,
                scaleY: 1,
                alpha: 0.7,
                ease: 'Quad.easeOut',
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: eye,
                        duration: 350,
                        scaleX: 0.94,
                        scaleY: 0.94,
                        alpha: 1,
                        ease: 'Quart.easeIn',
                        completeDelay: 100,
                    });
                    this.scene.tweens.add({
                        targets: eye,
                        duration: 100,
                        x: "-=15",
                        y: "+=35",
                        completeDelay: 500,
                        onComplete: () => {
                            this.scene.tweens.add({
                                targets: eye,
                                duration: 700,
                                x: "+=2",
                                y: "-=2",
                                scaleX: 1.02,
                                scaleY: 1.02,
                                ease: 'Cubic.easeOut',
                                onComplete: () => {
                                    this.scene.tweens.add({
                                        targets: eye,
                                        duration: 300,
                                        scaleX: 1,
                                        scaleY: 1,
                                        ease: 'Back.easeOut',
                                    });
                                }
                            });
                            this.scene.tweens.add({
                                targets: eye,
                                duration: 100,
                                x: "-=10",
                                y: "+=8",
                                completeDelay: 900,
                                onComplete: () => {
                                    this.scene.tweens.add({
                                        targets: eye,
                                        duration: 400,
                                        scaleX: 0.99,
                                        scaleY: 0.99,
                                        ease: 'Back.easeOut',
                                    });
                                    this.scene.tweens.add({
                                        targets: eye,
                                        duration: 150,
                                        x: "+=25",
                                        y: "-=8",
                                        completeDelay: 250,
                                        onComplete: () => {
                                            dialogManager.hideDialogNode();
                                            dialogManager.showDialogNode('Interrupt');

                                            let eyelid1 = this.scene.add.image(-850, gameConsts.halfHeight - 260, 'characters', 'blackCircle.png').setDepth(-1).setScale(6).setOrigin(0.5, 0.99);
                                            let eyelid2 = this.scene.add.image(-850 + 173, gameConsts.halfHeight - 75 + 100, 'characters', 'blackCircle.png').setDepth(-1).setScale(6).setOrigin(0.5, 0.99).setRotation(2.09);
                                            let eyelid3 = this.scene.add.image(-850 - 173, gameConsts.halfHeight - 75 + 100, 'characters', 'blackCircle.png').setDepth(-1).setScale(6).setOrigin(0.5, 0.99).setRotation(4.19);
                                            setTimeout(() => {
                                                playSound('eyeclose');
                                            }, 100);
                                            this.scene.tweens.add({
                                                targets: eye,
                                                duration: 150,
                                                scaleX: 0.69,
                                                scaleY: 0.69,
                                                ease: 'Cubic.easeOut',
                                                onComplete: () => {
                                                    this.scene.tweens.add({
                                                        targets: eye,
                                                        duration: 250,
                                                        scaleX: 0.95,
                                                        scaleY: 0.95,
                                                        ease: 'Cubic.easeIn',
                                                        onComplete: () => {
                                                            randGloomShow(0, true);
                                                        }
                                                    });
                                                }
                                            });
                                            this.scene.tweens.add({
                                                targets: [eyelid1, eyelid2, eyelid3],
                                                delay: 150,
                                                duration: 200,
                                                scaleX: 4.9,
                                                scaleY: 4.9,
                                                x: -850,
                                                y: gameConsts.halfHeight - 65,
                                                ease: 'Cubic.easeIn',
                                                onComplete: () => {
                                                    gameCharacters.sprawl = PhaserScene.add.sprite(-1000, 0, 'lowq', 'sprawl.png').setDepth(-1).setScale(2.8, 2.8).setAlpha(0.01);
                                                    eyelid1.destroy();
                                                    eyelid2.destroy();
                                                    eyelid3.destroy();
                                                    gameCharacters.caspar.setFrame('caspar_dark.png');
                                                    globalObjsTemp.black.alpha = 0.35;
                                                    this.scene.tweens.add({
                                                        targets: [shadow, globalObjsTemp.black],
                                                        duration: 200,
                                                        alpha: 0,
                                                        ease: 'Quad.easeOut',
                                                        onComplete: () => {
                                                            shadow.destroy();
                                                        }
                                                    });
                                                    eye.visible = false;
                                                    this.scene.tweens.add({
                                                        targets: [gameCharacters.sprawl],
                                                        duration: 4500,
                                                        scaleX: 2.41,
                                                        alpha: 0.15,
                                                        ease: 'Cubic.easeIn',
                                                        onComplete: () => {
                                                            setTimeout(() => {
                                                                playSound('click', 0.8);
                                                            }, 150);
                                                            eye.destroy();
                                                            gameCharacters.sprawl.setScale(2.1);
                                                            gameCharacters.sprawl.setAlpha(0.2);
                                                            gameCharacters.sprawl.x += 70;
                                                            setTimeout(() => {
                                                                gameCharacters.sprawl.setScale(2.05);
                                                                gameCharacters.sprawl.setAlpha(0.25);
                                                                gameCharacters.sprawl.x += 10;
                                                                setTimeout(() => {
                                                                    setTimeout(() => {
                                                                        gameCharacters.sprawl.setScale(2.25);
                                                                        gameCharacters.sprawl.setAlpha(0.3);
                                                                        gameCharacters.sprawl.x += 100;
                                                                        setTimeout(() => {
                                                                            gameCharacters.sprawl.setScale(2.3);
                                                                            gameCharacters.sprawl.setAlpha(0.4);
                                                                            gameCharacters.sprawl.x += 150;
                                                                            setTimeout(() => {
                                                                                gameCharacters.sprawl.destroy();
                                                                            }, 50)
                                                                        }, 50);
                                                                    }, 200);
                                                                }, 350)
                                                            }, 50);
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }, 250);
    }

    actOneEnd() {
        gameState.powerOff = true;
        gameState.currentScene = 2;
        resetRadioPosition();
        this.updateRadioChannels();
        globalObjsTemp.black.setAlpha(0).setDepth(8);
        globalObjsTemp.gloom.setAlpha(0.3).setDepth(8);
        playSound('crackle1', 1);

        gameCharacters.sign.rotation = 0.11;

        setTimeout(() => {
            globalObjsTemp.gloom.setAlpha(0);
            setTimeout(() => {
                globalObjsTemp.gloom.setAlpha(0.45);
                this.scene.tweens.add({
                    targets: globalObjects.indoorRain,
                    duration: 3000,
                    trueVolume: 1,
                    volume: 1 * globalVolume,
                });
                setRadioVolume(0);
                globalObjsTemp.radioMusic.stop();
                setTimeout(() => {
                    playSound('sizzle', 1);
                    globalObjsTemp.gloom.setAlpha(0.65);
                    setTimeout(() => {
                        globalObjsTemp.gloom.setAlpha(0.35);
                        setTimeout(() => {
                            globalObjsTemp.gloom.setAlpha(0.65);
                            setTimeout(() => {
                                playSound('crackle1', 1);
                                globalObjsTemp.gloom.setAlpha(0.35);
                                setTimeout(() => {
                                    globalObjsTemp.gloom.setAlpha(0.65);
                                    setTimeout(() => {
                                        playSound('stopscreech', 1);

                                        globalObjsTemp.gloom.setAlpha(0.96);
                                        globalObjsTemp.black.setAlpha(1);
                                        setCharactersDark();
                                        gameCharacters.maggieCoffee.setFrame('maggie_coffee_dark.png');
                                        setTimeout(() => {
                                            globalObjsTemp.black.setAlpha(0);
                                            this.showWindowShadow1();
                                            setTimeout(() => {
                                                globalObjsTemp.gloom.setAlpha(0.9);
                                                setTimeout(() => {
                                                    globalObjsTemp.gloom.setAlpha(0.96);
                                                }, 70);
                                            }, 2000);
                                        }, 80);
                                    }, 700);
                                }, 50);
                            }, 300);
                        }, 50);
                    }, 500);
                }, 80);
            }, 1100);
        }, 100);
    }

    actTwoEnd() {
        gameState.currentScene = 3;
        this.updateRadioChannels();
    }

    showWindowShadow1() {
        randGloomShow(0);
        // Now using scene two logic
        this.scene.tweens.add({
            targets: globalObjsTemp.gloom,
            duration: 1000,
            alpha: 1,
        });
        globalObjsTemp.black.setAlpha(0.65);
        this.scene.tweens.add({
            targets: [globalObjsTemp.black],
            duration: 750,
            alpha: 0,
            ease: 'Quad.easeOut',
        });
        helperFunction.screenShake();

        setTimeout(() => {
            dialogManager.hideDialogNode();
            setTimeout(() => {
                dialogManager.showDialogNode('Yelling');
            }, 250);
        }, 150);
        let shadow = this.scene.add.image(-900, gameConsts.halfHeight, 'characters', 'shadow1.png').setScale(15,10).setDepth(-1);
        globalObjsTemp.shadow = shadow;
    }

    generatorFixed(fixAmt = 1) {
        gameState.fixGenerator = fixAmt;
        gameState.powerOff = false;
        globalObjsTemp.gloom.setAlpha(0);
        setCharactersNormal();
    }

    edithStandCorner() {
        randGloomShow(0);
        gameCharacters.edith.setFrame('edith2.png');
        gameCharacters.edith.scaleX = -1;
        const EdithFinalPos = 50;
        globalObjects.diner.EdithButton.setPos(EdithFinalPos, globalObjects.diner.EdithButton.getPosY());
        // gameCharacters.edith
        this.scene.tweens.add({
            targets: gameCharacters.edith,
            duration: 1000,
            x: "-=500",
            delay: 100,
            alpha: 0,
            ease: 'Cubic.easeIn',
            onComplete: () => {
                gameCharacters.edith.scaleX = 1;
                gameCharacters.edith.alpha = 1;
                gameCharacters.edith.x = EdithFinalPos;
            }
        });
    }

    updateRadioChannels() {
        if (gameState.currentScene == 1) {
            globalObjsTemp.songs = {
                235.75: 'dabbda',
                294.25: 'off_to_osaka',
                356: 'main_poor',
                386.25: 'matts_blues',
                446.75: 'weatherblur',
                506: 'news1'
            };
        } else if (gameState.currentScene == 2) {
            globalObjsTemp.songs = {
                235.75: 'lofi',
                294.25: 'news2',
                356: 'main_poor',
                386.25: 'matts_blues_bad',
                446.75: 'weatherblur',
                506: 'off_to_osaka',
            };
        } else if (gameState.goodEndLocked) {
            // Final music find
            globalObjsTemp.songs = {
                356: 'main_ok',
            };
        } else if (gameState.currentScene == 3) {
            if (globalObjsTemp.radioStatic1) {
                globalObjsTemp.radioStatic1.stop();
                if (globalObjsTemp.radioStatic2) {
                    globalObjsTemp.radioStatic2.stop();
                }
            }
            globalObjsTemp.radioStatic1 = playSound('sellafieldalarm', 0.2, true);
            globalObjsTemp.songs = {
                235.75: 'news3',
                294.25: 'off_to_osaka',
                356: 'main_poor',
                446.75: 'lofi',
            };
        }
    }

    startAction() {
        globalObjects.moveLeftBtn.setScale(-0.5, 0.9);
        globalObjects.moveRightBtn.setScale(0.5, 0.9);
        globalObjects.moveLeftBtn.tweenToScale(-1, 1, 750, 'Back.easeOut');
        globalObjects.moveRightBtn.tweenToScale(1, 1, 750, 'Back.easeOut');
        setNewGoalText('Goal: Find an empty seat')
    }

    reset() {
        for (let i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
    }
}
