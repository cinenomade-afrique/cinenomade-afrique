<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - Nos partenaires",
    });
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
            <h1 class="text-5xl">Nos Partenaires</h1>

            <div class="container my-14 mx-auto">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex flex-wrap items-center">
                        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <img src="@/assets/images/cna-asset-image-1.png" alt="Trendy Pants and Shoes"
                            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Ils nous soutiennent
                                </h2>
                                <p class="mb-6">
                                    Ciné'Nomade Afrique est honoré de travailler en étroite collaboration avec le Ministère de la
                                    Culture en Guinée, un partenaire essentiel qui soutient notre mission et partage notre passion
                                    pour le cinéma africain.
                                    Leur soutien a été crucial pour le succès de nos initiatives.
                                </p>
                                <div class="md:flex md:justify-between pb-6">
                                    <div class="flex w-full md:w-2/3 flex-wrap">
                                        <div class="w-full p-1">
                                            <NuxtPicture
                                                format="avif,webp"
                                                src="/images/phototheque/partenaires-cna-pictures-2.jpg"
                                                loading="lazy"
                                                alt=""
                                                :imgAttrs="{class: 'block h-full w-full rounded-lg'}" />
                                        </div>
                                    </div>
                                    <div class="flex w-full md:w-2/3 flex-wrap">
                                        <div class="w-full p-1">
                                            <NuxtPicture
                                                format="avif,webp"
                                                src="/images/phototheque/partenaires-cna-pictures-1.jpg"
                                                loading="lazy"
                                                alt=""
                                                :imgAttrs="{class: 'block h-full w-full rounded-lg'}" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Slider />

        <div class="background-1">
            <div class="container max-w-screen-xl mx-auto px-5 md:px-10 py-14">
                <h2 class="text-2xl text-left lg:text-center mb-14 font-semibold">Vous aussi rejoignez-nous pour écrire l’aventure avec nous !</h2>
                <div class="flex flex-col lg:flex-row lg:divide-x divide-slate-400">
                    <div class="lg:pr-9 lg:w-2/4">
                        <ul>
                            <li class="mb-3">
                                <span class="font-bold">Starter Production :</span><br>
                                Une entreprise de production audiovisuelle à qui nous avons fait confiance pour la
                                captation institutionnelle de notre action et du documentaire.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">L'Association Malienne du Cinéma Numérique Ambulant (CNA Mali)
                                    :</span><br>
                                Partenaire logistique, le CNA Mali et son équipe expérimentée nous ont aidé dans la mise
                                en place logistique des projections à l’aide de leurs unités mobiles de projections.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">Office National du Cinéma Guinéen (ONACIG) :</span><br>
                                Ils nous ont facilité l'obtention d'autorisation de tournage.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">Fonds de Développement des Arts et de la Culture (FODAC)
                                    :</span><br>
                                Partenaire logistique.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">Atelier de l’usine à film amateurs de Michel Gondry :</span><br>
                                L'Association de l'Usine de films amateurs est une structure imaginée par le réalisateur français Michel Gondry,
                                elle promeut l'accès à la culture cinématographique via des ateliers itinérants de réalisation de films.
                                Depuis 2011, elle a permis à 60 000 participants dans 13 pays de réaliser 4500 films. Pour le cinéma ambulant,
                                l'Usine propose des ateliers nomades utilisant les décors locaux, afin de favoriser l'expression par l'image des populations rurales.
                            </li>
                        </ul>
                    </div>
                    <div class="lg:pl-5 mt-5 lg:mt-0 lg:w-2/4">
                        <ul>
                            <li class="mb-3">
                                <span class="font-bold">Centre Culturel Franco-Guinéen / Institut Français :</span><br>
                                Ils nous ont facilité l’accès à son catalogue de films que nous souhaitions projeter :
                                Akissi et le Ballon d’or.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">YMO :</span><br>
                                Un des premiers sponsors qui nous a fait confiance. YMO révolutionne le paiement digital
                                en Afrique et pour sa diaspora.
                                Fondation Orange : Sponsor et partenaire communication par l’intermédiaire de
                                notifications pushs au niveau national.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">SaKom :</span><br>
                                Sponsor et partenaire. SaKom est un cabinet de conseil en communication, marketing et
                                événementiel, basé à Conakry en République de Guinée, qui accompagne les entreprises,
                                ONG.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">Enabel :</span><br>
                                Enabel nous apporte son soutien à travers des dispositifs comme Guinée créative”.
                                Financé par l’Union européenne et mis en oeuvre par Enabel cette initiative vise à
                                renforcer
                                les capacités des entrepreneurs culturels de Guinée.
                            </li>
                            <li class="mb-3">
                                <span class="font-bold">Office National du Tourisme de Guinée (ONT) :</span><br>
                                Ils nous ont facilité dans l’aspect opérationnel et logistique en nous facilitant
                                l'obtention d’un véhicule et en mettant à notre
                                disposition ses agents.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>