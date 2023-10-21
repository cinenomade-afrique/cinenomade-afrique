<script>
    export default {
        name: "SliderItem",
        props: {
            id: Number,
            image: String
        }
    };
</script>

<template>
    <li class="glide__slide">

        <NuxtPicture
              format="avif,webp"
              v-bind:src="'/images/actions/' + image"
              loading="lazy" />
    </li>
</template>

