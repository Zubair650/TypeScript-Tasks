{
    let arr1: string[] = ['Rahim', 'Karim', 'Jashim'];
    let arr2: [string, string] = ['Asif', 'Nasif'];

    arr1.push(...arr2); //spread operator

    const arrList = {
        ...arr1,
        ...arr2
    }

    // rest operator
    const newfriends = (...friends: string[]) => {
        friends.forEach((fr: string) => console.log(fr));
    }
    newfriends('Rahim', 'Karim', 'Jashim');

}

