{
    const kgToGram = (x: number | string): number | string | undefined => {
        if (typeof x === 'number') {
            console.log(x * 1000);
        }
        else if (typeof x === 'string') {
            return parseFloat(x) * 1000;
        }
        else {
            return undefined;
        }
    }
    
    const num = kgToGram(10) as number;
    const str = kgToGram("10") as string;
    console.log(num);
    console.log(str);
}