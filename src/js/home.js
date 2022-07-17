const taskOperation = require('./modules/task')

const todoInput = document.getElementById('todo-input')
const addTodoButton = document.getElementById('add-todo-button')
const todoList = document.getElementById('todo-list')

addTodoButton.addEventListener('click', (e) => {
    console.log(todoInput.value)
    e.preventDefault()

    if (todoInput.value) {
        const task = {
            task: todoInput.value,
        }

        taskOperation
            .add(task)
            .then((response) => {
                if (response == 'task added to db') {
                    const todoItem = document.createElement('li')

                    const todoSpan = document.createElement('span')
                    todoSpan.innerText = todoInput.value

                    todoInput.value = ''

                    const deleteTodoButton = document.createElement('button')
                    deleteTodoButton.innerText = 'delete'
                    deleteTodoButton.type = 'button'
                    deleteTodoButton.className = 'delete-button'

                    todoItem.appendChild(todoSpan)
                    todoItem.appendChild(deleteTodoButton)
                    todoList.appendChild(todoItem)

                    deleteTodoButton.addEventListener('click', (e) => {
                        const task = {
                            task: e.target.parentNode.firstChild.innerText,
                        }
                        console.log(
                            'parent node: ' +
                                e.target.parentNode.firstChild.innerText
                        )
                        taskOperation
                            .delete(task)
                            .then((response) => {
                                if (response == 'task deleted') {
                                    e.target.parentNode.remove()
                                }
                            })
                            .catch((error) => {
                                console.log('error')
                                console.log(error)
                            })
                    })
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }
})
