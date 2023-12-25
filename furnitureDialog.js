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
            {speaker: 'Radio', size: 'small', text: "\"I've got to agree Beatrice, this storm sure is something.\n" +
                    "While it's been years since I've been a 'youngster' I'll\n" +
                    "be sure to stay in the studio until the worst of this\n" +
                    "passes. You take care of yourself.\"", data: {property: "radio1Done", value: "true"}},
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
            {speaker: 'Radio', size: 'small', text: "\"That was 'Bread and Circuses' by the Lady Girls. We\n" +
                    "have another caller on the line. Hi, this is DJ Dean with\n" +
                    "KV Radio. Who do I have on the line tonight?\""},
            {speaker: 'Radio', size: 'small', text: "\"Hi.••••.••••. •••••••hello? Dean?\"\n\n" +
                    "\"Yep, this is Dean, who's calling?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Dean! You've got to warn people! There's something out\n" +
                    "in the rain, something big! We're setting up ref-••••••••••••••\"\n\n" +
                    "\".••••••.•••.•••Hello? Buddy? Buddy are you there-\""},
            {speaker: 'Radio', size: 'small', text: "\"-at Hope Springs! We're set- *garbled* -uge at Hope- ••••.••••••.••••••.••••\"\n*static*••••••••••\n\n\"Hopefully he calls back. Next song is...\"\n"},
            {speaker: "You", text: "\"Hope Springs\" huh. Wonder where that is?", data: {property: "radio2Done", value: "true"} },
        ]
    },
    radioActTwo2: {
        speech: [
            {speaker: 'Radio', size: 'small', text: "\"That was 'Bread and Circuses' by the Lady Girls. We\n" +
                    "have another caller on the line. Hi, this is DJ Dean with\n" +
                    "KV Radio. Who do I have on the line tonight?\""},
            {speaker: 'Radio', size: 'small', text: "\"Hi.••••.••••. •••••••hello? Dean?\"\n\n" +
                    "\"Yep, this is Dean, who's calling?\"\n"},
            {speaker: 'Radio', size: 'small', text: "\"Dean! You've got to warn people! There's something out\n" +
                    "in the rain, something big! We're setting up ref-••••••••••••••\"\n\n" +
                    "\".••••••.•••.•••Hello? Buddy? Buddy are you there-\""},
            {speaker: 'Radio', size: 'small', text: "\"-at Hope Springs! We're set- *garbled* -uge at Hope- ••••.••••••.••••••.••••\"\n*static*••••••••••\n\n\"Hopefully he calls back. Next song is...\"\n"},
            {speaker: "You", text: "Hope Springs huh. Maybe Bruna knows where\nthat is.", data: {property: "radio2Done", value: "true"} },
        ]
    },
    radioActThree1: {
        speech: [
            {speaker: ' ', text: "(The radio clicks aloud with a message)"},
            {speaker: 'Radio', size: 'small', text: "*BZZZ* \"-To anyone who can hear this, we have establi-\"\n" +
                    "*TSS*\"-stronghold at Hope Springs. Don't try to engage\n" +
                    "with the Storm.\"", data: {property: "radio3Done", value: "true"}},
            {speaker: 'Radio', size: 'small', text: "\"I repeat, have established a stronghold at-\"\n"},
            {dependentState: "hopeSpringsLocationMissing", speaker: 'You', text: "\"Hope Springs\" huh. Maybe Bruna knows where\nthat is."},
        ]
    },
    radioActThreeDone: {
        speech: [
            {speaker: 'Radio', text: "(The Hope Springs announcement is repeated\n with coordinates, but you still need someone\nwith a good map or GPS to get there)"},
        ]
    },
    radioDone: {
        speech: [
            {speaker: ' ', text: "   (It's time to head out)"},
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
                    "\"That's right Marge, so cute. In other news we've been\n" +
                    "hearing reports that one of the live feeds of a local\n" +
                    "Peregrine Falcon nest on Heaven Towers cut out.\""},
            {speaker: 'TV', size: 'small', text: "\"Rest assured, the beloved birds are fine and the feed will\n" +
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
            {speaker: '', text: "No reason to go there right now."},
        ]
    },
    BackdoorLocked: {
        speech: [
            {speaker: '', text: "I should talk to Maggie first before going out back."},
        ]
    },
    BackdoorNoPoint: {
        speech: [
            {speaker: '', text: "No point in going to the back."},
        ]
    },
    BackdoorScratcing1: {
        speech: [
            {speaker: '', forceProgress: true, text: "You hear scratching behind the door.\nOpen the door?••••••••••••••••••••••••••••••••••••••••••••••••"},
            {speaker: '', instant: true, unclickable: true, text: "You hear scratching behind the door.\nOpen the door?", publish: "JuanScratchDoorInterrupt"},
        ]
    },
    ScratchDoorInterrupt: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hold on what are you doing?"},
            {speaker: "You", text: "I'm checking out what's causing this noise."},
            {speaker: "Juan", face: "juan_sad.png", text: "Well don't just open the door like that.\nYou don't know what's behind it."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Now there, if it's a customer I can't well\nturn them away."},
            {speaker: "Juan", face: "juan_sad.png", text: "If it was a customer they'd come in from\nthe front."},
            {speaker: "Edith", face: "edith_normal.png", text: "I have to agree, it doesn't sound like\nit's a person on the other side."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah man the door is cool. It's all good\nif you open it."},
            {speaker: "Juan", face: "juan_normal.png", text: "Sure, listen to the guy high out of\nhis mind."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "             (quietly records)"},
            {speaker: "", text: "What should you do?"},
        ],
        branches: [
            {text: "Open the door", targetNode: "OpenScratchDoor"},
            {text: "Lock the door", targetNode: "LockScratchDoor"},
            {text: "Come back later"},
        ]
    },
    ScratchDoorInterruptEthanTired: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hold on what are you doing?"},
            {speaker: "You", text: "I'm checking out what's causing this noise."},
            {speaker: "Juan", face: "juan_sad.png", text: "Well don't just open the door like that.\nYou don't know what's behind it."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Now there, if it's a customer I can't well\nturn them away."},
            {speaker: "Juan", face: "juan_sad.png", text: "If it was a customer they'd come in from\nthe front."},
            {speaker: "Edith", face: "edith_normal.png", text: "I have to agree, it doesn't sound like\nit's a person on the other side."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah• man.•••••.•••••••••.••••••••• door's cool•••••••••.•••••••••.•••••••••. You• can• open•\nit."},
            {speaker: "Juan", face: "juan_normal.png", text: "Sure, listen to the guy high out of his-••••••\nHey you don't look so good."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "             (quietly records)"},
            {speaker: "", text: "What should you do?"},
        ],
        branches: [
            {text: "Open the door", targetNode: "OpenScratchDoor"},
            {text: "Lock the door", targetNode: "LockScratchDoorEthanTired"},
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
    ScratchDoorReturnEthanTired: {
        speech: [
            {speaker: "", text: "What should you do?"},
        ],
        branches: [
            {text: "Open the door", targetNode: "OpenScratchDoor"},
            {text: "Lock the door", targetNode: "LockScratchDoorEthanTired"},
            {text: "Come back later"},
        ]
    },
    OpenScratchDoor: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "Wait hold up!-••••••••••••••••", publish: "openScratchDoor"},
        ],
    },
    OpenScratchDoorFinish: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Doggie!"},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My goodness."},
            {speaker: "Juan", face: "juan_normal.png", text: ".•.•.••••••Got lucky this time."},
            {speaker: "Juan", face: "juan_sad.png", text: "You didn't know what was out there.\nIt could have been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah the door wasn't dangerous.••••••••••••••••\n.••••••••.•••••••It's the windows you gotta watch out for."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuietSprawl'},
            {dependentState: "invisibleGiant", speaker: "Juan", face: "juan_sad.png", text: "Great, is this the invisible giant Noah\nwas blabbing about?"},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "I don't see a damn thing out the windows-••••••••••••••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: " "},
            {speaker: "", text: "   *SHATTER*", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the window\n    near Ethan and Juan)."},
        ],
    },
    LockScratchDoor: {
        speech: [
            {speaker: "", text: "   You lock the door shut."},
            {speaker: "", text: "   The scratching noises stop.", publish: "lockScratchDoor"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Aw it really wanted to come in.", publish: 'ethanInfluence', param: -1},
            {speaker: "Juan", face: "juan_normal.png", text: "You don't know what's out there.\nIt could've been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah the door's not dangerous.••••••••••••••••\n.••••••••.•••••••It's the windows you gotta watch out for."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuietSprawl'},
            {dependentState: "invisibleGiant", speaker: "Juan", face: "juan_sad.png", text: "Great, is this the invisible giant Noah\nwas blabbing about?"},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "I don't see a damn thing out the windows-••••••••••••••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: " "},
            {speaker: "", text: "   *SHATTER*", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the window\n    near Ethan and Juan)."},
        ]
    },
    OpenScratchDoorFinishEthanTired: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Doggie!"},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My goodness."},
            {speaker: "Juan", face: "juan_normal.png", text: ".•.•.••••••Got lucky this time."},
            {speaker: "Juan", face: "juan_sad.png", text: "You didn't know what was out there.\nIt could have been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Door•• wasn't•• dangerous.•••••••••\n.••••••••.•••••••Gotta watch out...•••••••• windows."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuietSprawl'},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "What kind of cryptic nonsense- I don't\nsee anything out the windows-••••••••••••••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: "•"},
            {speaker: "", text: "   *SHATTER*", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the window\n    near Ethan and Juan)."},
        ],
    },
    LockScratchDoorEthanTired: {
        speech: [
            {speaker: "", text: "   You lock the door shut."},
            {speaker: "", text: "   The scratching noises stop.", publish: "lockScratchDoor"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Aw it.•••.•••.••• wanted to come in.", publish: 'ethanInfluence', param: -1},
            {speaker: "Juan", face: "juan_normal.png", text: "You don't know what's out there.\nIt could've been dangerous."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Door•• wasn't•• dangerous.•••••••••\n.••••••••.•••••••Gotta watch out...•••••••• windows."},
            {speaker: "Juan", face: "juan_normal.png", text: "windows...?", publish: 'radioTempQuietSprawl'},
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, forceProgress: true, text: "What kind of cryptic nonsense- I don't\nsee anything out the windows-••••••••••••••••••••••"},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: "•"},
            {speaker: "", text: "   *SHATTER*", publish: "windowBreak"},
            {speaker: "Juan", face: "juan_sad.png", text: "SONOFA-"},
            {speaker: "", text: "   (Rain starts pouring in from the window\n    near Ethan and Juan)."},
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
    GravestoneClickedGood: {
        speech: [
            {speaker: "",  text: "(The gravestone seems a little more upright)"},
        ]
    },
    GravestoneClickedBad: {
        speech: [
            {speaker: "",  text: "(You feel a sense of sadness when near this gravestone)"},
        ]
    },


    DinerCheer: {
        speech: [
            {speaker: "",  text: "  (You feel the room has relaxed now that\n    the power is back on)"},
            {speaker: "Maggie", face: "maggie_happy.png", text: "Thank you honey. I'll go turn off some of\nthe kitchen equipment to save power.", publish: 'MaggieInfluence'},
            {speaker: "You", text: "Could we keep the radio on? It might have\nuseful information."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Of course. You do what you need to do\nand I'll have a meal prepared for you\nshortly."},
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
            {text: "Yes", targetNode: "ExitEarly"},
            {text: "Not yet"},
        ]
    },
    ExitEarly: {
        speech: [
            {speaker: '', text: "   (You exit the diner)", publish: "exitEarlySceneTwo"},
        ],
    },
    ExitFinaleAlone: {
        speech: [
            {speaker: '', text: "Warning: You will be leaving the diner on your own.\nAre you sure?"},
        ],
        branches: [
            {text: "Yes", targetNode: "ExitFinale"},
            {text: "Nevermind."},
        ]
    },


    ExitFinale: {
        speech: [
            {speaker: '', text: "   (You get ready to exit the diner)", data: {property: "isExiting", value: true}, onFinish: () => {
                console.log("exit the diner")
                messageBus.publish("exitFinale");
                }},
        ],
    },
    StayFinale: {
        speech: [
            {speaker: '', text: "   (You lock the diner door)", data: {property: "doorLocked", value: true}},
            {speaker: 'You', text: "Hey everyone, let's bunker up here until\nthe storm clears up.", publish: "stayFinale"},
            {rejectState: 'juanLeft', speaker: 'Juan', face: "juan_normal.png", text: "We'll have to patch this place up\nbetter. It's falling apart."},
            {dependentState: 'juanLeft', speaker: 'Maggie', face: "maggie_normal.png", text: "Do what you think is best dear."},
            {speaker: 'Edith', face: "edith_normal.png", text: "Do any of you feel... shaking?"},
            {rejectState: 'ethanSleeping', unclickable: true, speaker: 'Ethan', face: "ethan_yell.png", text: "Guys, I think it's coming back."},
            {dependentState: 'ethanSleeping', speaker: 'Ethan', face: "ethan_normal.png", text: "It's coming...", publish: "ethanAwake"},
            {dependentState: 'ethanSleeping', unclickable: true, speaker: 'Ethan', face: "ethan_yell.png", text: "it's COMING BACK!"},
        ],
    },


    ExitSceneThree: {
        speech: [
            {speaker: '', text: "Leave the diner, or stay and lock up?"},
        ],
        branches: [
            {text: "Leave the diner", targetNode: "ExitFinale"},
            {text: "Lock the door and stay here", targetNode: "StayFinale"},
            {text: "Decide later"},
        ]
    },
    ExitSceneThreeAlone: {
        speech: [
            {speaker: '', text: "Leave the diner, or stay and lock up?"},
        ],
        branches: [
            {text: "Leave the diner", targetNode: "ExitFinaleAlone"},
            {text: "Lock the door and stay here", targetNode: "StayFinale"},
            {text: "Decide later"},
        ]
    },

    ExitSceneThreeNoStay: {
        speech: [
            {speaker: '', text: "Leave the diner with everyone?"},
        ],
        branches: [
            {text: "Yes", targetNode: "ExitFinaleAll"},
            {text: "Not yet"},
        ]
    },
    ExitFinaleAll: {
        speech: [
            {speaker: '', text: "   (You get ready to exit the diner)", data: {property: "isExiting", value: true}, onFinish: () => {
                    messageBus.publish("exitFinale");
                }},
        ],
    },

    DoorScratchStart: {
        speech: [
            {speaker: '', text: "You hear scratching noises from the door."},
        ],
    }

};
