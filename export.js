
// Named export used in ES6
export function addFn(a, b) {
    return a + b;
}

export function subFn(a, b) {
    return a - b;
}
export function mulFn(a, b) {
    return a * b;
}
export function divFn(a, b) {
    return a / b;
}

function exampleFn() {
    console.log("example Fn");
}
export { exampleFn };

function calc(operation, a, b) {
    switch (operation) {
        case 'add':
             return addFn(a, b);
        case 'sub':
             return subFn(a, b);
        case 'mul':
             return mulFn(a, b);
        case 'div':
            return divFn(a, b);
        default: 
        return 'invalid operation';
    }
}
export default calc;