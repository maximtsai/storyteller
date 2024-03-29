class DialogBranchButton {
    constructor(scene, x = gameConsts.halfWidth, y = gameConsts.halfHeight) {
        this.scene = scene || PhaserScene;

        this.dialogButton = new Button({
            normal: {
                "ref": "blackPixel",
                x: x,
                y: y,
                alpha: 0.65
            },
            hover: {
                "ref": "blackPixel",
                alpha: 0.75
            },
            press: {
                "ref": "blackPixel",
                alpha: 0.45
            },
            disable: {
                "ref": "blackPixel",
                alpha: 0.001
            },
            onMouseUp: () => {
                if (this.prevFinishFunc) {
                    this.prevFinishFunc();
                    this.prevFinishFunc = null;
                }
                messageBus.publish("clearBranchOptions");
                // TODO: Move publishMessage up
                if (this.publishMessage) {
                    messageBus.publish(this.publishMessage, this.publishParam);
                }
                if (this.destNode) {
                    messageBus.publish('gotoDialogNode', this.destNode);
                } else {
                    messageBus.publish("hideAllDialog");
                    messageBus.publish("hideUndoPoint");
                }
            }
        });
        this.dialogButton.setDepth(998);
        this.dialogButton.setState(DISABLE);
        this.dialogButton.setScale(215, 29.5);

        this.text = this.scene.add.bitmapText(x, y, 'dialog', '...', 26);
        this.text.align = 1;
        this.text.visible = false;
        this.text.setDepth(1000);
        this.text.setOrigin(0.5, 0.48);
        this.setPosition(0, -999)
    }

    setPosition(x, y) {
        this.dialogButton.setPos(x, y);
        this.text.setPosition(x, y);
    }

    setText(text) {
        this.prevFinishFunc = null;

        this.text.setText(text);
        if (this.text.text.length > 40) {
            this.text.setFontSize(18);
        }
        if (this.text.text.length > 24) {
            this.text.setFontSize(23);
        } else {
            this.text.setFontSize(26);
        }
    }

    setActive() {
        this.text.visible = true;
        this.dialogButton.setState(NORMAL);
    }

    setDestNode(nodeName) {
        this.destNode = nodeName
    }

    setPublishData(message, param) {
        this.publishMessage = message;
        this.publishParam = param;
    }

    setPrevFinishFunc(func) {
        this.prevFinishFunc = func;
    }

    setInactive() {
        this.text.visible = false;
        this.dialogButton.setState(DISABLE);
        this.publishMessage = null;
        this.prevFinishFunc = null;
    }
}

