function seleccion() {
    const con=10000;
    if (document.getElementById('proy1').checked)
        {
        alert("Selecciono Corazones");
        var total=con+5000;
        document.getElementById('vp').value=total;
        }   
    if (document.getElementById('proy2').checked)
        {
        alert("Selecciono Brownies");
        var total=con+12000;
        document.getElementById('vp').value=total;
        }   
    if (document.getElementById('proy3').checked)
        {
        alert("Selecciono Letras");
        var total=con+3000;
        document.getElementById('vp').value=total;
        }   
    if (document.getElementById('proy4').checked)
        {
        alert("Selecciono Masmelos con chocolate");
        var total=con+7000;
        document.getElementById('vp').value=total;
        }
}