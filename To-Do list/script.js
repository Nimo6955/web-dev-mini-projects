const a = document.querySelector("#text")
const box = document.querySelector("#to-do")

text.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter")
            if(this.value != '')
        {
            todo(this.value)
            this.value = ""
        }
    }
)

const todo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${item}
    <i class="fa-solid fa-xmark"></i>
    `;
    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done")
        }
    )

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove()
        }
    )
    box.appendChild(listItem)
}
