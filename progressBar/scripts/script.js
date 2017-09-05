var i = 1;
function progressBar() {  
    var showBar = setInterval("runStyle()", 100);
}
function runStyle() {
    i += 1;    
    var barSpan = document.getElementById("pro-bar"); 
    if(i > 100)  
    {   
        clearInterval(showBar);  
    }
    barSpan.style.width = i + "%";
    barSpan.innerHTML = i + "%";        
}

addLoadEvent(progressBar);