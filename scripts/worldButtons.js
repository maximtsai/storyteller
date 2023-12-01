function createWorldButtons() {
    globalObjects.diner = {};
    globalObjects.diner.maggieButton = new Button({
        normal: {
            "atlas": "pixels",
            "ref": "blue_pixel.png",
            x: 350,
            y: 250,
            scaleX: 125,
            scaleY: 170,
            alpha: 0.001
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.maggieButton.getXPos());
            clickMaggie();
        }
    });
    globalObjects.diner.maggieButton.setDepth(1);
    globalObjects.diner.maggieButton.setState(DISABLE);

    // Edith
    globalObjects.diner.EdithButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1095,
            y: 390,
            scaleX: 95,
            scaleY: 170,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.EdithButton.getXPos());
            clickEdith();
        }
    });
    globalObjects.diner.EdithButton.setDepth(1);
    globalObjects.diner.EdithButton.setState(DISABLE);

    // Ethan
    globalObjects.diner.EthanButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1325,
            y: 380,
            scaleX: 100,
            scaleY: 180,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.EthanButton.getXPos());
            clickEthan();
        }
    });
    globalObjects.diner.EthanButton.setDepth(1);
    globalObjects.diner.EthanButton.setState(DISABLE);

    // Juan
    globalObjects.diner.JuanButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1875,
            y: 390,
            scaleX: 200,
            scaleY: 200,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.JuanButton.getXPos());
            clickJuan();
        }
    });

    globalObjects.diner.JuanButton.setOrigin(0.75, 0.5);
    globalObjects.diner.JuanButton.setDepth(1);
    globalObjects.diner.JuanButton.setState(DISABLE);

    // Bruna
    globalObjects.diner.BrunaButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -635,
            y: 420,
            scaleX: 100,
            scaleY: 170,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.BrunaButton.getXPos());
            clickBruna();
        }
    });
    globalObjects.diner.BrunaButton.setDepth(1);
    globalObjects.diner.BrunaButton.setState(DISABLE);

    // Bruna
    globalObjects.diner.CasparButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -1160,
            y: 420,
            scaleX: 110,
            scaleY: 170,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('chat_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.CasparButton.getXPos());
            clickCaspar();
        }
    });
    globalObjects.diner.CasparButton.setDepth(1);
    globalObjects.diner.CasparButton.setState(DISABLE);

    // Exit
    globalObjects.diner.ExitButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 2195,
            y: 360,
            scaleX: 100,
            scaleY: 200,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.ExitButton.getXPos());
            clickExit();
        }
    });
    globalObjects.diner.ExitButton.setDepth(1);
    globalObjects.diner.ExitButton.setState(DISABLE);

    globalObjects.diner.BackdoorButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -190,
            y: 315,
            scaleX: 115,
            scaleY: 260,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            if (gameState.scratchingDoor || true) {
                shiftOver(globalObjects.diner.BackdoorButton.getXPos(), true);
            } else {
                shiftOver(globalObjects.diner.BackdoorButton.getXPos());
            }
            clickBackdoor();
        }
    });
    globalObjects.diner.BackdoorButton.setDepth(1);
    globalObjects.diner.BackdoorButton.setState(DISABLE);

    globalObjects.diner.IndoorButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: -278,
            y: 2410,
            scaleX: 110,
            scaleY: 215,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            clickIndoor();
        }
    });
    globalObjects.diner.IndoorButton.setDepth(1);

    globalObjects.diner.ShedButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1820,
            y: 2400,
            scaleX: 105,
            scaleY: 200,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            enterShed();
        }
    });
    globalObjects.diner.ShedButton.setDepth(1);

    globalObjects.diner.graveButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 2125,
            y: 2540,
            scaleX: 60,
            scaleY: 75,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            clickGravestone();
        }
    });
    globalObjects.diner.graveButton.setDepth(1);

    globalObjects.diner.ExitShedButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 325,
            y: 4355,
            scaleX: 110,
            scaleY: 205,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            exitShed();
        }
    });
    globalObjects.diner.ExitShedButton.setDepth(1);

    globalObjects.diner.GeneratorButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 540,
            y: 4510,
            scaleX: 75,
            scaleY: 70,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            clickGenerator();
        }
    });
    globalObjects.diner.GeneratorButton.setDepth(1);

    globalObjects.diner.TVButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 1325,
            y: 80,
            scaleX: 100,
            scaleY: 80,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.TVButton.getXPos());
            clickTV();
        }
    });
    globalObjects.diner.TVButton.setDepth(1);
    globalObjects.diner.TVButton.setState(DISABLE);

    globalObjects.diner.RadioButton = new Button({
        normal: {
            atlas: "pixels",
            ref: "blue_pixel.png",
            x: 800,
            y: 385,
            scaleX: 80,
            scaleY: 90,
            alpha: 0.1
        },
        hover: {
            alpha: 0.05
        },
        press: {
            alpha: 0.12
        },
        disable: {
            alpha: 0.001
        },
        onHover: () => {
            globalObjects.exclamation.setAlpha(0.75);
            globalObjects.exclamation.setFrame('hand_icon.png');
        },
        onHoverOut: () => {
            globalObjects.exclamation.setAlpha(0);
        },
        onMouseUp() {
            shiftOver(globalObjects.diner.RadioButton.getXPos());
            clickRadio();
        }
    });
    globalObjects.diner.RadioButton.setDepth(1);
    globalObjects.diner.RadioButton.setState(DISABLE);
}

function enableDinerButtons() {
    for (let i in globalObjects.diner) {
        let button = globalObjects.diner[i];
        button.setState(NORMAL);
    }
}


function clickMaggie() {
    if (gameState.currentScene == 1) {
        if (!gameState.askedSeat) {
            dialogManager.showDialogNode('findSeat');
        } else {
            dialogManager.showDialogNode('findSeatEnd');
        }
    } else if (gameState.currentScene == 2) {
        if (gameState.powerOff) {
            if (gameState.hasBackdoorKey) {
                dialogManager.showDialogNode('MaggieAct2PowerOffFin');
            } else {
                gameState.hasBackdoorKey = true;
                dialogManager.showDialogNode('MaggieAct2PowerOff');
            }
        }  else if (gameState.MaggieAct2FinishedGood) {
            dialogManager.showDialogNode('MaggieAct2FinishedGood');

        } else if (gameState.MaggieAct2FinishedMeh) {
            dialogManager.showDialogNode('MaggieAct2FinishedMeh');
        } else if (gameState.MaggieAct2Chat) {
            dialogManager.showDialogNode('MaggieAct2Chat');
        } else if (!gameState.alreadyThanked) {
            dialogManager.showDialogNode('MaggieAct2ThankYou');
        } else {
            dialogManager.showDialogNode('MaggieAct2FinishedMeh');
        }

    } else if (gameState.currentScene == 3) {
        if (gameState.windowBroken) {
            dialogManager.showDialogNode('WindowBroken');
        }
    }


}

