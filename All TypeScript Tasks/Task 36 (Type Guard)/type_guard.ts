// type guard
type MySelf = {
    name: string;
}
type YourSelf = {
    name: string;
    role: string
}

const getSelf = (self: MySelf | YourSelf) => {
    if ('role' in self) {
        console.log(`Name: ${self.name} and Role: ${self.role}`)
    }
    else {
        console.log(`Name: ${self.name}`)
    }
}

const mySelfUser: MySelf =
{
    name: "Zubair Ahmed"
}
const yourSelfUser: YourSelf =
{
    name: 'Saad Ahmed',
    role: 'Developer'
}

getSelf(mySelfUser)
getSelf(yourSelfUser)