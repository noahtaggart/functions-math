const addFunction = (num1, num2) => {
    const addedIntegers = num1 + num2

    return addedIntegers
}

const addVariable = addFunction(4, 14)
//console.log(addVariable)

const multiplyFunction = (num1) => {
    const multipliedIntegers = num1 * 2

    return multipliedIntegers
}

const multiplyVariable = multiplyFunction(addVariable)
console.log(multiplyVariable)