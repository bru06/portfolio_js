function Kmh(){
    var Kmh= parseInt(document.getElementById('D1').value);
    var comb= parseFloat(document.getElementById('C1').value);
    document.getElementById('resposta').innerHTML= ("Seu gasto é de:  R$ " + (Kmh/8 * comb));

}

