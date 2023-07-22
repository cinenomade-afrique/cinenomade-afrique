<script setup>
    onMounted(async () => {
        const Plyr = await import("plyr");
        const newPlayer = new Plyr.default("#player");
    });
</script>

<template>
    <div id="player" class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg var--iframe-container">
        <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" src="https://www.youtube.com/embed/AXD2K8cNOns" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>

<style lang="scss" scoped>
    .var--iframe-container {
        padding-top: 56.25%; /* ratio 16/9 */
    }
</style>