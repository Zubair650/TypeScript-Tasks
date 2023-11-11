// using interface
interface abstractInfo {
    getName(): void;
    getRole(): void;
}

class AllInfo implements abstractInfo {
    getName(): void {
        console.log('My name is Zubair')
    }
    getRole(): void {
        console.log('I am a developer');
    }
}
const allInfo = new AllInfo();
allInfo.getName();
allInfo.getRole();

// using abstraction class

abstract class abstractInfo2 {
    abstract getName2();
    abstract getRole2()
}

class childClass extends abstractInfo2 {
    getName2(): void {
        console.log('My name is Saad')
    }
    getRole2(): void {
        console.log('I am an architect');
    }
}

const childInfo = new childClass()
childInfo.getName2();
childInfo.getRole2();