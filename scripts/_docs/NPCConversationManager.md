
# NPCConversationManager

**Package**: `game.scripts`

**Inheritance**:
- Extends: `AbstractPlayerInteraction`
- Direct Known Subclasses: `StatelessNPCConversationManager`

## Class Description
The `NPCConversationManager` class manages interactions between players and NPCs (Non-Player Characters) in the game. It extends `AbstractPlayerInteraction` and provides methods for handling NPC conversations, quests, inventory management, guild operations, and more.

## Fields
| Modifier and Type | Field | Description |
|-------------------|-------|-------------|
| `boolean` | `lastTalked` | Indicates if the player has recently talked to the NPC. |
| `int` | `max_range` | Maximum range for NPC interaction. |
| `int` | `min_range` | Minimum range for NPC interaction. |
| `boolean` | `pendingDisposal` | Indicates if the NPC conversation is pending disposal. |
| `int` | `state` | Current state of the NPC conversation. |

### Inherited Fields
From `AbstractPlayerInteraction`:
- `c` (`Client`)
- `chr` (`MSCharacter`)

## Constructor
```java
public NPCConversationManager(Client c, int npcId, MapleNPC npc, int questid, NPCConversationType type, String scriptedNPCItem)
```
**Description**: Initializes an NPC conversation manager with the specified client, NPC ID, NPC object, quest ID, conversation type, and scripted NPC item.

**Parameters**:
- `c`: The client instance.
- `npcId`: The ID of the NPC.
- `npc`: The `MapleNPC` object.
- `questid`: The ID of the associated quest.
- `type`: The type of NPC conversation (`NPCConversationType`).
- `scriptedNPCItem`: The scripted NPC item identifier.

