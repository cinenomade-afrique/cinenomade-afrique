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
        <div class="container max-w-screen-xl mx-auto my-14 px-5">
            <h1 class="text-5xl">Ciné'Nomade Afrique</h1>
            <div class="flex flex-col lg:flex-row my-8">
                <div class="lg:pr-9">
                    <p class="text-xl">
                        Ciné’nomade Afrique est une organisation à but non lucratif créée en 2021 par
                        deux réalisateurs franco-guinéens, Aïssa DIABY et Aboubacar Naby Camara. L’association
                        a pour objectif de favoriser un accès à la culture pour tous, à travers un féstival et d’un
                        cinéma ambulant en Afrique.
                    </p>
                    <p class="text-xl font-bold mt-5 mb-5 lg:mb-0">
                        Pour l'année 2023, Ciné'Nomade Afrique a prévu une
                        programmation ambitieuse qui promet d'offrir des expériences cinématographiques
                        inoubliables.
                    </p>
                    <div class="py-14">
                        <Player />
                    </div>
                </div>
                <div>
                    <img src="@/assets/images/phototheque/home-cna-picture.jpg" alt="Ciné nomade Afrique" loading="lazy" />
                </div>
            </div>
        </div>
        <!-- <div class="background-1">
            <div class="container max-w-screen-xl mx-auto px-5 py-14">
                <Player />
            </div>
        </div> -->
    </section>
</template>