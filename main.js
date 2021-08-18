window.addEventListener('DOMContentLoaded',function (){
    let link_1 = document.querySelector('.link_1'),
        link_2 = document.querySelector('.link_2'),
        link_3 = document.querySelector('.link_3'),
        link_4 = document.querySelector('.link_4'),
        div = document.querySelector('.img')
    link_1.addEventListener('click',function(){
        div.style.backgroundImage = 'url(img/elite.jpg)'
    })
    link_2.addEventListener('click',function(){
        div.style.backgroundImage = 'url(img/hamburger.jpg)'
    })
    link_3.addEventListener('click',function(){
        div.style.backgroundImage = 'url(img/post.jpg)'
    })
    link_4.addEventListener('click',function(){
        div.style.backgroundImage = 'url(img/vegy.jpg)'
    })
     
     
    
})