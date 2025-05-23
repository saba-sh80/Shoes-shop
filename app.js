let $ = document
const logoItem = $.getElementById("logo")



function shadowOpenHandler(){
    logoItem.classList.add("shadow-activer")     //for showing shadow on logo
}

function shadowCloseHandler(){
    logoItem.classList.remove("shadow-activer")    //for destroying shadow on logo

}

logoItem.addEventListener("mouseover" , shadowOpenHandler)
logoItem.addEventListener("mouseout" , shadowCloseHandler)



// setTimeout(function(){
//     alert("Welcome to our online shop")
// },1000)



