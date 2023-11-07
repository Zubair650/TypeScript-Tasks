{
    interface User1 {
        id: number;
        name: string;
    }
    interface UserInfo1 extends User1 {
        role: string;
    }
    const u1: UserInfo1 = {
        id: 12,
        name: 'Zubair',
        role: 'Developer'
    }

    interface Roll {
        [index: number] : number
    }
    const roll : Roll = [1, 2, 3]
}