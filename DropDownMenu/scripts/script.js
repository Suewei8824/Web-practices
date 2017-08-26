function dropDownMenu() {
    var teamNameList = document.querySelectorAll(".main-team");

    for (var i = 0; i < teamNameList.length; i++) {

        var teamNameBtn = teamNameList[i];
 
        teamNameBtn.onclick = function(evt) {
        
            var curClickTeamBtn = evt.currentTarget;
            toggle(curClickTeamBtn);
        }
    }
    var toggle = function(curClickTeamBtn) {
        
        var curClickTeamName = curClickTeamBtn.querySelector("p");
        var curClickTeamNameText = curClickTeamName.textContent;
        var curClickTeamPlayer = curClickTeamBtn.querySelector("ul");
        var curDisplayStatus = curClickTeamBtn.getAttribute("isDisplay");
        
        for (var j = 0; j < teamNameList.length; j++) {

            var clickBtn = teamNameList[j];
            var clickTeamName = clickBtn.querySelector("p");
            var clickTeamNameText = clickTeamName.textContent;
            var clickTeamPlayer = clickBtn.querySelector("ul");
            var displayStatus = clickBtn.getAttribute("isDisplay");
            
            if (curClickTeamNameText.trim() === clickTeamNameText.trim()) {
                if (curDisplayStatus === "true"){
                    curClickTeamPlayer.classList.add("hide");
                    curClickTeamBtn.setAttribute("isDisplay", "false");
                }
                else {
                    curClickTeamPlayer.classList.remove("hide");
                    curClickTeamBtn.setAttribute("isDisplay", "true");
                }           
            }
            else {
                clickTeamPlayer.classList.add("hide");
                clickBtn.setAttribute("isDisplay", "false");
            }
        }
    };
}
addLoadEvent(dropDownMenu);