let mainBackground;
let loadingBar;
let loadingText;
let isMobile = false;

function testMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}

function setBackground(atlas, ref) {
    mainBackground.destroy();
    mainBackground = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, atlas, ref);
}

let achievements = null;
let newestAchievement = null;
const achievementsText = "DinerInStormAchievements";

function setupLoadingBar(scene) {
    isMobile = testMobile();
    // Basic loading bar visual
    let extraLoadingBarLength = isMobile ? 100 : 0;
    let extraLoadingBarWidthMult = isMobile ? 2 : 1;
    mainBackground = scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'loading1');
    loadingBarBack = scene.add.image(gameConsts.halfWidth, gameConsts.height - 164, 'blackPixel');
    loadingBarBack.scaleX = 101 + extraLoadingBarLength;
    loadingBarBack.scaleY = 4 * extraLoadingBarWidthMult;
    loadingBar = scene.add.image(gameConsts.halfWidth, gameConsts.height - 164, 'whitePixel');
    loadingBar.setAlpha(0.85);
    loadingBar.scaleY = 3 * extraLoadingBarWidthMult;

    loadingText = scene.add.text(gameConsts.halfWidth, gameConsts.height - 200, '  DRIVING...');
    loadingText.setTint(0x000000);
    loadingText.setFontSize(28);
    loadingText.setAlign('center');
    loadingText.setOrigin(0.5, 0);
    loadingText.alpha = 0.85;

    // Setup loading bar logic

    scene.load.on('progress', function (value) {
        loadingBar.scaleX = (100 + extraLoadingBarLength) * value;
    });

    scene.load.on('complete', () => {
        setTimeout(() => {
            // Achievements
            if (!achievements) {
                achievements = {
                    end0: localStorage.getItem(achievementsText + 0),
                    end1: localStorage.getItem(achievementsText + 1),
                    end2: localStorage.getItem(achievementsText + 2),
                    end3: localStorage.getItem(achievementsText + 3),
                    end4: localStorage.getItem(achievementsText + 4),
                    end5: localStorage.getItem(achievementsText + 5),
                    end6: localStorage.getItem(achievementsText + 6),
                    end7: localStorage.getItem(achievementsText + 7),
                };
            }
            let offImage = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'startOff.png').setDepth(0).setScale(4);
            scene.tweens.add({
                targets: [offImage],
                alpha: 0,
                duration: 1500,
                ease: 'Quad.easeIn',
                onComplete: () => {
                    offImage.destroy();
                }
            });
            scene.tweens.add({
                targets: [offImage],
                duration: 1500,
                x: gameConsts.halfWidth - 20,
                y: gameConsts.halfHeight + 8
            });
            numAchievements = 0;
            handleAchievements(achievements);
            loadingBar.scaleX = 100 + extraLoadingBarLength;
            if (!gameVars.showedCreditsSpook) {
                let eye = PhaserScene.add.image(635, gameConsts.halfHeight - 275, 'lowq', 'spook4.png').setDepth(0).setAlpha(0.03).setScale(1.97);
                setTimeout(() => {
                    eye.setScale(2, 1.9).setAlpha(0.15);
                    setTimeout(() => {
                        eye.setScale(1.9, 0.5).setAlpha(0.1);
                        setTimeout(() => {
                            eye.setScale(4, 0.1).setAlpha(0.2);
                            setTimeout(() => {
                                eye.destroy();
                            }, 30)
                        }, 30)
                    }, 100)
                }, 1500)
            }
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
                    setTimeout(() => {
                        if (globalObjects.muteButton) {
                            globalObjects.muteButton.setState(NORMAL);
                        }
                    }, 1000);
                }
            });
        }, 10);
    });

}

let dialogDisplay ;
let miscSubscribe;
let gameFinal;
let globalVolume = 1;

function setupGame() {
    // PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'background');
    createAnimations(PhaserScene)
    if (!globalObjects.exclamation) {
        globalObjects.exclamation = new ExclamationHover(PhaserScene);
    }

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
        onHover: () => {
            if (canvas) {
                canvas.style.cursor = 'pointer';
            }
        },
        onHoverOut: () => {
            if (canvas) {
                canvas.style.cursor = 'default';
            }
        },
        onMouseUp: () => {
            runIntroSequence();
        }
    });
    createRewardButtons();

    // create credits button
    setTimeout(() => {
        globalObjects.creditsButton = new Button({
            normal: {
                "ref": "credits",
                "x": gameConsts.width - 78,
                "y": gameConsts.height - 30,
                "alpha": 0.9
            },
            hover: {
                "alpha": 1
            },
            press: {
                "alpha": 0.8
            },
            onHover: () => {
                if (canvas) {
                    canvas.style.cursor = 'pointer';
                }
            },
            onHoverOut: () => {
                if (canvas) {
                    canvas.style.cursor = 'default';
                }
            },
            onMouseUp: () => {
                clickCredits();
            }
        });
    }, 0);

    setupWideMoveButtons();
    createWorldButtons();
    setupMoveButtons();
    setupGoalText();
    setupDialogManager();
    // setupUndoButton();
    setupMuteButton();
    dialogDisplay = new DialogDisplay(PhaserScene);
    miscSubscribe = new MiscSubscribe(PhaserScene);
    gameFinal = new GameFinal(PhaserScene);

    setupKeyPresses(PhaserScene);

    initializeMisc();
}

