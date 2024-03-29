class InternalButtonManager {
    constructor() {
        this.buttonList = [];
        this.lastHovered = null;
        this.lastClickedButton = null;
        this.draggedObj = null;
        this.active = true;

        this.updateInterval = 25;
        this.updateCounter = 0;

        messageBus.subscribe("pointerUp", this.onPointerUp.bind(this));
        messageBus.subscribe("pointerMove", this.onPointerMove.bind(this));
        messageBus.subscribe("pointerDown", this.onPointerDown.bind(this));
    }


    update(delta) {
        if (!this.active) {
            return;
        }
        // this.updateCounter += delta;
        // if (this.updateCounter < this.updateInterval) {
        //     return;
        // }
        // this.updateCounter = 0;
        let handX = gameVars.mouseposx;
        let handY = gameVars.mouseposy;
        // check hovering
        let hasHovered = false;
        let currentHovered = null;

        for (let i = this.buttonList.length - 1; i >= 0; i--) {
            let buttonObj = this.buttonList[i];
            if (buttonObj && buttonObj.checkCoordOver(handX, handY)) {
                buttonObj.onHover();
                hasHovered = true;
                currentHovered = buttonObj;
                break;
            }
        }
        if (this.lastHovered && this.lastHovered !== currentHovered
            && this.lastHovered.getState() !== 'disable') {
            this.lastHovered.setState('normal');
            this.lastHovered.onHoverOut();
        }

        this.lastHovered = currentHovered;
    }

    onPointerUp(mouseX, mouseY) {
        if (!this.active) {
            return;
        }
        let buttonObj = this.getLastClickedButton();
        if (buttonObj && buttonObj.checkCoordOver(mouseX, mouseY)) {
            buttonObj.onMouseUp();
        }
        if (this.draggedObj) {
            if (this.draggedObj.onDrop) {
                this.draggedObj.onDrop();
            }
            this.draggedObj = null
        }
    }

    onPointerMove(mouseX, mouseY) {
        if (!this.active) {
            return;
        }
        if (this.draggedObj) {
            this.draggedObj.setPos(mouseX + PhaserScene.cameras.main.scrollX, mouseY + PhaserScene.cameras.main.scrollY);
            this.draggedObj.onDrag();
        }
    }

    onPointerDown(mouseX, mouseY) {
        if (!this.active) {
            return;
        }
        for (let i = this.buttonList.length - 1; i >= 0; i--) {
            let buttonObj = this.buttonList[i];
            if (buttonObj.checkCoordOver(mouseX, mouseY)) {
                buttonObj.onMouseDown();
                this.lastClickedButton = buttonObj;
                break;
            }
        }
    }

    disableAllInput() {
        this.active = false;
    }

    enableAllInput() {
        this.active = true;
    }

    addToButtonList(button) {
        this.buttonList.push(button);
    }

    getLastClickedButton() {
        return this.lastClickedButton;
    }

    removeButton(button) {
        for (let i in this.buttonList) {
            if (this.buttonList[i] === button) {
                this.buttonList.splice(parseInt(i), 1);
                break;
            }
        }
    }

    bringToTop(button) {
        this.removeButton(button);
        this.addToButtonList(button);
    }

    getDraggedObj() {
        return this.draggedObj;
    }

    setDraggedObj(newObj = null) {
        this.draggedObj = newObj;
    }
}

buttonManager = new InternalButtonManager();
