
// Iniciando a NavBar
$(document).ready(function () { $(".button-collapse").sideNav(); })

// Iniciando o menu expandível
$(document).ready(function () { $('.collapsible').collapsible(); });

// Selecionando botão pelo ID e passando função que será executada ao clicar
// $(document).ready(function () {
//     $('#botaoAmarelo').click(function() {
//         alert('tey');
//     });
// });


    

    $(document).ready(function(){
        $('.div1')
            .hide()
            .delay('1500')
            .animate({left: '250px'})
            .slideDown(3000);

    });


    $(document).ready(function(){

        $('#div2')
        .hide()
        .slideDown(2000)
        .fadeIn("slow");
        

    });


