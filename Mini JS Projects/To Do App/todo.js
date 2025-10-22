const addbtn = document.getElementById('add-btn')
const taskbox = document.getElementById('task-box')
const taskcontainer = document.getElementById('task-list-container')

addbtn.addEventListener('click', () =>{
    const task = taskbox.value.trim()
    if (!task) return;

    const list = document.createElement('li')
    list.innerText = task

    const donebtn = document.createElement('button')
    donebtn.id = 'donebtn'
    donebtn.innerText = "Done"
    donebtn.addEventListener('click', () => {
        list.style.textDecoration = 'line-through'
    })

    const delbtn = document.createElement('button')
    delbtn.id = 'deletebtn'
    delbtn.innerText = "Delete"
    delbtn.addEventListener('click', () => {
        list.remove()
    })

    list.appendChild(donebtn)
    list.appendChild(delbtn)
    
    taskcontainer.appendChild(list)
    taskbox.value = ''
})
