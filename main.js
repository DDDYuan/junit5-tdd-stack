for (var i = 0; i < 120; ++i) {
    const result = fizzBuzz(i + 1);
    console.log(result);
}

function fizzBuzz(number) {
    const divisors = [{
        number: 3,
        str: "Fizz"
    }, {
        number: 5,
        str: "Buzz"
    }, {
        number: 7,
        str: "Whizz"
    }];

    let result = '';

    divisors.forEach(divisor => {
        if (number % divisor.number === 0) {
            result = result.concat(divisor.str);
        }
    })
    return result ? result : number.toString();
}