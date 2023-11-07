{
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }
    const user = {
        name: 'Zubair',
        role: 'Developer'
    }
    const result = getPropertyValue(user, 'role');
}