function initializeMisc() {
    globalObjsTemp.songs = {
        235.75: 'dabbda',
        294.25: 'off_to_osaka',
        356: 'main_poor',
        386.25: 'matts_blues',
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
    // keyPresses.keySpace.isUp
    updateManager.addFunction(tickKeyPresses);
}

function clickCredits() {
    globalObjects.closeCreditsButton = new Button({
        normal: {
            "ref": "blackPixel",
            "x": gameConsts.halfWidth,
            "y": gameConsts.halfHeight,
            alpha: 0.75
        },
        onMouseUp: () => {
            closeCredits();
        }
    });
    globalObjects.closeCreditsButton.setScale(500, 500);
    globalObjects.closeCreditsButton.setDepth(99);
    globalObjects.creditsText = PhaserScene.add.text(50, 50, 'Programming and stick figure art\nby Maxim Tsai (maximtsai.com)\n\nWriting and story by Rowa Skipson\n\nFinal scene art by Theresa Kao.')
    globalObjects.creditsText.setFontSize(28);
    globalObjects.creditsText.setScale(0.82);
    globalObjects.creditsText.setDepth(99);

    globalObjects.creditsText2 = PhaserScene.add.text(50, 160, '\n\nRadio Music Sources:\n"Off To Osaka" Kevin MacLeod (incompetech.com)\n"Matt\'s Blues" Kevin MacLeod\n"Joey\'s Formal Waltz Unscented" Kevin MacLeod\n\nSFX Sources:\nPixabay, Eric Matyas - soundimage.org,\nsonniss.com/gameaudiogdc\nDiesel engine SFX by Orchie Chord\nGlass Breaking SFX by AV Productions');
    globalObjects.creditsText2.setFontSize(24);
    globalObjects.creditsText2.setScale(0.82);
    globalObjects.creditsText2.setDepth(99);

    globalObjects.creditsCloseIcon = new Button({
        normal: {
            "ref": "closebtn",
            "x": gameConsts.width - 50,
            "y": 45,
            alpha: 0.85,
            scaleX: 0.98,
            scaleY: 0.98,
        },
        hover: {
            alpha: 1,
            scaleX: 1,
            scaleY: 1,
        },
        onMouseUp: () => {
            closeCredits();
        }
    });
    globalObjects.creditsCloseIcon.setDepth(99);

}

function closeCredits() {
    if (!gameVars.showedCreditsSpook) {
        if (Math.random() < 0.3) {
            let eye = PhaserScene.add.image(gameConsts.halfWidth + 260, gameConsts.halfHeight - 255, 'lowq', 'spook4.png').setDepth(0).setAlpha(0.15).setScale(3);
            setTimeout(() => {
                eye.destroy();
            }, 20)
        }
        gameVars.showedCreditsSpook = true;
    }
    if (globalObjects.closeCreditsButton) {
        globalObjects.closeCreditsButton.destroy();
        globalObjects.creditsText.destroy();
        globalObjects.creditsText2.destroy();
        globalObjects.creditsCloseIcon.destroy();
    }
}

function closeAward() {
    if (globalObjects.closeAwardButton) {
        globalObjects.closeAwardButton.destroy();
        globalObjects.awardImage.destroy();
        globalObjects.awardText.destroy();
        globalObjects.awardCloseIcon.destroy();
        globalObjects.closeAwardButton = null;
        globalObjects.awardImage = null;
        globalObjects.awardText = null;
    }
}

function showAwardImage(imageRef, text = '') {
    globalObjects.closeAwardButton = new Button({
        normal: {
            "ref": "blackPixel",
            "x": gameConsts.halfWidth,
            "y": gameConsts.halfHeight,
            alpha: 0.75
        },
        onMouseUp: () => {
            closeAward();
        }
    });
    globalObjects.closeAwardButton.setScale(500, 500);
    globalObjects.closeAwardButton.setDepth(98);
    globalObjects.awardImage = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'epilogue', imageRef).setDepth(98).setAlpha(0.4);
    globalObjects.awardText = PhaserScene.add.text(gameConsts.halfWidth, gameConsts.height - 31, text, { fontFamily: 'Times', fontSize: 28, color: '#FFFFFF' }).setDepth(999).setAlign('center').setOrigin(0.5, 0.5);
    PhaserScene.tweens.add({
        targets: [globalObjects.awardImage, globalObjects.awardText],
        alpha: 1,
        ease: 'Cubic.easeOut',
        duration: 300
    });

    globalObjects.awardCloseIcon = new Button({
        normal: {
            "ref": "closebtn",
            "x": gameConsts.width - 30,
            "y": 30,
            alpha: 0.85,
            scaleX: 0.8,
            scaleY: 0.8,
        },
        hover: {
            alpha: 1,
            scaleX: 0.81,
            scaleY: 0.81,
        },
        onMouseUp: () => {
            closeAward();
        }
    });
    globalObjects.awardCloseIcon.setDepth(98);
}

function createRewardBtn(x, y, btnRef, awardImageRef, text) {
    return new Button({
        normal: {
            "atlas": "epilogue",
            "ref": btnRef,
            "x": x,
            "y": y,
            alpha: 0.85,
            scaleX: 1,
            scaleY: 1,
        },
        hover: {
            alpha: 1,
            scaleX: 1.02,
            scaleY: 1.02,
        },
        press: {
            alpha: 0.9,
            scaleX: 1.02,
            scaleY: 1.02,
        },
        onMouseUp: () => {
            showAwardImage(awardImageRef, text);
        }
    });
}

function createRewardButtons() {
    if (numAchievements == 0) {
        return;
    }
    if (numAchievements >= 1) {
        if (newestAchievement && numAchievements === 1) {
            globalObjects.flashWhite = PhaserScene.add.image(gameConsts.width - 57, gameConsts.height - 98, 'whitePixel').setScale(46, 40).setAlpha(0).setDepth(1);
            PhaserScene.tweens.add({
                targets: globalObjects.flashWhite,
                alpha: 0.8,
                ease: 'Cubic.easeIn',
                duration: 550,
                onComplete: () => {
                    PhaserScene.tweens.add({
                        targets: globalObjects.flashWhite,
                        alpha: 0,
                        ease: 'Quart.easeOut',
                        duration: 1100,
                        onComplete: () => {
                            globalObjects.flashWhite.destroy();
                        }
                    });
                }
            });
        }
        globalObjects.icon1 = createRewardBtn(gameConsts.width - 57, gameConsts.height - 98, 'end_icon_1.png', 'end1.png', 'Noah Driving - By Theresa Kao')
        if (numAchievements >= 4) {
            if (newestAchievement && numAchievements === 4) {
                globalObjects.flashWhite = PhaserScene.add.image(gameConsts.width - 57, gameConsts.height - 187, 'whitePixel').setScale(46, 40).setAlpha(0).setDepth(1);
                PhaserScene.tweens.add({
                    targets: globalObjects.flashWhite,
                    alpha: 0.8,
                    ease: 'Cubic.easeIn',
                    duration: 550,
                    onComplete: () => {
                        PhaserScene.tweens.add({
                            targets: globalObjects.flashWhite,
                            alpha: 0,
                            ease: 'Quart.easeOut',
                            duration: 1100,
                            onComplete: () => {
                                globalObjects.flashWhite.destroy();
                            }
                        });
                    }
                });
            }
            globalObjects.icon2 = createRewardBtn(gameConsts.width - 57, gameConsts.height - 187, 'end_icon_2.png', 'end2.png', 'Staying in the Diner - By Theresa Kao')
            if (numAchievements >= 7) {
                if (newestAchievement && numAchievements === 7) {
                    globalObjects.flashWhite = PhaserScene.add.image(gameConsts.width - 57, gameConsts.height - 276, 'whitePixel').setScale(46, 40).setAlpha(0).setDepth(1);
                    PhaserScene.tweens.add({
                        targets: globalObjects.flashWhite,
                        alpha: 0.8,
                        ease: 'Cubic.easeIn',
                        duration: 550,
                        onComplete: () => {
                            PhaserScene.tweens.add({
                                targets: globalObjects.flashWhite,
                                alpha: 0,
                                ease: 'Quart.easeOut',
                                duration: 1100,
                                onComplete: () => {
                                    globalObjects.flashWhite.destroy();
                                }
                            });
                        }
                    });
                }
                globalObjects.icon3 = createRewardBtn(gameConsts.width - 57, gameConsts.height - 276, 'end_icon_3.png', 'end3.png', 'All Together - By Theresa Kao')
            } else {
                globalObjects.icon3 = createRewardBtn(gameConsts.width - 57, gameConsts.height - 276, 'end_icon_none.png', 'endnone.png', 'Discover 7 endings to unlock')
            }
        } else {
            globalObjects.icon2 = createRewardBtn(gameConsts.width - 57, gameConsts.height - 187, 'end_icon_none.png', 'endnone.png', 'Discover 4 endings to unlock')
        }
    }


    // globalObjects.icon1 = new Button({
    //     normal: {
    //         "ref": "closebtn",
    //         "x": gameConsts.width - 50,
    //         "y": 45,
    //         alpha: 0.85,
    //         scaleX: 0.98,
    //         scaleY: 0.98,
    //     },
    //     hover: {
    //         alpha: 1,
    //         scaleX: 1,
    //         scaleY: 1,
    //     },
    //     onMouseUp: () => {
    //         closeCredits();
    //     }
    // });
}

