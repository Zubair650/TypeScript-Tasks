const age: number = 25;

// The ternary operator is a conditional operator which evaluates either of two expressions – a true expression and a false expression – based on a conditional expression that we provide.
const isAdult = age >= 20 ? 'adult' : 'not adult'
console.log({ isAdult });

// The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.

const isAuthentic = ''; // null or undefined decision making

const auThentic = isAuthentic ?? 'fake'
const auThentic2 = isAuthentic ? isAuthentic : 'fake'

console.log({ auThentic })
console.log({ auThentic2 })

// The Optional chaining (?.) operator, is a feature that allows us to safely access properties or methods on an object without worrying about whether the object is null or undefined. 

let profile:
    {
        name: string;
        address:
        {
            ParmanentAddress: string,
            PresentAddress?: string
        }
    } = {
    name: 'Zubair',
    address:
    {
        ParmanentAddress: 'Dhaka'
    }
}
const presentAddress = profile?.address?.PresentAddress ?? 'No Present Address';
console.log({ presentAddress });
