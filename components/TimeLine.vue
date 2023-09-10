<script>
    export default {
        name: "Timeline",
        mounted: async function () {
            const {
                Lightbox,
                Ripple,
                initTE,
            } = await import("tw-elements");

            initTE({
                Lightbox,
                Ripple
            });
        }
    };
</script>

<template>
    <div class="mt-14">
        <ol class="border-l-2 border-red-500 dark:border-red-500">
            <li>
                <div class="flex-start flex items-center">
                    <div
                        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 dark:bg-red-500">
                    </div>
                    <h4 class="-mt-2 text-xl font-semibold">Action 2022</h4>
                </div>
                <div data-te-lightbox-init class="mb-6 ml-6 pb-6">
                    <a href="#!" class="text-sm text-red-500 transition duration-150 ease-in-out">
                        2022</a>
                    <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
                        En 2022, nous avons concentré nos efforts sur notre tournée de cinéma ambulant.
                        Cette initiative a sillonné toutes les régions de Guinée touchant au passage pres de 2000
                        personnes.
                    </p>
                    <p class="mb-4">Cette tournée a permis à un public plus large d'accéder à des films inspirants comme
                        "Douleur silencieuse",
                        et a suscité des discussions importantes autour des thèmes abordés dans ces films.
                    </p>
                    <div class="md:flex md:justify-between">
                        <div class="flex w-full md:w-2/3 flex-wrap">
                            <div class="w-full p-1">
                                <NuxtPicture
                                    format="avif,webp"
                                    src="/images/actions/cinema-pleine-air-jour-cna.jpg"
                                    loading="lazy"
                                    alt="a"
                                    :imgAttrs="{
                                        class: 'block h-full w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto',
                                        'data-te-img':'/images/actions/cinema-pleine-air-jour-cna.jpg'}" />
                            </div>
                        </div>
                        <div class="flex w-full md:w-2/3 flex-wrap">
                            <div class="w-full p-1">
                                <NuxtPicture
                                    format="avif,webp"
                                    src="/images/actions/cinema-pleine-air-nuit-cna.jpg"
                                    loading="lazy"
                                    alt="b"
                                    :imgAttrs="{
                                        class: 'block h-full w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto',
                                        'data-te-img':'/images/actions/cinema-pleine-air-nuit-cna.jpg'}" />
                            </div>
                        </div>
                    </div>
                    <div class="md:flex md:justify-between">
                        <div class="flex w-full md:w-2/3 flex-wrap">
                            <div class="w-full p-1">
                                <NuxtPicture
                                    format="avif,webp"
                                    src="/images/actions/cinema-pleine-air-nuit-cna-2.jpg"
                                    loading="lazy"
                                    alt="c"
                                    :imgAttrs="{
                                        class: 'block h-full w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto',
                                        'data-te-img':'/images/actions/cinema-pleine-air-nuit-cna-2.jpg'}" />
                            </div>
                        </div>
                        <div class="flex w-full md:w-2/3 flex-wrap">
                            <div class="w-full p-1">
                                <NuxtPicture
                                    format="avif,webp"
                                    src="/images/actions/tour-etape-guinee-cna.png"
                                    loading="lazy"
                                    alt="d"
                                    :imgAttrs="{
                                        class: 'block h-full w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto',
                                        'data-te-img':'/images/actions/tour-etape-guinee-cna.png'}" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div class="flex-start flex items-center">
                    <div
                        class="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 dark:bg-red-500">
                    </div>
                    <h4 class="-mt-2 text-xl font-semibold">Action 2023</h4>
                </div>
                <div class="mb-6 ml-6 pb-6">
                    <a href="#!" class="text-sm text-red-500 transition duration-150 ease-in-out">
                        2023</a>
                    <p class="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
                        Pour 2023, nous avons prévu une programmation encore plus ambitieuse. En plus de continuer notre
                        tournée de cinéma ambulant à travers la Guinée Maritime,
                        nous organiserons également notre festival de cinéma. Ce festival mettra en lumière les
                        meilleures œuvres du cinéma africain produites en 2022 et 2023,
                        ainsi que des classiques du cinéma panafricain. Nous prévoyons également d'ajouter de nouvelles
                        destinations à notre tournée de cinéma ambulant,
                        afin de toucher encore plus de personnes.
                    </p>
                    <p class="mb-4">
                        Nous sommes impatients de partager ces films et ces expériences avec vous.
                        Consultez notre programme pour plus d'informations sur les films, les réalisateurs, les lieux et
                        les horaires.
                    </p>
                </div>
            </li>
        </ol>
    </div>
</template>