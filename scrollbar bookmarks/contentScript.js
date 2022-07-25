console.log("aaaa")
let breakPoints = [];

const newFileLoaded = () => {
    const body = document.body;
    const scroll = document.createElement("div");
    scroll.className = "scrolldiv";
    scroll.style.height = "100%";
    scroll.style.width = "15px";
    scroll.style.position = "fixed"
    scroll.style.zIndex = 1;
    scroll.style.top = 0;
    scroll.style.right = 0;
    scroll.style.backgroundColor = "#bbb";
    scroll.style.overflowX = "hidden";
    body.appendChild(scroll)

    scroll.addEventListener("click", (event) => {
        x = event.x + "px";
        y_plc = (event.y - 15 / 2) + "px";
        const breakPoint = document.createElement("button");
        breakPoint.className = "breakPoints";
        breakPoint.style.width = "100%";
        breakPoint.style.height = "15px";
        breakPoint.style.borderRadius = "50%"
        breakPoint.style.borderStyle = "none"
        breakPoint.style.backgroundColor = "#FF4040"
        breakPoint.style.position = "absolute";
        breakPoint.style.top = y_plc;
        scroll.appendChild(breakPoint);
        breakPoints.push(breakPoint)
    })
}

newFileLoaded()

document.addEventListener("keydown", (event) => {
    console.log("hi")
    if (event.key == "ArrowDown" && breakPoints.length > 0) {
        console.log("here");
        let currentPosition_y = document.body.scrollHeight;
        let jumpTo = "";
        for (let i = 0; i < breakPoints.length; i++) {
            if ((jumpTo == "" && breakPoints[i].getBoundingClientRect().top - currentPosition_y > 0) ||
            (jumpTo > breakPoints[i].getBoundingClientRect().top - currentPosition_y > 0)) {
                jumpTo = breakPoints[i].getBoundingClientRect().top;
                break;
            }
        }
        let a = document.body.scrollHeight / document.getElementsByClassName("scrolldiv")[0].scrollHeight * jumpTo;
        window.scroll(0, a);
    }
})
