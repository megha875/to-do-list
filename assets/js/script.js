let  ListContainer =document.getElementById
('List-container')
let inputBox = document.getElementById('input-box')

function addTask(){
    if(inputBox.value === ''){
        alert('Add Your Task')
    }
    else{
        let task = document.createElement('Li')
        task.textContent = inputBox.value
        ListContainer.appendChild(task)

        let span = document.createElement('span');
        span.textContent = "\u00d7";
        task.appendChild(span)
    }

    inputBox.value = ''
}
ListContainer.addEventListener('click', (e)=>{
    if(el.target.tgName == 'LI'){
        el.target.classList.toggle('checked')
        saveData()
    }
    else if(el.target.tgName == 'SPAN'){
        el.target.parentElement.remove()
        saveData()
    }

})
function saveData(){
    localStorage.setItem("task", ListContainer .innerHTML)
}
function showData(){
    ListContainer.innerHTML = localStorage.getItem('tasks')
}
showData()