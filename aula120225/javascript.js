
$(document).ready(function() {


    $(document).on("click", "#idbtconsulta", function () {

if( $("#MM").val() == ""){
    alert("Preencha")
    return 0;
}

        $.ajax({ 
            type: "GET",
            url: "index.html", // para onde estou mandando o php
            data: "nome=" + $("#MM").val() , //dados que vão se enviar 
            async: false, // não é simultaneo  
            success: function (ret) {
                //Retorna o resultado de acordo com o conteudo localizado.
                if (ret==1){
                    window.location.href = "maracuja.html";
                }
               
            }
        });

    });

});

//ajax é o POST