var btnsPlus = document.querySelectorAll('.btnPlus')
var btnsMoins = document.querySelectorAll('.btnMoins')

console.log(btnsPlus)

for(let i = 0; i <btnsPlus.length; i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
        

    })
}



for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if (btnsMoins[i].nextElementSibling.innerText>0) {
            btnsMoins[i].nextElementSibling.innerText--
        
        }
        
    })
    
}



var fatrash = document.querySelectorAll('.fa-trash')

for (let i = 0; i < fatrash.length; i++) {

    fatrash[i].addEventListener('click',function(){
        fatrash[i].parentElement.remove()
        SommeTotal()
        console.log(fatrash)
    })
    
}


var faheart = document.querySelectorAll('.fa-heart')
for (let i = 0; i < faheart.length; i++) {
    
    faheart[i].addEventListener('click',function(){
        faheart[i].classList.toggle('layka')
    })
    
}




