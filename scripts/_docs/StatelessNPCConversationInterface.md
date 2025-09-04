
# Interface StatelessNPCConversationInterface

**Package**: `game.scripts`

**Description**: Export method for scripts

**All Known Implementing Classes**: `StatelessNPCConversationManager`

---

## Method Summary

| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `int` | `askAccept(String text)` | Ask accept/deny conversation |
| `int` | `askAccept(String text, int overrideNPCId, boolean isSelfSay)` | Ask accept/deny conversation with NPC override |
| `int` | `askAvatar(String text, int... avatars)` | Ask avatar input request |
| `String` | `askBoxText(String askMsg, String defaultAnswer, int column, int line)` | Ask text input in a box |
| `int` | `askImage(String imagePath, int extraData)` | Ask an image text |
| `int` | `askMenu(String text)` | Ask accept/deny |
| `int` | `askMenu(String baseText, String... selections)` | Ask menu with selections |
| `int` | `askNumber(String text, int def, int min, int max)` | Ask number |
| `String` | `askQuiz(String text, String problem, String hint, int inputMin, int inputMax, int limitTime)` | Ask quiz input |
| `int` | `askSlideMenu(String text)` | Ask slide menu input |
| `String` | `askText(String text)` | Ask text input |
| `String` | `askTextVerification(String text)` | Ask text verification input |
| `int` | `askYesNo(String text)` | Ask yes/no |
| `int` | `askYesNo(String text, int overrideNPCId, boolean isSelfSay)` | Ask yes/no with NPC override |
| `boolean` | `inventoryExchange(int itemSource, short srcCount, int itemExchangeFor, short count)` | Exchange an item for another asynchronously |
| `int` | `say(String text)` | Say |
| `int` | `say(String text, int overrideNPCId, boolean isSelfSay)` | Say with NPC override |
| `int` | `sayOk(String text)` | Say OK, ends conversation |

---

## Method Details

### say

```java
int say(String text)
```

**Description**: Displays a message from the NPC.

**Parameters**:
- `text` - The message text to be displayed.

**Returns**: `int` - Status code (specific meaning depends on implementation).

---

### say

```java
int say(String text, int overrideNPCId, boolean isSelfSay)
```

**Description**: Displays a message with options to override the NPC ID and specify if it's a self-say.

**Parameters**:
- `text` - The message text to be displayed.
- `overrideNPCId` - The NPC ID to override the default.
- `isSelfSay` - Whether the message is a self-say.

**Returns**: `int` - Status code.

---

### sayOk

```java
int sayOk(String text)
```

**Description**: Displays a message and ends the conversation, calling `dispose()` automatically.

**Parameters**:
- `text` - The message text to be displayed.

**Returns**: `int` - Status code.

---

### askYesNo

```java
int askYesNo(String text)
```

**Description**: Prompts the player with a yes/no question.

**Parameters**:
- `text` - The question text.

**Returns**: `int` - `1` for Accept, `0` for Deny.

---

### askYesNo

```java
int askYesNo(String text, int overrideNPCId, boolean isSelfSay)
```

**Description**: Prompts the player with a yes/no question, with NPC override options.

**Parameters**:
- `text` - The question text.
- `overrideNPCId` - The NPC ID to override the default.
- `isSelfSay` - Whether the message is a self-say.

**Returns**: `int` - Status code.

---

### askAccept

```java
int askAccept(String text)
```

**Description**: Prompts the player with an accept/deny conversation.

**Parameters**:
- `text` - The conversation text.

**Returns**: `int` - `1` for Accept, `0` for Deny.

---

### askAccept

```java
int askAccept(String text, int overrideNPCId, boolean isSelfSay)
```

**Description**: Prompts the player with an accept/deny conversation, with NPC override options.

**Parameters**:
- `text` - The conversation text.
- `overrideNPCId` - The NPC ID to override the default.
- `isSelfSay` - Whether the message is a self-say.

**Returns**: `int` - Status code.

---

### askMenu

```java
int askMenu(String text)
```

**Description**: Prompts the player with a menu selection.

**Parameters**:
- `text` - The menu text.

**Returns**: `int` - The menu selection ID.

---

### askMenu

```java
int askMenu(String baseText, String... selections)
```

**Description**: Prompts the player with a menu containing specific selections.

**Parameters**:
- `baseText` - The base text for the menu.
- `selections` - The selection options.

**Returns**: `int` - The selected option ID.

---

### askText

```java
String askText(String text)
```

**Description**: Prompts the player for text input.

**Parameters**:
- `text` - The prompt text.

**Returns**: `String` - The text input by the client.

---

### askTextVerification

```java
String askTextVerification(String text)
```

**Description**: Prompts the player for text input with verification.

**Parameters**:
- `text` - The prompt text.

**Returns**: `String` - The verified text input.

---

### askImage

```java
int askImage(String imagePath, int extraData)
```

**Description**: Prompts the player with an image-based text.

**Parameters**:
- `imagePath` - The path to the image.
- `extraData` - Additional data for the prompt.

**Returns**: `int` - Status code.

---

### askNumber

```java
int askNumber(String text, int def, int min, int max)
```

**Description**: Prompts the player for a numerical input within a range.

**Parameters**:
- `text` - The prompt text.
- `def` - The default value.
- `min` - The minimum allowed value.
- `max` - The maximum allowed value.

**Returns**: `int` - The number input by the client.

---

### askBoxText

```java
String askBoxText(String askMsg, String defaultAnswer, int column, int line)
```

**Description**: Prompts the player for text input in a box with specified dimensions.

**Parameters**:
- `askMsg` - The prompt message.
- `defaultAnswer` - The default text.
- `column` - The number of columns for the text box.
- `line` - The number of lines for the text box.

**Returns**: `String` - The text input by the client.

---

### askQuiz

```java
String askQuiz(String text, String problem, String hint, int inputMin, int inputMax, int limitTime)
```

**Description**: Prompts the player with a quiz question.

**Parameters**:
- `text` - The quiz text.
- `problem` - The quiz problem statement.
- `hint` - A hint for the quiz.
- `inputMin` - The minimum allowed input value.
- `inputMax` - The maximum allowed input value.
- `limitTime` - The time limit for the quiz.

**Returns**: `String` - The player's response.

---

### askSlideMenu

```java
int askSlideMenu(String text)
```

**Description**: Prompts the player with a slide menu input.

**Parameters**:
- `text` - The menu text.

**Returns**: `int` - The selected menu item ID.

---

### askAvatar

```java
int askAvatar(String text, int... avatars)
```

**Description**: Prompts the player to select an avatar.

**Parameters**:
- `text` - The prompt text.
- `avatars` - The available avatar IDs.

**Returns**: `int` - The selected avatar ID.

---

### inventoryExchange

```java
boolean inventoryExchange(int itemSource, short srcCount, int itemExchangeFor, short count)
```

**Description**: Exchanges one item for another in the player's inventory asynchronously.

**Parameters**:
- `itemSource` - The item to exchange (excludes equipped items).
- `srcCount` - The amount of the source item to exchange (must be positive).
- `itemExchangeFor` - The item to be exchanged for.
- `count` - The amount of the target item (must be positive).

**Returns**: `boolean` - `true` if the exchange was successful, `false` otherwise.

---
