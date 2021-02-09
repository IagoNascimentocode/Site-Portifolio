function navCollapseOn(){
    let layer = document.getElementById("layer")
    let carousel = document.getElementById("carousel-indicators")

    layer.style.display = 'flex'
    carousel.style.display = 'none'

}

function navCollapseOff(){
    let layer = document.getElementById("layer")
    let carousel = document.getElementById("carousel-indicators")

    layer.style.display ='none'
    carousel.style.display = 'flex'
}