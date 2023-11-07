{
    type GenericNum<T> = Array<T>

    const Arr: GenericNum<number> = [1, 2, 6]

    type GenericType<T> = Array<T>

    const newArr: GenericType<number> = [1, 2, 6]

    const newObj: GenericType<{ name: string, role: string }> = [
        {
            name: 'Zubair',
            role: 'Developer'
        },
        {
            name: 'Asif',
            role: 'Marketer'
        }
    ]

    type GenericTuple<X, Y> = [X, Y];

    const newTuple: GenericTuple<number, string> = [12, 'Zubair'];
    const newTuple2: GenericTuple<number, { name: string, role: string }> = [12, { name: 'Zubair', role: 'Developer' }];
}