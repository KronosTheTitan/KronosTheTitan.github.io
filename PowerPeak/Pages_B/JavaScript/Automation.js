let index = 2;

function createEntry(){
    console.log("Create Entry")

    let main = document.getElementById("deviceList");
    let newEntry = document.createElement("li");
    let title = document.createElement("p");
    let activationTime = document.createElement("p");
    let shutoffTime = document.createElement("p");
    let status = document.createElement("p");
    let deleteButton = document.createElement("button");
    let buttonImg = document.createElement("img");

    title.innerText = "Title";
    activationTime.innerText = "Activation Time";
    shutoffTime.innerText = "Shutoff Time";
    status.innerText = "Off";

    buttonImg.src = "../Icons/DeleteIcon.svg";

    newEntry.id = index;
    deleteButton.onclick = function(){ deleteEntry(newEntry.id); };

    deleteButton.appendChild(buttonImg);

    newEntry.appendChild(title);
    newEntry.appendChild(activationTime);
    newEntry.appendChild(shutoffTime);
    newEntry.appendChild(status);
    newEntry.appendChild(deleteButton);
    main.appendChild(newEntry);

    index++;
}

function deleteEntry(index){
    const entry = document.getElementById(index);
    entry.remove();

    console.log("Delete Entry")
}