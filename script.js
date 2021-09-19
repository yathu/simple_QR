// var qrcode = new QRCode("qrcode");
var qrcodeElement = document.getElementById("qrcode");

var qrcode = new QRCode(qrcodeElement, {
    // text: elText.value,
    width: 128 * 2,
    height: 128 * 2,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

$("#download_btn").hide();

$("#generate_button").on("click", function () {
    makeCode();
});

function makeCode() {
    var elText = document.getElementById("text");

    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }

    qrcode.clear();
    qrcode.makeCode(elText.value);


    $("#download_btn").show();
}

$("#text").
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });

$('#download_btn').on("click", function () {
    saveQrCode();
});

function saveQrCode() {
    var canvas = $('#qrcode canvas');
    window.open(canvas[0].toDataURL('image/png'));
    var gh = canvas[0].toDataURL('png');

    var a = document.createElement('a');
    a.href = gh;
    a.download = 'qr-generator-online.com.png';

    a.click()
}