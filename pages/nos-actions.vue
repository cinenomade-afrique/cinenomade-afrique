<script setup lang="ts">
  useHead({
    title: "Cine Nomade Afrique - Nos actions",
  });
</script>

<template>
  <section>
    <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
      <h1 class="text-5xl mt-14">Nos actions</h1>
      <div class="grid lg:grid-cols-2 lg:gap-4 mt-14">
        <div>
          <p class="mt-4">Ciné'Nomade Afrique est une association créée en 2022. Notre mission est de promouvoir le cinéma africain et de fournir une formation de qualité
            en création audiovisuelle, non seulement en Afrique, mais aussi à l'international. Nous nous engageons à donner aux jeunes et aux femmes de Guinée les outils et
            les opportunités pour s'exprimer à travers l'art du cinéma, et à rendre le cinéma accessible à tous, quel que soit leur milieu.
          </p>
          <p class="mt-4">
            Notre travail s'articule autour de notre initiative principale : le Festival Ciné'Nomade. Ce festival comprend plusieurs activités, dont le programme de formation Talents en court, les Rencontres Cinématographiques de Conakry (RCC) et le Cinéma Ambulant en Plein Air.
            Ces initiatives visent à encourager la créativité, l'éducation et l'émancipation sociale à travers le cinéma.
          </p>
        </div>
        <div class="max-lg:mt-4">
          <img src="@/assets/images/actions/tour-etape-guinee-cna.png" class="w-full rounded-lg shadow-lg dark:shadow-black/20" loading="lazy" alt="Ciné nomade Afrique" />
        </div>
      </div>
      <div class="flex justify-center mt-10">
        <div class="flex-col lg:max-w-[50rem]">
          <p>
            Nous sommes fiers de nos partenariats avec des organisations comme l'Usine à Films et le Cinéma Numérique Ambulant (CNA) du Mali, qui partagent notre vision et soutiennent notre mission.
          </p>
          <p class="mt-4">Chez Ciné'Nomade, nous croyons que le cinéma a le pouvoir de changer des vies, de stimuler le dialogue et de favoriser la compréhension culturelle. Nous vous invitons à vous joindre à nous dans notre mission de faire du cinéma un vecteur d'éducation et d'émancipation.</p>
        </div>
      </div>
    </div>
  </section>
</template>