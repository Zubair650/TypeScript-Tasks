{
    // Destructuring is a JavaScript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables.

    // Object destructuring
    const newObj = {
        id: 15,
        name:
        {
            firstName: 'Zubair',
            middleName: 'Ahmed',
            lastName: 'Saad'
        }
    }
    const { name: { firstName } } = newObj;
    console.log(firstName);

    // Array destructuring 
    const arr = ['x', 'y', 'z', 'a', 'b', 'c']
    const [, , best, ...rest] = arr;
    console.log(best);
}