const inputBox = document.getElementById('input');
const list = document.getElementById('list-container');

function add(){
    if(inputBox.value === '')
        alert('Please write something');
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        save();
        
    }
    inputBox.value = '';
    
}

list.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();
    }
    
} );

function save(){
    localStorage.setItem('data', list.innerHTML);
}

function load(){
    list.innerHTML = localStorage.getItem('data')
}
load();