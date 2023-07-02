<script setup></script>

<template>
    <header class="mt-6 header-sheet-1">
        <div class="flex justify-between container mx-auto px-4">
            <NuxtLink to="/">
                <img class="header-logo-cna" src="@/assets/images/logo/Logo_CNA_couleur.png" alt="CineNomadeAfrique">
            </NuxtLink>
            <nav class="flex flex-col justify-center header-navbar">
                <ul class="inline-block">
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/">Accueil</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/nos-actions">Nos actions</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/festival">Le Festival</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/teams">L'équipe</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/media">Médias</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/nos-partenaires">Nos partenaires</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="py-2.5 px-5" to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
    .header-sheet-1 {
        min-height: 80px;
    }

    .header-logo-cna {
        width: 60px;
    }

    .header-navbar {
        ul li {
            display: inline-block;
        }
    }
</style>