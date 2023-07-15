<script setup lang="ts">
    useHead({
        title: "Cine Nomade Afrique - L'équipe",
    });

    const cardData = ref([{
            id: 1,
            image: 'vite.svg',
            title: 'My journey with Vue',
            text: 'test test test'
        },
        {
            id: 2,
            image: 'vite.svg',
            title: 'Blogging with Vue',
            text: 'test test test'
        },
        {
            id: 3,
            image: 'vite.svg',
            title: 'Why Vue is so fun',
            text: 'test test test'
        }
    ])
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto px-5">
            <h1 class="text-5xl mt-14">Notre Équipe Page</h1>
            <Card v-for="card in cardData" :key="card.id" :title="card.title" :text="card.text" :image="card.image" />
        </div>
    </section>
</template>