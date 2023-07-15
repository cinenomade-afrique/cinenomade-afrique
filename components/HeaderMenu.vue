<script>
    export default {
        mounted() {
            const menuResponsive = () => {
                const hamburger = {
                    menu: document.querySelector('.var--header-menu'),
                    expanded: document.querySelector('.var--header-menu-toggle'),

                    toggleMenuExpanded:  (e) => {
                        e.preventDefault();
                        hamburger.expanded.classList.toggle("var--header-menu-open");
                    },

                    toggleMenu:  (e) => {
                        e.preventDefault();
                        hamburger.menu.classList.toggle("active");
                    }
                }

                hamburger.expanded.addEventListener("click", (e) => { hamburger.toggleMenuExpanded(e) });
                hamburger.expanded.addEventListener("click", (e) => { hamburger.toggleMenu(e) });
            }
            menuResponsive();
        }
    }
</script>

<template>
    <header class="mt-6">
        <div class="flex justify-between container max-w-screen-xl mx-auto px-5">
            <NuxtLink to="/" class="z-10">
                <img class="w-16" src="@/assets/images/logo/Logo_CNA_couleur.png" alt="CineNomadeAfrique">
            </NuxtLink>
            <nav class="lg:flex lg:flex-col lg:justify-center var--header-navbar" role="navigation">
                <div class="absolute top-6 right-6 w-8 h-5 cursor-pointer rounded-full var--header-menu-toggle"><span class="block h-1 overflow-hidden toggle-bar"></span></div>
                <ul class="menu inline-block var--header-menu">
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/"><span>Accueil</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/nos-actions"><span>Nos actions</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/festival"><span>Le Festival</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/teams"><span>L'équipe</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/media"><span>Médias</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/nos-partenaires"><span>Nos partenaires</span></NuxtLink>
                    </li>
                    <li class="lg:inline-block">
                        <NuxtLink class="lg:py-2.5 lg:px-5" to="/contact"><span>Contact</span></NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    .var--header-menu-toggle {
        z-index: 2;
        padding: 8px 0;

        .toggle-bar {
            background: $orange-cna;
            border-radius: 2px;
            transition: background 0.3s ease-in-out;
        }

        &::before,
        &::after {
            left: 0;
            content: '';
            width: 32px;
            height: 4px;
            background: $orange-cna;
            border-radius: 2px;
            position: absolute;
            transform-origin: center center;
            transition: width 0.2s ease-in-out, background 0.2s ease-in-out, transform 0.2s ease-in-out, top 0.2s ease-in-out, bottom 0.2s ease-in-out, left 0.2s ease-in-out, right 0.2s ease-in-out;
        }

        &::before { top: 0; }
        &::after { bottom: 0; }
        &.var--header-menu-open {
            .toggle-bar { background: rgba(255,255,255,0); }

            &::before {
                top: 8px;
                transform: rotate(-45deg);
            }

            &::after {
                bottom: 8px;
                transform: rotate(45deg);
            }

            &::before, &::after {
                width: 26px;
                background: #fff;
            }

            &:hover,
            &:focus,
            &:active {
                .toggle-bar { background: rgba(255,255,255,0); }

                &::before {
                    top: 8px;
                    left: -3px;
                    transform: rotate(-45deg);
                }

                &::after {
                    left: 9px;
                    bottom: 8px;
                    transform: rotate(45deg)
                }

                &::before,
                &::after {
                    width: 20px;
                }
            }
        }

        &:hover,
        &:focus,
        &:active {
            .toggle-bar { background: rgba(255,255,255,0); }

            &::before {
                top: 8px;
                left: -3px;
                transform: rotate(45deg);
            }

            &::after {
                left: 9px;
                bottom: 8px;
                transform: rotate(-45deg)
            }

            &::before,
            &::after {
                width: 20px;
            }
        }

        @include mediaQuery(tablet-desktop) {
            display: none;
        }
    }

    .var--header-menu {
        @include mediaQuery(tablet-end) {
            top: 0;
            left: 0;
            margin: 0;
            z-index: 1;
            width: 100%;
            background: $orange-cna;
            padding: 5rem 0 2rem 0;
            position: absolute;
            transform: translateY(-100%);
            transition: transform 0.3s cubic-bezier(1,0.5,0,1);

            &.active {
                box-shadow: 0 8px 16px rgba(0,0,0,.1),0 0 1px rgba(0,0,0,.05);
                transform: translateY(0);
            }

            li {
                a {
                    padding: 1rem;
                    color: white;
                    display: block;
                    line-height: 1rem;
                    font-size: 1.25rem;
                    text-align: center;
                    text-decoration: none;
                    transition: background 0.2s ease-in-out;

                    span {
                        border-bottom: 1px solid #fff;
                    }

                    &:hover,
                    &:focus,
                    &:active {
                        background: rgba(255,255,255,0.2);
                    }
                }
            }
        }

        @include mediaQuery(tablet-desktop) {
            li a {
                font-size: 1.125rem;

                &:hover {
                    color: #718096;
                }

                &:active,
                &:focus {
                    color: $orange-cna;
                }
            }
        }
    }
</style>