function clickEdith() {
    if (gameState.currentScene == 1) {
        gameState.EdithIntroduced = true;
        if (gameState.EthanAct1Fin) {
            if (gameState.EdithAct1Fin) {
                dialogManager.showDialogNode('introEdith3');
            } else {
                gameState.EdithAct1Fin = true;
                dialogManager.showDialogNode('introEdith2');
            }
        } else {
            dialogManager.showDialogNode('introEdith');
        }
    } else if (gameState.currentScene == 2) {
        if (gameState.EthanEdithSeparated) {
            if (gameState.edithThinking) {
                if (gameState.scratchingDoor) {
                    dialogManager.showDialogNode('Edith2ChatFinScratch');
                } else {
                    dialogManager.showDialogNode('Edith2ChatFinThought');
                }
            } else if (gameState.chatted2Edith) {
                if (gameState.scratchingDoor) {
                    dialogManager.showDialogNode('Edith2ChatFinScratch');
                } else {
                    dialogManager.showDialogNode('Edith2ChatFin');
                }
            } else {
                gameState.chatted2Edith = true;
                dialogManager.showDialogNode('Edith2Chat');
            }

        } else if (!gameState.askedEthanEdithTV) {
            gameState.askedEthanEdithTV = true;
            shiftOver(globalObjects.diner.EthanButton.getXPos());
            if (gameState.powerOff) {
                dialogManager.showDialogNode('EdithEthan2Dark');
            } else {
                gameState.EthanEdithSeparated = true;
                dialogManager.showDialogNode('EdithEthan2');
            }
        } else {
            if (gameState.powerOff) {
                dialogManager.showDialogNode('EdithEthan2DarkFin');
            } else {
                gameState.EthanEdithSeparated = true;
                dialogManager.showDialogNode('EdithEthan2PartSkip');
            }
        }
    } else if (gameState.currentScene == 3) {
        if (gameState.EdithRefuse) {
            dialogManager.showDialogNode('Edith3Refused');
        } else if (gameState.EdithSaved) {
            dialogManager.showDialogNode('Edith3LeaveComeWithSuccess');
        } else if (gameState.windowFixed) {
            if (gameState.ethanSleeping) {
                if (gameState.edithChattedEthanCatatonic) {
                    dialogManager.showDialogNode('Edith3LeaveQuickYesNoCatatonic');
                } else {
                    gameState.edithChattedEthanCatatonic = true;
                    dialogManager.showDialogNode('Edith3LeaveCatatonic');
                }
            } else if (gameState.edithThinking) {
                if (gameState.EthanSaved) {
                    dialogManager.showDialogNode('Edith3LeaveThinkingPromiseEthan');
                } else {
                    dialogManager.showDialogNode('Edith3LeaveThinking');
                }
            } else {
                if (gameState.EthanSaved) {
                    dialogManager.showDialogNode('Edith3LeaveNormalPlusEthan');
                } else {
                    dialogManager.showDialogNode('Edith3LeaveNormal');
                }
            }
        } else if (gameState.windowBroken) {
            if (gameState.ethanSleeping) {
                dialogManager.showDialogNode('Edith3Catatonic');
            } else {
                dialogManager.showDialogNode('WindowBroken');
            }
        } else if (gameState.edithThinking) {
            dialogManager.showDialogNode('Edith3Thinking');
        } else {
            dialogManager.showDialogNode('EdithDefault');
        }
    } else {
        dialogManager.showDialogNode('EdithDefault');
    }
}

function clickEthan() {
    if (gameState.currentScene == 1) {
        if (gameState.EthanAct1Fin) {
            dialogManager.showDialogNode('EthanActOneEnd');
        } else if (gameState.EthanIntroduced) {
            dialogManager.showDialogNode('EthanActOneInstruct');
        } else {
            dialogManager.showDialogNode('introEthan');
        }
    } else if (gameState.currentScene == 2) {
        if (gameState.EthanEdithSeparated) {
            if (gameState.canAskEthanEldritch) {
                if (gameState.ethanEldritchAsked) {
                    dialogManager.showDialogNode('Ethan2ChatFinEldritch');
                } else {
                    dialogManager.showDialogNode('Ethan2Eldritch');
                }
            } else if (gameState.ethan2Chatted) {
                dialogManager.showDialogNode('Ethan2ChatFin');
            } else {
                gameState.ethan2Chatted = true;
                dialogManager.showDialogNode('Ethan2Chat');
            }
        } else if (!gameState.askedEthanEdithTV) {
            gameState.askedEthanEdithTV = true;
            shiftOver(globalObjects.diner.EthanButton.getXPos());
            if (gameState.powerOff) {
                dialogManager.showDialogNode('EdithEthan2Dark');
            } else {
                gameState.EthanEdithSeparated = true;
                dialogManager.showDialogNode('EdithEthan2');
            }
        } else {
            if (gameState.powerOff) {
                dialogManager.showDialogNode('EdithEthan2DarkFin');
            } else {
                gameState.EthanEdithSeparated = true;
                dialogManager.showDialogNode('EdithEthan2PartSkip');
            }
        }

    } else if (gameState.currentScene == 3) {
        if (gameState.windowFixed) {
            if (gameState.ethanBlocked) {
                dialogManager.showDialogNode('Ethan3Blocked');
            } else {
                dialogManager.showDialogNode('Ethan3Chat');
            }
        } else if (gameState.windowBroken) {
            if (gameState.ethanSleeping) {
                dialogManager.showDialogNode('WindowBrokenEthanSleeping');
            } else {
                dialogManager.showDialogNode('WindowBroken');
            }
        } else if (gameState.ethanSleeping) {
            dialogManager.showDialogNode('Ethan3Catatonic');
        }
    }
}

function clickJuan() {
    if (gameState.currentScene == 1) {
        if (!gameState.juanIntroduced) {
            dialogManager.showDialogNode('JuanIntro');
        } else if (gameState.juanAskedSeat) {
            dialogManager.showDialogNode('Juan1Endb');
        } else {
            dialogManager.showDialogNode('Juan1Enda');
        }
    } else if (gameState.currentScene == 2) {
        if (gameState.powerOff) {
            if (gameState.juanDarkTalked) {
                dialogManager.showDialogNode('Juan2DarkFin');
            } else {
                gameState.juanDarkTalked = true;
                dialogManager.showDialogNode('Juan2Dark');
            }
        } else {
            if (gameState.juan2Chatted) {
                if (gameState.scratchingDoor) {
                    dialogManager.showDialogNode('Juan2ChatFinScratch');
                } else {
                    dialogManager.showDialogNode('Juan2ChatFin');
                }
            } else {
                gameState.juan2Chatted = true;
                dialogManager.showDialogNode('Juan2Chat');
            }
        }
    } else if (gameState.currentScene == 3) {
        if (gameState.windowFixed) {
            if (gameState.juanLeaveStatus) {
                switch(gameState.juanLeaveStatus) {
                    case "blocked":
                        dialogManager.showDialogNode('JuanAct3NoComeFin');
                        break;
                    case "onlyUseful":
                        dialogManager.showDialogNode('JuanAct3Leave3UsefulFin');
                        break;
                    case "refuse":
                        dialogManager.showDialogNode('JuanAct3Leave3RefuseFin');
                        break;
                    case "softRefuse":
                        dialogManager.showDialogNode('JuanAct3Leave3RefuseFin');
                        break;
                    case "accept":
                        dialogManager.showDialogNode('JuanAct3Leave3AcceptFin');
                        break;

                    default:
                }
            } else if (gameState.youHelpedWindowFix) {
                dialogManager.showDialogNode('JuanAct3Leave');
            } else {
                dialogManager.showDialogNode('JuanStillFixingWindow');
            }

        } else if (gameState.windowBroken) {
            if (gameState.ethanSleeping) {
                dialogManager.showDialogNode('WindowBrokenDiscussEthanSleeping');
            } else {
                dialogManager.showDialogNode('WindowBrokenDiscuss');
            }
        } else {
            dialogManager.showDialogNode('JuanDefault');
        }
    }
}

function clickBruna() {
    if (gameState.currentScene == 1) {
        if (gameState.CasparActOneFin) {
            // do nothing
        }else if (!gameState.brunaIntroduced) {
            dialogManager.showDialogNode('BrunaIntro');
        } else {
            dialogManager.showDialogNode('BrunaActOneEnd');
        }
    } else if (gameState.currentScene == 2) {
        if (!gameState.darknessCanChat) {
            return;
        }
        if (gameState.powerOff) {
            if (gameState.askedBrunaDark) {
                dialogManager.showDialogNode('Bruna2DarkFin');
            } else {
                dialogManager.showDialogNode('Bruna2Dark');
            }
        } else {
            if (!gameState.brunaChatted2) {
                dialogManager.showDialogNode('Bruna2Chat');
            } else if (gameState.bruna2ChattedAngry) {
                dialogManager.showDialogNode('Bruna2ChatAngry');
            } else if (gameState.radio2Done && !gameState.brunaHopeSpringsChatted) {
                gameState.brunaHopeSpringsChatted = true;
                dialogManager.showDialogNode('Bruna2ChatHopeSprings');
            } else {
                if (gameState.scratchingDoor) {
                    dialogManager.showDialogNode('Bruna2ChatFinScratch');
                } else {
                    dialogManager.showDialogNode('Bruna2ChatFin');
                }
            }
        }
    } else if (gameState.currentScene == 3) {
        let canAskAboutRadio = gameState.radio2Done || gameState.radio3Done;
        if (gameState.BrunaRefuse) {
            dialogManager.showDialogNode('Bruna3Refused');
        } else if (gameState.BrunaSaved) {
            dialogManager.showDialogNode('Bruna3Success');
        } else if (gameState.windowFixed) {
            if (gameState.BrunaFortify) {
                if (gameState.brunaHopeSpringsChatted) {
                    // You know of Hope Springs
                    dialogManager.showDialogNode('Bruna3DecisionFortify');
                } else if (canAskAboutRadio) {
                    dialogManager.showDialogNode('Bruna3DecisionFortifyWithRadio');
                } else {
                    dialogManager.showDialogNode('Bruna3DecisionFortifyDead');
                }
            } else {
                if (gameState.brunaHopeSpringsChatted) {
                    // You know of Hope Springs
                    dialogManager.showDialogNode('Bruna3Decision');
                } else if (canAskAboutRadio) {
                    dialogManager.showDialogNode('Bruna3DecisionWithRadio');
                } else {
                    dialogManager.showDialogNode('Bruna3DecisionDead');
                }
            }
        } else if (gameState.windowBroken) {
            dialogManager.showDialogNode('WindowBroken');
        } else {
            dialogManager.showDialogNode('BrunaDefault');
        }
    }
}

