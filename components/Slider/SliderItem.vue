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
              v-bind:src="'/images/partenaires/' + image + '.jpg'"
              :alt="`${image}`" />
    </li>
</template>

