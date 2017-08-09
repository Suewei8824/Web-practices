function btnClick() {
    var content = document.getElementsByClassName("inputCase")[0]; 
    var toDoList = document.getElementsByClassName("todolist")[0];
    var doneList = document.getElementsByClassName("donelist")[0];

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

    var checkRankOne = document.getElementById("checkrankone");
    var checkRankTwo = document.getElementById("checkranktwo");
    var checkRankThree = document.getElementById("checkrankthree");
    nowDo.setAttribute("priority", 2);
   
    if (content.value == "") {
        alert("The content added cannot be empty！");
    }
    if (content.value) {     
        if (checkRankOne.checked == true) {
            nowDo.setAttribute("priority", checkRankOne.value);
        }
        if (checkRankTwo.checked == true) {
            nowDo.setAttribute("priority", checkRankTwo.value);
        }
        if (checkRankThree.checked == true) {
            nowDo.setAttribute("priority", checkRankThree.value);
        }
        if (toDoList.childNodes.length == 0) {
            toDoList.appendChild(nowDo); 
        }
        if (toDoList.childNodes.length != 0) {
            for (var i = 0; i < toDoList.childNodes.length; i++) {
                if (parseInt(nowDo.getAttribute("priority")) >= parseInt(toDoList.childNodes[i].getAttribute("priority"))) {
                    toDoList.insertBefore(nowDo, toDoList.childNodes[i]);
                    break;
                }    
            }  
        }
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

    var toDoList = document.getElementsByClassName("todolist")[0];
    var doneList = document.getElementsByClassName("donelist")[0];

    if (curClickCheckBox.checked == true) {
      toDoList.removeChild(nowDo);
      doneList.appendChild(nowDo);
      nowDo.style.backgroundColor = "#F4F4F4";
    }
    if (curClickCheckBox.checked == false) {
      doneList.removeChild(nowDo);
      toDoList.appendChild(nowDo);
      nowDo.style.backgroundColor = "#F0FFF0";
    }
}
