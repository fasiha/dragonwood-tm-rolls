# Dragonwood™ dice simulator
Someone got us Gamewright’s [Dragonwood™](https://gamewright.com/product/Dragonwood).

It is awesome.

But I got tired of using [AnyDice](https://anydice.com) to compute probabilities of rolling the game’s N dice that sum to S, so I enumerated them all in this one place.

(The dice have six sides: 1, 2, 2, 3, 3, 4. *And*, if you have a magic card, you can reroll your worst dice—I think I handled that probabilistic wrinkle correctly (I assume then you roll one more dice than you actually did and discard the lowest; I know that’s not exactly how you’re supposed to play but I think it’s the same without loss of generality).)

> Tech notes. To see the probabilities tables, scroll down. If for some reason you want to run this software to recreate the tables below, make sure you install [Git](https://git-scm.com) and [Node.js](https://nodejs.org). Then in your command line (Terminal app in macOS, Command Line Prompt in Windows, xterm in Linux, etc.), run the following: `git clone https://github.com/fasiha/dragonwood-tm-rolls.git && cd dragonwood-tm-rolls && npm i && npm run build && node index.js`. This will (1) clone (copy) this Git repo from GitHub to your computer (`git ...`), (2) change into the newly-created directory (`cd ...`), (3) download the Node.js dependency (viz., my Cartesian product library, via `npm i`), (4) transpiles the TypeScript source to JavaScript that Node can run (`npm run ...`)), and finally, (5) run the script in Node to print out the table below.

