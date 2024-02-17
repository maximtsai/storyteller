let dialogList1 = {
    intro: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Come on in honey, and close the door\nbehind you. Lord knows the rain ain\'t\ngonna let you get any further tonight.", data: {property: "brunaNotIntroduced", value: true}},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Grab a seat and I\'ll bring a coffee\nand menu right over.", data: {property: "hopeSpringsLocationMissing", value: true}, onFinish: () => {
                    messageBus.publish("startAction")
                }},
        ]
    },
    findSeat: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Honey, just grab a seat.\nI\'ll be right with you.", data: {property: "askedSeat", value: true}},
            {speaker: "You", text: "Where\'s the rest of your staff?"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "My line cook had to call out and my...\nwell it\'s just me tonight.", onFinish: () => {
                    // publish: "savePoint", param: {node: 'findSeat', num: 2},
                messageBus.publish('savePoint', {node: 'findSeat', num: 2});
            }},
        ],
        branches: [
            {text: "Want some help?", targetNode: "MaggieAct1Happy"},
            {text: "Rough luck, though I'm not\nsurprised with this rain.", targetNode: "MaggieAct1Okay"},
        ]
    },


    MaggieAct1Happy: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Oh honey, that\'s sweet.\nI\'ll take care of it.", publish: "MaggieInfluence"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Just got to plate most of the meals now."},
        ]
    },
    MaggieAct1Okay: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Yes, better to stay off the\nroads in weather like this.", publish: "showUndoPoint"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "It\'s got to be the worst storm\nI\'ve seen in years!", onFinish: () => {
                messageBus.publish('hideUndoPoint');
                }},
        ]
    },

    MaggieAct2PowerOff: {
        speech: [
            {speaker: "You", text: "Maggie, you said you have a generator\nsomewhere?"},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Out back, but its wires are all\ntangled up."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "I've been meaning to fix it, but it was\nalways my late husband who was good\nat these things."},
            {speaker: "You", text: "I'm pretty handy with machines.\nLet me take a crack at it."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Thank you honey.\nYou'll need these keys to the shed."},
            {speaker: "", text: "  (You can now exit the backdoor)"},
        ]
    },
    MaggieAct2PowerOffFin: {
        speech: [
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Generator is just out back in the shed.\nThere should be instructions on it too."},
        ]
    },

    MaggieAct2ThankYou: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Honey, thank you for helping with the\ngenerator. Dinner's on the house.", data: {property: "alreadyThanked", value: true}},
            {speaker: " ", text: "   (Maggie serves you a delicious meal of waffles,\n   meatloaf, hashbrowns and a large milkshake)", publish: "savePoint", param: {node: 'MaggieAct2ThankYou', num: 1}},
        ],
        branches: [
            {text: "Does your staff normally help\nwith fixing things?", targetNode: "MaggieAct2Sad"},
            {text: "Free dinner from a pretty lady\ncount me in!", targetNode: "MaggieAct2Happy"},
        ]
    },
    MaggieAct2Sad: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Not so much anymore.", data: {property: "MaggieAct2Chat", value: true}, publish: "showUndoPoint", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }},
        ]
    },

    MaggieAct2Happy: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Ha-ha, darling, you're about thirty years\ntoo young for me.", publish: "showUndoPoint",},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But I know men of all ages enjoy a good\nhearty meal!", publish: "MaggieInfluence", data: {property: "MaggieAct2Chat", value: true}},
        ]
    },

    MaggieAct2Chat: {
        speech: [
            {speaker: "You", text: "Your food is delicious. Where did you learn\nto cook?"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "I actually went to culinary school. I used\nto be a cook in a Michelin star restaurant\nin DC!"},
        ],
        branches: [
            {text: "How'd you end up clear out here?!", targetNode: "MaggieHusbandStart"},
            {text: "No wonder this food's so good!", targetNode: "MaggieSenator"},
        ]
    },
    MaggieSenator: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "I used to have senator and congressmen\nasking' for me by name!", publish: "savePoint", param: {node: 'MaggieSenator', num: 0}},
        ],
        branches: [
            {text: "Then what are you doing out here?", targetNode: "MaggieHusbandStart"},
            {text: "That's amazing! Let me wash\nup these dishes for you.", targetNode: "MaggieDishes"},
        ]
    },
    MaggieHusbandStart: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "There was a handsome waiter that started\nworking at the same restaurant as me.\nHe tried everything' to get me to agree\nto a date."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Until•••.•••.•••.••••••••••• Oh, I'm sorry.\n•••••••I start to ramble in my old age.", publish: "savePoint", param: {node: 'MaggieHusbandStart', num: 1}},
        ],
        branches: [
            {text: "No, I want to hear what happened.", targetNode: "MaggieHusbandContinue"},
            {text: "We all ramble. Let me wash\nup these dishes for you.", targetNode: "MaggieDishesTwo"},
        ]
    },
    MaggieDishes: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "You finish up and just leave the dishes,•••••••\nI'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: true}, publish: "showUndoPoint"},
        ],
    },
    MaggieDishesTwo: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "No, you just keep walking' bout keeping\nmy customers calm. I'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: true}, publish: "showUndoPoint"},
        ],
    },
    MaggieHusbandContinue: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "That ridiculous man went and bought a\nfood truck. Now, this was the first I had\never heard of such a thing. ", publish: "MaggieInfluence"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "He fixed the rusted thing up and offered\nit to me, only if I'd agree to go on a walk\nwith him."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Well, I figured a date was worth a truck."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "But then, the truck kept breaking down.\n••••••••••And I kept asking him to repair it. And he\nkept repairing it in exchange for a date."},
            {speaker: "Maggie", face: "maggie_angry.png", text: "Eventually, I realized he had that truck\nrigged, to break down in some way so he\nalways had an excuse to talk with me."},
            {speaker: "Maggie", face: "maggie_yell.png", text: "I called him a damn fool, and he came\nback with \"I'm a fool in love with a fool.\nLet's just get married and the truck\nwill stop breaking down!\""},
            {speaker: "Maggie", face: "maggie_angry.png", text: ".."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "And I said yes."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Some people had trouble with two people\nthat different being in love."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My sweet man didn't care. We left that\ncity and bought this truck stop and turned\nit into one of the finest establishments\nin the west."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "I got to cook whatever I wanted, and he\nrepaired trucks as they passed through."},
            {text: "                  (Maggie sighs heavily)", data: {property: "MaggieAct2FinishedGood", value: true}},
        ],
        branches: [
            {text: "Sounds like you really loved him.", targetNode: "MaggieLove"},
            {text: "That's quite the story.", targetNode: "MaggieRegret"},
        ]
    },
    MaggieLove: {
        speech: [
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Love. ••••••••••••••••••I love him. ••••••••••••••••••••••••Even now."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But listen to me go on. I best go check on\nthe kitchen. You enjoy your dinner.", publish: "MaggieInfluence", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }},
        ],
    },
    MaggieRegret: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "I guess it is. You never appreciate what's\nright in front of you."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Don't make my mistake of assuming\nyou'll have enough time with your\nloved ones.", publish: "MaggieInfluence", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }},
        ],
    },
    MaggieAct2FinishedGood: {
        speech: [
            {speaker: " ", text: "             (Maggie seems lost in thought)"},
        ],
    },
    MaggieAct2FinishedMeh: {
        speech: [
            {speaker: " ", text: "    (Maggie is currently busy cleaning up)"},
        ],
    },

    MaggieAct3Chat: {
        speech: [
            {speaker: "You", text: "Maggie..."},
        ],
        branches: [
            {dependentState: "tvSmashedAskMaggie", text: "Sorry about your TV.", targetNode: "MaggieAct3TV"},
            {text: "We need to fortify this place.", targetNode: "MaggieAct3Fortify"},
            {text: "We need to leave, come with me.", targetNode: "MaggieAct3Leave"},
            {text: "Nevermind."},
        ]
    },

    MaggieAct3ChatAllGoing: {
        speech: [
            {speaker: "You", text: "Maggie..."},
        ],
        branches: [
            {text: "All of us are leaving together to\nHope Springs. Come with us.", targetNode: "MaggieAct3LeaveAll"},
            {text: "Nevermind"},
        ]
    },

    MaggieAct3ChatAllGoingButDog: {
        speech: [
            {speaker: "You", text: "Maggie..."},
        ],
        branches: [
            {text: "All of us are leaving together to\nHope Springs. Come with us.", targetNode: "MaggieAct3LeaveAllButDog"},
            {text: "Nevermind"},
        ]
    },

    MaggieAct3TV: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "That's alright dear. It's been acting\nup for awhile and I had to replace it\nsoon anyways.", data: {property: "tvSmashedAskMaggie", value: false}},
        ],
    },

    MaggieAct3Fortify: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Of course. Do whatever you think will\nmake it safe."},
        ],
    },

    MaggieAct3Leave: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "As long as there are customers stayin'\nhere I won't leave this diner."},
            {speaker: "You", text: "But Maggie..."},
            {speaker: "Maggie", face: "maggie_angry.png", text: "And that's final!"},
        ],
    },

    MaggieAct3LeaveAllButDog: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "I'm sorry honey but as long as someone\nis still here, even if it's a lost dog,\nI'll have to watch over em'."},
            {speaker: "Doggo", face: "doggo_angry.png", text: "Arf!"},
        ]
    },

    MaggieAct3LeaveAll: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "I'm sorry honey but I'm still not leavin'\nmy diner behind.", publish: "savePoint", param: {node: 'MaggieAct3LeaveAll', num: 0}},
        ],
        branches: [
            {text: "I won't force you to come.", targetNode: "MaggieAct3Sandwich"},
            {text: "Maggie, please.", targetNode: "MaggieAct3Please"},
        ]
    },

    MaggieAct3Sandwich: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "I'll make y'all some sandwiches for the\nroad. You don't need to worry about me\nstayin' here.", publish: 'showUndoPoint', onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3Sandwich', num: 0})
                }},
        ],
        branches: [
            {text: "Accept the sandwiches", targetNode: "MaggieAct3SandwichEnd"},
            {text: "Maggie, please...", targetNode: "MaggieAct3Please"},
        ]
    },

    MaggieAct3SandwichEnd: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Noah, you are a fine, capable man, no\ndoubt about it.", publish: 'showUndoPoint'},
            {speaker: "Maggie", face: "maggie_happy.png", text: "Wherever you go I just\nknow the sunshine'll warm your path.", publish: 'casparToBackdoor', data: {property: "maggieSandwichEnd", value: true}, onStart: () => {
                messageBus.publish('hideUndoPoint')
                }},
        ]
    },

    MaggieAct3SandwichEndNoUndo: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Noah, you are a fine, capable man, no\ndoubt about it."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "Wherever you go I just\nknow the sunshine'll warm your path.", publish: 'casparToBackdoor', data: {property: "maggieSandwichEnd", value: true}, onStart: () => {
                    messageBus.publish('hideUndoPoint')
                }},
        ]
    },

    MaggieSandwichEnd: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Safe travels Noah."},
            {speaker: " ", text: "   (The sandwiches feel heavy in your pack)"},
        ]
    },

    MaggieAct3Please: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "...", publish: 'showUndoPoint', onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3Please', num: 0})
                }},
        ],
        branches: [
            {text: "Something is happening out there,\nsomething more than a storm.", targetNode: "MaggieAct3StormNot"},
            {text: "If you stay here you'll die!", targetNode: "MaggieAct3DieNot"},
            {dependentState: "MaggieAct2FinishedGood", text: "You don't need to be scared of\nleaving. You've done it before.", targetNode: "MaggieAct3Husband"},
        ]
    },

    MaggieAct3StormNot: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "No, no. It's just a storm. It'll pass\nlike everything else. I'm staying."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Here, let me make some sandwiches for\ny'all for the road.", onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3StormNot', num: 1})
                }},
        ],
        branches: [
            {text: "Accept the sandwiches", targetNode: "MaggieAct3SandwichEnd"},
            {text: "If you stay here you'll die!", targetNode: "MaggieAct3DieNot"},
            {dependentState: "MaggieAct2FinishedGood", text: "You don't need to be scared of\nleaving. You've done it before.", targetNode: "MaggieAct3Husband"},
        ]
    },

    MaggieAct3DieNot: {
        speech: [
            {speaker: "Maggie", face: "maggie_angry.png", text: "I've put my life and heart in this\nestablishment and I ain't turnin' tail\njust because of some rain!"},
            {speaker: "Maggie", face: "maggie_yell.png", text: "If I'm going to die then I'd rather die here\nthan abandon it for some dingy road trip!"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "..."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "My apologies, that was terrible rude of\nme. Please, let me pack these for\nsandwiches you all for the road.", onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3DieNot', num: 3})
                }},
        ],
        branches: [
            {text: "Accept the sandwiches", targetNode: "MaggieAct3SandwichEnd"},
            {dependentState: "MaggieAct2FinishedGood", text: "You don't need to be scared of\nleaving. You've done it before.", targetNode: "MaggieAct3Husband"},
        ]
    },

    MaggieAct3Husband: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "But he's not here anymore."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "This Roadhouse was my husband's\ndream. He loved it, and I still love him.", publish: 'casparToBackdoor'},
            {speaker: "Maggie", face: "maggie_sad.png", text: "I can't leave it behind.", onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3Husband', num: 2})
                }},
        ],
        branches: [
            {text: "Your husband's gone,\nbut you're not.", targetNode: "MaggieAct3NotSafe"},
            {text: "Your husband loved you,\nnot the roadhouse.", targetNode: "MaggieAct3NotSafeBoost"},
        ]
    },

    MaggieAct3NotSafe: {
        speech: [
            {speaker: "You", text: "This place is not safe, and that's not your fault.\nCome with me.", publish: "showUndoPoint"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...\n\n\n[Impossible Difficulty]", publish: 'showInfluence', onFinish: () => {
                    if (gameState.MaggieInfluence >= 5) {
                        dialogManager.showDialogNode("MaggieAct3Almost");
                    } else {
                        dialogManager.showDialogNode("MaggieAct3Fail");
                    }
                }},
        ],
    },

    MaggieAct3NotSafeBoost: {
        speech: [
            {speaker: "You", text: "He would have wanted to see you live life to\nits fullest, even if he's no longer around.", publish: "showUndoPoint"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...\n\n\n[Impossible Difficulty]", publish: 'MaggieInfluence', onFinish: () => {
                    if (gameState.MaggieInfluence >= 5) {
                        dialogManager.showDialogNode("MaggieAct3Almost");
                    } else {
                        dialogManager.showDialogNode("MaggieAct3Fail");
                    }
                }},
        ],
    },

    MaggieAct3Almost: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: ".••••••••.•••••••••No."},
            {speaker: "You", text: "No?"},
            {speaker: "Maggie", face: "maggie_sad.png", publish: 'showInfluenceSmall', text: "Noah, I appreciate all you've done.\n•••••••I truly do. But• I've decided I would still\nrather stay here than leave.\n(Not enough•••••••.••••.••••.•••••••• trust?)"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Please, let me pack you all some\nsandwiches.", onFinish: () => {
                    messageBus.publish('savePoint', {node: 'MaggieAct3Almost', num: 2})
                }},
        ],
        branches: [
            {text: "Accept the sandwiches\n(no takebacks)", targetNode: "MaggieAct3SandwichEndNoUndo"},
            {text: "Refuse the sandwiches", targetNode: "MaggieAct3SandwichRefuse"},
        ]
    },

    MaggieAct3Fail: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "No."},
            {speaker: "You", text: "No?"},
            {speaker: "Maggie", face: "maggie_sad.png", publish: 'showInfluenceSmall', text: "Noah, I appreciate all you've done.\nBut I just don't know you well enough.\n(Not enough trust)"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "I've decided I would rather stay\nhere than leave. Please, let me pack\nyou all some sandwiches."},
        ],
        branches: [
            {text: "Accept the sandwiches", targetNode: "MaggieAct3SandwichEndNoUndo"},
        ]
    },

    MaggieAct3SandwichRefuse: {
        speech: [
            {speaker: "You", text: "Maggie, please just... hold on for a moment.", data: {property: "casparFinale", value: true}},
            {speaker: "You", text: "   (Caspar would know what to do)"},
        ],
    },

    MaggieHoldOn: {
        speech: [
            {speaker: "You", text: "Just a moment Maggie, I need to uh...\nask a friend something."},
        ],
    },

    MaggieReadyFinale: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "This song...\nThis was the song we danced to on\nour honeymoon."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "I was so uncertain about our future back\nthen."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Folks weren't so accepting those days\nwhen they saw a kindly gentleman like\nhim courting an out of place woman\nlike me."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "But we took the leap anyways, and I\ndon't think I could have been happier."},
            {speaker: "You", text: "You ready to take another leap now?"},
            {speaker: "You", text: "There's a lot of tired, hungry people headed\nto Hope Springs. They could use someone with\na big friendly smile."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "Okay, okay.\nI suppose there's people in Hope Springs\nthat could use a good hearty meal."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "I'll clear the fridge and be ready to go."},
            {speaker: "", text: "  (Maggie will come with you when you leave)", data: {property: "MaggieSaved", value: true}, onFinish: () => {
                messageBus.publish('casparGoodExit');
                }},
        ],
    },

    EveryoneSaved: {
        speech: [
            {speaker: " ", text: "(Everyone is ready to go when you are)"},

        ],
    },

    CasparExitGood: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Noah..."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Seems like it's time for you to go."},
            {speaker: "You", text: "Come on Caspar, you could still leave with us.\nCome join Maggie, you care for her don't you?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "I feel light, like a great weight has\nbeen lifted off my shoulders."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Thank you Noah, and I truly mean it.\nBut it is time for me to move on.", onFinish: () => {
                    messageBus.publish('casparFadeAway')
                }},
        ],
    },

    CasparExitGoodTemp: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Noah..."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Seems like it's time for you to go."},
            {speaker: "You", text: "Come on Caspar, you could still leave with us\n. Come join Maggie, you care for her don't you?"},
            {speaker: "Caspar", face: "caspar_doubt.png", text: "Son, there are many things in this\nworld that are beyond our comprehension."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Perhaps meeting you here tonight\nreally was coincidence."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I'm glad it happened the way\nit did."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Thank you Noah, and I truly mean it."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "I feel light, like a great weight\nhas been lifted off my shoulders."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "My work here in this world is\ndone. It is time for me to move on.", onFinish: () => {
                    messageBus.publish('casparFadeAway')
                }},
        ],
    },

    LookForCaspar: {
        speech: [
            {speaker: "You", text: "Caspar? Caspar where are you?"},
        ],
    },

    CasparExitGood2: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "You should be hittin' the road before the\nstorm worsens."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "I best be headed my own way.", publish: "casparExitFast"},
        ],
    },

    CasparExitGood3: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Goodbye Noah. Take good care of ol' Maggie\nfor me will ya?", onFinish: () => {
                messageBus.publish('casparCloseDoor')
                }},
        ],
    },

    MaggieSeenGrave: {
        speech: [
            {speaker: "You", text: "I saw the grave out back", publish: "MaggieInfluence"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Six years he's been there.•••••••••••••••••\nAnd it still hurts to wake up without him."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "He was always up before me, starting the coffee,\nsaying \"Maggie, there's a lot of hungry tired\npeople headed our way today.\""},
            {speaker: "Maggie", face: "maggie_happy.png", text: "\"Let's be sure to fix that with a big friendly\nsmile for each and every one of them!\""},
            {speaker: "Maggie", face: "maggie_sad.png", text: "*sniff* Please excuse me."},
        ],
    },

    findSeatEnd: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Oh, listen to me goin' on.\nYou go find a seat, and I\'ll be by\nto get your order soon."},
        ]
    },
    introEdith: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "I can't believe this rain.", onFinish: () => {
                    shiftOver(gameCharacters.ethan.x);
                }},
            {speaker: "Edith", face: "edith_sad.png", text: "Did you remember to check the weather\nthis morning?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I... I dunno. Think I did.•••••••••••••••••••••\nMaybe."},
            {speaker: "Ethan", face: "ethan_happy.png", text: "But c'mon it's not that bad.\nJust relax. We can stay here for as long\nas we want."},
            {speaker: "Edith", face: "edith_sad.png", text: "..."},
        ]
    },
    introEdith2: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Oh, sorry this booth's taken."},
        ]
    },
    introEdith3: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Sorry, Ethan can be a bit... well very\nscatterbrained at times."},
            {speaker: "Edith", face: "edith_normal.png", text: "Just don't mind him."},
        ]
    },
    introEdith4: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "I see an empty booth over there at your\nleft."},
        ]
    },
    Edith2Chat: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "What do you want?", publish: "savePoint", param: {node: 'Edith2Chat', num: 0}},
        ],
        branches: [
            {text: "Are you okay?", targetNode: "Edith2Okay"},
            {text: "Ethan was out of line.", targetNode: "Edith2Line"},
        ]
    },
    Edith2Okay: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "*sniff* Noooo. :(\nMy mom was right about hiiiimmm.", publish: 'EdithInfluence', onStart: () => {
                    messageBus.publish('showUndoPoint')
                }},
            {speaker: "You", text: "What did she say about him?"},
            {speaker: "Edith", face: "edith_sad.png", text: "That he's immature. He's goofing off\neven when things are serious!", onFinish: () => {
                    messageBus.publish('savePoint', {node: 'Edith2Okay', num: 2});
                }},
        ],
        branches: [
            {text: "Yeah, he is.", targetNode: "Edith2Dump"},
            {text: "Maybe he's right and there\nis something outside.", targetNode: "Edith2Situation"},
            {text: "What did you see in him\nin the first place?", targetNode: "Edith2SeeInHim"},
        ]
    },
    Edith2Line: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "I don't know what I was thinking dating\nhim. I should dump him. He's a loser!", publish: 'EdithInfluence', onStart: () => {
                    messageBus.publish('showUndoPoint');
                }, onFinish: () => {
                    messageBus.publish('savePoint', {node: 'Edith2Line', num: 0});
                }},
        ],
        branches: [
            {text: "Yeah, you should.", targetNode: "Edith2Dump"},
            {text: "Maybe he's right and there\nis something outside.", targetNode: "Edith2Situation"},
            {text: "What did you see in him\nin the first place?", targetNode: "Edith2SeeInHim"},
        ]
    },
    Edith2Dump: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Once we leave this place, I'm going to\nbreak up with him.", publish: 'EdithInfluence', onStart: () => {
                messageBus.publish("showUndoPoint");
                }},
        ],
    },

    Edith2Situation: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "But so what if he's right?", onStart: () => {
                    messageBus.publish("showUndoPoint");
                }},
            {speaker: "Edith", face: "edith_sad.png", text: "I'm scared and all he wants to talk\nabout is his crazy alien theory.\nI feel like I'm talking to a kid!"},
        ],
        branches: [
            {text: "You should dump him.", targetNode: "Edith2Dump"},
            {text: "What did you see in him\nin the first place?", targetNode: "Edith2SeeInHim"},
        ]
    },
    Edith2SeeInHim: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "What did I see in him.•••••••.••••••••.••••••••\nHmm...", data: {property: "edithThinking", value: true}, onStart: () => {
                    messageBus.publish("showUndoPoint");
                }},
        ],
    },
    Edith2ChatFinThought: {
        speech: [
            {speaker: "", text: "   (Edith is deep in thought)"},
        ],
    },
    Edith2ChatFinScratch: {
        speech: [
            {speaker: "", text: "(Edith is keeping her distance from the back door)"},
        ],
    },
    Edith2ChatFin: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Once we leave this place, I'm going to\nbreak up with him."},
        ],
    },

    Edith3LeaveCatatonic: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "Ethan! Eth- oh why do I bother?\nHe's caused enough trouble for me\nalready."},
            {speaker: "Edith", face: "edith_normal.png", text: "Noah, are you hitting the road soon?"},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveComeWithCatatonic"},
            {text: "No", targetNode: "Edith3LeaveNevermind"},
        ]
    },
    Edith3LeaveQuickYesNoCatatonic: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Noah, are you hitting the road soon?"},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveComeWithCatatonic"},
            {text: "No", targetNode: "Edith3LeaveNevermind"},
        ]
    },
    Edith3LeaveComeWithCatatonic: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Can I come with you?"},
        ],
        branches: [
            {text: "What about Ethan?", targetNode: "Edith3LeaveWhatAboutEthan"},
            {text: "Of course!", targetNode: "Edith3LeaveComeWithSuccessCataEthan"},
            {text: "There's not enough room in\nthe rig. You'll be safer here.", targetNode: "Edith3LeaveNoRoom"},
        ]
    },
    Edith3LeaveWhatAboutEthan: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Ethan will... he'll find a way back once\nhe comes to. I've decided to move on."},
        ],
        branches: [
            {text: "You're welcome to join me", targetNode: "Edith3LeaveComeWithSuccessCataEthan"},
            {text: "There's not enough room in\nthe rig. You'll be safer here.", targetNode: "Edith3LeaveNoRoom"},
        ]
    },
    Edith3LeaveNevermind: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Never mind then."},
        ],
    },
    Edith3LeaveComeWithSuccess: {
        speech: [
            {speaker: "", text: "  (Edith will come with you when you leave)"},
        ],
    },
    Edith3LeaveComeWithSuccessFailEthan: {
        speech: [
            {speaker: "", text: "  (Edith will come with you when you leave.\n   You also notice her looking at Ethan disappointingly)"},
        ],
    },

    Edith3LeaveComeWithSuccessCataEthan: {
        speech: [
            {speaker: "", text: "  (Edith will come with you when you leave.\n   Ethan will stay here.)", publish: 'edithSaved', data: {property: "EdithSaved", value: true}, onFinish: () => {
                    gameState.ethanBlocked = true;
                }},
        ],
    },
    Edith3LeaveNoRoom: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "...I see."},
        ],
    },

    Edith3LeaveThinking: {
        speech: [
            {speaker: "You", text: "Did you figure out what you saw in Ethan\nin the first place?"},
            {speaker: "Edith", face: "edith_normal.png", text: "Yeah. He's sweet and gentle when he's\nnot just goofing off."},
            {speaker: "Edith", face: "edith_happy.png", text: "He made me my favorite meal after he\nfound out I flunked a test."},
            {speaker: "Edith", face: "edith_happy.png", text: "And he's always volunteering down at\nthe animal shelter."},
            {speaker: "You", text: "Sounds like he's got a little more going on\nthan just talking about aliens."},
            {speaker: "Edith", face: "edith_normal.png", text: "Yeah. But I'm still mad at him."},
            {speaker: "You", text: "Being mad doesn't just go away. Especially\nwhen it's justified. But...", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Edith3LeaveThinking', num: 6})}
                },
        ],
        branches: [
            {text: "Invite both Ethan and Edith", targetNode: "Edith3LeaveThinkingEdithEthan"},
            {text: "Invite only Edith", targetNode: "Edith3LeaveThinkingEdithOnly"},
        ]
    },
    Edith3LeaveThinkingNoEthan: {
        speech: [
            {speaker: "You", text: "Did you figure out what you saw in Ethan\nin the first place?"},
            {speaker: "Edith", face: "edith_normal.png", text: "Yeah. He's sweet and gentle when he's\nnot just goofing off."},
            {speaker: "Edith", face: "edith_happy.png", text: "He made me my favorite meal after he\nfound out I flunked a test."},
            {speaker: "Edith", face: "edith_happy.png", text: "And he's always volunteering down at\nthe animal shelter."},
            {speaker: "You", text: "Sounds like he's got a little more going on\nthan just talking about aliens."},
            {speaker: "Edith", face: "edith_sad.png", text: "Yeah. But I'm still mad at him.\nAnd... ugh he's still staring off into space."},
        ],
        branches: [
            {text: "Invite only Edith", targetNode: "Edith3LeaveThinkingEdithOnlyNoEthan"},
        ]
    },
    Edith3LeaveThinkingPromiseEthan: {
        speech: [
            {speaker: "You", text: "Did you figure out what you saw in Ethan\nin the first place?"},
            {speaker: "Edith", face: "edith_normal.png", text: "Yeah. He's sweet and gentle when he's\nnot just goofing off."},
            {speaker: "Edith", face: "edith_happy.png", text: "He made me my favorite meal after he\nfound out I flunked a test."},
            {speaker: "Edith", face: "edith_happy.png", text: "And he's always volunteering down at\nthe animal shelter."},
            {speaker: "You", text: "Sounds like he's got a little more going on\nthan just talking about aliens."},
            {speaker: "Edith", face: "edith_sad.png", text: "I guess. But I'm still mad at him."},
            {speaker: "You", text: "Being mad doesn't just go away. Especially\nwhen it's justified. But..."},
        ],
        branches: [
            {text: "Invite Edith along with Ethan", targetNode: "Edith3LeaveThinkingEdithEthanNoUndo"},
        ]
    },
    Edith3LeaveThinkingEdithOnlyNoEthan: {
        speech: [
            {speaker: "You", text: "I'm leaving, and I'd like to invite you along."},
            {speaker: "You", text: "But this might be your last chance to talk\nwith Ethan."},
            {speaker: "Edith", face: "edith_normal.png", text: "Ethan... no I'm going to leave him alone\nwith his... imagination. Let's go.", onFinish: () => {
                    dialogManager.showDialogNode("Edith3LeaveComeWithSuccessBlockEthan");
                }
            },
        ],
    },
    Edith3LeaveThinkingEdithOnly: {
        speech: [
            {speaker: "You", text: "I'm leaving, and I'd like to invite you along.", publish: "showUndoPoint"},
            {speaker: "You", text: "But this might be your last chance to talk\nwith Ethan."},
            {speaker: "Edith", face: "edith_normal.png", text: "Oh. Oooh. I... okay, I'll be ready to go.", onFinish: () => {
                    dialogManager.showDialogNode("Edith3LeaveComeWithSuccessBlockEthan");
                }
            },
        ],
    },
    Edith3LeaveThinkingEdithEthan: {
        speech: [
            {speaker: "You", text: "I'm leaving, and I want to bring both you and\nEthan with me.", publish: "showUndoPoint"},
            {speaker: "Edith", face: "edith_sad.png", text: "Why do you want him to come?!"},
        ],
        branches: [
            {text: "I think we all need to\ngo as one", targetNode: "Edith3LeaveFine"},
            {text: "You don't need to keep him\nas your boyfriend", targetNode: "Edith3LeaveFine"},
        ]
    },
    Edith3LeaveThinkingEdithEthanNoUndo: {
        speech: [
            {speaker: "You", text: "I'm leaving, and I want to bring both you and\nEthan with me."},
            {speaker: "Edith", face: "edith_sad.png", text: "Why do you want him to come?!"},
        ],
        branches: [
            {text: "I think we all need to\ngo as one", targetNode: "Edith3LeaveFine"},
            {text: "You don't need to keep him\nas your boyfriend", targetNode: "Edith3LeaveFine"},
        ]
    },
    Edith3LeaveFine: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Hmm...\n\n\n[Medium Difficulty]", publish: "showInfluence", onFinish: () => {
                // if (gameState.ethanStandingUp) {
                //     dialogManager.showDialogNode("Edith3EthanStandUp");
                // } else {
                if (gameState.ethanStandingUp) {
                    dialogManager.showDialogNode("Edith3LeaveFineFence");
                } else if (gameState.EdithInfluence >= 2) {
                    if (gameState.EthanSaved) {
                        dialogManager.showDialogNode("Edith3LeaveFineSuccess");
                    } else {
                        dialogManager.showDialogNode("Edith3LeaveFineSuccessMaybe");
                    }
                } else if (gameState.EdithInfluence >= 1) {
                    dialogManager.showDialogNode("Edith3LeaveFineFence");
                } else {
                    dialogManager.showDialogNode("Edith3LeaveFineFail");
                }
                //}
                }},
        ]
    },
    Edith3LeaveFineSuccess: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Alright. I'll come with him."},
            {speaker: "", text: "  (Edith will come with you when you leave)", data: {property: "EdithSaved", value: true}}
        ]
    },
    Edith3LeaveFineSuccessMaybe: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Alright. He can come.\nIf he wants to."},
            {speaker: "", text: "  (Edith will come with you when you leave)", data: {property: "EdithSaved", value: true}}
        ]
    },
    Edith3LeaveFineFence: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "I don't know...", onFinish: () => {
                if (gameState.ethanStandingUp) {
                    dialogManager.showDialogNode("Edith3EthanStandUp");
                } else {
                    dialogManager.showDialogNode("Edith3EthanSitDown");
                }
                }},
        ]
    },
    Edith3EthanStandUp: {
        speech: [
            {speaker: "You", text: "Look, I've talked with Ethan. He's definitely got\na lot of growing up to do, but I think he at least\nwants to make up."},
            {speaker: "Ethan", face: "ethan_normal.png", publish: "ethanApproachEdith", text: "Hey Edith, how're you uh...\nhow're you hangin'?"},
            {speaker: "Edith", face: "edith_sad.png", text: "..."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Noah, c'mon help me man."},
            {speaker: "You", text: "It only counts if you say it in your own words."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Geez, you really are like my dad."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Okay uh, Edith. I've been... irresponsible."},
            {speaker: "Edith", face: "edith_normal.png", text: "."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "And I know I haven't always been the\nboyfriend I should be."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I dunno if I could make up for it again\nafter messing up so much but..."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I'd like to try again.\nDo better, if you're okay with that."},
            {speaker: "You", text: "...•••••••••\nAnything else...?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Oh yeah no more goofing around about\naliens when things are serious.\nI'll take better responsibility."},
            {speaker: "Edith", face: "edith_normal.png", text: "...••••••••••Okay.\n••••••••••••I'll give you another chance.", data: {property: "EthanEdithTogether", value: true}},
            {speaker: "Edith", face: "edith_sad.png", text: "But make it count!", publish: "edithScootTowardsEthan"},
            {speaker: "Edith", face: "edith_normal.png", text: "Noah, I'll come with you••••.•••••.•••••••. and Ethan,••••••••\nwhenever you're ready."},
            {speaker: "", text: "(Edith will come with you when you leave)", data: {property: "EdithSaved", value: true}}
        ]
    },

    EthanEdithTogether: {
        speech: [
            {speaker: "", text: "(Ethan and Edith will both come with you when\n  you leave)"}
        ]
    },
    Edith3EthanSitDown: {
        speech: [
            {speaker: " ", text: "   (Edith looks over at Ethan who's lounging\naround)"},
            {speaker: "Edith", face: "edith_normal.png", publish: "showInfluenceSmall", text: "*Sigh* sorry but I just... I just can't.\nYou can go with Ethan, but I'm\nstaying here.\n(Not enough trust)", data: {property: "EdithRefuse", value: true}},
        ]
    },
    Edith3LeaveFineFail: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", publish: "showInfluenceSmall", text: "Then I'm staying here.\n(Not enough trust)", data: {property: "EdithRefuse", value: true}},
        ]
    },
    Edith3LeaveNormal: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Are you hitting the road soon?"},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveNormalAskEthan"},
            {text: "No", targetNode: "Edith3LeaveNevermind"},
        ]
    },
    Edith3LeaveNormalPlusEthan: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Are you hitting the road soon?"},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveNormalWithEthan"},
            {text: "No", targetNode: "Edith3LeaveNevermind"},
        ]
    },

    Edith3LeaveNormalWithEthan: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Is Ethan going with you?"},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveCantWithEthan"},
        ]
    },
    Edith3LeaveNormalAskEthan: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Is Ethan going with you?", publish: "savePoint", param: {node: 'Edith3LeaveNormalAskEthan', num: 0}},
        ],
        branches: [
            {text: "Yes", targetNode: "Edith3LeaveCantWithEthanUndoable"},
            {text: "No", targetNode: "Edith3LeaveRefuseEthan"},
        ]
    },

    Edith3LeaveCantWithEthanUndoable: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "What? Why? He's useless!", publish: "showUndoPoint"},
            {speaker: "You",  text: "He's got a pretty good intuition for things and\nhe can help warn us if something's out there\nin the fog."},
            {speaker: "Edith", face: "edith_sad.png", text: "Ugh, now you also believe there's\nsomething out there trying to eat us.\nGo, take him. I'm staying here.", data: {property: "EdithRefuse", value: true}},
        ],
    },

    Edith3LeaveCantWithEthan: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "What? Why? He's useless!"},
            {speaker: "You",  text: "He's got a pretty good intuition for things and\nhe can help warn us if something's out there\nin the fog."},
            {speaker: "Edith", face: "edith_sad.png", text: "Ugh, now you also believe there's\nsomething out there trying to eat us.\nGo, take him. I'm staying here.", data: {property: "EdithRefuse", value: true}},
        ],
    },

    Edith3Refused: {
        speech: [
            {speaker: "", text: "   (Edith does not want to leave with you)"},
        ],
    },

    Edith3LeaveRefuseEthan: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Can I come with you?", publish: "showUndoPoint"},
        ],
        branches: [
            {text: "Of course!", targetNode: "Edith3LeaveComeWithSuccessBlockEthan"},
            {text: "There's not enough room in\nthe rig. You'll be safer here.", targetNode: "Edith3LeaveNoRoom"},
        ]
    },

    Edith3LeaveComeWithSuccessBlockEthan: {
        speech: [
            {speaker: "", text: "  (Edith will come with you when you leave,\n    Ethan will not)", publish: 'edithSaved', data: {property: "EdithSaved", value: true}, onFinish: () => {
                    gameState.ethanBlocked = true;
                }},
        ],
    },


    CasparDefault: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Nothin' much left to say son."},
        ],
    },
    MaggieDefault: {
        speech: [
            {speaker: " ", text: "   (Maggie is cleaning up the diner)"},
        ],
    },
    BrunaDefault: {
        speech: [
            {speaker: " ", text: "   (Bruna is absorbed in her phone)"},
        ],
    },
    JuanDefault: {
        speech: [
            {speaker: " ", text: "   (Juan glances at you, but stays quiet)"},
        ],
    },
    EthanDefault: {
        speech: [
            {speaker: " ", text: "   (Ethan is absentmindedly gazing into space)"},
        ],
    },
    EdithDefault: {
        speech: [
            {speaker: " ", text: "   (Edith is minding her own business)"},
        ],
    },

    introEthan: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Hey man, did you see anything freaky\nin the skies on the way here?"},
            {speaker: "Edith", face: "edith_sad.png", text: "Ugh, this again."},
            {speaker: "Ethan", face: "ethan_happy.png", text: "No really, we saw something huge and\nlike, flickery right before the storm\nstarted. •Well,• I saw it anyways.",
                data: {property: "EthanIntroduced", value: true}, publish: "savePoint", param: {node: 'introEthan', num: 2}},
        ],
        branches: [
            {text: "You saw something in the skies?", targetNode: "EthanEdithWhatElse"},
            {text: "You got quite the imagination\n there son.", targetNode: "EthanEdithLaugh"},
            {text: "Well if you ever need me to take\naim at it, just ask.", targetNode: "EthanCop"},
        ]
    },
    EthanEdithLaugh: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "Hey I most definitely saw a giant\nfloating.... THING in the sky!", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Probably aliens! I think...", data: {property: "hoops", value: true}},
            {speaker: "You", text: "It's nice that you're checking the skies, but in a\nstorm like this, you should be taking more care\nof your lady friend."},
            {speaker: "Edith", face: "edith_normal.png", text: "At least someone here is a gentleman.", publish: "EdithInfluence", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }},
        ]
    },
    EthanEdithWhatElse: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Looked kind of like an eye, or maybe a\nflying saucer!", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "One moment I saw it on the road and\nthe next it disappeared and then\nBOOM. •••••••••••It starts raining."},
            {speaker: "You", text: "That's quite the story there."},
            {speaker: "Edith", face: "edith_sad.png", text: "Ethan's been talking about it nonstop."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Must've been aliens I tell ya.", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }}
        ]
    },
    EthanCop: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Whoa man, you a cop or something?", publish: "showUndoPoint"},
            {speaker: "You", text: "I'm on the road a lot, it pays to be prepared."},
            {speaker: "Edith", face: "edith_normal.png", text: "Don't you believe in... like, peace?"},
            {speaker: "You", text: "Yes, but there's a lot of bad people out there\nwho don't."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "But what if you meet like, outer\nspace aliens, but they're friendly?"},
            {speaker: "You", text: "As long as they mean no harm, then aliens or\nnot, they're fine to me."},
            {speaker: "Ethan", face: "ethan_happy.png", text: "You're all right man.", publish: "EthanInfluence", onFinish: () => {
                    messageBus.publish('hideUndoPoint');
                }}
        ]
    },
    EthanActOneInstruct: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png",
                text: "I think there was a free seat.•••••••••••.•••••••••••.•••••••••••\nsomewhere over there?\n(Ethan gestures everywhere haphazardly)",
                data: {property: "EthanAct1Fin", value: true}},
        ]
    },
    EthanActOneEnd: {
        speech: [
            {text: "(Ethan continues vaguely pointing everywhere)"},
        ]
    },
    EdithEthan2Dark: {
        speech: [
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Do you hear that man?"},
            {speaker: "You", text: "Hear what?"},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Ugh, just ignore him."},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "No! Can't you hear the whispering?"},
            {speaker: "You", text: "It seems quieter in here to me now that the TV's\noff."},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "The TV isn't off."},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Yes it is!"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "No, it's on! I'm tellin' ya! I think it's\npicking up on the aliens."},
            {speaker: "",  text: "(Ethan and Edith continue arguing. You should\ncome back when they've calmed down.)"},
        ]
    },
    EdithEthan2DarkFin: {
        speech: [
            {speaker: "",  text: "(Ethan and Edith are still arguing. Perhaps\nthey'll calm down when the power is back on.)"},
        ]
    },
    EdithEthan2: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Do you hear that man?"},
            {speaker: "You", text: "Hear what?"},
            {speaker: "Edith", face: "edith_normal.png", text: "Ugh, just ignore him."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "No! Can't you hear the whispering?"},
            {speaker: "You", text: "It seems quieter in here to me now that\nthe TV's off."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "The TV isn't off."},
            {speaker: "Edith", face: "edith_sad.png", text: "Yes it is! Noah right? Please, tell Ethan\nhe's just hearing things."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "No, it's on! I'm tellin' ya!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I think it must be picking up on\nthe aliens.", publish: "savePoint", param: {node: 'EdithEthan2', num: 8}},
        ],
        branches: [
            {text: "Calm down and drink\nsome water.", targetNode: "EdithEthan2BadTrip"},
            {text: "What's the TV showing?", targetNode: "EdithEthan2Showing"},
        ]
    },
    EdithEthan2PartSkip: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "Noah right? Please, tell Ethan he's\njust hearing things."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "The TV is on! Why can't you hear it?", publish: "savePoint", param: {node: 'EdithEthan2PartSkip', num: 1}},
        ],
        branches: [
            {text: "Calm down and drink\nsome water.", targetNode: "EdithEthan2BadTrip"},
            {text: "What's the TV showing?", targetNode: "EdithEthan2Showing"},
        ]
    },

    EdithEthan2Showing: {
        speech: [
            {speaker: "Ethan", face: "ethan_happy.png", text: "Oh! The TV is-", publish: "EthanInfluence", onFinish: () => {
                    messageBus.publish('showUndoPoint');
                }},
            {speaker: "Edith", face: "edith_sad.png", text: "NOTHING!\nHe just thinks he can hear things!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's big, and curious, and-"},
            {speaker: "Edith", face: "edith_sad.png", text: "NO! It's nothing!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I can hear something from your\nbelly too."},
            {speaker: "Edith", face: "edith_sad.png", text: "Shut up!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I offered to pay for the procedure.\nWhat more do you want from me?"},
            {speaker: "Edith", face: "edith_sad.png", text: "Ugh, it's not about the baby, it's•-••••••••\nNothing. •••••••••I don't want anything from\nyou any more.", onFinish: () => {
                    messageBus.publish("edithStandCorner");
                }},
        ],
    },
    EdithEthan2BadTrip: {
        speech: [
            {speaker: "You", text: "You're just not thinking straight. Take some deep\n" +
                    "breaths and drink some water.", publish: "showUndoPoint"},
            {speaker: "Edith", face: "edith_normal.png", text: "That's what I've been telling him!\nHe never listens!", publish: "EdithInfluence"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I listen."},
            {speaker: "Edith", face: "edith_sad.png", text: "You listen but you don't hear!\nJust like... *sob*"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I offered to pay for the procedure.\nWhat more do you want from me?"},
            {speaker: "Edith", face: "edith_sad.png", text: "Ugh, it's not about the baby, it's•-••••••••\nNothing. •••••••••I don't want anything from\nyou any more.", onFinish: () => {
                    messageBus.publish("edithStandCorner");
                }},
        ],
    },


    Ethan2DarkFin: {
        speech: [
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Do you hear that?"},
        ]
    },
    Ethan2Chat: {
        speech: [
            {speaker: "You",  text: "Son..."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "The TV is still on.", publish: "savePoint", param: {node: 'Ethan2Chat', num: 1}},
        ],
        branches: [
            {text: "I think you should drink\nsome water, here.", targetNode: "Ethan2Water"},
            {text: "What's it showing now?", targetNode: "Ethan2TVShowing"},
        ]
    },
    Ethan2ChatFin: {
        speech: [
            {speaker: "",  text: "   (Ethan looks more clear-headed than usual)"},
        ]
    },
    Ethan2Water: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", forceProgress: true, unclickable: true, text: "•.••••••.••••••.••••••••••", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Thanks. Edith is really mad at me isn't\nshe?", publish: "EthanRefreshed"},
            {speaker: "You", text: "Yeah."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Girls get moody when pregnant right?"},
        ],
        branches: [
            {text: "Her 'mood' is partially your fault.", targetNode: "Ethan2Mood"},
            {text: "Best to let her be for a bit.", targetNode: "Ethan2LetHerBe"},
        ]
    },
    Ethan2Mood: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "Man, you're not my dad!"},
            {speaker: "You", text: "No, I'm not. But you're not being much of a\ndad either."},
        ]
    },
    Ethan2LetHerBe: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Yeah. I think I just need to sober up."},
        ]
    },
    Ethan2TVShowing: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "An eye. Big, cold, and with too many\ncorners...", publish: "EthanRefreshed", onStart: () => {
                messageBus.publish("showUndoPoint");
                }},
            {speaker: "You", text: "An eye? That's weird."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's talking too.", publish: "ethanEldritch2"},
            {speaker: "You", text: "What's it telling us?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's not."},
            {speaker: "You", text: "It's not talking?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "No. It's not talking to us.\nYou wouldn't talk to an ant after all.", data: {property: "canAskEthanEldritch", value: true}},
        ]
    },
    Ethan2Eldritch: {
        speech: [
            {speaker: "You", text: "Can you at least make sense of what\nyou're hearing?", data: {property: "ethanEldritchAsked", value: true}},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Sorta. But I don't think it likes it\nwhen I listen too closely.", publish: "ethanEldritch2"},
        ],
        branches: [
            {text: "Listen to it anyways. You might\npick up something interesting.", targetNode: "Ethan2EldritchCont"},
            {text: "Probably better that you don't listen\ntoo closely to strange sounds."},
        ]
    },
    Ethan2EldritchCont: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Aight man, uh••.••.••.••••• very roughly,•• I think it's\ntrying to say..••", data: {property: "canAskEthanEldritch", value: false}},
            {speaker: "Ethan", face: "ethan_sad.png", text: "It's•••.•••.•••.•••••••••••••\ntrying to say••••.••••.•••••••••.•••••"},
            {speaker: "Ethan", face: "ethan_sad.png", unclickable: true, forceProgress: true, text: "Y'know I think it's better if I just sho", data: {property: "seenEldritchEthan", value: true}},
            {speaker: "Ethan", face: "ethan_dark_scared.png", forceProgress: true, text: "•...", publish: "startEldritchEthan"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", unclickable: true, text: "..."},
        ],
    },
    Ethan2EldritchFlash: {
        speech: [
            {speaker: "Ethan", face: "ethan_dark_eye_2.png", forceProgress: true, unclickable: true, text: "..."},
            {speaker: "Ethan", face: "ethan_dark_eye_3.png", forceProgress: true, unclickable: true, text: "."},
            {speaker: "Ethan", face: "ethan_dark_eye_3x.png", forceProgress: true, unclickable: true, text: "."},
            {speaker: "Ethan", face: "ethan_dark_scared.png", instant: true, unclickable: true, text: "..."},
        ],
    },
    Ethan2EldritchFin: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "•Y'know,••••••••• something like that."},
        ],
    },
    Ethan2ChatFinEldritch: {
        speech: [
            {speaker: "",  text: "   (Ethan looks more sober than usual,\n    and seems rather quiet)"},
        ]
    },

    Ethan3Catatonic: {
        speech: [
            {speaker: "You",  text: "Ethan. Ethan!"},
            {speaker: "",  text: "   (No response, he's somehow passed out.)"},
        ]
    },

    Ethan3Blocked: {
        speech: [
            {speaker: "",  text: " (You already promised Edith that you wouldn't\n  bring Ethan with you. From Ethan's silent stare,\nyou suspect he must have overheard)"},
        ]
    },

    Ethan3Chat: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "What's up?"},
        ],
        branches: [
            {text: "How're you feeling?", targetNode: "Ethan3Head"},
            {text: "What happened between\nyou and Edith?", targetNode: "Ethan3Disagreement"},
        ]
    },
    Ethan3Head: {
        speech: [
            {speaker: "Ethan", face: "ethan_happy.png", text: "Head's kind of pounding, but the whispers\nare easier to ignore."},
        ],
        branches: [
            {text: "What happened between\nyou and Edith?", targetNode: "Ethan3Disagreement"},
        ]
    },
    Ethan3Disagreement: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's just a disagreement, she'll\ncome around.", publish: "savePoint", param: {node: 'Ethan3Disagreement', num: 0}},
        ],
        branches: [
            {text: "That's one approach,\nI guess.", targetNode: "Ethan3OneApproach"},
            {text: "No she won't. Not without\nan apology from you.", targetNode: "Ethan3Dad"},
        ]
    },
    Ethan3OneApproach: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Yeah, I'll let her cool off, it'll be fine.", publish: "showUndoPoint"},
            {speaker: "You", text: "You're going to be waiting for a long time."},
            {speaker: "You", text: "In my experience, women can hold a grudge\npast the grave."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I can wait. She'll come around\neventually. She always does.", data: {property: "ethanState", value: "ethanWaitForever"}},
        ]
    },
    Ethan3MustApologize: {
        speech: [
            {speaker: "You", text: "Ethan..", publish: "savePoint", param: {node: 'Ethan3MustApologize', num: 0}},
        ],
        branches: [
            {text: "I still think you should apologize.", targetNode: "Ethan3Dad"},
            {text: "You have very good hearing right?", targetNode: "Ethan3Hearing"},
            {text: "Nevermind"},
        ]
    },
    Ethan3Dad: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "What's with you man? You trying to be\nmy dad?", publish: "showUndoPoint"},
            {speaker: "You", text: "Look, I get that you're scared.\nI'm trying to help you avoid a big mistake."},
            {speaker: "You", text: "I don't care if you stay in your kids life.\nI don't care if you break up with Edith."},
            {speaker: "You", text: "Just look her in the eye and tell her directly\nwhat you decided."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "What? Scared? Who isn't scared\nright now?!"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Ugh, right, you're you.\nMr. Hero."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "You're not scared of anything!", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Ethan3Dad', num: 6});
                }},
        ],
        branches: [
            {text: "If you don't want to be a\nscaredy-cat, take my advice", targetNode: "Ethan3ScaredyCat"},
            {text: "Ethan, I do get scared.", targetNode: "Ethan3IDoGetScared"},
        ]
    },
    Ethan3ScaredyCat: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "Scaredy-cat? What are you, five?"},
            {speaker: "You", text: "I'm not the one hiding from the world in\nhis own imagination.", data: {property: "ethanState", value: "ethanDrugHaze"}},
        ]
    },

    Ethan3Hearing: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "What about it?", publish: "showUndoPoint"},
            {speaker: "You", text: "Can you hear if the thing outside is close or\nfar away?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "If I'm paying close attention, sure.\nBut why?", onFinish: () => {
                    messageBus.publish("savePoint", {node: 'Ethan3Hearing', num: 2});
                }},
        ],
        branches: [
            {text: "Tell him you're planning\nto leave", targetNode: "Ethan3DrugLeave"},
            {text: "Tell him you're planning\nto stay here", targetNode: "Ethan3DrugStay"},
        ]
    },
    Ethan3DrugHaze: {
        speech: [
            {speaker: "You", text: "Actually, about that...\nYou have very good hearing right?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "What about it?"},
            {speaker: "You", text: "Can you hear if the thing outside is close or\nfar away?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "If I'm paying close attention, sure.\nBut why?", onFinish: () => {
                messageBus.publish('savePoint', {node: 'Ethan3DrugHaze', num: 3})
                }
                },
        ],
        branches: [
            {text: "Tell him you're planning\nto leave", targetNode: "Ethan3DrugLeave"},
            {text: "Tell him you're planning\nto stay here", targetNode: "Ethan3DrugStay"},
        ]
    },

    Ethan3DrugLeave: {
        speech: [
            {speaker: "You", text: "I think we should leave, and it would help if we\nhad some warning before running into anything\non the road.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "So wait, you'll drive us to who knows\nwhere and you want me to act as\n... your warning system?\n[Medium Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 2) {
                        if (!gameState.dogAlive && gameState.EthanInfluence <= 2) {
                            dialogManager.showDialogNode("Ethan3DogFail");
                        } else {
                            dialogManager.showDialogNode("Ethan3DrugSuccess");
                        }
                    } else {
                        dialogManager.showDialogNode("Ethan3DrugFail");
                    }
                }},
        ]
    },
    Ethan3DrugStay: {
        speech: [
            {speaker: "You", text: "I think we should hole up here, and it would\nhelp if you can hear if anything's coming\mat us.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "So you want me to stay here and\nact as a... a radar?\n\n[Easy Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 1) {
                        dialogManager.showDialogNode("Ethan3DrugStaySuccess");
                    } else {
                        dialogManager.showDialogNode("Ethan3DrugFail");
                    }

                }},
        ]
    },

    Ethan3DrugStaySuccess: {
        speech: [
            {speaker: "Ethan", face: "ethan_happy.png", text: "Yeah why not, I'll warn you if I\nhear anything coming.", data: {property: "ethanState", value: "ethanStayingHere"}},
        ]
    },

    Ethan3DrugSuccess: {
        speech: [
            {speaker: "Ethan", face: "ethan_happy.png", text: "Y'know what, you've been a bro to me.\nI'm in.", data: {property: "EthanSaved", value: true}},
        ]
    },

    Ethan3DrugFail: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "Extra work is the last thing I want."},
            {speaker: "Ethan", face: "ethan_normal.png", publish: "showInfluenceSmall", text: "And no, I'm not going to be your\nradar system. Leave me alone.\n(Not enough trust)", data: {property: "ethanState", value: "ethanNotTalk"}},
        ]
    },

    Ethan3DogFail: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Noah, you've been a bro to me and all,\nbut I think you're just saying things\nto get me come with you."},
            {speaker: "You", text: "What do you mean?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Remember earlier when I told you the\ndoor was fine but you locked it\nout anyways?"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "It was friendly, but now it ran off."},
            {speaker: "Ethan", face: "ethan_sad.png", publish: "showInfluenceSmall", text: "If it wasn't friendly, and I told you not\nto open the door, would you still\nignore me and open it anyways?", data: {property: "ethanState", value: "ethanNotTalk"}},
            {speaker: "You", text: "What? Of course not. I'd always listen to you-"},
            {speaker: " ", text: "   (Ethan is no longer paying attention)\n\n\n   (Not enough trust)"},
        ]
    },

    Ethan3IDoGetScared: {
        speech: [
            {speaker: "You", text: "I once got so scared I hit the road and never\nstopped running."},
            {speaker: "You", text: "But over these long years I've learned."},
            {speaker: "You", text: "Courage isn't the absense of fear, it's the\nability to act despite it."},
            {speaker: "Ethan", face: "ethan_normal.png", text: ".••••.••••.••••••What scared you so bad?", onFinish: () => {
                    messageBus.publish("savePoint", {node: 'Ethan3IDoGetScared', num: 3})
                }
                },
        ],
        branches: [
            {text: "Share your past", targetNode: "Ethan3AngryFather"},
            {text: "Don't tell Ethan anything", targetNode: "Ethan3KeepSecrets"},
        ]
    },

    Ethan3KeepSecrets: {
        speech: [
            {speaker: "You", text: "...Something I still don't like to admit.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Fine.••••••\nKeep your secrets."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Why are you telling me this?", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Ethan3KeepSecrets', num: 2})
                }
                },
        ],
        branches: [
            {text: "Tell him you're staying here", targetNode: "Ethan3Staying"},
            {text: "Tell him you're leaving", targetNode: "Ethan3Leaving"},
        ]
    },
    Ethan3NotTalk: {
        speech: [
            {speaker: "",  text: "(Ethan isn't interested in talking anymore. He's\nstaring at the TV as if transfixed.)"},
        ]
    },
    Ethan3NotTalkBroken: {
        speech: [
            {speaker: "",  text: "(Ethan isn't interested in talking anymore. He's\nstaring at the broken TV as if transfixed.)"},
        ]
    },
    Ethan3FailedBest: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "What? I said I'll talk to her once\nshe's calmed down...••••••••••• eventually."},
        ],
        branches: [
            {text: "Tell Ethan he doesn't have\nto talk to Edith.", targetNode: "Ethan3Compromise"},
            {text: "Nevermind."},
        ]
    },
    Ethan3Compromise: {
        speech: [
            {speaker: "You", text: "Look, this place isn't safe and I intend to get\neveryone out to safety if I can."},
            {speaker: "You", text: "It's fine if you don't talk to Edith. But I'd still\nlike to invite you along."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Hmm...\n\n\n[Medium-ish Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 2) {
                        if (!gameState.dogAlive && gameState.EthanInfluence <= 3) {
                            dialogManager.showDialogNode("Ethan3DogFail");
                        } else {
                            dialogManager.showDialogNode("Ethan3LeavingSuccessSolo");
                        }
                    } else {
                        dialogManager.showDialogNode("Ethan3FailSolo");
                    }
                }},
        ]
    },

    Ethan3AngryFather: {
        speech: [
            {speaker: "You", text: "The angry father of a girl I was fooling\naround with.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "You're just saying that."},
            {speaker: "You", text: "I'd give a lot to be lying."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Huh.\nWhy are you telling me this?", publish: "EthanInfluence", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Ethan3AngryFather', num: 3})
                }},
        ],
        branches: [
            {text: "Tell him you're staying here", targetNode: "Ethan3Staying"},
            {text: "Tell him you're leaving", targetNode: "Ethan3Leaving"},
        ]
    },
    Ethan3Staying: {
        speech: [
            {speaker: "You", text: "I'm staying here, and you two need to make\npeace if you're both staying here too.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Oh, then no need to rush things right?"},
            {speaker: "You", text: "Ethan..."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Relax, I'll talk to her when she's ready.", data: {property: "ethanState", value: "ethanStayingHere"}},
        ],
    },
    Ethan3Leaving: {
        speech: [
            {speaker: "You", text: "I'm leaving, and I'd like both you and Edith to\ncome, but you need to make peace first.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Aww...\n\n\n[Very Hard Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 4) {
                        dialogManager.showDialogNode("Ethan3LeavingSuccessWithEdith");
                    } else {
                        dialogManager.showDialogNode("Ethan3Fail");
                    }
                }},
        ],
    },
    Ethan3LeavingChangeMind: {
        speech: [
            {speaker: "You", text: "Hey Ethan...", publish: "savePoint", param: {node: 'Ethan3LeavingChangeMind', num: 0}},
        ],
        branches: [
            {text: "Tell him you're leaving and are\ninviting him", targetNode: "Ethan3LeavingSolo"},
            {text: "Tell him you're leaving and are\ninviting both him and Edith", targetNode: "Ethan3LeavingWithEdith"},
            {text: "Nevermind"},
        ]
    },
    Ethan3LeavingWithEdith: {
        speech: [
            {speaker: "You", text: "I've changed my mind. I'm leaving, and I'd like\nboth you and Edith to come, but you need to\nmake peace first.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_sad.png", text: "Aww...\n\n\n[Very Hard Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 4) {
                        dialogManager.showDialogNode("Ethan3LeavingSuccessWithEdith");
                    } else {
                        dialogManager.showDialogNode("Ethan3Fail");
                    }
                }},
        ],
    },
    Ethan3LeavingSolo: {
        speech: [
            {speaker: "You", text: "I've changed my mind. I'm leaving, and I'd like\nyou to come.", publish: "showUndoPoint"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Hmm...\n\n\n[Medium Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.EthanInfluence >= 2) {
                        if (!gameState.dogAlive && gameState.EthanInfluence <= 2) {
                            dialogManager.showDialogNode("Ethan3DogFail");
                        } else {
                            dialogManager.showDialogNode("Ethan3LeavingSuccessSolo");
                        }
                    } else {
                        dialogManager.showDialogNode("Ethan3FailSolo");
                    }
                }},
        ],
    },
    Ethan3LeavingSuccessWithEdith: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Okay man, I... I'll trust you on this one.\nI'll make peace.", data: {property: "EthanSaved", value: true}},
            {speaker: "", text: "   (Ethan will come with you when you leave)", publish: "ethanStandUp"},
        ],
    },
    Ethan3LeavingSuccessSolo: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Okay man, I'll come with you.", data: {property: "EthanSaved", value: true}},
            {speaker: "", text: "   (Ethan will come with you when you leave)"},
        ],
    },
    Ethan3SuccessFin: {
        speech: [
            {speaker: "", text: "   (Ethan will come with you when you leave)"},
        ],
    },
    Ethan3Fail: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png",  publish: "showInfluenceSmall", text: ".••••••••.••••••••Nah.•••••••• That's just too much for me.\nI can always just talk to her later.\n(Not enough trust)", data: {property: "ethanState", value: "ethanFailedBest"}},
        ],
    },
    Ethan3FailSolo: {
        speech: [
            {speaker: "Ethan", face: "ethan_sad.png", text: "Hey man, I'm glad you got the lights\non and all, but I hardly even know\nyou."},
            {speaker: "Ethan", face: "ethan_normal.png",  publish: "showInfluenceSmall", text: "I'd rather stay here.\nNo offense.\n(Not enough trust)", data: {property: "ethanState", value: "ethanNotTalk"}},
        ],
    },

    Edith3Catatonic: {
        speech: [
            {speaker: " ", text: "  (Edith is shaking Ethan, but he's not responding)"}
        ]
    },

    JuanIntro: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "What are you looking at?", data: {property: "juanIntroduced", value: true}},
            {speaker: "You", text: "Just looking for a seat."},
            {speaker: "Juan", face: "juan_normal.png", text: "This booth's taken."},
            {speaker: "You", text: ".••••.•••••••••••Not very friendly are you."},
            {speaker: "Juan", face: "juan_normal.png", text: "Ain't you seen the news?\nThese ain't friendly times."},
        ]
    },
    Juan1Enda: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Try the booth at the end.", data: {property: "juanAskedSeat", value: true}},
        ]
    },
    Juan1Endb: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "The booth at the *other* end, not this one."},
        ]
    },

    Juan2Dark: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "You felt that shake too, didn't you?", publish: "savePoint", param: {node: 'Juan2Dark', num: 0}},
        ],
        branches: [
            {text: "Yeah. Best get ready for\nanything.", targetNode: "Juan2FeltIt"},
            {text: "I saw something gigantic\nnear the windows.", targetNode: "Juan2Eye"},
            {text: "It was probably just lightning.", targetNode: "Juan2Lightning"},
        ]
    },
    Juan2FeltIt: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "Good to know someone else has got their\nsenses together.", publish: 'JuanInfluence', onFinish: () => {
                    setTimeout(() => {
                        let tempSpook = PhaserScene.add.sprite(-100, 0, 'lowq', 'spook4.png').setDepth(-1).setScale(2.8, 2.8).setAlpha(1);
                        playSound('meatclick');
                        PhaserScene.tweens.add({
                            targets: [tempSpook],
                            duration: 500,
                            x: 3500,
                            alpha: 0,
                            onComplete: () => {
                                tempSpook.destroy();
                            }
                        });
                    }, 750);
                },
                onStart: () => {
                    messageBus.publish('showUndoPoint')
                }
            },
        ]
    },
    Juan2Eye: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "\"Something gigantic\" huh?", publish: "showUndoPoint"},
            {speaker: "", text: "   (Juan looks out the window)", data: {property: "juanPragmatic", value: false}},
            {speaker: "Juan", face: "juan_dark_scared.png", text: "And what, did it turn invisible?", data: {property: "invisibleGiant", value: true}, onFinish: () => {
                setTimeout(() => {
                    let tempSpook = PhaserScene.add.sprite(-100, 0, 'lowq', 'spook4.png').setDepth(-1).setScale(2.8, 2.8).setAlpha(1);
                    playSound('meatclick');
                    PhaserScene.tweens.add({
                        targets: [tempSpook],
                        duration: 500,
                        x: 3500,
                        alpha: 0,
                        onComplete: () => {
                            tempSpook.destroy();
                        }
                    });
                }, 750);
                }},
        ]
    },
    Juan2Lightning: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "\"Just lightning\" huh?\nYeah you can keep telling yourself that.", publish: "showUndoPoint"},
        ]
    },

    Juan2DarkFin: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "This damned dark..."},
        ]
    },
    Juan2Chat: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hey Trucker."},
            {speaker: "You", text: "Name's Noah."},
            {speaker: "Juan", face: "juan_normal.png", text: "Mine's Juan.\nWere you the one who got the generator\ngoing again?"},
            {speaker: "You", text: "Yeah.", publish: "savePoint", param: {node: 'Juan2Chat', num: 4}},
            {speaker: "Juan", face: "juan_happy.png", text: "Pretty handy. What else can you work on?", publish: "JuanInfluence"},
        ],
        branches: [
            {text: "Why are you asking?", targetNode: "Juan2Ask"},
            {text: "I'm a jack of all trades", targetNode: "Juan2Jack"},
        ]
    },
    Juan2Ask: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Things are getting weird. It's good to\nknow what skills we all have.", publish: "showUndoPoint"},
            {speaker: "You", text: "What do you bring to the table?"},
            {speaker: "Juan", face: "juan_happy.png", text: "Great aim and good humor!"},
        ]
    },
    Juan2Jack: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "That's good. I've got some mechanic and\ncarpentry skills myself.", publish: "showUndoPoint", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Juan2Jack', num: 0})
                }},
        ],
        branches: [
            {text: "That could be useful if\nanything else breaks."},
            {text: "Then why didn't you help with\nthe generator?", targetNode: "Juan2Generator"},
        ]
    },
    Juan2Generator: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "I was still assessing the situation.", publish: "JuanInfluence", param: -1, onStart: () => {
                messageBus.publish('showUndoPoint');
                }},
            {speaker: "Juan", face: "juan_normal.png", text: "It's not smart to lay all your cards\non the table from the word go."},
        ]
    },
    Juan2ChatFinScratch: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "You can never be too careful in these\ntimes."},
        ]
    },
    Juan2ChatFin: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "I've seen you talking with the others.\nKeep a sharp eye out for who's useful."},
        ]
    },

    BrunaIntro: {
        speech: [
            {speaker: "???", face: "bruna_normal.png", text: "I'm not doing autographs or photos\nright now.", data: {property: "brunaIntroduced", value: true}},
            {speaker: "You", text: "Excuse me but who are you?", data: {property: "brunaNotIntroduced", value: false}},
            {speaker: "Bruna", face: "bruna_grin.png", text: "Don't you know me? I'm Bruna Starr.\nI have three million followers on I-posty."},
            {speaker: "You", text: "Sorry, I'm not on that app."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "What? How do you keep up with people?"},
            {speaker: "You", text: "I've got a HAMM radio in my rig.\nGot a pretty good range on it too."},
            {speaker: "Bruna", face: "bruna_grin.png", text: "Huh. Cool! Would you want to do a\nlivestreamed interview with me about it?"},
        ],
        branches: [
            {text: "An interview with me?", targetNode: "BrunaInterviewYes"},
            {text: "Is now really the time?", targetNode: "BrunaInterviewNo"},
        ]
    },
    BrunaInterviewYes: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Ja! Everyone's looking for weather events\n" +
                    "right now."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Turns out there's a lot of storms back\n" +
                    "home too.\nOdd coincidence, don't you think?"},
            {speaker: "You", text: "Where's home for you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Germany.", publish: "germanyCompare"},
            {speaker: "You", text: "That's a long ways away."},
            {speaker: "Bruna", face: "bruna_grin.png", text: "I travel a lot for my work. Pictures in\nexotic locations and interviews with the\nfascinating locals."},
            {speaker: "Bruna", face: "bruna_happy.png", text: "Like you!"},
            {speaker: "Bruna", face: "bruna_grin.png", text: "Perhaps once the storm passes we can\ndo that interview.", publish: "savePoint", param: {node: 'BrunaInterviewYes', num: 8}},
        ],
        branches: [
            {text: "Sure", targetNode: "BrunaInterviewHappy"},
            {text: "No thanks", targetNode: "BrunaInterviewSad"},
        ]
    },

    BrunaInterviewSad: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "...okay", publish: "showUndoPoint"},
        ]
    },

    BrunaInterviewHappy: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Great!", publish: "BrunaInfluence", data: {property: "brunaInterview", value: true}, onStart: () => {
                messageBus.publish("showUndoPoint");
                }},
        ]
    },

    BrunaInterviewNo: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Everyone's looking for weather events\n" +
                    "right now. Turns out there's a lot of\n" +
                    "storms back home too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Odd coincidence, don't you think?"},
            {speaker: "You", text: "Where's home for you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Germany.", publish: "germanyCompare"},
            {speaker: "You", text: "That's a long ways away."},
            {speaker: "Bruna", face: "bruna_grin.png", text: "I travel a lot for my work. Pictures in\nexotic locations and interviews with the\nfascinating locals."},
            {speaker: "Bruna", face: "bruna_happy.png", text: "Like you!"},
            {speaker: "Bruna", face: "bruna_grin.png", text: "Perhaps once the storm passes we can\ndo that interview.", publish: "savePoint", param: {node: 'BrunaInterviewNo', num: 7}},
        ],
        branches: [
            {text: "Sure", targetNode: "BrunaInterviewHappy"},
            {text: "No thanks", targetNode: "BrunaInterviewSad"},
        ]
    },
    BrunaActOneEnd: {
        speech: [
            {speaker: " ", text: " (Bruna is occupied with her phone)"},
        ]
    },
    Bruna2Dark: {
        speech: [
            {speaker: "You", text: "Did you see anything out the window?", data: {property: "askedBrunaDark", value: true}},
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "No my screen blinded me when the lights\nwent off. Did you get a picture?"},
            {speaker: "You", text: "I'm not carrying a phone or camera with me."},
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "What an odd way to live."},
        ]
    },
    Bruna2DarkFin: {
        speech: [
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "I hope I have enough battery power\nfor this."},
        ]
    },
    Bruna2Chat: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Thank you for fixing the power!", publish: 'BrunaInfluence', data: {property: "brunaChatted2", value: true}},
            {speaker: "Bruna", face: "bruna_concern.png", text: "Do you think there will be enough power\nto charge my phone?"},
            {speaker: "You", text: "Hard to say, Bruna. What's so important\non your phone anyway?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "My friends are posting updates.", publish: "savePoint", param: {node: 'Bruna2Chat', num: 3}},
        ],
        branches: [
            {text: "Might be good to unplug for a bit!", targetNode: "Bruna2Unplug"},
            {text: "What sort of updates?", targetNode: "Bruna2Updates"},
        ]
    },
    Bruna2Unplug: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "You may like to live with stuffing in\nyour ears and blinders on your eyes\nyou Dosbaddel! I do not!", data: {property: "bruna2ChattedAngry", value: true}, publish: "BrunaInfluence", param: -1, onStart: () => {
                messageBus.publish("showUndoPoint")
                }},
        ],
    },

    Bruna2ChatAngry: {
        speech: [
            {speaker: "Bruna", face: "bruna_concern.png", text: "What do you want?"},
        ],
        branches: [
            {text: "Nothing."},
            {text: "To apologize.", targetNode: "Bruna2ChatApology"},
        ]
    },
    Bruna2ChatApology: {
        speech: [
            {speaker: "You", text: "To apologize. I got no room to judge where\npeople turn for comfort.\nSo, sorry."},
            {speaker: "Bruna", face: "bruna_normal.png", text: ".••••••.•••••••.•••••Thank you.\nI should not have called you a\nDosbaddel either.", publish: "BrunaInfluence"},
            {speaker: "You", text: "Fresh start?"},
            {speaker: "Bruna", face: "bruna_grin.png", text: "Ja, fresh start.\nOh! My friend in Cairo is calling!"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "She claims the Nile is flowing the\nwrong way.", publish: "BrunaFrown"},
            {speaker: "You", text: "Huh, I'l leave you to it.", data: {property: "bruna2ChattedAngry", value: false}},
        ],
    },
    Bruna2ChatHopeSprings: {
        speech: [
            {speaker: "You", text: "Hey Bruna, do you know of a place called\n\"Hope Springs\"?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Let me check, H••-O••-P••-E•••• S••-P••-R••-I••-N••-G••-S•.•.•.••••••• \nIt is not too far from here, but it is\nnear the top of a mountain."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "The road is very tricky in that direction.\nWhat makes you want to head there?", data: {property: "hopeSpringsLocationMissing", value: false}, publish: "savePoint", param: {node: 'Bruna2ChatHopeSprings', num: 2}},
        ],
        branches: [
            {text: "I think it would be safer there\nwith everything that's going on.", targetNode: "Bruna2Safer"},
            {text: "The old man behind you told\nme to look for somewhere safer.", targetNode: "Bruna2OldMan"},
        ]
    },
    Bruna2Safer: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Now that you say it, some of my friends\nliving in high elevation areas seem to\nbe doing ok!", publish: "BrunaInfluence", onStart: () => {
                messageBus.publish("showUndoPoint");
                }},
            {speaker: "Bruna", face: "bruna_sad.png", text: "But I don't know if it is a good idea\nto drive there in this heavy rain."},
        ]
    },
    Bruna2OldMan: {
        speech: [
            {speaker: "Bruna", face: "bruna_concern.png", text: "Old man behind me...", onStart: () => {
                    messageBus.publish("showUndoPoint");
                }},
            {speaker: "Bruna", face: "bruna_behind.png", text: "._.", publish: "radioTempQuiet"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "This is no time for joking.", publish: "radioTempQuietResume"},
        ]
    },
    Bruna2Updates: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "The power outage we just had...\nIt was world-wide.", publish: "showUndoPoint"},
            {speaker: "You", text: "That's not possible."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "It is! Everyone's posting about it.\nI have friends on five continents\nand they all confirmed it!", onFinish: () => {
                messageBus.publish("savePoint", {node: 'Bruna2Updates', num: 2})
                }
                },
        ],
        branches: [
            {text: "Maybe it was a solar flare?", targetNode: "Bruna2Solar"},
            {text: "This isn't some big prank?", targetNode: "Bruna2Prank"},
        ]
    },
    Bruna2Solar: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Maybe, but my satellite wifi still works.\n•••••Oh, my buddy in Buenos Aires says\nthere's lava erupting down town.", publish: "showUndoPoint"},
            {speaker: "You", text: "Is that one of those island nations?"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "No. There's no history of volcanos\nanywhere near there. And yet, he just\nsent a video of it."},
            {speaker: "You", text: "Video? How close was he?"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "Close. The lava was moving funny and\nhe wanted to show it. But I can't get\nahold of him now.", publish: "BrunaFrown"},
            {speaker: "You", text: "Keep at it. I'm sure he's just distracted."},
        ],
    },
    Bruna2Prank: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "No. And that's not all. Tokyo went dark\nthirty minutes ago. My friend does\nVR work there.", publish: "showUndoPoint"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "She says there's something outside her\nwindow looking in."},
            {speaker: "You", text: "I'm sure it's just a critter. They still have owls\nin Japan, right?"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "She's on the 48th floor."},
            {speaker: "Bruna", face: "bruna_sad.png", text: "And she's not answering my calls\nanymore.", publish: "BrunaFrown"},
        ],
    },
    Bruna2ChatFin: {
        speech: [
            {speaker: "Bruna", text: "  (Bruna is busy with her phone. Her face is\n  locked in a frown as she scrolls.)"},
        ],
    },
    Bruna2ChatFinScratch: {
        speech: [
            {text: "   (Bruna is squeezing herself into the seat)"},
        ],
    },
    Bruna3Decision: {
        speech: [
            {text: "Bruna, I got to ask..."},
        ],
        branches: [
            {text: "Come with me to Hope Springs", targetNode: "Bruna3GoOutThere"},
            {text: "Let's fortify this place", targetNode: "Bruna3Fortify"},
        ]
    },
    Bruna3DecisionWithRadio: {
        speech: [
            {text: "Bruna, I got to ask..."},
        ],
        branches: [
            {text: "Do you know of a place called\nHope Springs?", targetNode: "Bruna3ChatHopeSprings"},
            {text: "I think we need to get out\nof here", targetNode: "Bruna3NowhereLocation"},
            {text: "Let's fortify this place", targetNode: "Bruna3Fortify"},
        ]
    },
    Bruna3DecisionDead: {
        speech: [
            {text: "Bruna, I got to ask..."},
        ],
        branches: [
            {text: "I think we need to get out\nof here", targetNode: "Bruna3NowhereLocation"},
            {text: "Let's fortify this place", targetNode: "Bruna3Fortify"},
        ]
    },

    Bruna3DecisionFortify: {
        speech: [
            {text: "Hey Bruna..."},
        ],
        branches: [
            {text: "I've changed my mind.\nCome with me to Hope Springs", targetNode: "Bruna3GoOutThere"},
            {text: "Nevermind"},
        ]
    },
    Bruna3DecisionFortifyWithRadio: {
        speech: [
            {text: "Hey Bruna..."},
        ],
        branches: [
            {text: "Do you know of a place\ncalled Hope Springs?", targetNode: "Bruna3ChatHopeSprings"},
            {text: "I've changed my mind.\nWe should get out of here", targetNode: "Bruna3NowhereLocation"},
            {text: "Nevermind"},
        ]
    },
    Bruna3DecisionFortifyDead: {
        speech: [
            {text: "Hey Bruna..."},
        ],
        branches: [
            {text: "I've changed my mind.\nWe should get out of here", targetNode: "Bruna3NowhereLocation"},
            {text: "Nevermind"},
        ]
    },

    Bruna3NowhereLocation: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Where do you plan to go?"},
            {speaker: "You", text: "Not sure yet. Maybe the next stop, or the\nnext city. Anywhere else that's safe.\nJust not here."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "This place is as good as any to me.\nI think I prefer to stay here."},
        ],
    },

    Bruna3ChatHopeSprings: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Let me check, H••-O••-P••-E•••• S••-P••-R••-I••-N••-G••-S•.•.•.••••••• \nIt is not too far from here, but it is\nnear the top of a mountain.", data: {property: "brunaHopeSpringsChatted", value: true}},
            {speaker: "Bruna", face: "bruna_concern.png", text: "The road is very tricky in that direction.\nWhat makes you want to head there?", data: {property: "hopeSpringsLocationMissing", value: false}, publish: "savePoint", param: {node: 'Bruna3ChatHopeSprings', num: 1}},
        ],
        branches: [
            {text: "This place is getting dangerous.\nHope Springs should be safer.", targetNode: "Bruna3GoOutThere"},
            {text: "Just wondering. I'm planning to\nstay here for now.", targetNode: "Bruna3Fortify"},
        ]
    },

    Bruna3Fortify: {
        speech: [
            {speaker: "You", text: "Let's fortify this place and hunker down until\nhelp comes.", publish: "showUndoPoint"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "Cell signal isn't very strong here."},
            {speaker: "You", text: "That's fine. There are plenty of supplies here.\nWe'll be okay.", data: {property: "BrunaFortify", value: true}},
        ],
    },

    Bruna3GoOutThere: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "You want to go out there?!", publish: 'showUndoPoint', onFinish: () => {
                messageBus.publish("savePoint", {node: 'Bruna3GoOutThere', num: 0});
                }},
        ],
        branches: [
            {text: "My rig can get through this storm.\nAnd we can't stay here.", targetNode: "Bruna3Rig"},
            {text: "We need to find out what's happening.\nWe can't do that from here.", targetNode: "Bruna3FindOut"},
        ]
    },
    Bruna3FindOut: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "There's no telling what's out there.\nNone of my friends are answering\nanymore!", publish: "showUndoPoint", onFinish: () => {
                    messageBus.publish("savePoint", {node: 'Bruna3FindOut', num: 0});
                }},
        ],
        branches: [
            {text: "Don't your followers want to\nknow what's happening?", targetNode: "Bruna3Followers"},
            {text: "Do you want to be the next\none to go silent?", targetNode: "Bruna3Silent"},
        ]
    },
    Bruna3Rig: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "We have food, water, and internet.", publish: "showUndoPoint"},
            {speaker: "You", text: "Not for long. We'll need to go out eventually."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "In a week or so."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "By then someone will be able to\ntell us what's happening.", onFinish: () => {
                    messageBus.publish("savePoint", {node: 'Bruna3Rig', num: 3});
                }
            }
        ],
        branches: [
            {text: "Who's left to tell us anything?", targetNode: "Bruna3WhosLeft"},
            {text: "That's a risky gamble Bruna.\nI'm going. Are you coming with?", targetNode: "Bruna3RiskyGamble"},
        ]
    },

    Bruna3Followers: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "We all want to know what's\ngoing on!", publish: "showUndoPoint"},
            {speaker: "You", text: "Then let's go find out."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "...\n\n\n[Hard Difficulty]", publish: 'BrunaInfluence', onFinish: () => {
                    messageBus.publish('showInfluence');
                    if (gameState.BrunaInfluence >= 3) {
                        dialogManager.showDialogNode("Bruna3Saved");
                    } else {
                        dialogManager.showDialogNode("Bruna3NotSaved");
                    }
                }},
        ],
    },

    Bruna3Silent: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "Of course not!\nBut if I go out there I will be!", publish: "showUndoPoint"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "There's a dead zone between us\nand anywhere."},
            {speaker: "You", text: "If you stay here you'll be dead!"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "Noah, you're scaring me.\n\n\n[Hard Difficulty]", publish: 'showInfluence', onFinish: () => {
                    if (gameState.BrunaInfluence >= 3) {
                        dialogManager.showDialogNode("Bruna3Saved2");
                    } else {
                        dialogManager.showDialogNode("Bruna3NotSaved2");
                    }
                }},
        ],
    },

    Bruna3WhosLeft: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "My friends will of course!\nOnce they...", publish: "showUndoPoint"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "-if they get back online.\n\n\n[Hard Difficulty]", publish: "BrunaInfluence", onFinish: () => {
                messageBus.publish('showInfluence');
                if (gameState.BrunaInfluence >= 3) {
                    dialogManager.showDialogNode("Bruna3Saved");
                } else {
                    dialogManager.showDialogNode("Bruna3NotSaved");
                }
            }},
        ],
    },

    Bruna3RiskyGamble: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "It's just as much of a gamble\nto go out in this weather.\n\n[Hard Difficulty]", publish: 'showInfluence', onFinish: () => {
                if (gameState.BrunaInfluence >= 3) {
                    dialogManager.showDialogNode("Bruna3Saved2");
                } else {
                    dialogManager.showDialogNode("Bruna3NotSaved2");
                }
            },
            onStart: () => {
                messageBus.publish("showUndoPoint");
            }
            },
        ],
    },

    Bruna3FinalChoice: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "Hmmmm...\n\n\n[Hard Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.BrunaInfluence >= 3) {
                        dialogManager.showDialogNode("Bruna3Saved");
                    } else {
                        dialogManager.showDialogNode("Bruna3NotSaved");
                    }
                }},
        ]
    },

    Bruna3NotSaved: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png",  publish: "showInfluenceSmall", text: "But no, I'm staying here.\n(Not enough trust)", data: {property: "BrunaRefuse", value: true}},
        ],
    },

    Bruna3NotSaved2: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png",  publish: "showInfluenceSmall", text: "So no. I'm staying here. That is\nmy answer.\n(Not enough trust)", data: {property: "BrunaRefuse", value: true}},
        ],
    },

    Bruna3Saved: {
        speech: [
            {speaker: "Bruna", face: "bruna_grin.png", text: "Okay, you're right.\nI'll leave with you.", data: {property: "BrunaSaved", value: true}},
            {speaker: "", text: "  (Bruna will come with you when you leave)", publish: "BrunaStandUp"},
        ],
    },

    Bruna3Saved2: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "But I'll trust you this time.\nI'll go when you're ready.", data: {property: "BrunaSaved", value: true}},
            {speaker: "", text: "  (Bruna will come with you when you leave)", publish: "BrunaStandUp"},
        ],
    },

    Bruna3Success: {
        speech: [
            {speaker: "", text: "  (Bruna will come with you when you leave)"},
        ],
    },

    Bruna3Refused: {
        speech: [
            {speaker: "", text: "  (Bruna prefers to stay here)"},
        ],
    },

    Bruna3PleadSolo: {
        speech: [
            {speaker: "You", text: "Please Bruna, I need you for the trip!"},
            {speaker: "Bruna", face: "bruna_concern.png", text: "Is anyone else coming with you?"},
            {speaker: "You", text: "It's just me, for now."},
            {speaker: "Bruna", face: "bruna_sad.png", text: "Then my answer is still no. I'm not going\nto risk my life so that one person\nI barely know can go on a suicide trip."},
        ],
    },

    Bruna3Plead: {
        speech: [
            {speaker: "You", text: "Please Bruna, we need you for the trip!\nNobody else has working signal."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "Is anyone else coming with you?"},
            {speaker: "You", text: "Yeah, some of the other diners are heading out\nwith me too."},
            {dependentState: "brunaInterview", speaker: "You", text: "And I'm sure there will be plenty of interesting\npeople to interview once we all get to\nHope Springs."},
            {dependentState: "brunaInterview", speaker: "Bruna", face: "bruna_normal.png", text: "Getting to talk to more locals would\nbe nice.", publish: "BrunaInfluence"},
            {dependentState: "DogSaved", speaker: "You", text: "We're bringing the dog too."},
            {speaker: "Bruna", face: "bruna_concern.png", text: "Hmm...", publish: 'showInfluence', onFinish: () => {
                if (gameState.bruna2ChattedAngry && gameState.BrunaInfluence <= 2) {
                    dialogManager.showDialogNode("Bruna3ExtraRefuse");
                } else if (gameState.BrunaInfluence <= 1) {
                    dialogManager.showDialogNode("Bruna3AltRefuse");
                } else {
                    dialogManager.showDialogNode("Bruna3SavedPhone");
                }
                }},
        ],
    },

    Bruna3SavedPhone: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Alright. I'll join you all."},
            {speaker: "Bruna", face: "bruna_sad.png", text: "But you better be thankful that I'm the\nonly one with working reception here!", data: {property: "BrunaSaved", value: true}},
            {speaker: "", text: "  (Bruna will come with you when you leave)", publish: "BrunaStandUp"},
        ],
    },

    Bruna3HardReject: {
        speech: [
            {speaker: "", text: "  (Bruna does not want to talk to you)"},
        ],
    },

    Bruna3AltRefuse: {
        speech: [
            {speaker: "Bruna", face: "bruna_concern.png", text: "My answer is still no."},
            {speaker: "You", text: "Really? Why?"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "You've been helpful but, I hardly know\nyou. I can't just follow random strangers\nto questionable destinations.", data: {property: "BrunaFailed", value: true}},
            {speaker: "", text: "   (Bruna will not come with you)", data: {property: "brunaHardReject", value: true}},
        ],
    },

    Bruna3ExtraRefuse: {
        speech: [
            {speaker: "Bruna", face: "bruna_concern.png", text: "My answer is still no."},
            {speaker: "You", text: "Really? Why?"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "You're kind of a jerk if I'm being honest.\nYou tell me to unplug my phone,\nand now you want me to come with\nbecause nobody else has phone."},
            {speaker: "You", text: "Yeah but-"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "You're a Dosbaddel! That is all I have\nto say to you.", data: {property: "BrunaFailed", value: true}},
            {speaker: "", text: "   (Bruna will not come with you)", data: {property: "brunaHardReject", value: true}},
        ],
    },

    CasparFarIntro: {
        speech: [
            {speaker: "You", text: ".••.••.•••••Oh!••••••••••• Hello, mind if I sit with you?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Not at all friend. Name's Caspar."},
            {speaker: "You", text: "Caspar, like the ghost?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Haha! No, no like the wise man. Though\nI can't claim to be very wise myself.\nWhat's your name son?"},
            {speaker: "You", text: "I'm Noah."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Noah, huh. Nice to meet you.", onFinish: () => {
                    if (gameState.brunaIntroduced && gameState.juanIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced) {
                        dialogManager.showDialogNode("CasparTalkOthersDone");
                    } else {
                        dialogManager.showDialogNode("CasparTalkOthers");
                    }
                }},
        ]
    },

    CasparIntro: {
        speech: [
            {speaker: "You", text: "Hello, mind if I sit with you?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Not at all friend. Name's Caspar."},
            {speaker: "You", text: "Caspar, like the ghost?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Haha! No, no like the wise man. Though\nI can't claim to be very wise myself.\nWhat's your name son?"},
            {speaker: "You", text: "I'm Noah."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Noah, huh. Nice to meet you.", onFinish: () => {
                if (gameState.brunaIntroduced && gameState.juanIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced) {
                    dialogManager.showDialogNode("CasparTalkOthersDone");
                } else {
                    dialogManager.showDialogNode("CasparTalkOthers");
                }
            }},
        ]
    },
    CasparTalkOthers: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "You may as well talk to the others while\n" +
                    "you're waitin'. We're all weathering this\n" +
                    "storm together, no sense in stayin'\nstrangers."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Once you're done, there's somethin'\n" +
                    "important I need to share with you."}
        ]
    },
    CasparTalkOthersDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet\nthe rest of the customers?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinue"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparTalkOthersSomeDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet\nthe rest of the customers?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinueDoubt"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },

    CasparTalkOthersNotDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet\nthe rest of the customers?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinueLie"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparActOneWait: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Take your time. This storm ain't lettin' up\nanytime soon."},
        ],
    },
    CasparActOneContinueDoubt: {
        speech: [
            {speaker: "Caspar", face: "caspar_doubt.png", text: "Is that really so?"},
        ],
        branches: [
            {text: "Of course!", targetNode: "CasparActOneContinue"},
            {text: "Maybe I missed someone", targetNode: "CasparActOneWait"},
        ]
    },
    CasparActOneContinueLie: {
        speech: [
            {speaker: "Caspar", face: "caspar_doubt.png", text: "Is that really so?"},
        ],
        branches: [
            {text: "Of course! (lie)", targetNode: "CasparActOneContinueSusp"},
            {text: "Maybe I missed someone", targetNode: "CasparActOneWait"},
        ]
    },
    CasparSorry: {
        speech: [
            {speaker: "Caspar", unclickable: true, face: "caspar_dark_scared.png", text: "I'm sorry Noah.••••••\nI did my best to warn you."},
        ]
    },
    CasparSorry2: {
        speech: [
            {speaker: "Caspar", unclickable: true, face: "caspar_dark_scared.png", text: "What have you done Noah?"},
        ]
    },
    CasparActOneContinueSusp: {
        speech: [
            {speaker: "Caspar", face: "caspar_doubt.png", text: "I'll take your word for it.", data: {property: "CasparActOneFin", value: true}, publish: "startDark"},
            {speaker: "You", text: "..."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Here Honey, one hot coffee.", publish: "MaggieCoffee"},
            {speaker: "Maggie", face: "maggie_normal.png", forceProgress: true, text: "Sorry about the wait. What can I get\nstarted for...••••••••••••••••••", publish: "ActOneEnd"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...••••••••I swear I changed these lights not\ntwo weeks ago,• and now they actin'\nup again!"},
            {speaker: "Maggie", face: "maggie_sad.png", unclickable: true, text: "Once this storm blows over, I reckon\nI'll need to get some new light bulbs."},
        ]
    },
    CasparActOneContinue: {
        speech: [
            {speaker: "You", text: "Yeah, odd crowd that's drifted in for sure.", data: {property: "CasparActOneFin", value: true}, publish: "startDark"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "No odder than you or me, friend."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Here Honey, one hot coffee.", publish: "MaggieCoffee"},
            {speaker: "Maggie", face: "maggie_normal.png", forceProgress: true, text: "Sorry about the wait. What can I get\nstarted for...••••••••••••••••••", publish: "ActOneEnd"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...••••••••I swear I changed these lights not\ntwo weeks ago,•••• and now they actin'\nup again!"},
            {speaker: "Maggie", face: "maggie_sad.png", unclickable: true, text: "Once this storm blows over, I reckon\nI'll need to get some new light bulbs."},
        ]
    },
    CasparAct2DarkGenerator: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "How's the generator fixin' going?"},
        ],
        branches: [
            {text: "I'm having some trouble.", targetNode: "CasparAct2DarkGeneratorHelp"},
            {text: "I'll be right on it."},
        ]
    },
    CasparAct2DarkGeneratorHelp: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "If memory serves me right, that red wire\nwas supposed to hook up to the bottom\nsocket."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "I reckon you can figure out the rest\nfrom there."},
        ]
    },
    CasparAct2DarkBranches: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "What is it son?"},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2DarkWhere"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2DarkWhy"},
            {text: "How can I convince the others\nto join me?", targetNode: "CasparAct2DarkConvince"},
            {text: "Nevermind."},
        ]
    },
    CasparAct2DarkWhy: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "Son, I've been in this here place more\nyears than you've been alive."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "This is my resting place, and there ain't\na thing you can do to get me to leave."},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2DarkWhere"},
            {text: "How can I convince the others\nto join me?", targetNode: "CasparAct2DarkConvince"},
            {text: "How do you know all of\nthese things?", targetNode: "CasparAct2DarkKnow"},
            {text: "Understood."},
        ]
    },

    CasparAct2DarkKnow: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "Call it the intuition of an old man.\nWhen you've been 'round as long as\nI have, you get a pretty good feel\nfor things."},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2DarkWhere"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2DarkWhy"},
            {text: "How can I convince the others\nto join me?", targetNode: "CasparAct2DarkConvince"},
            {text: "Understood."},
        ]
    },

    CasparAct2DarkWhere: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "Keep an ear on the radio for news.\nThere'll be folk out there who will\n" +
                    "know of a better place to stay."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "But we'll need the power back on first,\nof course."},
        ],
        branches: [
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2DarkWhy"},
            {text: "How can I convince the others\nto join me?", targetNode: "CasparAct2DarkConvince"},
            {text: "How do you know all of\nthese things?", targetNode: "CasparAct2DarkKnow"},
            {text: "Understood."},
        ]
    },

    CasparAct2DarkConvince: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "Earn their trust. Make em' feel safe\nwhen you're around."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "For starters, you'll wanna check up on\nthat generator. Maggie's never been much\nfor fixin' things on her own."},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2DarkWhere"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2DarkWhy"},
            {text: "How do you know all of\nthese things?", targetNode: "CasparAct2DarkKnow"},
            {text: "Understood."},
        ]
    },
    CasparAct2Welcome: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Seems the customers are a bit rattled\nafter them lights went out on us."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Why don't you go check on them?"},
            {speaker: "You", text: "You can talk with everyone as well as I can."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I'm not the hero who got the\nlights back on, son."},
        ],
    },
    CasparAct2WelcomeRadio: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "It's nice that you're making rounds\nwith the customers here."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Looks like a few of em still have\nsomethin' on their minds."},
            {speaker: "You", text: "You can talk with everyone as well as I can."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I'm not the hero who got the\nlights back on, son."},
        ],
    },

    CasparAct2WelcomeDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Go on now, I'm sure the others will\nsettle down some once you've had a chat\nwith 'em."},
        ],
    },
    CasparAct2DoorScratch: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Better check on that door soon."},
            {speaker: "You", text: "Any clue what's making that scratching noise?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Who's to say, son? But whatever you\ndo about it, you gotta take\nresponsibility for the decision."},
        ]
    },
    CasparAct2DoorScratchFin: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Better check on that door soon.\nDon't keep it waitin'."},
        ]
    },
    CasparAct2Ask: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Yes son?"},
        ],
        branches: [
            {text: "What was I supposed to do again?", targetNode: "CasparAct2What"},
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2Where"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2Why"},
            {text: "Nevermind."},
        ]
    },
    CasparAct2What: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "I'd reckon you ought to go check up\non everyone. I'm sure they've got some\nthoughts on their minds."},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2Where"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2Why"},
            {text: "Got it."},
        ]
    },
    CasparAct2Where: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Now that the radio's kickin' in, I'd\nsuggest going through the channels,\nsee what we can pick up."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Might be somethin' useful in one of em."},
        ],
        branches: [
            {text: "What was I supposed to do again?", targetNode: "CasparAct2What"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2Why"},
            {text: "Got it."},
        ]
    },
    CasparAct2Why: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "When you've planted roots in one spot\nas long as I have, it slowly becomes a\npart of your soul."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Ain't nothin' gonna budge me from here\nnow."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "But I reckon Maggie's feelin' the same.\nThis may be a tall order, but I hope you\ncan bring her to safety."},
        ],
        branches: [
            {text: "What was I supposed to do again?", targetNode: "CasparAct2What"},
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2Where"},
            {text: "Got it."},
        ]
    },
    CasparAct3Final: {
        speech: [
            {speaker: "Caspar", face: "caspar_sad.png", text: "Don't seem like this place can hold\nmuch longer. You gettin' ready to go?"},
        ],
        branches: [
            {text: "I'm going. Come with me.", targetNode: "CasparCantCome"},
            {text: "No, I'm staying here.", targetNode: "Caspar3Staying"},
        ]
    },
    CasparAct3FinalNoDest: {
        speech: [
            {speaker: "Caspar", face: "caspar_sad.png", text: "Don't seem like this place can hold\nmuch longer. You gettin' ready to go?"},
        ],
        branches: [
            {text: "I'm not sure where to go", targetNode: "Caspar3Radio"},
            {text: "I'm going. Come with me.", targetNode: "CasparCantCome"},
            {text: "No, I'm staying here.", targetNode: "Caspar3Staying"},
        ]
    },
    CasparCantCome: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Appreciate the offer, I truly do.\nBut I can't."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "However the others can. Do your best\nto help them, son. Especially darlin'\nMaggie.", data: {property: "caspar3ChatDone", value: true}},
        ]
    },
    Caspar3Staying: {
        speech: [
            {speaker: "Caspar", face: "caspar_sad.png", text: "Is that really so?"},
            {speaker: "Caspar", face: "caspar_sad.png", text: "Very well, it's your decision. If you are\ntruly going to stay here, lock the front\ndoor when you are ready."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "...and hope for the best.", data: {property: "caspar3ChatDone", value: true}},
        ]
    },
    Caspar3Radio: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Flip through the channels in the radio.\nI just know there's folk out there who've\nfound a safe spot.", data: {property: "askedCasparRadio", value: true}},
        ]
    },
    Caspar3Waiting: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "I understand helping everyone isn't easy.\nIf it ever feels like you've done all you\ncan, then it's time to make a decision\nat the front door."},
        ]
    },
    Caspar3Final: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Seems you've got just about everyone\nready to go."},
            {speaker: "You", text: "But not Maggie yet."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "Yes, she's gonna have a hard time leaving\nthis place.", publish: "showInfluence", onFinish: () => {
                    if (gameState.MaggieInfluence >= 4) {
                        dialogManager.showDialogNode("Caspar3FinalHint");
                    } else {
                        dialogManager.showDialogNode("Caspar3FinalNotEnough");
                    }
                }},
        ]
    },
    Caspar3FinalNotEnough: {
        speech: [
            {speaker: "Caspar", face: "caspar_sad.png", text: "Unfortunately it don't seem like\nshe quite trusts you enough to just\nup and leave."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "It pains me to say this, but you\nshould go now with the rest.\nI'll watch over Maggie."},
        ]
    },
    Caspar3FinalHint: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I can see she trusts you.\nIf she still seems indecisive, I might\nknow a trick or two."},
        ]
    },

    Caspar3Finale: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "As I thought. She's always been a\nstubborn lady."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Try this. Set the radio to her favorite\ntune for me. You'll find it on\nchannel 98.", publish: 'goodEndLocked', data: {property: "goodEndLocked", value: true}},
        ]
    },

    Caspar3FinaleEnd: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Channel 98 on the radio it is."},
        ]
    },

    Caspar3FinaleEnd2: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "What are you waitin' for? Talk to\nMaggie now."},
        ]
    },

    Caspar3Sandwich: {
        speech: [
            {speaker: "You", text: "Maggie's packed us these sandwiches."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "She's made you all sandwiches you say?"},
            {speaker: "You", text: "Yeah, pretty hefty ones too. Would you like one?"},
            {speaker: "Caspar", face: "caspar_sad.png", text: ".••••••••.••••••••.•••••••••I see she's decided."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "Go. Get out of here now with the rest."},
            {speaker: "You", forceProgress: true, text: "But I haven't convinced Maggie yet to-••••••••"},
            {speaker: "Caspar", face: "caspar_angry.png", text: "I said go!"},
            {speaker: "Caspar", face: "caspar_angry.png", text: "..."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "Maggie makes sandwiches whenever\nshe's made up her mind. It's her way of\nsaying goodbye. She won't be\njoining you."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "You should be hittin' the road before the\nstorm worsens."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "I'll be going my own way.", publish: "casparExit"},
        ]
    },

    Caspar3Sandwich2: {
        speech: [
            {speaker: " ", text: "(Caspar looks at Maggie with a sorrowful expression)"},
        ]
    },

    DogNotTrust: {
        speech: [
            {speaker: "Doggo", face: "doggo_angry.png", text: "Grrr..."},
        ],
        branches: [
            {text: "Pet the dog", targetNode: "DogNotTrustPet"},
            {text: "Offer some food", targetNode: "DogNotTrustFood"},
            {text: "Ignore"},
        ]
    },

    DogNotTrustPet: {
        speech: [
            {speaker: " ", text: "You try and pet the dog.\nShe backs away from you."},
        ],
        branches: [
            {text: "Pet the dog again", targetNode: "DogNotTrustPet2"},
            {text: "Offer some food", targetNode: "DogNotTrustFood"},
            {text: "Ignore"},
        ]
    },

    DogNotTrustPet2: {
        speech: [
            {speaker: "Doggo", face: "doggo_angry.png", text: "ARF!!", publish: "doggoJump"},
            {speaker: " ", text: "   The dog does not trust you."},
        ]
    },

    DogNotTrustFood: {
        speech: [
            {speaker: " ", text: "You place some of your leftovers in front of\nthe dog. She wolfs it down hungrily.", data: {property: "dogTrust", value: 1}},
        ]
    },

    DogOkayTrust: {
        speech: [
            {speaker: "Doggo", face: "doggo_normal.png", text: "..."},
        ],
        branches: [
            {text: "Pet the dog", targetNode: "DogOkayTrustPet"},
            {text: "Offer some food", targetNode: "DogOkayTrustFood"},
            {text: "Ignore"},
        ]
    },

    DogOkayTrustFood: {
        speech: [
            {speaker: " ", text: "   She's already been fed."},
        ],
        branches: [
            {text: "Pet the dog", targetNode: "DogOkayTrustPet"},
            {text: "Ignore"},
        ]
    },

    DogOkayTrustPet: {
        speech: [
            {speaker: " ", text: "   You pet the dog. ", data: {property: "dogTrust", value: 2}},
            {speaker: "Doggo", face: "doggo_happy.png", text: "   Arf!", publish: "doggoJump"},
            {speaker: " ", text: "   She seems to like it."},
        ]
    },

    DogFullTrust: {
        speech: [
            {speaker: "Doggo", face: "doggo_happy.png", text: "Arf!"},
        ],
        branches: [
            {text: "Pet the dog", targetNode: "DogFullTrustPet"},
            {text: "Bring the dog with you\nwhen you leave.", targetNode: "DogFullTrustBring"},
            {text: "Ignore"},
        ]
    },

    DogFullTrustPet: {
        speech: [
            {speaker: " ", text: "You pet the dog. She is happy to see you!"},
        ]
    },

    DogFullTrustSaved: {
        speech: [
            {speaker: " ", text: "You pet the dog. She is happy to see you!\nShe will come with you once you leave."},
        ]
    },

    DogFullTrustBring: {
        speech: [
            {speaker: " ",  text: "You will bring the dog with you once you\nleave. She looks at you expectantly.", data: {property: "DogSaved", value: true}},
        ],
    },

    Yelling: {
        speech: [
            {speaker: "Bruna and Edith", face: "girls_scared.png", text: "AHH!!!"},
            {speaker: "Juan", face: "juan_dark_scared.png", text: "!!!", data: {property: "juanPragmatic", value: true}},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Hey, who turned out the lights man?"},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "No need to go screechin' like chickens\nladies."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Lightnin' must have hit the powerlines."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "I'll get the keys for the backup generator.", publish: "maggieCoffeeEnd"},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "Heh, storm must be particularly\nharsh tonight.", publish: "harshStorm"},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "There's some important stuff I gotta\nprepare you for. Hope you can lend\na listenin' ear."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "This might sound strange, but I think\nyou ought to be on the lookout for a\nsafer location.••••••••• Just in case."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", unclickable: true, text: "Now the first thing I'd recommend is\nlending a hand to Maggie with that\ngenerator..."},
        ]
    },
    Interrupt: {
        speech: [
            {speaker: " ", face: "staticframe.png", forceProgress: true, text: "."},
            {speaker: " ", face: "ethan_dark_eye_4.png", forceProgress: true, text: ".", data: {property: "darknessCanChat", value: true}},
            {speaker: " ", face: "ethan_dark_eye_5.png", forceProgress: true, text: "."},
            {speaker: " ", face: "ethan_dark_eye_6.png", forceProgress: true, text: "."},
            {speaker: " ", face: "staticframe.png", forceProgress: true, text: ".••••••••••••••••••••••••••••••••••"},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "..."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "Son, did you feel that?"},
        ],
        branches: [
            {text: "Yes", targetNode: "InterruptChoiceOne"},
            {text: "Feel what?", targetNode: "InterruptChoiceTwo"},
        ]
    },
    InterruptChoiceOne: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "There ain't as much time left as I'd like."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "I'll get to the point. This place isn't safe.\n" +
                    "It's no ordinary storm out there."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "And these thin walls won't protect from\nanything more than rain and wind."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "You might try to find somewhere safer.\nAll the better if you bring some of the\nothers along with you.", onFinish: () => {
                    globalObjects.goalText.setColor('#FFFFFF');
                    setNewGoalText('Goal: Fix the power');
                }},
        ]
    },
    InterruptChoiceTwo: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "There's something outside in the storm.\n" +
                    "Something impossible and dangerous."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "I'll get to the point. This place isn't safe.\n" +
                    "It ain't no ordinary storm out there."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "And these thin walls won't protect from\nanything more than rain and wind."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "You might try to find somewhere safer.\nAll the better if you bring some of the\nothers along with you.", onFinish: () => {
                    globalObjects.goalText.setColor('#FFFFFF');
                    setNewGoalText('Goal: Fix the power');
                }},
        ]
    },
    WindowBroken: {
        speech: [
            {speaker: " ", text: "(I should check out that broken window first.)"},
        ]
    },
    WindowBrokenEthanSleeping: {
        speech: [
            {speaker: "You",  text: "Ethan, you there?"},
            {speaker: "",  text: "(He looks unhurt, but he's not responding)"},
        ]
    },

    WindowBrokenDiscuss: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Oh no! Was anyone hurt?"},
            {speaker: "Juan", face: "juan_normal.png", text: "I'm all good here. But there's something\nweird about this."},
            {speaker: "You", text: "What do you mean?"},
            {speaker: "Juan", face: "juan_normal.png", text: "Can't you see it? The broken glass is\nall outside, like it was sucked out."},
            {speaker: "You", text: "How is that possible?"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's getting hungry."},
            {speaker: "Edith", face: "edith_sad.png", text: "Ethan!"},
            {speaker: "Juan", face: "juan_normal.png", text: "I can fix this. Pass me that tablecloth\nand chair."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Here, should be some nails and a\nhammer in there."},
            {speaker: "Juan", face: "juan_normal.png", text: "That'll work. Come on Noah.", publish: "savePoint", param: {node: 'WindowBrokenDiscuss', num: 9}},
        ],
        branches: [
            {text: "Help fix the window", targetNode: "YouFixWindow"},
            {text: "We need to get out of here soon. No\npoint in patching things up now", targetNode: "LetJuanFixWindow"},
        ]
    },
    WindowBrokenDiscussEthanSleeping: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Oh no! Was anyone hurt?"},
            {speaker: "Juan", face: "juan_normal.png", text: "I'm all good. But you ought to check\non that guy over there."},
            {speaker: "Edith", face: "edith_sad.png", text: "Ethan! Why are you passing out now?"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "He doesn't look hurt from any glass,\nbut to fall asleep at a time like this..."},
            {speaker: "Juan", face: "juan_normal.png", text: "There's something else weird about this\ntoo. Look. The broken glass is all outside,\nlike it was sucked out."},
            {speaker: "You", text: "How is that possible?"},
            {speaker: "Juan", face: "juan_normal.png", text: "Not sure."},
            {speaker: "Juan", face: "juan_normal.png", text: "Hey pass me that tablecloth and chair.\nI can fix this."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Here, should be some nails and a\nhammer in there."},
            {speaker: "Juan", face: "juan_normal.png", text: "That'll work. Come on Noah.", param: {node: 'WindowBrokenDiscussEthanSleeping', num: 9}},
        ],
        branches: [
            {text: "Help fix the window", targetNode: "YouFixWindow"},
            {text: "We need to get out of here soon. No\npoint in patching things up now", targetNode: "LetJuanFixWindow"},
        ]
    },
    LetJuanFixWindow: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "What? And you're just gonna leave\nthe place broken like this?", publish: "showUndoPoint"},
        ],
        branches: [
            {text: "Help fix the window", targetNode: "YouFixWindow"},
            {text: "Juan can fix the\nwindow himself", targetNode: "JuanFixWindow"},
        ]
    },
    JuanFixWindow: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", unclickable: true, text: "Fine. I'll do it myself.", publish: "fixWindow", param: false},
        ],
    },
    CasparWindowBroken: {
        speech: [
            {speaker: "Caspar", face: "caspar_sad.png", text: "Looks like there's somethin' goin' on\nover there. Best check it out."},
        ]
    },

    WindowFixedJuan: {
        speech: [
            {speaker: '', text: "Juan begins boarding up the window with a\ntablecloth and nails."},
        ]
    },
    WindowFixed: {
        speech: [
            {speaker: '', text: "The window is now covered up••••••••••••••, sort of."},
        ]
    },
    YouFixWindow: {
        speech: [
            {speaker: " ", unclickable: true, text: "You help with fixing the window", publish: "fixWindow", param: true},
        ],
    },
    JuanStillFixingWindow: {
        speech: [
            {speaker: " ", text: "   (Juan is still fixing the window)"},
            {speaker: " ", text: "  (He pauses for a moment and glares at you\n  before getting back to work)"},
        ]
    },
    JuanAct3Leave: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Could've done a better job if I had my\nsteel rip claw hammer with me, but\nthis should hold."},
            {speaker: "Juan", face: "juan_normal.png", text: "...I think. "},
            {speaker: "Juan", face: "juan_normal.png", text: "Actually I'm not sure what even broke\nthis window in the first place.\nDon't see a branch or rock anywhere."},
            {dependentState: "invisibleGiant", speaker: "Juan", face: "juan_normal.png", text: "I still think it's ridiculous but...\nmaybe you were onto something about\nthat invisible giant.", publish: "JuanInfluence"},
            {dependentState: "juanPragmatic", speaker: "Juan", face: "juan_normal.png", text: "Makes me kinda nerv- ••••.•••••.•••••••uncertain.•••••••••\nAbout staying here and all."},
            {speaker: "Juan", face: "juan_normal.png", text: "What plans you got trucker?", publish: "savePoint", param: {node: 'JuanAct3Leave', num: 5}},
        ],
        branches: [
            {text: "I'm going to stay here.", targetNode: "JuanAct3Stay"},
            {text: "I'm going to leave soon.", targetNode: "JuanAct3Leave2"},
        ]
    },
    JuanAct3Leave2: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Yeah? I'm pretty handy with a compass\nand map.", publish: "JuanInfluence", onStart: () => {
                messageBus.publish('showUndoPoint');
                }},
            {speaker: "Juan", face: "juan_normal.png", text: "Wait, how many people are you planning\non taking?", publish: "savePoint", param: {node: 'JuanAct3Leave2', num: 1}},
        ],
        branches: [
            {text: "Only whoever's useful", targetNode: "JuanAct3Leave3Useful"},
            {text: "As many as I can", targetNode: "JuanAct3Leave3All"},
            {text: "What makes you think\nyou're coming along?", targetNode: "JuanAct3NoCome"},
        ]
    },

    JuanAct3Leave3Useful: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Good, got to pick your company\ncarefully in a scenario like this.", publish: 'JuanInfluence'},
            {speaker: "You", text: "So, are you coming with?\n\n\n[Easy Difficulty]", onFinish: () => {
                if (gameState.JuanInfluence >= 1) {
                    gameState.juanLeaveStatus = "onlyUseful";
                    dialogManager.showDialogNode("JuanAct3Join");
                } else {
                    gameState.juanLeaveStatus = "refuse"
                    dialogManager.showDialogNode("JuanAct3Refuse");
                }
            }},
        ],
    },

    JuanAct3Leave3UsefulFin: {
        speech: [
            {speaker: "", text: "  (Juan is ready to leave when you are, but he\n  expects you to only bring useful passengers.)"},
        ],
    },


    JuanAct3Leave3RefuseFin: {
        speech: [
            {speaker: " ", text: "   (Juan does not wish to leave with you)"},
        ]
    },

    JuanAct3Leave3AcceptFin: {
        speech: [
            {speaker: "", text: "(Juan is ready to leave when you are. He\naccepts that you will bring many others.)"},
        ]
    },

    JuanAct3Leave3All: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "What? Are you crazy? We can't\ncarry the whole team!"},
        ],
        branches: [
            {text: "They'll carry their own\nweight, don't worry", targetNode: "JuanAct3Leave3AllCarry"},
            {text: "It's my rig, it's my call", targetNode: "JuanAct3Leave3AllCall"},
        ]
    },

    JuanAct3Leave3AllCarry: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "I guess you've been talking with them\nmore than me.", publish: "JuanInfluence"},
            {speaker: "You", text: "We can cross train each other so we're all\nready for whatever's in the next town."},
            {speaker: "You", text: "So, are you coming with?"},
            {speaker: "Juan", face: "juan_normal.png", text: "...\n\n\n[Hard Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.JuanInfluence < 2) {
                        gameState.juanLeaveStatus = "refuse"
                        dialogManager.showDialogNode("JuanAct3Refuse");
                    } else if (gameState.JuanInfluence < 3) {
                        gameState.juanLeaveStatus = "softRefuse"
                        dialogManager.showDialogNode("JuanAct3SoftRefuse");
                    } else {
                        gameState.juanLeaveStatus = "accept";
                        dialogManager.showDialogNode("JuanAct3Join");
                    }
                }},
        ],
    },

    JuanAct3Refuse: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", publish: "showInfluenceSmall", text: "A big part of survival is the company\nyou keep. And I intend to keep\nfar away from you.\n(Not enough trust)", publish: "showUndoPoint"},
        ],
    },

    JuanAct3SoftRefuse: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "You got skills I'll give you that. But you\nain't going to make it if you're dragged\ndown by every person who needs help.", publish: "showUndoPoint"},
            {speaker: "Juan", face: "juan_normal.png", publish: "showInfluenceSmall", text: "Sorry but I won't be coming.\n(Not enough trust)"},
        ],
    },

    JuanAct3Join: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Can't stay here. I'm coming with.", publish: "showUndoPoint"},
        ],
    },

    JuanAct3Leave3AllCall: {
        speech: [
            {speaker: "You", text: "It's my rig, it's my call."},
            {speaker: "You", text: "They, and you, are all getting out of here together\nwith me."},
            {speaker: "You", text: "So, are you coming with?\n\n\n[Hard Difficulty]", publish: "showInfluence", onFinish: () => {
                    if (gameState.JuanInfluence < 2) {
                        gameState.juanLeaveStatus = "refuse"
                        dialogManager.showDialogNode("JuanAct3Refuse");
                    } else if (gameState.JuanInfluence < 3) {
                        gameState.juanLeaveStatus = "softRefuse"
                        dialogManager.showDialogNode("JuanAct3SoftRefuse");
                    } else {
                        gameState.juanLeaveStatus = "accept";
                        dialogManager.showDialogNode("JuanAct3Join");
                    }
                }},
        ],
    },

    JuanAct3NoCome: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "What?", publish: "showUndoPoint"},
            {speaker: "You", text: "You're not coming with me."},
            {speaker: "Juan", face: "juan_sad.png", text: "Why not? I'm useful! I have skills\nthese others don't!"},
            {speaker: "You", text: "And I have the rig.\nYou're not coming.", data: {property: "juanLeaveStatus", value: "blocked"}},
        ]
    },
    JuanAct3NoComeFin: {
        speech: [
            {speaker: " ", text: "  (Juan glares at you. Best leave him be)"},
        ]
    },

    JuanAct3Stay: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Really? Even though this place is falling\napart?", publish: "showUndoPoint"},
        ],
        branches: [
            {text: "On second thought I shouldn't\nstay here long either.", targetNode: "JuanAct3Leave2Alt"},
            {text: "Yep.", targetNode: "JuanAct3StayReally"},
        ]
    },

    JuanAct3Leave2Alt: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "If you need a guide, I'm pretty handy\nwith a compass and map."},
            {speaker: "Juan", face: "juan_normal.png", text: "Wait, how many people are you planning\non taking?", publish: "savePoint", param: {node: 'JuanAct3Leave2Alt', num: 1}},
        ],
        branches: [
            {text: "Only whoever's useful", targetNode: "JuanAct3Leave3Useful"},
            {text: "As many as I can", targetNode: "JuanAct3Leave3All"},
            {text: "What makes you think\nyou're coming along?", targetNode: "JuanAct3NoCome"},
        ]
    },

    JuanAct3StayReally: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Huh, wasn't expecting that.", publish: "showUndoPoint"},
            {speaker: "Juan", face: "juan_normal.png", text: "..."},
            {speaker: "Juan", face: "juan_normal.png", text: "I'm gonna push on out of here.\nHeard of a possible refuge spot from\nthe radio."},
            {speaker: "You", text: "You sure? The weather is only getting worse."},
            {speaker: "Juan", face: "juan_normal.png", text: "Yeah. I'll let someone know y'all are\nout here. Good luck.", onFinish: () => {
                messageBus.publish('juanLeft');
                }},
        ]
    },

    JuanAllSaved: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "You actually managed to convince\neveryone to join."},
            {dependentState: "DogSaved", speaker: "Doggo", face: "doggo_happy.png", text: "Arf!"},
            {dependentState: "DogSaved", speaker: "Juan", face: "juan_normal.png", text: "Even the dog."},
            {speaker: "Juan", face: "juan_normal.png", text: "I highly doubt you could justify every\nperson's usefulness here, but you know\nwhat? I'm impressed nonetheless."},
            {speaker: "Juan", face: "juan_happy.png", text: "I'm gonna stick with you all even if it's\njust to see what the hell you're getting\nus into."},
            {speaker: "You", text: "Glad you're still on board Juan.", onFinish: () => {
                    gameState.JuanSaved = true;
                    gameState.juanLeaveStatus = "blocked";
                    messageBus.publish('juanContinue');
                }},
        ]
    },

    JuanQuestionMulti: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "Hold up, what's with all these people?\nThis wasn't what I agreed to.", publish: "JuanInfluence", param: -1},
            {speaker: "You", text: "They're all useful members for the trip.", onFinish: () => {
                    if (gameState.BrunaSaved && gameState.EthanSaved && gameState.EdithSaved) {
                        dialogManager.showDialogNode("JuanQuestionAll");
                    } else if (gameState.EdithSaved && gameState.EthanSaved) {
                        dialogManager.showDialogNode("JuanQuestionEthanEdith");
                    } else if (gameState.BrunaSaved && gameState.EthanSaved) {
                        dialogManager.showDialogNode("JuanQuestionMultiBrunaEthan");
                    } else if (gameState.BrunaSaved && gameState.EdithSaved) {
                        dialogManager.showDialogNode("JuanQuestionBrunaEdith");
                    }
                }},
        ]
    },

    JuanQuestionMultiAccept: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hold up, what's with all these people?"},
            {speaker: "You", text: "I told you beforehand that I'm bringing as many\nas I can with me.", onFinish: () => {
                    if (gameState.BrunaSaved && gameState.EthanSaved && gameState.EdithSaved) {
                        if (gameState.juanLeaveStatus === "accept") {
                            // difficult
                            dialogManager.showDialogNode("JuanQuestionAllAccept");
                        } else {
                            // auto fail
                            dialogManager.showDialogNode("JuanQuestionAll");
                        }
                    } else if (gameState.EdithSaved && gameState.EthanSaved) {
                        dialogManager.showDialogNode("JuanQuestionEthanEdith");
                    } else if (gameState.BrunaSaved && gameState.EthanSaved) {
                        dialogManager.showDialogNode("JuanQuestionMultiBrunaEthan");
                    } else if (gameState.BrunaSaved && gameState.EdithSaved) {
                        dialogManager.showDialogNode("JuanQuestionBrunaEdith");
                    }
                }},
        ]
    },

    JuanQuestionAllAccept: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "...You really don't make this easy\nfor me.", publish: "JuanInfluence", param: -1},
            {speaker: "Juan", face: "juan_normal.png", text: "But I guess this was to be expected.\nI'll join you and the little party\nyou've got.", onFinish: () => {
                    gameState.true = false;
                    gameState.juanLeaveStatus = "accept";
                    messageBus.publish('juanContinue');
                }},
        ]
    },

    JuanQuestionAll: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "You're bringing some influencer girl,\na stoner, and his girlfriend.\nThe hell are you thinking?", publish: "JuanInfluence", param: -1},
            {speaker: "You", text: "Juan, let me explain-"},
            {speaker: "Juan", face: "juan_sad.png", text: "Shut it. You think you're going to get\nme to follow you with some sweet\nsounding nonsense."},
            {speaker: "Juan", face: "juan_sad.png", text: "But let me tell you, the company\nyou've picked won't get by two days\nwithout trouble."},
            {speaker: "Juan", face: "juan_sad.png", text: "I'm going my own way.", onFinish: () => {
                gameState.JuanSaved = false;
                gameState.juanLeaveStatus = "blocked";
                messageBus.publish('juanLeft');
            }},
            {speaker: "", text: "  (Juan is no longer coming with you)", onFinish: () => {
                    gameState.JuanSaved = false;
                messageBus.publish('juanContinue');
            }},
        ]
    },

    JuanQuestionBrunaEdith: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "You're bringing two young girls with\nyou, and they don't look like much\nto me. I question your motives.", publish: "JuanInfluence", param: -1},
            {speaker: "You", text: "Come on Juan, their names are Bruna and Edith.\nThey'll both carry their weight in this trip."},
            {speaker: "Juan", face: "juan_normal.png", text: "...\n\n\n[Hard Difficulty]",  publish: "showInfluence", onFinish: () => {
                if (gameState.JuanInfluence >= 3) {
                    dialogManager.showDialogNode("JuanQuestionBrunaEdithPass");
                } else {
                    dialogManager.showDialogNode("JuanQuestionBrunaEdithFail");
                }
                }},
        ]
    },
    JuanQuestionBrunaEdithPass: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Fine. I'll trust you on this one.\nLet's get the hell out of here.", onFinish: () => {
                    gameState.JuanSaved = true;
                    messageBus.publish('juanContinue');
                }},
        ]
    },
    JuanQuestionBrunaEdithFail: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "No. I don't like the look of this."},
            {speaker: "Juan", face: "juan_sad.png", text: "Whatever you're thinking of doing\nwith those two women, I want no\npart of."},
            {speaker: "", text: "  (Juan is no longer coming with you)", onFinish: () => {
                    gameState.JuanSaved = false;
                    messageBus.publish('juanContinue');
                }},
        ]
    },

    JuanQuestionMultiBrunaEthan: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "You're bringing an influencer girl\nand a stoner. How are they\ngoing to help?"},
            {speaker: "You", text: "Bruna still has internet and her GPS can help.\nEthan has some surprisingly good instincts as you\nmight have noticed."},
            {speaker: "Juan", face: "juan_normal.png", text: "Hmm...\n\n\n[Medium Difficulty]", publish: "showInfluence", onFinish: () => {
                if (gameState.JuanInfluence >= 2) {
                    dialogManager.showDialogNode("JuanQuestionBrunaEthanPass");
                } else {
                    dialogManager.showDialogNode("JuanQuestionGeneralFail");
                }
                }},
        ]
    },

    JuanQuestionBrunaEthanPass: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Alright, that sounds good enough.\nLet's get the hell out of here.", onFinish: () => {
                gameState.JuanSaved = true;
                messageBus.publish('juanContinue');
            }},
        ]
    },
    JuanQuestionGeneralFail: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "No. I'm not risking it with this\ngroup. You can go ahead without me."},
            {speaker: "", text: "  (Juan is no longer coming with you)", onFinish: () => {
                    gameState.JuanSaved = false;
                    messageBus.publish('juanContinue');
                }},
        ]
    },

    JuanQuestionEthanEdith: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "You're bringing the stoner kid and\nhis girlfriend. I'd like to hear\nyou explain."},
            {speaker: "You", text: "Ethan has some surprisingly good instincts as you\nmight have noticed. Edith can help keep an eye\non Ethan and make sure he's behaving."},
            {speaker: "Juan", face: "juan_sad.png", text: "Can't help but question your judgement\non this one...\n\n[Medium Difficulty]", publish: "JuanInfluence", param: -1, onFinish: () => {
                    if (gameState.JuanInfluence >= 2) {
                        dialogManager.showDialogNode("JuanQuestionEthanEdithPass");
                    } else {
                        dialogManager.showDialogNode("JuanQuestionGeneralFail");
                    }
                }},
        ]
    },

    JuanQuestionEthanEdithPass: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "Alright, that sounds good enough.\nLet's get the hell out of here.", onFinish: () => {
                    gameState.JuanSaved = true;
                    messageBus.publish('juanContinue');
                }},
        ]
    }
};
