// document.getElementById("count-el").innerText = 10

let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}
function decrement(){
    count -= 1
    countEl.innerText = count
    console.log(count)
    
}
