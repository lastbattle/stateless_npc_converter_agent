
# AbstractPlayerInteraction

**Package**: `game.scripts`

**Inheritance**: `java.lang.Object` → `game.scripts.AbstractPlayerInteraction`

**Direct Known Subclasses**:
- `MapEnterInteraction`
- `NPCConversationManager`
- `PortalPlayerInteraction`
- `ReactorActionManager`

## Description
The `AbstractPlayerInteraction` class provides a foundation for handling player interactions within the game, offering methods to manage player attributes, inventory, quests, party interactions, map transitions, and more. It serves as a base class for specific interaction types in the game framework.

## Fields
- **`Client c`**: Represents the client session for the player.
- **`MSCharacter chr`**: Represents the player's character object.

## Constructor
- **`AbstractPlayerInteraction(Client c)`**: Initializes the interaction with the specified client.

## Method Summary
| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `void` | `addHP(int delta)` | Adds health points to the player. |
| `void` | `addInfoExQuestData(int questId, String data)` | Adds infoQuestEx data for a quest. |
| `String` | `allMembersEligibleForPQ_Limit(int QuestId, int max)` | Checks if all party members are eligible for a Party Quest (PQ) via quest ID. |
| `boolean` | `allMembersHere()` | Checks if all party members are in the current field. |
| `boolean` | `allMembersHereWithinLevel(int min, int max)` | Checks if all party members are within a specified level range. |
| `boolean` | `allMembersNear(int portal, int distanceSquare)` | Checks if all party members are near a specified portal. |
| `void` | `autoBanUser(String reason)` | Automatically bans a user with a given reason. |
| `void` | `battlePointIncrease(int inc)` | Increases the player's battle points. |
| `void` | `broadcastEarnTitleMsg(String data)` | Broadcasts a title message to the field. |
| `void` | `broadcastWorldMsg(int type, String msg)` | Broadcasts a world message to all online players. |
| `void` | `cancelItem(int id)` | Cancels a currently active consumable item by ID. |
| `boolean` | `canHold(int itemid)` | Checks if the player can hold an item with a free inventory slot. |
| `void` | `changeChannel(byte channel)` | Changes the player's channel. |
| `void` | `changeMusic(String songName)` | Changes the background music of the field. |
| `boolean` | `checkAndSet_player_bosslimit(int qid, int times)` | Checks and sets the player's daily boss quest limit. |
| `int` | `checkReqLevel(int level_cutoffPoint)` | Checks the level requirement of the player's party. |
| `void` | `clearSavedLocation(String loc)` | Clears a saved location by name. |
| `void` | `destroyReactor(int mapid, int id)` | Destroys a reactor in the specified field. |
| `void` | `dojo_getUp()` | Teleports the player to the top of the Mulung Dojo. |
| `boolean` | `dojoAgent_NextMap(boolean dojo, boolean fromresting)` | Proceeds to the next map of the Mulung Dojo. |
| `void` | `dojoAgentParty_NextMap(boolean fromresting)` | Proceeds to the next map of the Mulung Dojo for the party. |
| `boolean` | `enterMiniDungeon(int baseid, int dungeonid, byte numdungeons)` | Teleports the player to a mini dungeon. |
| `boolean` | `enterMiniDungeon(int baseid, int dungeonid, byte numdungeons, int portalId, String portalName)` | Teleports the player to a mini dungeon with specific portal details. |
| `void` | `environmentChange(boolean broadcast, String env)` | Changes the object state effect with the WZ path. |
| `boolean` | `EvolvePet(int petIndex, int itemId)` | Evolves a pet. |
| `MapleField` | `findAvailableMapFrom(int start, int end)` | Finds an empty map from a base ID. |
| `void` | `forceCompleteQuest(int id)` | Forces completion of a quest by ID. |
| `void` | `forceStartQuest(int id, String data)` | Forces the start of a quest with custom data. |
| `void` | `forceStartReactor(int mapid, int id)` | Forces the start of a reactor. |
| `void` | `forfeitQuest(int id)` | Forces forfeiture of a quest by ID. |
| `void` | `forfeitQuest(int id, boolean force)` | Forces forfeiture of a quest, bypassing checks. |
| `void` | `gainCloseness(int closeness, int index)` | Increases the closeness of a pet by index. |
| `void` | `gainClosenessAll(int closeness)` | Increases the closeness of all spawned pets. |
| `void` | `gainDonorPoints(int donorpoints)` | Increases the player's donor points. |
| `void` | `gainExp(int gain)` | Increases the player's EXP. |
| `void` | `gainExp_Percentage(int rate)` | Increases the player's EXP by a percentage of the level-up requirement. |
| `void` | `gainFame(int amt)` | Increases the player's fame. |
| `void` | `gainGP(int gain)` | Increases the player's guild points. |
| `boolean` | `gainItem(int id, short quantity)` | Gives the player an item by ItemID. |
| `boolean` | `gainItem(int id, short quantity, boolean randomStats)` | Gives the player an item with optional random stats. |
| `boolean` | `gainItem(int id, short quantity, boolean randomStats, long period)` | Gives the player an item with a time limit. |
| `boolean` | `gainItem(int id, short quantity, long period)` | Gives the player an item with a time limit. |
| `void` | `gainLockedItem(int itemid, short qtn, boolean RandomizeStats)` | Gives the player a locked item. |
| `void` | `gainMeso(int gain)` | Increases the player's mesos. |
| `boolean` | `gainNX(int amount)` | Increases the player's NX amount. |
| `void` | `gainUltimateAdventurerItem()` | Gives the player an ultimate adventurer item based on their job. |
| `void` | `gainUltimateAdventurerItemEx(int jobid, int padding)` | Gives the player an ultimate adventurer item for a specific job. |
| `void` | `gainVotePoints(int vp)` | Increases the player's vote points. |
| `String` | `generateString(int num)` | Generates a string of specified length. |
| `boolean` | `get_player_bosslimit(int qid, int times)` | Gets the player's boss quest limit. |
| `int` | `getCarnivalParty()` | Gets the monster carnival party the player is in. |
| `int` | `getChannelNumber()` | Gets the current channel ID. |
| `Client` | `getClient()` | Gets the client session object. |
| `Set<String>` | `getCutSceneList()` | Gets the list of available cut scenes. |
| `int` | `getDayOfWeek()` | Gets the day of the week. |
| `int` | `getDonorPoints()` | Gets the player's donor points. |
| `double` | `getDropRate()` | Gets the server drop rate. |
| `EventInstanceManager` | `getEventInstance()` | Gets the current event instance. |
| `EventManager` | `getEventManager(String event)` | Gets the event manager by name. |
| `double` | `getExpRate()` | Gets the server EXP rate. |
| `Rectangle` | `getFieldAreaByIndex(int index)` | Gets the rectangle of a field area by index. |
| `int` | `getForcedReturnMapId()` | Gets the forced return field ID. |
| `MapleGuild` | `getGuild()` | Gets the player's guild object. |
| `int` | `getGuildcontribute()` | Gets the player's guild contribution amount. |

