import { animate } from "motion";
import { generateRandomWave } from '../components/portfolio/WhatCanIDo/waves';

class NonExperienceCard extends HTMLElement {
    delayValue = 0;
    
    constructor() {
        super();
        this.delayValue = Math.floor(Math.random() * 3001);

        this.dataset.canvasheight = window.innerWidth < 500 ? "80" : "100";

        this.querySelector("h4")?.setAttribute('style', `animation-delay:${this.delayValue}ms`);
        this.querySelector("canvas")?.setAttribute('height', this.dataset.canvasheight);

        this.animateWave = this.animateWave.bind(this);
    }

    connectedCallback() {
        console.log("INIT CALLBACK");
        
        this.initCanvas();
        this.startAnimation();
    }

    initCanvas() {
        const canvas = this.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.ctx.strokeStyle = getComputedStyle(this).getPropertyValue('--primary-color');
        this.ctx.lineWidth = 2;
        this.currentPath = generateRandomWave(15, 2, 30, Number(this.dataset.canvasheight));
    }

    startAnimation() {
        let DURATION = Math.floor(Math.random() * (5000 - 3000 + 1) + 3000);
        this.interval = setInterval(this.animateWave, DURATION);
    }

    animateWave() {
        const DURATION_RANGE = [3000, 5000];
        const changeDuration = Math.floor(Math.random() * (DURATION_RANGE[1] - DURATION_RANGE[0] + 1) + DURATION_RANGE[0]);
        console.log("ANIMATING");
        
        const newPath = generateRandomWave(15, 2, 30, Number(this.dataset.canvasheight));
        const mixPaths = (t) => {
            const path = [];
            for (let i = 0; i < this.currentPath.length; i++) {
                path.push(this.currentPath[i] + (newPath[i] - this.currentPath[i]) * t);
            }
            return path;
        };

        animate((progress) => {
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            this.ctx.beginPath();
            const path = mixPaths(progress);
            this.ctx.moveTo(path[0].x, path[0].y);
            for (let i = 1; i < path.length; i++) {
                this.ctx.lineTo(path[i].x, path[i].y);
            }
            this.ctx.stroke();
            // console.log("ANIMATION");
        }, { duration: changeDuration / 1000 });

        this.currentPath = newPath;

        if (changeDuration !== this.DURATION) {
            this.DURATION = changeDuration;
            clearInterval(this.interval);
            this.interval = setInterval(this.animateWave, this.DURATION);
        }
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }
}

customElements.define('non-experience-card', NonExperienceCard);