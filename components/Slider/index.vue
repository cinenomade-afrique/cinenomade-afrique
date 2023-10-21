<script setup>
    import Glide from '@glidejs/glide';

    onMounted(() => {
        const glideClass = document.querySelectorAll('.glide');
        const glideConfig = {
            type: 'carousel',
            touchAngle: 45,
            touchRatio: 0.5,
            focusAt: 'center',
            autoplay: 2000,
            gap: 30,
            startAt: 1,
            perView: 5,
            animationDuration: 800
        }

        for (let el of glideClass) {
            new Glide(el, glideConfig).mount();
        }
    });

    const sliderItemData = ref([{
        id: 1,
        image: 'cinema-pleine-air-jour-cna.jpg'
    },
    {
        id: 2,
        image: 'cinema-pleine-air-nuit-cna-2.jpg'
    },
    {
        id: 3,
        image: 'cinema-pleine-air-nuit-cna.jpg'
    },
    {
        id: 4,
        image: 'tour-etape-guinee-cna.png'
    },
    {
        id: 5,
        image: 'cinema-pleine-air-jour-cna.jpg'
    },
])
</script>

<template>
    <div>
        <div class="glide">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                    <SliderItem v-for="sliderItem in sliderItemData"
                        :key="sliderItem.id"
                        :image="sliderItem.image"
                     />
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@glidejs/glide/dist/css/glide.core.min.css';
</style>