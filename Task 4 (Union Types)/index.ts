export { }

function unionType(userId: string | number | boolean, userName: string | number | boolean) {
    console.log(`The user id: ${userId}, user name: ${userName}`)
}
unionType('110', 'saad');
unionType(111, 7);
unionType(false, false);