## Detailed Methods

### addHP
```java
public final void addHP(int delta)
```
**Description**: Adds health points to the player.

**Parameters**:
- `delta`: The amount of health points to add.

---

### addInfoExQuestData
```java
public void addInfoExQuestData(int questId, String data)
```
**Description**: Adds infoQuestEx data for a specified quest.

**Parameters**:
- `questId`: The ID of the quest.
- `data`: The data to be added.

---

### allMembersEligibleForPQ_Limit
```java
public String allMembersEligibleForPQ_Limit(int QuestId, int max)
```
**Description**: Checks if all party members are eligible for a Party Quest (PQ) based on the quest ID and a maximum limit.

**Parameters**:
- `QuestId`: The ID of the quest.
- `max`: The maximum limit for eligibility.

**Returns**: A string indicating eligibility status or issues.

---

### allMembersHere
```java
public boolean allMembersHere()
```
**Description**: Checks if all party members are in the current field.

**Returns**: `true` if all members are present, `false` otherwise.

---

### allMembersHereWithinLevel
```java
public boolean allMembersHereWithinLevel(int min, int max)
```
**Description**: Checks if all party members are within a specified level range.

**Parameters**:
- `min`: The minimum level.
- `max`: The maximum level.

**Returns**: `true` if all members are within the level range, `false` otherwise.

---

### allMembersNear
```java
public boolean allMembersNear(int portal, int distanceSquare)
```
**Description**: Checks if all party members are near a specified portal within a given distance.

**Parameters**:
- `portal`: The portal ID.
- `distanceSquare`: The squared distance within which members must be.

**Returns**: `true` if all members are near, `false` otherwise.

---

### autoBanUser
```java
public void autoBanUser(String reason)
```
**Description**: Automatically bans a user with a specified reason.

