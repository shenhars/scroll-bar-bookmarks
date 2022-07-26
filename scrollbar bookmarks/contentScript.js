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
        let currentPosition_y = window.scrollY;
        let jumpTo = document.body.scrollHeight;
        for (let i = 0; i < breakPoints.length; i++) {
            let breakPointRelativePosition = document.body.scrollHeight / 
            document.getElementsByClassName("scrolldiv")[0].scrollHeight * breakPoints[i].getBoundingClientRect().top;
            if (breakPointRelativePosition - currentPosition_y > 0 &&
            jumpTo > breakPointRelativePosition - currentPosition_y) {
                jumpTo = breakPointRelativePosition;
            }
        }
        window.scroll(0, jumpTo);
    }

    if (event.key == "ArrowUp" && breakPoints.length > 0) {
        console.log("where?");
        let currentPosition_y = window.scrollY;
        let jumpTo = document.body.scrollHeight;
        for (let i = 0; i < breakPoints.length; i++) {
            let breakPointRelativePosition = document.body.scrollHeight / 
            document.getElementsByClassName("scrolldiv")[0].scrollHeight * breakPoints[i].getBoundingClientRect().top;
            if (currentPosition_y - breakPointRelativePosition > 0 &&
            jumpTo > currentPosition_y - breakPointRelativePosition) {
                jumpTo = breakPointRelativePosition;
            }
        }
        if (jumpTo == document.body.scrollHeight) {
            jumpTo = 0;
        }
        window.scroll(0, jumpTo);
    }
})
