import './main.scss'
import Typed from "typed.js";
import *as boootstrap from "bootstrap";
import ScrollReveal from "scrollreveal";


var typed = new Typed('.element', {
    strings: ['Food...', 'Drink...'],
    smartBackspace:true,
    typeSpeed:80,
    backDelay:2000,
    loop:true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    fadeOut:true,

});
let slideleft = {
    distance: '150%',
    origin: 'left',
    interval:300,
    duration:800,
    delay:300,
    loop:true
};
let slideright = {
    distance: '150%',
    origin: 'right',
    duration:800,
    delay:300,
    loop :true
};
let todown={
    distance:'180%',
    origin:'top',
    duration:800,
    interval: 300,
    delay:300
}
ScrollReveal().reveal('.slideInLeft ', slideleft);
ScrollReveal().reveal('.slideInRight ', slideright);
ScrollReveal().reveal('.ToDown',todown);