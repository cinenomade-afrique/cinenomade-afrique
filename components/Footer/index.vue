<script>
    export default {
        mounted() {
            const yearAutoUpdate = () => {
                let footerCopyrightYear = new Date();
                if (document.querySelector(".var--footer-copyright") !== null) {
                    document.querySelector(".var--footer-copyright").innerText = footerCopyrightYear.getFullYear();
                }
            }
            yearAutoUpdate();
        }
    }
</script>

<template>
    <footer class="var--footer">
        <FooterSocialMedia />
        <div class="background-orange">
            <div class="flex flex-col container max-w-screen-xl mx-auto px-5">
                <FooterElement />
                <p class="text-xs text-center py-5">
                    Copyright <span class="var--footer-copyright"></span> &copy; Ciné'Nomade Afrique - Tous droits
                    réservés
                </p>
            </div>
        </div>
    </footer>
</template>