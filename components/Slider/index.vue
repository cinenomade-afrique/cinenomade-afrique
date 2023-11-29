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
            image: 'logo-RG'
        },
        {
            id: 2,
            image: 'logo-acces-culture'
        },
        {
            id: 4,
            image: 'logo-air-france'
        },
        {
            id: 5,
            image: 'logo-architecture-by-issa-event'
        },
        {
            id: 6,
            image: 'logo-branding-guinee'
        },
        {
            id: 8,
            image: 'logo-canal-plus'
        },
        {
            id: 9,
            image: 'logo-centre-culturel-franco-guineen'
        },
        {
            id: 10,
            image: 'logo-espace-tv'
        },
        {
            id: 11,
            image: 'logo-f24'
        },
        {
            id: 12,
            image: 'logo-fondation-orange'
        },
        {
            id: 13,
            image: 'logo-girl-support-girls'
        },
        {
            id: 14,
            image: 'logo-harmattan-guinee'
        },
        {
            id: 15,
            image: 'logo-institut-francais'
        },
        {
            id: 16,
            image: 'logo-mansa'
        },
        {
            id: 17,
            image: 'logo-ministere-culture-france'
        },
        {
            id: 18,
            image: 'logo-office-national-tourisme'
        },
        {
            id: 19,
            image: 'logo-palabres-consulting'
        },
        {
            id: 20,
            image: 'logo-palm-camayenne'
        },
        {
            id: 21,
            image: 'logo-phoenix-vision'
        },
        {
            id: 22,
            image: 'logo-pnud'
        },
        {
            id: 24,
            image: 'logo-reporter-horizon'
        },
        {
            id: 25,
            image: 'logo-rtg'
        },
        {
            id: 26,
            image: 'logo-sabou-cine-talents'
        },
        {
            id: 27,
            image: 'logo-saboutech'
        },
        {
            id: 28,
            image: 'logo-sakom'
        },
        {
            id: 29,
            image: 'logo-sobragui'
        },
        {
            id: 30,
            image: 'logo-tv5-monde'
        },
        {
            id: 31,
            image: 'logo-upendo'
        },
        {
            id: 32,
            image: 'logo-usine-fil-amateur'
        }
    ])
</script>

<template>
    <div class="glide pt-4 pb-14">
        <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
                <SliderItem
                    v-for="sliderItem in sliderItemData"
                    :key="sliderItem.id"
                    :image="sliderItem.image"
                    :alt="sliderItem.image" />
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@glidejs/glide/dist/css/glide.core.min.css';
</style>