function inserir(num){
    var numero = document.getElementById('resultado').value
    document.getElementById('resultado').value = numero + num
    
}

function limpar(){
    document.getElementById('resultado').value = ""

}

function apagar(num){
    var numero = document.getElementById('resultado').value
    document.getElementById('resultado').value = numero.substring(0,numero.length -1)

}
function Calcular(num){
    var resultado = document.getElementById('resultado').value

    if(resultado){
        var calcular = resultado.replace(/x/g,'*')
        try{
            document.getElementById('resultado').value = eval(calcular)
        }
        catch(e){
            document.getElementById('resultado').value = "Erro!";
            setTimeout(function(){
                document.getElementById('resultado').value = "";
            },2000);
        }
    }else{
        document.getElementById('resultado').value = ""
    }

}