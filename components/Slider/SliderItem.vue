<script>
    export default {
        name: "SliderItem",
        props: {
            id: Number,
            text: String
        }
    };
</script>

<template>
    <li class="glide__slide">
        {{ text  }}
    </li>
</template>

