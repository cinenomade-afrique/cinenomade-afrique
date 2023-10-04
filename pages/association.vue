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
      text: "Aboubacar-Naby CAMARA est un artiste plasticien, réalisateur, médiateur culturel en collectivité et acteur associatif culturel franco-guinéen. Diplômé de l'École des Arts de l'Université Paris 1 Panthéon Sorbonne, il a obtenu une Licence et un Master en Art et Images du Vivant. En tant qu'artiste, Aboubacar-Naby explore divers médiums, tels que la photographie, la vidéo, l'installation et la sculpture. Il a co-réalisé le documentaire 'Welcome to Conakry' avec Aïcha Diaby pour promouvoir la capitale guinéenne. Son premier court-métrage 'Cum Laude' avec Bamar Kane, produit par Tribudom est sorti en 2023"
    },
    {
      id: 3,
      image: 'sidney-cadot-responsable-programmation.png',
      title: 'Sidney Cadot',
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
      text: "Diplômée du Celsa (une école française de communication et de journalisme qui fait partie de la Sorbonne), Anne a travaillé plusieurs années chez Google Arts & Culture en produisant des expériences numériques pour l'écosystème culturel (y compris le MET, le J. Paul Getty Museum, Carnegie Hall...) tout en affinant ses outils en tant que scénariste et réalisatrice. De 2016 à 2020, elle a écrit et réalisé 5 courts métrages pendant son temps libre. En 2018, elle a quitté Google pendant un an pour aider à créer et écrire VAMPIRES, une série originale Netflix. Elle a également rejoint LUPIN en tant que scénariste pour la saison 1."
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores assumenda dolor nihil nesciunt repudiandae?
                                    Temporibus commodi blanditiis repudiandae omnis tempore quas, illum debitis ducimus quibusdam est tenetur laboriosam quia!
                                </p>
                                <p class="mb-6">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores assumenda dolor nihil nesciunt repudiandae?
                                    Temporibus commodi blanditiis repudiandae omnis tempore quas, illum debitis ducimus quibusdam est tenetur laboriosam quia!
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