'use strict';

//把占位符图片换成目标图片
function showPic(whichpic) {

    if (!document.getElementById("placeholder")) {
        return false;
    }
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");      
    if (placeholder.nodeName != "IMG") {
        return false;
    }
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
        var description = document.getElementById("description");
        
        if (description.firstChild.nodeType == 3) {
             description.firstChild.nodeValue = text;
        }    
    }
    return true;
}

//处理事件（Onclick）
function prepareGallery() {
    
    //浏览器功能检查
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    
    for ( var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
            //return false; //禁用有关链接的默认行为
        }
        //links[i].onkeypress = links[i].onclick;
    }
}

//创建一个img元素和一个p元素
function preparePlaceholder() {
    
    //浏览器功能检查
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "images/placeholder.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id", "description");
    var txt = document.createTextNode("Choose a image.");
    description.appendChild(txt);

    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder, gallery);
    insertAfter(description, placeholder);

    // gallery.parentNode.insertBefore(placeholder, gallery);
    // gallery.parentNode.insertBefore(description, gallery);
}

//在现有元素后插入一个新元素
function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }
    else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
//页面加载完毕时执行函数
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);