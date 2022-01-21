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
	},

	mounted() {
		var scrollableElement = document.getElementById('go');
		scrollableElement.addEventListener('wheel', checkScrollDirection);

		function checkScrollDirection(event) {
			if (checkScrollDirectionIsDown(event)) {
				setTimeout(function() {
					document.getElementById('footerBall').scrollIntoView();
				}, 100);
			}
		}

		function checkScrollDirectionIsDown(event) {
			if (event.wheelDelta) {
				return event.wheelDelta < 0;
			}
			return event.deltaY > 0;
		}
	},
}
</script>

<style>

/* Reset CSS */
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

/* */

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:ital,wght@0,400;0,500;1,200&display=swap');


body { 
	font-family: 'Poppins';
	overflow-x: hidden !important;
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

.custom-container {
	padding-right: 32rem;
	padding-left: 32rem;
}

@media (max-width: 3000px) {
	.footerContainer {
		margin-top: calc(80px + 2vw) !important;
	}

	.first-fold-image {
		width: 80% !important;
	}
}

@media (max-width: 2300px) {
	.custom-container {
		padding-right: 28rem;
		padding-left: 28rem;
	}

	.first-fold-image {
		width: 85% !important;
	}
}

@media (max-width: 2200px) {
	.first-fold-image {
		width: 95% !important;
	}

	.custom-container {
		padding-right: 24rem;
		padding-left: 24rem;
	}

	.centerImageContainer {
		zoom: 0.9;
		-moz-transform: scale(0.9) !important;
		padding: 198px 80px;
	}

	.institutionFlag {
		zoom: 0.8;
		-moz-transform: scale(0.8) !important;
	}

	.teacherFlag {
		zoom: 0.8;
		-moz-transform: scale(0.8) !important;
	}
}

@media (max-width: 1975px) {
	.custom-container {
		padding-right: 20rem;
		padding-left: 20rem;
	}
}

@media (max-width: 1850px) {
	.custom-container {
		padding-right: 16rem;
		padding-left: 16rem;
	}
}

@media (max-width: 1750px) {
	.custom-container {
		padding-right: 12rem;
		padding-left: 12rem;
	}
}

@media (max-width: 1600px) {
	.custom-container {
		padding-right: 8rem;
		padding-left: 8rem;
	}

	.first-fold-image {
		width: 100% !important;
	}
}

@media (max-width: 1440px) {
	.first-fold-image {
		width: 110% !important;
	}

	.custom-container {
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

	.first-fold-img {
		width: 52% !important;
		margin-right: -65px !important;
	}

	h1 {
		font-size: 40px;
	}

	.subtitle  {
		font-size: 22px !important;
	}
}

@media (max-width: 1500px) {
	.img-mask {
		zoom: 0.7 !important;
		-moz-transform: scale(0.7) !important;
		clip-path: polygon(0.5% 0.6%, 99.5% 0.5%, 99.5% 99.5%, 0.4% 99.5%) !important;
	}

	.overflow-controller-lg  {
		max-height: 450px;
	}

	.centerImageContainer {
		zoom: 0.8;
		-moz-transform: scale(0.8) !important;
		padding: 212px 80px;
	}

	.institutionFlag {
		zoom: 0.75;
		-moz-transform: scale(0.75) !important;
	}

	.teacherFlag {
		zoom: 0.75;
		-moz-transform: scale(0.75) !important;
	}

	.whatWeDo {
		padding: 100px 80px; 
	}
}

@media (max-width: 1250px) {
	.img-mask {
		zoom: 0.65 !important;
		-moz-transform: scale(0.65) !important;
		clip-path: polygon(0.5% 0.7%, 99.5% 0.7%, 99.5% 99.5%, 0.4% 99%) !important;
	}

	.overflow-controller-lg {
		max-height: 430px;
	}

	.centerImageContainer {
		zoom: 0.7;
		-moz-transform: scale(0.7) !important;
		padding: 219px 60px;
	}

	.institutionFlag {
		zoom: 0.7;
		-moz-transform: scale(0.7) !important;
	}

	.teacherFlag {
		zoom: 0.7;
		-moz-transform: scale(0.7) !important;
	}

	.whatWeDo {
		padding: 70px 60px; 
	}

	.bottom-menu-link {
		margin-bottom: 16px !important;
	}

	.first-fold-img {
		width: 55% !important;
		margin-right: -75px !important;
	}
}

@media (max-width: 1150px) {
	.first-fold-image {
		width: 130% !important;
	}

	.img-mask {
		zoom: 0.6 !important;
		-moz-transform: scale(0.6) !important;
	}

	.overflow-controller-lg  {
		max-height: 400px;
	}

	.centerImageContainer {
		zoom: 0.62;
		-moz-transform: scale(0.9) !important;
		padding: 208px 48px;
		margin-top: -60px;
	}

	.containerInstitution {
		border-radius: 60px;
	}

	.institutionFlag {
		zoom: 0.58;
		-moz-transform: scale(0.58) !important;
	}

	.teacherFlag {
		zoom: 0.58;
		-moz-transform: scale(0.58) !important;
	}

	.whatWeDo {
		padding: 48px 48px; 
	}

	.segmentText {
		font-size: 18px;
		max-width: 360px;
	}

	.segment-text {
		max-width: 380px;
	}

	.segmentTitle {
		font-size: 32px;
		max-width: 360px;
	}

	.list {
		font-size: 16px;
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

	h1 {
		font-size: 36px;
	}

	.subtitle  {
		font-size: 20px !important;
	}
}

@media (max-width: 1000px) {
	.first-fold-image {
		width: 140% !important;
	}

	.verticalLogoContainer {
		text-align: center;
	}

	.img-mask {
		zoom: 0.55 !important;
		-moz-transform: scale(0.55) !important;
	}

	.overflow-controller-sm {
		display: block;
	}

	.overflow-controller-lg {
		display: none;
	}

	.img-description {
		max-width: 610px;
	}

	.segment-text {
		max-width: 100%;
	}

	.footer-img {
		display: none;
	}

	.small-footer {
		display: block !important;
		height: 320px !important;
	}

	.verticalLogo {
		width: calc(15vw + 10%) !important;
	}

	.institutionFlag {
		display: none;
	}

	.teacherFlag {
		display: none;
	}

	.whatWeDoLargeContainer {
		display: none;
	}

	.whatWeDoSmallContainer {
		display: block;
	}
}


@media (max-width: 769px) {
	.first-fold-image {
		width: 160% !important;
	}

	.img-mask {
		zoom: 0.5 !important;
		-moz-transform: scale(0.5) !important;
	}

	.segment-text {
		font-size: 18px;
		max-width: 500px;
	}

	.img-description h3 {
		font-size: 28px;
		font-weight: 500;
	}

	.overflow-controller-sm {
		max-height: 548px;
	}

	.bottom-menu {
		text-align: center;
	}

	.footerContainer {
		justify-content: space-around;
	}

	.first-fold-img-vertical {
		width: 85% !important;
	}
}

@media (max-width: 568px) {
	.first-fold-img-vertical {
		width: 100% !important;
	}

	h1 {
		font-size: 32px;
	}

	.subtitle  {
		font-size: 18px !important;
	}

	.bottom-menu {
		margin-top: 32px;
	}
}

@media (max-width: 480px) {
	.first-fold-image {
		width: 200% !important;
	}

	.img-mask {
		zoom: 0.4 !important;
		-moz-transform: scale(0.4) !important;
	}

	.segment-text {
		font-size: 16px;
	}

	.img-description h3 {
		font-size: 28px;
	}

	.custom-container {
		padding-right: 2.2rem;
		padding-left: 2.2rem;
		overflow-x: hidden;
	}

	.custom-container::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	.overflow-controller-sm {
		max-height: 488px;
	}

	.small-footer {
		width: 118% !important;
	}

	.verticalLogo {
		width: calc(25vw + 10%) !important;
	}

	.whatWeDoSmallContainer {
		max-height: 532px;
	}

	.verticalImg {
		display: block !important;
		zoom: 0.3;
	}

	.horizontalImg {
		display: none;
	}
}


@media (max-width: 415px) {
	.first-fold-img-vertical {
		width: 110% !important;
	}

	.overflow-controller-sm {
		max-height: 515px;
	}

	.whatWeDoSmallContainer {
		max-height: 570px;
	}

	.custom-container {
		padding-right: 1.2rem;
		padding-left: 1.2rem;
		overflow-x: hidden;
	}
}

@media (max-width: 430px) {
	.vertical-img {
		display:block !important;
		width: 64%;
	}

	.horizontal-img {
		display: none;
	}
}



@media (max-width: 370px) {
	.img-mask {
		zoom: 0.35 !important;
		-moz-transform: scale(0.35) !important;
	}

	.segment-text {
		font-size: 16px;
	}

	.img-description h3 {
		font-size: 28px;
	}

	.custom-container::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}

	.overflow-controller-sm {
		max-height: 514px;
	}

	.whatWeDoSmallContainer {
		max-height: 585px;
	}
}

@media (max-height: 568px) {
	.overflow-controller-sm {
		scroll-snap-type: none;
		max-height: 100%;
	}

	.whatWeDoSmallContainer {
		scroll-snap-type: none;
		max-height: 100%;
	}
}

.nav-link:hover {
	color: #2166af !important;
	transition: all 0.3s !important;
}
</style>