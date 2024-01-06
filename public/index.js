const menubutton = document.querySelector('#menubutton')
const menu = document.querySelector('#menu')

menubutton.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }
})
