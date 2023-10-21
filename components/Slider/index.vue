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
        text: '1'
    },
    {
        id: 2,
        text: '2'
    },
    {
        id: 3,
        text: '3'
    },
    {
        id: 4,
        text: '4'
    },
    {
        id: 5,
        text: '5'
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
                        :text="sliderItem.text"
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