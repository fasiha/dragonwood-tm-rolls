"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cartesian_product_generator_1 = require("cartesian-product-generator");
// const sum = (v: number[]) => v.reduce((o, n) => o + n);
var max = function (v) { return v.reduce(function (o, n) { return Math.max(o, n); }); };
var zeros = function (n) { return Array.from(Array(n), function (_) { return 0; }); };
var cumsum = function (v) { return v.reduce(function (o, n, i) { return o.concat((o[i - 1] || 0) + n); }, []); };
var cumsumRight = function (v) {
    for (var i = v.length - 2; i >= 0; --i) {
        v[i] += v[i + 1];
    }
};
// Hat tip: https://math.stackexchange.com/a/1469254/81266
var prob2odds = function (p) { return p > 0.5 ? [1 / (1 - p) - 1, 1] : [1, 1 / p - 1]; };
// I want to let this be very barebones and user-unfriendly to preserve maximal speed.
function enumerateAllDices(sides, maxDice) {
    var e_1, _a;
    var maxSide = max(sides);
    var repeatSides = Array.from(Array(maxDice), function (_) { return sides; });
    var frequencies = Array.from(Array(maxDice), function (_, i) { return zeros(1 + maxSide * (i + 1)); });
    try {
        for (var _b = __values(cartesian_product_generator_1.product.apply(void 0, __spread(repeatSides))), _c = _b.next(); !_c.done; _c = _b.next()) {
            var x = _c.value;
            cumsum(x).forEach(function (sum, i) { return frequencies[i][sum]++; });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return frequencies;
}
/**
 * This deserves some explanation. For speed, I use *an array* to map the sum of a roll to its frequency (number of
 * times occurred). That happened above in `enumerateAllDices`. *This function* converts that array, where each index is
 * the sum and each value the frequency of occurrence, to an array of objects with `sum` and `prob` entries, where
 * `prob` indicates the probability (between 0 and 1 inclusive) that the sum of dice rolls is **at least** `sum`.
 * @param sumFreqs array where each value is the number of times its index was seen
 */
function sumFreqsToProbOfAtleast(sumFreqs) {
    var cuml = sumFreqs.slice();
    cumsumRight(cuml);
    return cuml.map(function (x) { return x / cuml[0]; }).map(function (prob, sum) { return ({ sum: sum, prob: prob }); }).slice(1);
}
;
function enumerate(sides, maxDice) {
    var dice2Frequencies = new Map([]);
    enumerateAllDices(sides, maxDice)
        .forEach(function (sumFreqs, didx) { return dice2Frequencies.set(didx + 1, sumFreqsToProbOfAtleast(sumFreqs)); });
    return dice2Frequencies;
}
exports.enumerate = enumerate;
function print(dice2Freqs) {
    var e_2, _a, e_3, _b;
    try {
        for (var dice2Freqs_1 = __values(dice2Freqs), dice2Freqs_1_1 = dice2Freqs_1.next(); !dice2Freqs_1_1.done; dice2Freqs_1_1 = dice2Freqs_1.next()) {
            var _c = __read(dice2Freqs_1_1.value, 2), k = _c[0], v = _c[1];
            console.log("## " + k + " dice");
            try {
                for (var v_1 = __values(v), v_1_1 = v_1.next(); !v_1_1.done; v_1_1 = v_1.next()) {
                    var _d = v_1_1.value, sum = _d.sum, prob = _d.prob;
                    console.log("- \u2265" + sum + ", " + ((Math.round(prob * 1000) / 1000) * 100).toFixed(1) + "% or " + prob2odds(prob).map(function (x) { return Math.round(x * 10) / 10; }).join('：'));
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (v_1_1 && !v_1_1.done && (_b = v_1.return)) _b.call(v_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (dice2Freqs_1_1 && !dice2Freqs_1_1.done && (_a = dice2Freqs_1.return)) _a.call(dice2Freqs_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
exports.print = print;
if (require.main === module) {
    var dragonwoodDiceSides = [1, 2, 2, 3, 3, 4];
    var maxDice = 6;
    var dice2Prob = enumerate(dragonwoodDiceSides, maxDice);
    print(dice2Prob);
}
