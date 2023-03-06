function changeDisplay(sectionName,elementID)
{
    var sectionArray = ["skill-section","experience-section","education-section","certificate-section"];
    var elementArray = ["skills","experience","education","certificate"];
    for(x in sectionArray,elementArray)
    {
        
         if(sectionName == sectionArray[x])
        {
            let ele = document.getElementById(sectionArray[x]);
            ele.style.display = "block";
            let element = document.getElementById(elementArray[x]);
            element.classList.add("active");
        }
        else{
            let ele = document.getElementById(sectionArray[x]);
            ele.style.display = "none";
            let element = document.getElementById(elementArray[x]);
            element.classList.remove("active");
        }
        
    }
}

function changebg(event,mobileEle){
    let mob = document.getElementById(mobileEle);
    if(event == "over")
    {
        mob.style.backgroundColor = "#ff004f";
        mob.style.transitionDuration = "0.5s";
    }else {
        mob.style.backgroundColor = "#262626";
    }
    
}

// download resume function 

function download()
{
    var authToken = prompt("Please Enter the password to download my resume");
    if(authToken == "Muke_3059")
    {
        return true;
    }
    else{
        alert("Wrong Password -- Access Denied");
        return false;
    }
}

// Mobile open menu tab

function openMenu()
{
    let menuSection = document.getElementById("menu-list");
    let closeIcon = document.getElementById("close-icon");

    menuSection.style.width = "200px";
    closeIcon.style.display = "block";
}

// Mobile close menu tab

function closeMenu()
{
    // screen width condition added to fix alignment issue
    let screenWidth = window.screen.width;
    if(screenWidth < 600) 
    {
        let menuSection = document.getElementById("menu-list");
        let closeIcon = document.getElementById("close-icon");
        let menuIcon = document.getElementById("menu-icon");
    
        menuSection.style.width = "0";
        closeIcon.style.display = "none";
    }
    
}