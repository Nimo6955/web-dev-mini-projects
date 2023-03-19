var container1 = document.getElementsByClassName("container-1")[0];
var container3 = document.getElementsByClassName("container-3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var container2 = document.getElementsByClassName('container-2')[0]
var noteText = document.getElementById('note-text')

var i = 0;



checkIcon.addEventListener("click", function(){
    creatNote()
})

xIcon.addEventListener("click", function(){
    typeNotes()
})

function creatNote(){
    var noteText = document.getElementById('note-text').value

    var node0 = document.createElement("div")
    var node1 = document.createElement("h1")
    node1.innerHTML = noteText;
    
    node0.setAttribute("style", "width:250px; height:250px; font-size: 24px; padding: 20px; margin-top: 30px; box-shadow: 2px 5px 10px;")
    node0.style.margin = margin()
    node0.style.transform = rotat()
    node0.style.background = color()
    node0.appendChild(node1);
    if(noteText != ""){
    container2.insertAdjacentElement("beforeend",node0);
    }
    
    var node2 = document.createElement("div")
    node2.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`
    node2.setAttribute("style", "position: absolute; top: 10px; right: 10px;")
    node0.appendChild(node2);
    node2.addEventListener("click", function(){
        node0.remove()
    })
    node0.addEventListener("mouseenter", function(){
        node0.style.transform = 'scale(1.1)';
        node0.style.zIndex = ('1');
    })
    node0.addEventListener("mouseleave", function(){
        node0.style.transform = 'scale(1)';
        node0.style.zIndex = ('0')
    })

    document.getElementById("note-text").value = '';
    
    
        
} 

   
function typeNotes(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}



function color(){
    var randomColor = ['limegreen', 'crimson', 'cyan', 'orange', '#3cb371', 'yellow', 'skyblue', 'gray']
    if(i > randomColor.length-1){
        i = 0
    }
    return randomColor[i++];
}

function margin(){
    var randomMargin = ['-5px', '1px', '5px', '10px', '20px', '15px' ]
    return randomMargin[Math.floor(Math.random() * randomMargin.length)]
}

function rotat(){
    var randomRotat = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(10deg)' ]
    return randomRotat[Math.floor(Math.random() * randomRotat.length)]
}