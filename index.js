//function 
const root = document.getElementById("root")
const wrapper = document.createElement("div")
//const box = `<div></div>` //cannot use append method on this HTML template
wrapper.style.cssText = `display: grid; grid-template-columns: repeat(16, 1fr); width: 350px; height: 350px;`

for(let i = 0; i < 256; i++){
    const etch = document.createElement("div")
    etch.style.cssText = `border: 1px black solid;`
    etch.addEventListener("mouseover", (e) =>{
    let r = getRandomNumber()
    let b = getRandomNumber()
    let g = getRandomNumber()
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`
    e.target.innerHTML = `cool huh!`
})
wrapper.appendChild(etch)
}
root.appendChild(wrapper)

const resetBtn = document.getElementById("reset-btn")
resetBtn.addEventListener("click", () =>{
    root.innerHTML = ""
    const gridcols = Number.parseInt(prompt("Please enter a number between 1 and 100: "))
    const gridSize = gridcols ** 2
    const wrapperOne = document.createElement("div")
    wrapperOne.style.cssText = `display: grid; grid-template-columns: repeat(${gridcols}, 1fr); width: 350px; height: 350px;`
    for(let i = 0; i < gridSize; i++){
        const etch = document.createElement("div")
        etch.style.cssText = `border: 1px black solid;`
        etch.addEventListener("mouseover", (e) =>{
        let r = getRandomNumber()
        let b = getRandomNumber()
        let g = getRandomNumber()
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`
        e.target.innerHTML = `Hmm!`
    })
    wrapperOne.appendChild(etch)
    }
    root.appendChild(wrapperOne)

})

function getRandomNumber(){
    return Math.floor(Math.random() * 256)
}