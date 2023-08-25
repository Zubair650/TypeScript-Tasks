//In TypeScript, type narrowing is the removal of types from a union. 
function ToDo(todos) {
    if (todos) {
        todos.map(function (t) { return console.log(t); });
    }
    else {
        console.log('No todos');
    }
}
var todos = ['todos1', 'todos2'];
ToDo(todos);
