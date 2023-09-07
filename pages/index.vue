<script setup lang="ts">
    useHead({
        title: 'Ciné Nomade Afrique',
        meta: [{
            name: 'description',
            content: 'Ciné Nomade Afrique.'
        }],
        bodyAttrs: {
            class: 'defaultBodyClass'
        }
    });
</script>

<template>
    <section>
        <div class="container my-14 mx-auto md:px-6 lg:px-12">
            <div class="container mx-auto text-center lg:text-left xl:px-32">
                <div class="grid items-center lg:grid-cols-2">
                    <div class="mb-12 lg:mb-0">
                        <div class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                            <h1 class="mb-8 text-3xl lg:text-5xl font-semibold">Ciné'Nomade Afrique</h1>
                            <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0 text-xl">
                                Ciné’nomade Afrique est une organisation à but non lucratif créée en 2021 par
                                deux réalisateurs franco-guinéens, Aïssa DIABY et Aboubacar Naby Camara. L’association
                                a pour objectif de favoriser un accès à la culture pour tous, à travers un féstival et d’un
                                cinéma ambulant en Afrique.
                            </p>

                            <p class="mb-0 text-neutral-500 dark:text-neutral-300 font-semibold text-xl">
                                Pour l'année 2023, Ciné'Nomade Afrique a prévu une
                                programmation ambitieuse qui promet d'offrir des expériences cinématographiques
                                inoubliables.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src="@/assets/images/phototheque/home-cna-picture.jpg"
                            class="w-full rounded-lg shadow-lg dark:shadow-black/20" loading="lazy" alt="Ciné nomade Afrique" />
                    </div>
                </div>
            </div>
        </div>

        <div class="var--video-container">
            <div class="background-radial-gradient container max-w-screen-xl mx-auto md:px-6">
                <div class="px-6 py-12 text-center lg:text-left">
                    <div class="container mx-auto">
                        <div class="grid items-center gap-12 lg:grid-cols-2">
                            <div class="mt-12 lg:mt-0">
                                <h1 class="mb-12 text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl">
                                    Un accès au Cinéma <br /><span class="text-green-cna">pour tous !</span>
                                </h1>
                                <p class="text-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Minima officia consequatur adipisci tenetur repudiandae rerum
                                    quos.
                                </p>
                            </div>
                            <div class="mb-12 lg:mb-0">
                                <Player />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .var--video-container {
        background: url(@/assets/images/bg-cna-image-1.png) no-repeat;
        background-size: cover;
    }
</style>