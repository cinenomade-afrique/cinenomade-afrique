<template>
    <div class="card">
        <img v-bind:src="'/assets/' + image" alt="card thumb" class="w-full">
        <div class="px-6 py-4">
            <p class="font-bold text-xl mb-2">{{ title }}</p>
            <p class="text-gray-700 text-base">{{ text }}</p>
        </div>
    </div>
</template>

<script setup>
    const { card } = defineProps({
        image: String,
        title: String,
        text: String,
    })
</script>

<style scoped>

</style>