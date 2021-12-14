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

@media (max-width: 3000px) {
	.footerContainer {
		margin-top: calc(80px + 2vw) !important;
	}
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

	.centerImageContainer {
		zoom: 0.9;
		padding: 198px 80px;
	}

	.institutionFlag {
		zoom: 0.8;
	}

	.teacherFlag {
		zoom: 0.8;
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

	.footerContainer {
		margin-top: 80px !important;
	}

	.bottom-menu {
		font-size: 20px !important;
	}

	.bottom-menu-link {
		margin-bottom: 20px !important;
	}
}

@media (max-width: 1500px) {
	.img-mask {
		zoom: 0.7 !important;
		clip-path: polygon(0.5% 0.6%, 99.5% 0.5%, 99.5% 99.5%, 0.4% 99.5%) !important;
	}

	.overflow-controller  {
		max-height: 450px;
	}

	.centerImageContainer {
		zoom: 0.8;
		padding: 212px 80px;
	}

	.institutionFlag {
		zoom: 0.75;
	}

	.teacherFlag {
		zoom: 0.75;
	}

	.whatWeDo {
		padding: 100px 80px; 
	}
}

@media (max-width: 1250px) {
	.img-mask {
		zoom: 0.65 !important;
		clip-path: polygon(0.5% 0.7%, 99.5% 0.7%, 99.5% 99.5%, 0.4% 99%) !important;
	}

	.overflow-controller  {
		max-height: 450px;
	}

	.centerImageContainer {
		zoom: 0.7;
		padding: 219px 60px;
	}

	.institutionFlag {
		zoom: 0.7;
	}

	.teacherFlag {
		zoom: 0.7;
	}

	.whatWeDo {
		padding: 70px 60px; 
	}

	.bottom-menu-link {
		margin-bottom: 16px !important;
	}
}

@media (max-width: 1150px) {
	.img-mask {
		zoom: 0.6 !important;
	}

	.overflow-controller  {
		max-height: 400px;
	}

	.centerImageContainer {
		zoom: 0.62;
		padding: 208px 48px;
		margin-top: -60px;
	}

	.containerInstitution {
		border-radius: 60px;
	}

	.institutionFlag {
		zoom: 0.58;
	}

	.teacherFlag {
		zoom: 0.58;
	}

	.whatWeDo {
		padding: 48px 48px; 
	}

	.segmentText {
		font-size: 18px;
		max-width: 360px;
	}

	.segmentTitle {
		font-size: 32px;
		max-width: 360px;
	}

	.list {
		font-size: 15px;
	}

	.bottom-menu-link {
		margin-bottom: 14px !important;
	}

	.footerContainer {
		margin-top: 60px !important;
	}

	.bottom-menu {
		font-size: 18px !important;
	}
}

@media (max-width: 1000px) {
	.img-mask {
		zoom: 0.55 !important;
	}

	.overflow-controller  {
		max-height: 400px;
	}
}

.nav-link:hover {
	color: #2166af !important;
	transition: all 0.3s !important;
}
</style>
