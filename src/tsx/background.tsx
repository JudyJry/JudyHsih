import React from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { useLocation } from "react-router-dom";

export default function Background(): JSX.Element {
    /* const [size, setSize] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setSize({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }
        window.addEventListener('resize', handleResize)
    })
    */

    const location = useLocation();
    let cubes: Cube[] = [];
    let cb: HTMLElement;
    let pageHeight = getPageHeight();
    let isPageChange: Boolean = false;
    React.useEffect(() => {
        isPageChange = true;
    }, [location]);

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        pageHeight = getPageHeight();
        cb = document.getElementById("cube-background") as HTMLElement;
        cb.style.height = getPageHeight() + "px";
        p5.createCanvas(window.innerWidth, pageHeight).parent(canvasParentRef);
        p5.background(0);
        for (let i = 0; i < 25; i++) {
            cubes.push(new Cube());
        }
    };

    const draw = (p5: p5Types) => {
        if (isPageChange) { resize(p5); isPageChange = false; }
        p5.background(98, 78, 145);

        let c1 = p5.color(98, 78, 145);
        let c2 = p5.color(217, 73, 93);

        for (let y = 0; y < p5.height; y++) {
            let n = p5.map(y, 0, p5.height, 0, 1);
            let newc = p5.lerpColor(c1, c2, n);
            p5.stroke(newc);
            p5.line(0, y, p5.width, y);
        }

        for (let i in cubes) {
            cubes[i].draw(p5);
            cubes[i].move();
        }
    };

    const resize = (p5: p5Types) => {
        pageHeight = getPageHeight();
        cb = document.getElementById("cube-background") as HTMLElement;
        cb.style.height = getPageHeight() + "px";
        p5.resizeCanvas(window.innerWidth, pageHeight);
        cubes = [];
        for (let i = 0; i < 25; i++) {
            cubes.push(new Cube());
        }
    }

    return (
        <div id="cube-background" className="cube-background">
            <Sketch setup={setup} draw={draw} windowResized={resize}></Sketch>
        </div >
    )
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function getPageHeight(): number {
    let body = document.body,
        html = document.documentElement;
    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

class Cube {
    x!: number;
    y!: number;
    size!: number;
    pageHeight!: number;
    constructor() {
        this.size = random(1, 30);
        this.x = random(-this.size, window.innerWidth);
        this.y = random(-this.size, window.innerHeight);
        this.pageHeight = getPageHeight();
    }
    public draw(p5: p5Types) {
        p5.push();
        p5.translate(this.x, this.y);
        p5.rotate(p5.PI / 4);
        p5.noStroke();
        p5.fill(255, 255, 255, 50);
        p5.rect(0, 0, this.size, this.size);
        p5.pop();
    }
    public move() {
        this.y += this.size / 2 * 0.1;
        if (this.y > this.pageHeight) {
            this.y = -this.size;
        }
    }
}