function clickCaspar() {
    if (gameState.currentScene == 1) {
        if (gameState.CasparActOneFin) {
            // do nothing.
        } else if (!gameState.casparIntroduced) {
            gameState.casparIntroduced = true;
            dialogManager.showDialogNode('CasparIntro');
        } else {
            if (gameState.brunaIntroduced && gameState.juanIntroduced && gameState.EthanIntroduced && gameState.EdithIntroduced) {
                dialogManager.showDialogNode('CasparTalkOthersDone');
            } else {
                dialogManager.showDialogNode('CasparTalkOthersNotDone');
            }
        }
    } else if (gameState.currentScene == 2) {
        if (!gameState.darknessCanChat) {
            return;
        }
        if (gameState.powerOff) {
            if (gameState.viewedGenerator) {
                dialogManager.showDialogNode('CasparAct2DarkGenerator');
            } else {
                dialogManager.showDialogNode('CasparAct2DarkBranches');
            }
        } else {
            if (gameState.scratchingDoor) {
                if (gameState.caspar2ScratchDoored) {
                    dialogManager.showDialogNode('CasparAct2DoorScratchFin');
                } else {
                    gameState.caspar2ScratchDoored = true;
                    dialogManager.showDialogNode('CasparAct2DoorScratch');
                }
            } else if (gameState.caspar2Welcomed) {
                dialogManager.showDialogNode('CasparAct2Ask');
            } else {
                gameState.caspar2Welcomed = true;
                let numChatCount = 0;
                if (gameState.EthanEdithSeparated) {
                    numChatCount++;
                }
                if (gameState.chatted2Edith) {
                    numChatCount++;
                }
                if (gameState.juan2Chatted) {
                    numChatCount++;
                }
                if (gameState.brunaChatted2) {
                    numChatCount++;
                }
                if (numChatCount >= 2) {
                    dialogManager.showDialogNode('CasparAct2WelcomeRadio');
                } else {
                    dialogManager.showDialogNode('CasparAct2Welcome');
                }
            }

        }
    } else if (gameState.currentScene == 3) {
        let knowsFinalDest = gameState.radio2Done || gameState.radio3Done || gameState.askedCasparRadio;
        if (gameState.windowFixed) {
            if (gameState.BrunaSaved && gameState.EdithSaved && gameState.EthanSaved && gameState.juanLeaveStatus == "accept") {
                dialogManager.showDialogNode('Caspar3Final');
            } else if (gameState.caspar3ChatDone) {
                dialogManager.showDialogNode('Caspar3Waiting');
            } else if (knowsFinalDest) {
                dialogManager.showDialogNode('CasparAct3Final');
            } else {
                dialogManager.showDialogNode('CasparAct3FinalNoDest');
            }
        } else if (gameState.windowBroken) {
            dialogManager.showDialogNode('CasparWindowBroken');
        }
    }
}

function clickDog() {
    if (!gameState.dogTrust) {
        dialogManager.showDialogNode('DogNotTrust');
        PhaserScene.tweens.add({
            targets: [gameCharacters.dog],
            x: "-=30",
            ease: 'Quad.easeOut',
            duration: 400,
            onComplete: () => {
                PhaserScene.tweens.add({
                    delay: 300,
                    targets: [gameCharacters.dog],
                    x: "+=30",
                    ease: 'Quad.easeInOut',
                    duration: 750,
                });
            }
        });
    } else if (gameState.dogTrust == 2) {
        if (gameState.dogSaved) {
            dialogManager.showDialogNode('DogFullTrustSaved');
        } else {
            dialogManager.showDialogNode('DogFullTrust');
        }
        PhaserScene.tweens.add({
            targets: [gameCharacters.dog],
            y: "-=50",
            ease: 'Cubic.easeOut',
            duration: 220,
            yoyo: true
        });
    } else {
        dialogManager.showDialogNode('DogOkayTrust');
    }
}

function clickExit() {
    if (gameState.currentScene == 1) {
        dialogManager.showDialogNode('ExitNoReason');
    } else if (gameState.currentScene == 2) {
        dialogManager.showDialogNode('ExitSceneTwo');
    } else if (gameState.currentScene == 3) {
        if (gameState.goodEndLocked) {
            dialogManager.showDialogNode('ExitSceneThreeNoStay');
        } else {
            dialogManager.showDialogNode('ExitSceneThree');
        }
    }
}

function clickRadio() {
    if (gameState.powerOff) {
        dialogManager.showDialogNode('radioPowerless');
        return;
    }
    if (!globalObjsTemp.radio) {
        PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.height - 180, 'blackPixel');
        updateManager.addFunction(updateRadio);
        globalObjsTemp.radio = {
            radioClickBlocker: {},
            radioDeviceButtonBlocker: {},
            knobButton: {},
            backing: PhaserScene.add.sprite(gameConsts.halfWidth, gameConsts.halfHeight, 'radio', 'backing.png'),
            indicator: PhaserScene.add.sprite(gameConsts.halfWidth + 122.5, gameConsts.halfHeight + 70, 'misc', 'indicator.png'),
            knob: PhaserScene.add.sprite(gameConsts.halfWidth + 122.5, gameConsts.halfHeight + 70, 'radio', 'knob.png'),
            bar: PhaserScene.add.sprite(386, gameConsts.halfHeight - 148, 'radio', 'bar.png'),
            cover: PhaserScene.add.sprite(gameConsts.halfWidth + 7, gameConsts.halfHeight - 150, 'radio', 'cover.png'),
            arrow: PhaserScene.add.sprite(gameConsts.halfWidth + 7, gameConsts.halfHeight - 150, 'misc', 'guide_arrow.png'),
        };
        if (globalObjsTemp.radioStartX) {
            globalObjsTemp.radio.bar.x = globalObjsTemp.radioStartX;
        }
        // 206 leftmost = 88,
        // 235.75 = 90 slowwalk, 266.5,
        // 294.25 = 94 dabbda,
        // 326 = 96 guitarboogieshuffle,
        // 356 = 98 secret
        // 386.25 = 100,
        // 446.75 = 104, 506 = 108
        if (!globalObjsTemp.radioStatic1) {
            globalObjsTemp.radioStatic1 = playSound('radiostatic1', 0, true);
            globalObjsTemp.radioStatic2 = playSound('radiostatic2', 0, true);
        }
        globalObjsTemp.radio.radioClickBlocker = new Button({
            normal: {
                ref: "blackPixel",
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight,
                alpha: 0.01,
                scaleX: 5000,
                scaleY: 1000
            },
            hover: {
                alpha: 0.15
            },
            press: {
                alpha: 0
            },
            disable: {
                alpha: 0
            },
            onMouseUp: () => {
                leaveRadio();
            }
        });
        globalObjsTemp.radio.radioDeviceButtonBlocker = new Button({
            normal: {
                ref: "whitePixel",
                x: gameConsts.halfWidth,
                y: gameConsts.halfHeight + 4,
                alpha: 0.001,
                scaleX: 307,
                scaleY: 253
            },
            disable: {
                alpha: 0
            },
            onMouseUp: () => {
                if (globalObjsTemp.radio.indicator.alpha == 1) {
                    globalObjsTemp.radio.indicator.setScale(1.4);
                    globalObjsTemp.radio.indicator.alpha = 0.5;
                    PhaserScene.tweens.add({
                        targets: globalObjsTemp.radio.indicator,
                        alpha: 0,
                        ease: 'Cubic.easeOut',
                        scaleX: 2.4,
                        scaleY: 2.4,
                        duration: 900,
                        onComplete: () => {
                            globalObjsTemp.radio.indicator.setScale(1);
                            globalObjsTemp.radio.indicator.alpha = 1;
                        }
                    });
                }
            }
        });
        globalObjsTemp.radio.radioDeviceButtonBlocker.setDepth(100);
        globalObjsTemp.radio.radioDeviceButtonBlocker.setScrollFactor(0, 0);

        globalObjsTemp.radio.knobButton = new Button({
            normal: {
                ref: "whitePixel",
                x: globalObjsTemp.radio.knob.x,
                y: globalObjsTemp.radio.knob.y,
                alpha: 0.001,
                scaleX: 140,
                scaleY: 140
            },
            disable: {
                alpha: 0
            },
            isDraggable: true,
            onHover: () => {
                let distFromKnobX = globalObjsTemp.radio.knob.x - gameVars.mouseposx;
                let distFromKnobY = globalObjsTemp.radio.knob.y - gameVars.mouseposy;
                let distFromKnob = Math.sqrt(distFromKnobX * distFromKnobX + distFromKnobY * distFromKnobY);
                if (distFromKnob <= 140) {
                    globalObjsTemp.radio.knob.setScale(1.012);
                }
            },
            onHoverOut: () => {
                globalObjsTemp.radio.knob.setScale(1);
            },
            onMouseDown: () => {
                let distFromKnobX = globalObjsTemp.radio.knob.x - gameVars.mouseposx;
                let distFromKnobY = globalObjsTemp.radio.knob.y - gameVars.mouseposy;
                let distFromKnob = Math.sqrt(distFromKnobX * distFromKnobX + distFromKnobY * distFromKnobY);
                if (distFromKnob > 140) {
                    globalObjsTemp.radio.knobButton.onDrop();
                } else {
                    gameVars.radioDragged = true;
                    let dragStartPosX = distFromKnobX;
                    let dragStartPosY = distFromKnobY;
                    if (distFromKnob < 60) {
                        let multAmt = 60 / (distFromKnob + 0.01);
                        dragStartPosX *= multAmt;
                        dragStartPosY *= multAmt;
                    }
                    console.log(dragStartPosX, dragStartPosY, distFromKnob);
                    globalObjsTemp.radio.arrow.setPosition(globalObjsTemp.radio.knob.x - dragStartPosX, globalObjsTemp.radio.knob.y - dragStartPosY);
                    globalObjsTemp.radio.arrow.alpha = 1;
                    globalObjsTemp.radio.arrow.setScale(0.05, 1);
                }
            },
            onDrop: () => {
                gameVars.radioDragged = false;
                globalObjsTemp.radio.arrow.alpha = 0;
                globalObjsTemp.radio.knob.setScale(1);
                globalObjsTemp.radio.knobButton.setPos(globalObjsTemp.radio.knob.x, globalObjsTemp.radio.knob.y);
                // actually do nothing
            }
        });
        globalObjsTemp.radio.knobButton.setScrollFactor(0, 0);
        for (let i in globalObjsTemp.radio) {
            globalObjsTemp.radio[i].scrollFactorX = 0;
            globalObjsTemp.radio[i].setDepth(100);
        }
        globalObjsTemp.radio.radioClickBlocker.setDepth(99);
        globalObjsTemp.radio.arrow.setOrigin(-0.05, 0.5);
        globalObjsTemp.radio.arrow.alpha = 0;

    }
    openRadio();
}

