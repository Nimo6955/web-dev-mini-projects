var quote = [];
var index = 0;
var textposition = 0;
var flag = true;
var text = document.getElementsByClassName('text')[0];

function loadquote(){
    const url = "https://api.quotable.io/random";

    fetch(url)

    .then(response => {
        if(response.ok)
        return response.json();
    })

    .then(data => {
        quote[index] = data.content;
    })
}

function typewriter(){
    if(flag)
    {
        loadquote();
        quote[index] += ' ';
        flag = false;
    }
    text.innerHTML = quote[index].substring(0, textposition) + `<span>\u25AE</span>`;

    if(textposition++ != quote[index].length)
    {
        setTimeout('typewriter()', 100);
    }
    else
    {
        quote[index] = ' ';
        flag = true;
        setTimeout('typewriter()', 3000);
        textposition = 0
    }
}
typewriter();