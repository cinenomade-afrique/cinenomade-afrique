<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - La formation",
    });
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
            <h1 class="text-5xl mt-14">La Formation</h1>
            <div class="container my-14 mx-auto">
                <div class="mb-14">
                    <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex flex-wrap items-center">
                        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <img src="@/assets/images/cna-asset-image-2.png" alt="Trendy Pants and Shoes"
                            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Ciné’Sabou Talents
                                </h2>
                                <p class="mb-6 flex items-center font-bold uppercase text-green-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                        class="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                                    </svg>
                                    SABOUTECH
                                </p>
                                <p class="mb-6">
                                    <span class="font-semibold">SABOU</span> signifie, en dialectes soussou, peulh et malinké, le « coup de main », le « coup de pouce », et plus généralement l’entraide.
                                    L’incubateur SABOUTECH a pour vocation de donner ce coup de main aux jeunes entreprises guinéennes, les accompagner et favoriser la création et le développement d’entreprises innovantes en Guinée dans les domaines des TIC, ICC, énergies renouvelables et environnement.
                                </p>
                                <div class="md:flex md:justify-between max-w-[20rem] pb-6">
                                    <div class="flex flex-col lg:flex-wrap">
                                        <NuxtPicture
                                                format="avif,webp"
                                                src="/images/formation/saboutech-logo.jpg"
                                                loading="lazy"
                                                alt=""
                                                :imgAttrs="{class: 'block h-full w-full rounded-lg'}" />
                                    </div>
                                    <div class="flex flex-col lg:flex-wrap">
                                        <NuxtPicture
                                                format="avif,webp"
                                                src="/images/formation/sabou-cine-talents-logo.png"
                                                loading="lazy"
                                                alt=""
                                                :imgAttrs="{class: 'block h-full w-full rounded-lg'}" />
                                    </div>
                                </div>
                                <p>
                                    L’incubateur est un espace privilégié et un environnement stimulant, dédié à la création, au développement et à la croissance d’entreprises prospères, dédié aux Guinéen.nes
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <!-- Section: Design Block -->
                <div class="mb-14 text-center md:text-left">
                    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div class="mb-6 md:mb-0">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                    <NuxtPicture
                                        format="avif,webp"
                                        src="/images/formation/cna-saboutech-formation-2.jpg"
                                        loading="lazy"
                                        alt="cna-saboutech-formation-1"
                                        :imgAttrs="{class: 'w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'}" />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 class="mb-3 text-2xl font-bold">Sabou’Ciné Talents : former les talents de demain</h3>
                            <p class="mb-4">
                                Né d’un partenariat entre Ciné Nomade Afrique et la Sabou Tech, Sabou Ciné’ Talent est un programme d’un an qui permet à 12 jeunes cinéastes guinéen.ne.s d’être formé.es à Conakry, en Guinée,
                                par des professionnels du cinéma et de l’audiovisuel. L’objectif de la formation est de réaliser un court-métrage dans des conditions professionnelles. Anne Cissé, réalisatrice et scénariste en France et aux Etats-Unis, est la marraine de ce programme.
                            </p>
                            <p class="text-orange-cna">Où aura lieu le programme Sabou Ciné’ Talents 2023 ?</p>
                            <p>Sabou Ciné Talents se tiendra dans les locaux de la Saboutech à Dixinn, Conakry, Guinée.</p>
                        </div>
                    </div>

                    <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                        <div class="mb-6 md:order-2 md:mb-0">
                            <div class="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                data-te-ripple-init data-te-ripple-color="light">
                                <NuxtPicture
                                    format="avif,webp"
                                    src="/images/formation/cna-saboutech-formation-1.jpg"
                                    loading="lazy"
                                    alt="cna-saboutech-formation-1"
                                    :imgAttrs="{class: 'w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'}" />
                                <a href="#!">
                                    <div
                                        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="md:order-1">
                            <h3 class="mb-3 text-2xl font-bold">Quand aura lieu le programme Sabou Ciné’ Talents&nbsp;?</h3>
                            <p class="mb-4">
                                Le programme s’étalera sur l’année 2024 et sera constitué de plusieurs modules de formation. Vous devrez impérativement vous rendre disponible pour chacun des modules de formation. Un programme détaillé vous sera envoyé en cas de sélection. 
                            </p>
                            <p class="text-orange-cna">Est-ce que le programme Sabou Ciné’ Talents est gratuit ?</p>
                            <p>Les modules de formation Sabou Ciné Talents sont entièrement pris en charge. Seuls les frais de vie à Conakry sont à la charge des participants.</p>
                        </div>
                    </div>
                </div>
                <!-- Section: Design Block -->
            </div>
        </div>
    </section>
</template>