function updateRadio(deltaTime) {
    if (gameVars.radioDragged) {
        let goalX = gameVars.mouseposx;
        let goalY = gameVars.mouseposy;

        let diffX = goalX - globalObjsTemp.radio.arrow.x;
        let diffY = goalY - globalObjsTemp.radio.arrow.y;
        let arrowToKnobX = globalObjsTemp.radio.arrow.x - globalObjsTemp.radio.knob.x;
        let arrowToKnobY = globalObjsTemp.radio.arrow.y - globalObjsTemp.radio.knob.y;
        let distArrowToKnob = Math.sqrt(arrowToKnobX * arrowToKnobX + arrowToKnobY * arrowToKnobY);
        let dist = Math.sqrt(diffX * diffX + diffY * diffY);
        globalObjsTemp.radio.arrow.setRotation(Math.atan2(diffY, diffX));
        globalObjsTemp.radio.arrow.setScale(Math.max(0.1, Math.min(1, dist * 0.01)), 1)
        let dotProd = arrowToKnobY * -diffX + arrowToKnobX * diffY;
        let rotAmt = 0;
        let arrowPositionAngle = Math.atan2(arrowToKnobY, arrowToKnobX);

        let dragMult = Math.max(1, dist / 80);
        if (dotProd > 400 * dragMult) {
            rotAmt = (deltaTime * 0.75 + 0.25) * 0.033;
            if (globalObjsTemp.radio.bar.x >= 506) {
                globalObjsTemp.radio.bar.x = 506;
                rotAmt = 0;
            }
        } else if (dotProd < -400 * dragMult) {
            rotAmt = (deltaTime * 0.75 + 0.25) * -0.033;
            if (globalObjsTemp.radio.bar.x <= 206) {
                globalObjsTemp.radio.bar.x = 206
                rotAmt = 0;
            }
        }

        globalObjsTemp.radio.knob.rotation += rotAmt;
        globalObjsTemp.radio.bar.x += rotAmt * 18;
        adjustRadioUpdate(globalObjsTemp.radio.bar.x);

        globalObjsTemp.radio.arrow.setPosition(Math.cos(arrowPositionAngle + rotAmt) * distArrowToKnob + globalObjsTemp.radio.knob.x, globalObjsTemp.radio.knob.y + Math.sin(arrowPositionAngle + rotAmt) * distArrowToKnob)
    }
}

function resetRadioPosition() {
    if (globalObjsTemp.radio) {
        globalObjsTemp.radio.bar.x = 418;
        adjustRadioUpdate(globalObjsTemp.radio.bar.x);
    } else {
        globalObjsTemp.radioStartX = 418;
    }
}

function leaveRadio() {
    globalObjects.moveRightBtn.setState(NORMAL);
    globalObjects.moveLeftBtn.setState(NORMAL);
    for (let i in globalObjsTemp.radio) {
        globalObjsTemp.radio[i].visible = false;
    }
    globalObjsTemp.radio.radioClickBlocker.setState(DISABLE);
    globalObjsTemp.radio.radioDeviceButtonBlocker.setState(DISABLE);
    globalObjsTemp.radio.knobButton.setState(DISABLE);
    if (!globalObjsTemp.noPower) {
        setRadioVolume(0.75);
    }
}

function openRadio() {
    globalObjects.moveRightBtn.setState(DISABLE);
    globalObjects.moveLeftBtn.setState(DISABLE);
    for (let i in globalObjsTemp.radio) {
        globalObjsTemp.radio[i].visible = true;
    }
    globalObjsTemp.radio.radioClickBlocker.setState(NORMAL);
    globalObjsTemp.radio.radioDeviceButtonBlocker.setState(NORMAL);
    globalObjsTemp.radio.knobButton.setState(NORMAL);

    if (!globalObjsTemp.noPower) {
        setRadioVolume(1);
    }
}

