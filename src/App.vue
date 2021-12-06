<template>
  <div id="app">
    <FirstFold />
	<WhatWeDo />
	<Resources />
	<Footer />
  </div>
</template>

<script>
import FirstFold from './components/FirstFold.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import Resources from './components/Resources.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    FirstFold,
	WhatWeDo,
	Resources,
	Footer,
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:ital,wght@0,400;0,500;1,200&display=swap');


body { 
	font-family: 'Poppins';
}

a {
	text-decoration: none !important;
	color: #182532 !important;
}

@media (min-width: 1200px) {
	.container {
		min-width: 1340px;
	}
}

h1 {
    color: rgba(28, 51, 74, 1);
    font-family: 'Libre Baskerville', serif;
    font-size: 44px;
	line-height: 52px;
}

h2 {
    color: rgba(28, 51, 74, 1);
    font-family: 'Libre Baskerville', serif;
    font-size: 48px;
	font-weight: 600;
}

h3 {
    color: rgba(28, 51, 74, 1);
    font-size: 40px;
}

html {
	scroll-behavior: smooth;
	overflow-x: hidden;
}

.customContainer {
	padding-right: 32rem;
	padding-left: 32rem;
}

@media (max-width: 2300px) {
    .customContainer {
		padding-right: 28rem;
		padding-left: 28rem;
	}
}

@media (max-width: 2200px) {
    .customContainer {
		padding-right: 24rem;
		padding-left: 24rem;
	}
}

@media (max-width: 1975px) {
    .customContainer {
		padding-right: 20rem;
		padding-left: 20rem;
	}
}

@media (max-width: 1850px) {
    .customContainer {
		padding-right: 16rem;
		padding-left: 16rem;
	}
}

@media (max-width: 1750px) {
    .customContainer {
		padding-right: 12rem;
		padding-left: 12rem;
	}
}

@media (max-width: 1600px) {
    .customContainer {
		padding-right: 8rem;
		padding-left: 8rem;
	}
}

@media (max-width: 1440px) {
    .customContainer {
		padding-right: 4rem;
		padding-left: 4rem;
	}
}
</style>
