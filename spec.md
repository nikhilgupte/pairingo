# Pairingo Timer Specification

## Timer Behavior

### Default State
- Timer is **ON by default** when the game starts
- User can toggle the timer on/off via the timer button

### Activation
- Timer does **NOT** run for the entire game
- Timer **starts** when the **first card in a turn** is flipped
- Timer runs from that moment until the **second card is flipped** (or turn ends)

### Timing
- Each turn gets its own independent timer
- Timer duration: **12 seconds to 3 seconds** (scales based on pairs found)
  - At start (0 pairs found): 12 seconds
  - At end (all pairs found): 3 seconds
  - Formula: `max(3, 12 - (pairsDiscovered / TOTAL_PAIRS) * 9)`

### Behavior on Timeout
- If timer expires before second card is flipped:
  - **Local mode**: Auto-advance to next player's turn (if 2 cards not selected)
  - **Remote mode**: Server forces turn to advance to next player

### Local vs Remote
- **Local games**: Timer scales dynamically as pairs are found
- **Remote games**: Server broadcasts fixed `speedMs` for the turn timer
  - Initial speedMs: 12 seconds (12000ms) when timer is enabled
  - ServerTimer is a safety timeout; client may show slightly different timer

### Toggle Button
- Timer toggle button (`#timer-toggle-btn`) controls whether timer is active
- Button state: `.active` class = timer enabled, absent = timer disabled
- Toggleable at any time (even before/during game)