function adjustRadioUpdate(barPos) {
    let distToObj = 99;
    let distToClosestObj = 99;
    let closestObj = null;
    for (let i in globalObjsTemp.songs) {
        distToObj = Math.abs(i - barPos);
        if (distToObj < distToClosestObj) {
            distToClosestObj = distToObj;
            closestObj = globalObjsTemp.songs[i];
        }
    }
    // 206 leftmost = 88 slowwalk,
    // 235.75 = 90, 266.5. 294.25, 326, 356 = 98 386.25 = 100, 446.75 = 104, 506 = 108
    if (distToClosestObj > 5) {
        // globalObjsTemp.radioStatic1
        let staticSoundMult = 1 - Math.min(0.99, (10 - distToClosestObj) / 5);
        let panMult = (barPos - 206) / 300
        if (gameState.currentScene == 3) {
            panMult = 0.5;
        }
        globalObjsTemp.radioMusic.volume = 1 - staticSoundMult;
        let sqrtSoundMult = Math.sqrt(staticSoundMult);
        globalObjsTemp.radioStatic1.volume = sqrtSoundMult * (1 - panMult) * 0.5;
        globalObjsTemp.radioStatic1.trueVolume = globalObjsTemp.radioStatic1.volume;
        if (globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2.volume = sqrtSoundMult * panMult * 0.5;
            globalObjsTemp.radioStatic2.trueVolume = globalObjsTemp.radioStatic2.volume;
        }
        if (distToClosestObj > 10) {
            if (globalObjsTemp.radioMusic.isPlaying) {
                globalObjsTemp.radioMusic.stop();
            }
        } else {
            if (globalObjsTemp.radioMusic.key != closestObj) {
                globalObjsTemp.radioMusic.stop();
                globalObjsTemp.radioMusic = playSound(closestObj, 1, true);
                if (!gameState.movedDialogClickBlockerTop) {
                    gameState.movedDialogClickBlockerTop = true;
                    messageBus.publish('setDialogBtnToTop');
                }
                if (closestObj == 'news1') {
                    if (gameState.radio1Done) {
                        dialogManager.showDialogNode('radio1Done');
                    } else {
                        dialogManager.showDialogNode('radio1');
                    }
                } else if (closestObj == 'news2') {
                    if (gameState.radio2Done) {
                        dialogManager.showDialogNode('radio2Done');
                    } else {
                        if (gameState.brunaIntroduced || gameState.brunaChatted2) {
                            dialogManager.showDialogNode('radioActTwo2');
                        } else {
                            dialogManager.showDialogNode('radioActTwo1');
                        }
                    }
                } else if (closestObj == 'news3') {

                }
            }
            if (!globalObjsTemp.radioMusic.isPlaying) {
                globalObjsTemp.radioMusic.play();
            }
        }
    } else {
        globalObjsTemp.radioMusic.volume = 1;
        globalObjsTemp.radioStatic1.volume = 0;
        if (globalObjsTemp.radioStatic2) {
            globalObjsTemp.radioStatic2.volume = 0;
        }
        // closestObj
        // globalObjsTemp.radioMusic
    }
}

function clickTV() {
    if (gameState.currentScene == 1) {
        if (gameState.tvended) {
            dialogManager.showDialogNode('tv4');
        } else {
            let tvNum = gameState.tvNum || 1;
            dialogManager.showDialogNode('tv' + tvNum);
            gameState.tvNum = tvNum + 1;
        }
    } else if (gameState.currentScene == 2) {
        if (gameState.powerOff) {
            if (gameState.askedEthanEdithTV) {
                dialogManager.showDialogNode('tvPowerlessEthanEdith');
            } else {
                dialogManager.showDialogNode('tvPowerless');
            }
        } else {
            dialogManager.showDialogNode('tvOff');
        }
    } else if (gameState.currentScene == 3) {
        if (gameState.tvSceneThreeEnded) {
            dialogManager.showDialogNode('tvCrackEnd');
        } else if (gameState.tvScreaming) {
            // stop tv screaming
            gameState.tvSceneThreeEnded = true;
        } else {
            let tvThreeNum = gameState.tvThreeNum || 1;
            dialogManager.showDialogNode('tvCrack' + tvThreeNum);
            gameState.tvThreeNum = tvThreeNum + 1;
        }

    }
}

function clickIndoor() {
    globalObjects.diner.IndoorButton.setState(DISABLE);

    globalObjects.outdoorRain.stop();
    if (gameState.powerOff) {
        globalObjects.indoorRain.setVolume(1);
        // setRadioVolume(0.75);
    } else {
        globalObjects.indoorRain.setVolume(0.35);
        setRadioMusic('radiostatic2', 0.4);
    }
    playSound('dooropen', 0.8);

    gameVars.cameraMoveAcc = 0;
    gameVars.cameraMoveVel = 0.01;
    gameState.isOutdoors = false;
    // gameState.isInShed = false;
    gameVars.cameraPosY = 0;
    PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
    gameVars.cameraPosX = -510;
    PhaserScene.cameras.main.scrollX = gameVars.cameraPosX;

    // gameVars.cameraPosMaxX = gameVars.cameraPosMaxXOutside;
    // gameVars.cameraPosMinX = gameVars.cameraPosMinXOutside;
    gameVars.cameraPosMaxX = gameVars.cameraPosMaxXInside;
    gameVars.cameraPosMinX = gameVars.cameraPosMinXInside;

    if (globalObjsTemp.generatorSound) {
        globalObjsTemp.generatorSound.stop();
    }
    if (gameState.powerOff === false && !gameState.powerOnWelcomed) {
        gameState.powerOnWelcomed = true;
        dialogManager.showDialogNode('DinerCheer');
    }

}

function clickBackdoor() {
    if (gameState.currentScene == 1) {
        // exitBackdoor();
        dialogManager.showDialogNode('BackdoorActOne');
    } else if (gameState.currentScene == 2) {
        if (gameState.scratchingDoor) {
            if (gameState.startedBackdoorDebate) {
                if (gameState.ethan2Chatted) {
                    dialogManager.showDialogNode('ScratchDoorReturn');
                } else {
                    dialogManager.showDialogNode('ScratchDoorReturnEthanTired');
                }
            } else {
                gameState.startedBackdoorDebate = true;
                dialogManager.showDialogNode('BackdoorScratcing1');
            }
        } else if (gameState.hasBackdoorKey) {
            //globalObjects.indoorRain.setVolume(0.4);
            exitBackdoor();
        } else {
            dialogManager.showDialogNode('BackdoorLocked');
        }
        // dialogManager.showDialogNode('Backdoor2NoReasonToGo');
    } else if (gameState.currentScene == 3) {
        if (gameState.goodEndLocked) {
            dialogManager.showDialogNode('BackdoorNoPoint');
        } else {
            exitBackdoor();
        }
    }
}


function shiftOver(x, strong) {
    let distDiff = x - (gameVars.cameraPosX + gameConsts.halfWidth);
    let shiftThreshold = strong ? 40 : 175;
    let shiftBaseline = strong ? 0.35 : 0.25;
    let shiftRatio = strong ? 220 : 300;
    if (distDiff < -shiftThreshold) {
        gameVars.cameraMoveAcc = (distDiff / shiftRatio) - shiftBaseline;
    } else if (distDiff > shiftThreshold) {
        gameVars.cameraMoveAcc = (distDiff / shiftRatio) + shiftBaseline;
    }
    messageBus.publish("delayUpdateClickLocation");

}

function exitBackdoor() {
    playSound('dooropen', 0.4);
    globalObjects.diner.IndoorButton.setState(NORMAL);
    // globalObjects.indoorRain.setVolume(0.01);

    if (!globalObjects.outdoorRain) {
        globalObjects.outdoorRain = playSound('stormfull', 1, true);
    } else {
        globalObjects.outdoorRain.play();
    }
    setRadioVolume(0);
    gameVars.cameraMoveAcc = 0;
    gameVars.cameraMoveVel = 0.01;
    gameState.isOutdoors = true;
    // gameState.isInShed = false;
    gameVars.cameraPosY = gameConsts.outdoorStartY;
    PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
    gameVars.cameraPosX = -480;
    PhaserScene.cameras.main.scrollX = gameVars.cameraPosX;

    gameVars.cameraPosMaxX = gameVars.cameraPosMaxXOutside;
    gameVars.cameraPosMinX = gameVars.cameraPosMinXOutside;
    // gameVars.cameraPosMaxX = gameVars.cameraPosMaxXInside;
    // gameVars.cameraPosMinX = gameVars.cameraPosMinXInside;

    if (!globalObjsTemp.outdoorBackgrounds) {
        globalObjsTemp.outdoorBackgrounds = {
            bg0: PhaserScene.add.image(0, gameConsts.halfHeight + gameConsts.outdoorStartY, 'whitePixel').setScale(9999,500),
            bg1: PhaserScene.add.image(0, gameConsts.halfHeight + gameConsts.outdoorStartY, 'backgrounds', 'bgout1.png'),
            bg2: PhaserScene.add.image(999.5, gameConsts.halfHeight + gameConsts.outdoorStartY, 'backgrounds', 'bgout2.png'),
            bg3: PhaserScene.add.image(999.5, gameConsts.halfHeight + gameConsts.outdoorStartY, 'backgrounds', 'bgout2x.png').setVisible(false),
            bg4: PhaserScene.add.image(1999, gameConsts.halfHeight + gameConsts.outdoorStartY, 'backgrounds', 'bgout3.png'),
        }
    }
}

function enterShed() {
    gameState.isInShed = true;
    globalObjects.outdoorRain.setVolume(0.25);
    gameVars.cameraMoveAcc = 0;
    gameVars.cameraMoveVel = 0;
    if (globalObjsTemp.generatorSound) {
        globalObjsTemp.generatorSound.setVolume(0.25);
    }

    gameVars.cameraPosY = gameConsts.shedStartY;
    PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
    gameVars.cameraPosX = 0;
    PhaserScene.cameras.main.scrollX = gameVars.cameraPosX;

    if (!globalObjsTemp.shedBackgrounds) {
        globalObjsTemp.shedBackgrounds = PhaserScene.add.image(gameConsts.halfWidth, gameConsts.halfHeight + gameConsts.shedStartY, 'backgrounds', 'bgshed.png');
    }
}

