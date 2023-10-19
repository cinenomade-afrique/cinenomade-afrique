<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - L'association",
    });

    const cardModalData = ref([{
      id: 1,
      image: 'aissa-diaby-presidente.png',
      title: 'Aïssa DIABY',
      subTitle: 'Présidente de l’Association & Coordinatrice générale',
      idLabel: 'team1',
      text: "Aïssa Diaby est une réalisatrice et scénariste Franco-guinéenne de 29 ans, diplômée d’un Master d’études Internationales et Européennes à Sciences Po Grenoble. Aïssa a occupé plusieurs postes au sein des institutions internationales et de la fonction d'État en France. Elle a notamment travaillé en République de Guinée en tant que Vice commissaire en charge du programme de l’UNESCO “Conakry World Book Capital 2017”, puis elle a été nommée Responsable de la salle de cinéma CanalOlympia Kaloum avant de retourner en France et occuper la fonction de correspondante communication et chargée de mission au Ministère de l’intérieur à Paris. Parallèlement à sa carrière professionnelle Aïssa s’est formée au métier de la création audiovisuelle et cinématographique."
    },
    {
      id: 2,
      image: 'naby-camara-responsable-administratif.png',
      title: 'Aboubacar-Naby CAMARA',
      subTitle: 'Responsable Admnistratif',
      idLabel: 'team2',
      text: "Aboubacar-Naby Camara est un artiste plasticien, réalisateur et médiateur culturel franco-guinéen. Diplômé en art et images du vivant de l'École des Arts de l'Université Paris 1 Panthéon Sorbonne, il explore divers médiums tels que la photo, la vidéo et l'installation. Il a co-réalisé le documentaire 'Welcome to Conakry' et son premier court-métrage 'Cum Laude' est sorti en 2023. C'est également un acteur associatif culturel et le cofondateur de l'association Ciné'nomade Afrique."
    },
    {
      id: 3,
      image: 'sidney-cadot-responsable-programmation.png',
      title: 'Sidney Cadot-Sambosi',
      subTitle: 'Responsable de la programation',
      idLabel: 'team3',
      text: "Sidney CADOT-SAMBOSI est comédienne et critique de cinéma. Elle investit le champ de la création cinématographique et théâtral à travers ses rencontres (Dieudonné Niangouna, Jean-Yves Ruf, Jean-Pierre Bekolo, Nelson Makengo entre autres). De ses études de philosophie à Paris, elle retiendra cette expression de Gilles Deleuze qui préconise 'd'avoir toujours un petit morceau d'une nouvelle terre'."
    },
    {
      id: 4,
      image: 'anne-cisse-responsable-developpement.png',
      title: 'Anné Cissé',
      subTitle: 'Résponsable dévelopement',
      idLabel: 'team4',
      text: "Scénariste et réalisatrice franco-guinéenne, Anne Cissé s'est distinguée en co-réalisant le documentaire Salam, sélectionné à Cannes en 2022. Au sein de productions Netflix Original, elle a participé aux scripts de séries à succès comme Vampires et Lupin."
    },
    {
      id: 5,
      image: 'assita-gassama-tasta-coordinatrice.png',
      title: 'Assita GASSAMA (Tasta)',
      subTitle: 'Coordinatrice logistique et événementielle',
      idLabel: 'team5',
      text: "Tasta Gassama est une professionnelle accomplie dans le domaine du business et de l'événementiel. Franco-guinéenne, elle a su mettre à profit sa double culture pour développer une vision unique et une approche innovante dans son travail. Son professionnalisme et son dévouement sont largement reconnus dans le secteur."
    }
  ])
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
            <h1 class="text-5xl mt-14">L'Association</h1>
            <div class="container my-14 mx-auto">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div class="flex flex-wrap items-center">
                        <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                            <img src="@/assets/images/cna-asset-image-4.png" alt="Trendy Pants and Shoes"
                            class="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                        </div>
                        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                            <div class="px-6 py-12 md:px-12">
                                <h2 class="mb-4 text-2xl font-bold">
                                    Notre histoire
                                </h2>
                                <p class="mb-6">
                                    Ciné'Nomade Afrique est une association créée en 2022. Notre mission est de promouvoir le cinéma africain et de fournir une formation de qualité en création audiovisuelle, non seulement en Afrique, mais aussi à l'international.
                                    Nous nous engageons à donner aux jeunes et aux femmes de Guinée les outils et les opportunités pour s'exprimer à travers l'art du cinéma, et à rendre le cinéma accessible à tous.
                                </p>
                                <p class="mb-6">
                                    Notre équipe internationale est composée de réalisatrices de réalisateurs et de professionnels du milieu associatif de la gestion de projet socioculturel et événementiel. Nous travaillons également avec de nombreux bénévoles. dotés d’une bonne connaissance du projet, ils ont su nous aider dans la logistique, la mobilisation et l’animation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="background-1 mt-14">
            <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
                <h2 class="text-2xl text-center pt-14">L'Équipe de Ciné'Nomade Afrique</h2>
                <div class="lg:max-w-[60rem] m-auto">
                    <div class="grid md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-3 justify-center mt-14">
                        <CardModal v-for="cardModal in cardModalData"
                            :key="cardModal.id"
                            :idLabel="cardModal.idLabel"
                            v-bind:id="cardModal.id"
                            :title="cardModal.title"
                            :subTitle="cardModal.subTitle"
                            :image="cardModal.image"
                            :text="cardModal.text" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>