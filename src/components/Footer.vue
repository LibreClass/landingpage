<template>
	<div id="footerBall">
		<img class="footer-img" src="../assets/footer-img.svg" alt="Imagem do footer">

		<div>
			<div class="row mt-5 footerContainer mt-5">
				<div class="verticalLogoContainer">
					<a href="#">
						<img class="verticalLogo" src="../assets/verticalLogo.svg" alt="Libreclass Logo">
					</a>
					<div class="footer-mail">
						libreclass.contact@gmail.com
					</div>
				</div>

				<div
					class="small-footer"
				>

				</div>

				<div>
					<ul class="bottom-menu nav flex-column">
						<li class="nav-item bottom-menu-link">
							<a class="nav-link active" href="#first-fold">Início</a>
						</li>
						<li class="nav-item bottom-menu-link">
							<a class="nav-link" href="#whatWeDo">O que fazemos</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#resources">Recursos</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>


<style scoped>
.footerContainer {
	position: absolute;
	width: 100%;
	align-items: center;
	justify-content: space-around;
}

.bottom-menu {
	font-size: 24px;
	font-weight: 500;
	color: rgba(26, 39, 55, 0.8);
}

.footer-img {
	position: absolute;
	width: 100%;
}

.bottom-menu-link {
	margin-bottom: 24px;
}

.small-footer {
	display: none;
	position: absolute;
	width: 105%;
	z-index: -1;
	height: calc(27.8vw + 5vh);

	background: linear-gradient(241.22deg, rgba(112, 173, 245, 0.4) 12.8%, rgba(212, 241, 255, 0.4) 49.59%, rgba(212, 241, 255, 0.1) 73.17%);
	border: 2.10141px solid rgba(119, 186, 238, 0.2);
	border-radius: 80px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}

.verticalLogo {
	width: calc(10vw + 10%);
}

.verticalLogoContainer {
	width: min-content;
}

.footer-mail {
	margin-top: 8px;
	color: #697580;
	font-weight: 500;
}

</style>