class DialogDisplay {
    constructor(scene) {
        this.scene = scene || PhaserScene;
        this.lastSpeaker = "";

        this.dialogBox = this.scene.add.sprite(gameConsts.halfWidth, gameConsts.height - 183, 'blackPixel');
        this.dialogBox.setScale(gameConsts.width * 0.5 - 20, 84);
        this.dialogBox.visible = false;
        this.dialogBox.setDepth(999);
        this.dialogBox.setOrigin(0.5, 0);
        this.dialogBox.alpha = 0.7;
        this.dialogBox.scrollFactorX = 0;
        this.dialogBox.scrollFactorY = 0;

        this.dialogText = this.scene.add.bitmapText(50, gameConsts.height - 138, 'dialog', '...', 26);
        this.dialogText.startX = this.dialogText.x;
        this.dialogText.visible = false;
        this.dialogText.setDepth(999);
        this.dialogText.setOrigin(0, 0);
        this.dialogText.scrollFactorX = 0;
        this.dialogText.scrollFactorY = 0;

        this.dialogPrompt = this.scene.add.sprite(gameConsts.width - 30, gameConsts.height - 25, 'buttons', 'continue_prompt.png');
        this.dialogPrompt.visible = false;
        this.dialogPrompt.setDepth(999);
        this.dialogPrompt.setOrigin(1, 1);
        this.dialogPrompt.scrollFactorX = 0;
        this.dialogPrompt.scrollFactorY = 0;

        this.dialogSpeaker = this.scene.add.bitmapText(gameConsts.halfWidth, gameConsts.height - 174, 'dialog', 'INSERT NAME', 30);
        this.dialogSpeaker.visible = false;
        this.dialogSpeaker.setDepth(999);
        this.dialogSpeaker.setOrigin(0.5, 0);
        this.dialogSpeaker.scrollFactorX = 0;
        this.dialogSpeaker.scrollFactorY = 0;

        this.dialogFace = this.scene.add.sprite(85, gameConsts.height - 95, 'faces', 'ethan_normal.png');
        this.dialogFace.startX = this.dialogFace.x;
        this.dialogFace.setDepth(999);
        this.dialogFace.visible = false;
        this.dialogFace.setScale(0.7);
        this.dialogFace.scrollFactorX = 0;
        this.dialogFace.scrollFactorY = 0;

        this.speakerStars = [];
        for (let i = 0; i < 7; i++) {
            this.speakerStars[i] = this.scene.add.sprite(40 + i * 18.5, gameConsts.height - 30, 'misc', 'star.png');
            this.speakerStars[i].startY = this.speakerStars[i].y;
            this.speakerStars[i].setDepth(999);
            this.speakerStars[i].setScale(0.4);
            this.speakerStars[i].scrollFactorX = 0;
            this.speakerStars[i].scrollFactorY = 0;
            this.speakerStars[i].alpha = 0;

        }

        scene.tweens.add({
            targets: this.dialogPrompt,
            duration: 600,
            x: '-=7',
            yoyo: true,
            ease: 'Cubic.easeOut',
            repeat: -1
        });

        this.dialogClickBlocker = new Button({
            normal: {
                ref: "blackPixel",
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight,
                alpha: 0.001,
                scaleX: 10000,
                scaleY: 10000
            },
            onMouseUp: () => {

            }
        });
        this.dialogClickBlocker.setDepth(9998);
        this.dialogClickBlocker.setState(DISABLE);

        this.dialogButton = new Button({
            normal: {
                atlas: "buttons",
                ref: "continue_btn.png",
                x: gameConsts.halfWidth,
                y: gameConsts.height- 85,
                scaleX: 10,
                scaleY: 200,
                alpha: 0.001
            },
            hover: {
                atlas: "buttons",
                "ref": "continue_btn_hover.png",
                alpha: 0.001
            },
            press: {
                "atlas": "buttons",
                "ref": "continue_btn_hover.png",
                alpha: 0.001
            },
            disable: {
                "atlas": "buttons",
                "ref": "continue_btn_hover.png",
                alpha: 0.001
            },
            onMouseUp: () => {
                messageBus.publish('clickNextDialog');
            },
            cursorInteractive: true
        });
        this.dialogButton.setDepth(998);
        this.dialogButton.setState(DISABLE);

        this.subscriptions = [
            messageBus.subscribe("hideAllDialog", this.hideAll.bind(this)),
            messageBus.subscribe("showTalkText", this.showTalkText.bind(this)),
            messageBus.subscribe("showTalkFace", this.showTalkFace.bind(this)),
            messageBus.subscribe("hideTalkText", this.hideTalkText.bind(this)),
            messageBus.subscribe("showTalkSpeaker", this.showDialogSpeaker.bind(this)),
            messageBus.subscribe("updateTextSize", this.updateTextSize.bind(this)),

            messageBus.subscribe("hideTalkSpeaker", this.hideDialogSpeaker.bind(this)),
            messageBus.subscribe("showNextButton", this.showNextButton.bind(this)),
            messageBus.subscribe("setBranches", this.setBranchesDelayed.bind(this)),
            messageBus.subscribe("clearBranchOptions", this.clearBranchOptions.bind(this)),

            messageBus.subscribe("clickNextDialog", this.clickNextDialog.bind(this)),
            messageBus.subscribe("delayUpdateClickLocation", this.delayUpdateClickLocation.bind(this)),
            messageBus.subscribe("forceTextProgress", this.setForceTextProgress.bind(this)),
            messageBus.subscribe("unclickable", this.setUnclickable.bind(this)),

            messageBus.subscribe("setDialogBtnToTop", this.setDialogBtnToTop.bind(this)),
            messageBus.subscribe("updateInfluenceAnimation", this.updateInfluenceAnimation.bind(this)),
            messageBus.subscribe("showInfluence", this.showInfluence.bind(this)),
            messageBus.subscribe("showInfluenceSmall", this.showInfluenceSmall.bind(this)),

            messageBus.subscribe("pointerMove", this.checkCornerHover.bind(this)),
            messageBus.subscribe("pointerUp", this.checkCornerHover.bind(this)),
        ];


        this.buttons = [];
        for (let i = 0; i < 5; i++) {
            let newButton = new DialogBranchButton(this.scene);
            this.buttons.push(newButton);
        }

    }

