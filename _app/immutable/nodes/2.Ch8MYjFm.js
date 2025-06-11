import{c as an,e as hn,f as E,a as b,d as yn}from"../chunks/ZCPXJNnU.js";import{o as bn}from"../chunks/KHs6C_jN.js";import{$ as F,h as D,a as en,o as zn,aC as En,j as rn,B as vn,an as An,am as Cn,s as Yn,g as O,a0 as K,a3 as s,a4 as o,a2 as J,d as m,a5 as Xn,D as j,ae as sn,a1 as h,at as on,F as P,T as Y}from"../chunks/cpraTQAE.js";import{d as _n,s as x}from"../chunks/D7e-j1mN.js";import{p as H,i as M}from"../chunks/BMn6lxxc.js";import{e as Sn,i as Mn}from"../chunks/ChPymAhH.js";import{a as Fn}from"../chunks/B_40f77_.js";import{i as N}from"../chunks/Bgo-GJmP.js";function Tn(l,r,a=!1,i=!1,d=!1){var c=l,g="";F(()=>{var w=zn;if(g===(g=r()??"")){D&&en();return}if(w.nodes_start!==null&&(En(w.nodes_start,w.nodes_end),w.nodes_start=w.nodes_end=null),g!==""){if(D){rn.data;for(var f=en(),k=f;f!==null&&(f.nodeType!==8||f.data!=="");)k=f,f=vn(f);if(f===null)throw An(),Cn;an(rn,k),c=Yn(f);return}var n=g+"";a?n=`<svg>${n}</svg>`:i&&(n=`<math>${n}</math>`);var t=hn(n);if((a||i)&&(t=O(t)),an(O(t),t.lastChild),a||i)for(;O(t);)c.before(O(t));else c.before(t)}})}function On(l,r,a,i){var d=l.__style;if(D||d!==r){var c=Fn(r);(!D||c!==l.getAttribute("style"))&&(c==null?l.removeAttribute("style"):l.style.cssText=c),l.__style=r}return i}const Nn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-day-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,Dn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-day-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    
</svg>`,jn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-day-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,Gn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-night-1">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,Un=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-night-2">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,In=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy-night-3">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,Rn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}




/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}


/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** EASING
*/
.am-weather-easing-ease-in-out {
  -webkit-animation-timing-function: ease-in-out;
     -moz-animation-timing-function: ease-in-out;
      -ms-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="cloudy">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-8), scale(0.6)"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>`,Bn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}




/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}


