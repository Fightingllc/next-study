export function add(a,b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}
// Uncaught ReferenceError: module is not defined
// module.exports = {
//     add,
//     subtract,
//     multiply
// }

// try {
//     module.exports = {
//         add,
//         subtract,
//         multiply
//     }
// }catch(e) {}
