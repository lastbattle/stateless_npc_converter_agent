Please provide the content of a .java class file by pasting it below. I will analyze the file and generate a Markdown (.md) documentation file that includes:

The class name and its description (if a class-level comment is provided).
Package name, inheritance hierarchy, and known subclasses (if applicable).
A list of fields with their types and descriptions (if comments are provided).
The constructor(s) with parameters and descriptions (if comments are provided).
A method summary table listing:
Modifier and return type
Method name
Parameters (with their types)
Description based on any associated comments (e.g., Javadoc or inline comments)


No actual code will be included in the documentation.

Instructions for Submission:

Paste the entire .java class file below, including all comments, fields, constructor(s), and method signatures.
Ensure the file is properly formatted to avoid parsing issues.
If there are specific sections (e.g., private methods) you want excluded or specific details you want emphasized, please mention them.

Example Input Format:
// Manages player inventory in the game
package game.core;

public class PlayerInventory {
    // The player's unique identifier
    private String playerId;
    
    // The player's current gold amount
    private int gold;
    
    // Constructor for PlayerInventory
    public PlayerInventory(String playerId, int initialGold) {
        this.playerId = playerId;
        this.gold = initialGold;
    }
    
    // Adds gold to the player's inventory
    public void addGold(int amount) {
        // Implementation not included in documentation
    }
    
    // Retrieves the current gold amount
    public int getGold() {
        // Implementation not included in documentation
    }
}

Expected Output Format:
# PlayerInventory Class Documentation

**Package**: `game.core`

**Inheritance**: `java.lang.Object` → `game.core.PlayerInventory`

## Description
Manages player inventory in the game.

## Fields
- **`String playerId`**: The player's unique identifier.
- **`int gold`**: The player's current gold amount.

## Constructor
- **`PlayerInventory(String playerId, int initialGold)`**: Constructor for PlayerInventory.

## Method Summary
| Modifier and Type | Method | Description |
|-------------------|--------|-------------|
| `void` | `addGold(int amount)` | Adds gold to the player's inventory. |
| `int` | `getGold()` | Retrieves the current gold amount. |
