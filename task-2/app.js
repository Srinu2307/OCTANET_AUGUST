function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value === '') {
        alert('You must write something!');
        return;
    }

    let li = document.createElement('li');
    let taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(taskText);

    let span = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    span.onclick = function() {
        this.parentElement.style.display = 'none';
    };
    li.appendChild(span);

    li.onclick = function() {
        this.classList.toggle('completed');
    };

    taskList.appendChild(li);
    taskInput.value = '';
}

document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});