**Parameters**:
- `reason`: The reason for the ban.

---

### battlePointIncrease
```java
public void battlePointIncrease(int inc)
```
**Description**: Increases the player's battle points.

**Parameters**:
- `inc`: The amount to increase.

---

### broadcastEarnTitleMsg
```java
public final void broadcastEarnTitleMsg(String data)
```
**Description**: Broadcasts a title message to the field.

**Parameters**:
- `data`: The message to broadcast.

---

### broadcastWorldMsg
```java
public void broadcastWorldMsg(int type, String msg)
```
**Description**: Broadcasts a world message to all online players.

**Parameters**:
- `type`: The type of message.
- `msg`: The message content.

---

### cancelItem
```java
public final void cancelItem(int id)
```
**Description**: Cancels a currently active consumable item by ID.

**Parameters**:
- `id`: The item ID.

---

### canHold
```java
public final boolean canHold(int itemid)
```
**Description**: Checks if the player has a free inventory slot to hold an item.

**Parameters**:
- `itemid`: The ID of the item.

**Returns**: `true` if the player can hold the item, `false` otherwise.

---

### changeChannel
```java
public void changeChannel(byte channel)
```
**Description**: Changes the player's current channel.

**Parameters**:
- `channel`: The target channel ID.

---

### changeMusic
```java
public void changeMusic(String songName)
```
**Description**: Changes the background music of the current field.

**Parameters**:
- `songName`: The name of the song to play.

---

### checkAndSet_player_bosslimit
```java
public boolean checkAndSet_player_bosslimit(int qid, int times)
```
**Description**: Checks and sets the player's daily boss quest limit.

**Parameters**:
- `qid`: The quest ID.
- `times`: The number of allowed attempts.

**Returns**: `true` if the limit is set or valid, `false` otherwise.

---

### checkReqLevel
```java
public final int checkReqLevel(int level_cutoffPoint)
```
**Description**: Checks the level requirement of the player's party.

**Parameters**:
- `level_cutoffPoint`: The minimum level required.

**Returns**: An integer indicating the level check result.

---

### clearSavedLocation
```java
public final void clearSavedLocation(String loc)
```
**Description**: Clears a saved location by its name.

**Parameters**:
- `loc`: The name of the saved location.

---

### destroyReactor
```java
public void destroyReactor(int mapid, int id)
```
**Description**: Destroys a reactor in the specified field.

**Parameters**:
- `mapid`: The field ID.
- `id`: The reactor ID.

---

### dojo_getUp
```java
public final void dojo_getUp()
```
**Description**: Teleports the player to the top of the Mulung Dojo.

---

### dojoAgent_NextMap
```java
public final boolean dojoAgent_NextMap(boolean dojo, boolean fromresting)
```
**Description**: Proceeds to the next map of the Mulung Dojo.

**Parameters**:
- `dojo`: Indicates if it's a dojo map.
- `fromresting`: Indicates if transitioning from a resting state.

**Returns**: `true` if the transition is successful, `false` otherwise.

---

### dojoAgentParty_NextMap
```java
public final void dojoAgentParty_NextMap(boolean fromresting)
```
**Description**: Proceeds to the next map of the Mulung Dojo for the party.

**Parameters**:
- `fromresting`: Indicates if transitioning from a resting state.

---

### enterMiniDungeon
```java
public final boolean enterMiniDungeon(int baseid, int dungeonid, byte numdungeons)
```
**Description**: Teleports the player to a mini dungeon.

**Parameters**:
- `baseid`: The base field ID.
- `dungeonid`: The dungeon start field ID.
- `numdungeons`: The number of dungeons.

**Returns**: `true` if the teleport is successful, `false` otherwise.

---

### enterMiniDungeon
```java
public final boolean enterMiniDungeon(int baseid, int dungeonid, byte numdungeons, int portalId, String portalName)
```
**Description**: Teleports the player to a mini dungeon with specific portal details.

**Parameters**:
- `baseid`: The base field ID.
- `dungeonid`: The dungeon start field ID.
- `numdungeons`: The number of dungeons.
- `portalId`: The portal ID to teleport to.
- `portalName`: The portal name to teleport to.

**Returns**: `true` if the teleport is successful, `false` otherwise.

---

### environmentChange
```java
public void environmentChange(boolean broadcast, String env)
```
**Description**: Changes the object state effect with the specified WZ path.

