class GameFinal {
    constructor(scene) {
        this.scene = scene || PhaserScene;
        this.subscriptions = [
            messageBus.subscribe("exitEarlySceneTwo", this.exitEarlySceneTwo.bind(this)),
            messageBus.subscribe("exitFinale", this.endGame.bind(this)),
            messageBus.subscribe("exitFinaleForce", this.endGameForce.bind(this)),
            messageBus.subscribe("stayFinale", this.stayFinale.bind(this)),
            messageBus.subscribe("forceGoodEnd", this.showGoodEnd2.bind(this)),

            messageBus.subscribe("juanContinue", this.endGameForce.bind(this)),
        ];

        this.displayedLines = [];
    }

    reset() {
        for (let i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
        this.displayedLines = [];
        helperFunction.destroyList([
            this.theEnd, this.theEndTitle,
            this.restartButton,
            this.text1, this.text2
        ]);
    }

    stayFinale() {
        globalObjects.diner.ExitButton.destroy();
        globalObjects.diner.JuanButton.destroy();
        globalObjects.diner.EthanButton.destroy();
        globalObjects.diner.EdithButton.destroy();
        globalObjects.diner.maggieButton.destroy();
        globalObjects.diner.BrunaButton.destroy();
        globalObjects.diner.RadioButton.destroy();
        globalObjects.diner.TVButton.destroy();
        globalObjects.diner.BackdoorButton.destroy();
        globalObjects.diner.CasparButton.destroy();
        globalObjects.moveLeftBtn.destroy();
        globalObjects.moveRightBtn.destroy();

        if (!globalObjsTemp.radioStatic1) {
            globalObjsTemp.radioStatic1 = {volume: 1};
        }
        if (!globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2 = {volume: 1};
        }
        playSound('crackle1');

        this.scene.tweens.add({
            targets: [gameVars, globalObjsTemp.radioMusic, globalObjsTemp.radioStatic1, globalObjsTemp.radioStatic2],
            radioVolume: 0,
            volume: 0,
            duration: 3000,
            onComplete: () => {
                globalObjsTemp.radioMusic.stop();
                playSound('sizzle');
            }
        });
        this.blackScreen = this.scene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setAlpha(0).setDepth(9999);
        this.blackScreen.setScale(5000, 1000);
        globalObjsTemp.gloom = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(5000, 999).setDepth(8).setAlpha(0);
        globalObjsTemp.gloom.scrollFactorX = 0;
        globalObjsTemp.gloom.scrollFactorY = 0;
        globalObjsTemp.gloom.setBlendMode(Phaser.BlendModes.DARKEN);

        setTimeout(() => {
            let alarmSound = {volume: 0};
            playSound('arrival');
            if (!globalObjsTemp.shadow) {
                globalObjsTemp.shadow = this.scene.add.image(-900, gameConsts.halfHeight, 'characters', 'shadow1.png').setScale(30,20).setDepth(-1);
            }
            setTimeout(() => {
                helperFunction.setShake(0.1);
                alarmSound = playSound('sellafieldalarmfull');
                this.scene.tweens.add({
                    targets: [alarmSound],
                    volume: 0.01,
                    duration: 50,
                    onComplete: () => {
                        helperFunction.setShake(0.2);
                        this.scene.tweens.add({
                            targets: [alarmSound],
                            volume: 0.02,
                            duration: 150,
                            onComplete: () => {
                                helperFunction.setShake(0.25);
                                this.scene.tweens.add({
                                    targets: [alarmSound],
                                    volume: 0.09,
                                    duration: 2500
                                });
                            }
                        });
                    }
                });
            }, 1300);
            globalObjsTemp.shadow.visible = true;
            globalObjsTemp.shadow.alpha = 1;
            globalObjsTemp.shadow.x = 3000;
            globalObjsTemp.shadow.rotation = 0.1;
            setTimeout(() => {
                this.blackScreen.alpha = 1;
                setTimeout(() => {
                    this.blackScreen.alpha = 0
                    globalObjsTemp.gloom.alpha = 0.1;
                }, 30);
            }, 3550);
            this.scene.tweens.add({
                delay: 3600,
                targets: globalObjsTemp.shadow,
                x: 1900,
                duration: 200,
                completeDelay: 1500,
                onComplete: () => {
                    messageBus.publish("hideAllDialog");
                    gameCharacters.tentacle = PhaserScene.add.sprite(1682, gameConsts.halfHeight -105, 'characters', 'tentacle.png').setDepth(0).setOrigin(0.45, 0.7).setScale(0.6).setAlpha(0.98);
                    setTimeout(() => {
                        this.blackScreen.alpha = 1;
                        globalObjects.window2.destroy();
                        playSound('click');
                        setTimeout(() => {
                            this.blackScreen.alpha = 0
                            setTimeout(() => {
                                this.blackScreen.alpha = 1;
                                setTimeout(() => {
                                    this.blackScreen.alpha = 0
                                    globalObjsTemp.gloom.alpha = 0.15;
                                }, 50);
                            }, 20)
                        }, 50);
                    }, 20)
                    this.scene.tweens.add({
                        targets: gameCharacters.tentacle,
                        duration: 150,
                        ease: 'Cubic.easeOut',
                        alpha: 1,
                        scaleX: 1.25,
                        scaleY: 1.25,
                        onComplete: () => {
                            this.blackScreen.alpha = 1;
                            setTimeout(() => {
                                this.blackScreen.alpha = 0;
                                globalObjsTemp.gloom.alpha = 0.25;
                            }, 30);
                            this.scene.tweens.add({
                                targets: [alarmSound],
                                volume: 0.5,
                                duration: 4000
                            });
                            helperFunction.scrollTo(1353)
                            helperFunction.setShake(0.75);
                            gameCharacters.edith.destroy();
                            gameCharacters.juan.setFrame('juan_fall.png');
                            gameCharacters.juan.x += 15;
                            gameCharacters.juan.y = gameConsts.halfHeight + 198;
                            if (gameState.ethanStandingUp) {
                                gameCharacters.ethan.rotation = Math.PI * 0.5;
                            } else {
                                gameCharacters.ethan.setFrame('ethan_tired.png');
                            }
                            this.stayFinale2();
                        }
                    });
                }
            });
        }, 1000);
    }

    exitEarlySceneTwo() {
        this.fadeOut();
        this.createEpilogue();
        this.createDisplayedLines();
        this.playDisplayedLines();
    }

    endGame() {
        console.log("Epilogue");
        this.checkJuanThenContinue();
    }

    endGameForce() {
        if (gameState.MaggieSaved) {
            this.fadeOut(this.showGoodEnd);
        } else {
            this.fadeOut();
            this.createEpilogue();
            this.createDisplayedLines();
            this.playDisplayedLines();
        }
    }

    showGoodEnd() {
        this.blackScreen.alpha = 0;
        globalObjsTemp.epilogueBG = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'epilogue', 'scene1a.png').setDepth(9998);
        globalObjsTemp.epilogueBG.scrollFactorX = 0;
        globalObjsTemp.epilogueBG.scrollFactorY = 0;
        this.showSlideshow(globalObjsTemp.epilogueBG, [
            {image: 'scene1b.png', delay: 1250},
            {image: 'scene1c.png', delay: 1250},
            {image: 'scene1d.png', delay: 1000},
            {image: 'scene1e.png', delay: 750},
            {image: 'scene1f.png', delay: 750},
        ],
            () => {
            // Screenshake
                setTimeout(() => {
                    globalObjsTemp.epilogueBG.x += 3;
                    setTimeout(() => {
                        this.blackScreen.alpha = 1;
                        setTimeout(() => {
                            this.blackScreen.alpha = 0;
                        }, 25);

                        if (!gameVars.eldritchShown) {
                            globalObjsTemp.epilogueBG.setFrame('scene1g.png');
                        }
                    }, 900)
                    this.scene.tweens.add({
                        targets: globalObjsTemp.epilogueBG,
                        duration: 120,
                        x: globalObjsTemp.epilogueBG.x - 6,
                        yoyo: true,
                        repeat: 13,
                        onComplete: () => {
                            this.showFinaleMonsterErupt();
                        }
                    });
                }, 1000);

            }
            );
    }

