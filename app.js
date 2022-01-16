const todo = document.getElementById('do');
const add = document.getElementById('add');
const list = document.getElementById('list');

add.addEventListener('click', ()=>{
    list.innerHTML +=`<li class="list-group-item">${todo.value}</li>`;
});