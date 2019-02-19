"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
function enumerate(v, n) {
    var e_1, _a, v_1, v_1_1, x, e_1_1;
    if (n === void 0) { n = 0; }
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, 6, 7]);
                v_1 = __values(v), v_1_1 = v_1.next();
                _b.label = 1;
            case 1:
                if (!!v_1_1.done) return [3 /*break*/, 4];
                x = v_1_1.value;
                return [4 /*yield*/, [n++, x]];
            case 2:
                _b.sent();
                _b.label = 3;
            case 3:
                v_1_1 = v_1.next();
                return [3 /*break*/, 1];
            case 4: return [3 /*break*/, 7];
            case 5:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 7];
            case 6:
                try {
                    if (v_1_1 && !v_1_1.done && (_a = v_1.return)) _a.call(v_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}
// Hat tip: https://math.stackexchange.com/a/1469254/81266
var prob2odds = function (p) { return p > 0.5 ? [1 / (1 - p) - 1, 1] : [1, 1 / p - 1]; };
function omitSmallest(v) {
    var minidx = 0;
    var min = v[minidx];
    for (var i = 1; i < v.length; i++) {
        if (v[i] < min) {
            min = v[i];
            minidx = i;
        }
    }
    v.splice(minidx, 1);
    return v;
}
// I want to let this be very barebones and user-unfriendly to preserve maximal speed.
function enumerateAllDices(sides, maxDice, rerollOne) {
    var e_2, _a, e_3, _b;
    var fakeMaxDice = maxDice + (rerollOne ? 1 : 0);
    var maxSide = max(sides);
    var frequencies = Array.from(Array(maxDice), function (_, i) { return zeros(1 + maxSide * (i + 1)); });
    var repeatSides = Array.from(Array(fakeMaxDice), function (_) { return sides; });
    if (rerollOne) {
        try {
            for (var _c = __values(cartesian_product_generator_1.product.apply(void 0, __spread(repeatSides))), _d = _c.next(); !_d.done; _d = _c.next()) {
                var x = _d.value;
                cumsum(omitSmallest(x)).forEach(function (sum, i) { return frequencies[i][sum]++; });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    else {
        try {
            for (var _e = __values(cartesian_product_generator_1.product.apply(void 0, __spread(repeatSides))), _f = _e.next(); !_f.done; _f = _e.next()) {
                var x = _f.value;
                cumsum(x).forEach(function (sum, i) { return frequencies[i][sum]++; });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_3) throw e_3.error; }
        }
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
function enumerateDice(sides, maxDice, rerollOne) {
    if (rerollOne === void 0) { rerollOne = false; }
    var dice2Frequencies = new Map([]);
    enumerateAllDices(sides, maxDice, rerollOne)
        .forEach(function (sumFreqs, didx) { return dice2Frequencies.set(didx + 1, sumFreqsToProbOfAtleast(sumFreqs)); });
    return dice2Frequencies;
}
exports.enumerateDice = enumerateDice;
var numToPercent = function (n) { return ((Math.round(n * 1000) / 1000) * 100).toFixed(1); };
var numToOdds = function (n) { return prob2odds(n).map(function (x) { return Math.round(x * 10) / 10; }).join('：'); };
function print(dice2Freqs, withReroll) {
    var e_4, _a, e_5, _b;
    try {
        for (var dice2Freqs_1 = __values(dice2Freqs), dice2Freqs_1_1 = dice2Freqs_1.next(); !dice2Freqs_1_1.done; dice2Freqs_1_1 = dice2Freqs_1.next()) {
            var _c = __read(dice2Freqs_1_1.value, 2), numDice = _c[0], table = _c[1];
            console.log("## " + numDice + " dice");
            var tableReroll = [];
            if (withReroll) {
                tableReroll = withReroll.get(numDice) || [];
            } // TypeScript pacification
            try {
                for (var _d = __values(enumerate(table)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var _f = __read(_e.value, 2), tableIdx = _f[0], _g = _f[1], sum = _g.sum, prob = _g.prob;
                    if (prob >= 1) {
                        continue;
                    }
                    var probReroll = -1;
                    if (withReroll) {
                        probReroll = tableReroll[tableIdx].prob;
                    }
                    console.log("- \u2265" + sum + ", " + numToPercent(prob) + "% or " + numToOdds(prob) +
                        (probReroll >= 0 ? " (rerolling? Then " + numToPercent(probReroll) + "% or " + numToOdds(probReroll) + ")" : ''));
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (dice2Freqs_1_1 && !dice2Freqs_1_1.done && (_a = dice2Freqs_1.return)) _a.call(dice2Freqs_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
exports.print = print;
if (require.main === module) {
    var dragonwoodDiceSides = [1, 2, 2, 3, 3, 4];
    var maxDice = 6;
    var reroll = false;
    var dice2prob = enumerateDice(dragonwoodDiceSides, maxDice, reroll);
    print(dice2prob, enumerateDice(dragonwoodDiceSides, maxDice, !reroll));
}
