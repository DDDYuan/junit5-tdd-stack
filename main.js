for (var i = 0; i < 120; ++i) {
    const result = fizzBuzz(i + 1);
    console.log(result);
}

function fizzBuzz(number) {
    let result = number.toString();
    if (number % 3 === 0) {
        result = "Fizz";
    }
    return result;
}