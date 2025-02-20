const todo = ['nake dinner', 'clean room', 'study']

for (let i = 0; i < todo.length; i++){
const todos = todo[i]
const html = `<li>${todos}</li>`
}

function addTodo() {
const inputElement = document.querySelector('.todoValue')
const name = inputElement.value

todo.push(name)
console.log(todo);

inputElement.value = ''
}