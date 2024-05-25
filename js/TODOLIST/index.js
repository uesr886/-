//用户每次创建一个todo，就存进数组
//循环数组，生成数组长度相同的li结构

var todoData = []
var addTodo = document.querySelector('.btn')
var todoList = document.querySelector('.list')
//新增按钮
function addNewTodo(){
    // input 是否有值
    if(document.getElementById('newTodo').value != ''){
        todoData.push({
            id: Date.now(),
            content: document.getElementById('newTodo').value,
            completed: false
        })

        //渲染列表
        render()
        document.getElementById('newTodo').value = ''
    }
}

function render() {
    var str = ''
 
    for(var i = 0; i < todoData.length; i++){
        //  todoData[i]

        var item = todoData[i]
        str += `
        <li class="list-item">
                <input type="checkbox" class="item-check" id="">
                <p class="item-content">${item.content}</p>
                <span class="close" data-id="${item.id}" data-action="remove">×</span>
            </li>
            `
    }

    // 往ul中植入str
    todoList.innerHTML = str
}

function removeTodo(e) {
    console.log(e.target);
    if (e.target.dataset.action ==='remove') {
        var id = e.target.dataset.id
        for(var i = 0; i < todoData.length; i++){
            if(todoData[i].id == id){
                todoData.splice(i, 1)
                break
            }
        }
        render()
    }
}
addTodo.addEventListener('click', addNewTodo)
todoList.addEventListener('click', removeTodo)