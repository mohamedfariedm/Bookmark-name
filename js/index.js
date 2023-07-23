var siteName=document.getElementById("siteName");
var siteUrl=document.getElementById("siteUrl");
var tableBody=document.getElementById("tableBody");
function nameValidetion(name){
    var rege=/^[a-zA-Z0-9]{3,}$/;
    if(rege.test(name)==false){
        document.getElementById("valiedName").classList.replace("opacity-0","opacity-100");
        siteName.style.cssText=`
        border-color: #ae3419b1;
        -webkit-box-shadow: rgba(150, 64, 36, 0.712) 0px 0px 10px;
        box-shadow: rgba(173, 64, 9, 0.655) 0px 0px 10px;
        `
        return "";
        
    }else{
        for(var i=1;i<sites.length;i++){
            if(sites[i].Name==name){
                document.getElementById("valiedName").classList.replace("opacity-0","opacity-100");
                siteName.style.cssText=`
                border-color: #ae3419b1;
                -webkit-box-shadow: rgba(150, 64, 36, 0.712) 0px 0px 10px;
                box-shadow: rgba(173, 64, 9, 0.655) 0px 0px 10px;
                `
                document.getElementById("valiedName").innerHTML="the name exisest before";
                return "";
            }
        }
        document.getElementById("valiedName").classList.replace("opacity-100","opacity-0");
        siteName.style.cssText=`
        border-color: #54d64eb1;
        -webkit-box-shadow: rgba(19, 161, 38, 0.712) 0px 0px 10px;
        box-shadow: rgba(34, 168, 24, 0.655) 0px 0px 10px;
        `
        return name;
    }
    };


function urlValidetion(url){
    var rege=/^(https?:\/\/)((?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    if(rege.test(url)==false){
        document.getElementById("valiedUrl").classList.replace("opacity-0","opacity-100");
        siteUrl.style.cssText=`
        border-color: #ae3419b1;
        -webkit-box-shadow: rgba(150, 64, 36, 0.712) 0px 0px 10px;
        box-shadow: rgba(173, 64, 9, 0.655) 0px 0px 10px;
        `
        return "";
    }else{

        document.getElementById("valiedUrl").classList.replace("opacity-100","opacity-0");
        siteUrl.style.cssText=`
        border-color: #54d64eb1;
        -webkit-box-shadow: rgba(19, 161, 38, 0.712) 0px 0px 10px;
        box-shadow: rgba(34, 168, 24, 0.655) 0px 0px 10px;
        `
        return url;
    }
    };

    var sites=["welcome"];
    if(localStorage.getItem("sites")!=null){
        sites=JSON.parse(localStorage.getItem("sites"))
        displaySites(sites);
    }



function addSite(){
    if( nameValidetion(siteName.value)!="" && urlValidetion(siteUrl.value)!="" ){
        var site={
            Name:siteName.value,
            Url:siteUrl.value,
        }
        sites.push(site);
        displaySites(sites);
        localStorage.setItem("sites",JSON.stringify(sites));
        clearInpusts()
    }else{

    }

};



function clearInpusts(){
    siteName.value="";
    Url:siteUrl.value="";
}

function deleteElement(index){
    sites.splice(index,1);
    displaySites(sites);
    localStorage.setItem("sites",JSON.stringify(sites));
}


function displaySites(arr){
    var container="";
        for(var i=1;i<arr.length;i++){
        container+=`
            <tr>
            <td>${i}</td>
            <td>${arr[i].Name}</td>
            <td><a href=${arr[i].Url} class="btn btn-info w-50 fw-medium" target="blank" rel="noopener noreferrer"><i class="fa-solid fa-eye my-1">vist</i></a></td>
            <td><button class="btn btn-danger w-50 fw-bolder" onclick="deleteElement(${i})"><i class="fa-solid fa-trash-can">delete</i></button></td>
            </tr>
        `
}
    tableBody.innerHTML=container;
};


