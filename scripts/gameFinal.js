class GameFinal {
    constructor(scene) {
        this.scene = scene || PhaserScene;
        messageBus.subscribe("exitEarlySceneTwo", this.exitEarlySceneTwo.bind(this));
        messageBus.subscribe("exitFinale", this.endGame.bind(this));
        messageBus.subscribe("stayFinale", this.endGame.bind(this));
        this.displayedLines = [];
    }

    exitEarlySceneTwo() {
        this.endGame();
    }

    endGame() {
        this.fadeOut();
        this.createEpilogue();
        this.createDisplayedLines();
        this.playDisplayedLines();
    }

    createDisplayedLines() {
        this.displayedLines[0] = "You exit the diner.";
        this.displayedLines.push(" Alone.")
        if (gameState.radio2Done || gameState.radio3Done) {
            this.displayedLines.push("\n\nYou check your maps for a place called Hope Springs.")
            this.displayedLines.push("\n\nYou get a rough idea where it is, but your maps are outdated.")
        } else {
            this.displayedLines.push("\n\nYou don't have any particular destination so you head towards\nthe next city.")
        }
        this.displayedLines.push("\n\nThe storm makes it difficult to find your way.")
        this.displayedLines.push("\n\nThe road signs are illegible.")
        this.displayedLines.push("\n\nThe roads themselves are twisted and slippery.")

        this.displayedLines.push("\n\nYou head out alone into the dark and are never heard from again.")

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
            }, 2000);
            return;
        }
        let nextLine = this.displayedLines.shift();
        this.showNextText(nextLine);
        setTimeout(() => {
            this.playNextDisplayedLine();
        }, 2100 + nextLine.length * 17);
    }

    fadeOut() {
        buttonManager.disableAllInput();

        if (!globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2 = {volume: 1};
        }

        this.scene.tweens.add({
            targets: [gameVars, globalObjsTemp.radioMusic, globalObjsTemp.radioStatic1, globalObjsTemp.radioStatic2],
            radioVolume: 0,
            volume: 0,
            duration: 3000
        });

        this.blackScreen = this.scene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setAlpha(0).setDepth(9999);
        this.blackScreen.setScale(5000, 1000);
        this.scene.tweens.add({
            targets: [this.blackScreen],
            alpha: 1,
            duration: 2500
        });
    }

    createEpilogue() {
        this.text1 = this.scene.add.bitmapText(35, 50, 'dialog', ' ', 20).setOrigin(0, 0).setDepth(10000);
        this.text1.scrollFactorX = 0;
        this.text1.scrollFactorY = 0;

        this.text2 = this.scene.add.bitmapText(35, 50, 'dialog', ' ', 20).setOrigin(0, 0).setAlpha(0).setDepth(10000);
        this.text2.scrollFactorX = 0;
        this.text2.scrollFactorY = 0;

        this.theEnd = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 90, 'THE END', {fontFamily: 'Times New Roman', fontSize: 36, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0).setDepth(10000);
        this.theEndTitle = this.scene.add.text(gameConsts.halfWidth, gameConsts.height - 48, 'Ending #1: All Alone', {fontFamily: 'Times New Roman', fontSize: 18, color: '#ffffff', align: 'center'}).setOrigin(0.5, 0).setAlpha(0).setDepth(10000);
        this.theEnd.scrollFactorX = 0;
        this.theEnd.scrollFactorY = 0;
        this.theEndTitle.scrollFactorX = 0;
        this.theEndTitle.scrollFactorY = 0;

        this.textOneActive = true;
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
}
