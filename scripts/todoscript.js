const todo = []

function addTodo() {
const inputElement = document.querySelector('.todoValue')
const name = inputElement.value

todo.push(name)
console.log(todo);

inputElement.value = ''
}