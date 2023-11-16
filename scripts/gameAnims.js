function createAnimations(scene) {
    scene.anims.create({
        key: 'tv',
        frames: scene.anims.generateFrameNames('characters', {
            prefix: 'tv',
            suffix: '.png',
            start: 1,
            end: 2,
            zeroPad: 1,
        }),
        frameRate: 3,
        repeat: -1
    });
    scene.anims.create({
        key: 'tv_shake',
        frames: scene.anims.generateFrameNames('characters', {
            prefix: 'tv_shake',
            suffix: '.png',
            start: 1,
            end: 5,
            zeroPad: 1,
        }),
        frameRate: 15,
        repeat: 0
    });
    scene.anims.create({
        key: 'backdoor_shake',
        frames: scene.anims.generateFrameNames('characters', {
            prefix: 'backdoor',
            suffix: '.png',
            start: 1,
            end: 8,
            zeroPad: 1,
        }),
        frameRate: 4,
        repeat: -1
    });
}
