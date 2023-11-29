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
    <section class="container my-14 mx-auto md:px-6 lg:px-12">
        <div class="container mx-auto text-center lg:text-left xl:px-32">
            <div class="grid items-center lg:grid-cols-2">
                <div class="mb-12 lg:mb-0">
                    <div
                        class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                        <h1 class="mb-8 text-3xl lg:text-5xl font-semibold">Ciné'Nomade Afrique</h1>
                        <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0 text-xl">
                            Ciné’nomade Afrique est une organisation à but non lucratif créée en 2021 par
                            deux réalisateurs franco-guinéens, Aïssa DIABY et Aboubacar Naby Camara. L’association
                            à pour objectif de favoriser un accès à la culture pour tous, à travers un féstival et d’un
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
                    <NuxtPicture
                        format="avif,webp"
                        src="/images/phototheque/home-cna-picture.jpg"
                        loading="lazy"
                        alt="Ciné nomade Afrique"
                        :imgAttrs="{class: 'w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
                </div>
            </div>
        </div>
    </section>

    <section class="background-1 mt-14">
        <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
            <div class="py-10 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                <div class="flex-col lg:max-w-[35rem]">
                    <NuxtPicture
                        format="avif,webp"
                        src="/images/festival/festival-cine-nomade-2023.jpg"
                        loading="lazy"
                        alt="Festival Ciné'Nomade Afrique 2023"
                        :imgAttrs="{class: 'w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
                </div>
                <div class="pt-8 md:pt-0 text-center">
                    <h2 class="mb-8 text-3xl font-semibold leading-tight">Accédez à nos formulaires d'accréditations !</h2>
                    <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <a href="https://docs.google.com/forms/d/1xyVKxGh2vDqJ1kBVpiGT44eftneFMrASF-RpMHnC1Lc/edit?usp=drivesdk" class="mb-4 inline-block rounded-full bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" target="_blank">Formulaire d'accréditation - Participants</a>
                        <a href="https://docs.google.com/forms/d/1yf08JJrtYV2Hu6IB2_UaFGr8ppbZLBGMAuRPjmztaPE/edit?usp=drivesdk" class="inline-block rounded-full bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]" target="_blank">Formulaire d'accréditation - Journalistes</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="var--video-container">
        <div class="background-radial-gradient container max-w-screen-xl mx-auto md:px-6">
            <div class="px-6 py-12 text-center lg:text-left">
                <div class="container mx-auto">
                    <div class="grid items-center gap-12 lg:grid-cols-2">
                        <div class="mt-12 lg:mt-0">
                            <h1 class="mb-12 text-5xl font-semibold tracking-tight md:text-6xl xl:text-7xl text-sky-800">
                                Un accès au Cinéma <br />pour tous !
                            </h1>
                        </div>
                        <div class="mb-12 lg:mb-0">
                            <Player />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .var--video-container {
        background: url(@/assets/images/bg-cna-image-1.png) no-repeat;
        background-size: cover;
    }
</style>