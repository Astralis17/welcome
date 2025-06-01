function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
}
function hide(id){
        element = document.getElementById(id);

        large.style.zIndex = -100;
}
function setAndShow(image){
        let large = document.getElementById("large")
        let largeImage = document.getElementById("largeImage")
        for (let i = 0; i < large.classList.length; i++) {
                if (large.classList[i] != "large"){
                        large.classList.replace(large.classList[i], "large")

                }
        }
        large.classList.add(image);
        sleep(50).then(() => {
        largeImage.style.marginLeft = (document.body.offsetWidth - largeImage.offsetWidth)/2 + "px";
        console.log(largeImage.offsetWidth)
        sleep(1).then(() => {large.style.zIndex = 1;})
        })
        

}