class MiscSubscribe {
    constructor(scene) {
        this.scene = scene || PhaserScene;


        messageBus.subscribe("startDark", this.startDark.bind(this));

        messageBus.subscribe("MaggieCoffee", this.maggieCoffee.bind(this));
        messageBus.subscribe("maggieCoffeeEnd", this.maggieCoffeeEnd.bind(this));
        messageBus.subscribe("harshStorm", this.harshStorm.bind(this));

        messageBus.subscribe("ActOneEnd", this.actOneEnd.bind(this));
        messageBus.subscribe("playSound", this.playSound.bind(this));
        messageBus.subscribe("tvemergency", this.tvemergency.bind(this));
        messageBus.subscribe("tvemergencyEnd", this.tvemergencyEnd.bind(this));
        messageBus.subscribe("tvJumpscare", this.tvJumpscare.bind(this));

        messageBus.subscribe("exitEarlySceneTwo", this.exitEarlySceneTwo.bind(this));
        messageBus.subscribe("generatorFixed", this.generatorFixed.bind(this));

        messageBus.subscribe("edithStandCorner", this.edithStandCorner.bind(this));

        messageBus.subscribe("EdithInfluenceEthanDecline", this.edithInfluenceEthanDecline.bind(this));
        messageBus.subscribe("startEldritchEthan", this.startEldritchEthan.bind(this));
        messageBus.subscribe("endEldritchEthan", this.endEldritchEthan.bind(this));

        messageBus.subscribe("ethanEldritch1", this.ethanEldritch1.bind(this));
        messageBus.subscribe("ethanEldritch2", this.ethanEldritch2.bind(this));


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
            globalObjsTemp.black.setAlpha(0.2);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0.25);
                    gameCharacters.tv.play('tv_shake');
                    setTimeout(() => {
                        globalObjsTemp.black.setAlpha(0);
                    },60);
                },1500);
            },40);
        },500);
    }

    startEldritchEthan() {
        globalObjsTemp.gloom.setAlpha(1);
        setCharactersDark();
    }

    endEldritchEthan() {
        globalObjsTemp.gloom.setAlpha(0);
        setCharactersNormal();
    }

    edithInfluenceEthanDecline() {
        messageBus.publish("EdithInfluence");
        messageBus.publish("EthanInfluenceDecline");
    }

    exitEarlySceneTwo() {
        console.log("Exit early scene two, TODO");
    }

    tvemergency() {
        playSound('emergency');
        setRadioVolume(0);
        showExclamation();
    }

    tvemergencyEnd() {
        setRadioVolume(0.75);
        gameVars.emergencyBroadcasted = true;
    }

    tvJumpscare() {
        // TODO Replace
        playSound('emergency');
        gameState.tvScreaming = true;
    }

    playSound(sound) {
        playSound(sound);
    }

    startDark() {
        globalObjsTemp.black = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setScale(5000, 999);
        globalObjsTemp.black.setAlpha(0).setDepth(8);
        setTimeout(() => {
            globalObjsTemp.black.setAlpha(0.15);
            setTimeout(() => {
                globalObjsTemp.black.setAlpha(0);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0.1);
                    setTimeout(() => {
                        globalObjsTemp.black.setAlpha(0);
                    }, 40);
                }, 350);
            }, 60);
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
                globalObjsTemp.black.setAlpha(0.2);
                setTimeout(() => {
                    globalObjsTemp.black.setAlpha(0);
                }, 100);
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
        let eye = this.scene.add.image(-850, gameConsts.halfHeight - 75, 'characters', 'shadowEye.png').setDepth(-1);
        eye.setScale(1.26, 1.26);
        eye.alpha = 0.05;
        setTimeout(() => {
            this.scene.tweens.add({
                targets: eye,
                duration: 3250,
                scaleX: 1,
                scaleY: 1,
                alpha: 0.7,
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: eye,
                        duration: 350,
                        scaleX: 0.96,
                        scaleY: 0.96,
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
                                scaleX: 1.04,
                                scaleY: 1.04,
                                ease: 'Cubic.easeOut',
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
                                        scaleX: 1.01,
                                        scaleY: 1.01,
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
                                            this.scene.tweens.add({
                                                targets: eye,
                                                duration: 200,
                                                scaleX: 0.75,
                                                scaleY: 0.25,
                                                ease: 'Cubic.easeIn',
                                                onComplete: () => {
                                                    gameCharacters.caspar.setFrame('caspar_dark.png');
                                                    dialogManager.showDialogNode('Interrupt');
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
                                                    eye.destroy();
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
        globalObjsTemp.gloom = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(5000, 999);
        if (!globalObjsTemp.black) {
            globalObjsTemp.black = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setScale(5000, 999);
            globalObjsTemp.black.setAlpha(0).setDepth(8);
        }
        globalObjsTemp.gloom.setBlendMode(Phaser.BlendModes.DARKEN);
        globalObjsTemp.gloom.setAlpha(0.2).setDepth(8);

        setTimeout(() => {
            globalObjsTemp.gloom.setAlpha(0);
            setTimeout(() => {
                globalObjsTemp.gloom.setAlpha(0.4);
                this.scene.tweens.add({
                    targets: globalObjects.indoorRain,
                    duration: 3000,
                    volume: 1,
                });
                setRadioVolume(0);
                setTimeout(() => {
                    globalObjsTemp.gloom.setAlpha(0.35);
                    setTimeout(() => {
                        globalObjsTemp.gloom.setAlpha(1);
                        globalObjsTemp.black.setAlpha(1);
                        setCharactersDark();
                        gameCharacters.maggieCoffee.setFrame('maggie_coffee_dark.png');
                        setTimeout(() => {
                            globalObjsTemp.black.setAlpha(0);
                            this.showWindowShadow1();
                            setTimeout(() => {
                                globalObjsTemp.gloom.setAlpha(0.9);
                                setTimeout(() => {
                                    globalObjsTemp.gloom.setAlpha(1);
                                }, 70);
                            }, 2000);
                        }, 80);
                    }, 1600);
                }, 70);
            }, 700);
        }, 70);
    }

    showWindowShadow1() {
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
        gameCharacters.edith.setFrame('edith2.png');
        gameCharacters.edith.scaleX = -1;
        const EdithFinalPos = -100;
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
}
