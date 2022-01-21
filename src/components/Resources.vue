<template>
	<div id="resources">
		<h2 class="custom-container">Recursos</h2>

		<div class="custom-container overflow-controller-lg resources mt-5">
			<div
				class="mb-5 d-flex align-items-center justify-content-between resources-sections"
			>
				<div
					class="img-description"
				>
					<h3>Software Livre educational</h3>

					<p
						class="mt-4 segment-text"
					>
						O LibreClass é um software livre de código aberto 
						o que o torna perfeito para adequação ao seu caso de uso.
					</p>
				</div>

				<div
					class="img-container"
				>
					<img class="img-mask" src="../assets/freeSoftware.png" alt="">
				</div>

			</div>

			<div
				class="mb-5 d-flex align-items-center justify-content-between resources-sections"
			>
				<div
					class="img-description"
				>
					<h3>Diário eletrônico</h3>

					<p
						class="mt-4 segment-text"
					>
						Gerencie de maneira 
						eficiente as informações de aula, a frequência escolar e as 
						notas dos alunos, economizando papel e otimizando seu tempo.
					</p>
				</div>

				<div
					class="img-container mb-5"
				>
					<img class="img-mask" src="../assets/diary.gif" alt="">
				</div>


			</div>

			<div
				class="mb-5 d-flex align-items-center justify-content-between resources-sections"
			>
				<div
					class="img-description"
				>
					<h3>Gerenciamento escolar</h3>

					<p
						class="mt-4 segment-text"
					>
						Através da Dashboard e dos relatórios consolidados 
						o professor e a instituição conseguem visualizar informações 
						sobre o desempenho dos alunos e turmas, além de agendas e 
						calendário de avaliações.
					</p>
				</div>


					<div
						class="img-container"
					>
						<img class="img-mask" src="../assets/grades.gif" alt="">
					</div>
			</div>
		</div>

		<div class="custom-container overflow-controller-sm resources mt-5">
			<div
				class="resources-sections-sm"
			>

				<div
					class="img-container-sm"
				>
					<img class="img-mask" src="../assets/freeSoftware.png" alt="">
				</div>

				<div
					class="img-description"
				>
					<h3>Software Livre educational</h3>

					<p
						class="mt-4 segment-text"
					>
						O LibreClass é um software livre de código aberto 
						o que o torna perfeito para adequação ao seu caso de uso.
					</p>
				</div>
			</div>

			<div
				class="resources-sections-sm"
			>

				<div
					class="img-container-sm"
				>
					<img class="img-mask" src="../assets/diary.gif" alt="">
				</div>

				<div
					class="img-description"
				>
					<h3>Diário eletrônico</h3>

					<p
						class="mt-4 segment-text"
					>
						Gerencie de maneira 
						eficiente as informações de aula, a frequência escolar e as 
						notas dos alunos, economizando papel e otimizando seu tempo.
					</p>
				</div>

			</div>

			<div
				id="go"
				class="resources-sections-sm"
			>

				<div
						class="img-container-sm"
					>
						<img class="img-mask" src="../assets/diary.gif" alt="">
					</div>

				<div
					class="img-description"
				>
					<h3>Gerenciamento escolar</h3>

					<p
						class="mt-4 segment-text"
					>
						Através da Dashboard e dos relatórios consolidados 
						é possível visualizar informações 
						sobre o desempenho dos alunos e turmas, além de agendas e 
						calendário de avaliações.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
}
</script>

<style>
.img-description {
	max-width: 500px;
}

.img-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	scroll-snap-align: start;
}

.contInsideCont {
	max-height: 550px;
	overflow: scroll;
	overflow-x: hidden;

	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
}

.contInsideCont::-webkit-scrollbar {
	width: 0;
	scrollbar-width: none;
	background: transparent;
}

.segment-text {
	font-size: 20px;
	line-height: 28px;
}

.img-mask {
	clip-path: polygon(0.4% 0.5%, 99.5% 0.5%, 99.5% 99.5%, 0.4% 99.5%);
	zoom: 0.8;
	-moz-transform: scale(0.8) !important;
}

.overflow-controller-lg {
	max-height: 520px;
	overflow: scroll;
	overflow-x: hidden;
	margin-bottom: 50px;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	scrollbar-width: none;
}

.overflow-controller-lg::-webkit-scrollbar {
	width: 0;
	scrollbar-width: none;
	background: transparent;
}

.resources-sections {
	scroll-snap-align: start;
}

.resources-sections-sm {
	display: flex;
    flex-direction: column;
    align-items: start !important;
	scroll-snap-align: start;
	max-height: 500px;

	margin-bottom: 80px;
}

#resources {
	margin-top: 150px;
	margin-bottom: 200px;
}

#resources {
	padding-top: 50px;
}

.overflow-controller-sm {
	display: none;

	max-height: 550px;
	overflow: scroll;
	overflow-x: hidden;
	margin-bottom: 50px;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	scrollbar-width: none;
}

.overflow-controller-sm::-webkit-scrollbar {
	width: 0;
	scrollbar-width: none;
	background: transparent;
}

.img-container-sm {
	margin-bottom: 32px;
}
</style>