    showSlideshow(image, data = [], onFinish) {
        let nextDataObj = data.shift();
        if (nextDataObj) {
            setTimeout(() => {
                image.setFrame(nextDataObj.image);
                this.showSlideshow(image, data, onFinish);
            }, nextDataObj.delay);
        } else if (onFinish) {
            onFinish();
        }
    }

    showFinaleMonsterErupt() {
        this.blackScreen.alpha = 1;
        setTimeout(() => {
            this.blackScreen.alpha = 0;
        }, 25);
        gameVars.eldritchShown = true;
        globalObjsTemp.epilogueBG.setFrame('scene1h.png');
        globalObjsTemp.epilogueMonster = PhaserScene.add.sprite(gameConsts.halfWidth - 50, gameConsts.halfHeight + 120, 'epilogue', 'monster.png').setDepth(9998).setOrigin(0.5, 1).setScale(0.96, 0.92);
        globalObjsTemp.epilogueMonster.scrollFactorX = 0; globalObjsTemp.epilogueMonster.scrollFactorY = 0;
        this.scene.tweens.add({
            targets: [globalObjsTemp.epilogueMonster],
            scaleX: 1,
            scaleY: 1.1,
            duration: 2100,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                globalObjsTemp.epilogueMonster.destroy();
                globalObjsTemp.epilogueBG.setScale(1.08, 1.08);
                globalObjsTemp.epilogueBG.x = gameConsts.halfWidth;
                globalObjsTemp.epilogueBG.y = gameConsts.halfHeight - 5;
                globalObjsTemp.epilogueBG.setFrame('scene2a.png');
                this.scene.tweens.add({
                    targets: globalObjsTemp.epilogueBG,
                    duration: 1200,
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'Quad.easeOut',
                });
                this.scene.tweens.add({
                    targets: globalObjsTemp.epilogueBG,
                    duration: 350,
                    y: globalObjsTemp.epilogueBG.y + 10,
                    ease: 'Cubic.easeIn',
                    yoyo: true,
                    repeat: 3,
                    onComplete: () => {
                        this.showCasparZoomOut();
                    }
                });
            }
        });
    }

    showCasparZoomOut() {
        globalObjsTemp.epilogueBG.y = gameConsts.halfHeight;
        PhaserScene.cameras.main.setZoom(1.05);
        globalObjsTemp.GreyBG = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'grey_pixel.png').setDepth(9997).setScale(5000, 1000);
        globalObjsTemp.epilogueBG.setFrame('scene3a.png');
        globalObjsTemp.monsterBG = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight - 210, 'epilogue', 'monster.png').setDepth(9997).setScale(1.8).setOrigin(0.5, 0.46);
        globalObjsTemp.monsterBG.scrollFactorX = 0; globalObjsTemp.monsterBG.scrollFactorY = 0;
        globalObjsTemp.CasparWave = PhaserScene.add.sprite(gameConsts.halfWidth - 10, gameConsts.halfHeight + 160, 'epilogue', 'casparwave.png').setDepth(9998).setScale(0.6);
        globalObjsTemp.CasparWave.scrollFactorX = 0; globalObjsTemp.CasparWave.scrollFactorY = 0;
        globalObjsTemp.CasparWaveHand = PhaserScene.add.sprite(globalObjsTemp.CasparWave.x + 10, globalObjsTemp.CasparWave.y - 15, 'epilogue', 'casparhand.png').setDepth(9998).setScale(0.6);
        globalObjsTemp.CasparWaveHand.scrollFactorX = 0; globalObjsTemp.CasparWaveHand.scrollFactorY = 0;
        globalObjsTemp.CasparWaveHand.rotation = -0.03;
        globalObjsTemp.CasparWaveFront = PhaserScene.add.sprite(globalObjsTemp.CasparWave.x, globalObjsTemp.CasparWave.y, 'epilogue', 'casparfront.png').setDepth(9998).setScale(0.6);
        globalObjsTemp.CasparWaveFront.scrollFactorX = 0; globalObjsTemp.CasparWaveFront.scrollFactorY = 0;

        PhaserScene.tweens.add({
            targets: globalObjsTemp.CasparWaveHand,
            rotation: 0.2,
            duration: 900,
            ease: 'Cubic.easeInOut',
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                PhaserScene.tweens.add({
                    targets: globalObjsTemp.CasparWaveHand,
                    rotation: 0.9,
                    duration: 1800,
                    ease: 'Quad.easeIn',
                });
            }
        });

        PhaserScene.tweens.add({
            targets: globalObjsTemp.monsterBG,
            scaleX: 2.25,
            scaleY: 2.25,
            duration: 6000
        });

        PhaserScene.tweens.add({
            delay: 4000,
            targets: [globalObjsTemp.CasparWave, globalObjsTemp.CasparWaveHand, globalObjsTemp.CasparWaveFront],
            alpha: 0,
            duration: 1500,
        });

        PhaserScene.tweens.add({
            targets: PhaserScene.cameras.main,
            zoom: 0.75,
            duration: 6000,
            onComplete: () => {
                globalObjsTemp.monsterBG.destroy();
                globalObjsTemp.CasparWave.destroy();
                globalObjsTemp.CasparWaveHand.destroy();
                globalObjsTemp.CasparWaveFront.destroy();
                PhaserScene.cameras.main.setZoom(1);
                globalObjsTemp.epilogueBG.setFrame('scene5a.png');
                this.showSlideshow(globalObjsTemp.epilogueBG, [
                    {image: 'scene5a.png', delay: 50},
                    {image: 'scene5b.png', delay: 650},
                    {image: 'scene5c.png', delay: 650},
                    {image: 'scene5d.png', delay: 650},
                    {image: 'scene5e.png', delay: 650},
                ],
                    () => {
                        PhaserScene.tweens.add({
                            targets: this.blackScreen,
                            alpha: 1,
                            duration: 1000,
                            onComplete: () => {
                                this.createDisplayedLinesBest();
                                this.playDisplayedLines();
                            }
                        });
                    });
            }
        });
    }

    showGoodEnd2() {
        this.fadeOut(this.showGoodEnd);
    }

    playStayEpilogue() {
        messageBus.publish("hideAllDialog");
        PhaserScene.cameras.main.setZoom(1);

        this.theEnd = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 90, 'THE END', {fontFamily: 'Times New Roman', fontSize: 36, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0.001).setDepth(10000);
        this.theEndTitle = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 44, 'Ending #-1: YOU STAYED', {fontFamily: 'Times New Roman', fontSize: 18, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0.001).setDepth(10000);
        this.theEnd.scrollFactorX = 0;
        this.theEnd.scrollFactorY = 0;
        this.theEndTitle.scrollFactorX = 0;
        this.theEndTitle.scrollFactorY = 0;

        this.scene.tweens.add({
            delay: 1000,
            targets: [this.theEnd],
            alpha: 1,
            duration: 2000
        });
        this.scene.tweens.add({
            delay: 3000,
            targets: [this.theEnd, this.theEndTitle],
            alpha: 1,
            duration: 2500
        });

        setTimeout(() => {
            this.createRestartButton();
            this.restartButton.setState(NORMAL);
        }, 4000)
    }

    checkJuanThenContinue() {
        console.log("Checking juan")
        if (gameState.juanLeaveStatus !== "accept" && gameState.juanLeaveStatus !== "onlyUseful") {
            // Juan already not coming
            console.log("juan not coming");
            this.endGameForce();
            return;
        }
        gameState.JuanSaved = true;
        let numAltSaved = gameState.EdithSaved + gameState.EthanSaved + gameState.BrunaSaved;
        if (gameState.MaggieSaved) {
            // Juan is okay if everyone is saved
            dialogManager.hideDialogNode();
            dialogManager.showDialogNode('JuanAllSaved');
        } else if (numAltSaved >= 2) {
            dialogManager.hideDialogNode();
            gameState.JuanSaved = false;
            if (gameState.juanLeaveStatus === "accept") {
                dialogManager.showDialogNode('JuanQuestionMultiAccept');
            } else {
                dialogManager.showDialogNode('JuanQuestionMulti');
            }
        } else {
            this.endGameForce();
        }
    }

    createDisplayedLines() {
        this.displayedLines[0] = "You exit the diner";
        let numTotalSaved = 0;
        numTotalSaved += gameState.EdithSaved + gameState.EthanSaved + gameState.BrunaSaved + gameState.JuanSaved + gameState.MaggieSaved + gameState.DogSaved;
        if (gameState.EdithSaved && gameState.EthanSaved && gameState.BrunaSaved && gameState.JuanSaved && gameState.MaggieSaved) {
            this.displayedLines.push("[ERROR 1: Not sure how you got in this state,\nbut you did save everyone somehow]")
        } else if (numTotalSaved === 1) {
            let pushText = ", with " + (gameState.BrunaSaved ? "Bruna." : "")
                + (gameState.EthanSaved ? "Ethan." : "")
                + (gameState.EdithSaved ? "Edith." : "")
                + (gameState.JuanSaved ? "Juan." : "")
                + (gameState.DogSaved ? "the dog." : "")
                + (gameState.MaggieSaved ? "[ERROR 2]." : "")
            this.displayedLines.push(pushText)
        } else if (numTotalSaved === 0) {
            this.displayedLines.push(". Alone.")
        } else {
            let pushText = ", with";
            let countdownSaved = numTotalSaved;
            if (gameState.BrunaSaved) {
                countdownSaved -= 1;
                pushText += " Bruna,"
            }
            if (gameState.EthanSaved) {
                countdownSaved -= 1;
                if (countdownSaved === 0) {
                    pushText += " and Ethan."
                } else {
                    pushText += " Ethan,"
                }
            }
            if (countdownSaved > 0 && gameState.EdithSaved) {
                countdownSaved -= 1;
                if (countdownSaved === 0) {
                    pushText += " and Edith."
                } else {
                    pushText += " Edith,"
                }
            }
            if (countdownSaved > 0 && gameState.JuanSaved) {
                countdownSaved -= 1;
                if (countdownSaved === 0) {
                    pushText += " and Juan."
                } else {
                    pushText += " Juan,"
                }
            }
            if (countdownSaved > 0 && gameState.DogSaved) {
                pushText += " and the dog."
            }
            this.displayedLines.push(pushText)
        }
        if (gameState.radio2Done || gameState.radio3Done) {
            if (gameState.BrunaSaved) {
                if (gameState.JuanSaved) {
                    this.displayedLines.push("\n\nBruna and Juan chart a route with you to Hope Springs.")
                } else {
                    this.displayedLines.push("\n\nBruna charts a route with you to Hope Springs.")
                }
            } else {
                this.displayedLines.push("\n\nYou check your maps for a place called Hope Springs.")
                if (gameState.JuanSaved) {
                    this.displayedLines.push("\n\nEven though your maps are outdated, Juan helps you chart\nout a path.")
                } else {
                    this.displayedLines.push("\n\nYou get a rough idea where it is, but your maps are outdated.")
                }
            }
        } else {
            this.displayedLines.push("\n\nYou don't have any particular destination so you head towards\nthe nearest city.")
        }
        if (gameState.BrunaSaved) {
            this.displayedLines.push("\n\nThe storm makes it difficult to find your way and the road signs\nare illegible,")
            this.displayedLines.push(" but Bruna's GPS tracks every twist and turn.")
        } else if (gameState.JuanSaved) {
            this.displayedLines.push("\n\nThe storm makes it difficult to find your way and the road signs\nare illegible,")
            this.displayedLines.push(" but Juan helps keep you headed in the right direction.")
        } else {
            this.displayedLines.push("\n\nThe storm makes it difficult to find your way and the road signs\nare illegible.")
            this.displayedLines.push("\n\nIt is not long before you are hopelessly lost.")
            if (numTotalSaved >= 1) {
                this.theEndTitle.setText('Ending #2: Lost Together')
            }
            this.addEndingFailedLine();
            return;
        }
        if (gameState.EthanSaved) {
            this.displayedLines.push("\n\nWhile driving, Ethan suddenly shouts with uncharacteristic energy\n\"Step on it man! It's coming!\"");
            this.displayedLines.push("\nYou don't question him and go as fast as you can without crashing.\nIn your back mirror, you see a vague glimpse of an impossibly large\nshadow in the distance. Ethan calms down soon after.");
        } else if (gameState.JuanSaved) {
            this.displayedLines.push("\n\nWhile driving, Juan points out something impossibly large quickly\napproaching your truck.");
            this.displayedLines.push("\n\nYou floor the vehicle and feel something trying to claw at it, but\nyou barely manage to make it away.");
        } else {
            this.displayedLines.push("\n\nWhile driving, you notice something impossibly large quickly\napproaching your truck.");
            this.displayedLines.push("\n\nYou floor the vehicle, but it is too late and you feel something\ncrash into the truck toppling it over.");
            if (numTotalSaved >= 1) {
                this.theEndTitle.setText("Ending #3: Devoured");
            }
            this.addEndingFailedLine();
            return;
        }

        this.displayedLines.push("\n\nYou finally arrive at the Hope Springs stronghold where a number\nof other survivors are gathered.");

        if (gameState.JuanSaved) {
            this.displayedLines.push("The stronghold is more like\na makeshift camp, but Juan\"s carpentry expertise provides\neveryone with sturdier shelter.");
        } else {
            this.displayedLines.push("The stronghold is more like\na makeshift camp in the chilly wind.");
        }

        if (gameState.MaggieSaved) {
            this.displayedLines.push("\n\nThe stronghold's rations are stale and cold, but Maggie's extra\nsupplies and cooking brings warmth and smiles.");
            this.theEndTitle.setText('Ending #6: Future Hope');
        } else if (gameState.maggieSandwichEnd) {
            this.displayedLines.push("\n\nThe stronghold's rations are stale and cold, so you bring out\nMaggie's sandwiches and dig in.");
            this.displayedLines.push("\nMaggie's sandwiches are delicious.");
            this.displayedLines.push("\n...");
            this.displayedLines.push("\nMaggie's sandwiches are gone.••••••••••••••••");
            this.theEndTitle.setText('Ending #5: The Last Tasty Supper');
        } else {
            this.displayedLines.push("\n\nThe stronghold's rations are stale and cold.");
            this.displayedLines.push("\n\nThey are enough to survive on, but only barely.");
            this.theEndTitle.setText('Ending #4: Bare Minimum');
        }

    }

    createDisplayedLinesBest() {
        globalObjects.moveLeftBtn.destroy();
        globalObjects.moveRightBtn.destroy();
        globalObjects.diner.ExitButton.destroy();
        globalObjects.diner.JuanButton.destroy();
        globalObjects.diner.EthanButton.destroy();
        globalObjects.diner.EdithButton.destroy();
        globalObjects.diner.maggieButton.destroy();
        globalObjects.diner.BrunaButton.destroy();
        globalObjects.diner.RadioButton.destroy();
        globalObjects.diner.TVButton.destroy();
        globalObjects.diner.BackdoorButton.destroy();
        globalObjects.diner.CasparButton.destroy();

        this.displayedLines[0] = "You exit the diner with everyone on board.";
        this.displayedLines.push("\n\nMoments after you leave, the diner gets completely destroyed,")
        this.displayedLines.push("\nbut you all make it out safe.")
        this.displayedLines.push("\n\nWith everyone's help, you make it to the Hope Springs Stronghold\nwithout further difficulty.")
        this.displayedLines.push("\n\nThe stronghold is more like a makeshift camp, but Juan's\ncarpentry expertise provides everyone with sturdier shelter.")
        this.displayedLines.push("\n\nBruna's social media posts allow many more refugees to find the\ngrowing camp.")
        this.displayedLines.push("\n\nLife in Hope Springs is tough, but Maggie's smile and good\ncooking never fails to cheer everyone up.")

        this.createEpilogue();
        this.theEnd.setText('THE BEST END');
        this.theEndTitle.setText('Thank you for playing Diner in the Storm');


    }

    addEndingFailedLine() {
        let numTotalSaved = gameState.EdithSaved + gameState.EthanSaved + gameState.BrunaSaved + gameState.JuanSaved + gameState.MaggieSaved + gameState.DogSaved;
        if (numTotalSaved === 0) {
            this.displayedLines.push("\n\nYou head out alone into the dark and are never heard from again.")
        } else {
            this.displayedLines.push("\n\nYou and your group are never heard from again.")
        }
    }

    playDisplayedLines() {
        setTimeout(() => {
            this.playNextDisplayedLine();
        }, 1500);
    }

    playNextDisplayedLine() {
        if (this.displayedLines.length === 0) {
            setTimeout(() => {
                this.scene.tweens.add({
                    targets: [this.theEnd, this.theEndTitle],
                    alpha: 1,
                    duration: 2500
                });
                setTimeout(() => {
                    this.restartButton.setState(NORMAL);
                    buttonManager.enableAllInput();
                }, 1500);
            }, 2000);
            return;
        }
        let nextLine = this.displayedLines.shift();
        this.showNextText(nextLine);
        setTimeout(() => {
            this.playNextDisplayedLine();
        }, 2150 + nextLine.length * 28);
    }

    fadeOut(finishFunc) {
        globalObjects.moveLeftBtn.destroy();
        globalObjects.moveRightBtn.destroy();
        buttonManager.disableAllInput();

        if (!globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2 = {volume: 1};
        }

        if (gameState.MaggieSaved) {
            this.scene.tweens.add({
                targets: [gameVars, globalObjsTemp.radioMusic, globalObjsTemp.radioStatic1, globalObjsTemp.radioStatic2],
                radioVolume: 0,
                volume: 0,
                duration: 1000,
                onComplete: () => {
                    let fullRushIn = playSound('main_full', 0.6, false);
                    this.scene.tweens.add({
                        targets: [fullRushIn],
                        volume: 1,
                        duration: 1500,
                        onComplete: () => {
                            if (finishFunc) {
                                finishFunc.bind(this)();
                            }
                        }
                    });
                }
            });

        } else {
            this.scene.tweens.add({
                targets: [gameVars, globalObjsTemp.radioMusic, globalObjsTemp.radioStatic1, globalObjsTemp.radioStatic2],
                radioVolume: 0,
                volume: 0,
                duration: 3000
            });
        }

        this.blackScreen = this.scene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setAlpha(0).setDepth(9999);
        this.blackScreen.setScale(5000, 1000);
        this.scene.tweens.add({
            targets: [this.blackScreen],
            alpha: 1,
            duration: 2500
        });
    }

    createEpilogue() {
        this.text1 = this.scene.add.bitmapText(30, 33, 'dialog', ' ', 20).setOrigin(0, 0).setDepth(10000);
        this.text1.scrollFactorX = 0;
        this.text1.scrollFactorY = 0;

        this.text2 = this.scene.add.bitmapText(30, 33, 'dialog', ' ', 20).setOrigin(0, 0).setAlpha(0).setDepth(10000);
        this.text2.scrollFactorX = 0;
        this.text2.scrollFactorY = 0;

        this.theEnd = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 90, 'THE END', {fontFamily: 'Times New Roman', fontSize: 36, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0).setDepth(10000);
        this.theEndTitle = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 48, 'Ending #1: All Alone', {fontFamily: 'Times New Roman', fontSize: 18, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0).setDepth(10000);
        this.theEnd.scrollFactorX = 0;
        this.theEnd.scrollFactorY = 0;
        this.theEndTitle.scrollFactorX = 0;
        this.theEndTitle.scrollFactorY = 0;

        this.createRestartButton();


        this.textOneActive = true;
    }

    createRestartButton() {
        this.restartButton = new Button({
            normal: {
                "atlas": "buttons",
                "ref": "restart.png",
                x: gameConsts.halfWidth + 235,
                y: gameConsts.height - 60,
                alpha: 0.92
            },
            hover: {
                alpha: 1
            },
            press: {
                alpha: 0.6
            },
            disable: {
                alpha: 0
            },
            onMouseUp() {
                fullRestart();
            }
        });
        this.restartButton.setScrollFactor(0, 0);
        this.restartButton.setDepth(10000);
        this.restartButton.setState(DISABLE);
    }

    showNextText(text) {
        let activeText = this.textOneActive ? this.text1 : this.text2;
        let inactiveText = this.textOneActive ? this.text2 : this.text1;

        inactiveText.setText(activeText.text + text);
        this.scene.tweens.add({
            targets: inactiveText,
            alpha: 1,
            duration: 1250,
            onComplete: () => {
                this.textOneActive = !this.textOneActive;
                activeText.alpha = 0;
            }
        });
    }

    stayFinale2() {
        gameCharacters.tentacle.setScale(1.24);
        this.scene.tweens.add({
            targets: gameCharacters.tentacle,
            duration: 130,
            ease: 'Quint.easeIn',
            scaleX: 1.252,
            scaleY: 1.252,
            yoyo: true,
            repeat: 6,
            onComplete: () => {
                gameCharacters.cracks = PhaserScene.add.sprite(1698, gameConsts.halfHeight - 150, 'characters', 'cracks.png').setDepth(0).setScale(1.95);
                gameCharacters.tv.destroy();
                this.blackScreen.alpha = 1;
                playSound('click');
                setTimeout(() => {
                    this.blackScreen.alpha = 0;
                }, 20);

                gameCharacters.tentacle.setScale(1.249);
                this.scene.tweens.add({
                    targets: gameCharacters.tentacle,
                    duration: 140,
                    ease: 'Quint.easeIn',
                    scaleX: 1.261,
                    scaleY: 1.261,
                    yoyo: true,
                    repeat: 6,
                    onComplete: () => {
                        this.blackScreen.alpha = 1;
                        this.blackScreen2 = this.scene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setDepth(-1).setScale(5000, 1000);
                        let eye = this.scene.add.image(1698, gameConsts.halfHeight - 50, 'lowq', 'shadowEye.png').setDepth(-1).setScale(1.6).setOrigin(0.5, 0.53);
                        this.scene.tweens.add({
                            targets: eye,
                            duration: 1400,
                            ease: 'Cubic.easeOut',
                            scaleX: 1,
                            scaleY: 1,
                            onComplete: () => {
                                this.scene.tweens.add({
                                    delay: 300,
                                    targets: eye,
                                    duration: 25,
                                    ease: 'Cubic.easeOut',
                                    x: "+=5",
                                    y: "+=1",
                                    onComplete: () => {
                                        this.scene.tweens.add({
                                            delay: 400,
                                            targets: eye,
                                            duration: 80,
                                            ease: 'Cubic.easeOut',
                                            rotation: "-=0.02",
                                            x: "-=50",
                                            y: "+=2",
                                            onComplete: () => {
                                                this.scene.tweens.add({
                                                    delay: 70,
                                                    targets: eye,
                                                    duration: 40,
                                                    ease: 'Cubic.easeOut',
                                                    x: "+=7",
                                                    y: "-=2",
                                                    onComplete: () => {
                                                        this.scene.tweens.add({
                                                            delay: 250,
                                                            targets: eye,
                                                            duration: 120,
                                                            ease: 'Cubic.easeOut',
                                                            rotation: "+=0.03",
                                                            x: "+=80",
                                                            y: "+=12",
                                                            onComplete: () => {
                                                                this.scene.tweens.add({
                                                                    delay: 150,
                                                                    targets: eye,
                                                                    duration: 400,
                                                                    ease: 'Cubic.easeOut',
                                                                    scaleX: 1.04,
                                                                    scaleY: 1.04,
                                                                    x: "+=5",
                                                                    y: "+=3",
                                                                    onComplete: () => {
                                                                        this.scene.tweens.add({
                                                                            delay: 250,
                                                                            targets: eye,
                                                                            duration: 150,
                                                                            ease: 'Cubic.easeOut',
                                                                            scaleX: 1.03,
                                                                            scaleY: 1.03,
                                                                            rotation: "-=0.01",
                                                                            x: "-=35",
                                                                            y: "-=15",
                                                                            onComplete: () => {
                                                                                this.scene.tweens.add({
                                                                                    targets: eye,
                                                                                    duration: 100,
                                                                                    scaleX: 1.025,
                                                                                    scaleY: 1.025,
                                                                                    x: "-=1",
                                                                                    y: "-=2",
                                                                                    onComplete: () => {
                                                                                        this.scene.tweens.add({
                                                                                            targets: eye,
                                                                                            duration: 400,
                                                                                            scaleX: 1.09,
                                                                                            scaleY: 1.09,
                                                                                            ease: 'Cubic.easeOut',
                                                                                            y: "-=7",
                                                                                            onComplete: () => {
                                                                                                this.playMawScene(eye);
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
                                });

                            }
                        });

                        setTimeout(() => {
                            this.blackScreen.alpha = 0;
                            helperFunction.scrollTo(1353, 0);
                            PhaserScene.cameras.main.scrollY = 60;
                            gameVars.cameraPosY = 60;
                            PhaserScene.cameras.main.setZoom(1.05);
                            PhaserScene.tweens.add({
                                targets: PhaserScene.cameras.main,
                                zoom: 0.76,
                                ease: "Cubic.easeInOut",
                                duration: 4000
                            });
                            PhaserScene.tweens.add({
                                targets: [gameVars],
                                cameraPosY: -120,
                                ease: "Cubic.easeInOut",
                                duration: 5000,
                                onComplete: () => {
                                    PhaserScene.tweens.add({
                                        targets: [gameVars],
                                        cameraPosY: -125,
                                        duration: 6000,
                                    });
                                }
                            });
                        }, 40);
                        globalObjsTemp.gloom.alpha = 0.35;
                        globalObjects.bg3.setFrame('bg3_broke.png').setScale(1.5);
                        globalObjects.bg4.setFrame('bg4_broke.png').setScale(1.5);
                        gameCharacters.cracks.destroy();
                        gameCharacters.tentacle.destroy();
                        playSound('crumble');
                    }
                });
            }
        });
    }

    playMawScene(eye) {
        this.scene.tweens.add({
            targets: [globalObjsTemp.gloom],
            duration: 2000,
            alpha: 0.7,
            ease: "Cubic.easeInOut",
        });
        let eyelid1 = this.scene.add.image(eye.x, eye.y - 600, 'characters', 'blackCircle.png').setDepth(-1).setScale(12).setOrigin(0.5, 0.99);
        let eyelid2 = this.scene.add.image(eye.x + 520, eye.y + 300, 'characters', 'blackCircle.png').setDepth(-1).setScale(12).setOrigin(0.5, 0.99).setRotation(2.09);
        let eyelid3 = this.scene.add.image(eye.x - 520, eye.y + 300, 'characters', 'blackCircle.png').setDepth(-1).setScale(12).setOrigin(0.5, 0.99).setRotation(4.19);
        playSound('haunting');

        this.scene.tweens.add({
            delay: 400,
            targets: [eyelid1, eyelid2, eyelid3],
            duration: 700,
            scaleX: 8,
            scaleY: 8,
            x: eye.x,
            y: eye.y,
            ease: 'Cubic.easeOut',
            onComplete: () => {
                if (!gameState.casparGone) {
                    dialogManager.showDialogNode('CasparSorry');
                } else {
                    dialogManager.showDialogNode('CasparSorry2');
                }
                PhaserScene.tweens.add({
                    targets: globalObjects.indoorRain,
                    volume: 0,
                    ease: "Quad.easeIn",
                    duration: 5000
                });
                let maw = this.scene.add.image(1698, gameConsts.halfHeight - 100, 'lowq', 'maw.png').setDepth(-1).setScale(1.2, 0.3).setOrigin(0.5, 0.45).setAlpha(0);
                this.blackScreen.alpha = -0.1;
                this.scene.tweens.add({
                    targets: [this.blackScreen],
                    duration: 5250,
                    alpha: 0.75,
                    ease: "Cubic.easeIn",
                    onComplete: () => {
                        this.blackScreen.alpha = 0.95;
                        setTimeout(() => {
                            this.blackScreen.alpha = 0.75;
                            setTimeout(() => {
                                this.blackScreen.alpha = 1;
                                this.playStayEpilogue();
                                maw.destroy();
                            }, 120);
                        }, 25);
                    }
                });
                this.scene.tweens.add({
                    targets: [maw],
                    duration: 500,
                    scaleX: 1.3,
                    scaleY: 0.9,
                    alpha: 0.25,
                    ease: "Back.easeOut",
                    onComplete: () => {
                        this.scene.tweens.add({
                            targets: [maw],
                            duration: 5000,
                            scaleX: 3.5,
                            scaleY: 3.5,
                            alpha: 2,
                            ease: "Cubic.easeIn"
                        });
                    }
                });
            }
        });
    }

}
