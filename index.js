let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0
let total = 0


function increment() {
    count += 1
    countEl.textContent = count
    total += 1
}

function decrement() {
    if (count >= 1) {    
    count -= 1
    countEl.textContent = count
    total -= 1
}}

let totalEL = document.getElementById("total")

function save() {
    if (count >= 1) {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0 
    count = 0
    totalEL.textContent = "TOTAL: " + total
}}


function reset() {
    if ((count > 0) || (total > 0)) {
    if (window.confirm("Do you really want to reset?")) {
    saveEl.textContent = "Previous entries: "  
    totalEL.textContent = "TOTAL: "
    countEl.textContent = 0
    total = 0
    count = 0
    }}}
