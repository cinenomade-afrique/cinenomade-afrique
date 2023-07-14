<script setup>

</script>

<template>
    <header class="mt-6">
        <div class="flex justify-between container mx-auto px-4">
            <NuxtLink to="/">
                <img class="w-16" src="@/assets/images/logo/Logo_CNA_couleur.png" alt="CineNomadeAfrique">
            </NuxtLink>
            <div class="lg:flex lg:flex-col lg:justify-center var--header-content">
                <div class="absolute w-full opacity-0 duration-300 top-32 left-0 bg-black invisible var--header-navbar-bg"></div>
                <div class="relative flex flex-col justify-center  border-0 rounded-none var--header-menu-button" tabindex="0">
                    <span class="block bg-black w-full duration-300 var--icon-bar"></span>
                    <span class="block bg-black w-full duration-300 var--icon-bar"></span>
                    <span class="block bg-black w-full duration-300 var--icon-bar"></span>
                </div>
                <nav class="var--header-navbar">
                    <ul class="inline-block">
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/">Accueil</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/nos-actions">Nos actions</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/festival">Le Festival</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/teams">L'équipe</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/media">Médias</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/nos-partenaires">Nos partenaires</NuxtLink>
                        </li>
                        <li class="lg:inline-block">
                            <NuxtLink class="lg:py-2.5 lg:px-5" to="/contact">Contact</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .var--header-content {
        @include mediaQuery(tablet-end) {
            pointer-events: none;

            .var--header-navbar-bg {
                height: calc(100% - 8rem);
            }

            &:focus-within .var--header-navbar-bg {
                visibility: visible;
                opacity: .6;
            }

            * {
                visibility: visible;
            }

            .var--icon-bar + .var--icon-bar {
                margin-top: 5px;
            }

            &:focus-within .var--header-menu-button {
                pointer-events: none;
            }

            &:focus-within .var--icon-bar:nth-of-type(1) {
                transform: translate3d(0,8px,0) rotate(45deg);
            }

            &:focus-within .var--icon-bar:nth-of-type(2) {
                opacity: 0;
            }

            &:focus-within .var--icon-bar:nth-of-type(3) {
                transform: translate3d(0,-8px,0) rotate(-45deg);
            }
        }
    }

    .var--header-menu-button {
        height: 70px;
        width: 30px;
        pointer-events: auto;
        touch-action: auto;
        cursor: pointer;
        z-index: 1;

        @include mediaQuery(tablet-desktop) {
            display: none;
        }

        .var--icon-bar {
            height: 3px;
        }
    }


    .var--header-navbar {
        @include mediaQuery(tablet-end) {
            text-align: center;
            margin-top: 8rem;
            padding: 20px;
            width: 90%;
            max-width: 300px;
            position: absolute;
            top: 0;
            left: 0;
            height: calc(100% - 70px);
            background-color: $orange-cna;
            pointer-events: auto;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            transform: translateX(-100%);
            transition: transform .3s;
            will-change: transform;

            ul li {
                margin-bottom: 1rem;
            }

            ul li a {
                color: white;
                font-size: 1.25rem;
            }
        }
    }

    .var--header-content:focus-within .var--header-navbar {
        @include mediaQuery(tablet-end) {
            transform: none;
        }
    }
</style>