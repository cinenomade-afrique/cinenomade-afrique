<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - Cinéma Ambulant",
    });
</script>

<template>
    <section class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
        <h1 class="text-5xl mt-14">Le Cinéma Ambulant</h1>
        <div class="container my-14 mx-auto">
            <p class="text-2xl font-bold mb-6">
                LUNDI 4 DÉCEMBRE au mardi 12 décembre 2023
                Cinéma ambulant guinée maritime X Usine de films amateurs de Michel Gondry X ¨Phoenix Vision
            </p>

            <p class="mb-6">
                Cette année le Cinéma Ambulant passera par Dubréka, Bel Air, Boké Ville, Kindia. En partenariat avec
                l'association l’usine de films amateurs Phoenix Vision et le CNA du Mali.
                Lauréat de l’appel à projet Accès culture.
            </p>

            <ul class="mb-6 list-inside list-disc">
                <li>Offrir l'expérience du cinéma grand écran au plus grand nombre avec le Cinéma Ambulant.</li>
                <li>Réaliser des court-métrages en groupe et en 3h avec les Ateliers de L'Usine de Films amateurs de
                    Michel Gondry.</li>
                <li>Se former aux métiers du cinéma avec l'association Phoenix Vision.</li>
            </ul>

            <NuxtPicture format="avif,webp" src="/images/festival/atelier-usine-film-cinenomade-afrique.jpg"
                loading="lazy" alt="Atelier de l'usine amateurs - Cinénomade Afrique"
                :imgAttrs="{class: 'mb-6 w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
        </div>
    </section>

    <section class="background-1 mt-14">
        <div class="container max-w-screen-xl mx-auto px-5 md:px-10 py-14">
            <h2 class="text-2xl text-left lg:text-center font-semibold">Projection en plein air de 12 films</h2>
            <div class="container my-14 mx-auto">
                <div class="grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                    <div class="flex-col lg:max-w-[35rem]">
                        <NuxtPicture format="avif,webp" src="/images/festival/usine-films-amateurs.png" loading="lazy"
                            alt="Festival Ciné'Nomade Afrique 2023"
                            :imgAttrs="{class: 'w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
                    </div>
                    <div class="pt-8 md:pt-0">
                        <p class="lg:text-xl mb-6">L’association de l'Usine de films amateurs est une structure imaginée par le réalisateur français
                            Michel Gondry, elle promeut l'accès à la culture cinématographique via des ateliers itinérants
                            de réalisation de films. Depuis 2011, elle a permis à 60 000 participants de 13 pays différents
                            de réaliser 4500 films. Pour le cinéma ambulant, l'Usine à films propose des ateliers nomades
                            utilisant les décors locaux, afin de favoriser l'expression par l'image des populations rurales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>