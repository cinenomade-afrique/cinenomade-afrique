<script lang="ts">
    useHead({
        title: "Cine Nomade Afrique - Photothèque",
    });

    export default {
        data() {
            return {
                imgs: [
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp',
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp',
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp',
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp',
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(76).webp',
                    'https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp',
                    '/images/phototheque/home-cna-picture.jpg'
                ],
                visible: false,
                index: 0 // default
            }
        },
        methods: {
            show(index) {
                this.index = index
                this.visible = true
            },
            handlePrev(oldIndex, newIndex) {
                console.log('when next btn click ----')
                console.log('oldIndex of imgs:', oldIndex)
                console.log('newIndex of imgs:', newIndex)
            },
            handleNext(oldIndex, newIndex) {
                console.log('when next btn click ----')
                console.log('oldIndex of imgs:', oldIndex)
                console.log('newIndex of imgs:', newIndex)
            },
        }
    }
</script>

<template>
    <section>
        <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
            <h1 class="text-5xl mt-14">Photothèque Ciné'Nomade Afrique</h1>

            <div class="container my-14 mx-auto">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div v-for="(img, idx) in imgs" :key="idx" class="flex w-1/3 flex-wrap" @click="() => show(idx)">
                        <div class="w-full p-1 md:p-2">
                            <NuxtImg
                                :src="img.src ? img.src : img"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                loading="lazy" />
                        </div>
                    </div>
                </div>

                <vue-easy-lightbox
                    :visible="visible"
                    :index="index"
                    :imgs="imgs"
                    @hide="visible = false"
                    @on-prev="handlePrev"
                    @on-next="handleNext"
                />
            </div>
        </div>
    </section>
</template>