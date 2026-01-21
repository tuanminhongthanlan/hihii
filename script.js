function yes() {
    alert("da iu em nhat");
}

const noBtn = document.getElementById("no");
noBtn.onmouseover = function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
};
