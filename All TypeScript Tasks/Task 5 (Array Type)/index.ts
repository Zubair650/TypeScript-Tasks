export { }
let arr1: string[]
let arr2: Array<string>
let arr3: (string | number)[]

arr1 = ['rahim', 'karim', 'jashim'];
arr2 = ['rahima', 'karima', 'jashima'];
arr3 = [5, 'karima', 'jashima'];

console.log(arr1.sort())
arr2.map(a => {
    console.log(a)
})
let filtered = arr3.filter(a=>{
    return typeof(a) == 'number'
})
console.log(filtered.join(''))


