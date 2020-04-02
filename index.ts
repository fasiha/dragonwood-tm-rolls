import { product } from 'cartesian-product-generator';

// Hat tip: https://math.stackexchange.com/a/1469254/81266
const prob2odds = (p: number) => p > 0.5 ? [1 / (1 - p) - 1, 1] : [1, 1 / p - 1]
const numToOdds = (n: number) => prob2odds(n).map(x => Math.round(x * 10) / 10).join('：')

const sum = (numbers: number[]): number => numbers.reduce((a, b) => a + b, 0)
const toPercentage = (number: number, decimals: number): string => {
  const up = Math.pow(10, decimals)
  return (Math.round(number * 100 * up)/up).toFixed(decimals)
}

const dragonwoodDie: number[] = [1, 2, 2, 3, 3, 4]
const highestDieFace: number = Math.max(...dragonwoodDie)

for (const dice of [1, 2, 3, 4, 5, 6]) { // Short enough not to use fancy range() implementation.
  console.log(`\n## ${dice} dice`);

  let totalRolls: number = 0
  const frequencies: number[] = Array(dice * highestDieFace + 1).fill(0)
  let totalRollsWithReroll: number = 0
  const frequenciesWithReroll: number[] = frequencies.slice() // create copy

  for (let roll of product(...Array(dice).fill(dragonwoodDie)) as IterableIterator<number[]>) {
    // Add the sum of our roll into our frequency tracker
    const rollValue: number = sum(roll)
    frequencies[rollValue]++
    totalRolls++
    // Now remove our lowest roll and add another dice
    roll.push(-Math.min(...roll))
    for (let reroll of product([roll], dragonwoodDie)) {
      reroll = reroll.flat() as number[]
      const rollValue: number = sum(reroll)
      frequenciesWithReroll[rollValue]++
      totalRollsWithReroll++
    }
  }

  frequencies.forEach((rollFrequency, rollValue) => {
    if (rollValue < dice + 1) return; // Ignore all least possible (100%) values
    const probabilityAtLeast = sum(frequencies.slice(rollValue)) / totalRolls
    const probabilityAtLeastWithReroll = sum(frequenciesWithReroll.slice(rollValue)) / totalRollsWithReroll

    console.log(
      `- ≥${rollValue}, ${toPercentage(probabilityAtLeast, 1)}% or ${numToOdds(probabilityAtLeast)}` +
      (probabilityAtLeast !== probabilityAtLeastWithReroll ? ` (rerolling? Then ${toPercentage(probabilityAtLeastWithReroll, 1)}% or ${numToOdds(probabilityAtLeastWithReroll)})` : '')
    )
  })
}