function clickGravestone() {
    gameState.gravestoneClicked = true;
    dialogManager.showDialogNode('GravestoneClicked');

}

function exitShed() {
    gameState.isInShed = false;
    globalObjects.outdoorRain.setVolume(1);
    gameVars.cameraMoveAcc = 0;
    gameVars.cameraMoveVel = -0.01;
    if (globalObjsTemp.generatorSound) {
        globalObjsTemp.generatorSound.setVolume(0);
    }

    gameVars.cameraPosY = gameConsts.outdoorStartY; PhaserScene.cameras.main.scrollY = gameVars.cameraPosY;
    gameVars.cameraPosX = 1440; PhaserScene.cameras.main.scrollX = gameVars.cameraPosX;
}

function clickGenerator() {
    if (!globalObjsTemp.generator) {
        gameState.viewedGenerator = true;
        let startYPos = gameConsts.halfHeight + gameConsts.shedStartY;
        updateManager.addFunction(updateGenerator);
        globalObjsTemp.generator = {
            generatorClickBlocker: {},
            backing: PhaserScene.add.sprite(gameConsts.halfWidth, startYPos, 'radio', 'generator.png'),
            exit: {},
            power: {},
            red: {},
            blue: {},
            green: {},
            yellow: {},
            purple: {},
            indicator: PhaserScene.add.sprite(gameConsts.halfWidth - 64, startYPos + 209, 'radio', 'status_light_off.png').setAlpha(0.9),
            invalid: PhaserScene.add.sprite(-999, -999, 'misc', 'invalid.png').setAlpha(0),
        };
        globalObjsTemp.generatorWires = {
            red: PhaserScene.add.sprite(gameConsts.halfWidth - 221, startYPos - 208, 'radio', 'red_wire.png').setOrigin(0, 0.5).setScale(0.01, 1),
            blue: PhaserScene.add.sprite(gameConsts.halfWidth - 221, startYPos - 128, 'radio', 'blue_wire.png').setOrigin(0, 0.5).setScale(0.01, 1),
            green: PhaserScene.add.sprite(gameConsts.halfWidth - 221, startYPos - 48, 'radio', 'green_wire.png').setOrigin(0, 0.5).setScale(0.01, 1),
            yellow: PhaserScene.add.sprite(gameConsts.halfWidth - 221, startYPos + 32, 'radio', 'yellow_wire.png').setOrigin(0, 0.5).setScale(0.01, 1),
            purple: PhaserScene.add.sprite(gameConsts.halfWidth - 221, startYPos + 112, 'radio', 'purple_wire.png').setOrigin(0, 0.5).setScale(0.01, 1),
        };
        globalObjsTemp.generator.generatorClickBlocker = new Button({
            normal: {
                ref: "blackPixel",
                x: gameConsts.halfWidth,
                y: startYPos,
                alpha: 0.01,
                scaleX: 5000,
                scaleY: 1000
            }
        });
        globalObjsTemp.generator.exit = new Button({
            normal: {
                "atlas": "radio",
                "ref": "back.png",
                "x": gameConsts.halfWidth - 310,
                "y": startYPos + 280,
                alpha: 0.75,
            },
            hover: {
                alpha: 1
            },
            press: {
                alpha: 0.65
            },
            disable: {
                alpha: 0.001
            },
            onMouseUp() {
                closeGenerator();
            }
        });
        globalObjsTemp.generator.power = new Button({
            normal: {
                "atlas": "radio",
                "ref": "power_btn.png",
                "x": gameConsts.halfWidth - 15,
                "y": startYPos + 240,
                alpha: 1
            },
            hover: {
                "atlas": "radio",
                "ref": "power_btn_hover.png",
                alpha: 1
            },
            press: {
                "atlas": "radio",
                "ref": "power_btn_press.png",
                alpha: 1
            },
            disable: {
                alpha: 0.001
            },
            onMouseUp() {
                startGenerator();
            }
        });

        globalObjsTemp.generator.red = new Button({
            normal: {
                atlas: "radio",
                ref: "red_plug.png",
                x: 300,
                y: 4126,
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            },
            hover: {
                atlas: "radio",
                ref: "red_plug.png",
                scaleX: 1,
                scaleY: 1.03,
                alpha: 1
            },
            press: {
                atlas: "radio",
                ref: "red_plug.png",
                scaleX: 1.08,
                scaleY: 1.08,
                alpha: 0.8
            },
            disable: {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
            },
            isDraggable: true,
            onMouseDown: () => {
                playSound('crackle1');
            },
            onDrag: () => {
                let wireXPos = globalObjsTemp.generator.red.getXPos();
                let wireYPos = globalObjsTemp.generator.red.getYPos();
                attachWire(wireXPos, wireYPos, globalObjsTemp.generator.red);
                updateWireVisual(globalObjsTemp.generator.red, globalObjsTemp.generatorWires.red);
            },
            onDrop: () => {
                let wireXPos = globalObjsTemp.generator.red.getXPos();
                let wireYPos = globalObjsTemp.generator.red.getYPos();
                let attachedSpot = attachWire(wireXPos, wireYPos, globalObjsTemp.generator.red);
                if (attachedSpot) {
                    setWireAttach(globalObjsTemp.generator.red, attachedSpot)
                    updateWireVisual(globalObjsTemp.generator.red, globalObjsTemp.generatorWires.red);
                    playSound('crackle1');
                } else {
                    detatchWire(globalObjsTemp.generator.red);
                    globalObjsTemp.generator.red.tweenToPos(gameConsts.halfWidth - 211, startYPos - 208, 200, 'Quad.easeIn');
                    retractWireVisual(globalObjsTemp.generator.red, globalObjsTemp.generatorWires.red)
                }
            }
        });
        globalObjsTemp.generator.red = globalObjsTemp.generator.red;
        globalObjsTemp.generator.red.setOrigin(0.8, 0.5);

        // blue button
        globalObjsTemp.generator.blue = new Button({
            normal: {
                atlas: "radio",
                ref: "blue_plug.png",
                x: 300,
                y: 4205,
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            },
            hover: {
                atlas: "radio",
                ref: "blue_plug.png",
                scaleX: 1,
                scaleY: 1.03,
                alpha: 1
            },
            press: {
                atlas: "radio",
                ref: "blue_plug.png",
                scaleX: 1.08,
                scaleY: 1.08,
                alpha: 0.8
            },
            disable: {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
            },
            isDraggable: true,
            onMouseDown: () => {
                playSound('crackle1');
            },
            onDrag: () => {
                let wireXPos = globalObjsTemp.generator.blue.getXPos();
                let wireYPos = globalObjsTemp.generator.blue.getYPos();
                attachWire(wireXPos, wireYPos, globalObjsTemp.generator.blue);
                updateWireVisual(globalObjsTemp.generator.blue, globalObjsTemp.generatorWires.blue);
            },
            onDrop: () => {
                let wireXPos = globalObjsTemp.generator.blue.getXPos();
                let wireYPos = globalObjsTemp.generator.blue.getYPos();
                let attachedSpot = attachWire(wireXPos, wireYPos, globalObjsTemp.generator.blue);
                if (attachedSpot) {
                    setWireAttach(globalObjsTemp.generator.blue, attachedSpot)
                    updateWireVisual(globalObjsTemp.generator.blue, globalObjsTemp.generatorWires.blue);
                    playSound('crackle1');
                } else {
                    detatchWire(globalObjsTemp.generator.blue);
                    globalObjsTemp.generator.blue.tweenToPos(gameConsts.halfWidth - 211, startYPos - 128.5, 200, 'Quad.easeIn');
                    retractWireVisual(globalObjsTemp.generator.blue, globalObjsTemp.generatorWires.blue)
                }
            }
        });
        globalObjsTemp.generator.blue.setOrigin(0.8, 0.5);

        // green button
        globalObjsTemp.generator.green = new Button({
            normal: {
                atlas: "radio",
                ref: "green_plug.png",
                x: gameConsts.halfWidth - 211,
                y: startYPos - 49,
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            },
            hover: {
                atlas: "radio",
                ref: "green_plug.png",
                scaleX: 1,
                scaleY: 1.03,
                alpha: 1
            },
            press: {
                atlas: "radio",
                ref: "green_plug.png",
                scaleX: 1.08,
                scaleY: 1.08,
                alpha: 0.8
            },
            disable: {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
            },
            isDraggable: true,
            onMouseDown: () => {
                playSound('crackle1');
            },
            onDrag: () => {
                let wireXPos = globalObjsTemp.generator.green.getXPos();
                let wireYPos = globalObjsTemp.generator.green.getYPos();
                attachWire(wireXPos, wireYPos, globalObjsTemp.generator.green);
                updateWireVisual(globalObjsTemp.generator.green, globalObjsTemp.generatorWires.green);
            },
            onDrop: () => {
                let wireXPos = globalObjsTemp.generator.green.getXPos();
                let wireYPos = globalObjsTemp.generator.green.getYPos();
                let attachedSpot = attachWire(wireXPos, wireYPos, globalObjsTemp.generator.green);
                if (attachedSpot) {
                    setWireAttach(globalObjsTemp.generator.green, attachedSpot)
                    updateWireVisual(globalObjsTemp.generator.green, globalObjsTemp.generatorWires.green);
                    playSound('crackle1');
                } else {
                    detatchWire(globalObjsTemp.generator.green);
                    globalObjsTemp.generator.green.tweenToPos(gameConsts.halfWidth - 211, startYPos - 49, 200, 'Quad.easeIn');
                    retractWireVisual(globalObjsTemp.generator.green, globalObjsTemp.generatorWires.green)
                }
            }
        });
        globalObjsTemp.generator.green.setOrigin(0.8, 0.5);

        // yellow button
        globalObjsTemp.generator.yellow = new Button({
            normal: {
                atlas: "radio",
                ref: "yellow_plug.png",
                x: 300,
                y: 4284,
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            },
            hover: {
                atlas: "radio",
                ref: "yellow_plug.png",
                scaleX: 1,
                scaleY: 1.03,
                alpha: 1
            },
            press: {
                atlas: "radio",
                ref: "yellow_plug.png",
                scaleX: 1.08,
                scaleY: 1.08,
                alpha: 0.8
            },
            disable: {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
            },
            isDraggable: true,
            onMouseDown: () => {
                playSound('crackle1');
            },
            onDrag: () => {
                let wireXPos = globalObjsTemp.generator.yellow.getXPos();
                let wireYPos = globalObjsTemp.generator.yellow.getYPos();
                attachWire(wireXPos, wireYPos, globalObjsTemp.generator.yellow);
                updateWireVisual(globalObjsTemp.generator.yellow, globalObjsTemp.generatorWires.yellow);
            },
            onDrop: () => {
                let wireXPos = globalObjsTemp.generator.yellow.getXPos();
                let wireYPos = globalObjsTemp.generator.yellow.getYPos();
                let attachedSpot = attachWire(wireXPos, wireYPos, globalObjsTemp.generator.yellow);
                if (attachedSpot) {
                    setWireAttach(globalObjsTemp.generator.yellow, attachedSpot)
                    updateWireVisual(globalObjsTemp.generator.yellow, globalObjsTemp.generatorWires.yellow);
                    playSound('crackle1');
                } else {
                    detatchWire(globalObjsTemp.generator.yellow);
                    globalObjsTemp.generator.yellow.tweenToPos(gameConsts.halfWidth - 211, startYPos + 30.5, 200, 'Quad.easeIn');
                    retractWireVisual(globalObjsTemp.generator.yellow, globalObjsTemp.generatorWires.yellow)
                }
            }
        });
        globalObjsTemp.generator.yellow.setOrigin(0.8, 0.5);

        // green button
        globalObjsTemp.generator.purple = new Button({
            normal: {
                atlas: "radio",
                ref: "purple_plug.png",
                x: gameConsts.halfWidth - 211,
                y: startYPos + 110,
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            },
            hover: {
                atlas: "radio",
                ref: "purple_plug.png",
                scaleX: 1,
                scaleY: 1.03,
                alpha: 1
            },
            press: {
                atlas: "radio",
                ref: "purple_plug.png",
                scaleX: 1.08,
                scaleY: 1.08,
                alpha: 0.8
            },
            disable: {
                scaleX: 1,
                scaleY: 1,
                alpha: 1,
            },
            isDraggable: true,
            onMouseDown: () => {
                playSound('crackle1');
            },
            onDrag: () => {
                let wireXPos = globalObjsTemp.generator.purple.getXPos();
                let wireYPos = globalObjsTemp.generator.purple.getYPos();
                attachWire(wireXPos, wireYPos, globalObjsTemp.generator.purple);
                updateWireVisual(globalObjsTemp.generator.purple, globalObjsTemp.generatorWires.purple);
            },
            onDrop: () => {
                let wireXPos = globalObjsTemp.generator.purple.getXPos();
                let wireYPos = globalObjsTemp.generator.purple.getYPos();
                let attachedSpot = attachWire(wireXPos, wireYPos, globalObjsTemp.generator.purple);
                if (attachedSpot) {
                    setWireAttach(globalObjsTemp.generator.purple, attachedSpot)
                    updateWireVisual(globalObjsTemp.generator.purple, globalObjsTemp.generatorWires.purple);
                    playSound('crackle1');
                } else {
                    detatchWire(globalObjsTemp.generator.purple);
                    globalObjsTemp.generator.purple.tweenToPos(gameConsts.halfWidth - 211, startYPos + 110, 200, 'Quad.easeIn');
                    retractWireVisual(globalObjsTemp.generator.purple, globalObjsTemp.generatorWires.purple)
                }
            }
        });
        globalObjsTemp.generator.purple.setOrigin(0.8, 0.5);

        globalObjsTemp.generatorConnections = {
            1: false,
            2: false,
            3: globalObjsTemp.generator.yellow,
            4: globalObjsTemp.generator.blue,
            5: globalObjsTemp.generator.red,
        };

        globalObjsTemp.generator.yellow.socket = 3;
        globalObjsTemp.generator.blue.socket = 4;
        globalObjsTemp.generator.red.socket = 5;

        updateWireVisual(globalObjsTemp.generator.red, globalObjsTemp.generatorWires.red);
        updateWireVisual(globalObjsTemp.generator.blue, globalObjsTemp.generatorWires.blue);
        updateWireVisual(globalObjsTemp.generator.yellow, globalObjsTemp.generatorWires.yellow);


        for (let i in globalObjsTemp.generator) {
            globalObjsTemp.generator[i].scrollFactorX = 0;
            if (globalObjsTemp.generator[i].setDepth) {
                globalObjsTemp.generator[i].setScrollFactor(0, 1);
                globalObjsTemp.generator[i].setDepth(100);
            }
        }
        for (let i in globalObjsTemp.generatorWires) {
            globalObjsTemp.generatorWires[i].scrollFactorX = 0;
            globalObjsTemp.generatorWires[i].depth = 100;
        }

        setTimeout(() => {
            messageBus.publish('setDialogBtnToTop');
            dialogManager.showDialogNode('GeneratorWiredWrong');
        }, 250);
    }
    openGenerator();
}

