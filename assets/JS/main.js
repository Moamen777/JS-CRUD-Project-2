var siteName = document.getElementById("sitename");
var siteURL = document.getElementById("siteurl");
var data = document.getElementById("tabledata");

var siteList =[];


function addURL(){
    var siteData ={
        siteName:siteName.value,
        siteURL:siteURL.value,
    }
    siteList.push(siteData);
    displaySite();
    cleardata();
}

function displaySite(){
    var wallet ='';
    for (let index = 0; index < siteList.length; index++) {
        wallet+=`<tr>
        <td>${siteList[index].siteName}</td>
        <td><button class="btn btn-primary" type="button">Visit</button></td>
        <td><button class="btn btn-danger" type="button" onclick="deletedata(${index})">Delete</button></td>
        <td><button class="btn btn-warning" type="button">Update</button></td>

      </tr>`
        
    }
    data.innerHTML=wallet;
}

function cleardata(){
    siteName.value =null;
    siteURL.value = null;
}

function deletedata(index){
    siteList.splice(index,1);
    displaySite()
}