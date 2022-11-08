const inpTask = document.querySelector("#inp-task");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list");

onload = () =>{
    let getLS = localStorage.getItem("tasks")
    let lsParse = JSON.parse(getLS);
    list.innerHTML = lsParse

    let checkBtn = list.querySelectorAll(".fa-check");
    let removeBtn = list.querySelectorAll(".fa-x");
    checkBtn.forEach(el => {
        el.addEventListener("click", e=>{
            e.target.parentElement.parentElement.style.background = "rgb(194, 255, 194)"
            e.target.parentElement.parentElement.style.textDecoration = "line-through";
            localStorage.setItem("tasks", JSON.stringify(list.innerHTML))
        })
    });
    removeBtn.forEach(el => {
        el.addEventListener("click", e=>{
            e.target.parentElement.parentElement.remove();
            localStorage.setItem("tasks", JSON.stringify(list.innerHTML))
        })
    });
}

function addTask(){
    let li = `<li>${inpTask.value}<div><i class="fa-solid fa-check"></i><i class="fa-solid fa-x"></i></li></div>`
    list.innerHTML += li;
    
    let checkBtn = list.querySelectorAll(".fa-check");
    let removeBtn = list.querySelectorAll(".fa-x");
    checkBtn.forEach(el => {
        el.addEventListener("click", e=>{
            e.target.parentElement.parentElement.style.background = "rgb(194, 255, 194)"
            e.target.parentElement.parentElement.style.textDecoration = "line-through"
            localStorage.setItem("tasks", JSON.stringify(list.innerHTML))
        })
    });
    removeBtn.forEach(el => {
        el.addEventListener("click", e=>{
            e.target.parentElement.parentElement.remove();
            localStorage.setItem("tasks", JSON.stringify(list.innerHTML))
        })
    }); 
    localStorage.getItem("tasks")
    localStorage.setItem("tasks", JSON.stringify(list.innerHTML))
   

    inpTask.value = ""
}

addBtn.addEventListener("click", addTask)