function setupWideMoveButtons() {
    if (!isMobile) {
        return;
    }
    globalObjects.moveLeftBtnWide = new Button({
        normal: {
            "atlas": "buttons",
            "ref": "move_btn_normal_wide.png",
            "x": 173,
            "y": gameConsts.halfHeight,
            "scaleX": -1.33,
            "scaleY": 1.33,
            "alpha": 0.001
        },
        hover: {
            "atlas": "buttons",
            "ref": "move_btn_over_wide.png",
            "alpha": 0.001
        },
        press: {
            "atlas": "buttons",
            "ref": "move_btn_press_wide.png",
            "alpha": 1
        },
        disable: {
            "atlas": "buttons",
            "ref": "move_btn_disable.png"
        },
        onHover: () => {
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            canvas.style.cursor = 'default';
        },
    });
    globalObjects.moveLeftBtnWide.setOrigin(0.5, 0.533);
    globalObjects.moveLeftBtnWide.setDepth(20);
    globalObjects.moveLeftBtnWide.setState(DISABLE);
    globalObjects.moveLeftBtnWide.setOnMouseUpFunc(() => {
        if (!gameState.isOutdoors && gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    })

    globalObjects.moveRightBtnWide = new Button({
        normal: {
            "atlas": "buttons",
            "ref": "move_btn_normal_wide.png",
            "x": gameConsts.width - 95,
            "y": gameConsts.halfHeight,
            "scaleX": 1.33,
            "scaleY": 1.33,
            "alpha": 0.001
        },
        hover: {
            "atlas": "buttons",
            "ref": "move_btn_over_wide.png",
            "alpha": 0.001
        },
        press: {
            "atlas": "buttons",
            "ref": "move_btn_press_wide.png",
            "alpha": 1
        },
        disable: {
            "atlas": "buttons",
            "ref": "move_btn_disable.png"
        },
        onHover: () => {
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            canvas.style.cursor = 'default';
        },
    });
    globalObjects.moveRightBtnWide.setOrigin(0.73, 0.533);
    globalObjects.moveRightBtnWide.setDepth(20);
    globalObjects.moveRightBtnWide.setState(DISABLE);
    globalObjects.moveRightBtnWide.setOnMouseUpFunc(() => {
        if (!gameState.isOutdoors && gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    })
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
        },
        onHover: () => {
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            canvas.style.cursor = 'default';
        },
    });
    globalObjects.moveLeftBtn.setDepth(20);
    globalObjects.moveLeftBtn.setState(DISABLE);
    globalObjects.moveLeftBtn.setOnMouseUpFunc(() => {
        if (!gameState.isOutdoors && gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
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
        },
        onHover: () => {
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            canvas.style.cursor = 'default';
        },
    });
    globalObjects.moveRightBtn.setDepth(20);
    globalObjects.moveRightBtn.setState(DISABLE);
    globalObjects.moveRightBtn.setOnMouseUpFunc(() => {
        if (!gameState.isOutdoors && gameState.currentScene == 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    })
}

function setupUndoButton() {
    globalObjects.undoTab = PhaserScene.add.sprite(0, 420, 'buttons', 'undo_tab.png').setOrigin(1, 0.5).setDepth(99);
    globalObjects.undoTab.scrollFactorX = 0;
    globalObjects.undoTab.scrollFactorY = 0;

    globalObjects.undoButton = new Button({
        normal: {
            atlas: "buttons",
            ref: 'undo.png',
            x: 35,
            y: 420,
            alpha: 1,
        },
        hover: {
            atlas: "buttons",
            ref: 'undo_hover.png',
            alpha: 1,
        },
        press: {
            atlas: "buttons",
            ref: 'undo_press.png',
            alpha: 1,
        },
        disable: {
            alpha: 0.001,
            scaleX: 0,
            scaleY: 0
        },
        onHover: () => {
            // globalObjects.exclamation.setAlpha(0.75);
            // globalObjects.exclamation.setFrame('hand_icon.png');
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            //globalObjects.exclamation.setAlpha(0);
            canvas.style.cursor = 'default';
        },
        onMouseUp() {
            attemptReset();
        }
    });

    globalObjects.undoButton.setScrollFactor(0, 0);
    globalObjects.undoButton.setDepth(99);
    globalObjects.undoButton.setState(DISABLE);
}

function attemptReset() {
    globalObjects.resetClickBlocker  = new Button({
        normal: {
            ref: 'blackPixel',
            x: 0,
            y: 0,
            scaleX: 10000,
            scaleY: 4000,
            alpha: 0.65,
        }
    });
    globalObjects.resetClickBlocker.setDepth(99999);
    globalObjects.resetClickBlocker.setScrollFactor(0, 0);

    globalObjects.adPopup = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'buttons', 'popup.png').setDepth(99999).setScale(0.85).setAlpha(0.1);
    globalObjects.adPopup.scrollFactorX = 0;
    globalObjects.adPopup.scrollFactorY = 0;
    PhaserScene.tweens.add({
        targets: [globalObjects.adPopup],
        scaleX: 1,
        scaleY: 1,
        alpha: 1,
        ease: 'Back.easeOut',
        duration: 280
    });

    globalObjects.playAdButton  = new Button({
        normal: {
            atlas: 'buttons',
            ref: 'play_btn.png',
            x: gameConsts.halfWidth,
            y: gameConsts.halfHeight + 45,
            alpha: 1,
        },
        hover: {
            atlas: "buttons",
            ref: 'play_btn_hover.png',
            alpha: 1,
        },
        press: {
            atlas: "buttons",
            ref: 'play_btn_hover.png',
            alpha: 0.9,
        },
        onHover: () => {
            canvas.style.cursor = 'pointer';
        },
        onHoverOut: () => {
            canvas.style.cursor = 'default';
        },
        onMouseUp() {
            console.log("Play ad");
            hideUndoButton();
            playRewindingAnim();
        }
    });
    globalObjects.playAdButton.setScale(0.9);
    globalObjects.playAdButton.setDepth(99999);
    globalObjects.playAdButton.setScrollFactor(0, 0);
    globalObjects.playAdButton.tweenToScale(1, 1, 180, 'Cubic.easeOut');

    setTimeout(() => {
        globalObjects.cancelAdButton  = new Button({
            normal: {
                atlas: 'buttons',
                ref: 'no_thanks.png',
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight + 122,
                alpha: 1,
            },
            onHover: () => {
                canvas.style.cursor = 'pointer';
            },
            onHoverOut: () => {
                canvas.style.cursor = 'default';
            },
            onMouseUp() {
                closeAdPrompt();
            }
        });
        globalObjects.cancelAdButton.setDepth(99999);
        globalObjects.cancelAdButton.setScrollFactor(0, 0);
    }, 450);
}

