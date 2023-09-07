function saklar() {
    let toggle1_ruang1 = document.getElementById("deault-toggle1");
    let toggle2_ruang2 = document.getElementById("deault-toggle2");
    let toggle3_ruang3 = document.getElementById("deault-toggle3");

    let lampu1 = document.getElementById('lampu1');
    let lampu2 = document.getElementById('lampu2');
    let lampu3 = document.getElementById('lampu3');
    let lampu4 = document.getElementById('lampu4');
    let lampu5 = document.getElementById('lampu5');
    let lampu6 = document.getElementById('lampu6');
    let lampu7 = document.getElementById('lampu7');
    let lampu8 = document.getElementById('lampu8');
    let lampu9 = document.getElementById('lampu9');
    let lamp10 = document.getElementById('lampu10');

    if (toggle1_ruang1.checked){
        lampu1.src = "asset/image/on.gif"
        lampu2.src = "asset/image/on.gif"
        lampu3.src = "asset/image/on.gif"
    } else{
        lampu1.src = "asset/image/off.gif"
        lampu2.src = "asset/image/off.gif"
        lampu3.src = "asset/image/off.gif"
    }

    if (toggle2_ruang2.checked){
        lampu4.src = "asset/image/on.gif"
        lampu5.src = "asset/image/on.gif"
    } else{
        lampu4.src = "asset/image/off.gif"
        lampu5.src = "asset/image/off.gif"
    }

    if (toggle3_ruang3.checked){
        lampu6 .src = "asset/image/on.gif"
        lampu7 .src = "asset/image/on.gif"
        lampu8 .src = "asset/image/on.gif"
        lampu9 .src = "asset/image/on.gif"
        lampu10 .src = "asset/image/on.gif"
    } else{
        lampu6 .src = "asset/image/off.gif"
        lampu7 .src = "asset/image/off.gif"
        lampu8 .src = "asset/image/off.gif"
        lampu9 .src = "asset/image/off.gif"
        lampu10 .src = "asset/image/off.gif"
    }



}