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
    <footer class="bg-slate-800 text-white var--footer">
        <div class="container max-w-screen-xl mx-auto px-5 text-center">
            <p>
                Copyright <span class="var--footer-copyright"></span> &copy; Ciné Nomade Afrique - Tous droits réservés
            </p>
        </div>
    </footer>
</template>