    disableClickNext() {
        this.dialogButton.setState(DISABLE);
    }

    hideAll() {
        globalObjects.moveRightBtn.setState(NORMAL);
        globalObjects.moveLeftBtn.setState(NORMAL);
        if (globalObjects.moveRightBtnWide) {
            globalObjects.moveRightBtnWide.setState(NORMAL);
            globalObjects.moveLeftBtnWide.setState(NORMAL);
        }
        this.dialogClickBlocker.setState(DISABLE);

        this.dialogSpeaker.visible = false;
        this.dialogBox.visible = false;
        this.dialogFace.visible = false;
        if (this.showStarAnim) {
            this.showStarAnim.stop();
        }
        for (let i in this.speakerStars) {
            this.speakerStars[i].alpha = 0;
            this.speakerStars[i].visible = false;
            this.speakerStars[i].rotation = 0;
            this.speakerStars[i].setScale(0.4);
        }
        this.dialogPrompt.visible = false;
        this.dialogButton.setState(DISABLE);

        this.hideTalkText();
    }

    checkCornerHover(x, y) {
        if (this.starsActive) {
            return;
        }
        if (x < 140 && y > 490) {
            if (this.hideStarAnim) {
                this.hideStarAnim.stop();
            }
            this.starsActive = true;
            let numStars = this.getNumStars();
            for (let i = 0; i < numStars; i++) {
                this.speakerStars[i].visible = true;
                this.speakerStars[i].alpha = 0.5;
            }
        }
    }

    showDialogSpeaker(name) {
        this.lastSpeaker = this.dialogSpeaker.text;
        this.dialogSpeaker.setText(name);
        this.dialogSpeaker.visible = true;
        this.dialogBox.visible = true;
        this.dialogBox.x = gameConsts.halfWidth;
        this.dialogSpeaker.x = gameConsts.halfWidth;
    }

    updateTextSize(size = 'normal') {
        if (size == 'small') {
            this.dialogText.setFontSize(22);
        } else if (size == 'large') {
            this.dialogText.setFontSize(30);
        } else {
            this.dialogText.setFontSize(26);
        }
    }

    hideDialogSpeaker() {
        this.dialogSpeaker.visible = false;
    }

