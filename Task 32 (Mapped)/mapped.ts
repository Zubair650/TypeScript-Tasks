{
    type SpecialType<T> = {
        [key in typeof T]: T[key]
    }

    const x: SpecialType<{ name: string, role: string }> = {
        name: 'zubair',
        role: 'developer'
    }
    console.log(x);
}