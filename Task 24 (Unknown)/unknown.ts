{
    // unknown is the type-safe counterpart of any
    const getCalculated = (num: unknown) => {
        if (typeof num === 'number') {
            console.log(`The speed is ${num / 3600} ms^-2`);
        }
        else if (typeof num === 'string') {
            num = num.split(' ');
            console.log(`The speed is ${parseFloat(num) / 3600} ms^-2`);
        }
        else {
            console.log(`Invalid`);
        }
    }
    getCalculated('60000 m');
}