/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** EASING
*/
.am-weather-easing-ease-in-out {
  -webkit-animation-timing-function: ease-in-out;
     -moz-animation-timing-function: ease-in-out;
      -ms-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="day">
        <g transform="translate(32,32)">
            <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(45)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(90)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(135)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(180)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(225)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(270)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(315)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
        </g>
    </g>
</svg>`,Ln=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}




/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}


/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** EASING
*/
.am-weather-easing-ease-in-out {
  -webkit-animation-timing-function: ease-in-out;
     -moz-animation-timing-function: ease-in-out;
      -ms-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="night">
        <g transform="translate(20,20)">
            <g class="am-weather-moon-star-1">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
            </g>
            <g class="am-weather-moon-star-2">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
            </g>
            <g class="am-weather-moon">
                <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </g>
    </g>
</svg>`,Vn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,Wn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,$n=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fifll="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,Pn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-4">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,Hn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-5">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,Kn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-6">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,Jn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="rainy-7">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>`,qn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(20,9)">
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,Qn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g class="am-weather-snow-1">
            <g transform="translate(32,38)">
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
            </g>
        </g>
    </g>
</svg>`,Zn=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,nt=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translate(0.0px,0);
       -moz-transform: translate(0.0px,0);
        -ms-transform: translate(0.0px,0);
            transform: translate(0.0px,0);
  }

  33.33% {
    -webkit-transform: translate(-1.2px,2px);
       -moz-transform: translate(-1.2px,2px);
        -ms-transform: translate(-1.2px,2px);
            transform: translate(-1.2px,2px);
  }

  66.66% {
    -webkit-transform: translate(1.4px,4px);
       -moz-transform: translate(1.4px,4px);
        -ms-transform: translate(1.4px,4px);
            transform: translate(1.4px,4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translate(-1.6px,6px);
       -moz-transform: translate(-1.6px,6px);
        -ms-transform: translate(-1.6px,6px);
            transform: translate(-1.6px,6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-4">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,tt=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-5">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,at=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

        ]]></style>
    </defs>
    <g filter="url(#blur)" id="snowy-6">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(3,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-3">
                <g transform="translate(20,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,it=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** STROKE
*/
@keyframes am-weather-stroke {
  0% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  2% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  4% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  6% {
    -webkit-transform: translate(0.5px,0.4px);
       -moz-transform: translate(0.5px,0.4px);
        -ms-transform: translate(0.5px,0.4px);
            transform: translate(0.5px,0.4px);
  }

  8% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  10% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  12% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  14% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  16% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  18% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  20% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  22% {
    -webkit-transform: translate(1px,0.0px);
       -moz-transform: translate(1px,0.0px);
        -ms-transform: translate(1px,0.0px);
            transform: translate(1px,0.0px);
  }

  24% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  26% {
    -webkit-transform: translate(-1px,0.0px);
       -moz-transform: translate(-1px,0.0px);
        -ms-transform: translate(-1px,0.0px);
            transform: translate(-1px,0.0px);

  }

  28% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  40% {
    fill: orange;
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  65% {
    fill: white;
    -webkit-transform: translate(-1px,5.0px);
       -moz-transform: translate(-1px,5.0px);
        -ms-transform: translate(-1px,5.0px);
            transform: translate(-1px,5.0px);
  }
  61% {
    fill: orange;
  }

  100% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }
}

.am-weather-stroke {
  -webkit-animation-name: am-weather-stroke;
     -moz-animation-name: am-weather-stroke;
          animation-name: am-weather-stroke;
  -webkit-animation-duration: 1.11s;
     -moz-animation-duration: 1.11s;
          animation-duration: 1.11s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
        ]]></style>
    </defs>
    <g filter="url(#blur)" id="thunder">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
            </g>
            <g>
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
            </g>
            <g transform="translate(-9,28), scale(1.2)">
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
            </g>
        </g>
    </g>
</svg>`,et=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    style="position: absolute; width: 0; height: 0;"
    width="0"
    height="0">
    <defs>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** STROKE
*/
@keyframes am-weather-stroke {
  0% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  2% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  4% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  6% {
    -webkit-transform: translate(0.5px,0.4px);
       -moz-transform: translate(0.5px,0.4px);
        -ms-transform: translate(0.5px,0.4px);
            transform: translate(0.5px,0.4px);
  }

  8% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  10% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  12% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  14% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  16% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  18% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  20% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  22% {
    -webkit-transform: translate(1px,0.0px);
       -moz-transform: translate(1px,0.0px);
        -ms-transform: translate(1px,0.0px);
            transform: translate(1px,0.0px);
  }

  24% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  26% {
    -webkit-transform: translate(-1px,0.0px);
       -moz-transform: translate(-1px,0.0px);
        -ms-transform: translate(-1px,0.0px);
            transform: translate(-1px,0.0px);

  }

  28% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  40% {
    fill: orange;
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  65% {
    fill: white;
    -webkit-transform: translate(-1px,5.0px);
       -moz-transform: translate(-1px,5.0px);
        -ms-transform: translate(-1px,5.0px);
            transform: translate(-1px,5.0px);
  }
  61% {
    fill: orange;
  }

  100% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }
}

.am-weather-stroke {
  -webkit-animation-name: am-weather-stroke;
     -moz-animation-name: am-weather-stroke;
          animation-name: am-weather-stroke;
  -webkit-animation-duration: 1.11s;
     -moz-animation-duration: 1.11s;
          animation-duration: 1.11s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}



/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}




/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}


/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** EASING
*/
.am-weather-easing-ease-in-out {
  -webkit-animation-timing-function: ease-in-out;
     -moz-animation-timing-function: ease-in-out;
      -ms-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
}

        ]]></style>
    </defs>
    <symbol id="thunder" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
            </g>
            <g>
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
            </g>
            <g transform="translate(-9,28), scale(1.2)">
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
            </g>
        </g>
    </symbol>
    <symbol id="day" viewBox="0 0 64 64">
        <g transform="translate(32,32)">
            <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(45)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(90)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(135)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(180)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(225)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(270)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(315)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
        </g>
    </symbol>
    <symbol id="night" viewBox="0 0 64 64">
        <g transform="translate(20,20)">
            <g class="am-weather-moon-star-1">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
            </g>
            <g class="am-weather-moon-star-2">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
            </g>
            <g class="am-weather-moon">
                <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-day-1" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-night-1" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-day-2" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-night-2" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-day-3" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy-night-3" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="cloudy" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-8), scale(0.6)"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </symbol>
    <symbol id="rainy-1" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-2" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-3" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fifll="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-4" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-5" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-6" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="rainy-7" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </symbol>
    <symbol id="snowy-1" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(20,9)">
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="snowy-2" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g class="am-weather-snow-1">
            <g transform="translate(32,38)">
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
            </g>
        </g>
    </symbol>
    <symbol id="snowy-3" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="snowy-4" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="snowy-5" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g class="snowy-6-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </symbol>
    <symbol id="snowy-6" viewBox="0 0 64 64">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(3,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-3">
                <g transform="translate(20,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </symbol>
</svg>`,rt=`<?xml version="1.0" encoding="utf-8"?>
<!-- (c) ammap.com | SVG weather icons -->
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="64"
    height="64"
    viewbox="0 0 64 64">
    <defs>
        <style type="text/css"><![CDATA[
/*
** CLOUDS
*/
@keyframes am-weather-cloud-1 {
  0% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }

  50% {
    -webkit-transform: translate(10px,0px);
       -moz-transform: translate(10px,0px);
        -ms-transform: translate(10px,0px);
            transform: translate(10px,0px);
  }

  100% {
    -webkit-transform: translate(-5px,0px);
       -moz-transform: translate(-5px,0px);
        -ms-transform: translate(-5px,0px);
            transform: translate(-5px,0px);
  }
}

.am-weather-cloud-1 {
  -webkit-animation-name: am-weather-cloud-1;
     -moz-animation-name: am-weather-cloud-1;
          animation-name: am-weather-cloud-1;
  -webkit-animation-duration: 7s;
     -moz-animation-duration: 7s;
          animation-duration: 7s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-cloud-2 {
  0% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }

  50% {
    -webkit-transform: translate(2px,0px);
       -moz-transform: translate(2px,0px);
        -ms-transform: translate(2px,0px);
            transform: translate(2px,0px);
  }

  100% {
    -webkit-transform: translate(0px,0px);
       -moz-transform: translate(0px,0px);
        -ms-transform: translate(0px,0px);
            transform: translate(0px,0px);
  }
}

.am-weather-cloud-2 {
  -webkit-animation-name: am-weather-cloud-2;
     -moz-animation-name: am-weather-cloud-2;
          animation-name: am-weather-cloud-2;
  -webkit-animation-duration: 3s;
     -moz-animation-duration: 3s;
          animation-duration: 3s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** STROKE
*/
@keyframes am-weather-stroke {
  0% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  2% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  4% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  6% {
    -webkit-transform: translate(0.5px,0.4px);
       -moz-transform: translate(0.5px,0.4px);
        -ms-transform: translate(0.5px,0.4px);
            transform: translate(0.5px,0.4px);
  }

  8% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  10% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  12% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  14% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  16% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  18% {
    -webkit-transform: translate(0.3px,0.0px);
       -moz-transform: translate(0.3px,0.0px);
        -ms-transform: translate(0.3px,0.0px);
            transform: translate(0.3px,0.0px);
  }

  20% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  22% {
    -webkit-transform: translate(1px,0.0px);
       -moz-transform: translate(1px,0.0px);
        -ms-transform: translate(1px,0.0px);
            transform: translate(1px,0.0px);
  }

  24% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  26% {
    -webkit-transform: translate(-1px,0.0px);
       -moz-transform: translate(-1px,0.0px);
        -ms-transform: translate(-1px,0.0px);
            transform: translate(-1px,0.0px);

  }

  28% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  40% {
    fill: orange;
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }

  65% {
    fill: white;
    -webkit-transform: translate(-1px,5.0px);
       -moz-transform: translate(-1px,5.0px);
        -ms-transform: translate(-1px,5.0px);
            transform: translate(-1px,5.0px);
  }
  61% {
    fill: orange;
  }

  100% {
    -webkit-transform: translate(0.0px,0.0px);
       -moz-transform: translate(0.0px,0.0px);
        -ms-transform: translate(0.0px,0.0px);
            transform: translate(0.0px,0.0px);
  }
}

.am-weather-stroke {
  -webkit-animation-name: am-weather-stroke;
     -moz-animation-name: am-weather-stroke;
          animation-name: am-weather-stroke;
  -webkit-animation-duration: 1.11s;
     -moz-animation-duration: 1.11s;
          animation-duration: 1.11s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}



/*
** SUN
*/
@keyframes am-weather-sun {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
       -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

.am-weather-sun {
  -webkit-animation-name: am-weather-sun;
     -moz-animation-name: am-weather-sun;
      -ms-animation-name: am-weather-sun;
          animation-name: am-weather-sun;
  -webkit-animation-duration: 9s;
     -moz-animation-duration: 9s;
      -ms-animation-duration: 9s;
          animation-duration: 9s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

@keyframes am-weather-sun-shiny {
  0% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }

  50% {
    stroke-dasharray: 0.1px 10px;
    stroke-dashoffset: -1px;
  }

  100% {
    stroke-dasharray: 3px 10px;
    stroke-dashoffset: 0px;
  }
}

.am-weather-sun-shiny line {
  -webkit-animation-name: am-weather-sun-shiny;
     -moz-animation-name: am-weather-sun-shiny;
      -ms-animation-name: am-weather-sun-shiny;
          animation-name: am-weather-sun-shiny;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}




/*
** MOON
*/
@keyframes am-weather-moon {
  0% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }

  50% {
    -webkit-transform: rotate(15deg);
       -moz-transform: rotate(15deg);
        -ms-transform: rotate(15deg);
            transform: rotate(15deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
       -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}

.am-weather-moon {
  -webkit-animation-name: am-weather-moon;
     -moz-animation-name: am-weather-moon;
      -ms-animation-name: am-weather-moon;
          animation-name: am-weather-moon;
  -webkit-animation-duration: 6s;
     -moz-animation-duration: 6s;
      -ms-animation-duration: 6s;
          animation-duration: 6s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
     -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
      -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
          transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
}

@keyframes am-weather-moon-star-1 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-1 {
  -webkit-animation-name: am-weather-moon-star-1;
     -moz-animation-name: am-weather-moon-star-1;
      -ms-animation-name: am-weather-moon-star-1;
          animation-name: am-weather-moon-star-1;
  -webkit-animation-delay: 3s;
     -moz-animation-delay: 3s;
      -ms-animation-delay: 3s;
          animation-delay: 3s;
  -webkit-animation-duration: 5s;
     -moz-animation-duration: 5s;
      -ms-animation-duration: 5s;
          animation-duration: 5s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

@keyframes am-weather-moon-star-2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.am-weather-moon-star-2 {
  -webkit-animation-name: am-weather-moon-star-2;
     -moz-animation-name: am-weather-moon-star-2;
      -ms-animation-name: am-weather-moon-star-2;
          animation-name: am-weather-moon-star-2;
  -webkit-animation-delay: 5s;
     -moz-animation-delay: 5s;
      -ms-animation-delay: 5s;
          animation-delay: 5s;
  -webkit-animation-duration: 4s;
     -moz-animation-duration: 4s;
      -ms-animation-duration: 4s;
          animation-duration: 4s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: 1;
     -moz-animation-iteration-count: 1;
      -ms-animation-iteration-count: 1;
          animation-iteration-count: 1;
}

/*
** RAIN
*/
@keyframes am-weather-rain {
  0% {
    stroke-dashoffset: 0;
  }

  100% {
    stroke-dashoffset: -100;
  }
}

.am-weather-rain-1 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-rain-2 {
  -webkit-animation-name: am-weather-rain;
     -moz-animation-name: am-weather-rain;
      -ms-animation-name: am-weather-rain;
          animation-name: am-weather-rain;
  -webkit-animation-delay: 0.25s;
     -moz-animation-delay: 0.25s;
      -ms-animation-delay: 0.25s;
          animation-delay: 0.25s;
  -webkit-animation-duration: 8s;
     -moz-animation-duration: 8s;
      -ms-animation-duration: 8s;
          animation-duration: 8s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}


/*
** SNOW
*/
@keyframes am-weather-snow {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(-1.2px) translateY(2px);
       -moz-transform: translateX(-1.2px) translateY(2px);
        -ms-transform: translateX(-1.2px) translateY(2px);
            transform: translateX(-1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(1.4px) translateY(4px);
       -moz-transform: translateX(1.4px) translateY(4px);
        -ms-transform: translateX(1.4px) translateY(4px);
            transform: translateX(1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(-1.6px) translateY(6px);
       -moz-transform: translateX(-1.6px) translateY(6px);
        -ms-transform: translateX(-1.6px) translateY(6px);
            transform: translateX(-1.6px) translateY(6px);
    opacity: 0;
  }
}

@keyframes am-weather-snow-reverse {
  0% {
    -webkit-transform: translateX(0) translateY(0);
       -moz-transform: translateX(0) translateY(0);
        -ms-transform: translateX(0) translateY(0);
            transform: translateX(0) translateY(0);
  }

  33.33% {
    -webkit-transform: translateX(1.2px) translateY(2px);
       -moz-transform: translateX(1.2px) translateY(2px);
        -ms-transform: translateX(1.2px) translateY(2px);
            transform: translateX(1.2px) translateY(2px);
  }

  66.66% {
    -webkit-transform: translateX(-1.4px) translateY(4px);
       -moz-transform: translateX(-1.4px) translateY(4px);
        -ms-transform: translateX(-1.4px) translateY(4px);
            transform: translateX(-1.4px) translateY(4px);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(1.6px) translateY(6px);
       -moz-transform: translateX(1.6px) translateY(6px);
        -ms-transform: translateX(1.6px) translateY(6px);
            transform: translateX(1.6px) translateY(6px);
    opacity: 0;
  }
}

.am-weather-snow-1 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-2 {
  -webkit-animation-name: am-weather-snow;
     -moz-animation-name: am-weather-snow;
      -ms-animation-name: am-weather-snow;
          animation-name: am-weather-snow;
  -webkit-animation-delay: 1.2s;
     -moz-animation-delay: 1.2s;
      -ms-animation-delay: 1.2s;
          animation-delay: 1.2s;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

.am-weather-snow-3 {
  -webkit-animation-name: am-weather-snow-reverse;
     -moz-animation-name: am-weather-snow-reverse;
      -ms-animation-name: am-weather-snow-reverse;
          animation-name: am-weather-snow-reverse;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
      -ms-animation-duration: 2s;
          animation-duration: 2s;
  -webkit-animation-timing-function: linear;
     -moz-animation-timing-function: linear;
      -ms-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
      -ms-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}

/*
** EASING
*/
.am-weather-easing-ease-in-out {
  -webkit-animation-timing-function: ease-in-out;
     -moz-animation-timing-function: ease-in-out;
      -ms-animation-timing-function: ease-in-out;
          animation-timing-function: ease-in-out;
}

        ]]></style>
    </defs>
    <g id="thunder">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
            </g>
            <g>
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
            </g>
            <g transform="translate(-9,28), scale(1.2)">
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
            </g>
        </g>
    </g>
    <g id="day">
        <g transform="translate(32,32)">
            <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
                <g>
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(45)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(90)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(135)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(180)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(225)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(270)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
                <g transform="rotate(315)">
                    <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3" />
                </g>
            </g>
            <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
        </g>
    </g>
    <g id="night">
        <g transform="translate(20,20)">
            <g class="am-weather-moon-star-1">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
            </g>
            <g class="am-weather-moon-star-2">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
            </g>
            <g class="am-weather-moon">
                <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </g>
    </g>
    <g id="cloudy-day-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy-night-1">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#C6DEFF" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy-day-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy-night-2">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy-day-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy-night-3">
        <g transform="translate(20,10)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="cloudy">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-8), scale(0.6)"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
    <g id="rainy-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fifll="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-4">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(37,45), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-5">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(34,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-6">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="rainy-7">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(31,46), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
    <g id="snowy-1">
        <g transform="translate(20,10)">
            <g transform="translate(0,16), scale(1.2)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.5" transform="translate(-15,-5), scale(0.85)"/>
            </g>
        </g>
        <g transform="translate(20,9)">
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
    <g id="snowy-2">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g class="am-weather-snow-1">
            <g transform="translate(32,38)">
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
            </g>
        </g>
    </g>
    <g id="snowy-3">
        <g transform="translate(20,10)">
            <g transform="translate(0,16)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
    <g id="snowy-4">
        <g transform="translate(20,10)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
    <g id="snowy-5">
        <g transform="translate(20,10)">
            <g class="snowy-6-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(7,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(16,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
    <g id="snowy-6">
        <g transform="translate(20,10)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(3,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(11,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-3">
                <g transform="translate(20,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>`,ot=`<svg width="21px" height="17px" viewBox="187 110 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
    <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->\r
    <desc>Created with Sketch.</desc>\r
    <defs></defs>\r
    <g id="Wind" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(197.611216, 118.415064) rotate(-30.000000) translate(-197.611216, -118.415064) translate(189.111216, 115.915064)" stroke-linecap="round">\r
        <path d="M0.5,2.5 L13,2.5" id="Line" stroke="#000000"></path>\r
        <polygon id="Triangle-1" stroke="#000000" stroke-linejoin="round" fill="#000000" points="13 5 13 1.13686838e-13 17 2.5"></polygon>\r
    </g>\r
</svg>`,st=`<?xml version="1.0" encoding="utf-8"?>\r
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\r
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\r
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="0" y1="47" x2="64" y2="47"/>\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="10" y1="37" x2="0" y2="37"/>\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="64" y1="37" x2="54" y2="37"/>\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="32" y1="15" x2="32" y2="4"/>\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="14" y1="23" x2="6" y2="15"/>\r
<line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="50" y1="23" x2="58" y2="15"/>\r
<path fill="#000000" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M48.159,47C49.96,44.096,51,40.669,51,37\r
	c0-10.493-8.506-19-19-19s-19,8.507-19,19c0,3.668,1.04,7.094,2.841,9.998"/>\r
</svg>\r
`,mn={},mt=Object.assign({"/src/lib/components/svgs/animated/cloudy-day-1.svg":Nn,"/src/lib/components/svgs/animated/cloudy-day-2.svg":Dn,"/src/lib/components/svgs/animated/cloudy-day-3.svg":jn,"/src/lib/components/svgs/animated/cloudy-night-1.svg":Gn,"/src/lib/components/svgs/animated/cloudy-night-2.svg":Un,"/src/lib/components/svgs/animated/cloudy-night-3.svg":In,"/src/lib/components/svgs/animated/cloudy.svg":Rn,"/src/lib/components/svgs/animated/day.svg":Bn,"/src/lib/components/svgs/animated/night.svg":Ln,"/src/lib/components/svgs/animated/rainy-1.svg":Vn,"/src/lib/components/svgs/animated/rainy-2.svg":Wn,"/src/lib/components/svgs/animated/rainy-3.svg":$n,"/src/lib/components/svgs/animated/rainy-4.svg":Pn,"/src/lib/components/svgs/animated/rainy-5.svg":Hn,"/src/lib/components/svgs/animated/rainy-6.svg":Kn,"/src/lib/components/svgs/animated/rainy-7.svg":Jn,"/src/lib/components/svgs/animated/snowy-1.svg":qn,"/src/lib/components/svgs/animated/snowy-2.svg":Qn,"/src/lib/components/svgs/animated/snowy-3.svg":Zn,"/src/lib/components/svgs/animated/snowy-4.svg":nt,"/src/lib/components/svgs/animated/snowy-5.svg":tt,"/src/lib/components/svgs/animated/snowy-6.svg":at,"/src/lib/components/svgs/animated/thunder.svg":it,"/src/lib/components/svgs/animated/weather-sprite.svg":et,"/src/lib/components/svgs/animated/weather.svg":rt,"/src/lib/components/svgs/animated/weather_sagittarius.svg":ot,"/src/lib/components/svgs/animated/weather_sunset.svg":st});for(const[l,r]of Object.entries(mt)){const a=l.split("/").pop().replace(".svg","");mn[a]=r}var lt=E('<div class="inline-block leading-none"><!></div>');function ft(l,r){K(r,!0);const a=H(r,"condition",3,"day"),i=H(r,"size",3,64),d=H(r,"color",3,"#3b82f6"),c=Math.random().toString(36).slice(2,9),g=Xn(()=>{var k;return(k=mn[a().toLowerCase()])==null?void 0:k.replace(/\b(id)="([^"]+)"/g,`$1="$2-${c}"`).replace(/#([^"')]+)/g,`#$1-${c}`).replace(/(<svg[^>]*)/,`$1 style="${d()?`color: ${d()};`:""}"`)});var w=lt(),f=s(w);Tn(f,()=>m(g)),o(w),F(()=>On(w,`width: ${i()??""}px; height: ${i()??""}px`)),b(l,w),J()}var ct=E('<p class="text-center text-lg">Loading...</p>'),wt=E('<p class="text-center text-lg"> </p>'),gt=E('<div><h2 class="text-2xl font-bold"> </h2> <h3 class="text-lg"> </h3></div> <div class="mt-4 flex items-center space-x-4"><div><!> <div class="text-4xl font-bold"> </div></div> <div class="space-y-2"><p class="text-sm"> </p> <p class="text-sm"> </p> <p class="text-sm"> </p> <p class="text-sm"> </p> <p class="text-sm"> </p></div></div> <div class="mt-4 space-y-1"><p class="text-sm"> </p></div> <button>Remove</button>',1),dt=E('<div class="m-5 rounded-lg bg-gray-500 p-5 text-white"><!></div>');function kt(l,r){K(r,!0);let a=j(r.myWeatherData),i=j(r.myWeatherData.error),d="day";const c=n=>({0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Depositing rime fog",51:"Light drizzle",53:"Moderate drizzle",55:"Dense drizzle",56:"Freezing drizzle",57:"Dense freezing drizzle",61:"Slight rain",63:"Moderate rain",65:"Heavy rain",66:"Freezing rain",67:"Heavy freezing rain",71:"Slight snow",73:"Moderate snow",75:"Heavy snow",77:"Snow grains",80:"Slight showers",81:"Moderate showers",82:"Violent showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Heavy thunderstorm with hail"})[n]||"Unknown weather";var g=dt(),w=s(g);{var f=n=>{var t=ct();b(n,t)},k=(n,t)=>{{var e=y=>{var v=wt(),X=s(v);o(v),F(()=>x(X,`Error: ${i??""}`)),b(y,v)},u=(y,v)=>{{var X=p=>{var A=gt(),_=sn(A),S=s(_),z=s(S,!0);o(S);var C=h(S,2),G=s(C);o(C),o(_);var U=h(_,2),I=s(U),q=s(I);ft(q,{condition:d,size:"64"});var Q=h(q,2),ln=s(Q);o(Q),o(I);var Z=h(I,2),R=s(Z),fn=s(R,!0);o(R);var B=h(R,2),cn=s(B);o(B);var L=h(B,2),wn=s(L);o(L);var V=h(L,2),gn=s(V);o(V);var nn=h(V,2),dn=s(nn);o(nn),o(Z),o(U);var W=h(U,2),tn=s(W),kn=s(tn);o(tn),o(W);var un=h(W,2);un.__click=function(...$){var T;(T=r.onRemove)==null||T.apply(this,$)},F(($,T,xn,pn)=>{x(z,a.locationName),x(G,`${a.subLocationName??""}
				${$??""} - ${a.timezone_abbreviation??""}`),x(ln,`${a.current.temperature_2m??""}${a.current_units.temperature_2m??""}`),x(fn,T),x(cn,`Feels like ${a.current.apparent_temperature??""}${a.current_units.apparent_temperature??""}`),x(wn,`Wind: ${a.current.wind_speed_10m??""}${a.current_units.wind_speed_10m??""}
					${a.current.wind_direction_10m??""}${a.current_units.wind_direction_10m??""}`),x(gn,`${a.current.relative_humidity_2m??""}${a.current_units.relative_humidity_2m??""}`),x(dn,`${a.current.surface_pressure??""}${a.current_units.surface_pressure??""} on ${a.elevation??""}
					meter above seelevel elevation`),x(kn,`Sunrise: ${xn??""} | Sunset: ${pn??""}`)},[()=>a.current.time.substring(11),()=>c(a.current.weather_code),()=>a.daily.sunrise[0].substring(11),()=>a.daily.sunset[0].substring(11)]),b(p,A)};M(y,p=>{a&&p(X)},v)}};M(n,y=>{i?y(e):y(u,!1)},t)}};M(w,n=>{a?n(k,!1):n(f)})}o(g),b(l,g),J()}_n(["click"]);new TextEncoder;var ut=E("<p>Loading weather data...</p>"),xt=E('<p class="error"> </p>'),pt=E('<div class="min-h-screen w-full bg-gradient-to-b from-gray-900 to-blue-700"></div>');function Yt(l,r){K(r,!0);const a={locationName:null,subLocationName:null,latitude:null,longitude:null,loading:!0};let i=on(j([])),d=on(j([]));P(()=>{const n=N.items;n.length>0&&(n.forEach(t=>{g(t)}),N.clear(),Y(i,[...m(i)],!0))}),P(()=>{if(typeof window>"u")return;Y(d,m(i).map(t=>({...t,loading:!0,error:null})),!0);const n=m(i).map(async t=>{try{const e=await f(t.latitude,t.longitude);return{...t,...e,loading:!1}}catch(e){return{...t,loading:!1,error:`Failed to load weather: ${e.message}`}}});Promise.allSettled(n).then(t=>{Y(d,t.map((e,u)=>e.status==="fulfilled"?e.value:{...m(i)[u],loading:!1,error:`Failed to load weather ${e.reason.message}`}),!0)})}),bn(()=>{c();const n=N.items;n.length>0&&(n.forEach(t=>{g(t)}),N.clear(),Y(i,[...m(i)],!0))});function c(){if(!(typeof localStorage>"u"))try{const n=localStorage.getItem("savedLocations");if(n){const t=JSON.parse(n);m(i).push(...t.map(e=>({...a,...e,loading:!1})))}}catch(n){console.error("Failed to load locations",n)}}function g(n={}){const t={...a,...n};m(i).push(t),Y(i,[...m(i)],!0)}function w(n){m(i).splice(n,1),Y(i,[...m(i)],!0)}async function f(n,t){try{const e=new URL("https://api.open-meteo.com/v1/forecast");e.searchParams.append("latitude",n),e.searchParams.append("longitude",t),e.searchParams.append("current","temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,relative_humidity_2m,surface_pressure"),e.searchParams.append("daily","sunrise,sunset"),e.searchParams.append("timezone","auto");const u=await fetch(e);if(!u.ok)throw new Error("Weather data unavailable");return await u.json()}catch(e){return console.error(e.message),e}}P(()=>{if(!(typeof localStorage>"u"))try{const n=m(i).map(({loading:t,error:e,...u})=>u);localStorage.setItem("savedLocations",JSON.stringify(n))}catch(n){console.error("Failed to save locations",n)}});var k=pt();Sn(k,21,()=>m(d),Mn,(n,t,e)=>{var u=yn(),y=sn(u);{var v=p=>{var A=ut();b(p,A)},X=(p,A)=>{{var _=z=>{var C=xt(),G=s(C,!0);o(C),F(()=>x(G,m(t).error)),b(z,C)},S=z=>{kt(z,{get myWeatherData(){return m(t)},onRemove:()=>w(e)})};M(p,z=>{m(t).error?z(_):z(S,!1)},A)}};M(y,p=>{m(t).loading?p(v):p(X,!1)})}b(n,u)}),o(k),b(l,k),J()}export{Yt as component};
