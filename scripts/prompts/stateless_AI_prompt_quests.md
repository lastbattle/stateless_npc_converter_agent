# NPC quest Script Conversion Task

- **Objective**: Generate a list of NPC scripts from the `scripts/quest` directory.
- **Process**:
  1. For each script in `scripts/quest`, check if a script with the same filename exists in the `scripts/stateless_quest` directory using system file commands.
  2. If no matching script is found in `scripts/stateless_quest`, convert the NPC quest script to a stateless NPC quest script with asynchronous conversation support. 
  3. Save the converted script with the same filename in the `scripts/stateless_quest` directory.
- **References**:
  - Use existing files in `scripts/stateless_quest` as examples for stateless NPC quest script format. A stateless NPC quest example script has been provided under `scripts/stateless_quest/1021.js`.
  - Refer to `scripts/_docs/StatelessNPCConversationInterface.md`, `scripts/_docs/StatelessNPCConversationManager.md`, `scripts/_docs/AbstractPlayerInteraction.md`, `scripts/_docs/NPCConversationManager.md` for documentation on stateless NPC scripting functions and guidelines.