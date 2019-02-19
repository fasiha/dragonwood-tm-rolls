import {product} from 'cartesian-product-generator';

// const sum = (v: number[]) => v.reduce((o, n) => o + n);
const max = (v: number[]) => v.reduce((o, n) => Math.max(o, n));
const zeros = (n: number) => Array.from(Array(n), _ => 0);
const cumsum = (v: number[]) => v.reduce((o, n, i) => o.concat((o[i - 1] || 0) + n), [] as number[]);
const cumsumRight = (v: number[]) => {
  for (let i = v.length - 2; i >= 0; --i) { v[i] += v[i + 1]; }
};

// Hat tip: https://math.stackexchange.com/a/1469254/81266
const prob2odds = (p: number) => p > 0.5 ? [1 / (1 - p) - 1, 1] : [1, 1 / p - 1];

// I want to let this be very barebones and user-unfriendly to preserve maximal speed.
function enumerateAllDices(sides: number[], maxDice: number) {
  const maxSide = max(sides);
  const repeatSides = Array.from(Array(maxDice), _ => sides);
  let frequencies = Array.from(Array(maxDice), (_, i) => zeros(1 + maxSide * (i + 1)));
  for (let x of product(...repeatSides)) { cumsum(x).forEach((sum, i) => frequencies[i][sum]++); }
  return frequencies;
}

export type SumCumlProb = {
  sum: number,
  prob: number,
};
/**
 * This deserves some explanation. For speed, I use *an array* to map the sum of a roll to its frequency (number of
 * times occurred). That happened above in `enumerateAllDices`. *This function* converts that array, where each index is
 * the sum and each value the frequency of occurrence, to an array of objects with `sum` and `prob` entries, where
 * `prob` indicates the probability (between 0 and 1 inclusive) that the sum of dice rolls is **at least** `sum`.
 * @param sumFreqs array where each value is the number of times its index was seen
 */
function sumFreqsToProbOfAtleast(sumFreqs: number[]): SumCumlProb[] {
  let cuml = sumFreqs.slice();
  cumsumRight(cuml);
  return cuml.map(x => x / cuml[0]).map((prob, sum) => ({sum, prob})).slice(1);
};

export function enumerate(sides: number[], maxDice: number) {
  let dice2Frequencies: Map<number, SumCumlProb[]> = new Map([]);
  enumerateAllDices(sides, maxDice)
      .forEach((sumFreqs, didx) => dice2Frequencies.set(didx + 1, sumFreqsToProbOfAtleast(sumFreqs)))
  return dice2Frequencies;
}

export function print(dice2Freqs: Map<number, SumCumlProb[]>) {
  for (let [k, v] of dice2Freqs) {
    console.log(`## ${k} dice`);
    for (let {sum, prob} of v) {
      console.log(`- ≥${sum}, ${((Math.round(prob * 1000) / 1000) * 100).toFixed(1)}% or ${
          prob2odds(prob).map(x => Math.round(x * 10) / 10).join('：')}`);
    }
  }
}

if (require.main === module) {
  const dragonwoodDiceSides = [1, 2, 2, 3, 3, 4];
  const maxDice = 6;
  let dice2Prob = enumerate(dragonwoodDiceSides, maxDice);
  print(dice2Prob);
}