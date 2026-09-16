//document.getElementById("count-el").innerText ="5"
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")

 let count = 0;
 let entries  = [];
function increment(){

    count = count +1;
    countEl.innerText = count;
 
}

function save(){
    entries.push(count);
    let countStr = countEl.textContent + " - "
    saveEl.textContent  += countStr
    count = 0
    countEl.textContent = 0
    
}

function resetter(){
    let total = entries.reduce(function(sum,entry){
        return sum + entry;
    },0)
    totalEl.textContent ="Total people: "+ total;
   
}




