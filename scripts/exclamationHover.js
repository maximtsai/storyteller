class ExclamationHover {
    constructor(scene) {
        this.scene = scene || PhaserScene;
        this.image = this.scene.add.image(0, -9999, 'misc', 'chat_icon.png');
        this.image.scrollFactorX = 0; this.image.scrollFactorY = 0;
        this.image.alpha = 0;
        this.image.setOrigin(0.5, 0.5);
        this.image.setDepth(100);
        messageBus.subscribe("pointerMove", this.setPosition.bind(this));
    }

    setPosition(x, y) {
        this.image.setPosition(x, y);
    }

    setFrame(frame) {
        this.image.setFrame(frame);
    }

    setAlpha(alpha = 1) {
        this.image.alpha = alpha;
    }

    hide() {
        this.image.y = -9999;
    }
}
