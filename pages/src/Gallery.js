let openedPicture

function ExpandImage(imageID){
    alert("I am still having some disagreements with the expand image feature, please imagine that it works")
    openedPicture = document.getElementById(imageID)
    openedPicture.classList.toggle("show")
}

function CloseImage(){
    openedPicture.classList.toggle("hide")
}