
# StatelessNPCConversationManager

**Package**: `game.scripts`

**Inheritance**:
- Extends: `game.scripts.NPCConversationManager`
- Implements: `game.scripts.StatelessNPCConversationInterface`

**Description**:
The `StatelessNPCConversationManager` class manages stateless NPC conversations in the game framework, extending the `NPCConversationManager` to provide methods for handling various types of NPC interactions without maintaining conversation state between calls. It supports a range of conversation types, including text inputs, menu selections, yes/no prompts, and inventory exchanges.

---

## Constructor Summary

| Constructor | Description |
|-------------|-------------|
| `StatelessNPCConversationManager(Client c, int npcId, MapleNPC npc, int questid, NPCConversationType type, String scriptedNPCItem)` | Initializes a new instance with client, NPC, quest, conversation type, and scripted item details. |

---

## Method Summary

| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `void` | `setConversationMode(int conversationContext)` | Sets the conversation mode context. |
| `void` | `setConversationSelection(int conversationSelection)` | Sets the conversation selection value. |
| `Runnable` | `getFirstConversationBackStack()` | Gets the last NPC conversation stack for backward navigation. |
| `Runnable` | `getFirstConversationFrontStack()` | Gets the last forward NPC conversation stack for forward navigation. |
| `int` | `say(String text)` | Displays an NPC dialogue message. |
| `int` | `say(String text, int overrideNPCId, boolean isSelfSay)` | Displays an NPC dialogue with optional NPC ID override and self-say flag. |
| `int` | `sayOk(String text)` | Displays a message and ends the conversation, calling `dispose()`. |
| `int` | `askYesNo(String text)` | Prompts a yes/no question, returning 1 for accept, 0 for deny. |
| `int` | `askYesNo(String text, int overrideNPCId, boolean isSelfSay)` | Prompts a yes/no question with NPC ID override and self-say option. |
| `int` | `askAccept(String text)` | Prompts an accept/deny question asynchronously. |
| `int` | `askAccept(String text, int overrideNPCId, boolean isSelfSay)` | Prompts an accept/deny question with NPC ID override and self-say option. |
| `int` | `askMenu(String text)` | Prompts a menu selection, returning the selected menu ID. |
| `int` | `askMenu(String baseText, String... selections)` | Prompts a menu selection with provided options. |
| `String` | `askText(String text)` | Prompts for text input, returning the client's input. |
| `String` | `askTextVerification(String text)` | Prompts for captcha text verification. |
| `int` | `askImage(String imagePath, int extraData)` | Displays an image-based prompt. |
| `int` | `askNumber(String text, int def, int min, int max)` | Prompts for a numeric input within a specified range. |
| `String` | `askBoxText(String askMsg, String defaultAnswer, int column, int line)` | Prompts for text input with a default answer and size constraints. |
| `String` | `askQuiz(String text, String problem, String hint, int inputMin, int inputMax, int limitTime)` | Prompts for a quiz answer with a hint and time limit. |
| `int` | `askAvatar(String text, int... avatars)` | Prompts for an avatar selection. |
| `int` | `askSlideMenu(String text)` | Prompts for a slide menu selection. |
| `boolean` | `inventoryExchange(int itemSource, short srcCount, int itemExchangeFor, short count)` | Exchanges one item for another asynchronously. |

---

## Constructor Details

### StatelessNPCConversationManager

```java
public StatelessNPCConversationManager(Client c, int npcId, MapleNPC npc, int questid, NPCConversationType type, String scriptedNPCItem)
```

**Parameters**:
- `c`: The client instance associated with the player.
- `npcId`: The ID of the NPC.
- `npc`: The `MapleNPC` object representing the NPC.
- `questid`: The ID of the associated quest.
- `type`: The `NPCConversationType` enum specifying the conversation type.
- `scriptedNPCItem`: A string representing the scripted NPC item.

**Description**:
Initializes a new instance of the `StatelessNPCConversationManager` with the specified client, NPC details, quest ID, conversation type, and scripted item.

---

## Method Details

### setConversationMode

```java
public void setConversationMode(int conversationContext)
```

**Parameters**:
- `conversationContext`: The context value for the conversation mode.

**Description**:
Sets the conversation mode to the specified context, controlling the behavior or flow of the NPC interaction.

---

### setConversationSelection

```java
public void setConversationSelection(int conversationSelection)
```

**Parameters**:
- `conversationSelection`: The selection value for the conversation.

**Description**:
Sets the conversation selection value, which may influence subsequent conversation logic or branching.

---

### getFirstConversationBackStack

```java
public Runnable getFirstConversationBackStack()
```

**Returns**:
- A `Runnable` representing the last NPC conversation stack for backward navigation.

**Description**:
Retrieves the conversation stack used for navigating backward in NPC dialogue (e.g., for "say" navigation).

---

### getFirstConversationFrontStack

```java
public Runnable getFirstConversationFrontStack()
```

**Returns**:
- A `Runnable` representing the last forward NPC conversation stack.

**Description**:
Retrieves the conversation stack used for navigating forward in NPC dialogue (e.g., for "say" navigation).

---

### say

```java
public int say(String text)
```

**Parameters**:
- `text`: The dialogue text to display.

**Returns**:
- An integer representing the result of the dialogue display.

**Description**:
Displays the specified dialogue text to the player as part of the NPC conversation.

---

### say (Overloaded)

```java
public int say(String text, int overrideNPCId, boolean isSelfSay)
```