    showTalkText(text, instant = false) {
        this.dialogClickBlocker.setState(NORMAL);
        globalObjects.moveRightBtn.setState(DISABLE);
        globalObjects.moveLeftBtn.setState(DISABLE);
        if (globalObjects.moveRightBtnWide) {
            globalObjects.moveRightBtnWide.setState(DISABLE);
            globalObjects.moveLeftBtnWide.setState(DISABLE);
        }
        this.dialogPrompt.visible = false;
        this.currentlyTypedText = '';

        this.finalText = text;
        if (this.finalText.length >= 2) {
            this.finalText += "•••••••";
        }

        this.typingText = true;
        this.dialogText.setText(this.currentlyTypedText);
        this.dialogText.x = this.dialogText.startX;
        this.dialogText.visible = true;
        this.dialogText.setFontSize(26);
        this.dialogFace.visible = false;
        this.starsActive = false;
        this.numStars = this.getNumStars();
        setTimeout(() => {
            if (!this.starsActive) {
                // Hide em all
                let fadeDur = this.lastSpeaker == this.dialogSpeaker.text ? 1000 : 25;

                this.hideStarAnim = this.scene.tweens.add({
                    targets: this.speakerStars,
                    alpha: 0,
                    duration: fadeDur,
                    ease: 'Quad.easeIn'
                });
            }
        }, 50);

        // for (let i in this.speakerStars) {
        //     this.speakerStars[i].alpha = 0;
        //     this.speakerStars[i].visible = false;
        // }
        // this.canHideStars = true;

        this.dialogBox.visible = true;
        this.dialogBox.x = gameConsts.halfWidth;
        this.dialogButton.setState(NORMAL);
        this.dialogButton.setPos(gameConsts.halfWidth + gameVars.cameraPosX, gameConsts.height- 85 + gameVars.cameraPosY);

        let i = 0;

        // let numCharRevealed = 1 + gameVars.typeWriterOverflow; Math.max(1, Math.floor(gameVars.averageDeltaScale * 1.2));
        this.currentTypewriterEvent = this.scene.time.addEvent({
            callback: () => {
                if (this.typingText) {
                    let numCharRevealed = 1;
                    let timeDiff = Date.now() - gameVars.typeWriterOverflow;
                    let intervals = Math.floor(timeDiff / 10);
                    if (gameVars.typeWriterOverflow != 0) {
                        numCharRevealed = intervals;
                    }
                    if (numCharRevealed >= 1) {
                        gameVars.typeWriterOverflow += intervals * 10;
                    }
                    for (let j = 0; j < numCharRevealed; j++) {
                        let nextCharacter = this.finalText[i];
                        this.currentlyTypedText += nextCharacter;
                        if (nextCharacter == "•") {
                            gameVars.typeWriterOverflow += 20;
                        }
                        if (this.currentlyTypedText.length == this.finalText.length) {
                            this.dialogText.setText(this.currentlyTypedText);
                            this.finishTypingText();
                            break;
                        } else if (j == numCharRevealed - 1) {
                            this.dialogText.setText(this.currentlyTypedText);
                        }
                        i++;
                    }
                } else {
                    this.currentTypewriterEvent.remove();
                }
            },
            repeat: this.finalText.length * 10,
            delay: 10
        });
        if (instant) {
            this.finishTypingText();
        }
    }

    showTalkFace(faceFrame = 'maggie_dark_scared.png') {
        this.dialogText.x = this.dialogText.startX + 100;
        this.dialogFace.visible = true;
        this.dialogFace.x = this.dialogFace.startX;
        this.dialogFace.setFrame(faceFrame);

        this.numStars = this.getNumStars();
        // setTimeout(() => {
        //     if (this.starsActive) {
        //         for (let i = 0; i < this.speakerStars.length; i++) {
        //             if (i < this.numStars) {
        //                 this.speakerStars[i].alpha = 0.5;
        //             } else {
        //                 this.speakerStars[i].alpha = 0;
        //             }
        //         }
        //     }
        // }, 0);
    }

    finishTypingText() {
        gameVars.typeWriterOverflow = 0;
        this.typingText = false;
        if (this.currentTypewriterEvent) {
            this.currentTypewriterEvent.remove();
        }
        this.currentlyTypedText = this.finalText;
        this.dialogText.setText(this.currentlyTypedText);
        if (this.branchesToSet) {
            this.showBranches();
        } else {
            this.dialogPrompt.visible = true;
        }
        if (this.forceTextProgress) {
            this.forceTextProgress = false;
            if (this.onButtonClick) {
                this.onButtonClick();
            }
        }
    }

    hideTalkText() {
        this.dialogText.visible = false;
        this.typingText = false;
        if (this.currentTypewriterEvent) {
            this.currentTypewriterEvent.remove();
        }
    }

