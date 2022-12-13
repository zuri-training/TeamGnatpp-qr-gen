const wrapper = document.querySelector(".form"),
qrInput = wrapper.querySelector(".form-left input"),
generateBtn = wrapper.querySelector(".form-right button");
const wrapperCode = document.querySelector(".gen-qr"),
qrImg = wrapperCode.querySelector("img");


generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${qrValue}`;
    
    qrImg.addEventListener("load", () => {
        generateBtn.innerText = "Generate QR Code";
    });

});



