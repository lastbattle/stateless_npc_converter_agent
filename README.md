# Converting State-Based MapleStory NPC Scripts to Stateless Using Agent with Cline or Github Copilot

This guide outlines the process for converting state-based MapleStory NPC scripts to stateless scripts using Agents in Cline in Github Copilot, via Cursor / Visual Studio Code IDE. It includes steps for generating documentation for key Java classes and leveraging AI prompts for automated conversion.

<img width="1776" height="1253" alt="image" src="https://github.com/user-attachments/assets/3d746be9-4580-4ac2-9df1-cdf6b0e25c37" />


## Prerequisites
- **Development Environment**: Visual Studio Code or Cursor installed.
- **Cline Extension**: Installed in your IDE with Agent mode enabled. (Cline / Github Copilot)
- **MapleStory Source**: Access to a MapleStory server source (e.g., OdinMS-based) with NPC scripts in the `scripts/` directory.

## Step-by-Step Guide

### 1. Create Documentation for Java Classes
To facilitate the conversion process, generate documentation for the relevant Java classes used in MapleStory NPC scripting. 
This documentation should be stored in a `scripts/_doc` directory in Markdown format (`.md` files).

#### Steps:
1. **Create the `scripts/_doc` Directory**:
   - Navigate to the `scripts/` folder in your MapleStory source.
   - Create a subdirectory named `_doc` (i.e., `scripts/_doc`).

