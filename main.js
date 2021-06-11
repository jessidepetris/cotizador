
$(document).ready(function() {
    $("input[type=radio]").click(function(event) {
        var valor = $(event.target).val();
        if (valor =="Indemnización por Muerte") {
            $("#resultRadio").show();
            $("#muerteData").show();
            $(".datosMuerte").show();
            $(".datosPersonales").show();
            $(".datosIncapacidad").hide();
            $("#parcialData").hide();
            $("#totalData").hide();
            var radiovalue=document.radioForm.indemnizacion.value;
            document.getElementById("resultRadio").innerHTML = radiovalue;
        } else if (valor == "Indemnización por Incapacidad") {
            $("#resultRadio").show();
            $("#parcialData").show();
            $(".datosPersonales").show();
            $(".datosIncapacidad").show();
            $(".datosMuerte").hide();
            $("#muerteData").hide();
            $("#totalData").hide(); 
            var radiovalue=document.radioForm.indemnizacion.value;
            document.getElementById("resultRadio").innerHTML = radiovalue;
        } 
    });

});




function indemnizacionMuerte(){
    var edadjub1 = 65;
    var edad1 = document.getElementById("edad1").value;
    document.getElementById("edadData").innerHTML = edad1 + " años";
    var sueldo1 = document.getElementById("sueldo1").value;
    document.getElementById("sueldoData").innerHTML = "$ " + sueldo1;

    var total = ((parseInt(edadjub1)) / (parseInt(edad1)) * (parseInt(sueldo1)*53));

    document.getElementById("result").innerHTML = "$ " + total;

    var minMuerte = 3991300
    var pagoUnMuerte = 2660866

    document.getElementById("minLegalMuerte").innerHTML = "$ " + minMuerte;
    document.getElementById("pagounicoMuerte").innerHTML = "$ " + pagoUnMuerte;

    document.getElementById("minLegalMuerteData").innerHTML = "$ " + minMuerte;
    document.getElementById("pagounicoMuerteData").innerHTML = "$ " + pagoUnMuerte;

    var totalFinal = minMuerte + pagoUnMuerte
    var totalFinal2 = total + 2660866

    if(total < 3991300){
        document.getElementById("resultFinal").innerHTML = "$ 3.991.300" + ", ya que la cotización no supera el mínimo legal.";
        document.getElementById("resultSuma").innerHTML = "$ " + totalFinal;
        document.getElementById("resultFinalData").innerHTML = "$ 3.991.300" + ", ya que la cotización no supera el mínimo legal.";
        document.getElementById("resultSumaData").innerHTML = "$ " + totalFinal;
    }
    else if (total >= 3991300){
        document.getElementById("resultFinal").innerHTML = "$ " + total;
        document.getElementById("resultSuma").innerHTML = "$ " + totalFinal2;
        document.getElementById("resultFinalData").innerHTML = "$ " + total;
        document.getElementById("resultSumaData").innerHTML = "$ " + totalFinal2;
    }


}

