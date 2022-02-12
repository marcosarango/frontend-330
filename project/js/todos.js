// Add a Todos class to the file, and make it the default export for the module
// in the constructor you should set a variable with the element our todo list will be built in, and the key we will use to read/write from locaStorage.
import {ls} from './ls.js';
var todoList = [];
// var data = new ls();
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        var completed = ev.target.classList.toggle('checked');
        for (var i = 0; i < todoList.length; i++) {
            // originally I had one equals sign, that just assigns the value instead of checking if its equal
            if (todoList[i].id.toString() === ev.target.id) {
                todoList[i].completed = completed;
                // const data = JSON.stringify(todoList);
                // localStorage.setItem("todos", data);
                ls.set(todoList);
                break;
            }
        }
    }
}, false);

export default class Todos {
    constructor(elementId) {
        // querySelector returns the first element that matches, in this case its the id 
        this.todoElement = document.querySelector('#myInput');
        // this.parentElement = document.getElementById(elementId);
        // this.todoKey = 'toDoList';
    }

    getAllTodos() {
        todoList = ls.get();
        // todoList = JSON.parse(localStorage.getItem("todos"));
        return todoList;
    }
    closeButton(id) {
        var span = document.createElement("SPAN");
        // entity code - creates the multiplication sign X
        var txt = document.createTextNode("\u00D7");
        // className is a built in attribute from CSS
        span.className = "close";
        span.id = id;
        span.appendChild(txt);
        span.onclick = function (ev) {
            var div = this.parentElement;
            div.style.display = "none";
            for (var i = 0; i < todoList.length; i++) {
                if (todoList[i].id = ev.target.id) {
                    todoList.splice(i, 1);
                    ls.set(todoList);
                    // const data = JSON.stringify(todoList);
                    // localStorage.setItem("todos", data);
                    break;
                }
            }
            // console.log('some text');
        }
        // }
        return span;
    }

    showTaskList() {
        todoList = this.getAllTodos();
        if (todoList == null){
            todoList = new Array();
        }
        var myUL = document.getElementById("myUL");
        myUL.innerHTML = "";
        while (myUL.firstChild) {
            myUL.removeChild(myUL.firstChild);
        }
        // loop through the object array that you created

        todoList.forEach(element => {
            var li = document.createElement("li");
            var txt = document.createTextNode(element.name);
            li.className = element.completed ? 'checked' : '';
            li.id = element.id;
            li.appendChild(txt);
            document.getElementById("myUL").appendChild(li);
            li.appendChild(this.closeButton(element.id));
            // if the element is checked, then add the style
        })

        return todoList;
    }

    showCompletedTodos() {
        this.renderTaskList(this.renderCompletedTasks());
    }

    showActiveTodos() {
        this.renderTaskList(this.renderActiveTasks());
    }

    showAllTasks() {
        this.renderTaskList(this.getAllTodos());
    }

    renderActiveTasks() {
        var tasks = this.getAllTodos();
        let activeList = tasks.filter(task => task.completed === false);
        return activeList;
    }

    renderCompletedTasks() {
        var tasks = this.getAllTodos();
        let completedList = tasks.filter(task => task.completed === true);
        return completedList;
    }

    createTaskList(task) {
        var list = document.createElement("li");
        var txt = document.createTextNode(task.name);
        list.id = task.id;
        list.className = task.completed ? 'checked' : '';
        list.appendChild(txt);
        list.appendChild(this.closeButton(task.id));
        document.getElementById("myUL").appendChild(list);
    }

    renderTaskList(tasks) {
        const taskListElement = document.getElementById('myUL');
        taskListElement.innerHTML = "";
        tasks.forEach(task => {
            this.createTaskList(task);
        })
    }

    addTodo() {
        // this should grab the input in the html where users enter the text of the task, then send that along with the key to a SaveTodo() function. Then update the display with the current list of tasks.
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        // I originally had a getTime() here but it wasn't pulling in different numbers per todo item. Date.now() returned a different number per todo item.
        var dateTime = Date.now();
        todoList.push({ id: dateTime, name: inputValue, completed: false });
        li.id = dateTime;
        ls.set(todoList);
        // const data = JSON.stringify(todoList);
        // localStorage.setItem("todos", data);
        // if I want to do it in one line of code it looks like this
        // localStorage.setItem("todos", JSON.stringify(todoList));
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            // this is where it gets displayed
            document.getElementById("myUL").appendChild(li);
            li.id = dateTime;
            li.appendChild(this.closeButton());
        }
        // this resets the add todo item back to blank
        document.getElementById("myInput").value = "";
    }
}