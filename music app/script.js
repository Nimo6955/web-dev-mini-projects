const pianoKeys = document.querySelectorAll('.piano-keys .key');
volumeSlider = document.getElementById('input');
showicon = document.getElementById('input2');

let allkeys = [],
audio = new Audio('tunes/a.wav');

const playtune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play();

    const clicked = document.querySelector(`[data-key="${key}"]`);
    clicked.classList.add("active")
    setTimeout(() => {
        clicked.classList.remove("active")
    }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key)    
    key.addEventListener('click', () => {
        playtune(key.dataset.key)
    })
});

const Slider = (e) => {
    audio.volume = e.target.value
};

const showhideicon = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allkeys.includes(e.key)) playtune(e.key);
};

showicon.addEventListener('click', showhideicon);
document.addEventListener('keydown', pressedKey);
volumeSlider.addEventListener("input", Slider);
