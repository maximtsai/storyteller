let furnitureDialog = {
    radio1: {
        speech: [
            {speaker: 'Radio', size: 'small', text: "\"That was 'Passing Time' by the Billy Boys.\n" +
                    "I see we have a caller, let's see what they has to say about\n" +
                    "the storm tonight. Hi, this is DJ Dean with KV Radio.\" "},
            {speaker: 'Radio', size: 'small', text: "\"Who do I have on the line tonight?\"\n" +
                    "\"Hello Dean, this is Beatrice.\"\n" +
                    "\"Hi Beatrice, we all have our eyes on the skies tonight, \n" +
                    "what's your take on the storm?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Sonny, I've lived in this town for seven decades.\n" +
                    "I have never seen a storm like this. There's something\n" +
                    "not right in those clouds. You youngsters need to be careful!\""},
            {speaker: 'Radio', size: 'small', text: "\"I've got to agree, this storm sure is something.\n" +
                    "While it's been years since I've been a 'youngster' I'll\n" +
                    "be sure to stay in the studio until the worst of this\n" +
                    "passes. You take care Beatrice.\""},
        ]
    },
    radioActTwo1: {
        speech: [
            {speaker: 'Radio', size: 'small', text: "\"That was 'Bread and Circuses' by the Lady Girls. We have\n" +
                    "another caller on the line. Hi, this is DJ Dean with\n" +
                    "KV Radio. Who do I have on the line tonight?\""},
            {speaker: 'Radio', size: 'small', text: "\"Hi.••••.••••. ••••••••••••••hello? Dean?\"\n" +
                    "\"Yep, this is Dean, who's calling?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Dean! You've got to warn people! There's something out\"\n" +
                    "in the rain, something big! I... oh no it's-\"\n" +
                    "Hello? Buddy? I think we lost connection with him.\""},
            {speaker: 'Radio', size: 'small', text: "\"Hopefully he calls back. Next song is...\"\n"},
        ]
    },

    tv1: {
        speech: [
            {speaker: 'TV', size: 'small', text: "\"In our next story, Lisa is a 13 year old entrepreneur\n" +
                    "making five figures a month!\" \"...Hang on Marge, we\n" +
                    "need to jump over to weather for an update on the storms\n" +
                    "passing through. Homer?\""},
            {speaker: 'TV', size: 'small', text: "\"Thanks Bart. The rain is really coming down, however\n" +
                    "the local authorities have not declared a flooding\n" +
                    "emergency. They are encouraging everyone to stay put\n" +
                    "until the storm passes.\""},
            {speaker: 'TV', size: 'small', text: "\"Thanks Homer. So Lisa decided one day...\""},
        ]
    },
    tv2: {
        speech: [
            {speaker: 'TV', size: 'small', text: "\"Hahaha! What a cute dog trick, no wonder it went viral.\"\n" +
                    "That's right Marge, so cute. In other news we've been\n" +
                    "hearing reports that one of the live feeds of a local\n" +
                    "Peregrine Falcon nest on Heaven Towers cut out."},
            {speaker: 'TV', size: 'small', text: "Rest assured, the beloved birds are fine and the feed will\n" +
                    "be restored shortly. The images of a humanoid figure in\n" +
                    "the live feed are just an internet hoax."},
            {speaker: 'TV', size: 'small', text: "\"That nest is thirty stories in the air Homer. Who'd believe\n" +
                    "someone walking up to the nest?\"\n" +
                    "\"Who indeed. Next up we'll have some updates on the\n" +
                    "storm after this commercial break.\""},
        ]
    },
    tv3: {
        speech: [
            {speaker: 'TV', size: 'small', forceProgress: true, text: "\"A•a•a•a••n••d•••••• we're ••back ••to ••our ••favorite-••••••••\"\n"},
            {speaker: 'TV', size: 'large', instant: true, text: "        THIS IS AN EXTREME WEATHER\n                 EMERGENCY ALERT.", publish: "tvemergency"},
            {speaker: 'TV', size: 'large', instant: true, text: "        THIS IS AN EXTREME WEATHER\n                 EMERGENCY ALERT.\n                                ..."},
            {speaker: 'TV', text: "  ALL RESIDENTS ARE ADVISED TO SEEK\n  SHELTER IN PLACE."},
            {speaker: 'TV', text: "  THE FOLLOWING COUNTIES ARE UNDER\n  AN EMERGENCY ALERT:  •••••••••••••••. •••••••••••••••. •••••••••••••••.\n  •••••••••••••••.••••••••••••••••.\n  ••••••••••••••••••••••.••••••••••••••••••••••.••••••••••••••••••••", publish: "playSound", param: 'emergency2'},
            {speaker: ' ', text: "(They might as well announce it state by state\nat this point)", publish: "tvemergencyEnd"},
        ]
    },
    tv4: {
        speech: [
            {speaker: ' ', text: "   (The TV continues showing its warnings)", data: {property: "tvended", value: "true"}},
        ]
    },
    tvPowerless: {
        speech: [
            {speaker: ' ', text: "   The power is off. The TV is also off."},
        ]
    },
    tvPowerlessEthanEdith: {
        speech: [
            {speaker: ' ', text: "  The power is off. The TV is also off,••••••••••••••••••••••• right?"},
        ]
    },
    tvOff: {
        speech: [
            {speaker: ' ', text: "   The TV is off to save energy••.•••••••••••\n   Not like the news was good anyway."},
        ]
    },
    tvCrack1: {
        speech: [
            {speaker: ' ', text: "   Got to save energy••••••••••••.•••••••••••.••••••••••\n   Wait was that crack always there?"},
        ]
    },
    tvCrack2: {
        speech: [
            {speaker: ' ', text: "   The TV is probably broken."},
        ]
    },
    tvCrack3: {
        speech: [
            {speaker: ' ', text: "   I could try turning it on anyways\n   to see what would happen."},
        ]
    },
    tvCrack4: {
        speech: [
            {speaker: ' ', forceProgress: true, text: "   The TV is most definitely••••••••••••• absolutely••••••••••••• brok•••••••••••••••••••••••••••••••••••••••••••", data: {property: "tvSceneThreeEnded", value: "true"}},
            {speaker: ' ', instant: true, text: "   The TV is most definitely absolutel̶y̷ ̶b̸r̴o̵k̶", publish: "tvJumpscare"},
        ]
    },
    tvCrackEnd: {
        speech: [
            {speaker: ' ', text: "   I'm not touching that TV again."},
        ]
    },

    radioPowerless: {
        speech: [
            {speaker: ' ', text: "   Radio can't play without power."},
        ]
    },

    BackdoorActOne: {
        speech: [
            {speaker: '', text: "No reason to go there right now."},
        ]
    },
    BackdoorLocked: {
        speech: [
            {speaker: '', text: "I should talk to Maggie first before going out back."},
        ]
    },

    BackdoorActTemporary: {
        speech: [
            {speaker: '', text: "TODO: Implement gameplay for fixing generator.\nFix generator for now?"},
        ],
        branches: [
            {text: 'Yes', targetNode: "BackdoorActTemporaryFixed"},
            {text: "Not yet"},
        ]
    },
    BackdoorActTemporaryFixed: {
        speech: [
            {speaker: '', text: " (generator magically fixed)", publish: "generatorFixed", param: 99},
        ]
    },
    Backdoor2NoReasonToGo: {
        speech: [
            {speaker: "",  text: "The generator's fixed. No need to go back out again."},
        ]
    },

    ExitNoReason: {
        speech: [
            {speaker: '', text: "No reason to go back to my rig right now."},
        ]
    },
    ExitSceneTwo: {
        speech: [
            {speaker: '', text: "Do I really want to exit now?"},
        ],
        branches: [
            {text: 'Yes', publish: "exitEarlySceneTwo"},
            {text: "Not yet"},
        ]
    }
};
