import{i as nn,j as xn,c as v,b as z,s as h,e as pn,g as hn}from"../chunks/D9uXLZzc.js";import{o as yn}from"../chunks/Cv5K3Qwr.js";import{a4 as M,h as D,a as tn,o as bn,aD as zn,j as an,B as En,aA as vn,az as An,s as Cn,g as O,a5 as $,a7 as o,a8 as r,a6 as P,d as l,ad as rn,D as j,a9 as on,aa as b,ab as en,Z as V,Q as _}from"../chunks/BjJl-aab.js";import{i as G}from"../chunks/CVsZMa6J.js";import{e as Yn,i as Xn}from"../chunks/DER2Zz-a.js";import{a as _n}from"../chunks/B_40f77_.js";import{p as W}from"../chunks/CckoaBD8.js";import{i as N}from"../chunks/BKj6tK3B.js";function Sn(c,s,n=!1,a=!1,k=!1){var w=c,u="";M(()=>{var d=bn;if(u===(u=s()??"")){D&&tn();return}if(d.nodes_start!==null&&(zn(d.nodes_start,d.nodes_end),d.nodes_start=d.nodes_end=null),u!==""){if(D){an.data;for(var g=tn(),x=g;g!==null&&(g.nodeType!==8||g.data!=="");)x=g,g=En(g);if(g===null)throw vn(),An;nn(an,x),w=Cn(g);return}var m=u+"";n?m=`<svg>${m}</svg>`:a&&(m=`<math>${m}</math>`);var t=xn(m);if((n||a)&&(t=O(t)),nn(O(t),t.lastChild),n||a)for(;O(t);)w.before(O(t));else w.before(t)}})}function Mn(c,s,n,a){var k=c.__style;if(D||k!==s){var w=_n(s);(!D||w!==c.getAttribute("style"))&&(w==null?c.removeAttribute("style"):c.style.cssText=w),c.__style=s}return a}const Fn=`<?xml version="1.0" encoding="utf-8"?>
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
</svg>`,Tn=`<?xml version="1.0" encoding="utf-8"?>
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
    
</svg>`,On=`<?xml version="1.0" encoding="utf-8"?>
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
</svg>`,Nn=`<?xml version="1.0" encoding="utf-8"?>
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
</svg>`,tt=`<?xml version="1.0" encoding="utf-8"?>
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
</svg>`,it=`<svg width="21px" height="17px" viewBox="187 110 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\r
    <!-- Generator: Sketch 3.8.3 (29802) - http://www.bohemiancoding.com/sketch -->\r
    <desc>Created with Sketch.</desc>\r
    <defs></defs>\r
    <g id="Wind" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(197.611216, 118.415064) rotate(-30.000000) translate(-197.611216, -118.415064) translate(189.111216, 115.915064)" stroke-linecap="round">\r
        <path d="M0.5,2.5 L13,2.5" id="Line" stroke="#000000"></path>\r
        <polygon id="Triangle-1" stroke="#000000" stroke-linejoin="round" fill="#000000" points="13 5 13 1.13686838e-13 17 2.5"></polygon>\r
    </g>\r
</svg>`,et=`<?xml version="1.0" encoding="utf-8"?>\r
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
`,sn={},rt=Object.assign({"/src/lib/components/svgs/animated/cloudy-day-1.svg":Fn,"/src/lib/components/svgs/animated/cloudy-day-2.svg":Tn,"/src/lib/components/svgs/animated/cloudy-day-3.svg":On,"/src/lib/components/svgs/animated/cloudy-night-1.svg":Nn,"/src/lib/components/svgs/animated/cloudy-night-2.svg":Dn,"/src/lib/components/svgs/animated/cloudy-night-3.svg":jn,"/src/lib/components/svgs/animated/cloudy.svg":Gn,"/src/lib/components/svgs/animated/day.svg":Un,"/src/lib/components/svgs/animated/night.svg":In,"/src/lib/components/svgs/animated/rainy-1.svg":Rn,"/src/lib/components/svgs/animated/rainy-2.svg":Bn,"/src/lib/components/svgs/animated/rainy-3.svg":Ln,"/src/lib/components/svgs/animated/rainy-4.svg":Vn,"/src/lib/components/svgs/animated/rainy-5.svg":Wn,"/src/lib/components/svgs/animated/rainy-6.svg":$n,"/src/lib/components/svgs/animated/rainy-7.svg":Pn,"/src/lib/components/svgs/animated/snowy-1.svg":Hn,"/src/lib/components/svgs/animated/snowy-2.svg":Kn,"/src/lib/components/svgs/animated/snowy-3.svg":Jn,"/src/lib/components/svgs/animated/snowy-4.svg":Qn,"/src/lib/components/svgs/animated/snowy-5.svg":Zn,"/src/lib/components/svgs/animated/snowy-6.svg":qn,"/src/lib/components/svgs/animated/thunder.svg":nt,"/src/lib/components/svgs/animated/weather-sprite.svg":tt,"/src/lib/components/svgs/animated/weather.svg":at,"/src/lib/components/svgs/animated/weather_sagittarius.svg":it,"/src/lib/components/svgs/animated/weather_sunset.svg":et});for(const[c,s]of Object.entries(rt)){const n=c.split("/").pop().replace(".svg","");sn[n]=s}var ot=v('<div class="inline-block leading-none"><!></div>');function st(c,s){$(s,!0);const n=W(s,"condition",3,"day"),a=W(s,"size",3,64),k=W(s,"color",3,"#3b82f6"),w=Math.random().toString(36).slice(2,9),u=rn(()=>{var x;return(x=sn[n().toLowerCase()])==null?void 0:x.replace(/\b(id)="([^"]+)"/g,`$1="$2-${w}"`).replace(/#([^"')]+)/g,`#$1-${w}`).replace(/(<svg[^>]*)/,`$1  style="${k()?`color: ${k()};`:""} width:${a()}; height${a()};"`)});var d=ot(),g=o(d);Sn(g,()=>l(u)),r(d),M(()=>Mn(d,`width: ${a()??""}px; height: ${a()??""}px`)),z(c,d),P()}var mt=v('<div class="flex h-32 items-center justify-center"><div class="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-100"></div></div>'),lt=v('<p class="text-center text-lg text-red-500"> </p>'),ft=v('<div class="relative"><h2 class="text-2xl font-bold"> </h2> <h3 class="text-lg"> </h3> <button class="absolute right-0 top-0 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Remove">×</button></div> <div class="mt-4 grid grid-cols-2 gap-4"><div><div class="flex items-center space-x-2"><!> <div class="text-3xl font-bold"> </div></div> <p class="mt-2 text-sm"> </p></div> <div class="space-y-2"><p class="text-sm"> </p> <p class="text-sm"> </p> <p class="text-sm"> </p></div></div> <div class="mt-4 border-t pt-4"><p class="text-sm"> </p></div>',1),ct=v('<div class="m-5 rounded-lg bg-white p-5 text-gray-900 shadow-md dark:bg-gray-800 dark:text-gray-100"><!></div>');function gt(c,s){$(s,!0);let n=j(s.myWeatherData),a=j(s.myWeatherData.error);const k=m=>({0:"Clear sky",1:"Mainly clear",2:"Partly cloudy",3:"Overcast",45:"Fog",48:"Depositing rime fog",51:"Light drizzle",53:"Moderate drizzle",55:"Dense drizzle",56:"Freezing drizzle",57:"Dense freezing drizzle",61:"Slight rain",63:"Moderate rain",65:"Heavy rain",66:"Freezing rain",67:"Heavy freezing rain",71:"Slight snow",73:"Moderate snow",75:"Heavy snow",77:"Snow grains",80:"Slight showers",81:"Moderate showers",82:"Violent showers",85:"Snow showers",86:"Heavy snow showers",95:"Thunderstorm",96:"Thunderstorm with hail",99:"Heavy thunderstorm with hail"})[m]||"Unknown weather",w=m=>({0:n.current.time.substring(11)<=n.daily.sunset[0].substring(11)&&n.current.time.substring(11)>=n.daily.sunrise[0].substring(11)?"day":"night",1:n.current.time.substring(11)<=n.daily.sunset[0].substring(11)&&n.current.time.substring(11)>=n.daily.sunrise[0].substring(11)?"cloudy-day-1":"cloudy-night-1",2:n.current.time.substring(11)<=n.daily.sunset[0].substring(11)&&n.current.time.substring(11)>=n.daily.sunrise[0].substring(11)?"cloudy-day-2":"cloudy-night-2",3:n.current.time.substring(11)<=n.daily.sunset[0].substring(11)&&n.current.time.substring(11)>=n.daily.sunrise[0].substring(11)?"cloudy-day-3":"cloudy-night-3",45:"cloudy",48:n.current.time.substring(11)<=n.daily.sunset[0].substring(11)&&n.current.time.substring(11)>=n.daily.sunrise[0].substring(11)?"cloudy-day-1":"cloudy-night-1",51:"rainy-4",53:"rainy-5",55:"rainy-6",56:"rainy-7",57:"rainy-7",61:"rainy-4",63:"rainy-5",65:"rainy-6",66:"snowy-5",67:"snowy-5",71:"snowy-4",73:"snowy-5",75:"snowy-6",77:"snowy-4",80:"rainy-4",81:"rainy-5",82:"rainy-6",85:"snowy-5",86:"snowy-6",95:"thunder",96:"rainy-7",99:"thunder"})[m]||"Unknown weather";var u=ct(),d=o(u);{var g=m=>{var t=mt();z(m,t)},x=(m,t)=>{{var i=f=>{var y=lt(),A=o(y);r(y),M(()=>h(A,`Error: ${a??""}`)),z(f,y)},e=f=>{var y=ft(),A=on(y),S=o(A),E=o(S,!0);r(S);var C=b(S,2),U=o(C);r(C);var I=b(C,2);r(A);var p=b(A,2),Y=o(p),X=o(Y),F=o(X);const mn=rn(()=>w(n.current.weather_code));st(F,{get condition(){return l(mn)}});var H=b(F,2),ln=o(H);r(H),r(X);var K=b(X,2),fn=o(K,!0);r(K),r(Y);var J=b(Y,2),R=o(J),cn=o(R);r(R);var B=b(R,2),gn=o(B);r(B);var Q=b(B,2),wn=o(Q);r(Q),r(J),r(p);var Z=b(p,2),q=o(Z),dn=o(q);r(q),r(Z),M((L,T,un,kn)=>{h(E,n.locationName),h(U,`${n.subLocationName??""}
				${L??""} - ${n.timezone_abbreviation??""}`),h(ln,`${n.current.temperature_2m??""}${n.current_units.temperature_2m??""}`),h(fn,T),h(cn,`Feels like ${n.current.apparent_temperature??""}${n.current_units.apparent_temperature??""}`),h(gn,`Wind: ${n.current.wind_speed_10m??""}${n.current_units.wind_speed_10m??""}
					${n.current.wind_direction_10m??""}${n.current_units.wind_direction_10m??""}`),h(wn,`${n.current.relative_humidity_2m??""}${n.current_units.relative_humidity_2m??""}
					Humidity`),h(dn,`Sunrise: ${un??""} | Sunset: ${kn??""}`)},[()=>n.current.time.substring(11),()=>k(n.current.weather_code),()=>n.daily.sunrise[0].substring(11),()=>n.daily.sunset[0].substring(11)]),pn("click",I,function(...L){var T;(T=s.onRemove)==null||T.apply(this,L)}),z(f,y)};G(m,f=>{a?f(i):f(e,!1)},t)}};G(d,m=>{n?m(x,!1):m(g)})}r(u),z(c,u),P()}new TextEncoder;var wt=v('<div class="flex h-32 items-center justify-center rounded-lg bg-white p-5 shadow-md dark:bg-gray-800"><span class="sr-only">Loading weather data</span> <div class="h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-100"></div></div>'),dt=v('<div class="rounded-lg bg-white p-5 shadow-md dark:bg-gray-800"><p class="text-red-500 dark:text-red-400"> </p></div>'),ut=v('<div class="min-h-screen w-full bg-gradient-to-b from-gray-100 to-blue-200 dark:from-gray-900 dark:to-blue-700"><div class="container mx-auto grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3"></div></div>');function vt(c,s){$(s,!0);const n={locationName:null,subLocationName:null,latitude:null,longitude:null,loading:!0};let a=en(j([])),k=en(j([]));V(()=>{const t=N.items;t.length>0&&(t.forEach(i=>{u(i)}),N.clear(),_(a,[...l(a)],!0))}),V(()=>{if(typeof window>"u")return;_(k,l(a).map(i=>({...i,loading:!0,error:null})),!0);const t=l(a).map(async i=>{try{const e=await g(i.latitude,i.longitude);return{...i,...e,loading:!1}}catch(e){return{...i,loading:!1,error:`Failed to load weather: ${e.message}`}}});Promise.allSettled(t).then(i=>{_(k,i.map((e,f)=>e.status==="fulfilled"?e.value:{...l(a)[f],loading:!1,error:`Failed to load weather ${e.reason.message}`}),!0)})}),yn(()=>{w();const t=N.items;t.length>0&&(t.forEach(i=>{u(i)}),N.clear(),_(a,[...l(a)],!0))});function w(){if(!(typeof localStorage>"u"))try{const t=localStorage.getItem("savedLocations");if(t){const i=JSON.parse(t);l(a).push(...i.map(e=>({...n,...e,loading:!1})))}}catch(t){console.error("Failed to load locations",t)}}function u(t={}){const i={...n,...t};l(a).push(i),_(a,[...l(a)],!0)}function d(t){l(a).splice(t,1),_(a,[...l(a)],!0)}async function g(t,i){try{const e=new URL("https://api.open-meteo.com/v1/forecast");e.searchParams.append("latitude",t),e.searchParams.append("longitude",i),e.searchParams.append("current","temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,relative_humidity_2m,surface_pressure"),e.searchParams.append("daily","sunrise,sunset"),e.searchParams.append("timezone","auto");const f=await fetch(e);if(!f.ok)throw new Error("Weather data unavailable");return await f.json()}catch(e){return console.error(e.message),e}}V(()=>{if(!(typeof localStorage>"u"))try{const t=l(a).map(({loading:i,error:e,...f})=>f);localStorage.setItem("savedLocations",JSON.stringify(t))}catch(t){console.error("Failed to save locations",t)}});var x=ut(),m=o(x);Yn(m,21,()=>l(k),Xn,(t,i,e)=>{var f=hn(),y=on(f);{var A=E=>{var C=wt();z(E,C)},S=(E,C)=>{{var U=p=>{var Y=dt(),X=o(Y),F=o(X,!0);r(X),r(Y),M(()=>h(F,l(i).error)),z(p,Y)},I=p=>{gt(p,{get myWeatherData(){return l(i)},onRemove:()=>d(e)})};G(E,p=>{l(i).error?p(U):p(I,!1)},C)}};G(y,E=>{l(i).loading?E(A):E(S,!1)})}z(t,f)}),r(m),r(x),z(c,x),P()}export{vt as component};
