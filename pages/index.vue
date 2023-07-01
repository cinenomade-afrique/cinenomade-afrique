<script setup lang="ts">
    useHead({
        title: 'Cine Nomade Afrique',
        meta: [
            { name: 'description', content: 'Cine Nomade Afrique.' }
        ],
        bodyAttrs: {
            class: 'defaultBodyClass'
        }
    });
</script>

<template>
    <div>
        <h1>Home Page</h1>
        <img src="@/assets/vite.svg" alt="" />
        <div class="text-green-700 text-xl">Hello, from TailwindCSS!</div>
    </div>
</template>