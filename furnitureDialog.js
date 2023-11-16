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
                    "not right in those clouds. You youngsters need to be\ncareful!\""},
            {speaker: 'Radio', size: 'small', text: "\"I've got to agree, this storm sure is something.\n" +
                    "While it's been years since I've been a 'youngster' I'll\n" +
                    "be sure to stay in the studio until the worst of this\n" +
                    "passes. You take care Beatrice.\"", data: {property: "radio1Done", value: "true"}},
        ]
    },
    radio1Done: {
        speech: [
            {speaker: ' ', text: "*Various weather-related news plays*"}
        ]
    },
    radio2Done: {
        speech: [
            {speaker: ' ', text: "I should check back later. Something useful\nmight come up."}
        ]
    },
    radioActTwo1: {
        speech: [
            {speaker: 'Radio', size: 'small', text: "\"That was 'Bread and Circuses' by the Lady Girls. We have\n" +
                    "another caller on the line. Hi, this is DJ Dean with\n" +
                    "KV Radio. Who do I have on the line tonight?\""},
            {speaker: 'Radio', size: 'small', text: "\"Hi.••••.••••. ••••••••••••••hello? Dean?\"\n\n" +
                    "\"Yep, this is Dean, who's calling?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Dean! You've got to warn people! There's something out\n" +
                    "in the rain, something big! We're setting up ref-••••••••••••••\"\n\n" +
                    "\".••••••.•••.•••Hello? Buddy? Buddy are you there-\""},
            {speaker: 'Radio', size: 'small', text: "\"-at Hope Springs! We're set- *garbled* -uge at Hope- ••••.•••••••••.•••••••••.•••••••\"\n*static*\n\n\"Hopefully he calls back. Next song is...\"\n"},
            {speaker: "You", text: "Hope Springs huh. Wonder where that is?", data: {property: "radio2Done", value: "true"} },
        ]
    },
    radioActTwo2: {
        speech: [
            {speaker: 'Radio', size: 'small', text: "\"That was 'Bread and Circuses' by the Lady Girls. We have\n" +
                    "another caller on the line. Hi, this is DJ Dean with\n" +
                    "KV Radio. Who do I have on the line tonight?\""},
            {speaker: 'Radio', size: 'small', text: "\"Hi.••••.••••. ••••••••••••••hello? Dean?\"\n\n" +
                    "\"Yep, this is Dean, who's calling?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Dean! You've got to warn people! There's something out\n" +
                    "in the rain, something big! We're setting up ref-••••••••••••••\"\n\n" +
                    "\".••••••.•••.•••Hello? Buddy? Buddy are you there-\""},
            {speaker: 'Radio', size: 'small', text: "\"-at Hope Springs! We're set- *garbled* -uge at Hope- ••••.•••••••••.•••••••••.•••••••\"\n*static*\n\n\"Hopefully he calls back. Next song is...\"\n"},
            {speaker: "You", text: "Hope Springs huh. Maybe Bruna knows where\nit is.", data: {property: "radio2Done", value: "true"} },
        ]
    },

    tv1: {
        speech: [
            {speaker: 'TV', size: 'small', text: "\"In our next story, Lisa is a 13 year old entrepreneur\n" +
                    "making five figures a month!\"\n" +
                    "\"...Hang on Marge, we need to jump over to weather\n" +
                    "for an update on the storms passing through. Homer?\""},
            {speaker: 'TV', size: 'small', text: "\"Thanks Bart. The rain is really coming down, however\n" +
                    "the local authorities have not declared a flooding\n" +
                    "emergency. They are encouraging everyone to stay\n" +
                    "put until the storm passes.\""},
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
                    "the live feed are just an internet hoax.\""},
            {speaker: 'TV', size: 'small', text: "\"That nest is thirty stories in the air Homer. Who'd believe\n" +
                    "someone walking up to the nest?\"\n" +
                    "\"Who indeed. Next up we'll have some updates on the\n" +
                    "storm after this commercial break.\""},
        ]
    },
    tv3: {
        speech: [
            {speaker: 'TV', size: 'small', forceProgress: true, text: "\"A•a•a•a•n•d•••• we're •back •to ••our ••favorite-•••••\"\n"},
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
            {speaker: ' ', text: "  The power is off. The TV is also off,•••••••••••••••• right?"},
        ]
    },
    tvOff: {
        speech: [
            {speaker: ' ', text: "   The TV is off to save energy••.•••••••\n   Not like the news was good anyway."},
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
            {speaker: '', text: "No reason to go out there right now."},
        ]
    },
    BackdoorLocked: {
        speech: [
            {speaker: '', text: "I should talk to Maggie first before going out back."},
        ]
    },
    BackdoorScratcing1: {
        speech: [
            {speaker: '', forceProgress: true, text: "You hear scratching behind the door.\nOpen the door?•••••••••••••••••••"},
            {speaker: '', instant: true, text: "You hear scratching behind the door.\nOpen the door?", publish: "JuanScratchDoorInterrupt"},
        ]
    },
    ScratchDoorInterrupt: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hold on what are you doing?"},
            {speaker: "You", text: "I'm checking out what's causing this noise."},
            {speaker: "Juan", face: "juan_sad.png", text: "Well don't just open the door like that.\nYou don't know what's on the other side."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Now there, if it's a customer I can't well\nturn them away."},
            {speaker: "Juan", face: "juan_sad.png", text: "If it was a customer they'd come in from\nthe front."},
            {speaker: "Edith", face: "edith_normal.png", text: "I have to agree, it doesn't sound like\nit's a person on the other side."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah man the door is cool. It's all good\nif you open it."},
            {speaker: "Juan", face: "juan_normal.png", text: "Sure, listen to the guy high out of\nhis mind."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "             (quietly records)"},
            {speaker: "", text: "What should you do?"},
        ],
        branches: [
            {text: "Open the door", targetNode: "OpenScratchDoor"},
            {text: "Lock the door", targetNode: "LockScratchDoor"},
            {text: "Come back later"},
        ]
    },
    ScratchDoorReturn: {
        speech: [
            {speaker: "", text: "What should you do?"},
        ],
        branches: [
            {text: "Open the door", targetNode: "OpenScratchDoor"},
            {text: "Lock the door", targetNode: "LockScratchDoor"},
            {text: "Come back later"},
        ]
    },
    OpenScratchDoor: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "No wait hold up-••••••••••••••••••", publish: "openScratchDoor"},
        ],
    },
    OpenScratchDoorFinish: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Doggie!"},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My goodness."},
            {speaker: "Juan", face: "juan_normal.png", text: ".•.•.••••••Got lucky this time."},
            {speaker: "Juan", face: "juan_sad.png", text: "You didn't know what was out there.\nIt could have been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah the door wasn't dangerous.••••••••••••••••\n.••••••••.•••••••It's the windows you gotta watch out for."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuiet'},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "What are you talking about I don't\nsee anything out the windows-•••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: " "},
            {speaker: "", text: "   *SHATTER*\n(The window near Juan and Ethan breaks)", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the windows)."},
        ],
    },
    LockScratchDoor: {
        speech: [
            {speaker: "", text: "   You lock the door shut."},
            {speaker: "", text: "   The scratching noises stop.", publish: "lockScratchDoor"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Aw it really wanted to come in."},
            {speaker: "Juan", face: "juan_normal.png", text: "You don't know what's out there.\nIt could've been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah the door's not dangerous.••••••••••••••••\n.••••••••.•••••••It's the windows you gotta watch out for."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuiet'},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "What are you talking about I don't\nsee anything out the windows-•••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: " "},
            {speaker: "", text: "   *SHATTER*", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the windows)."},
        ]
    },

    BackdoorActTemporary: {
        speech: [
            {speaker: '', text: "TODO: Implement gameplay for fixing generator.\nFix generator for now?"},
        ],
        branches: [
            {text: "Yes", targetNode: "BackdoorActTemporaryFixed"},
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
    GeneratorAlreadyFixed: {
        speech: [
            {speaker: "",  text: "   The generator is running."},
        ]
    },
    GeneratorTurnedOn: {
        speech: [
            {speaker: "",  text: "   The generator hums to life."},
        ]
    },
    GeneratorWiredWrong: {
        speech: [
            {speaker: "",  text: "   These wires are clearly set up incorrectly."},
        ]
    },
    GravestoneClicked: {
        speech: [
            {speaker: "",  text: "   \"Beloved husband and father-\"\n   (The name is too worn out to read)"},
        ]
    },
    DinerCheer: {
        speech: [
            {speaker: "",  text: "  (You feel the room has relaxed now that\n    the power is back on)"},
            {speaker: "Maggie", face: "maggie_happy.png", text: "Thank you honey. I'll go turn off some of\nthe kitchen equipment to save power."},
            {speaker: "You", text: "Could we keep the radio on? There might be\nuseful information on there."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Of course. You do what you need to do\nand I'll have a meal prepared for\nyou shortly."},
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
            {text: "Yes", publish: "exitEarlySceneTwo"},
            {text: "Not yet"},
        ]
    },
    DoorScratchStart: {
        speech: [
            {speaker: '', text: "You hear scratching noises from the door."},
        ],
    }


};
