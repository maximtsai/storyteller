let dialogList1 = {
    intro: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Come on in honey, and close the door\nbehind you. Lord knows the rain ain\'t\ngonna let you get any further tonight."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Grab a seat and I\'ll bring a coffee\nand menu right over."},
        ]
    },
    findSeat: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Honey, just grab a seat.\nI\'ll be right with you.", data: {property: "askedSeat", value: true}},
            {speaker: "You", text: "Where\'s the rest of your staff?"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "My line cook had to call out and my...\nwell it\'s just me tonight."},
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
            {speaker: "Maggie", face: "maggie_normal.png", text: "Yes, better to stay off the\nroads in weather like this."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "It\'s got to be the worst storm\nI\'ve seen in years!"},
        ]
    },

    MaggieAct2PowerOff: {
        speech: [
            {speaker: "You", text: "Maggie, you said you have a generator\nsomewhere?"},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Out back, but its wires are all tangled\nup. I've been meaning to fix it, but it was\nalways my late husband who was good\nat these things."},
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
            {speaker: " ", text: "   (Maggie serves you a delicious meal of waffles,\n   meatloaf, hashbrowns and a large milkshake)"},
        ],
        branches: [
            {text: "Does your staff normally help\nwith fixing things?", targetNode: "MaggieAct2Sad"},
            {text: "Free dinner from a pretty lady\ncount me in!", targetNode: "MaggieAct2Happy"},
        ]
    },
    MaggieAct2Sad: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Not so much anymore.", data: {property: "MaggieAct2Chat", value: true}},
        ]
    },

    MaggieAct2Happy: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Ha-ha, darling, you're about thirty years\ntoo young for me."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But I know men of all ages enjoy a good\nhearty meal!", publish: "MaggieInfluence", data: {property: "MaggieAct2Chat", value: true}},
        ]
    },

    MaggieAct2Chat: {
        speech: [
            {speaker: "You", text: "Your food is delicious.••• Where did you learn\nto cook?"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "I actually went to culinary school. I used\nto be a cook in a Michelin star restaurant\nin DC!"},
        ],
        branches: [
            {text: "How'd you end up clear out here?!", targetNode: "MaggieHusbandStart"},
            {text: "No wonder this food's so good!", targetNode: "MaggieSenator"},
        ]
    },
    MaggieSenator: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "I used to have senator and congressmen\nasking' for me by name!"},
        ],
        branches: [
            {text: "Then what are you doing out here?", targetNode: "MaggieHusbandStart"},
            {text: "That's amazing! Let me wash\nup these dishes for you.", targetNode: "MaggieDishes"},
        ]
    },
    MaggieHusbandStart: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "There was a handsome waiter that started\nworking at the same restaurant as me.\nHe tried everything' to get me to\nagree to a date."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Until•••.•••.•••.••••••••••• Oh, I'm sorry.\n•••••••I start to ramble in my old age.", publish: "MaggieInfluence"},
        ],
        branches: [
            {text: "No, I want to hear what happened.", targetNode: "MaggieHusbandContinue"},
            {text: "We all ramble. Let me wash\nup these dishes for you.", targetNode: "MaggieDishesTwo"},
        ]
    },
    MaggieDishes: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "You finish up and just leave the dishes,•••••••\nI'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: true}},
        ],
    },
    MaggieDishesTwo: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "No, you just keep walking' bout keeping\nmy customers calm. I'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: true}},
        ],
    },
    MaggieHusbandContinue: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "That ridiculous man went and bought a\nfood truck. Now, this was the first I had\never heard of such a thing. "},
            {speaker: "Maggie", face: "maggie_normal.png", text: "He fixed the rusted thing up and offered\nit to me, only if I'd agree to go on a walk\nwith him."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Well, I figured a date was worth a truck."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But then, the truck kept breaking down.\n••••••••••And I kept asking him to repair it. And he\nkept repairing it in exchange for a date."},
            {speaker: "Maggie", face: "maggie_angry.png", text: "Eventually, I realized he had that truck\nrigged, to break down in some way so he\nalways had an excuse to talk with me."},
            {speaker: "Maggie", face: "maggie_yell.png", text: "I called him a damn fool, and he came\nback with \"I'm a fool in love with a fool.\nLet's just get married and the truck\nwill stop breaking down!\""},
            {speaker: "Maggie", face: "maggie_angry.png", text: ".."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "And I said yes."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Some people had trouble with two people\nthat different being in love."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My sweet man didn't care. We left that\ncity and bought this truck stop and turned\nit into one of the finest establishments\nin the west."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "I got to cook whatever I wanted, and he\nrepaired trucks as they passed through."},
            {text: "                  (Maggie sighs heavily)", publish: "MaggieInfluence", data: {property: "MaggieAct2FinishedGood", value: true}},
        ],
        branches: [
            {text: "Sounds like you really loved him.", targetNode: "MaggieLove"},
            {text: "That's quite the story.", targetNode: "MaggieRegret"},
        ]
    },
    MaggieLove: {
        speech: [
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Love. ••••••••••••••••••I love him. ••••••••••••••••••••••••Even now."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But listen to me go on. I best go check on\nthe kitchen. You enjoy your dinner.", publish: "MaggieInfluence"},
        ],
    },
    MaggieRegret: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "I guess it is. You never appreciate what's\nright in front of you."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Don't make my mistake of assuming you'll\nhave enough time with your loved ones."},
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
            {speaker: "Edith", face: "edith_normal.png", text: "Sorry, this booth\'s taken."},
        ]
    },
    introEdith2: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "Sorry, Ethan can be a bit... well very\nscatterbrained at times."},
            {speaker: "Edith", face: "edith_normal.png", text: "He planned this road trip for the two of\nus to make up for... well things."},
            {speaker: "Edith", face: "edith_sad.png", text: "And now we're stuck here."},
        ]
    },
    introEdith3: {
        speech: [
            {speaker: " ", text: "  (Edith doesn't feel like talking)"},
        ]
    },
    Edith2Dark: {
        speech: [
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Ethan, Ethan!\nAre you alright?", data: {property: "askedEdithDark", value: true}},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "(insert text about being high and\nmuttering nonsense)"},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "*sigh*, coming here was a mistake."},
        ]
    },
    Edith2Chat: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "What do you want?"},
        ],
        branches: [
            {text: "Are you okay?", targetNode: "Edith2Okay"},
            {text: "Ethan was out of line.", targetNode: "Edith2Line"},
        ]
    },
    Edith2Okay: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "*sniff* Noooo. :(\nMy mom was right about hiiiimmm."},
            {speaker: "You", text: "What did she say about him?"},
            {speaker: "Edith", face: "edith_sad.png", text: "That he was a loser."},
        ],
        branches: [
            {text: "Yeah, he is.", publish: "EdithInfluenceEthanDecline"},
            {text: "This is a kind of weird\nsituation to be fair.", targetNode: "Edith2Situation"},
            {text: "What did you see in him\nin the first place?", targetNode: "Edith2SeeInHim"},
        ]
    },
    Edith2Line: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "I don't know what I was thinking dating\nhim. I should dump him. He's a loser!"},
        ],
        branches: [
            {text: "Yeah, you should.", publish: "EdithInfluenceEthanDecline"},
            {text: "This is a kind of weird\nsituation to be fair.", targetNode: "Edith2Situation"},
            {text: "What did you see in him\nin the first place?", targetNode: "Edith2SeeInHim"},
        ]
    },
    Edith2Situation: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "He can't handle normal situations either!"},
            {speaker: "Edith", face: "edith_sad.png", text: "I'm scared and he's high.\nHe's just running away like always!"},
        ],
    },
    Edith2SeeInHim: {
        speech: [
            {speaker: "Edith", face: "edith_normal.png", text: "What did I see in him.•••••••.••••••••.••••••••\nGood question.", data: {property: "edithThinking", value: true}},
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

    introEthan: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Hey man, you got a light?"},
            {speaker: "You", text: "No, I don\'t smoke."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Do you shoot instead?",
                data: {property: "EthanIntroduced", value: true}},
        ],
        branches: [
            {text: "Shoot... hoops?", targetNode: "EthanEdithLaugh"},
            {text: "Yes, though you two don\'t look\nlike marksmen yourselves.", targetNode: "EthanCop"},
        ]
    },
    EthanEdithLaugh: {
        speech: [
            {speaker: "Ethan and Edith", face: "ethan_and_edith.png", text: "Haha!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Nah man, drugs!"},
            {speaker: "You", text: "How many drugs are you on?"},
            {speaker: "Edith", face: "edith_normal.png", text: "Ethan here gets whatever's on sale\nthat week."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "If you're not joining in, you might\nwant to step back man."}
        ]
    },
    EthanCop: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Whoa man, you a cop or something?"},
            {speaker: "You", text: "I\'m on the road a lot, it pays to be prepared."},
            {speaker: "Edith", face: "edith_normal.png", text: "Don't you believe in... like, peace?"},
            {speaker: "You", text: "Yes, but there's a lot of bad people out there\nwho don't."},
            {speaker: "Ethan", face: "ethan_happy.png", text: "You're all right man.", publish: "EthanInfluence"}
        ]
    },
    EthanActOneInstruct: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png",
                text: "I think there was a free seat.•••••••••••.•••••••••••.•••••••••••\nsomewhere over there?\n(Ethan gestures everywhere lazily)",
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
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "No, it's on! I'm tellin' ya!"},
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
        ],
        branches: [
            {text: "You're just on a bad trip.", targetNode: "EdithEthan2BadTrip", publish: "EdithInfluence"},
            {text: "What's the TV showing?", targetNode: "EdithEthan2Showing" , publish: "EthanInfluence"},
        ]
    },
    EdithEthan2PartSkip: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "Noah right? Please, tell Ethan he's\njust hearing things."},
            {speaker: "Ethan", face: "ethan_sad.png", text: "The TV is on! Why can't you hear it?"},
        ],
        branches: [
            {text: "You're just on a bad trip.", targetNode: "EdithEthan2BadTrip", publish: "EdithInfluence"},
            {text: "What's the TV showing?", targetNode: "EdithEthan2Showing", publish: "EthanInfluence"},
        ]
    },

    EdithEthan2Showing: {
        speech: [
            {speaker: "Edith", face: "edith_sad.png", text: "NOTHING! He's just on a bad trip!\n" +
                    "He just needs to calm down and ride it out."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "It's big, and curious, and-"},
            {speaker: "Edith", face: "edith_sad.png", text: "NO! It's nothing!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I can hear something from your\nbelly too."},
            {speaker: "Edith", face: "edith_sad.png", text: "Shut up!", onFinish: () => {
                    dialogManager.showDialogNode("EdithEthan2Abortion");
                }},
        ],
    },
    EdithEthan2BadTrip: {
        speech: [
            {speaker: "You", text: "You're just on a bad trip. Take some deep breaths\n" +
                    "and drink some water."},
            {speaker: "Edith", face: "edith_normal.png", text: "That's what I've been telling him!\nHe never listens!"},
            {speaker: "Ethan", face: "ethan_normal.png", text: "I listen."},
            {speaker: "Edith", face: "edith_sad.png", text: "You listen but you don't hear!\nJust like... *sob*", onFinish: () => {
                dialogManager.showDialogNode("EdithEthan2Abortion");
            }},
        ],
    },
    EdithEthan2Abortion: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "I offered to pay for the abortion.\nWhat more do you want from me?"},
            {speaker: "Edith", face: "edith_sad.png", text: "Nothing. I don't want anything from\nyou any more.", onFinish: () => {
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
            {speaker: "Ethan", face: "ethan_normal.png", text: "The TV is still on."},
        ],
        branches: [
            {text: "I think you should drink\nsome water, here.", targetNode: "Ethan2Water", publish: "EthanInfluence"},
            {text: "What's it showing now?", targetNode: "Ethan2TVShowing", publish: "EthanInfluence"},
        ]
    },
    Ethan2ChatFin: {
        speech: [
            {speaker: "",  text: "   (Ethan looks more alert than usual)"},
        ]
    },
    Ethan2Water: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", forceProgress: true, unclickable: true, text: "•.••••••.••••••.••••••••••"},
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
            {speaker: "Ethan", face: "ethan_normal.png", text: "An eye. Big, cold, and with too many\ncorners...", publish: "EthanRefreshed"},
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
            {speaker: "Ethan", face: "ethan_sad.png", unclickable: true, forceProgress: true, text: "Y'know I think it's better if I just sho"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", forceProgress: true, text: "•...", publish: "startEldritchEthan"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", unclickable: true, text: "..."},
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
            {speaker: "",  text: "   (No response, his mind is far away from here.)"},
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
            {speaker: "Juan", face: "juan_dark_scared.png", text: "Can't see a thing in this damned dark."},
        ]
    },
    Juan2DarkFin: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "You felt that shake too, didn't you?"},
        ]
    },
    Juan2Chat: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Hey Trucker."},
            {speaker: "You", text: "Name's Noah."},
            {speaker: "Juan", face: "juan_normal.png", text: "Mine's Juan.\nWere you the one who got the generator\ngoing again?"},
            {speaker: "You", text: "Yeah."},
            {speaker: "Juan", face: "juan_happy.png", text: "Pretty handy. What else can you work on?", publish: "JuanInfluence"},
        ],
        branches: [
            {text: "Why are you asking?", targetNode: "Juan2Ask"},
            {text: "I'm a jack of all trades", targetNode: "Juan2Jack"},
        ]
    },
    Juan2Ask: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Things are getting weird. It's good to\nknow what skills we all have."},
            {speaker: "You", text: "What do you bring to the table?"},
            {speaker: "Juan", face: "juan_happy.png", text: "Great aim and good humor!"},
        ]
    },
    Juan2Jack: {
        speech: [
            {speaker: "Juan", face: "juan_happy.png", text: "That's good. I've got some mechanic and\ncarpentry skills myself."},
        ],
        branches: [
            {text: "That could be useful if\nanything else breaks."},
            {text: "Then why didn't you help with\nthegenerator?", targetNode: "Juan2Generator"},
        ]
    },
    Juan2Generator: {
        speech: [
            {speaker: "Juan", face: "juan_sad.png", text: "I was still assessing the situation.", publish: "JuanInfluenceDecline"},
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
            {speaker: "You", text: "Excuse me but who are you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Don't you know me? I'm Bruna Starr.\nI have three million followers on I-posty."},
            {speaker: "You", text: "Sorry, I'm not on that app."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "What? How do you keep up with people?"},
            {speaker: "You", text: "I've got a HAMM radio in my rig.\nGot a pretty good range on it too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Huh. Cool! Would you want to do a\nlivestreamed interview with me about it?"},
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
                    "home too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Odd coincidence, don't you think?"},
            {speaker: "You", text: "Where's home for you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Germany.", publish: "germanyCompare"},
            {speaker: "You", text: "That's a long ways away."},
            {speaker: "Bruna", face: "bruna_happy.png", text: "I travel a lot for my work. Pictures in\nexotic locations and interviews with the\nfascinating locals. Like you!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Perhaps once the storm passes we can\ndo that interview."},
        ],
        branches: [
            {text: "Sure", publish: "BrunaInfluence"},
            {text: "No thanks", targetNode: "BrunaInterviewSad"},
        ]
    },

    BrunaInterviewSad: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "..."},
        ]
    },

    BrunaInterviewNo: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Everyone's looking for weather\n" +
                    "events right now. Turns out there's a lot\n" +
                    "of storms back home too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Odd coincidence, don't you think?"},
            {speaker: "You", text: "Where's home for you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Germany.", publish: "germanyCompare"},
            {speaker: "You", text: "That's a long ways away."},
            {speaker: "Bruna", face: "bruna_happy.png", text: "I travel a lot for my work. Pictures in\nexotic locations and interviews with the\nfascinating locals. Like you!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Perhaps once the storm passes we can\ndo that interview."},
        ],
        branches: [
            {text: "Sure", publish: "BrunaInfluence"},
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
            {speaker: "Bruna", face: "bruna_happy.png", text: "Thank you for fixing the power!", data: {property: "brunaChatted2", value: true}},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Do you think there will be enough power\nto charge my phone?"},
            {speaker: "You", text: "Hard to say, Bruna. What's so important\non your phone anyway?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "My friends are posting updates."},
        ],
        branches: [
            {text: "Might be good to unplug for a bit!", targetNode: "Bruna2Unplug"},
            {text: "What sort of updates?", targetNode: "Bruna2Updates"},
        ]
    },
    Bruna2Unplug: {
        speech: [
            {speaker: "Bruna", face: "bruna_sad.png", text: "You may like to live with stuffing in\nyour ears and blinders on your eyes\nyou Dosbaddel! I do not!", data: {property: "bruna2ChattedAngry", value: true}},
        ],
    },

    Bruna2ChatAngry: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "What do you want?"},
        ],
        branches: [
            {text: "Nothing."},
            {text: "To apologize.", targetNode: "Bruna2ChatApology"},
        ]
    },
    Bruna2ChatApology: {
        speech: [
            {speaker: "You", text: "To apologize. I got no room to judge where\npeople turn for comfort.\nSo, sorry.", publish: "BrunaInfluence"},
            {speaker: "Bruna", face: "bruna_normal.png", text: ".••••••.•••••••.•••••Thank you.\nI should not have called you a\nDosbaddel either."},
            {speaker: "You", text: "Fresh start?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Ja, fresh start.\nOh! My friend in Cairo is calling!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She claims the Nile is flowing the\nwrong way."},
            {speaker: "You", text: "Huh, I'l leave you to it.", data: {property: "bruna2ChattedAngry", value: false}},
        ],
    },
    Bruna2ChatHopeSprings: {
        speech: [
            {speaker: "You", text: "Hey Bruna, do you know of a place called\n\"Hope Springs\"?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Let me check, H••-O••-P••-E•••• S••-P••-R••-I••-N••-G••-S•.•.•.••••••• \nIt is not too far from here, but it is\nnear the top of a mountain."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "The road is very tricky in that direction.\nWhy do you want to go there?"},
        ],
        branches: [
            {text: "I think it would be safer there\nwith everything that's going on.", targetNode: "Bruna2Safer"},
            {text: "The old man behind you told\nme to look for somewhere safer.", targetNode: "Bruna2OldMan"},
        ]
    },
    Bruna2Safer: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Now that you say it, all my friends\nliving in high elevation areas seem to\nbe doing ok!", publish: "BrunaInfluence"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "But I don't know if it is a good idea\nto drive there in this heavy rain."},
        ]
    },
    Bruna2OldMan: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Old man behind me..."},
            {speaker: "Bruna", face: "bruna_behind.png", text: "._.", publish: "radioTempQuiet"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "This is no time for joking.", publish: "radioTempQuietResume"},
        ]
    },
    Bruna2Updates: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "The power outage we just had...\nIt was world-wide."},
            {speaker: "You", text: "That's not possible."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "It is! Everyone's posting about it.\nI have friends on five continents\nand they all confirmed it!"},
        ],
        branches: [
            {text: "Maybe it was a solar flare?", targetNode: "Bruna2Solar"},
            {text: "This isn't some big prank?", targetNode: "Bruna2Prank"},
        ]
    },
    Bruna2Solar: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Maybe, but my satellite wifi still works.\n•••••Oh, my buddy in Buenos Aires says\nthere's lava erupting down town."},
            {speaker: "You", text: "Is that one of them island nations?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "No. There's no history of volcanos\nanywhere near there. And yet, he just\nsent a video of it."},
            {speaker: "You", text: "Video? How close was he?"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "Close. The lava was moving funny and he\nwanted to show it. But I can't get ahold\nof him now."},
            {speaker: "You", text: "Keep at it. I'm sure he's just distracted."},
        ],
    },
    Bruna2Prank: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "No. And that's not all. Tokyo went dark\nthirty minutes ago. My friend does\nVR work there."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She says there's something outside her\nwindow looking in."},
            {speaker: "You", text: "I'm sure it's just a critter. They still have owls\nin Japan, right?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She's on the 48th floor."},
            {speaker: "Bruna", face: "bruna_sad.png", text: "And she's not answering my calls\nanymore."},
        ],
    },
    Bruna2ChatFin: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: " (Bruna is busy with her phone. You notice\npicture after picture of disasters)"},
        ],
    },
    Bruna2ChatFinScratch: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "(Bruna is squeezing herself into the seat)"},
        ],
    },


    CasparIntro: {
        speech: [
            {speaker: "You", text: "Hello, mind if I sit with you?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Not at all friend. Name's Caspar."},
            {speaker: "You", text: "Like the ghost?"},
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
            {speaker: "Caspar", face: "caspar_normal.png", text: "You might as well talk to the others while\n" +
                    "you're waiting. We're all in this storm\n" +
                    "together, so there's no point in staying\nstrangers."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Once you're done, there's something\n" +
                    "important I must tell you."}
        ]
    },
    CasparTalkOthersDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet\neveryone else?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinue"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparTalkOthersNotDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet\neveryone else?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinueDoubt"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparActOneWait: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Take your time. Storm's not going away\nany time soon."},
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
    CasparActOneContinue: {
        speech: [
            {speaker: "You", text: "Yeah, odd crowd that's drifted in for sure.", data: {property: "CasparActOneFin", value: true}, publish: "startDark"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "No odder than you or me, friend."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Here Honey, one hot coffee.", publish: "MaggieCoffee"},
            {speaker: "Maggie", face: "maggie_normal.png", forceProgress: true, text: "Sorry about the wait. What can I get\nstarted for...••••••••••", publish: "ActOneEnd"},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...••••••••••••••••I swear I've replaced these lights not\ntwo weeks ago."},
            {speaker: "Maggie", face: "maggie_sad.png", unclickable: true, text: "Guess I'll need to get new ones\ninstalled once this storm passes."},
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
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "If memory serves me right, the red wire\nwas supposed to connect to the very\nbottom socket."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "I'm sure you could figure out the rest."},
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
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "This is my resting place and there ain't\na thing you can do to get me to leave."},
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
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "Call it the intuition of an old man.\nWhen you've been around as long as\nI have, you get a pretty good sense\nfor things."},
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
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "But we'll need the power back on\nfirst, of course."},
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
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "For starters, you could check up on that\ngenerator. Maggie's never been much for\nfixing things on her own."},
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
            {speaker: "Caspar", face: "caspar_normal.png", text: "Everyone seems a bit rattled after\nthe lights went out on us."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Why don't you go check on them?"},
            {speaker: "You", text: "You can talk with them as well as I can."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I'm not the hero who got the\nlights back on, son."},
        ],
    },
    CasparAct2WelcomeRadio: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "It's nice that you're making rounds\nwith the customers here."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Looks like a few of em still have\nsomething on their minds."},
            {speaker: "You", text: "You can talk with them as well as I can."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "But I'm not the hero who got the\nlights back on, son."},
        ],
    },

    CasparAct2WelcomeDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Go on now, I'm sure the others will calm\ndown some once you've had a chat with\nthem."},
        ],
    },
    CasparAct2DoorScratch: {
        speech: [
            {speaker: "You", text: "Hey Caspar, any idea what's behind the back door?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Who knows?\nBut remember that you'll be responsible for any\naction you decide to take with it."},
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
            {speaker: "Caspar", face: "caspar_normal.png", text: "I'd recommend checking up on everyone.\nI'm sure they've got some thoughts on\ntheir minds."},
        ],
        branches: [
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2Where"},
            {text: "If it's not safe here, why\nhaven't you left yourself?", targetNode: "CasparAct2Why"},
            {text: "Got it."},
        ]
    },
    CasparAct2Where: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Now that the radio's workin', I'd suggest\ngoing through the channels."},
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
            {speaker: "Caspar", face: "caspar_normal.png", text: "When you've settled in one place as\nlong as I have, it slowly becomes a part\nof you."},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Ain't a thing you can do to get me to\nleave at this point."},
            {speaker: "Caspar", face: "caspar_sad.png", text: "But I suppose Maggie will feel much the\nsame way. This may be a big ask, but I\nhope you can get her to safety."},
        ],
        branches: [
            {text: "What was I supposed to do again?", targetNode: "CasparAct2What"},
            {text: "Where can I find somewhere safe?", targetNode: "CasparAct2Where"},
            {text: "Got it."},
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
            {speaker: " ", text: "You try and pet the dog. She backs away from you."},
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
            {speaker: " ", text: "You place some of your leftovers in front of the dog.\nShe wolfs it down hungrily.", data: {property: "dogTrust", value: 1}},
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

    DogFullTrustSaved: {
        speech: [
            {speaker: " ", text: "You pet the dog. She is happy to see you!\nShe will come with you once you leave."},
        ]
    },

    DogOkayTrustPet: {
        speech: [
            {speaker: "Doggo", face: "doggo_happy.png", text: "   Arf!", publish: "doggoJump"},
        ]
    },

    DogFullTrustBring: {
        speech: [
            {speaker: " ",  text: "You will now bring the dog with you once\nyou leave. She looks at you expectantly.", data: {property: "dogSaved", value: true}},
        ],
    },

    Yelling: {
        speech: [
            {speaker: "Bruna and Edith", face: "girls_scared.png", text: "AHH!!!"},
            {speaker: "Juan", face: "juan_dark_scared.png", text: "!!!"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Hey, who turned out the lights man?"},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "No need to go screechin' like chickens\nladies."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Lightnin' must have hit the powerlines."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "I'll get the keys for the backup generator.", publish: "maggieCoffeeEnd"},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "Heh, storm tonight must be particularly\nharsh tonight.", publish: "harshStorm"},
            {speaker: "Caspar", face: "caspar_dark_calm.png", text: "There's some important stuff I gotta\nprepare you for. Hope you can lend\na listenin' ear."},
            {speaker: "Caspar", face: "caspar_dark_calm.png", unclickable: true, text: "This might sound strange, but I think\nyou ought to be on the lookout for\na safer location. Just in case."},
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
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "You might try to find somewhere safer.\nAll the better if you bring some of the\nothers along with you."},
        ]
    },
    InterruptChoiceTwo: {
        speech: [
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "There's something outside in the storm.\n" +
                    "Something impossible and dangerous."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "I'll get to the point. This place isn't safe.\n" +
                    "It ain't no ordinary storm out there."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "And these thin walls won't protect from\nanything more than rain and wind."},
            {speaker: "Caspar", face: "caspar_dark_scared.png", text: "You might try to find somewhere safer.\nAll the better if you bring some of the\nothers along with you."},
        ]
    },

};
