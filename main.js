window.addEventListener("load", (event) => {
    console.log(JSON.parse(localStorage.getItem('tasks')));
    JSON.parse(localStorage.getItem('tasks')).map((el) => { // в чем проблема
        const li = document.createElement('li')
    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    const todoText = document.createElement('input')
    todoText.setAttribute('type', 'text')
    todoText.setAttribute('readonly', 'readonly')
    todoText.value = el.text
    const edit = document.createElement('button')
    edit.textContent = 'edit'
    const del = document.createElement('button')
    del.textContent = 'X'

    edit.addEventListener('click', (e) => {
        if (edit.textContent === 'save') {todoText.setAttribute('readonly', 'readonly')
         edit.textContent = 'edit'
     }  else {todoText.removeAttribute('readonly')
      edit.textContent = 'save'
     }  
     })

 
     del.addEventListener('click', () => {
         li.remove()
     })
 
     inputCheckBox.addEventListener('change', () => {
         inputCheckBox.checked ? todoText.style = 'text-decoration: line-through' : todoText.style = 'text-decoration: none'
     })
 
     li.appendChild(inputCheckBox)
     li.appendChild(todoText)
     li.appendChild(edit)
     li.appendChild(del)
     list.appendChild(li)
    })
})


const container = document.createElement('div')
const root = document.getElementById('root')
root.appendChild(container)


const title = document.createElement('h1')
title.textContent = 'TODOLIST'
container.appendChild(title)

const form = document.createElement('form')
const input = document.createElement('input')
input.setAttribute('required', 'required')
const button = document.createElement('button')
button.textContent = '+'

container.appendChild(form)
form.appendChild(input)
form.appendChild(button)


const list = document.createElement('ul')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    const inputCheckBox = document.createElement('input')
    inputCheckBox.setAttribute('type', 'checkbox')
    const todoText = document.createElement('input')
    todoText.setAttribute('type', 'text')
    todoText.setAttribute('readonly', 'readonly')
    todoText.value = form.children[0].value
    const edit = document.createElement('button')
    edit.textContent = 'edit'
    const del = document.createElement('button')
    del.textContent = 'X'

    edit.addEventListener('click', (e) => {
       if (edit.textContent === 'save') {todoText.setAttribute('readonly', 'readonly')
        edit.textContent = 'edit'
    }  else {todoText.removeAttribute('readonly')
     edit.textContent = 'save'
    }  
    })

    del.addEventListener('click', () => {
        li.remove()
    })

    inputCheckBox.addEventListener('change', () => {
        inputCheckBox.checked ? todoText.style = 'text-decoration: line-through' : todoText.style = 'text-decoration: none'
    })

    li.appendChild(inputCheckBox)
    li.appendChild(todoText)
    li.appendChild(edit)
    li.appendChild(del)
    list.appendChild(li)
})
container.appendChild(list)
list.addEventListener('DOMSubtreeModified', (e) => {
    if(e.target.localName === 'ul'){
        const todoArr = Array.from(e.target.children).map((el, idx) =>{
            el.children[2].addEventListener('click', (e) => {
               if(el.children[2].textContent !== 'save') {
                const newTaskArr = JSON.parse(localStorage.getItem('tasks')).map((item, index) =>{
                    return idx === index ? {...item, text: el.children[1] .value} : item
                })
                localStorage.setItem('tasks', JSON.stringify(newTaskArr))
               }
            })
             el.children[0].addEventListener('change', (e) => {
                if(el.children[0] === el){ 
                    const newTaskA = JSON.parse(localStorage.getItem('tasks')).map((item, index) => {
                        return item.checked = !item.checked;
                    })
                    localStorage.setItem('tasks', JSON.stringify(newTaskA))
                    console.log(newTaskA);
                }
            })
            return {
                text: el.children[1].value,
                checked: el.children[0].checked
            };

        })
        localStorage.setItem('tasks', JSON.stringify(todoArr))
    }
})
















