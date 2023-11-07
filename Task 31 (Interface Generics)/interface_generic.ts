{
    interface Developer<T> {
        name: string;
        role: T
    }
    const developer: Developer<'front-end'> =
    {
        name: 'Zubair',
        role: 'front-end'
    }

    type department = {
        department: string
    }
    const developer2: Developer<department> =
    {
        name: 'Zubair',
        role: {
            department: 'front-end'
        }
    }
}