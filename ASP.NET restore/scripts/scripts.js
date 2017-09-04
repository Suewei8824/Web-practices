function mainNavClick() {
    var navList = document.querySelector("#navList");//父容器
    var mainNavBtn = navList.querySelectorAll(".main-li");//父容器的所有直接子元素 li
    //遍历所有直接子元素，即li元素
    for (var i = 0; i < mainNavBtn.length; i++) {

        (function(index) {
           var mainNav = mainNavBtn[index];//获取li元素的所有直接子元素
           mainNav.onclick = function(evt) {//点击事件
               var curClickItem = evt.currentTarget;
               toggle(curClickItem);
           };
        })(i);
    }

    var toggle = function(curMainNav) {
        if(!curMainNav) {
            return;
        }
        var curNavPara = curMainNav.querySelector("p");
        var curNavUl = curMainNav.querySelector("ul");
        var curNavText = curNavPara.textContent;
        var curNavExpand = curMainNav.getAttribute("isCarryOut");

        for (var i = 0; i < mainNavBtn.length; i++) {
            var mainNav = mainNavBtn[i];
            var navPara = mainNav.querySelector("p");
            var navUl = mainNav.querySelector("ul");
            var navText = navPara.textContent;
            var navExpand = mainNav.getAttribute("isCarryOut");

            if (navText.trim().toLowerCase() === curNavText.trim().toLowerCase()) {
                if (curNavExpand === "true") {
                    curNavUl.classList.add("hide");
                    curMainNav.setAttribute("isCarryOut", "false");
                }
                else {
                    curNavUl.classList.remove("hide");
                    curMainNav.setAttribute("isCarryOut", "true");
                }
            }
            else {
                navUl.classList.add("hide");
                mainNav.setAttribute("isCarryOut", "false");
            }
        }
    }
}

function selectReplacePage() {
    var selectPageBtn = document.querySelector("#selectPage");
    var replacePage = document.querySelector("#replacePage");

    selectPageBtn.onclick = function(evt) {
        var curClickBtn = evt.target;

        if (curClickBtn.nodeName && curClickBtn.nodeName.trim().toLowerCase() === "li") {

            var displayPage = curClickBtn.getAttribute("selected-page");
            var selectPageList = document.querySelectorAll(".same-li");
            var replacePageList = document.querySelectorAll(".replace-place");

            for (var m = 0; m < replacePageList.length; m++) {
                var curReplacePage = replacePageList[m];
                var curDisplay = curReplacePage.getAttribute("display-page");
                
                if (curDisplay === displayPage) {
                    curReplacePage.classList.remove("hide");
                }
                else {
                    curReplacePage.classList.add("hide");
                }
            }

            for (var n = 0; n < selectPageList.length; n++) {
                var curSelectPage = selectPageList[n];
                if (displayPage === curSelectPage.getAttribute("selected-page")){
                    curSelectPage.classList.add("page-selected");
                }
                else {
                    curSelectPage.classList.remove("page-selected");
                }
            }
        }
    };
    replacePage.onclick = function(evt) {

        var selectedPart = evt.target;

        if(selectedPart.nodeName && selectedPart.nodeName.trim().toLowerCase() === "a" && selectedPart.classList.contains("side-btn")) {
            
            var curSelectedPage = selectedPart.parentElement.parentElement;//外层ul
            var curSelectedContent = selectedPart.nextElementSibling;//内层ul

            //判断不为空
            if (curSelectedPage && curSelectedContent) {
                
                var selectedList = curSelectedPage.querySelectorAll("li[class*=replace-subplaces]")//外层ul里边的li,var selectedList = curSelectedPage.querySelectorAll("li[class*=replace-subplaces]")

                for (var j = 0; j < selectedList.length; j++) {

                    var mainUl = selectedList[j];
                    var selectedBtn = mainUl.querySelector("a");
                    var mainContentList = mainUl.querySelector("ul");
                    
                    mainContentList.classList.add("hide");
                    selectedBtn.classList.remove("side-btn-selected");
                }
            selectedPart.classList.add("side-btn-selected");
            curSelectedContent.classList.remove("hide");
            }
        }
    };
}

function mediaSelect () {
    var logoImage = document.querySelector(".logoImage");
    // if (window.innerWidth) {
    //     winWidth = window.innerWidth;
    // }
    // else if ((document.body) && (document.body.clientWidth)) {
    //     winWidth = document.body.clientWidth;
    // }
    
    // if (winWidth <= "780px") {
    //     var bergBar = document.createElement("div");
    //     bergBar.setAttribute("id", "bergBar");
    //     var middleMeat = document.createAttribute("span");
    //     middleMeat.setAttribute("id", "middleMeat");
    //     bergBar.appendChild(middleMeat);

    //     logoImage.parentElement.insertBefore(bergBar, logoImage);
    // }
        var bergBar = document.createElement("div");
        bergBar.setAttribute("id", "bergBar");
        var middleMeat = document.createAttribute("span");
        middleMeat.setAttribute("id", "middleMeat");
        bergBar.appendChild(middleMeat);

        logoImage.parentElement.insertBefore(bergBar, logoImage);
}
addLoadEvent(mainNavClick);
addLoadEvent(selectReplacePage);
addLoadEvent(mediaSelect);