function closeAdPrompt() {
    globalObjects.adPopup.destroy();
    globalObjects.playAdButton.destroy();
    globalObjects.cancelAdButton.destroy();
    globalObjects.resetClickBlocker.destroy();
}

function playRewindingAnim() {
    globalObjects.resetClickBlocker2  = new Button({
        normal: {
            ref: 'blackPixel',
            x: 0,
            y: 0,
            scaleX: 10000,
            scaleY: 4000,
        }
    });
    globalObjects.resetClickBlocker2.setDepth(99999);
    globalObjects.resetClickBlocker2.setScrollFactor(0, 0);
    globalObjects.resetClickBlocker2.setAlpha(0.1);
    globalObjects.resetClickBlocker2.tweenToAlpha(1, 250, 'Quad.easeOut')

    globalObjects.rewindLarge = PhaserScene.add.sprite(gameConsts.halfWidth + 63, gameConsts.halfHeight + 43, 'buttons', 'undo_large.png').setOrigin(0.5, 0.5).setDepth(99999);
    globalObjects.rewindLarge.scrollFactorX = 0;
    globalObjects.rewindLarge.scrollFactorY = 0;
    globalObjects.rewindLarge.setScale(0.223);

    PhaserScene.tweens.add({
        targets: [globalObjects.rewindLarge],
        x: gameConsts.halfWidth,
        y: gameConsts.halfHeight,
        scaleX: 1,
        scaleY: 1,
        ease: 'Cubic.easeInOut',
        duration: 300
    });

    globalObjects.rewindLargeTween = PhaserScene.tweens.add({
        targets: [globalObjects.rewindLarge],
        rotation: "-=6.283",
        duration: 1350,
        ease: 'Quad.easeInOut',
        repeat: 1,
        onComplete: () => {
            // TODO: Remove placeholder
            closeRewindAnim();
            console.log("load save point");
            messageBus.publish('loadSavePoint');
        }
    });
}

function closeRewindAnim() {
    closeAdPrompt();
    globalObjects.rewindLargeTween.stop();
    PhaserScene.tweens.add({
        targets: [globalObjects.rewindLarge],
        scaleX: 0,
        scaleY: 0,
        ease: 'Quad.easeIn',
        duration: 300,
        onComplete: () => {
            globalObjects.rewindLarge.destroy();
        }
    });
    globalObjects.resetClickBlocker2.tweenToAlpha(0, 200, 'Quad.easeOut', () => {
        globalObjects.resetClickBlocker2.destroy();
    })

}

function showUndoButton() {
    if (globalObjects.undoTween) {
        globalObjects.undoTween.stop();
    }

    globalObjects.undoTween = PhaserScene.tweens.add({
        delay: 50,
        targets: [globalObjects.undoTab],
        x: 67,
        ease: 'Back.easeOut',
        duration: 380,
        onComplete: () => {
            globalObjects.undoButton.setState(NORMAL);
            globalObjects.undoButton.setScale(0.6, 0.6);
            globalObjects.undoButton.tweenToScale(0.75, 0.75, 150, 'Back.easeOut')
        }
    });
}

function hideUndoButton() {
    if (!globalObjects.undoButton) {
        return;
    }
    if (globalObjects.undoButton.getState() !== DISABLE) {
        if (globalObjects.undoTween) {
            globalObjects.undoTween.stop();
        }
        globalObjects.undoButton.setScale(0, 0);
        globalObjects.undoButton.setState(DISABLE);

        globalObjects.undoTween = PhaserScene.tweens.add({
            targets: [globalObjects.undoTab],
            x: 0,
            ease: 'Quad.easeOut',
            duration: 230
        });
    }
}

function setupMuteButton() {
    let startFrame = 'audio_max.png';
    if (globalVolume === 1) {
        startFrame = 'audio_max.png';
    } else if (globalVolume === 0) {
        startFrame = 'audio_mute.png';
    } else {
        startFrame = 'audio_min.png';
    }
    globalObjects.muteButton = new Button({
        normal: {
            atlas: "buttons",
            ref: startFrame,
            x: gameConsts.width - 30,
            y: 27,
            alpha: 0.8
        },
        hover: {
            atlas: "buttons",
            alpha: 1
        },
        press: {
            atlas: "buttons",
            alpha: 0.85
        },
        disable: {
            atlas: "buttons",
            alpha: 0.2
        },
        onHover: () => {
            // globalObjects.exclamation.setAlpha(0.75);
            // globalObjects.exclamation.setFrame('hand_icon.png');
            if (canvas) {
                canvas.style.cursor = 'pointer';
            }
        },
        onHoverOut: () => {
            //globalObjects.exclamation.setAlpha(0);
            if (canvas) {
                canvas.style.cursor = 'default';
            }
        },
        onMouseUp() {
            toggleAudio();
        }
    });

    globalObjects.muteButton.setScrollFactor(0, 0);
    globalObjects.muteButton.setDepth(1);
    globalObjects.muteButton.setState(DISABLE);
}

let oldGlobalVolume = null;
function adMute() {
    oldGlobalVolume = globalVolume;
    updateGlobalVolume(0);
}

function adUnmute() {
    if (oldGlobalVolume !== null) {
        updateGlobalVolume(oldGlobalVolume);
    }
}

function toggleAudio() {
    if (globalVolume === 1) {
        updateGlobalVolume(0);
        globalObjects.muteButton.setAllRef('audio_mute.png');
        playSound('trustgainshort');
    } else if (globalVolume === 0) {
        updateGlobalVolume(0.25);
        globalObjects.muteButton.setAllRef('audio_min.png');
        playSound('trustgainshort');
    } else {
        updateGlobalVolume(1);
        globalObjects.muteButton.setAllRef('audio_max.png');
        playSound('trustgainshort');
    }
}

function setupGoalText() {
    globalObjects.goalText = PhaserScene.add.text(18, 22, ' ', { fontFamily: 'Times', fontSize: 28, color: '#000000' }).setDepth(999).setAlign('left').setOrigin(0, 0.5);
    globalObjects.goalText.alpha = 0;
    globalObjects.goalText.scrollFactorX = 0;
    globalObjects.goalText.scrollFactorY = 0;

    globalObjects.goalUnderline = PhaserScene.add.sprite(18, 38, 'blackPixel').setScale(0, 0.5).setOrigin(0, 0.5).setDepth(999);
    globalObjects.goalUnderline.scrollFactorX = 0;
    globalObjects.goalUnderline.scrollFactorY = 0;

    globalObjects.goalBtn = new Button({
        normal: {
            "ref": "blackPixel",
            "x": 75,
            "y": 15,
            "scaleX": 150,
            "scaleY": 30,
            alpha: 0
        },
        onHover: () => {
            globalObjects.goalText.visible = true;
            globalObjects.goalUnderline.visible = true;
            if (globalObjects.goalTextAnim) {
                globalObjects.goalTextAnim.stop();
                globalObjects.goalText.alpha = 0.8;
                globalObjects.goalUnderline.alpha = 0.5;
            }
        },
        onHoverOut: () => {
            if (globalObjects.goalUnderline.alpha > 0.01) {
                globalObjects.goalTextAnim = PhaserScene.tweens.add({
                    targets: [globalObjects.goalUnderline, globalObjects.goalText],
                    delay: 200,
                    alpha: 0,
                    ease: 'Quad.easeIn',
                    duration: 400
                });
            }
        },
    });
    globalObjects.goalBtn.setState(DISABLE);
    globalObjects.goalBtn.setScrollFactor(0, 0);
    // globalObjects.goalText.setColor('#FFFFFF');
}