function updateWireVisual(wire,visual) {
    let wireXPos = wire.getXPos() - 7;
    let wireYPos = wire.getYPos();
    let wireLengthX = wireXPos - visual.x;
    let wireLengthY = wireYPos - visual.y;
    let wireLength = Math.sqrt(wireLengthX*wireLengthX + wireLengthY*wireLengthY);
    visual.rotation = Math.atan2(wireLengthY, wireLengthX);
    visual.setScale(0.01 * wireLength, 1);
}

function retractWireVisual(wire, visual) {
    updateWireVisual(wire,visual);
    PhaserScene.tweens.add({
        targets: visual,
        ease: 'Quad.easeIn',
        scaleX: 0.01,
        duration: 200,
    });
}

function attachWire(wireXPos, wireYPos, wire) {
    if (wireXPos > 286 && wireXPos < 345) {
        let spacingY = 10;
        if (wireYPos > (4090 + spacingY) && wireYPos < (4165 - spacingY) && wireCanAttach(wire, 5)) {
            setWireAttach(wire, 5);
            return 5;
        } else if (wireYPos > (4165 + spacingY) && wireYPos < (4245 - spacingY) && wireCanAttach(wire, 4)) {
            setWireAttach(wire, 4);
            return 4;
        } else if (wireYPos > (4245 + spacingY) && wireYPos < (4325 - spacingY) && wireCanAttach(wire, 3)) {
            setWireAttach(wire, 3);
            return 3;
        } else if (wireYPos > (4325 + spacingY) && wireYPos < (4405 - spacingY) && wireCanAttach(wire, 2)) {
            setWireAttach(wire, 2);
            return 2;
        } else if (wireYPos > (4405 + spacingY) && wireYPos < (4480 - spacingY) && wireCanAttach(wire, 1)) {
            setWireAttach(wire, 1);
            return 1;
        }
    }
    return false;
}
function setWireAttach(wire, number) {
    if (wireCanAttach(wire, number)) {
        detatchWire(wire);
        globalObjsTemp.generatorConnections[number] = wire;
        switch(number) {
            case 5:
                wire.socket = 5;
                wire.setPos(300, 4090 + 36);
                break;
            case 4:
                wire.socket = 4;
                wire.setPos(300, 4169 + 36);
                break;
            case 3:
                wire.socket = 3;
                wire.setPos(300, 4248 + 36);
                break;
            case 2:
                wire.socket = 2;
                wire.setPos(300, 4327 + 36);
                break;
            case 1:
                wire.socket = 1;
                wire.setPos(300, 4405 + 36);
                break;
        }
        return true;
    }
    return false;
}

