<script setup lang="ts">
  useHead({
    title: "Cine Nomade Afrique - Nos actions",
  });

  const cardData = ref([{
      id: 1,
      image: 'partenaires-cna-pictures-1.jpg',
      title: 'Action 2022',
      text: 'test test test'
    },
    {
      id: 2,
      image: 'partenaires-cna-pictures-2.jpg',
      title: 'Action 2023',
      text: 'test test test'
    }
  ])
</script>

<template>
  <section>
    <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
      <h1 class="text-5xl mt-14">Nos actions Page</h1>
      <div class="flex my-14">

      </div>
    </div>
  </section>
</template>