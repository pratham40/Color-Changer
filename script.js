const btn = document.getElementById("button");
const randomColor=()=>{
    let val1="0123456789ABCDEF"
    let val2="#"
    for (let i = 0; i < 6; i++) {
        val2=val2+val1[Math.floor(Math.random()*16)];
    }
    return val2;
};

console.log(randomColor());

function changeRandomColor() {
    document.body.style.backgroundColor=randomColor();
}


btn.addEventListener("click",changeRandomColor);

