// function expect(result) {
//     return {
//         toBe: function(actual) {
//             if(result !== actual) {
//                 throw new Error(`预期值和实际值不等 预期是 ${actual} 结果却是 ${result}`)
//             }
//         }
//     }
// }

// function test(desc, fn) {
//     try {
//         fn();
//         console.log(`${desc} pass`)

//     } catch(e) {
//         console.log(`${desc} fail ${e}`)
//     }
// }

// const math = require('./math.js')
// const { add, subtract,multiply} = math;
import { add, subtract,multiply} from './math.js'

test('测试 add', () => {
    expect(add(1, 2)).toBe(3)
})


test('测试 subtract', () => {
    expect(subtract(1, 2)).toBe(-1)
})