## Methods
### Instance Methods
| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `void` | `acceptMember(String type, int pos)` | Accepts a member into a squad or group. |
| `String` | `AchievementRank(String character)` | Retrieves the achievement rank for a character. |
| `boolean` | `addCapacityToAlliance()` | Increases the capacity of an alliance. |
| `int` | `addMember(String type, boolean join)` | Adds a member to a squad or group. |
| `void` | `AncientArtifact_2011()` | Handles the 2011 Ancient Artifact event. |
| `void` | `banMember(String type, int pos)` | Bans a member from a squad or group. |
| `byte` | `canCreateCharacterWithName(String name)` | Checks if a character name is available for creation. |
| `void` | `changeItemStat(short slot, int type, short amount)` | Changes the stat of an item in the specified slot. |
| `void` | `changeJob(int job)` | Changes the player's job. |
| `byte` | `checkAllianceCreation()` | Checks if an alliance can be created. |
| `boolean` | `checkAndSet_player_MiracleCubeDroplimit()` | Checks and sets the player's Miracle Cube drop limit. |
| `boolean` | `checkHashSha512(String text, String hash)` | Verifies a SHA-512 hash. |
| `void` | `clearSkills()` | Clears all skills of the player. |
| `boolean` | `createAlliance(String alliancename)` | Creates an alliance with the specified name. |
| `void` | `createCharacter(String name, byte type)` | Creates a character with the specified name and type. |
| `byte` | `createPlayerNPC()` | Creates a player NPC. |
| `boolean` | `DisableScrollingFromSlot(short slot)` | Disables scrolling for an item in the specified slot. |
| `boolean` | `disbandAlliance()` | Disbands the current alliance. |
| `void` | `disbandGuild()` | Disbands the current guild. |
| `void` | `displayCharRanks(int job)` | Displays character rankings for a job. |
| `void` | `displayGuildRanks()` | Displays guild rankings. |
| `void` | `dispose()` | Disposes of the NPC conversation. |
| `void` | `DonatorLogging(int itemid, int amount, int quantity)` | Logs donator activity. |
| `void` | `DropItemFromSlot(byte type, short slot)` | Drops an item from the specified inventory slot. |
| `EventInstanceManager` | `enterSquad_instance(String type)` | Enters a squad instance. |
| `void` | `EvanAdvancementData()` | Handles Evan job advancement data. |
| `void` | `expandInventory(byte type, int amt)` | Expands the specified inventory type by the given amount. |
| `void` | `forceCompleteQuest()` | Forces completion of the current quest. |
| `void` | `ForceEquipItem(int itemid, short slot)` | Forces equipping an item. |
| `void` | `forceStartQuest()` | Forces the start of the current quest. |
| `void` | `forceStartQuest(int id)` | Forces the start of a quest with the specified ID. |
| `void` | `forceStartQuest(String customData)` | Forces the start of a quest with custom data. |
| `boolean` | `GagaRelicMedalEligibility()` | Checks eligibility for Gaga Relic Medal. |
| `void` | `gainAp(int amount)` | Grants ability points to the player. |
| `int` | `gainGachaponItem(int id, int quantity)` | Grants a GachAPON item. |
| `void` | `gainSP(int sp)` | Grants skill points to the player. |
| `void` | `genericGuildMessage(int code)` | Sends a generic guild message. |
| `boolean` | `getallowConversationCancel()` | Checks if the conversation can be canceled with the 'Esc' key. |
| `int[]` | `getAvailableAvatarIds(String type)` | Retrieves available avatar IDs for the specified type. |
| `int` | `getBuddyCapacity()` | Gets the buddy list kapasitas. |
| `Client` | `getC()` | Gets the client instance. |
| `int` | `getCashId_FromInvSlot(byte type, short slot)` | Gets the cash ID of an item in the specified slot. |
| `MSCharacter` | `getChar()` | Gets the player's character. |
| `String` | `getCurrentBankPassword()` | Gets the current bank password. |
| `int` | `getDisableScroll_FromInvSlot(short slot)` | Gets the disable scroll status for an item. |
| `int` | `getDojoPoints()` | Gets the player's Dojo points. |
| `int` | `getDojoRecord()` | Gets the player's Dojo record. |
| `int` | `getFilterBankItem_FromInvSlot(byte invType, short slot)` | Gets the filter bank item from the specified slot. |
| `String` | `getGagaRelicString(int type)` | Gets the Gaga Relic string for the specified type. |
| `int` | `getGuildSkill_BannerPlenty()` | Gets the guild skill Banner Plenty value. |
| `boolean` | `getIgnoreConversationRangeChat()` | Checks if conversation range chat is ignored. |
| `Inventory` | `getInventory(byte type)` | Gets the inventory of the specified type. |
| `int` | `getItemId_FromInvSlot(byte type, short slot)` | Gets the item ID from the specified slot. |
| `short` | `getKegs()` | Gets the number of kegs. |
| `String` | `getKingDonorNPCConversationString(int itemid)` | Gets the King Donor NPC conversation string. |
| `NPCChatType` | `getLastConversationType()` | Gets the last conversation type. |
| `int` | `getMeso()` | Gets the player's meso amount. |
| `int` | `getNpc()` | Gets the NPC ID of the conversation. |
| `MapleNPCStats` | `getNPCStats()` | Gets the NPC stats. |
| `int` | `getQuest()` | Gets the quest ID. |
| `String` | `getQuestCustomData()` | Gets the custom data for the quest. |
| `String` | `getQuestReadableTime(QuestStatus r)` | Gets the readable time for a quest status. |
| `String` | `getScriptedNPCItem()` | Gets the scripted NPC item. |
| `int` | `getSkillLevel(int skillid)` | Gets the level of a skill. |
| `MapleSquad` | `getSquad(String type)` | Gets the squad of the specified type. |
| `int` | `getSquadAvailability(String type)` | Gets the availability of a squad. |
| `boolean` | `getSquadList(String type, byte type_)` | Gets the squad member list. |
| `int` | `getSquadPlayerCount(String type)` | Gets the number of players in a squad. |
| `boolean` | `hasSkill(int skillid)` | Checks if the player has a specific skill. |
| `void` | `increaseGuildCapacity()` | Increases the guild capacity. |
| `byte` | `isSquadLeader(String type)` | Checks if the player is the squad leader. |
| `byte` | `isSquadMember(String type)` | Checks if the player is a squad member. |
| `int` | `isProfessionAbleToLevelup(int skillid)` | Checks if a profession skill can level up. |
| `boolean` | `isPlayerInstance()` | Checks if the player is in an instance. |
| `String` | `listMonsterDrop(int mobid)` | Lists all drops for a monster. |
| `String` | `listMonsterInMap()` | Lists all monsters in the current map. |
| `String` | `listSpeedRunRanking(String type)` | Lists speed run rankings. |
| `void` | `maxStats()` | Maximizes the player's stats. |
| `void` | `openDuey()` | Opens the Duey interface. |
| `void` | `openDuey_BBP()` | Opens the Duey BBP interface. |
| `void` | `openMerchantItemStore()` | Opens the merchant item store. |
| `void` | `openRepairShop()` | Opens the repair shop. |
| `void` | `openShop(int id)` | Opens a shop with the specified ID. |
| `void` | `PVPStatusUIOpen()` | Opens the PVP status UI. |
| `void` | `registerSquad(String type, int minutes, String startText)` | Registers a squad. |
| `void` | `RemoveItemfromSlot(byte type, short slot)` | Removes an item from the specified slot. |
| `boolean` | `removePlayerFromInstance()` | Removes the player from an instance. |
| `void` | `resetStats(int str, int dex, int int_, int luk)` | Resets the player's stats. |
| `long` | `ReturnEventInstance_DC(String target)` | Returns the event instance DC time. |
| `byte` | `retrieveLottery()` | Retrieves lottery data. |
| `void` | `saveCharacterToDB()` | Saves the character to the database. |
| `int` | `SelectGachaponItem(byte GachaCode)` | Selects a Gachapon item. |
| `void` | `sendCharacterCreate()` | Sends the character creation interface. |
| `void` | `sendStorage()` | Opens the storage interface. |
| `int` | `setAvatar(int ticket, int args)` | Sets the player's avatar. |
| `int` | `setRandomAvatar(int ticket, int... args_all)` | Sets a random avatar. |
| `void` | `setDojoRecord(boolean reset)` | Sets the Dojo record. |
| `void` | `setInstanceProp(String eventname, String key, String value)` | Sets an instance property. |
| `void` | `setQuestCustomData(String customData)` | Sets custom data for the quest. |
| `void` | `showSpecialNPCAnimation(int npcid, String animation)` | Shows a special NPC animation. |
| `boolean` | `start_DojoAgent(boolean dojo, boolean party)` | Starts the Dojo agent. |
| `byte` | `submitLottery(String sel)` | Submits a lottery selection. |
| `long` | `getTotaledLottery()` | Gets the totaled lottery value. |
| `void` | `TryGagaRelic(int pt)` | Attempts to use a Gaga Relic. |
| `boolean` | `TryKingDonorMedal(int meso, int itemid)` | Attempts to obtain a King Donor Medal. |
| `void` | `unequipEverything()` | Unequips all items. |
| `void` | `updateBuddyCapacity(int capacity)` | Updates the buddy list capacity. |
| `byte` | `updateImitedPlayerNPCStats()` | Updates the imitated player NPC stats. |
| `void` | `giveKegs(short kegs)` | Grants kegs to the player. |
| `void` | `giveWarmSun(short warmsun)` | Grants Warm Sun items. |
| `void` | `giveXMas(short XMas)` | Grants XMas items. |
| `short` | `getWarmSun()` | Gets the number of Warm Sun items. |
| `short` | `getXMas()` | Gets the number of XMas items. |

### Deprecated Methods
| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `void` | `completeQuest(int id)` | **Deprecated**: Completes a quest with the specified ID. |
| `void` | `startQuest(int id)` | **Deprecated**: Starts a quest with the specified ID. |

## Usage Notes
- The class is designed for handling NPC interactions in a game, likely based on the MapleStory framework.
- Methods like `startQuest` and `completeQuest` are deprecated; use `forceStartQuest` and `forceCompleteQuest` instead.
- The class supports extensive functionality for managing quests, inventory, guilds, alliances, and events.
- Some methods, such as `listMonsterInMap` and `listMonsterDrop`, are useful for generating NPC conversation options dynamically.

