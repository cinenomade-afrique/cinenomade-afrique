<script setup lang="ts">
    useHead({
        title: 'Cine Nomade Afrique',
        meta: [{
            name: 'description',
            content: 'Cine Nomade Afrique.'
        }],
        bodyAttrs: {
            class: 'defaultBodyClass'
        }
    });
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto px-5">
            <h1 class="text-5xl mt-14">Ciné Nomade Afrique</h1>
            <img src="@/assets/vite.svg" alt="" />
        </div>
    </section>
</template>