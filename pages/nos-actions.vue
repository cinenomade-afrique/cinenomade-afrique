<script setup lang="ts">
  useHead({
    title: "Cine Nomade Afrique - Nos actions",
  });
</script>

<template>
  <section>
    <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
      <h1 class="text-5xl mt-14">Nos actions</h1>
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
                    Titre
                  </h2>
                  <p class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                      stroke="currentColor" class="mr-2 h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                    </svg>
                    Sous titre
                  </p>
                  <p class="mb-6">
                    Ciné'Nomade Afrique est une association créée en 2022. Notre mission est de promouvoir le
                    cinéma africain et de fournir une formation de qualité
                    en création audiovisuelle, non seulement en Afrique, mais aussi à l'international. Nous nous engageons à
                    donner aux jeunes et aux femmes de Guinée les outils et
                    les opportunités pour s'exprimer à travers l'art du cinéma, et à rendre le cinéma accessible à tous, quel
                    que soit leur milieu.
                  </p>
                  <p class="mb-6">
                    Notre travail s'articule autour de notre initiative principale : le Festival Ciné'Nomade. Ce festival
                    comprend plusieurs activités, dont le programme de formation Talents en court, les Rencontres
                    Cinématographiques de Conakry (RCC) et le Cinéma Ambulant en Plein Air.
                    Ces initiatives visent à encourager la créativité, l'éducation et l'émancipation sociale à travers le
                    cinéma.
                  </p>
                  <p>
                    Nous sommes fiers de nos partenariats avec des organisations comme l'Usine à Films et le Cinéma Numérique
                    Ambulant (CNA) du Mali, qui partagent notre vision et soutiennent notre mission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="background-1">
      <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
        <div class="flex justify-center py-10">
          <div class="flex-col lg:max-w-[50rem]">
            <p class="mb-4">Chez Ciné'Nomade, nous croyons que le cinéma a le pouvoir de changer des vies, de stimuler le
            dialogue et de favoriser la compréhension culturelle. Nous vous invitons à vous joindre à nous dans notre
            mission de faire du cinéma un vecteur d'éducation et d'émancipation.</p>
            <img src="images/actions/cinema-pleine-air-nuit-cna.jpg"
              class="w-full rounded-lg shadow-lg dark:shadow-black/20" loading="lazy" alt="Ciné nomade Afrique" />
          </div>
        </div>
      </div>
    </div>

    <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
      <div class="flex justify-center mt-10">
        <div class="flex-col lg:max-w-[50rem]">
          <h2 class="mb-4 text-2xl font-bold">
            Chronologie de nos actions
          </h2>
          <TimeLine />
        </div>
      </div>
    </div>
  </section>
</template>