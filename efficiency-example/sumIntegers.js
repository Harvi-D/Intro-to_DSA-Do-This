function sumIntegers(n) { //linear function
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}

function sumIntegers2(n) { //constant function
    return (n * (n + 1)) / 2;
}


function findAverageRunTime(algorithm) {
    const NUMBER_OF_REPETITIONS = 10; // Number of times to repeat the test
    const N = 1000; // The input to the function

    let sumOfRunningTime = 0n;

    for (let k = 1; k <= NUMBER_OF_REPETITIONS; k++) {
        const start = process.hrtime.bigint(); // Note the start time

        const answer = algorithm(N); // Call the function

        const end = process.hrtime.bigint(); // Note the end time

        sumOfRunningTime += end - start; 
    }

    const averageTime = sumOfRunningTime / BigInt(NUMBER_OF_REPETITIONS);

    console.log(
        `Summing ${N} numbers took an average of  ${averageTime} nanoseconds`
    );
}


findAverageRunTime(sumIntegers);
findAverageRunTime(sumIntegers2);