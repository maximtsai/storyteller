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
    radio2: {
        speech: [
            {speaker: ' ', text: "  (Catchy rock music is playing)"},
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
            {speaker: 'TV', size: 'small', text: "\"In our next story, Lisa is a 13 year old entrepreneur making five\n" +
                    "figures a month!\" \"...Hang on Marge, we need to jump over to\n" +
                    "weather for an update on the storms passing through. Homer?\""},
            {speaker: 'TV', size: 'small', text: "\"Thanks Bart. The rain is really coming down, however the\n" +
                    "local authorities have not declared a flooding emergency. They\n" +
                    "are encouraging everyone to stay put until the storm passes.\""},
            {speaker: 'TV', size: 'small', text: "\"Thanks Homer. So Lisa decided one day...\""},
        ]
    },
    tv2: {
        speech: [
            {speaker: 'TV', size: 'small', text: "\"Hahaha! What a cute dog trick, no wonder it went viral.\"\n" +
                    "That's right Marge, so cute. In other news we've been hearing\n" +
                    "reports that one of the live feeds of a local Peregrine Falcon\n" +
                    "nest on Heaven Towers cut out."},
            {speaker: 'TV', size: 'small', text: "Rest assured, the beloved birds are fine and the feed will\n" +
                    "be restored shortly. The images of a humanoid figure in the\n" +
                    "live feed are just an internet hoax."},
            {speaker: 'TV', size: 'small', text: "\"That nest is thirty stories in the air Homer. Who'd believe\n" +
                    "someone walking up to the nest?\" \"Who indeed. Next up we'll\n" +
                    "have some updates on the storm after this commercial break."},
        ]
    },
    tv3: {
        speech: [
            {speaker: 'TV', size: 'small', forceProgress: true, text: "\"A•a•a•a••n••d•••••• we're ••back ••to ••our ••favorite-••••••••\"\n"},
            {speaker: 'TV', size: 'large', instant: true, text: "           THIS IS AN EXTREME WEATHER\n                    EMERGENCY ALERT.", publish: "tvemergency"},
            {speaker: 'TV', size: 'large', instant: true, text: "           THIS IS AN EXTREME WEATHER\n                    EMERGENCY ALERT.\n                                   ..."},
            {speaker: 'TV', text: "ALL RESIDENTS ARE ADVISED TO SEEK\nSHELTER IN PLACE."},
            {speaker: 'TV', text: "THE FOLLOWING COUNTIES ARE UNDER\nAN EMERGENCY ALERT:  •••••••••••••••. •••••••••••••••. •••••••••••••••.\n•••••••••••••••.••••••••••••••••.\n••••••••••••••••••••••.••••••••••••••••••••••.••••••••••••••••••••", publish: "playSound", param: 'emergency2'},
            {speaker: ' ', text: "(They might as well announce it state by state\nat this point)", publish: "tvemergencyEnd"},
        ]
    },
    tv4: {
        speech: [
            {speaker: ' ', text: "   (The TV continues showing its warnings)", data: {property: "tvended", value: "true"}},
        ]
    },

    BackdoorActOne: {
        speech: [
            {speaker: '', text: "No reason to go there right now."},
        ]
    },

    ExitNoReason: {
        speech: [
            {speaker: '', text: "No reason to go back to my rig right now."},
        ]
    }
};
