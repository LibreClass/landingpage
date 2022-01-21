<template>
	<div class="custom-container" id="first-fold">
		<nav class="mt-5 navbar navbar-expand-lg navbar-light bg-transparent">
			<a class="navbar-brand" href="/#">
				<img class="horizontal-img" src="../assets/newLogo.svg" alt="">
				<img class="vertical-img" src="../assets/verticalLogo.svg" alt="Libreclass Logo">
			</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="align-items-md-center align-items-start navbar-nav ml-auto flex-md-row flex-column justify-content-between mt-4 mt-lg-0">
					<li class="nav-item active">
						<a class="nav-link" href="#first-fold">Início</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#whatWeDo">O que fazemos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#resources">Recursos</a>
					</li>
					<li class="nav-item ml-md-2 ml-0">
						<a href="https://demonstracao.libreclass.com/login">
							<div type="button" class="d-none d-lg-block small-primary-button">Login</div>
							<span class="d-block d-lg-none cl-primary mt-md-0 mt-2">Login</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>

		<section id="header" class="py-4">
			<div
				class="d-flex"
			>
				<div class="row align-items-center fold">
					<div class="col-xs-12 col-lg-10 col-md-10 col-sm-12">
						<div>
							<img class="m-sm-0 m-auto d-lg-none d-block first-fold-img-vertical" src="../assets/firstFoldImg.svg" alt="Libreclass Logo">
							<h1 class="font-weight-bold">Gestão da educação de forma  simplificada e livre</h1>
						</div>

						<p class="subtitle mt-4">Simplifique a gestão da educação na sua escola facilitando o trabalho de gestores e professores, economizando recursos.</p>
					</div>
				</div>
				<img class="d-lg-block d-none first-fold-img" src="../assets/firstFoldImg.svg" alt="Libreclass Logo">
			</div>
		</section>

	</div>
</template>

<script>
export default {

}
</script>


<style scoped>
.small-primary-button {
	border-radius: 50px;
	padding: 10px 24px;
	width: fit-content;
	background-color: #3696fc;
	border: 1px solid #3696fc;
	display: inline-block;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.5s;
	color: white;
	font-size: 20px;
}

.small-primary-button:hover {
	background-color: #2166af;
	border: 1px solid #2166af;
	transition: all 0.5s;
}

.subtitle {
	font-size: 24px;
	line-height: 32px;
	color: #474f57;
}

@media (min-width: 600px) {
	.fold {
		padding: 50px 0px;
	}
}

.vertical-img {
	display: none;
	margin-right: -132px;
}

.first-fold-img {
	width: 55%;
	z-index: 999999999;
	margin-right: -85px;
}

.first-fold-img-vertical {
	z-index: 999999999;
	width: 75%;
}
</style>
