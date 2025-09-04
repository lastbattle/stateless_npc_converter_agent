# NPC Script Conversion Task

- **Objective**: Generate a list of NPC scripts from the `scripts/npc` directory.
- **Process**:
  1. For each script in `scripts/npc`, check if a script with the same filename exists in the `scripts/stateless_npc` directory using system file commands.
  2. If no matching script is found in `scripts/stateless_npc`, convert the NPC script to a stateless NPC script with asynchronous conversation support. 
  3. Save the converted script with the same filename in the `scripts/stateless_npc` directory.
- **References**:
  - Use existing files in `scripts/stateless_npc` as examples for stateless NPC script format. A stateless NPC example script has been provided under `scripts/stateless_npc/9010017.js`.
  - Refer to `scripts/_docs/StatelessNPCConversationInterface.md`, `scripts/_docs/StatelessNPCConversationManager.md`, `scripts/_docs/AbstractPlayerInteraction.md`, `scripts/_docs/NPCConversationManager.md` for documentation on stateless NPC scripting functions and guidelines.