**Parameters**:
- `broadcast`: Whether to broadcast the change.
- `env`: The WZ path for the environment.

---

### EvolvePet
```java
public final boolean EvolvePet(int petIndex, int itemId)
```
**Description**: Evolves a pet.

**Parameters**:
- `petIndex`: The index of the pet.
- `itemId`: The item ID used for evolution.

**Returns**: `true` if the evolution is successful, `false` otherwise.

---

### findAvailableMapFrom
```java
public final MapleField findAvailableMapFrom(int start, int end)
```
**Description**: Finds an empty map from a base ID, iterating up to the end ID.

**Parameters**:
- `start`: The starting map ID.
- `end`: The ending map ID.

**Returns**: The `MapleField` object of the available map, or `null` if none found.

---

### forceCompleteQuest
```java
public void forceCompleteQuest(int id)
```
**Description**: Forces the completion of a quest by ID.

**Parameters**:
- `id`: The quest ID.

---

### forceStartQuest
```java
public void forceStartQuest(int id, String data)
```
**Description**: Forces the start of a quest with custom data.

**Parameters**:
- `id`: The quest ID.
- `data`: Custom data for the quest.

---

### forceStartReactor
```java
public void forceStartReactor(int mapid, int id)
```
**Description**: Forces the start of a reactor in the specified field.

**Parameters**:
- `mapid`: The field ID.
- `id`: The reactor ID.

---

### forfeitQuest
```java
public void forfeitQuest(int id)
```
**Description**: Forces the forfeiture of a quest by ID.

**Parameters**:
- `id`: The quest ID.

---

### forfeitQuest
```java
public void forfeitQuest(int id, boolean force)
```
**Description**: Forces the forfeiture of a quest, optionally bypassing checks.

**Parameters**:
- `id`: The quest ID.
- `force`: Whether to bypass forfeit checks.

---

### gainCloseness
```java
public final void gainCloseness(int closeness, int index)
```
**Description**: Increases the closeness of a pet by its index.

**Parameters**:
- `closeness`: The amount to increase.
- `index`: The pet index.

---

### gainClosenessAll
```java
public final void gainClosenessAll(int closeness)
```
**Description**: Increases the closeness of all currently spawned pets.

**Parameters**:
- `closeness`: The amount to increase.

---

### gainDonorPoints
```java
public final void gainDonorPoints(int donorpoints)
```
**Description**: Increases the player's donor points.

**Parameters**:
- `donorpoints`: The amount to increase.

---

### gainExp
```java
public void gainExp(int gain)
```
** Nodes**: Increases the player's EXP.

**Parameters**:
- `gain`: The amount of EXP to add.

---

### gainExp_Percentage
```java
public void gainExp_Percentage(int rate)
```
**Description**: Increases the player's EXP by a percentage of the current level's required EXP.

**Parameters**:
- `rate`: The percentage rate.

---

### gainFame
```java
public void gainFame(int amt)
```
**Description**: Increases the player's fame.

**Parameters**:
- `amt`: The amount of fame to add.

---

### gainGP
```java
public void gainGP(int gain)
```
**Description**: Increases the player's guild points.

**Parameters**:
- `gain`: The amount of guild points to add.

---

### gainItem
```java
public boolean gainItem(int id, short quantity)
```
**Description**: Gives the player an item by ItemID.

**Parameters**:
- `id`: The item ID.
- `quantity`: The quantity to give.

**Returns**: `true` if the item was added successfully, `false` otherwise.

---

### gainItem
```java
public boolean gainItem(int id, short quantity, boolean randomStats)
```
**Description**: Gives the player an item with optional random stats.

**Parameters**:
- `id`: The item ID.
- `quantity`: The quantity to give.
- `randomStats`: Whether to apply random stats.

**Returns**: `true` if the item was added successfully, `false` otherwise.

---

### gainItem
```java
public boolean gainItem(int id, short quantity, boolean randomStats, long period)
```
**Description**: Gives the player an item with a time limit and optional random stats.

**Parameters**:
- `id`: The item ID.
- `quantity`: The quantity to give.
- `randomStats`: Whether to apply random stats.
- `period`: The duration of the item's validity (in milliseconds).

**Returns**: `true` if the item was added successfully, `false` otherwise.

---

### gainItem
```java
public boolean gainItem(int id, short quantity, long period)
```
**Description**: Gives the player an item with a time limit.

**Parameters**:
- `id`: The item ID.
- `quantity`: The quantity to give.
- `period`: The duration of the item's validity (in milliseconds).

