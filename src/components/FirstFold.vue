<template>
	<div class="customContainer" id="firstFold">
		<img class="first-fold-image" src="../assets/openBook5.svg" alt="">

		<nav class="mt-5 navbar navbar-expand-lg navbar-light bg-transparent">
			<a class="navbar-brand" href="/#">
				<img src="../assets/newLogo.svg" alt="">
			</a>

			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="align-items-center navbar-nav ml-auto flex-row justify-content-between mt-4 mt-lg-0">
					<li class="nav-item active">
						<a class="nav-link" href="#firstFold">Início</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#whatWeDo">O que fazemos</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#resources">Recursos</a>
					</li>
					<li class="nav-item ml-2">
						<a href="https://libreclass.com/login">
							<div type="button" class="d-none d-lg-block small-primary-button">Login</div>
							<span class="d-block d-lg-none mt-2 cl-primary">Login</span>
						</a>
					</li>
				</ul>
			</div>
		</nav>

		<section id="header" class="py-4">
			<div class="row align-items-center fold">
				<div class="col-xs-12 col-lg-6 col-md-8 col-sm-8 text-center text-sm-left text-md-left text-lg-left">
					<h1 class="font-weight-bold">Gestão da educação de forma  simplificada e livre</h1>

					<p class="subtitle mt-4">Simplifique a gestão da educação na sua escola facilitando o trabalho de gestores e professores, economizando recursos.</p>
				</div>
			</div>
		</section>

	</div>
</template>

<script>
export default {

}
</script>


<style scoped>
.first-fold-image {
	position: absolute;
	top: 0px;
	width: 90%;
}

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

@media (min-width: 1200px) {
	.container {
		min-width: 1340px;
	}
}

@media (min-width: 600px) {
	.fold {
		padding: 0;
	}
}

@media (min-width: 768px) {
	.fold {
		padding: 150px 0px;
	}
}

@media (min-width: 992px) {
	.fold {
		padding: 150px 0px;
	}
}

@media (min-width: 1200px) {
	.fold {
		padding: 150px 0px;
	}
}
</style>
