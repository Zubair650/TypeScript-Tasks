{
    type Person =
        {
            name: string,
            role: string,
            age?: number
        }
    // Pick
    type x = Pick<Person, "name" | "role">

    // Omit
    type y = Omit<Person, "name" | "role">

    // Required
    type z = Required<Person>

    // Partial
    type p = Partial<Person>

    // Readonly
    type q = Readonly<Person>

    // Record
    type r = Record<string, string>
    const obj1: r = {
        x: 'x',
        y: 'y',
        z: 'z'
    }
}