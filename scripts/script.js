function navCollapseOn(){
    let layer = document.getElementById("layer")
    let carousel = document.getElementById("carousel-indicators")
    let btnOpen = document.getElementById("btn-navOpen")
    let btnClosed = document.getElementById("btn-navClosed")

/*     layer.style.display = 'flex' */
    carousel.style.display = 'none'
    btnOpen.classList.add('flip')
    btnClosed.classList.remove('flip')

}

function navCollapseOff(){
    let layer = document.getElementById("layer")
    let carousel = document.getElementById("carousel-indicators")
    let btnOpen = document.getElementById("btn-navOpen")
    let btnClosed = document.getElementById("btn-navClosed")

    layer.style.display ='none'
    carousel.style.display = 'flex'
    
    btnOpen.classList.remove('flip')
    btnClosed.classList.add('flip')

}