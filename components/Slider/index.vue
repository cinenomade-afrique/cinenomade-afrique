<script setup>
    import Glide from '@glidejs/glide';

    onMounted(() => {
        const glideClass = document.querySelectorAll('.glide');
        const glideConfig = {
            type: 'carousel',
            touchAngle: 45,
            touchRatio: 0.5,
            focusAt: 'center',
            autoplay: 1500,
            gap: 30,
            startAt: 1,
            perView: 7,
            breakpoints: {
                1024: {
                    perView: 5
                },
                768: {
                    perView: 3
                },
                480: {
                    perView: 2
                },
            },
            animationDuration: 800
        }

        for (let el of glideClass) {
            new Glide(el, glideConfig).mount();
        }
    });

    const sliderItemData = ref([{
            id: 1,
            image: 'logo-RG.jpg'
        },
        {
            id: 2,
            image: 'logo-acces-culture.jpg'
        },
        {
            id: 3,
            image: 'logo-afd.jpg'
        },
        {
            id: 4,
            image: 'logo-air-france.jpg'
        },
        {
            id: 5,
            image: 'logo-architecture-by-issa-event.jpg'
        },
        {
            id: 6,
            image: 'logo-branding-guinee.jpg'
        },
        {
            id: 7,
            image: 'logo-brut.jpg'
        },
        {
            id: 8,
            image: 'logo-canal-plus.jpg'
        },
        {
            id: 9,
            image: 'logo-centre-culturel-franco-guineen.jpg'
        },
        {
            id: 10,
            image: 'logo-espace-tv.jpg'
        },
        {
            id: 11,
            image: 'logo-f24.jpg'
        },
        {
            id: 12,
            image: 'logo-fondation-orange.jpg'
        },
        {
            id: 13,
            image: 'logo-girl-support-girls.jpg'
        },
        {
            id: 14,
            image: 'logo-harmattan-guinee.jpg'
        },
        {
            id: 15,
            image: 'logo-institut-francais.jpg'
        },
        {
            id: 16,
            image: 'logo-mansa.jpg'
        },
        {
            id: 17,
            image: 'logo-ministere-culture-france.jpg'
        },
        {
            id: 18,
            image: 'logo-office-national-tourisme.jpg'
        },
        {
            id: 19,
            image: 'logo-palabres-consulting.jpg'
        },
        {
            id: 20,
            image: 'logo-palm-camayenne.jpg'
        },
        {
            id: 21,
            image: 'logo-phoenix-vision.jpg'
        },
        {
            id: 22,
            image: 'logo-pnud.jpg'
        },
        {
            id: 23,
            image: 'logo-raj-cie.jpg'
        },
        {
            id: 24,
            image: 'logo-reporter-horizon.jpg'
        },
        {
            id: 25,
            image: 'logo-rtg.jpg'
        },
        {
            id: 26,
            image: 'logo-sabou-cine-talents.jpg'
        },
        {
            id: 27,
            image: 'logo-saboutech.jpg'
        },
        {
            id: 28,
            image: 'logo-sakom.jpg'
        },
        {
            id: 29,
            image: 'logo-sobragui.jpg'
        },
        {
            id: 30,
            image: 'logo-tv5-monde.jpg'
        },
        {
            id: 31,
            image: 'logo-upendo.jpg'
        },
        {
            id: 32,
            image: 'logo-usine-fil-amateur.jpg'
        }
    ])
</script>

<template>
    <div class="glide pt-4 pb-14">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <SliderItem v-for="sliderItem in sliderItemData" :key="sliderItem.id" :image="sliderItem.image" />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@glidejs/glide/dist/css/glide.core.min.css';
</style>