/* Author: Xterminator
	NPC Name: 		Jane
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Sells potions/food if completed all her quests
*/

function start() {
    if (cm.getQuestStatus(2013) == 2) {
        cm.say("It's you... thanks to you I was able to get a lot done. Nowadays I've been making a bunch of items. If you need anything let me know.");
        
        var selStr = "Which item would you like to buy?#b";
        var items = [2000002, 2022003, 2022000, 2001000];
        var costs = [310, 1060, 1600, 3120];
        for (var i = 0; i < items.length; i++) {
            selStr += "\r\n#L" + i + "##z" + items[i] + "# (Price : " + costs[i] + " mesos)#l";
        }
        
        var selection = cm.askMenu(selStr);
        
        var itemSet = [2000002, 2022003, 2022000, 2001000];
        var costSet = [310, 1060, 1600, 3120];
        var recHpMp = [300, 1000, 800, 1000];
        var recNames = ["HP", "HP", "MP", "HP and MP"];
        
        var item = itemSet[selection];
        var cost = costSet[selection];
        var rec = recHpMp[selection];
        var recName = recNames[selection];
        
        var amount = cm.askNumber("You want #b#t" + item + "##k? #t" + item + "# allows you to recover " + rec + " " + recName + ". How many would you like to buy?", 1, 1, 100);
        
        if (cm.askYesNo("Will you purchase #r" + amount + "#k #b#t" + item + "#(s)#k? #t" + item + "# costs " + cost + " mesos for one, so the total comes out to be #r" + cost * amount + "#k mesos.") == 1) {
            if (cm.getMeso() < cost * amount || !cm.canHold(item)) {
                cm.say("Are you lacking mesos by any chance? Please check and see if you have an empty slot available at your etc. inventory, and if you have at least #r" + cost * amount + "#k mesos with you.");
            } else {
                cm.gainMeso(-(cost * amount));
                cm.gainItem(item, amount);
                cm.say("Thank you for coming. Stuff here can always be made so if you need something, please come again.");
            }
        } else {
            cm.say("I still have quite a few of the materials you got me before. The items are all there so take your time choosing.");
        }
    } else {
        if (cm.getQuestStatus(2010) == 2) {
            cm.say("You don't seem strong enough to be able to purchase my potion ...");
        } else {
            cm.sayOk("My dream is to travel everywhere, much like you. My father, however, does not allow me to do it, because he thinks it's very dangerous. He may say yes, though, if I show him some sort of a proof that I'm not the weak girl that he thinks I am ...");
        }
    }
}
