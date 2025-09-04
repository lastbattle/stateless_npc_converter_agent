/*
 NPC Name: 		Dev Doll - Sample stateless NPC script
 Description: 		at GM map - Ellinia
 */

 function start() {
    cm.setAllowConversationCancel(false);
    
    cm.say("#b(The Black Wings? Huh? Who are they? And how is all this related to the Black Mage? Hm, maybe you should report this info to Tru.)#k");
    cm.say("The quick brown fox jumps over the lazy dog");
    cm.say("We're no strangers to love");
    cm.say("You know the rules and so do I");
    cm.say("A full commitment's what I'm thinking of");
    cm.say("You wouldn't get this from any other guy");

    // Test slide menu
    var targetMapId = [925020000, 980000000, 980030000, 923020000, 926010000, 910320000, /*Happyville closed for now*/-1/*209000000*/, 950100000, 910010500,
        910340700, 221023300, 300030100, 200080101, 251010404, 261000021, 211000002, 240080000, 923040000, 921160000/**/, 682000000, 800000000, 600000000, 520000000];
    var targetSelection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 21, 22, 522, 523, 524, 521];
    var mapText = [
        "Mulung Training Center", "Monster Carnival", "Monster Carnival 2", "Dual Raid", "Nett's Pyramid", "Abandoned Subway", "Happyville",
        "Golden Temple", "Moon Bunny", "First time together", "Dimensional Crack", "Forest of Poison Haze", "Remnant of the Goddess",
        "Lord Pirate", "Romeo and Juliet", "Resurrection of the Hoblin King", "Dragon's Nest", "Kenta in Danger", "Escape", "Crimson Wood Keep", "Zipangu", "New Leaf City",
        "Event Map"];

    var str = "";
    for (var i = 0; i < mapText.length; i++) {
        if (targetMapId[i] != -1) {
            str += "#" + targetSelection[i] + "# " + mapText[i]; // #1# = recommended, after targetselection
        }
    }
    var slideMenuSelection = cm.askSlideMenu(str);
    cm.say("Selected " + slideMenuSelection + " for slide menu.");

    // Avatar test
    var hair = cm.getPlayerStat("HAIR");
    hair_Colo_new = [];
    beauty = 1;

    if (cm.getPlayerStat("GENDER") == 0) {
        hair_Colo_new = [30030, 30020, 30000, 30310, 30330, 30060, 30150, 30410, 30210, 30140, 30120, 30200];
    } else {
        hair_Colo_new = [31050, 31040, 31000, 31150, 31310, 31300, 31160, 31100, 31410, 31030, 31080, 31070];
    }
    for (var i = 0; i < hair_Colo_new.length; i++) {
        hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
    }
    var avatarSelection = cm.askAvatar("I can totally change up your hairstyle and make it look so good. Why don't you change it up a bit? If you have #b#t5150001##k I'll change it for you. Choose the one to your liking~.", hair_Colo_new);
    cm.say("Selected " + avatarSelection + " for avatar menu.");
    
    
    // Image test
    cm.askImage("UI/tutorial/evan/8/0", -1);

    if (cm.say("Hello, i am teh stateless npcz tester") == 1) {
        if (cm.askYesNo("Asking yes or no") == 1) {
            if (cm.askAccept("Asking accept or deny") == 1) {
                var askNumber = cm.askNumber("ask number", 0,1,20);
                
                cm.say("you said "+askNumber+" for ask number");
                
                var text = cm.askText("Ask text");
                cm.say("You said "+text+" for text.");
                
                // Menu selection
                /*var str = "Test menu selection#n";
                var chatSelections = Array("Help: What are the list of commands I am able to use?", "Monitoring: Get me the list of reports!", "Monitoring: Get me the list of cheaters!", "Play BGMs", "Test cygnus intro");

                for (var i = 0; i < chatSelections.length; i++) {
                    if (i == 3) {
                        str += "\r\n";
                    }
                    str += "\r\n#L" + i + "# " + chatSelections[i] + "#l";
                }
                var menuSelection = cm.askMenu(str);*/
                
                var menuSelection = cm.askMenu("Test menu selection", 
                    "Help: What are the list of commands I am able to use?", "Monitoring: Get me the list of reports!", "Monitoring: Get me the list of cheaters!", "Play BGMs", "Test cygnus intro");
                
                cm.say("You have selected item "+menuSelection+" for menu. \n The end");
                
                cm.sayOk("Alright, this is the end. Goodbyeeee");
            } else {
                cm.say("you denied! bad");
            }
        } else {
            cm.say("you said no to the chat :( ");
        }
    }
}
