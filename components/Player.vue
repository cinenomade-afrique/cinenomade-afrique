<script setup>
    onMounted(async () => {
        const Plyr = await import("plyr");
        const newPlayer = new Plyr.default("#player");
    });
</script>

<template>
    <div id="player" class="mt-5 var--iframe-container">
        <iframe width="340" height="214" src="https://www.youtube.com/embed/AXD2K8cNOns" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>

<style lang="scss" scoped>
    .var--iframe-container {
        position: relative;
        padding-bottom: 56.25%; /* ratio 16/9 */
        height: 0;
        overflow: hidden;
        clear: both;
    }

    .var--iframe-container iframe,
    .var--iframe-container object,
    .var--iframe-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>