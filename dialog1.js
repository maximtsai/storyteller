let dialogList1 = {
    intro: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Come on in honey, and close the door\nbehind you. Lord knows the rain ain\'t gonna\nlet you get any further tonight."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Grab a seat and I\'ll bring a coffee\nand menu right over."},
        ]
    },
    findSeat: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "Honey, just grab a seat.\nI\'ll be right with you.", data: {property: "askedSeat", value: "true"}},
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

    MaggieAct2ThankYou: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Honey, thank you for helping with the\ngenerator. Dinner's on the house.", data: {property: "alreadyThanked", value: "true"}},
            {speaker: " ", text: "   (Maggie serves you a delicious meal of waffles,\n   meatloaf, hashbrowns and a large milkshake)"},
        ],
        branches: [
            {text: "There were a lot of tools in the\nshed, does your staff normally\nhelp with that sort of thing?", targetNode: "MaggieAct2Sad"},
            {text: "Free dinner from a pretty lady\ncount me in!", targetNode: "MaggieAct2Happy"},
        ]
    },
    MaggieAct2Sad: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "Not so much anymore.", data: {property: "MaggieAct2FinishedMeh", value: "true"}},
        ]
    },

    MaggieAct2Happy: {
        speech: [
            {speaker: "Maggie", face: "maggie_happy.png", text: "Ha-ha, darling, you're about thirty years\ntoo young for me."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But I know men of all ages enjoy a good\nhearty meal!", publish: "MaggieInfluence", data: {property: "MaggieAct2Chat", value: "true"}},
        ]
    },

    MaggieAct2Chat: {
        speech: [
            {speaker: "You", text: "Your food is delicious.••• Where did you learn to cook?"},
            {speaker: "Maggie", face: "maggie_normal.png", text: "I actually went to culinary school. I used to\nbe a cook in a Michelin star restaurant in DC!"},
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
            {speaker: "Maggie", face: "maggie_normal.png", text: "Until•••••.•••••.•••••.••••••••••• Oh, I'm sorry.\n•••••••••••I start to ramble in my old age.", publish: "MaggieInfluence"},
        ],
        branches: [
            {text: "No, I want to hear what happened.", targetNode: "MaggieHusbandContinue"},
            {text: "We all ramble. Let me wash\nup these dishes for you.", targetNode: "MaggieDishesTwo"},
        ]
    },
    MaggieDishes: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "You finish up and just leave the dishes,•••••••\nI'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: "true"}},
        ],
    },
    MaggieDishesTwo: {
        speech: [
            {speaker: "Maggie", face: "maggie_normal.png", text: "No, you just keep walking' bout keeping\nmy customers calm. I'll take care of them.", data: {property: "MaggieAct2FinishedMeh", value: "true"}},
        ],
    },
    MaggieHusbandContinue: {
        speech: [
            {speaker: "Maggie", face: "maggie_sad.png", text: "That ridiculous man went and bought a\nfood truck. Now, this was the first I had\never heard of such a thing. "},
            {speaker: "Maggie", face: "maggie_normal.png", text: "He fixed the rusted thing up and offered\nit to me, only if I'd agree to go on a walk\nwith him."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Well, I figured a date was worth a truck."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "But then, the truck kept breaking down.\n••••••••••And I kept asking him to repair it. And he\nkept repairing it in exchange for a date."},
            {speaker: "Maggie", face: "maggie_angry.png", text: "Eventually, I realized he had that truck\nrigged, to break down in some way so he\nalways had an excuse to talk with me."},
            {speaker: "Maggie", face: "maggie_yell.png", text: "I called him a damn fool, and he came back\nwith \"I'm a fool in love with a fool. Let's just\nget married and the truck will stop\nbreaking down!\""},
            {speaker: "Maggie", face: "maggie_angry.png", text: ".."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "...."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "And I said yes."},
            {speaker: "Maggie", face: "maggie_sad.png", text: "Some people had trouble with two people\nthat different being in love."},
            {speaker: "Maggie", face: "maggie_happy.png", text: "My sweet man didn't care. We left that city\nand bought this truck stop and turned it into\none of the finest establishments in the west."},
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "I got to cook whatever I wanted, and he\nrepaired trucks as they passed through."},
            {text: "                  (Maggie sighs heavily)", publish: "MaggieInfluence", data: {property: "MaggieAct2FinishedGood", value: "true"}},
        ],
        branches: [
            {text: "Sounds like you really loved him.", targetNode: "MaggieLove"},
            {text: "That's quite the story.", targetNode: "MaggieRegret"},
        ]
    },
    MaggieLove: {
        speech: [
            {speaker: "Maggie", face: "maggie_reminisce.png", text: "Love. ••••••••••••••••••••••••••••••••I love him. •••••••••••••••••••••••••••••••••••••Even now."},
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
    Edith2Dark: {
        speech: [
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Ethan, Ethan!\nAre you alright?", data: {property: "askedEdithDark", value: "true"}},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "(insert text about being high and\nmuttering nonsense)"},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "*sigh*, coming here was a mistake."},
        ]
    },
    Edith2DarkFin: {
        speech: [
            {speaker: "Edith", face: "edith_dark_scared.png", text: "What am I going to do?"},
        ]
    },

    introEthan: {
        speech: [
            {speaker: "Ethan", face: "ethan_normal.png", text: "Hey man, you got a light?"},
            {speaker: "You", text: "No, I don\'t smoke."},
            {speaker: "Ethan", face: "ethan_normal.png", text: "Do you shoot instead?",
                data: {property: "EthanIntroduced", value: "true"}},
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
            {speaker: "Edith", face: "edith_normal.png", text: "Whatever's on sale that week."},
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
                data: {property: "EthanAct1Fin", value: "true"}},
        ]
    },
    EthanActOneEnd: {
        speech: [
            {text: "(Ethan continues vaguely pointing everywhere)"},
        ]
    },
    Ethan2Dark: {
        speech: [
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Do you hear that man?", data: {property: "askedEthanDark", value: "true"}},
            {speaker: "You", text: "Hear what?"},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Ugh, just ignore him."},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "No! Can't you hear the whispering?"},
            {speaker: "You", text: "It seems quieter in here to me now that\nthe TV's off."},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "The TV isn't off."},
            {speaker: "Edith", face: "edith_dark_scared.png", text: "Yes it is!"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "No, it's on! I'm tellin' ya!"},
        ],
        branches: [
            {text: "You're just on a bad trip.", publish: "EdithInfluence"},
            {text: "What's it showing?", targetNode: "BrunaInterviewSad" , publish: "EthanInfluence"},
        ]
    },
    Ethan2DarkFin: {
        speech: [
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Do you hear that?"},
        ]
    },

    JuanIntro: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "What are you looking at?", data: {property: "juanIntroduced", value: "true"}},
            {speaker: "You", text: "Just looking for a seat."},
            {speaker: "Juan", face: "juan_normal.png", text: "This booth's taken."},
            {speaker: "You", text: ".••••.••••Not very friendly are you."},
            {speaker: "Juan", face: "juan_normal.png", text: "Ain't you seen the news?\nThese ain't friendly times."},
        ]
    },
    Juan1Enda: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "Try the booth at the end.", data: {property: "juanAskedSeat", value: "true"}},
        ]
    },
    Juan1Endb: {
        speech: [
            {speaker: "Juan", face: "juan_normal.png", text: "The *other* end not this one."},
        ]
    },

    Juan2Dark: {
        speech: [
            {speaker: "Juan", face: "juan_dark_scared.png", text: "Can't see a thing in this damned dark."},
        ]
    },

    BrunaIntro: {
        speech: [
            {speaker: "???", face: "bruna_normal.png", text: "I'm not doing autographs or photos\nright now.", data: {property: "brunaIntroduced", value: "true"}},
            {speaker: "You", text: "Excuse me but who are you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Don't you know me? I'm Bruna Starr.\nI have three million followers on I-posty."},
            {speaker: "You", text: "Sorry, I'm not on that app."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "What? How do you keep up with people?"},
            {speaker: "You", text: "I've got a HAMM radio in my rig.\nGot a pretty good range on it too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Huh. Cool! Would you want to do a livestreamed\ninterview with me about it?"},
        ],
        branches: [
            {text: "An interview with me?", targetNode: "BrunaInterviewYes"},
            {text: "Is now really the time?", targetNode: "BrunaInterviewNo"},
        ]
    },
    BrunaInterviewYes: {
        speech: [
            {speaker: "Bruna", face: "bruna_happy.png", text: "Ja! Everyone's looking for weather\n" +
                    "events right now."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Turns out there's a lot\n" +
                    "of storms back home too."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Odd coincidence, don't you think?"},
            {speaker: "You", text: "Where's home for you?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Germany.", publish: "germanyCompare"},
            {speaker: "You", text: "That's a long ways away."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "I travel a lot for my work. Pictures in exotic\nlocals and interviews with the fascinating locals.\nLike you!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Perhaps once the storm passes we can do\nthat interview."},
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
            {speaker: "Bruna", face: "bruna_normal.png", text: "I travel a lot for my work. Pictures in exotic\nlocals and interviews with the fascinating locals.\nLike you!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Perhaps once the storm passes we can do\nthat interview."},
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
            {speaker: "You", text: "Did you see anything out the window?", data: {property: "askedBrunaDark", value: "true"}},
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "No I got blinded by my screen when the lights\nwent off. Did you record it?"},
            {speaker: "You", text: "I'm not carrying a phone or camera with me."},
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "What a very odd way to live."},
        ]
    },
    Bruna2DarkFin: {
        speech: [
            {speaker: "Bruna", face: "bruna_dark_scared.png", text: "I hope I have enough battery power for this."},
        ]
    },
    Bruna2Chat: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Do you think there will be enough power\nto charge my phone?", data: {property: "brunaChatted2", value: "true"}},
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
            {speaker: "Bruna", face: "bruna_normal.png", text: "You may like to live with stuffing in your\nears and blinders on your eyes you Dösbaddel!\nI do not!", data: {property: "bruna2ChattedAngry", value: "true"}},
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
            {speaker: "Bruna", face: "bruna_normal.png", text: ".••••••••••••••.••••••••••••••.Thank you.\nI should not have called you a\nDösbaddel either."},
            {speaker: "You", text: "Fresh start?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "Ja, fresh start.\nOh! My friend in Cairo is calling!"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She claims the Nile is flowing the wrong way."},
            {speaker: "You", text: "Huh, I'l leave you to it.", data: {property: "bruna2ChattedAngry", value: "false"}},
        ],
    },
    Bruna2Updates: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "The power outage we just had...\nIt was world-wide."},
            {speaker: "You", text: "That's not possible."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "It is! Everyone's posting about it.\nI have friends on five continents\nand they all confirmed it!"},
        ],
        branches: [
            {text: "Maybe it was a solar flare?.", targetNode: "Bruna2Solar"},
            {text: "This isn't some big prank?", targetNode: "Bruna2Prank"},
        ]
    },
    Bruna2Solar: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "Maybe. But that's not all.\nMy buddy in Buenos Aires says there's\nlava down town."},
            {speaker: "You", text: "Is that one of them island nations?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "No. There's no history of volcanos anywhere\nnear there. And yet, he just sent a video\nof it."},
            {speaker: "You", text: "Video? How close was he?"},
            {speaker: "Bruna", face: "bruna_sad.png", text: "Close. The lava was moving funny and he\nwanted to show it. But I can't get ahold\nof him now."},
            {speaker: "You", text: "Keep at it. I'm sure he's just distracted."},
        ],
    },
    Bruna2Prank: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: "No. And that's not all. Tokyo went dark\nthirty minutes ago. My friend does\nVR work there."},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She says there's something outside her\nwindow looking in."},
            {speaker: "You", text: "I'm sure it's just a critter. They still\nhave owls in Japan, right?"},
            {speaker: "Bruna", face: "bruna_normal.png", text: "She's on the 48th floor."},
            {speaker: "Bruna", face: "bruna_sad.png", text: "And she's not answering my calls anymore."},
        ],
    },
    Bruna2ChatFin: {
        speech: [
            {speaker: "Bruna", face: "bruna_normal.png", text: " (Bruna is busy checking news of disasters\npopping up around the world)"},
        ],
    },


    CasparIntro: {
        speech: [
            {speaker: "You", text: "Hello, mind if I sit with you?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Not at all friend. Name's Caspar."},
            {speaker: "You", text: "Like the ghost?"},
            {speaker: "Caspar", face: "caspar_normal.png", text: "Haha! No, no like the wise man.\nThough I can't claim to be very wise myself.\nWhat's your name son?"},
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
    CasparTalkOthersNotDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Come back once you're done talking to\n" +
                    "the others."},
        ]
    },
    CasparTalkOthersDone: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Did you get a chance to meet everyone else?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinue"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparActOneWait: {
        speech: [
            {speaker: "Caspar", face: "caspar_normal.png", text: "Take your time. Storm's not going away\nany time soon."},
        ],
    },
    CasparActOneContinue: {
        speech: [
            {speaker: "You", text: "Yeah, odd crowd that's drifted in for sure.", data: {property: "CasparActOneFin", value: "true"}},
            {speaker: "Caspar", face: "caspar_normal.png", text: "No odder than you or me, friend."},
            {speaker: "Maggie", face: "maggie_normal.png", text: "Here Honey, one hot coffee.", publish: "MaggieCoffee"},
            {speaker: "Maggie", face: "maggie_normal.png", forceProgress: true, text: "Sorry about the wait. What can I get\nstarted for...", publish: "ActOneEnd"},
        ]
    },
    Yelling: {
        speech: [
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "--"},
            {speaker: "Bruna", face: "bruna_dark_scared.png", forceProgress: true, text: "AHH!!!•••••••••••••••••••••••••••••••••"},
            {speaker: "Edith", face: "edith_dark_scared.png", forceProgress: true, text: "AAAAHHH!!!•••••••••••••••••••••••••••"},
            {speaker: "Juan", face: "juan_dark_scared.png", forceProgress: true, text: "!!!••••••••••••••••••••••••"},
            {speaker: "Ethan", face: "ethan_dark_scared.png", text: "Hey, who turned out the lights man?"},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "No need to go screechin' like chickens ladies."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "Lightnin' must have hit the powerlines."},
            {speaker: "Maggie", face: "maggie_dark_scared.png", text: "I'll get the keys for the backup generator.", publish: "maggieCoffeeEnd"},
        ]
    }
};
