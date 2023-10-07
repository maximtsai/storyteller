/**
 *  This class allows a function to run every frame. Useful for the Update function in most objects.
 **/

class UpdateManager {
    constructor() {
        this.listOfFunctions = [];
    }

    update(deltaScale) {
        for (let i = 0; i < this.listOfFunctions.length; i++) {
            this.listOfFunctions[i](deltaScale);
        }
    }

    addFunction(func) {
        // first check if the function already exists
        for (let i = 0; i < this.listOfFunctions.length; i++) {
            if (func === this.listOfFunctions[i]) {
                return;
            }
        }
        this.listOfFunctions.push(func);
    }

    removeFunction(func) {
        for (let i = 0; i < this.listOfFunctions.length; i++) {
            if (func === this.listOfFunctions[i]) {
                this.listOfFunctions.splice();
            }
        }
    }
}

updateManager = new UpdateManager();
