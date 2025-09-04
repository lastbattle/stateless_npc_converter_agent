/* 
	NPC Name: 		Roger
	Map(s): 		Maple Road : Lower level of the Training Camp (2)
	Description: 		Quest - Roger's Apple
*/
function start() {
	qm.say("Hey, Man~ What's up? Haha! I am Roger who can teach you adorable new Maplers lots of information.");
	qm.say("You are asking who made me do this? Ahahahaha!\r\nMyself! I wanted to do this and just be kind to you new travellers.");
	var ask = qm.askAccept("So..... Let me just do this for fun! Abaracadabra~!");
	if (ask) {
		if (qm.getPlayerStat("HP") >= 50) {
			qm.setHP(25);
		}
		if (!qm.haveItem(2010007)) {
			qm.gainItem(2010007, 1);
		}
		qm.say("Surprised? If HP becomes 0, then you are in trouble. Now, I will give you #rRoger's Apple#k. Please take it. You will feel stronger. Open the Item window and double click to consume. Hey, it's very simple to open the Item window. Just press #bI#k on your keyboard.");
		qm.say("Please take all Roger's Apples that I gave you. You will be able to see the HP bar increasing. Please talk to me again when you recover your HP 100%.");
		qm.forceStartQuest();
	} else {
		qm.say("Really? If you have some time, talk to me again.");
	}
}

function end() {
	if (qm.getPlayerStat("HP") < 50) {
		qm.say("Hey, your HP is not fully recovered yet. Did you take all the Roger's Apple that I gave you? Are you sure?");
	} else {
		qm.say("How easy is it to consume the item? Simple, right? You can set a #bhotkey#k on the right bottom slot. Haha you didn't know that! right? Oh, and if you are a beginner, HP will automatically recover itself as time goes by. Well it takes time but this is one of the strategies for the beginners.");
		qm.say("Alright! Now that you have learned alot, I will give you a present. This is a must for your travel in Maple World, so thank me! Please use this under emergency cases!");
		qm.say("Okay, this is all I can teach you. I know it's sad but it is time to say good bye. Well take care if yourself and Good luck my friend!\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2010000# 3 #t2010000#\r\n#v2010009# 3 #t2010009#\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 10 exp");

		qm.gainExp(10);
		qm.gainItem(2010000, 3);
		qm.gainItem(2010009, 3);
		qm.forceCompleteQuest();
	}
}