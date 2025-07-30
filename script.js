function inserir(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
    
}

function limpar(){
    document.getElementById('resultado').innerHTML = ""

}

function apagar(num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero.substring(0,numero.length -1)

}
function Calcular(num){
    var resultado = document.getElementById('resultado').innerHTML

    if(resultado){
        var calcular = resultado.replace(/x/g,'*')
        try{
            document.getElementById('resultado').innerHTML = eval(calcular)
        }
        catch(e){
            document.getElementById('resultado').innerHTML = "Erro!";
            setTimeout(function(){
                document.getElementById('resultado').innerHTML= "";
            },2000);
        }
    }else{
        document.getElementById('resultado').innerHTML = ""
    }

}