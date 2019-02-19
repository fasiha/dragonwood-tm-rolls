# Dragonwood™ dice simulator
Someone got us Gamewright’s [Dragonwood™](https://gamewright.com/product/Dragonwood).

It is awesome.

But I got tired of using [AnyDice](https://anydice.com) to compute probabilities of rolling the game’s N dice that sum to S, so I enumerated them all in this one place.

(The dice have six sides: 1, 2, 2, 3, 3, 4. *And*, if you have a magic card, you can reroll your worst dice—I think I handled that probabilistic wrinkle correctly (I assume then you roll one more dice than you actually did and discard the lowest; I know that’s not exactly how you’re supposed to play but I think it’s the same without loss of generality).)

> Tech notes. To see the probabilities tables, scroll down. If for some reason you want to run this software to recreate the tables below, make sure you install [Git](https://git-scm.com) and [Node.js](https://nodejs.org). Then in your command line (Terminal app in macOS, Command Line Prompt in Windows, xterm in Linux, etc.), run the following: `git clone https://github.com/fasiha/dragonwood-tm-rolls.git && cd dragonwood-tm-rolls && npm i && npm run build && node index.js`. This will (1) clone (copy) this Git repo from GitHub to your computer (`git ...`), (2) change into the newly-created directory (`cd ...`), (3) download the Node.js dependency (viz., my Cartesian product library, via `npm i`), (4) transpiles the TypeScript source to JavaScript that Node can run (`npm run ...`)), and finally, (5) run the script in Node to print out the table below.

## 1 dice
- ≥2, 83.3% or 5：1 (rerolling? Then 97.2% or 35：1)
- ≥3, 50.0% or 1：1 (rerolling? Then 65.0% or 1.9：1)
- ≥4, 16.7% or 1：5 (rerolling? Then 21.9% or 1：3.6)
## 2 dice
- ≥3, 97.2% or 35：1 (rerolling? Then 99.5% or 215：1)
- ≥4, 86.1% or 6.2：1 (rerolling? Then 96.8% or 29.9：1)
- ≥5, 63.9% or 1.8：1 (rerolling? Then 81.8% or 4.5：1)
- ≥6, 36.1% or 1：1.8 (rerolling? Then 54.4% or 1.2：1)
- ≥7, 13.9% or 1：6.2 (rerolling? Then 23.1% or 1：3.3)
- ≥8, 2.8% or 1：35 (rerolling? Then 4.7% or 1：20.2)
## 3 dice
- ≥4, 99.5% or 215：1 (rerolling? Then 99.9% or 1295：1)
- ≥5, 96.8% or 29.9：1 (rerolling? Then 99.3% or 143：1)
- ≥6, 88.4% or 7.6：1 (rerolling? Then 96.8% or 30.6：1)
- ≥7, 72.2% or 2.6：1 (rerolling? Then 88.3% or 7.6：1)
- ≥8, 50.0% or 1：1 (rerolling? Then 70.5% or 2.4：1)
- ≥9, 27.8% or 1：2.6 (rerolling? Then 45.9% or 1：1.2)
- ≥10, 11.6% or 1：7.6 (rerolling? Then 22.3% or 1：3.5)
- ≥11, 3.2% or 1：29.9 (rerolling? Then 6.9% or 1：13.6)
- ≥12, 0.5% or 1：215 (rerolling? Then 1.0% or 1：97)
## 4 dice
- ≥5, 99.9% or 1295：1 (rerolling? Then 100.0% or 7775：1)
- ≥6, 99.3% or 143：1 (rerolling? Then 99.9% or 705.9：1)
- ≥7, 96.8% or 30.6：1 (rerolling? Then 99.2% or 126.5：1)
- ≥8, 90.4% or 9.4：1 (rerolling? Then 97.1% or 33.4：1)
- ≥9, 78.0% or 3.5：1 (rerolling? Then 91.3% or 10.6：1)
- ≥10, 60.1% or 1.5：1 (rerolling? Then 79.4% or 3.9：1)
- ≥11, 39.9% or 1：1.5 (rerolling? Then 60.8% or 1.6：1)
- ≥12, 22.0% or 1：3.5 (rerolling? Then 39.4% or 1：1.5)
- ≥13, 9.6% or 1：9.4 (rerolling? Then 20.4% or 1：3.9)
- ≥14, 3.2% or 1：30.6 (rerolling? Then 7.7% or 1：11.9)
- ≥15, 0.7% or 1：143 (rerolling? Then 1.9% or 1：52.3)
- ≥16, 0.1% or 1：1295 (rerolling? Then 0.2% or 1：441.9)
## 5 dice
- ≥6, 100.0% or 7775：1 (rerolling? Then 100.0% or 46655：1)
- ≥7, 99.9% or 705.9：1 (rerolling? Then 100.0% or 3587.9：1)
- ≥8, 99.2% or 126.5：1 (rerolling? Then 99.8% or 547.9：1)
- ≥9, 97.1% or 33.4：1 (rerolling? Then 99.2% or 124.8：1)
- ≥10, 91.9% or 11.4：1 (rerolling? Then 97.4% or 37.5：1)
- ≥11, 82.3% or 4.6：1 (rerolling? Then 93.1% or 13.5：1)
- ≥12, 67.7% or 2.1：1 (rerolling? Then 84.5% or 5.5：1)
- ≥13, 50.0% or 1：1 (rerolling? Then 70.7% or 2.4：1)
- ≥14, 32.3% or 1：2.1 (rerolling? Then 52.7% or 1.1：1)
- ≥15, 17.7% or 1：4.6 (rerolling? Then 34.0% or 1：1.9)
- ≥16, 8.1% or 1：11.4 (rerolling? Then 18.3% or 1：4.5)
- ≥17, 2.9% or 1：33.4 (rerolling? Then 7.8% or 1：11.8)
- ≥18, 0.8% or 1：126.5 (rerolling? Then 2.5% or 1：39.8)
- ≥19, 0.1% or 1：705.9 (rerolling? Then 0.5% or 1：199.5)
- ≥20, 0.0% or 1：7775 (rerolling? Then 0.1% or 1：1916.4)
## 6 dice
- ≥7, 100.0% or 46655：1 (rerolling? Then 100.0% or 279935：1)
- ≥8, 100.0% or 3587.9：1 (rerolling? Then 100.0% or 18661.4：1)
- ≥9, 99.8% or 547.9：1 (rerolling? Then 100.0% or 2476.3：1)
- ≥10, 99.2% or 124.8：1 (rerolling? Then 99.8% or 491.8：1)
- ≥11, 97.4% or 37.5：1 (rerolling? Then 99.2% or 130.1：1)
- ≥12, 93.3% or 13.8：1 (rerolling? Then 97.7% or 42.8：1)
- ≥13, 85.5% or 5.9：1 (rerolling? Then 94.3% or 16.6：1)
- ≥14, 73.7% or 2.8：1 (rerolling? Then 87.8% or 7.2：1)
- ≥15, 58.3% or 1.4：1 (rerolling? Then 77.2% or 3.4：1)
- ≥16, 41.7% or 1：1.4 (rerolling? Then 62.6% or 1.7：1)
- ≥17, 26.3% or 1：2.8 (rerolling? Then 45.8% or 1：1.2)
- ≥18, 14.5% or 1：5.9 (rerolling? Then 29.4% or 1：2.4)
- ≥19, 6.7% or 1：13.8 (rerolling? Then 16.3% or 1：5.1)
- ≥20, 2.6% or 1：37.5 (rerolling? Then 7.5% or 1：12.3)
- ≥21, 0.8% or 1：124.8 (rerolling? Then 2.8% or 1：35.4)
- ≥22, 0.2% or 1：547.9 (rerolling? Then 0.7% or 1：133.6)
- ≥23, 0.0% or 1：3587.9 (rerolling? Then 0.1% or 1：751.5)
- ≥24, 0.0% or 1：46655 (rerolling? Then 0.0% or 1：7775)
