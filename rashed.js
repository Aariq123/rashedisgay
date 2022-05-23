const text = document.querySelector('.text');
const btn = document.querySelector('.btn'); 
const cancel = document.querySelector('.cancel'); 
const content = document.querySelector('.content'); 



function rain(){
    const purple =  document.createElement('div');
    purple.textContent = '💜';
    purple.classList.add('purple');
    purple.style.left = `${ Math.floor(Math.random()*85) }vw`;
    document.body.appendChild(purple);


    purple.addEventListener('animationend', ()=>{
        purple.remove()
    })
}





btn.addEventListener('click', ()=>{

    text.style.opacity = 1;
    content.style.display = 'none';

    const time = setInterval(rain, 400)

    cancel.addEventListener('click', ()=>{
        text.style.opacity = 0;
        content.style.display = 'block';
        clearInterval(time)
    })
    
})

