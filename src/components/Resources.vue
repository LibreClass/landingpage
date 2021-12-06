<template>
    <div id="resources">
        <h2 class="customContainer">Recursos</h2>

        <div class="customContainer overflow-controller resources mt-5">
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
                    <img style="zoom: 0.8" class="img-mask" src="../assets/freeSoftware.png" alt="">
                    <p
                        class="mt-3"
                    >
                        Software Livre
                    </p>
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
                        Com o diário eletrônico o professor gerencia de maneira 
                        eficiente as informações de aula, a frequência escolar e as 
                        notas dos alunos, economizando papel e otimizando seu tempo.
                    </p>
                </div>

                <div
                    class="contInsideCont"
                >
                    <div
                        class="img-container mb-5"
                    >
                        <img style="zoom: 0.8" class="img-mask" src="../assets/diary3.gif" alt="">
                        <p
                            class="mt-3"
                        >
                            Frequência escolar
                        </p>
                    </div>

                    <div
                        class="img-container"
                    >
                        <img style="zoom: 0.8" class="img-mask" src="../assets/diary3.gif" alt="">
                        <p
                            class="mt-3"
                        >
                            Notas dos alunos
                        </p>
                    </div>
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
                        Através da nossa Dashboard e dos relatórios consolidados 
                        o professor e a instituição conseguem visualizar informações 
                        sobre o desempenho dos alunos e turmas, além de agendas e 
                        calendário de avaliações.
                    </p>
                </div>


                    <div
                        class="img-container"
                    >
                        <img style="zoom: 0.8" class="img-mask" src="../assets/diary3.gif" alt="">
                        <p
                            class="mt-3"
                        >
                            Dashboard de Acompanhamento
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
    background: transparent;
}

.segment-text {
    font-size: 20px;
    line-height: 28px;
}

.img-mask {
    clip-path: polygon(0.4% 0.5%, 99.5% 0.5%, 99.5% 99.5%, 0.4% 99.5%);
}

.overflow-controller {
	max-height: 550px;
	overflow: scroll;
    overflow-x: hidden;
	margin-bottom: 50px;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.overflow-controller::-webkit-scrollbar {
    width: 0;
    background: transparent;
}

.resources-sections {
  scroll-snap-align: start;
}

#resources {
    margin-top: 150px;
    margin-bottom: 200px;
}
</style>
