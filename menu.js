const nav =document.querySelector('.main-menu');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', window.scrollY>0)
})


