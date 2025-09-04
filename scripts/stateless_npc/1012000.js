/* 
 NPC Name: 		Regular Cab: Post-bb regular cabs in all towns
 */

function start() {
    var maps = [100000000, 101000000, 102000000, 104000000, 103000000, 120000000, 105000000];
    var rCost = [800, 800, 1000, 1000, 1200, 1000, 1200];
    
    cm.say("Hello, I drive the Regular Cab. If you want to go from town to town safely and fast, then ride our cab. We'll gladly take you to your destination with an affordable price.");
    
    var job = cm.getJob();
    var haveTruTaxiCoupon = cm.haveItem(4032313);
    var currentMapId = cm.getMapId();
    var selStr;

    if (job == 0 || job == 1000 || job == 2000 || job == 3000) {
        selStr = "We have a special 90% discount for beginners. Choose your destination, for fees will change from place to place.#b";
        for (var i = 0; i < maps.length; i++) {
            if (maps[i] != currentMapId)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (rCost[i] / 10) + " mesos)#l";
        }
    } else {
        selStr = "Choose your destination, for fees will change from place to place.";
        if (haveTruTaxiCoupon) {
            selStr += "\r\nIf you have the #i4032313# #z4032313#, travelling to #m100000000# will be free of charge!\r\n"
        }
        selStr += "#b";
        for (var i = 0; i < maps.length; i++) {
            if (maps[i] != currentMapId)
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + rCost[i] + " mesos)#l";
        }
    }
    
    var selection = cm.askMenu(selStr);
    var sCost;
    
    if (job == 0 || job == 1000 || job == 2000 || job == 3000) {
        sCost = rCost[selection] / 10;
    } else {
        sCost = rCost[selection];
    }
    
    if (cm.askYesNo("You don't have anything else to do here, huh? Do you really want to go to #b#m" + maps[selection] + "##k? It'll cost you #b" + sCost + " mesos#k.") == 1) {
        var targetMapTravel = maps[selection];

        if (haveTruTaxiCoupon && targetMapTravel == 100000000) {
            sCost = 0;
            cm.gainItem(4032313, -1);
        }
        
        if (cm.getMeso() < sCost) {
            cm.say("You don't have enough mesos. Sorry to say this, but without them, you won't be able to ride the cab.");
        } else {
            if (sCost != 0)
                cm.gainMeso(-sCost);
            cm.warp(maps[selection]);
        }
    } else {
        cm.say("There's a lot to see in this town, too. Come back and find us when you need to go to a different town.");
    }
}
