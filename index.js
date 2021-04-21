const formOne=document.formOne

formOne.addEventListener("submit", (e)=>{
    e.preventDefault()
    const h1 = document.createElement("h1")
    h1.textContent=formOne.noBobomb.value*7
    document.getElementById('divOne').appendChild(h1)
})

const formTwo=document.formTwo

formTwo.addEventListener("submit", (e)=>{
    e.preventDefault()
    const h2 = document.createElement("h2")
    h2.textContent=formTwo.noCheep.value*11
    document.getElementById('divTwo').appendChild(h2)
})
const formThree=document.formThree

formThree.addEventListener("submit", (e)=>{
    e.preventDefault()
    const h3 = document.createElement("h3")
    h3.textContent=formThree.noGoomba.value*5
    document.getElementById('divThree').appendChild(h3)
})