2. **Paste the following classes to an existing AI-chat interface:**:
Using the prompt under `prompts/documentation_prompt.md`
   - `AbstractPlayerInteraction.java`
   - `NPCConversationManager.java`
   - `StatelessNPCConversationInterface.java`
   - `StatelessNPCConversationManager.java`

   Paste the prompts into any AI chat interface, [Grok](https://grok.com/) [Google Gemini](https://gemini.google.com/app) [ChatGPT](https://chatgpt.com/)

3. **Documentation Format**:

   Replace the documentation generated into `scripts/AbstractPlayerInteraction.md`, `scripts/NPCConversationManager.md`, `StatelessNPCConversationInterface.md`, `StatelessNPCConversationManager.md` under `scripts/_docs`

      Each Markdown file should follow this structure:
      - **Class Name**: The name of the Java class.
      - **Description**: A brief overview of the class's purpose.
      - **Functions**: A table listing function names, descriptions, parameters, and return types.


#### Example Documentation Files

##### `AbstractPlayerInteraction.md`
| Function Name | Description | Parameters | Return Type |
|---------------|-------------|------------|-------------|
| `getPlayer()` | Retrieves the player object interacting with the NPC. | None | `MapleCharacter` |
| `getClient()` | Returns the client instance for the current player. | None | `MapleClient` |
| `warp(int mapId)` | Warps the player to the specified map. | `mapId`: The ID of the destination map | `void` |
| `sendOk(String message)` | Sends an "OK" dialog to the player. | `message`: The dialog text | `void` |

##### `NPCConversationManager.md`
| Function Name | Description | Parameters | Return Type |
|---------------|-------------|------------|-------------|
| `dispose()` | Closes the current NPC conversation. | None | `void` |
| `sendNext(String message)` | Sends a "Next" dialog to advance the conversation. | `message`: The dialog text | `void` |
| `sendPrev(String message)` | Sends a "Previous" dialog to go back in the conversation. | `message`: The dialog text | `void` |
| `getNpc()` | Returns the ID of the NPC in the conversation. | None | `int` |

##### `StatelessNPCConversationInterface.md`
| Function Name | Description | Parameters | Return Type |
|---------------|-------------|------------|-------------|
| `start()` | Initiates the stateless NPC conversation. | None | `void` |
| `handleSelection(int selection)` | Processes the player's selection in the conversation. | `selection`: The player's choice | `void` |
| `end()` | Ends the stateless NPC conversation. | None | `void` |

##### `StatelessNPCConversationManager.md`
| Function Name | Description | Parameters | Return Type |
|---------------|-------------|------------|-------------|
| `sendMessage(String message, int type)` | Sends a message to the player with a specified dialog type. | `message`: The dialog text, `type`: Dialog type (e.g., next, prev) | `void` |
| `getPlayerSelection()` | Retrieves the player's latest selection. | None | `int` |
| `setQuest(int questId)` | Assigns a quest to the player. | `questId`: The ID of the quest | `void` |
| `completeQuest(int questId)` | Marks a quest as completed for the player. | `questId`: The ID of the quest | `void` |

### 2. Set Up Your IDE
Use Visual Studio Code or Cursor with the Cline extension or Github Copilot (Agent mode) to handle the conversion process.

#### Steps:
1. **Copy your existing scripts to the `scripts/` Folder**:
   - Launch Visual Studio Code or Cursor.
   - Copy to the `scripts/` folder containing your MapleStory NPC scripts.

2. **Configure Cline and **:
   - Ensure the Cline extension is installed in your IDE. (Install)[https://cline.bot/]
   - AI models like `google/gemini-2.5-pro` is greatly recommended, whereas `google/gemini-2.5-flash` for cost efficiency.  You will require an API key for this. 

   <img width="305" height="756" alt="image" src="https://github.com/user-attachments/assets/e2b06320-42c1-4177-a897-ef27e0916a43" />
   <img width="317" height="557" alt="image" src="https://github.com/user-attachments/assets/9cc8a128-762d-410b-9bef-aac44486149e" />



### 3. Use AI Prompts for Conversion
Cline leverages AI models to automate the conversion of state-based NPC scripts to stateless scripts. 
You will use predefined documentation stored in the `scripts/_docs/` directory to guide the AI, along with the prompt.

#### Steps:
1. **Locate or Create Prompt Files**:
   - Check for existing prompt files in the `scripts/prompts/` directory:
     - `stateless_AI_prompt.md`: For general NPC script conversions.
     - `stateless_AI_prompt_quests.md`: For quest-related NPC script conversions.

2. **Open Cline's Chat Interface**:
   - In Visual Studio Code or Cursor, open the Cline chat interface (e.g., `Ctrl+Shift+P` and select "Cline: Open In New Tab" or use the chat view).
   - Switch to Agent mode

3. **Paste the Prompt**:
   - Copy the content of `stateless_AI_prompt.md` or `stateless_AI_prompt_quests.md`.
   - Paste it into the Cline chat input box.
   - Optionally, specify the NPC script file to convert (e.g., append the file path or script content to the prompt).

4. **Execute the Conversion**:
   - Submit the prompt to Cline.
   - Cline will process the state-based NPC script, using the documentation in `scripts/_doc` and the provided prompt to generate a stateless version.
   - Review the output in the chat interface or the generated files in the `scripts/` directory.

5. **Verify and Test**:
   - Check the converted script for accuracy and adherence to stateless conventions.
   - Test the script in your MapleStory server to ensure functionality matches the original state-based script.
   - If the AI generates incorrect or incomplete code (e.g., hallucinated functions), adjust the prompt or provide additional examples of manually converted scripts to improve accuracy.

### 4. Monitor and Iterate
- **Watch Cline Work**: Cline will read the script files, apply the stateless conversion logic, and may create or edit files in the `scripts/` directory. Monitor the changes in real-time via the IDE's file explorer.
- **Iterate as Needed**: If the conversion is not perfect, refine the prompt or provide more context (e.g., additional documentation or example scripts) and rerun the process.

## Notes
- **AI Limitations**: AI models like those used by Cline may occasionally generate incorrect functions or misinterpret script logic. Always review the output and test thoroughly.[](https://forum.ragezone.com/threads/refractor-state-based-npc-script-to-stateless-npc-script-using-gpt.1211742/)
- **Prompt Customization**: Adjust the prompts in `stateless_AI_prompt.md` or `stateless_AI_prompt_quests.md` to match your specific MapleStory source, as function names and conventions may vary.

## References
- Cline Documentation: [cline.bot](https://cline.bot)[](https://cline.bot/faq)
- Original MapleStory NPC Script Conversion method: [github.com/lastbattle/gpt_stateless_npc_converter](https://github.com/lastbattle/gpt_stateless_npc_converter)[](https://github.com/lastbattle/gpt_stateless_npc_converter)[](https://forum.ragezone.com/threads/refractor-state-based-npc-script-to-stateless-npc-script-using-gpt.1211742/)
