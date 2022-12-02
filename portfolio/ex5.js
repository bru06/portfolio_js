function Quadrado(){
    var Kmh= parseFloat(document.getElementById('L1').value);
    var comb= parseFloat(document.getElementById('C1').value);
    document.getElementById('resposta5').innerHTML= ("Seu gasto é de:  R$ " + (Kmh * comb*36));

}