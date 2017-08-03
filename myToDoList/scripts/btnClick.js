function btnClick() {
    var content = document.getElementById("inputCase"); 
    var toDoList = document.getElementById("todolist");
    var doneList = document.getElementById("donelist");

    var nowDo = document.createElement("li");
    nowDo.setAttribute("id", "nowDo");

    var checkBox = document.createElement("input");
    checkBox.setAttribute("id", "checkBox");
    checkBox.type = "checkbox";

    var newP = document.createElement("p");
    newP.setAttribute("id", "newP");

    var removeBtn = document.createElement("div");
    removeBtn.setAttribute("id", "removeBtn");

    var remove = document.createElement("span");
    remove.setAttribute("id", "remove");
   
    if (content.value == "") {
        alert("The content added cannot be empty！");
    }
    if (content.value) {     
        toDoList.appendChild(nowDo);
        nowDo.appendChild(newP);
        nowDo.insertBefore(checkBox, newP);  
        var txt = document.createTextNode(content.value);
        newP.appendChild(txt);
        nowDo.appendChild(removeBtn);
        removeBtn.appendChild(remove);   
    }
    checkBox.onclick = checkBoxClick;  //onclick相当于一个指针

    removeBtn.onclick = function(evt) {//点击的是div,但是真正触发事件的目标是span
        var curClickRemoveBtn = evt.target; //所以target是span,currentTarget是div
        var removeDiv = evt.currentTarget;
        var taskLi = removeDiv.parentElement;
        var taskList = taskLi.parentElement;
        taskList.removeChild(taskLi);             
    }

}

function checkBoxClick(evt) {
    var curClickCheckBox = evt.target;//点击目标为checkbox
    var nowDo = curClickCheckBox.parentElement;

    var toDoList = document.getElementById("todolist");
    var doneList = document.getElementById("donelist");

    if (curClickCheckBox.checked == true) {
      toDoList.removeChild(nowDo);
      doneList.appendChild(nowDo);
      nowDo.style.boxShadow = "1px 5px 15px 15px #FAFAFA inset" ;
    }
    if (curClickCheckBox.checked == false) {
      doneList.removeChild(nowDo);
      toDoList.appendChild(nowDo);
      nowDo.style.boxShadow = "0 0 0 0 #FFFFFF";
    }
}
