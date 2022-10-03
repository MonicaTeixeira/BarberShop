
$(document).ready(function(){

    /* rolar para a pagina suavemente*/
    $('nav a').click(function(e){ 
    e.preventDefault();
    var id = $(this).attr('href');
        targetOffset = $(id).offset().top;      

    $('html, body').animate({
        scrollTop: targetOffset
    }, 600);
    
    });

    /* animação das imagens */
    let imagens= document.querySelectorAll('.small_img');
    let modal = document.querySelector('.modal');
    let modalImg = document.querySelector('#modal_img');
    let btClose = document.querySelector('#bt_close');
    let srcVal="";

    for(let i =0; i<imagens.length;i++){
        imagens[i].addEventListener('click',function(){
            
            srcVal = imagens[i].getAttribute('src');
            modalImg.setAttribute('src', srcVal);
            modal.classList.toggle('modal_active');
        });
        
    }

    btClose.addEventListener('click', function(){
        modal.classList.toggle('modal_active');

    });

    window.onscroll = function(){
        scroll();
    }
    /* exibir o botão quando usar o scroll */
    function scroll(){
        var btn = document.getElementById("bt_top");

        if(document.documentElement.scrollTop > 300){
            btn.style.display = "block";
        } else{
            btn.style.display = "none";
        }
    }   

    /* voltar ao topo da pagina */
    var btn = $('#bt_top');

    btn.click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });


    /*menu responsivo para mobile*/
    let show = true;

    const menuSection = document.querySelector(".icon")
    const menuToggle = document.querySelector(".nav")

    menuSection.addEventListener("click", () => {
        menuToggle.classList.toggle("on", show)
        show = !show;
    })




});