    showNextButton(onButtonClick) {
        this.onButtonClick = onButtonClick;
    }

    setBranchesDelayed(branches, onFinishFunc) {
        this.branchesToSet = branches;
        this.onFinishFunc = onFinishFunc;
    }

    showBranches() {
        this.dialogPrompt.visible = false;
        let branches = this.branchesToSet;
        let onFinishFunc = this.onFinishFunc;
        let branchIndexOffset = 0;
        for (let i = 0; i < branches.length; i++) {
            let branchData = branches[i];
            let idx = i - branchIndexOffset;
            let currButton = this.buttons[idx];

            if ((branchData.dependentState && !gameState[branchData.dependentState]) || (branchData.rejectState && gameState[branchData.rejectState])) {
                // hidden option, make sure button is used for next option if it comes
                branchIndexOffset++;
            } else {
                let yPos = gameConsts.halfHeight - (branches.length - 1) * 32 + idx * 64 - branches.length * 12;
                currButton.setPosition(gameConsts.halfWidth + gameVars.cameraPosX, yPos);
                currButton.setText(branchData.text);
                currButton.setDestNode(branchData.targetNode);
                if (branchData.publish) {
                    currButton.setPublishData(branchData.publish, branchData.param);
                }
                if (onFinishFunc) {
                    currButton.setPrevFinishFunc(onFinishFunc);
                }
                currButton.setActive();
            }
        }
        this.branchesToSet = null;
        this.onFinishFunc = null;
        if (branches.length > 0) {
            this.disableClickNext();
        }
    }

    clearBranchOptions() {
        for (let i = 0; i < this.buttons.length; i++) {
            let currButton = this.buttons[i];
            currButton.setInactive();
        }
    }

    clickNextDialog() {
        if (this.dialogButton.getState() === DISABLE) {
            return;
        }
        if (this.typingText) {
            this.finishTypingText();
        } else {
            if (this.onButtonClick) {
                this.onButtonClick();
            }
        }
    }

    delayUpdateClickLocation() {
        setTimeout(() => {
            this.dialogButton.setPos(gameConsts.halfWidth + gameVars.cameraPosX, gameConsts.height- 85);
            setTimeout(() => {
                this.dialogButton.setPos(gameConsts.halfWidth + gameVars.cameraPosX, gameConsts.height- 85);
                setTimeout(() => {
                    this.dialogButton.setPos(gameConsts.halfWidth + gameVars.cameraPosX, gameConsts.height- 85);
                }, 300);
            }, 300);
        }, 300);
    }

    setForceTextProgress() {
        this.forceTextProgress = true
    }

    setUnclickable() {
        this.disableClickNext();
    }

    setDialogBtnToTop() {
        buttonManager.bringToTop(this.dialogButton);
        buttonManager.bringToTop(globalObjects.muteButton);
    }

    getNumStars() {
        let speakerName = this.dialogSpeaker.text;
        switch(speakerName) {
            case 'Maggie':
                return gameState.MaggieInfluence || 0;
            case 'Bruna':
                return gameState.BrunaInfluence || 0;
            case 'Juan':
                return gameState.JuanInfluence || 0;
            case 'Edith':
                return gameState.EdithInfluence || 0;
                return 2;
            case 'Ethan':
                return gameState.EthanInfluence || 0;
            default:
                return 0;
        }
        return 0;
    }

