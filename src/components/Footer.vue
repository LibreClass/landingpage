<template>
	<div id="footer">
		<img class="hope2" src="../assets/footer-img.svg" alt="Imagem do footer">

		<div>
			<div class="row mt-5 footerContainer customContainer mt-5">
				<div class="col-12 w-100 col-lg-6 col-md-4 mt-5 mt-lg-0">
					<a href="#">
						<img class="verticalLogo" src="../assets/verticalLogo.svg" alt="Libreclass Logo">
					</a>
				</div>

				<div class="col-12 w-100 col-lg-3 mt-5 mt-lg-0 text-lg-left">
					<ul class="bottom-menu nav flex-column">
						<li class="nav-item bottom-menu-link">
							<a class="nav-link active" href="#firstFold">Início</a>
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
export default {

}
</script>


<style scoped>
.footerContainer {
	position: absolute;
	width: 100%;
	align-items: center;
	justify-content: center;
}

.bottom-menu {
	font-size: 24px;
	font-weight: 500;
	color: rgba(26, 39, 55, 0.8);
}

.hope2 {
	position: absolute;
	width: 100%;
 }

.bottom-menu-link {
	margin-bottom: 24px;
}

.small-one {
	position: absolute;
	width: 99.3vw;
	z-index: 99;
	height: calc(15.8vw + 5vh);

	background: linear-gradient(241.22deg, rgba(112, 173, 245, 0.4) 12.8%, rgba(212, 241, 255, 0.4) 49.59%, rgba(212, 241, 255, 0.1) 73.17%);
	border: 2.10141px solid rgba(119, 186, 238, 0.2);
	border-radius: 80px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}

.large-one {
	position: absolute;
	margin-top: -3.4em;

	width: 85vw;
	height: calc(19vw + 5vh);

	border-radius: 80px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;

	background: linear-gradient(242.39deg, rgba(112, 173, 245, 0.4) 11.3%, rgba(212, 241, 255, 0.4) 48.72%, rgba(212, 241, 255, 0.1) 72.71%);
	border: 2.10141px solid rgba(119, 186, 238, 0.2);
}

.verticalLogo {
	width: calc(10vw + 5%);
}

</style>
