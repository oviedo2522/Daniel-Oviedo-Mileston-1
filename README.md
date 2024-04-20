# Card Matching Game

## Description

Turning any two cards picture-side-up.
The cards must be turned over completely, so that all players can see them.
If the two cards match, the player keeps the cards and has the right to play again.
If the two cards do not match,it is now the turn of.
The game continues until all cards have been matched and removed from the playing area.

## Deployment

The web game is deployed at https://github.com/oviedo2522/oviedo2522.github.io.

Use HTML, CSS and Javascript to build this memory game.

## Game Logic

The logic of this game is to choose two matching cards from an array of cards listed.

The decision of the player are very simple, once player clicks paly, they start clicking trough random cards until two cards are matched. If cards are
not matched the cards will be unflipped, until it has picked up all choices available. However this game is weighted in a way that determines the
winning score of identity, not points.

If the player choose the wrong card, the cards will reset to a standard front image so the can try again.
As they continue along, ech time they find matching cards, the system will block those cards, and wait for the next set of cards.
When all matching cards are obtained, based on the formula designed by the programmer, it will then display results of the players true identity.
There are a total of 8 matched cards.

### Post-MVP Plans

The game did meet the minimum standard as I was able to start the finish the game without any hiccups and it gave me the final score.
