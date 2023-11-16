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
        scrollX: "+=6",
        scrollX: "+=1",
        ease: 'Cubic.easeOut',
        duration: 40,
        onComplete: () => {
            PhaserScene.tweens.add({
                targets: [PhaserScene.cameras.main],
                scrollX: "-=9",
                scrollY: "-=3",
                ease: 'Cubic.easeInOut',
                duration: 75,
                onComplete: () => {
                    PhaserScene.tweens.add({
                        targets: [PhaserScene.cameras.main],
                        scrollX: "+=5",
                        scrollY: "+=2",
                        ease: 'Cubic.easeInOut',
                        duration: 110,
                        onComplete: () => {
                            PhaserScene.tweens.add({
                                targets: [PhaserScene.cameras.main],
                                scrollX: "-=2",
                                scrollY: "-=1",
                                ease: 'Cubic.easeInOut',
                                duration: 130
                            });
                        }
                    });
                }
            });
        }
    });

}
