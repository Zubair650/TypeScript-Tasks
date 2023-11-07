{
    const functionGeneric = <T>(param: T): T => {
        return param;
    }
    const x = functionGeneric<string>('Bangladesh')

    const functionGeneric2 = <T>(std: T): T => {
        return { ...std }
    }
    const y = functionGeneric2<{
        name: 'Zubair',
        role: 'Developer'
    }>
    const z = functionGeneric2<{
        name: 'Saad',
        role: 'Doctor'
    }>
}