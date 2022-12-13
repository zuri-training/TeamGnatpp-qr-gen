// Qr generator
const wrapper = document.querySelector(".form"),
qrInput = wrapper.querySelector(".form-left input"),
generateBtn = wrapper.querySelector(".form-right button");
const wrapperCode = document.querySelector(".gen-qr"),
qrImg = wrapperCode.querySelector("img");


// download button
const dummy = document.querySelector(".gen-qr img");
let pngLink = document.querySelector(".qr-png")
let jpgLink = document.querySelector(".qr-jpg")
let pdfLink = document.querySelector(".qr-pdf")

// input box validation
const box = document.querySelector(".form-left .box");


generateBtn.addEventListener("click", () => {


    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrValue}`;
    
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Generate QR Code";
    });

    // download button links assigning
    let qr = dummy.getAttribute('src');
    qrPng = qr+'&format=png'
    qrJpg = qr+'&format=jpg'
    qrPdf = qr+'&format=svg'

    pngLink.setAttribute('href', qrPng);
    pngLink.setAttribute('download', 'qr image.png');

    jpgLink.setAttribute('href', qrJpg);
    jpgLink.setAttribute('download', 'qr image.jpg');

    pdfLink.setAttribute('href', qrPdf);
    pdfLink.setAttribute('download', 'qr image.pdf');

});



