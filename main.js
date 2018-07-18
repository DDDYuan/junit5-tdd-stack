for (var i = 0; i < 120; ++i) {
    const result = fizzBuzz(i + 1);
    console.log(result);
}

function fizzBuzz(number) {
    let result = '';
    if (number % 3 === 0) {
        result += "Fizz";
    }
    if (number % 5 === 0) {
        result += "Buzz";
    }
    return result ? result : number.toString();
}