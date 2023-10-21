helperFunction = {};

helperFunction.runFunctionOverIntervals = function runFunctionOverIntervals(func, intervals = [], prevDelay = 0) {
    if (intervals.length > 0) {
        let firstInterval = intervals[0];
        let delayAmt = firstInterval.delay + prevDelay;
        if (firstInterval.duration) {
            prevDelay = firstInterval.duration;
        } else {
            prevDelay = 0;
        }
        setTimeout(() => {
            func(firstInterval);
            intervals.shift();
            helperFunction.runFunctionOverIntervals(func, intervals, prevDelay);
        }, delayAmt);
    }
}

helperFunction.screenShake = function screenshake() {
    PhaserScene.tweens.add({
        targets: [PhaserScene.cameras.main],
        scrollX: "+=5",
        ease: 'Cubic.easeOut',
        duration: 40,
        onComplete: () => {
            PhaserScene.tweens.add({
                targets: [PhaserScene.cameras.main],
                scrollX: "-=8",
                scrollY: "-=1",
                ease: 'Cubic.easeInOut',
                duration: 70,
                onComplete: () => {
                    PhaserScene.tweens.add({
                        targets: [PhaserScene.cameras.main],
                        scrollX: "+=4",
                        scrollY: "+=2",
                        ease: 'Cubic.easeInOut',
                        duration: 100,
                        onComplete: () => {
                            PhaserScene.tweens.add({
                                targets: [PhaserScene.cameras.main],
                                scrollX: "-=1",
                                scrollY: "-=1",
                                ease: 'Cubic.easeInOut',
                                duration: 120
                            });
                        }
                    });
                }
            });
        }
    });

}