function setNewGoalText(text) {
    globalObjects.goalText.setText(text);
    if (globalObjects.goalTextAnim) {
        globalObjects.goalTextAnim.stop();
    }
    PhaserScene.tweens.add({
        targets: [globalObjects.goalUnderline, globalObjects.goalText],
        alpha: 1,
        ease: 'Quad.easeOut',
        duration: 500
    });
    globalObjects.goalUnderline.visible = true;
    globalObjects.goalText.visible = true;

    PhaserScene.tweens.add({
        targets: [globalObjects.goalUnderline],
        scaleX: globalObjects.goalText.width * 0.5 + 0.5,
        ease: 'Cubic.easeOut',
        duration: 750
    });

    globalObjects.goalTextAnim = PhaserScene.tweens.add({
        targets: [globalObjects.goalUnderline, globalObjects.goalText],
        delay: 4500,
        alpha: 0,
        ease: 'Quad.easeOut',
        duration: 1500
    });
}

function clearGoalText() {
    globalObjects.goalText.setText(' ');
    globalObjects.goalUnderline.scaleX = 0;
}

let wasMovingLeftKeyboard = false;
let wasMovingRightKeyboard = false;
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

    let tryingToMoveLeft = (keyPresses.keyA.isDown || keyPresses.keyLeft.isDown) && (globalObjects.moveLeftBtn.getState() === NORMAL || globalObjects.moveLeftBtn.getState() === HOVER);
    let tryingToMoveRight = (keyPresses.keyD.isDown || keyPresses.keyRight.isDown) && (globalObjects.moveRightBtn.getState() === NORMAL || globalObjects.moveRightBtn.getState() === HOVER) && !tryingToMoveLeft;

    if (wasMovingLeftKeyboard && !tryingToMoveLeft) {
        if (!gameState.isOutdoors && gameState.currentScene === 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    }

    if (wasMovingRightKeyboard && !tryingToMoveRight) {
        if (!gameState.isOutdoors && gameState.currentScene === 2 && !gameState.scratchingDoor && gameState.EthanEdithSeparated && gameState.chatted2Edith && gameState.juan2Chatted && gameState.brunaChatted2) {
            gameState.scratchingDoor = true;
            gameCharacters.backdoor.play('backdoor_shake');

            dialogManager.showDialogNode('DoorScratchStart');
            girlsMoveAwayFromDoor();
        }
    }

    let mobileMoveLeft = globalObjects.moveLeftBtnWide && globalObjects.moveLeftBtnWide.getState() == PRESS;
    let mobileMoveRight = globalObjects.moveRightBtnWide && globalObjects.moveRightBtnWide.getState() == PRESS;

    if (globalObjects.moveLeftBtn.getState() == PRESS || tryingToMoveLeft || mobileMoveLeft) {
        if (gameVars.cameraPosX > gameVars.cameraPosMinX) {
            if (tryingToMoveLeft) {
                wasMovingLeftKeyboard = true;
            }
            if (gameVars.cameraMoveAcc > -0.1) {
                gameVars.cameraMoveVel -= 1.1;
            }
            gameVars.cameraMoveAcc = -0.77;
            gameVars.stickyAcc = 25;
        }
    }
    if (globalObjects.moveRightBtn.getState() == PRESS || tryingToMoveRight || mobileMoveRight) {
        if (gameVars.cameraPosX < gameVars.cameraPosMaxX) {
            if (gameVars.cameraMoveAcc < 0.1) {
                gameVars.cameraMoveVel += 1.1;
            }
            gameVars.cameraMoveAcc = 0.77;
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
        if (gameState.powerOff === false && gameState.isOutdoors && !gameState.MaggieSaved) {
            outdoorsMoveMult *= 0.8;
        }
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

        globalObjects.moveLeftBtn.setPos(15 + gameVars.cameraPosX, gameConsts.halfHeight + gameVars.cameraPosY);
        globalObjects.moveRightBtn.setPos(gameConsts.width - 15 + gameVars.cameraPosX, gameConsts.halfHeight + gameVars.cameraPosY);

        if (globalObjects.moveRightBtnWide) {
            globalObjects.moveRightBtnWide.setPos(gameConsts.width - 95 + gameVars.cameraPosX, gameConsts.halfHeight + gameVars.cameraPosY);
            globalObjects.moveLeftBtnWide.setPos(173 + gameVars.cameraPosX, gameConsts.halfHeight + gameVars.cameraPosY);
        }

        let radioCenter = 450;
        let distToRadio = radioCenter - gameVars.cameraPosX;
        if (Math.abs(distToRadio) < 220) {
            setRadioPan(0);
        } else {
            let panAmt = 0;
            if (distToRadio > 0) {
                panAmt = Math.min(0.25, (distToRadio - 220) / 1200);
                setRadioPan(panAmt);
            } else {
                panAmt = Math.max(-0.25, (distToRadio + 220) / 1200);
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
    realGameRain();
    if (globalObjsTemp.outdoorsrain) globalObjsTemp.outdoorsrain.stop();
    globalObjects.indoorRain = playSound('brownnoise', 1, true);
    enterShop();
}

function realGameStart() {
    canvas = game.canvas;
    if (gameVars.started) {
        return;
    }

    gameVars.started = true;
    setBackground('intro', 'diner1.png');
    // 1000
    let bgRain = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'rain.png').setScale(4);
    bgRain.depth = -2;
    bgRain.scrollFactorX = 0.5;
    let bg1 = PhaserScene.add.image(-987.5, gameConsts.halfHeight, 'backgrounds', 'bg1.png');
    let window1 = PhaserScene.add.image(-765, gameConsts.halfHeight - 63, 'characters', 'window.png').setDepth(-1);
    let bg2 = PhaserScene.add.image(12, gameConsts.halfHeight, 'backgrounds', 'bg2.png');
    globalObjects.bg3 = PhaserScene.add.image(1011.05, gameConsts.halfHeight, 'backgrounds', 'bg3.png');
    globalObjects.bg4 = PhaserScene.add.image(2011, gameConsts.halfHeight, 'backgrounds', 'bg4.png');
    globalObjects.window2 = PhaserScene.add.image(1713, gameConsts.halfHeight - 63, 'characters', 'window.png').setDepth(-1);
    let fakeBase = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'startFakeBase.png');
    let darkGloom = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(999, 999);
    let fakeBaseOverlay = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'backgrounds', 'startFakeBaseOverlay.png');
    globalObjsTemp.black = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setScale(5000, 999).setAlpha(0);
    let time = Date.now();

    setTimeout(() => {

        darkGloom.setAlpha(0.9);
        setTimeout(() => {
            darkGloom.setAlpha(1);
        }, 20);
        setTimeout(() => {
            darkGloom.setAlpha(0.85);
            setTimeout(() => {
                darkGloom.setAlpha(1);
                PhaserScene.tweens.add({
                    targets: globalObjects.indoorRain,
                    trueVolume: 0.25,
                    volume: 0.25 * globalVolume,
                    duration: 1500
                });
                setTimeout(() => {
                    darkGloom.setAlpha(0.8);
                    setTimeout(() => {
                        fakeBaseOverlay.setScale(1.1, 1);
                        fakeBase.setScale(1.1, 1);
                        setTimeout(() => {
                            fakeBaseOverlay.setScale(1.05, 1).setRotation(-0.02);
                            fakeBase.setScale(1.05, 1);
                            setTimeout(() => {
                                fakeBaseOverlay.setScale(1.2, 1).setRotation(-0.08);
                                fakeBase.setScale(1.2, 1);
                            }, 5);
                        }, 0);
                        setTimeout(() => {
                            globalObjsTemp.black.alpha = 1;
                            playSound('crackle1')
                            setTimeout(() => {
                                globalObjsTemp.black.alpha = 0;
                                darkGloom.destroy();
                                fakeBaseOverlay.destroy();
                                fakeBase.destroy();
                                setupCharacters();
                                setRadioMusic('matts_blues', 0.75);
                                runMusicNote();
                                globalObjsTemp.radioStatic1 = playSound('radiostatic1', 0.01, true);
                                globalObjsTemp.radioStatic2 = playSound('radiostatic2', 0.01, true);
                                enableDinerButtons();
                                dialogManager.showDialogNode('intro');
                                randGloomShow(0);
                            }, 40);
                        }, 15);
                    }, 190);
                }, 1100);
            }, 20);
        }, 200);
    }, 1100);

    globalObjsTemp.gloom = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(5000, 999).setDepth(8).setAlpha(0);
    globalObjsTemp.gloom.setBlendMode(Phaser.BlendModes.DARKEN);
}


function setupCharacters() {
    gameCharacters.caspar = PhaserScene.add.image(-1163, gameConsts.halfHeight + 126, 'characters', 'caspar1.png').setDepth(11);
    gameCharacters.bruna = PhaserScene.add.image(-617, gameConsts.halfHeight + 134, 'characters', 'bruna1.png').setDepth(11);
    gameCharacters.maggie = PhaserScene.add.image(370, gameConsts.halfHeight - 25, 'characters', 'maggie1.png').setDepth(11);
    gameCharacters.edith = PhaserScene.add.image(1085, gameConsts.halfHeight + 117, 'characters', 'edith1.png').setDepth(11);
    gameCharacters.ethan = PhaserScene.add.image(1310, gameConsts.halfHeight + 103, 'characters', 'ethan1.png').setDepth(11);
    gameCharacters.juan = PhaserScene.add.image(1870, gameConsts.halfHeight + 107, 'characters', 'juan1.png').setDepth(11);
    gameCharacters.tv = PhaserScene.add.sprite(1319, gameConsts.halfHeight - 257, 'characters').play('tv');
    gameCharacters.dog = PhaserScene.add.sprite(-189, gameConsts.halfHeight + 188, 'characters', 'dog.png').setDepth(1);
    gameCharacters.backdoor = PhaserScene.add.sprite(-71, gameConsts.halfHeight + 39, 'characters', 'backdoor1.png').setDepth(1).setOrigin(0.918, 0.5);
    gameCharacters.sign = PhaserScene.add.sprite(290, 130, 'characters', 'diner.png').setDepth(1).setOrigin(0.25, 0.7);
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
    document.body.style.backgroundImage = "url('sprites/preload/rain.webp')";
    globalObjects.goalBtn.setState(NORMAL);

    for (let i in globalObjects.achievementImages) {
        if (globalObjects.achievementImages[i].destroy) {
            globalObjects.achievementImages[i].destroy();
        }
    }
    for (let i in globalObjects.achievementHoverIcons) {
        if (globalObjects.achievementHoverIcons[i].destroy) {
            globalObjects.achievementHoverIcons[i].destroy();
        }
    }
    globalObjects.achievementText.destroy();

    for (let i in globalObjects.achievements) {
        if (globalObjects.achievements[i].destroy) {
            globalObjects.achievements[i].destroy();
        }
    }
    globalObjects.optionsButton.destroy();
    globalObjects.creditsButton.destroy();
    if (globalObjects.flashWhite) {
        globalObjects.flashWhite.destroy();
    }
    if (globalObjects.icon1) {
        globalObjects.icon1.destroy();
        globalObjects.icon2.destroy();
        if (globalObjects.icon3) {
            globalObjects.icon3.destroy();
        }
    }

    gameVars.canSkipIntro = true;
    setBackground('intro', 'start.png');
    let thunderSfx = playSound('thunder', 0.8);

    if (!gameVars.showedCreditsSpook) {
        let eye = PhaserScene.add.image(gameConsts.halfWidth + 260, gameConsts.halfHeight - 255, 'lowq', 'spook4.png').setDepth(0).setAlpha(0.1).setScale(3);
        setTimeout(() => {
            eye.setScale(3.1).setAlpha(0.15);
            setTimeout(() => {
                eye.destroy();
            }, 20)
        }, 10)
        gameVars.showedCreditsSpook = true;
    }


    let greyCover = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'greycover.png').setScale(100, 4).setOrigin(0.5, 0.5).setDepth(-1);
    let dinerSign = PhaserScene.add.image(gameConsts.width, 430, 'intro', 'dinersign.png').setScale(0.7).setAlpha(0).setOrigin(0.5, 0.95);

    // TODO replace
    globalObjsTemp.rainBackground = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'rainheavy1.png').setDepth(1).setScale(3).setRotation(0.15);
    globalObjsTemp.rainBackground.play('rain_heavy')
    globalObjsTemp.rainBackground.scrollFactorX = 0.2; globalObjsTemp.rainBackground.scrollFactorY = 0;
    globalObjsTemp.rainForeground = PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'rainheavy1.png').setDepth(1).setScale(3).setRotation(0.15).play('rain_lite');
    globalObjsTemp.rainForeground.play('rain_lite')
    globalObjsTemp.rainForeground.scrollFactorX = 0.2; globalObjsTemp.rainForeground.scrollFactorY = 0;
    // globalObjsTemp.rainForeground;
    addToShakeObjects(globalObjsTemp.rainForeground);

    globalObjsTemp.skipBox = PhaserScene.add.image(gameConsts.width, 210, 'blackPixel').setScale(146, 15).setOrigin(1, 1);
    globalObjsTemp.skipBox.setPosition(gameConsts.width, gameConsts.height - 12);
    globalObjsTemp.skipBox.alpha = 0;
    globalObjsTemp.skipBox.setDepth(999);

    globalObjsTemp.skipText = PhaserScene.add.text(gameConsts.width - 20, gameConsts.height - 36, 'CLICK TO SKIP INTRO');
    globalObjsTemp.skipText.setFontSize(20);
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
            alpha: 0.1
        },
        press: {
            alpha: 0.2
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
        alpha: 0.65,
        ease: 'Cubic.easeInOut',
        duration: 1200
    });

    PhaserScene.tweens.add({
        targets: [greyCover],
        scaleY: 4.25,
        duration: 3800,
        ease: 'Cubic.easeIn',
    })

    PhaserScene.tweens.add({
        targets: [dinerSign],
        alpha: 1,
        x: gameConsts.width - 125,
        scaleX: 1.4,
        scaleY: 1.4,
        duration: 3800,
        ease: 'Cubic.easeIn',
        onComplete: () => {
            dinerSign.destroy();
            greyCover.destroy();
            thunderSfx.stop();

            if (!gameVars.canSkipIntro) return;
            globalObjsTemp.outdoorsrain = playSound('staticloop', 0.8, true);
            setBackground('intro', 'offtruck.png');

            playSound('truckdoor', 0.8);

            let achievementMult = numAchievements > 0 ? 0.85 : 1;
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
                        }, 2000 * achievementMult);
                    }, 2000 * achievementMult);
                }, 1500 * achievementMult);
            }, 1700 * achievementMult);
        }
    });
}