// function detatchSocket(number) {
//     if (globalObjsTemp.generatorConnections[number]) {
//         globalObjsTemp.generatorConnections[number].setPos(269, 4441)
//         globalObjsTemp.generatorConnections[number].onDrop();
//         globalObjsTemp.generatorConnections[number] = false;
//     }
// }

function detatchWire(wire) {
    for (let idx in globalObjsTemp.generatorConnections) {
        if (globalObjsTemp.generatorConnections[idx] == wire) {
            globalObjsTemp.generatorConnections[idx] = false;
        }
    }
    wire.socket = undefined;
}

function wireCanAttach(wire, number) {
    let retVal = !globalObjsTemp.generatorConnections[number] || globalObjsTemp.generatorConnections[number] === wire;
    return retVal;
}

function startGenerator() {
    if (gameState.powerOff === false) {
        dialogManager.showDialogNode('GeneratorAlreadyFixed');
        return;
    }
    if (!globalObjsTemp.generatorConnections[1]
        || !globalObjsTemp.generatorConnections[2]
        || !globalObjsTemp.generatorConnections[3]
        || !globalObjsTemp.generatorConnections[4]
        || !globalObjsTemp.generatorConnections[5]) {
        showGeneratorInvalid(4117);
        playSound('stopscreech', 1);
        return false;
    }
    if (globalObjsTemp.generator.red.socket % 2 == 0) {
        // must be odd, is invalid
        showGeneratorInvalid(4195);
        playSound('generatorFail', 1);
        return false;
    }
    if (globalObjsTemp.generator.blue.socket <= globalObjsTemp.generator.red.socket) {
        showGeneratorInvalid(4247);
        playSound('generatorFail', 1);
        return false;
    }

    let greenSocket = globalObjsTemp.generator.green.socket;
    let greenCrosses = 0;
    if (globalObjsTemp.generator.red.socket < greenSocket) {
        greenCrosses++
    }
    if (globalObjsTemp.generator.blue.socket < greenSocket) {
        greenCrosses++
    }
    if (globalObjsTemp.generator.yellow.socket > greenSocket) {
        greenCrosses++
    }
    if (globalObjsTemp.generator.purple.socket > greenSocket) {
        greenCrosses++
    }
    if (greenCrosses != 1) {
        showGeneratorInvalid(4286);
        playSound('generatorFail', 1);
        return false;
    }

    if (globalObjsTemp.generator.yellow.socket >= globalObjsTemp.generator.green.socket) {
        showGeneratorInvalid(4342);
        playSound('generatorFail', 1);
        return false;
    }
    if (globalObjsTemp.generator.purple.socket == 1 || globalObjsTemp.generator.purple.socket == 2) {
        showGeneratorInvalid(4386);
        playSound('generatorFail', 1);
        return false;
    }
    let numWiresUpward = 0;
    if (globalObjsTemp.generator.blue.socket == 5) {
        numWiresUpward++;
    }
    if (globalObjsTemp.generator.green.socket >= 4) {
        numWiresUpward++;
    }
    if (globalObjsTemp.generator.yellow.socket >= 3) {
        numWiresUpward++;
    }
    if (globalObjsTemp.generator.purple.socket >= 2) {
        numWiresUpward++;
    }
    if (numWiresUpward < 3) {
        showGeneratorInvalid(4438);
        playSound('generatorFail', 1);
        return;
    }
    turnOnPower();
    return true;
}

function turnOnPower() {
    globalObjsTemp.generator.indicator.setFrame('status_light_on.png');
    setTimeout(() => {
        globalObjsTemp.generator.indicator.setFrame('status_light_off.png');
        setTimeout(() => {
            globalObjsTemp.generator.indicator.setFrame('status_light_on.png');
        }, 750);
    }, 75);
    playSound('crackle1', 2);
    globalObjsTemp.generatorSound = playSound('generator', 0.1, true);
    PhaserScene.tweens.add({
        targets: globalObjsTemp.generatorSound,
        volume: 1,
        ease: 'Quad.easeOut',
        duration: 600
    });
    gameState.powerOff = false;
    globalObjsTemp.outdoorBackgrounds.bg1.setFrame('bgout1Light.png');
    dialogManager.showDialogNode('GeneratorTurnedOn');
    setCharactersNormal();
    gameCharacters.ethan.setFrame('ethan_tired.png');

    globalObjsTemp.gloom.setAlpha(0);

    globalObjsTemp.generator.red.setState(DISABLE);
    globalObjsTemp.generator.blue.setState(DISABLE);
    globalObjsTemp.generator.green.setState(DISABLE);
    globalObjsTemp.generator.yellow.setState(DISABLE);
    globalObjsTemp.generator.purple.setState(DISABLE);
}

function showGeneratorInvalid(yPos) {
    globalObjsTemp.generator.indicator.setFrame('status_light_on.png');
    setTimeout(() => {
        globalObjsTemp.generator.indicator.setFrame('status_light_off.png');
        setTimeout(() => {
            globalObjsTemp.generator.indicator.setFrame('status_light_on.png');
            setTimeout(() => {
                globalObjsTemp.generator.indicator.setFrame('status_light_off.png');
            }, 30);
        }, Math.floor(350 + Math.random * 200));
    }, 50);
    globalObjsTemp.generator.invalid.x = 429;
    globalObjsTemp.generator.invalid.y = yPos;
    globalObjsTemp.generator.invalid.setAlpha(0.75);
    globalObjsTemp.generator.invalid.visible = true;
    PhaserScene.tweens.add({
        targets: globalObjsTemp.generator.invalid,
        scaleX: 1.65,
        scaleY: 1.65,
        alpha: 1,
        ease: 'Bounce.easeOut',
        duration: 250,
        onComplete: () => {
            PhaserScene.tweens.add({
                delay: 300,
                targets: globalObjsTemp.generator.invalid,
                scaleX: 1,
                scaleY: 1,
                alpha: 0,
                ease: 'Cubic.easeIn',
                duration: 600,
                onComplete: () => {
                    globalObjsTemp.generator.invalid.y = 9999;
                }
            });
        }
    });
}

function openGenerator() {
    if (globalObjsTemp.generatorSound) {
        globalObjsTemp.generatorSound.setVolume(1);
    }
    for (let i in globalObjsTemp.generator) {
        globalObjsTemp.generator[i].visible = true;
        if (globalObjsTemp.generator[i].setState) {
            globalObjsTemp.generator[i].setState(NORMAL);
            globalObjsTemp.generator[i].setAlpha(1);
        }
    }
    for (let j in globalObjsTemp.generatorWires) {
        globalObjsTemp.generatorWires[j].visible = true;
    }
}

function closeGenerator() {
    if (globalObjsTemp.generatorSound) {
        globalObjsTemp.generatorSound.setVolume(0.25);
    }
    for (let i in globalObjsTemp.generator) {
        globalObjsTemp.generator[i].visible = false;
        if (globalObjsTemp.generator[i].setState) {
            globalObjsTemp.generator[i].setState(DISABLE);
            globalObjsTemp.generator[i].setAlpha(0.001);
        }
    }
    for (let j in globalObjsTemp.generatorWires) {
        globalObjsTemp.generatorWires[j].visible = false;
    }
}

function updateGenerator() {

}
