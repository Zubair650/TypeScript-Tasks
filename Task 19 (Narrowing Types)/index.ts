//In TypeScript, type narrowing is the removal of types from a union. 

function ToDo(todos: string[] | null) {
    if (todos) {
        todos.map(t => console.log(t));
    }
    else {
        console.log('No todos');
    }
}
const todos = ['todos1', 'todos2'];
ToDo(todos);