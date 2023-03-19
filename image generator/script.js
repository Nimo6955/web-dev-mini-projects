var dark1 = document.getElementById('darkMode1')
var dark2 = document.getElementById('darkMode2')
const back = document.getElementsByTagName('body')[0]
const h1 = document.getElementsByTagName('h1')[0]
let big = document.getElementById('big-border')
var input = document.getElementById('input')
var grid = document.getElementsByClassName('grid')[0]
var  mainButton = document.getElementById('button')

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        loadImg();
    }
    
})


function loadImg(){
    removeImage();

    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=20&client_id=0t7N0eRCia4yhJyMSMLe0EwwgaqNP6Ka213AoGJle4U';

    fetch(url)

    .then(response => {
       if(response.ok){
           console.log(response);
        return response.json()
       }
    })

    .then(data => {
        const images = [];
        for(let i = 0 ;i < data.results.length;i++){
            images[i] = document.createElement('div')
            images[i].className = 'img';
            images[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'
            // images[i]
            grid.appendChild(images[i])
            
            // console.log(urls)
        }
    })
    }
loadImg();

function removeImage(){
    grid.innerHTML = '' ;
}


dark2.style.display = 'none'
dark1.style.visibility = 'none'

dark1.addEventListener('click', function(){
    dark1.style.background = 'white'
    back.style.background = '#2d3436'
    dark1.style.display = 'none'
    dark2.style.display = 'block'
    h1.style.color = 'white'
    big.style.background = 'white'
})

dark2.addEventListener('click', function(){
    dark2.style.background = 'black'
    back.style.background = '#dfe6e9'
    dark2.style.display = 'none'
    dark1.style.display = 'block'
    h1.style.color = 'black'
    big.style.background = 'black'
})