function indemnizacionIncapacidad(){
    var edadjub2 = 65;
    var porcInc = document.getElementById("porcentaje").value;
    var edad2 = document.getElementById("edad2").value;
    document.getElementById("edadIncData").innerHTML = edad2 + " años";
    var sueldo2 = document.getElementById("sueldo2").value;
    document.getElementById("sueldoIncData").innerHTML = "$ " + sueldo2;

    var incParc = "Incapacidad Laboral Permanente Parcial"
    var incPer = "Incapacidad Laboral Permanente"
    var incTot = "Incapacidad Laboral Permanente Total"

    var porc = porcInc / 100;
    var ibm = (parseInt(sueldo2))*53;
    var total2 =  ((parseInt(edadjub2)) / (parseInt(edad2)) * ((ibm)* porc));
    var porcMin = 3991300 * porc;
    var minTotal = 3991300;
    var pagoUnico51 = 1773911;
    var pagoUnico66 = 2217389;

    var pagototal = porcMin + 1773911
    var totalSuma51 = total2 + 1773911

    var pagototal66 = minTotal + 2217389;
    var totalSuma66 = total2 + 2217389;

    if(porcInc <= 50){
        document.getElementById("tipoInc").innerHTML = incParc;
        document.getElementById("montoInc").innerHTML = porcInc + "%";
        document.getElementById("minLegal").innerHTML = "$ " + porcMin;
        document.getElementById("minLegalIncData").innerHTML = "$ " + porcMin;
        document.getElementById("pagounico").innerHTML = "No Posee";
        document.getElementById("pagounicoIncData").innerHTML = "No Posee";
        document.getElementById("pagototal").innerHTML = "$ " + Math.max(total2, porcMin);
        document.getElementById("pagototalIncData").innerHTML = "$ " + Math.max(total2, porcMin);
        if(total2 < porcMin){
            document.getElementById("resultFinal3").innerHTML = "$ " + porcMin + ", ya que la cotización no supera el mínimo legal.";
            document.getElementById("resultFinal3Data").innerHTML = "$ " + porcMin + ", ya que la cotización no supera el mínimo legal.";
        }
        else if (total2 >= porcMin){
            document.getElementById("resultFinal3").innerHTML ="$ " + total2;
            document.getElementById("resultFinal3Data").innerHTML ="$ " + total2;
        
        }

    }
    else if(porcInc < 66){
        document.getElementById("tipoInc").innerHTML = incPer;
        document.getElementById("montoInc").innerHTML = porcInc + "%";
        document.getElementById("minLegal").innerHTML = "$ " + porcMin;
        document.getElementById("minLegalIncData").innerHTML = "$ " + porcMin;
        document.getElementById("pagounico").innerHTML = "$ " + pagoUnico51;
        document.getElementById("pagounicoIncData").innerHTML = "$ " + pagoUnico51;
        
        document.getElementById("pagototal").innerHTML = "$ " + Math.max(pagototal, totalSuma51);
        document.getElementById("pagototalIncData").innerHTML = "$ " + Math.max(pagototal, totalSuma51);
        if(total2 < porcMin){
            document.getElementById("resultFinal3").innerHTML = "$ " + porcMin + ", ya que la cotización no supera el mínimo legal.";
            document.getElementById("resultFinal3Data").innerHTML = "$ " + porcMin + ", ya que la cotización no supera el mínimo legal.";
    }
        else if (total2 >= porcMin){
            document.getElementById("resultFinal3").innerHTML ="$ " + total2;
            document.getElementById("resultFinal3Data").innerHTML = "$ " + total2;
        }


    }
    else if(porcInc >= 66){
        document.getElementById("tipoInc").innerHTML = incTot;
        document.getElementById("montoInc").innerHTML = porcInc + "%";
        document.getElementById("minLegal").innerHTML = "$ " + minTotal;
        document.getElementById("minLegalIncData").innerHTML = "$ " + minTotal;
        document.getElementById("pagounico").innerHTML = "$ " + pagoUnico66;
        document.getElementById("pagounicoIncData").innerHTML = "$ " + pagoUnico66;
        document.getElementById("pagototal").innerHTML = "$ " + Math.max(pagototal66, totalSuma66);
        document.getElementById("pagototalIncData").innerHTML = "$ " + Math.max(pagototal66, totalSuma66);
        
        if(total2 < minTotal){
            document.getElementById("resultFinal3").innerHTML = "$ " + minTotal + ", ya que la cotización no supera el mínimo legal.";
            document.getElementById("resultFinal3Data").innerHTML = "$ " + minTotal + ", ya que la cotización no supera el mínimo legal.";
        }
        else if (total2 >= minTotal){
            document.getElementById("resultFinal3").innerHTML ="$ " + total2;
            document.getElementById("resultFinal3Data").innerHTML ="$ " + total2;
        }
    }
    

    document.getElementById("result2").innerHTML = "$ " + total2; 


}

function data(){
    var nombreDat = document.getElementById("Nombre").value;
    document.getElementById("NombreData").innerHTML = nombreDat;
    var apellidoDat = document.getElementById("Apellido").value;
    document.getElementById("ApellidoData").innerHTML = apellidoDat;
    var mailDat = document.getElementById("Mail").value;
    document.getElementById("MailData").innerHTML = mailDat;
    var telefonoDat = document.getElementById("Telefono").value;
    document.getElementById("TelefonoData").innerHTML = telefonoDat;
}


document.addEventListener("DOMContentLoaded", () => {

    const $boton = document.querySelector("#btnCrearPdf");
    $boton.addEventListener("click", () => {
    const $elementoParaConvertir = document.body;
        html2pdf()
        .set({
            margin: 0.1,
            filename: 'cotizacion.pdf',
            image: {
                type: 'jpeg',
                quality: 0.98
            },
            html2canvas: {
                scale: 3,
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: 'landscape'
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err));

    });
});


  




