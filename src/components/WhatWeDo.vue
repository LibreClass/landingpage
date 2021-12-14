<template>
	<div class="mb-5 customContainer" id="whatWeDo">
		<h2 class="mb-5">O que fazemos</h2>

		<div
			class="containerInstitution"
		>
			<div class="whatWeDo">
				<p class="segmentTitle mb-5">Para {{ $data[currentlyActive].title }}</p>

				<p class="segmentText mb-3">
					{{ $data[currentlyActive].text }}
				</p>

				<ul class="list mt-5">
					<li class="ml-3 mt-2" v-for="topic in $data[currentlyActive].topics" :key="topic">
						{{ topic }}
					</li>
				</ul>
			</div>

			<div>
				<div class="leftContainer">
					<div
						class="teacherFlag"
						:class="teacherData.isActive ? 'teacherFlag--active' : 'teacherFlag--inactive'"
						@click="handleFlagClick('teacher')"
					>
						<p class="flagText">Professores</p>
						<svg class="mask">
							<clipPath id="flag">
								<path d="M252 83V1.0777e-05L5.45171 0C1.3393 -1.79759e-07 -0.882787 4.82028 1.78812 7.9473L26.4338 36.8016C27.9258 38.5485 27.977 41.1058 26.5561 42.9109L1.13832 75.2018C-1.34957 78.3625 0.901885 83 4.92422 83L252 83Z" fill="#F05F71" fill-opacity="0.95"/>
								<path d="M5.45171 2L250 2.00001V81L4.92422 81C2.57157 81 1.2547 78.2875 2.70986 76.4389L28.1276 44.148C30.1384 41.5935 30.0659 37.9747 27.9545 35.5027L3.30889 6.64835C1.74668 4.81937 3.04637 2 5.45171 2Z" stroke="#B61125" stroke-opacity="0.2" stroke-width="4"/>
							</clipPath>
						</svg>
					</div>

					<div
						class="institutionFlag"
						:class="institutionData.isActive ? 'institutionFlag--active' : 'institutionFlag--inactive'"
						@click="handleFlagClick('institution')"
					>
						<p class="flagText">Instituições</p>
						<svg class="mask">
							<clipPath id="flag">
								<path d="M252 83V1.0777e-05L5.45171 0C1.3393 -1.79759e-07 -0.882787 4.82028 1.78812 7.9473L26.4338 36.8016C27.9258 38.5485 27.977 41.1058 26.5561 42.9109L1.13832 75.2018C-1.34957 78.3625 0.901885 83 4.92422 83L252 83Z" fill="#F05F71" fill-opacity="0.95"/>
								<path d="M5.45171 2L250 2.00001V81L4.92422 81C2.57157 81 1.2547 78.2875 2.70986 76.4389L28.1276 44.148C30.1384 41.5935 30.0659 37.9747 27.9545 35.5027L3.30889 6.64835C1.74668 4.81937 3.04637 2 5.45171 2Z" stroke="#B61125" stroke-opacity="0.2" stroke-width="4"/>
							</clipPath>
						</svg>
					</div>

					<div class="centerImageContainer">
						<img :src="imgUrl()">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			institutionData: {
				title: 'instituições',
				text: `Com o LibreClass as instituições gerenciam os assuntos
					acadêmicos da escola de forma muito mais fácil, tendo acesso a recursos como:`,
				topics: [
					`Cadastro de professores`,
					`Gerenciamento de unidades e informações sobre as disciplinas lecionadas`,
					`Gerenciamento de alunos`,
					`Dashboard com informações consolidadas`,
				],
				isActive: false,
				imageSrc: 'institution.png',
				imageAlt: 'Ilustração representando uma instituição de ensino',
			},
			teacherData: {
				title: 'professores',
				text: `Com o LibreClass os professores gerenciam os diários de classe 
					e acompanham a evolução dos alunos, tendo acesso a recursos como:`,
				topics: [
					`Diário eletrônico`,
					`Controle de frequência e notas`,
					`Gerenciamento de aulas e avaliações`,
					`Dashboard com informações consolidadas`,
				],
				isActive: true,
				imageSrc: 'class.png',
				imageAlt: 'Ilustração representando a mesa de trabalho de um professor',
			},
			currentlyActive: 'teacherData',
		}
	},

	methods: {
		handleFlagClick(caller) {
			let teacherFlagElement = document.getElementsByClassName('teacherFlag')[0];
			let institutionFlagElement = document.getElementsByClassName('institutionFlag')[0];

			if (caller === 'teacher') {
				this.teacherData.isActive = true;
				this.institutionData.isActive = false;
				this.currentlyActive = 'teacherData';

				teacherFlagElement.style.marginLeft = '-240px';
				institutionFlagElement.style.marginLeft = '-85px';
			} else {
				this.teacherData.isActive = false;
				this.institutionData.isActive = true;
				this.currentlyActive = 'institutionData';

				teacherFlagElement.style.marginLeft = '-85px';
				institutionFlagElement.style.marginLeft = '-240px';
			}
		},

		imgUrl(){
			return require(`../assets/${this.institutionData.isActive ? this.institutionData.imageSrc : this.teacherData.imageSrc}`);
		}
	},
}
</script>

<style>
.segmentTitle {
	font-size: 36px;
	font-weight: 500;
}

.segmentText {
	font-size: 20px;
	line-height: 28px;
	max-width: 415px;
}

.flagText {
	font-size: 28px;
	color: #FFFFFF;
	font-family: 'Libre Baskerville', serif;
	font-weight: bold;
}

.mask {
	height: 0;
	width: 0;
	position: absolute;
}

.list {
	max-width: 415px;
}

.teacherFlag {
	zoom: 0.9;
	cursor: pointer;
	padding: 24px 42px;
	clip-path: url(#flag);
	height: 84px;
	width: 258px;
	position: absolute;
	margin-left: -175px;
	margin-top: 40px;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	z-index: 1;
	background: rgba(240, 95, 113, 0.5);
	border: 4px solid rgba(182, 17, 37, 0.05);
}

.teacherFlag--active {
	background: rgba(240, 95, 113, 0.95);
	border: 4px solid rgba(182, 17, 37, 0.2);
}

.institutionFlag {
	zoom: 0.9;
	cursor: pointer;
	padding: 24px 42px;
	clip-path: url(#flag);
	height: 84px;
	width: 258px;
	position: absolute;
	margin-left: -100px;
	margin-top: 140px;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	z-index: 1;
	background: rgba(171, 121, 216, 0.5);
	border: 4px solid rgba(105, 46, 158, 0.05);
}

.institutionFlag--active {
	background: rgba(130, 47, 205, 0.75);
	border: 4px solid rgba(105, 46, 158, 0.45);
}

.whatWeDo {
	padding: 120px 80px; 
}

.containerInstitution {
	display: flex;
	margin-top: 120px;
	background: #FFFFFF;
	border: 6px solid rgba(119, 186, 238, 0.14);
	box-sizing: border-box;
	border-radius: 80px;
	justify-content: space-between;
}

.leftContainer {
	display: flex;
	box-sizing: border-box;
	border-radius: 70px;
	margin-right: -4px;
}

.centerImageContainer {
	background: #FFFFFF;
	padding: 168px 80px;
	border: 6px solid rgba(119, 186, 238, 0.14);
	border-radius: 70px;
	margin-top: -92px;
	z-index: 2;
	align-self: center;
}

#whatWeDo {
	padding-top: 50px;
}
</style>
