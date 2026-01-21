function yes() {
    alert("da iu em nhat");
}

const noBtn = document.getElementById("no");
noBtn.onmouseover = function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * window.innerWidth + "px";
    noBtn.style.top = Math.random() * window.innerHeight + "px";
};
.heart {
    position: fixed;
    bottom: 0;
    font-size: 20px;
    animation: fly 4s linear forwards;
    color: red;
}

@keyframes fly {
    0% {
        transform: translateY(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateY(-100vh) scale(2);
        opacity: 0;
    }
}