function realGameRain() {
    gameVars.updateRain = true;
    gameVars.updateRainCounter = 0;
    if (globalObjsTemp.rainBackground) {
        globalObjsTemp.rainBackground.setDepth(-1);
        globalObjsTemp.rainBackground.setRotation(0);
        globalObjsTemp.rainBackground.setScale(4.5);
        globalObjsTemp.rainBackground.setAlpha(0.3);
    }
    if (globalObjsTemp.rainForeground) {
        globalObjsTemp.rainForeground.setDepth(-1);
        globalObjsTemp.rainForeground.setRotation(0);
        globalObjsTemp.rainForeground.setScale(4.5);
        globalObjsTemp.rainForeground.setAlpha(0.4);
    }
}

function cleanupIntro() {
    globalObjsTemp.skipBox.destroy();
    globalObjsTemp.skipText.destroy();

    gameVars.canSkipIntro = false;
    realGameRain();
    setBackground('intro', 'diner1.png');
    if (globalObjsTemp.outdoorsrain) {
        globalObjsTemp.outdoorsrain.stop();
    }
    globalObjects.indoorRain = playSound('brownnoise', 1, true);
}

function enterShop() {
    closeCredits();
    closeAward();
    globalObjsTemp.skipButton.destroy();
    playSound('entershop');
    setBackground('intro', 'diner2.png');
    let dinerLighting = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'intro', 'dinerlighting.png').setAlpha(0);
    let achievementMult = numAchievements > 0 ? 0.9 : 1;
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
                        delay: 550,
                        alpha: 1,
                        ease: 'Cubic.easeIn',
                        duration: Math.floor(750 * achievementMult),
                        completeDelay: Math.floor(250 * achievementMult),
                        onComplete: () => {
                            darkScreen.destroy();
                            realGameStart();
                        }
                    });
                }, 120);
            }, Math.floor(350 * achievementMult));
        }, 100);
    }, 50);
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
    globalObjsTemp.radioMusic.volume = vol * globalVolume;
    globalObjsTemp.radioMusic.trueVolume = vol;

    if (globalObjsTemp.radioStatic1 && globalObjsTemp.radioStatic1.trueVolume !== undefined) {
        globalObjsTemp.radioStatic1.volume = globalObjsTemp.radioStatic1.trueVolume * vol * globalVolume;
        if (globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2.volume = globalObjsTemp.radioStatic2.trueVolume * vol * globalVolume;
        }
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
    clearGoalText();
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
        gameCharacters.bruna.setFrame('bruna1_worry.png');
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

function getAchImagFromIdx(i) {
    switch(i) {
        case 0:
            return "eye.png";
            break;
        case 1:
            return "eyes.png";
            break;
        case 2:
            return "eyes_many.png";
            break;
        case 3:
            return "crash.png";
            break;
        case 4:
            return "campfire.png";
            break;
        case 5:
            return "grave.png";
            break;
        case 6:
            return "maw.png";
            break;
        case 7:
            return "casparfullline.png";
            break;
    }
}

function getAchDescFromIdx(i) {
    switch(i) {
        case 0:
            return "Ending #0: YOU STAYED\nWhy did you stay\nin the diner?";
            break;
        case 1:
            return "ENDING #1: ALL ALONE\nLeave the diner all by\nyourself. Get lost.";
            break;
        case 2:
            return "ENDING #2: LOST TOGETHER\nLeave the diner with a\nfew others. Get lost.";
            break;
        case 3:
            return "ENDING #3: CRASHED\nSomething caught you off\nguard while driving away.";
            break;
        case 4:
            return "ENDING #4: BARE MINIMUM\nYou've made it to Hope Springs!\nBut you left some others behind.";
            break;
        case 5:
            return "ENDING #5: THE LAST TASTY SUPPER\nEveryone made it to Hope Springs!\nEveryone but Maggie.";
            break;
        case 6:
            return "ENDING #6: HOPELESS\nNo matter where you search,\neverything is gone.";
            break;
        case 7:
            return "ENDING #7: THE BEST END\nCaspar can finally rest\nin peace.";
            break;
    }
}

let numAchievements = 0;
function handleAchievements(achievements) {
    globalObjects.achievementText = PhaserScene.add.bitmapText(-999, -999, 'dialog', ' ', 20).setOrigin(0.5, 0).setDepth(100);
    globalObjects.achievementImages = [];
    globalObjects.achievementHoverIcons = [];


    for (let i = 0; i < 8; i++) {
        let textString = 'end' + i;
        let imageString = getAchImagFromIdx(i);
        if (achievements[textString]) {
            numAchievements++;
        } else {
            imageString = "ach_" + imageString;
        }
        globalObjects.achievementImages[i] = PhaserScene.add.image( 55 + i * 84, 100, 'epilogue', imageString).setDepth(1).setAlpha(0.8).setOrigin(0.5, 0.85).setVisible(false)
        if (achievements[textString]) {
            globalObjects.achievementImages[i].setAlpha(1);
            globalObjects.achievementHoverIcons[i] = new Button({
                normal: {
                    "ref": "blackPixel",
                    "x": globalObjects.achievementImages[i].x,
                    "y": 74,
                    "alpha": 0.001,
                    "scaleX": 32,
                    "scaleY": 41
                },
                hover: {
                    "ref": "blackPixel",
                    "alpha": 0.01
                },
                disable: {
                    "ref": "blackPixel",
                    "alpha": 0.001
                },
                onHover: () => {
                    if (canvas) {
                        canvas.style.cursor = 'pointer';
                    }
                    if (i === 0) {
                        showHoverText(135, 130, getAchDescFromIdx(i));
                    } else if (i === 7) {
                        showHoverText(globalObjects.achievementImages[i].x - 60, 130, getAchDescFromIdx(i));
                    } else {
                        showHoverText(globalObjects.achievementImages[i].x + 2, 130, getAchDescFromIdx(i));
                    }
                },
                onHoverOut: () => {
                    if (canvas) {
                        canvas.style.cursor = 'default';
                    }
                    hideHoverText();
                },
            });
            globalObjects.achievementHoverIcons[i].setState(DISABLE);
        }
        if (i == 7) {
            globalObjects.achievementImages[i].x -= 8;
        }
        let achWidth = globalObjects.achievementImages[i].width;
        if (achWidth > 83) {
            let newRatio = 83 / achWidth;
            globalObjects.achievementImages[i].setScale(newRatio);
        }
        let achHeight = globalObjects.achievementImages[i].height;
        if (achHeight > 92) {
            let newRatio = 92 / achHeight;

            if (newRatio < globalObjects.achievementImages[i].scaleX) {
                if (i === 7) {
                    newRatio += 0.03;
                }
                globalObjects.achievementImages[i].setScale(newRatio);
            }
        }
        if (achHeight < 70) {
            globalObjects.achievementImages[i].y -= (70 - achHeight) * 0.5
        }
    }
    globalObjects.achievements = {
        achievementsBacking: PhaserScene.add.image(0, 0, 'blackPixel').setDepth(0).setAlpha(0).setOrigin(0, 0).setScale(400, 50),
        achievementsButton: new Button({
            normal: {
                "ref": "achievements.png",
                "atlas": "buttons",
                "x": 0,
                "alpha": numAchievements > 0 ? 0.88 : 0.5
            },
            hover: {
                "ref": "achievements.png",
                "atlas": "buttons",
                "alpha": numAchievements > 0 ? 1 : 0.9,
            },
            press: {
                "ref": "achievements.png",
                "atlas": "buttons",
                "alpha": numAchievements > 0 ? 0.9 : 0.7,
            },
            onHover: () => {
                if (canvas) {
                    canvas.style.cursor = 'pointer';
                }
            },
            onHoverOut: () => {
                if (canvas) {
                    canvas.style.cursor = 'default';
                }
            },
            onMouseUp: () => {
                globalObjects.achievementsShown = !globalObjects.achievementsShown;
                if (globalObjects.achievementsShown) {
                    if (newestAchievement) {
                        let showcaseImage = globalObjects.achievementImages[newestAchievement]
                        PhaserScene.tweens.add({
                            targets: showcaseImage,
                            scaleX: showcaseImage.scaleX * 1.35,
                            scaleY: showcaseImage.scaleY * 1.35,
                            duration: 1000,
                            ease: 'Cubic.easeOut',
                            yoyo: true
                        });
                        playSound('trustgain');

                        newestAchievement = null;
                    }
                    for (let i in globalObjects.achievementImages) {
                        globalObjects.achievementImages[i].visible = true;
                    }
                    for (let i in globalObjects.achievementHoverIcons) {
                        globalObjects.achievementHoverIcons[i].setState(NORMAL);
                    }
                    globalObjects.achievements.achievementsBacking.setScale(400, 60);
                    globalObjects.achievements.achievementsBacking.setAlpha(0.2);
                    globalObjects.achievementTween = PhaserScene.tweens.add({
                        targets: [globalObjects.achievements.achievementsBacking],
                        alpha: 0.5,
                        duration: 200,
                        ease: 'Cubic.easeOut',
                    });
                } else {
                    for (let i in globalObjects.achievementImages) {
                        globalObjects.achievementImages[i].visible = false;
                    }
                    for (let i in globalObjects.achievementHoverIcons) {
                        globalObjects.achievementHoverIcons[i].setState(DISABLE);
                    }
                    globalObjects.achievementText.setVisible(false);
                    if (globalObjects.achievementTween) {
                        globalObjects.achievementTween.stop();
                    }
                    globalObjects.achievements.achievementsBacking.setAlpha(0);
                }
            }
        }),
        star: PhaserScene.add.image(162, 14, 'misc', 'star.png').setScale(0).setDepth(1).setOrigin(0.5, 0.55),
    };
    if (numAchievements == 0) {
        globalObjects.achievements.star.setAlpha(0);
        globalObjects.achievements.achievementsButton.setAlpha(0.5);
    }
    globalObjects.achievementsShown = false;

    globalObjects.achievements.achievementsButton.setPos(0, -32);
    globalObjects.achievements.achievementsButton.setDepth(1);
    globalObjects.achievements.achievementsButton.setOrigin(0, 0)
    globalObjects.achievements.achievementsButton.tweenToPos(0, -8, 400, 'Back.easeOut')
    PhaserScene.tweens.add({
        targets: [globalObjects.achievements.star],
        delay: 300,
        duration: 250,
        scaleX: 0.65,
        scaleY: 0.65,
        ease: 'Cubic.easeOut',
        onComplete: () => {
            PhaserScene.tweens.add({
                targets: [globalObjects.achievements.star],
                duration: 300,
                scaleX: 0.46,
                scaleY: 0.46,
                ease: 'Bounce.easeOut',
            });
        }
    });
}

function showHoverText(x, y, text) {
    globalObjects.achievementText.visible = true;
    globalObjects.achievementText.setPosition(x, y).setText(text);
}

function hideHoverText() {
    globalObjects.achievementText.visible = false;
}

function randGloomShow(repeat = 0, extraLarge = false) {
    if (!globalObjects.gloomRand) {
        globalObjects.gloomRand = PhaserScene.add.image(0, 0, 'characters', 'gloompix.png').setScale(0).setDepth(99).setAlpha(0);
        globalObjects.gloomRand.scrollFactorX = 0;
        globalObjects.gloomRand.scrollFactorY = 0;
        globalObjects.gloomRand.setBlendMode(Phaser.BlendModes.ADD)
    }
    let randWidth = 0.25 + Math.random() * 0.3;
    let randHeight = 1 + Math.random() * 9;
    randHeight *= randHeight;
    if (extraLarge) {
        randWidth *= 1.5;
        randHeight *= 2;
        globalObjects.gloomRand.setBlendMode(Phaser.BlendModes.DARKEN)
    } else {
        globalObjects.gloomRand.setBlendMode(Phaser.BlendModes.ADD)
    }
    globalObjects.gloomRand.setScale(randWidth, randHeight);
    globalObjects.gloomRand.setPosition(Math.random() * gameConsts.width, Math.random() * gameConsts.height);

    let randAlpha = 0.06;
    let randDur = 600 + Math.floor(Math.random() * 1000);
    if (extraLarge) {
        randAlpha += 0.02;
        randDur += 750;
    }
    PhaserScene.tweens.add({
        targets: [globalObjects.gloomRand],
        duration: extraLarge ? 650 : 400,
        alpha: randAlpha,
        ease: 'Quad.easeOut',
        onComplete: () => {
            PhaserScene.tweens.add({
                targets: [globalObjects.gloomRand],
                duration: randDur,
                alpha: 0,
                ease: 'Quad.easeIn',
            });
        }
    });
    if (repeat > 0) {
        setTimeout(() => {
            randGloomShow(repeat - 1);
        }, 2000 + Math.random() * 2000)
    }
}
