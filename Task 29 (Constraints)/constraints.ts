{
    const functionGeneric2 = <T extends { name: string, role: string }>(std: T): T => {
        return { ...std }
    }
    const y = functionGeneric2<{
        name: 'Zubair',
        role: 'Developer',
        experience: '2 years'
    }>
    const z = functionGeneric2<{
        name: 'Saad',
        role: 'Doctor'
    }>
}