class MiscSubscribe {
    constructor(scene) {
        this.scene = scene || PhaserScene;

        messageBus.subscribe("MaggieCoffee", this.maggieCoffee.bind(this));
        messageBus.subscribe("maggieCoffeeEnd", this.maggieCoffeeEnd.bind(this));

        messageBus.subscribe("ActOneEnd", this.actOneEnd.bind(this));
        messageBus.subscribe("playSound", this.playSound.bind(this));
        messageBus.subscribe("tvemergency", this.tvemergency.bind(this));
        messageBus.subscribe("tvemergencyEnd", this.tvemergencyEnd.bind(this));
    }

    tvemergency() {
        playSound('emergency');
        setRadioVolume(0);
    }

    tvemergencyEnd() {
        setRadioVolume(0.75);
        gameVars.emergencyBroadcasted = true;
    }

    playSound(sound) {
        playSound(sound);
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
            ease: 'Cubic.easeOut'
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

    actOneEnd() {
        globalObjsTemp.gloom = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'pixels', 'gloom_pixel.png').setScale(5000, 999);
        globalObjsTemp.black = this.scene.add.image(gameConsts.halfWidth, gameConsts.halfHeight, 'blackPixel').setScale(5000, 999);
        globalObjsTemp.black.setAlpha(0).setDepth(8);
        globalObjsTemp.gloom.setBlendMode(Phaser.BlendModes.DARKEN);
        globalObjsTemp.gloom.setAlpha(0.2).setDepth(8);

        setTimeout(() => {
            globalObjsTemp.gloom.setAlpha(0);
            setTimeout(() => {
                globalObjsTemp.gloom.setAlpha(0.3);
                setRadioVolume(0);
                setTimeout(() => {
                    globalObjsTemp.gloom.setAlpha(0.2);
                    setTimeout(() => {
                        globalObjsTemp.gloom.setAlpha(1);
                        globalObjsTemp.black.setAlpha(1);
                        setCharactersDark();
                        gameCharacters.maggieCoffee.setFrame('maggie_coffee_dark.png');
                        setTimeout(() => {
                            globalObjsTemp.black.setAlpha(0);
                            this.showWindowShadow1();
                        }, 70);
                    }, 600);
                }, 70);
            }, 700);
        }, 70);
    }

    showWindowShadow1() {
        this.scene.tweens.add({
            targets: globalObjsTemp.gloom,
            duration: 1000,
            alpha: 0.8,
        });
        dialogManager.showDialogNode('Yelling');
        let shadow = this.scene.add.image(-900, gameConsts.halfHeight, 'characters', 'shadow1.png').setScale(4,3).setDepth(-1);
        let eye = this.scene.add.image(-800, gameConsts.halfHeight - 110, 'characters', 'shadowEye.png').setDepth(-1);
        eye.setScale(0.75, 0);
        setTimeout(() => {
            this.scene.tweens.add({
                targets: eye,
                duration: 400,
                x: -810,
                y: gameConsts.halfHeight - 100,
                scaleX: 0.75,
                scaleY: 0.15,
                ease: 'Cubic.easeOut',
                completedDelay: 300,
                onComplete: () => {
                    this.scene.tweens.add({
                        targets: eye,
                        duration: 350,
                        x: -865,
                        y: gameConsts.halfHeight - 80,
                        scaleX: 1,
                        scaleY: 0.94,
                        ease: 'Quad.easeIn',
                        onComplete: () => {
                            this.scene.tweens.add({
                                targets: eye,
                                duration: 1000,
                                x: "+=5",
                                scaleX: 0.96,
                                scaleY: 0.91,
                                ease: 'Bounce.easeOut',
                                onComplete: () => {
                                    eye.setScale(1, 1);
                                    this.scene.tweens.add({
                                        targets: eye,
                                        duration: 300,
                                        y: "-=5",
                                        scaleX: 1.05,
                                        scaleY: 0,
                                        ease: 'Cubic.easeIn',
                                        onComplete: () => {
                                            globalObjsTemp.black.setAlpha(1);
                                            globalObjsTemp.gloom.setAlpha(1);
                                            setTimeout(() => {
                                                globalObjsTemp.black.setAlpha(0);
                                                shadow.destroy();
                                                eye.destroy();
                                            }, 100);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }, 1000);

    }
}
