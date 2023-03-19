var ans1 = document.getElementById('ans-1')
var ans2 = document.getElementById('ans-2')
var ans3 = document.getElementById('ans-3')
var wrong = document.getElementById('wrongans')
var hide = document.getElementById('hide')
var button = document.getElementById('playAgain')
var hero = document.getElementById('h1')
var ul = document.getElementById('ul')
var sub = document.getElementById('sub')






var answer = 0 ;

function random_qus(){
var num1 = Math.floor(Math.random() * 13)
var num2 = Math.floor(Math.random() * 13)
var dummyans1 = Math.floor(Math.random() * 13)
var dummyans2 = Math.floor(Math.random() * 13)

var allanswer =[];
var switchans = [];

answer = num1 - num2;

document.getElementById('num1').innerHTML = num1
document.getElementById('num2').innerHTML = num2


allanswer = [answer, dummyans1, dummyans2];

for(i = allanswer.length;i--;){
switchans.push(allanswer.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
}

ans1.innerHTML = switchans[0];
ans2.innerHTML = switchans[1];
ans3.innerHTML = switchans[2];
}

ans1.addEventListener('click', function(){
if(ans1.innerHTML == answer){
random_qus();
}
else{
    hide.style.display = 'none';
    wrong.style.display = 'block';
    button.style.display = 'block'

}

})


ans2.addEventListener('click', function(){
    if(ans2.innerHTML == answer)
    random_qus();
    else{
    hide.style.display = 'none'; 
    wrong.style.display = 'block';
    button.style.display = 'block'

    }
})



ans3.addEventListener('click', function(){
    if(ans3.innerHTML == answer)
    random_qus();
    else{
    hide.style.display = 'none'
    wrong.style.display = 'block'
    button.style.display = 'block'

}
})

hero.addEventListener('click', function(){
    hero.style.display = 'none'
    ul.style.display = 'block'
})

sub.addEventListener('click', function(){
    hero.style.display = 'block' 
})



button.addEventListener('click', function(){
    wrong.style.display = 'none';
    hide.style.display = 'block'
    button.style.display = 'none'

    random_qus()

})



random_qus();


