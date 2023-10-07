let dialogList1 = {
    intro: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_happy.png', text: "Come on in honey, and close the door\nbehind you. Lord knows the rain ain\'t gonna\nlet you get any further tonight."},
            {speaker: 'Maggie', face: 'maggie_normal.png', text: "Grab a seat and I\'ll bring a coffee\nand menu right over."},
        ]
    },
    findSeat: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_normal.png',text: "Honey, just grab a seat.\nI\'ll be right with you.", data: {property: "askedSeat", value: "true"}},
            {speaker: 'You', text: "Where\'s the rest of your staff?"},
            {speaker: 'Maggie', face: 'maggie_sad.png', text: "My line cook had to call out and my...\nwell it\'s just me tonight."},
        ],
        branches: [
            {text: 'Want some help?', targetNode: "MaggieAct1Happy"},
            {text: "Rough luck, though I'm not\nsurprised with this rain.", targetNode: "MaggieAct1Okay"},
        ]
    },
    MaggieAct1Happy: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_happy.png',text: "Oh honey, that\'s sweet.\nI\'ll take care of it.", publish: "MaggieInfluence"},
            {speaker: 'Maggie', face: 'maggie_normal.png',text: "Just got to plate most of the meals now."},
        ]
    },
    MaggieAct1Okay: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_normal.png',text: "Yes, better to stay off the\nroads in weather like this."},
            {speaker: 'Maggie', face: 'maggie_normal.png',text: "It\'s got to be the worst storm\nI\'ve seen in years!"},
        ]
    },

    findSeatEnd: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_normal.png',text: "Oh, listen to me goin' on.\nYou go find a seat, and I\'ll be by\nto get your order soon."},
        ]
    },
    introEdith: {
        speech: [
            {speaker: 'Edith', face: 'edith_normal.png',text: "Sorry, this booth\'s taken."},
        ]
    },
    introEthan: {
        speech: [
            {speaker: 'Ethan', face: 'ethan_normal.png', text: "Hey man, you got a light?"},
            {speaker: 'You', text: "No, I don\'t smoke."},
            {speaker: 'Ethan', face: 'ethan_normal.png', text: "Do you shoot instead?",
                data: {property: "EthanIntroduced", value: "true"}},
        ],
        branches: [
            {text: 'Shoot... hoops?', targetNode: "EthanEdithLaugh"},
            {text: 'Yes, though you two don\'t look\nlike marksmen yourselves.', targetNode: "EthanCop"},
        ]
    },
    EthanEdithLaugh: {
        speech: [
            {speaker: 'Ethan and Edith', face: 'ethan_and_edith.png', text: "Haha!"},
            {speaker: 'Ethan', face: 'ethan_normal.png', text: "Nah man, drugs!"},
            {speaker: 'You', text: "How many drugs are you on?"},
            {speaker: 'Edith', face: 'edith_normal.png', text: "Whatever's on sale that week."},
            {speaker: 'Ethan', face: 'ethan_normal.png', text: "If you're not joining in, you might\nwant to step back man."}
        ]
    },
    EthanCop: {
        speech: [
            {speaker: 'Ethan', face: 'ethan_normal.png', text: "Whoa man, you a cop or something?"},
            {speaker: 'You', text: "I\'m on the road a lot, it pays to be prepared."},
            {speaker: 'Edith', face: 'edith_normal.png', text: "Don't you believe in... like, peace?"},
            {speaker: 'You', text: "Yes, but there's a lot of bad people out there\nwho don't."},
            {speaker: 'Ethan', face: 'ethan_happy.png', text: "You're all right man.", publish: "EthanInfluence"}
        ]
    },
    EthanActOneInstruct: {
        speech: [
            {speaker: 'Ethan', face: 'ethan_normal.png',
                text: "I think there was a free seat.•••••••••••.•••••••••••.•••••••••••\nsomewhere over there?\n(Ethan gestures everywhere lazily)",
                data: {property: "EthanAct1Fin", value: "true"}},
        ]
    },
    EthanActOneEnd: {
        speech: [
            {text: "(Ethan continues vaguely pointing everywhere)"},
        ]
    },
    JuanIntro: {
        speech: [
            {speaker: 'Juan', face: 'juan_normal.png', text: "What are you looking at?", data: {property: "juanIntroduced", value: "true"}},
            {speaker: 'You', text: "Just looking for a seat."},
            {speaker: 'Juan', face: 'juan_normal.png', text: "This booth's taken."},
            {speaker: 'You', text: ".••••.••••Not very friendly are you."},
            {speaker: 'Juan', face: 'juan_normal.png', text: "Ain't you seen the news?\nThese ain't friendly times."},
        ]
    },
    Juan1Enda: {
        speech: [
            {speaker: 'Juan', face: 'juan_normal.png', text: "Try the booth at the end.", data: {property: "juanAskedSeat", value: "true"}},
        ]
    },
    Juan1Endb: {
        speech: [
            {speaker: 'Juan', face: 'juan_normal.png', text: "The *other* end not this one."},
        ]
    },

    BrunaIntro: {
        speech: [
            {speaker: '???', face: 'bruna_normal.png', text: "I'm not doing autographs or photos\nright now.", data: {property: "brunaIntroduced", value: "true"}},
            {speaker: 'You', text: "Excuse me but who are you?"},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "Don't you know me? I'm Bruna Starr.\nI have three million followers on I-posty."},
            {speaker: 'You', text: "Sorry, I'm not on that app."},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "What an odd way to live. Would you want to\ndo a livestreamed interview with me?"},
        ],
        branches: [
            {text: 'An interview with me?', targetNode: "BrunaInterviewYes"},
            {text: "Is now really the time?", targetNode: "BrunaInterviewNo"},
        ]
    },
    BrunaInterviewYes: {
        speech: [
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "Yep! Everyone's looking for weather\n" +
                    "events right now. Turns out there's storms\n" +
                    "popping up everywhere, even back home."},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "Odd coincidence, don't you think?"},
            {speaker: 'You', text: "Where's home for you?"},
            {speaker: 'Bruna', face: 'bruna_normal.png',text: "Germany.", publish: "germanyCompare"},
            {speaker: 'You', text: "That's a long ways away."},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "I travel a lot for my work. Perhaps once the\nstorm passes we can do that interview."},
        ],
        branches: [
            {text: 'Sure', publish: "MaggieInfluence"},
            {text: "No thanks"},
        ]
    },
    BrunaInterviewNo: {
        speech: [
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "You're right, everyone's looking for weather\n" +
                    "events right now. Turns out there's storms\n" +
                    "popping up everywhere, even back home."},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "Odd coincidence, don't you think?"},
            {speaker: 'You', text: "Where's home for you?"},
            {speaker: 'Bruna', face: 'bruna_normal.png',text: "Germany.", publish: "germanyCompare"},
            {speaker: 'You', text: "That's a long ways away."},
            {speaker: 'Bruna', face: 'bruna_normal.png', text: "I travel a lot for my work. Perhaps once the\nstorm passes we can do that interview."},
        ],
        branches: [
            {text: 'Sure', publish: "MaggieInfluence"},
            {text: "No thanks"},
        ]
    },
    BrunaActOneEnd: {
        speech: [
            {speaker: ' ', text: " (Bruna is occupied with her phone)"},
        ]
    },
    CasparIntro: {
        speech: [
            {speaker: 'You', text: "Hello, mind if I sit with you?"},
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Not at all friend. Name's Caspar."},
            {speaker: 'You', text: "Like the ghost?"},
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Haha! No, no like the wise man.\nThough I can't claim to be very wise myself.\nWhat's your name son?"},
            {speaker: 'You', text: "I'm Noah."},
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Noah, huh. Nice to meet you.", onFinish: () => {
                if (gameState.brunaIntroduced && gameState.juanIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced) {
                    dialogManager.showDialogNode('CasparTalkOthersDone');
                } else {
                    dialogManager.showDialogNode('CasparTalkOthers');
                }
            }},
        ]
    },
    CasparTalkOthers: {
        speech: [
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "You might as well talk to the others while\n" +
                    "you're waiting. We're all in this storm\n" +
                    "together, so there's no point in staying\nstrangers."},
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Once you're done, there's something\n" +
                    "important I must tell you."}
        ]
    },
    CasparTalkOthersNotDone: {
        speech: [
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Come back once you're done talking to\n" +
                    "the others."},
        ]
    },
    CasparTalkOthersDone: {
        speech: [
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Did you get a chance to meet everyone else?"},
        ],
        branches: [
            {text: "Yeah", targetNode: "CasparActOneContinue"},
            {text: "Not yet", targetNode: "CasparActOneWait"},
        ]
    },
    CasparActOneWait: {
        speech: [
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "Take your time. Storm's not going away\nany time soon."},
        ],
    },
    CasparActOneContinue: {
        speech: [
            {speaker: 'You', text: "Yeah, odd crowd that's drifted in for sure.", data: {property: "CasparActOneFin", value: "true"}},
            {speaker: 'Caspar', face: 'caspar_normal.png', text: "No odder than you or me, friend."},
            {speaker: 'Maggie', face: 'maggie_normal.png', text: "Here Honey, one hot coffee.", publish: 'MaggieCoffee'},
            {speaker: 'Maggie', face: 'maggie_normal.png', forceProgress: true, text: "Sorry about the wait. What can I get\nstarted for...", publish: 'ActOneEnd'},
        ]
    },
    Yelling: {
        speech: [
            {speaker: 'Maggie', face: 'maggie_dark_scared.png', text: "--"},
            {speaker: 'Bruna', face: 'bruna_dark_scared.png', forceProgress: true, text: "AHH!!!••••••••••••••••••••••••"},
            {speaker: 'Edith', face: 'edith_dark_scared.png', instant: true, text: "AAAAHHH!!!"},
            {speaker: 'Juan', face: 'juan_dark_scared.png', instant: true, text: "!!!"},
            {speaker: 'Ethan', face: 'ethan_dark_scared.png', text: "Hey, who turned out the lights man?"},
            {speaker: 'Maggie', face: 'maggie_dark_scared.png', text: "No need to go screechin' like chickens ladies."},
            {speaker: 'Maggie', face: 'maggie_dark_scared.png', text: "Lightnin' must have hit the powerlines."},
            {speaker: 'Maggie', face: 'maggie_dark_scared.png', text: "I'll get the keys for the backup generator.", publish: 'maggieCoffeeEnd'},
        ]
    }
};