**Parameters**:
- `text`: The dialogue text to display.
- `overrideNPCId`: An NPC ID to override the default NPC ID.
- `isSelfSay`: A boolean indicating if the dialogue is a self-say (player's own dialogue).

**Returns**:
- An integer representing the result of the dialogue display.

**Description**:
Displays the specified dialogue text with options to override the NPC ID and indicate if it is a self-say dialogue.

---

### sayOk

```java
public int sayOk(String text)
```

**Parameters**:
- `text`: The dialogue text to display.

**Returns**:
- An integer representing the result of the dialogue display.

**Description**:
Displays a message and ends the conversation, automatically calling `dispose()` to clean up resources.

---

### askYesNo

```java
public int askYesNo(String text)
```

**Parameters**:
- `text`: The yes/no question text.

**Returns**:
- `1` if the player accepts, `0` if the player denies.

**Description**:
Prompts the player with a yes/no question and returns the player's response.

---

### askYesNo (Overloaded)

```java
public int askYesNo(String text, int overrideNPCId, boolean isSelfSay)
```

**Parameters**:
- `text`: The yes/no question text.
- `overrideNPCId`: An NPC ID to override the default NPC ID.
- `isSelfSay`: A boolean indicating if the dialogue is a self-say.

**Returns**:
- `1` if the player accepts, `0` if the player denies.

**Description**:
Prompts the player with a yes/no question, allowing for NPC ID override and self-say specification.

---

### askAccept

```java
public int askAccept(String text)
```

**Parameters**:
- `text`: The accept/deny question text.

**Returns**:
- `1` if the player accepts, `0` if the player denies.

**Description**:
Prompts the player with an accept/deny question in an asynchronous manner.

---

### askAccept (Overloaded)

```java
public int askAccept(String text, int overrideNPCId, boolean isSelfSay)
```

**Parameters**:
- `text`: The accept/deny question text.
- `overrideNPCId`: An NPC ID to override the default NPC ID.
- `isSelfSay`: A boolean indicating if the dialogue is a self-say.

**Returns**:
- `1` if the player accepts, `0` if the player denies.

**Description**:
Prompts the player with an accept/deny question, with options for NPC ID override and self-say.

---

### askMenu

```java
public int askMenu(String text)
```

**Parameters**:
- `text`: The menu prompt text.

**Returns**:
- The ID of the selected menu item.

**Description**:
Prompts the player to select an option from a menu, returning the selected item's ID.

---

### askMenu (Overloaded)

```java
public int askMenu(String baseText, String... selections)
```

**Parameters**:
- `baseText`: The base prompt text for the menu.
- `selections`: An array of selection options.

**Returns**:
- The ID of the selected menu item.

**Description**:
Prompts the player with a menu of specified options, returning the selected item's ID.

---

### askText

```java
public String askText(String text)
```

**Parameters**:
- `text`: The text input prompt.

**Returns**:
- The text entered by the player.

**Description**:
Prompts the player for text input and returns the entered text.

---

### askTextVerification

```java
public String askTextVerification(String text)
```

**Parameters**:
- `text`: The captcha verification prompt.

**Returns**:
- The text entered by the player.

**Description**:
Prompts the player for a captcha text verification and returns the entered text.

---

### askImage

```java
public int askImage(String imagePath, int extraData)
```

**Parameters**:
- `imagePath`: The path to the image to display.
- `extraData`: Additional data for the image prompt.

**Returns**:
- An integer representing the result of the image prompt.

**Description**:
Displays an image-based prompt to the player and returns the result.

---

### askNumber

```java
public int askNumber(String text, int def, int min, int max)
```

**Parameters**:
- `text`: The numeric input prompt.
- `def`: The default value.
- `min`: The minimum allowed value.
- `max`: The maximum allowed value.

**Returns**:
- The number entered by the player.

**Description**:
Prompts the player for a numeric input within the specified range and returns the entered number.

---

### askBoxText

```java
public String askBoxText(String askMsg, String defaultAnswer, int column, int line)
```

**Parameters**:
- `askMsg`: The text input prompt.
- `defaultAnswer`: The default text answer.
- `column`: The number of columns for the input box.
- `line`: The number of lines for the input box.

**Returns**:
- The text entered by the player.

**Description**:
Prompts the player for text input with a default answer and specified input box dimensions.

---

### askQuiz

```java
public String askQuiz(String text, String problem, String hint, int inputMin, int inputMax, int limitTime)
```

**Parameters**:
- `text`: The quiz prompt text.
- `problem`: The quiz problem statement.
- `hint`: A hint for the quiz.
- `inputMin`: The minimum allowed input value.
- `inputMax`: The maximum allowed input value.
- `limitTime`: The time limit for the quiz in seconds.

**Returns**:
- The player's answer to the quiz.

**Description**:
Prompts the player with a quiz, including a problem, hint, and time limit, and returns the player's answer.

---

### askAvatar

```java
public int askAvatar(String text, int... avatars)
```

**Parameters**:
- `text`: The avatar selection prompt.
- `avatars`: An array of avatar IDs.

**Returns**:
- The ID of the selected avatar.

**Description**:
Prompts the player to select an avatar from the provided options and returns the selected avatar's ID.

---

### askSlideMenu

```java
public int askSlideMenu(String text)
```

**Parameters**:
- `text`: The slide menu prompt.

**Returns**:
- The ID of the selected slide menu item.

**Description**:
Prompts the player to select an item from a slide menu and returns the selected item's ID.

---

### inventoryExchange

```java
public boolean inventoryExchange(int itemSource, short srcCount, int itemExchangeFor, short count)
```

**Parameters**:
- `itemSource`: The ID of the item to exchange (excludes equipped items).
- `srcCount`: The quantity of the source item to exchange (must be positive).
- `itemExchangeFor`: The ID of the item to receive.
- `count`: The quantity of the item to receive (must be positive).

**Returns**:
- `true` if the exchange was successful, `false` otherwise.

**Description**:
Performs an asynchronous item exchange, removing the specified quantity of the source item and adding the specified quantity of the target item to the player's inventory.

---

