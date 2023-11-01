<script lang="ts">
    useHead({
        title: "Cine Nomade Afrique - Photothèque",
    });

    export default {
        data() {
            return {
                imgs: [
                    '/images/phototheque/cine-nomade-afrique-1.jpg',
                    '/images/phototheque/cine-nomade-afrique-2.jpg',
                    '/images/phototheque/cine-nomade-afrique-3.jpg',
                    '/images/phototheque/cine-nomade-afrique-4.jpg',
                    '/images/phototheque/cine-nomade-afrique-5.jpg',
                    '/images/phototheque/cine-nomade-afrique-6.jpg',
                    '/images/phototheque/cine-nomade-afrique-7.jpg',
                    '/images/phototheque/cine-nomade-afrique-8.jpg',
                    '/images/phototheque/cine-nomade-afrique-9.jpg',
                    '/images/phototheque/cine-nomade-afrique-10.jpg',
                    '/images/phototheque/cine-nomade-afrique-11.jpg',
                    '/images/phototheque/cine-nomade-afrique-12.jpg',
                    '/images/phototheque/cine-nomade-afrique-13.jpg',
                    '/images/phototheque/cine-nomade-afrique-14.jpg',
                    '/images/phototheque/cine-nomade-afrique-15.jpg',
                    '/images/phototheque/cine-nomade-afrique-16.jpg',
                    '/images/phototheque/cine-nomade-afrique-17.jpg',
                    '/images/phototheque/cine-nomade-afrique-18.jpg',
                    '/images/phototheque/cine-nomade-afrique-19.jpg',
                    '/images/phototheque/cine-nomade-afrique-20.jpg',
                    '/images/phototheque/cine-nomade-afrique-21.jpg',
                    '/images/phototheque/cine-nomade-afrique-22.jpg',
                    '/images/phototheque/cine-nomade-afrique-23.jpg',
                    '/images/phototheque/cine-nomade-afrique-24.jpg',
                    '/images/phototheque/cine-nomade-afrique-25.jpg',
                    '/images/phototheque/cine-nomade-afrique-26.jpg',
                    '/images/phototheque/cine-nomade-afrique-27.jpg',
                    '/images/phototheque/cine-nomade-afrique-28.jpg',
                    '/images/phototheque/cine-nomade-afrique-29.jpg',
                    '/images/phototheque/cine-nomade-afrique-30.jpg',
                    '/images/phototheque/cine-nomade-afrique-31.jpg',
                    '/images/phototheque/cine-nomade-afrique-32.jpg',
                    '/images/phototheque/cine-nomade-afrique-33.jpg',
                    '/images/phototheque/cine-nomade-afrique-34.jpg',
                    '/images/phototheque/cine-nomade-afrique-35.jpg',
                    '/images/phototheque/cine-nomade-afrique-36.jpg',
                    '/images/phototheque/cine-nomade-afrique-37.jpg',
                    '/images/phototheque/cine-nomade-afrique-38.jpg',
                    '/images/phototheque/cine-nomade-afrique-39.jpg',
                    '/images/phototheque/cine-nomade-afrique-40.jpg',
                    '/images/phototheque/cine-nomade-afrique-41.jpg',
                    '/images/phototheque/cine-nomade-afrique-42.jpg',
                    '/images/phototheque/cine-nomade-afrique-43.jpg',
                    '/images/phototheque/cine-nomade-afrique-44.jpg',
                    '/images/phototheque/cine-nomade-afrique-45.jpg',
                    '/images/phototheque/cine-nomade-afrique-46.jpg',
                    '/images/phototheque/cine-nomade-afrique-47.jpg',
                    '/images/phototheque/cine-nomade-afrique-48.jpg',
                    '/images/phototheque/cine-nomade-afrique-49.jpg',
                    '/images/phototheque/cine-nomade-afrique-50.jpg',
                    '/images/phototheque/cine-nomade-afrique-51.jpg',
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
            <h1 class="text-5xl mt-14">Photothèque</h1>

            <div class="container my-14 mx-auto">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div v-for="(img, idx) in imgs" :key="idx" class="flex w-1/2 md:w-1/3 xl:w-1/4 flex-wrap" @click="() => show(idx)">
                        <div class="w-full p-1 md:p-2">
                            <NuxtImg
                                :src="img.src ? img.src : img"
                                format="webp"
                                class="block h-full w-full rounded-lg object-cover object-center shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 cursor-zoom-in"
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