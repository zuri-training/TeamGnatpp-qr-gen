const wrapper = document.querySelector(".form"),
form = document.querySelector(".form-left"),
fileInp = form.querySelector("input"),
infoText = form.querySelector("p"),
copyBtn = document.querySelector(".copy");

function fetchRequest(file, formData) {
    infoText.innerText = "Scanning QR Code...";
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        if(!result) return;
        document.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
    }).catch(() => {
        infoText.innerText = "Scan succesfully";
    });
}

fileInp.addEventListener("change", async e => {
    let file = e.target.files[0];
    if(!file) return;
    let formData = new FormData();
    formData.append('file', file);
    fetchRequest(file, formData);
});

copyBtn.addEventListener("click", () => {
    let text = document.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});