**Returns**: `true` if the item was added successfully, `false` otherwise.

---

### gainLockedItem
```java
public final void gainLockedItem(int itemid, short qtn, boolean RandomizeStats)
```
**Description**: Gives the player a locked item, bound to the player.

**Parameters**:
- `itemid`: The item ID.
- `qtn`: The quantity to give.
- `RandomizeStats`: Whether to apply random stats.

---

### gainMeso
```java
public void gainMeso(int gain)
```
**Description**: Increases the player's mesos.

**Parameters**:
- `gain`: The amount of mesos to add.

---

### gainNX
```java
public boolean gainNX(int amount)
```
**Description**: Increases the player's NX (cash shop currency) amount.

**Parameters**:
- `amount`: The amount of NX to add.

**Returns**: `true` if the NX was added successfully, `false` otherwise.

---

### gainUltimateAdventurerItem
```java
public void gainUltimateAdventurerItem()
```
**Description**: Gives the player an ultimate adventurer item based on their current job.

---

### gainUltimateAdventurerItemEx
```java
public void gainUltimateAdventurerItemEx(int jobid, int padding)
```
**Description**: Gives the player an ultimate adventurer item for a specific job.

**Parameters**:
- `jobid`: The job ID.
- `padding`: Additional padding parameter (context-specific).

---

### gainVotePoints
```java
public final void gainVotePoints(int vp)
```
**Description**: Increases the player's vote points.

**Parameters**:
- `vp`: The amount of vote points to add.

---

### generateString
```java
public String generateString(int num)
```
**Description**: Generates a string of specified length.

**Parameters**:
- `num`: The length of the string.

**Returns**: The generated string.

---

### get_player_bosslimit
```java
public boolean get_player_bosslimit(int qid, int times)
```
**Description**: Gets the player's boss quest limit for the day.

**Parameters**:
- `qid`: The quest ID.
- `times`: The number of allowed attempts.

**Returns**: `true` if the limit is valid, `false` otherwise.

---

### getCarnivalParty
```java
public int getCarnivalParty()
```
**Description**: Gets the monster carnival party the player is currently in.

**Returns**: The carnival party ID.

---

### getChannelNumber
```java
public int getChannelNumber()
```
**Description**: Gets the current channel ID the player is in.

**Returns**: The channel ID.

---

### getClient
```java
public Client getClient()
```
**Description**: Gets the client session object.

**Returns**: The `Client` object.

---

### getCutSceneList
```java
public Set<String> getCutSceneList()
```
**Description**: Gets the list of available cut scenes in the current game version.

**Returns**: A `Set` of cut scene names.

---

### getDayOfWeek
```java
public int getDayOfWeek()
```
**Description**: Gets the current day of the week.

**Returns**: An integer representing the day (e.g., 1 for Monday).

---

### getDonorPoints
```java
public final int getDonorPoints()
```
**Description**: Gets the player's current donor points.

**Returns**: The number of donor points.

---

### getDropRate
```java
public double getDropRate()
```
**Description**: Gets the server's drop rate.

**Returns**: The drop rate as a double.

---

### getEventInstance
```java
public EventInstanceManager getEventInstance()
```
**Description**: Gets the current active event instance the player is in.

**Returns**: The `EventInstanceManager` object.

---

### getEventManager
```java
public EventManager getEventManager(String event)
```
**Description**: Gets the event manager instance by name.

**Parameters**:
- `event`: The name of the event.

**Returns**: The `EventManager` object.

---

### getExpRate
```java
public double getExpRate()
```
**Description**: Gets the server's EXP rate.

**Returns**: The EXP rate as a double.

---

### getFieldAreaByIndex
```java
public Rectangle getFieldAreaByIndex(int index)
```
**Description**: Gets the rectangle of a field area by its index.

**Parameters**:
- `index`: The area index.

**Returns**: A `Rectangle` object representing the field area.

---

### getForcedReturnMapId
```java
public int getForcedReturnMapId()
```
**Description**: Gets the forced return field ID of the current field.

**Returns**: The field ID.

---

### getGuild
```java
public final MapleGuild getGuild()
```
**Description**: Gets the player's current guild object.

**Returns**: The `MapleGuild` object.

---

### getGuildcontribute
```java
public int getGuildcontribute()
```
**Description**: Gets the player's guild contribution amount.

**Returns**: The contribution amount.

---

