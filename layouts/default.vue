<template>
    <div class="defaultLayoutContent">
        <ClientOnly>
            <HeaderMenu />
        </ClientOnly>
        <slot />
    </div>
    <Footer />
</template>