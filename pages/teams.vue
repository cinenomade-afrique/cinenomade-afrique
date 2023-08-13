<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - L'équipe",
    });

    const cardData = ref([{
      id: 1,
      image: 'partenaires-cna-pictures-1.jpg',
      title: 'Aïssa DIABY',
      text: 'Présidente de l’Association & Coordinatrice générale'
    },
    {
      id: 2,
      image: 'partenaires-cna-pictures-2.jpg',
      title: 'Aboubacar-Naby CAMARA',
      text: 'Responsable Admnistratif'
    },
    {
      id: 3,
      image: 'partenaires-cna-pictures-1.jpg',
      title: 'Sidney Cadot',
      text: 'Responsable de la programation'
    },
    {
      id: 4,
      image: 'partenaires-cna-pictures-2.jpg',
      title: 'Anné Cissé',
      text: 'Résponsable dévelopement'
    },
    {
      id: 5,
      image: 'partenaires-cna-pictures-1.jpg',
      title: 'Assita GASSAMA (Tasta)',
      text: 'Coordinatrice logistique et événementielle'
    }
  ])
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
            <h1 class="text-5xl mt-14">Notre Équipe</h1>
            <div class="grid grid-cols-3 gap-3 my-14">
                <Cards v-for="card in cardData" :key="card.id" :title="card.title" :text="card.text" :image="card.image" />
            </div>
        </div>
    </section>
</template>