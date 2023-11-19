var siteName = document.getElementById("sitename");
var siteURL = document.getElementById("siteurl");
var data = document.getElementById("tabledata");
var button = document.getElementById("addbutton")
var updatedindex;
var siteList = [];


if (JSON.parse(localStorage.getItem('site')).length > 0) {
    siteList = JSON.parse(localStorage.getItem('site'));
    displaySite(siteList);
}


function addURL() {
    var siteData = {
        siteName: siteName.value,
        siteURL: siteURL.value,
    }
    if (button.innerText.toLowerCase() == 'submit') {
        siteList.push(siteData);
    } else {
        updateSiteList(updatedindex, siteData);
    }


    localStorage.setItem('site',JSON.stringify(siteList));

    displaySite(siteList);
    cleardata();
}

function displaySite(list) {
    var wallet = '';
    for (let index = 0; index < list.length; index++) {
        wallet += `<tr>
        <td>${list[index].siteName}</td>
        <td><button class="btn btn-primary" type="button">Visit</button></td>
        <td><button class="btn btn-danger" type="button" onclick="deletedata(${index})">Delete</button></td>
        <td><button class="btn btn-warning" type="button" onclick="updatesite(${index})">Update</button></td>

      </tr>`

    }
    data.innerHTML = wallet;
}

function cleardata() {
    siteName.value = null;
    siteURL.value = null;
}

function deletedata(index) {
    siteList.splice(index, 1);
    displaySite(siteList);
    localStorage.setItem('site',JSON.stringify(siteList));
}

function updatesite(index) {
    var element = siteList[index];
    siteName.value = element.siteName;
    siteURL.value = element.siteURL;
    updatedindex = index;

    button.innerText = ("update");
    button.classList.replace('btn-primary', 'btn-success')
}

function updateSiteList(index, newSite) {
    siteList.splice(index, 1, newSite);

    button.innerText = ("submit");
    button.classList.replace('btn-success', 'btn-primary');
}


function searchsite(term){
    siteSearchList = [];
    for (let index = 0; index < siteList.length; index++) {
        
        var element = siteList[index];
        if (element.siteName.toLowerCase().includes(term.toLowerCase())==true) {
            siteSearchList.push(element);
        }
    }
    displaySite(siteSearchList);
}