    updateInfluenceAnimation(change) {
        this.numStars = this.getNumStars();
        let oldNumStars = this.numStars - change;
        let gainedStar = false;
        this.starsActive = true;
        if (this.hideStarAnim) {
            this.hideStarAnim.stop();
        }
        for (let i = 0; i < this.speakerStars.length; i++) {
            if (i < this.numStars) {
                this.speakerStars[i].visible = true;
                if (this.speakerStars[i].alpha < 0.5) {
                    if (i < oldNumStars) {
                        this.speakerStars[i].setAlpha(0.5);
                    } else {
                        gainedStar = true;
                        // animate to visible
                        this.speakerStars[i].setScale(0.9);
                        this.speakerStars[i].setAlpha(0.01);
                        this.speakerStars[i].rotation = -0.05;
                        if (i >= 3 && Math.random() < 0.3) {
                            this.speakerStars[i].rotation = -3.14;
                        } else if (i >= 2 && Math.random() < 0.05) {
                            this.speakerStars[i].rotation = -3.14;
                        }
                        this.showStarAnim = this.scene.tweens.add({
                            targets: this.speakerStars[i],
                            alpha: 1,
                            scaleX: 0.3,
                            scaleY: 0.3,
                            rotation: 0,
                            duration: 350,
                            ease: 'Quad.easeIn',
                            onComplete: () => {
                                this.showStarAnim = this.scene.tweens.add({
                                    targets: this.speakerStars[i],
                                    alpha: 1.05,
                                    scaleX: 0.8,
                                    scaleY: 0.8,
                                    rotation: 0.09 + 0.045 * Math.random(),
                                    duration: 350,
                                    ease: 'Quart.easeOut',
                                    onComplete: () => {
                                        this.showStarAnim = this.scene.tweens.add({
                                            targets: this.speakerStars[i],
                                            alpha: 0.5,
                                            scaleX: 0.4,
                                            scaleY: 0.4,
                                            rotation: 0,
                                            duration: 300,
                                            ease: 'Cubic.easeIn',
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            } else {
                if (i < oldNumStars) {
                    this.speakerStars[i].visible = true;
                    this.speakerStars[i].alpha = 0.5;
                }
                if (this.speakerStars[i].alpha > 0) {
                    playSound('button');

                    // animate to hidden when it isn't
                    this.speakerStars[i].alpha = 0.8;
                    this.speakerStars[i].setScale(0.6);
                    this.scene.tweens.add({
                        targets: this.speakerStars[i],
                        alpha: 0,
                        y: this.speakerStars[i].startY + 35,
                        scaleX: 0.2,
                        scaleY: 0.2,
                        rotation: 2.5,
                        duration: 800,
                        ease: 'Cubic.easeIn',
                        onComplete: () => {
                            this.speakerStars[i].setScale(0.4);
                            this.speakerStars[i].y = this.speakerStars[i].startY;
                            this.speakerStars[i].rotation = 0;
                        }
                    });
                }
            }
        }

        if (gainedStar) {
            playSound('trustgain');
        }
    }

    showInfluenceSmall() {
        this.showInfluence(true);
    }

    showInfluence(isSmall = false) {
        this.numStars = this.getNumStars();
        let startSize = isSmall ? 0.55 : 0.3;
        let biggestSize = isSmall ? 0.35 : 0.6;
        let finalSize = isSmall ? 0.32 : 0.4;
        let randRot = (Math.random() * 0.55);
        let finalRot = isSmall ? randRot * randRot - 0.15 : 0;
        this.starsActive = true;
        for (let i = 0; i < this.speakerStars.length; i++) {
            this.speakerStars[i].visible = true;
            if (i < this.numStars) {
                this.speakerStars[i].alpha = 0.35;
                this.speakerStars[i].setScale(startSize);
                this.showStarAnim = this.scene.tweens.add({
                    targets: this.speakerStars[i],
                    alpha: 1,
                    scaleX: biggestSize,
                    scaleY: biggestSize,
                    rotation: finalRot,
                    duration: 350,
                    ease: 'Cubic.easeOut',
                    onComplete: () => {
                        this.showStarAnim = this.scene.tweens.add({
                            targets: this.speakerStars[i],
                            alpha: 0.5,
                            scaleX: finalSize,
                            scaleY: finalSize,
                            duration: 450,
                            ease: 'Back.easeOut',
                        });
                    }
                });
            } else {
                this.speakerStars[i].alpha = 0;
            }
        }
    }

    reset() {
        for (let i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
    }

    destroy() {
        this.reset();
    }
}
