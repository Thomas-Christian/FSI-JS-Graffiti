let header = document.querySelector('#page-header')
header.style.textAlign = "left"

let dogDiscription = document.querySelectorAll('.dog-description')
for (let i =0; i < dogDiscription.length; i++) {
    dogDiscription[i].style.color = "red"
}

let dogName = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogName.length; i++){
	dogName[i].style.textAlign = "left"
}

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
    dogImages[i].style.transform = 'rotate(180deg)'
}
