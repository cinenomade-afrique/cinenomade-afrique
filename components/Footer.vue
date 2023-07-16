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
    <footer class="bg-cyan-700 text-white var--footer">
        <div class="flex flex-col divide-y container max-w-screen-xl mx-auto px-5">
            <p class="text-center py-14">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aut vel dolore. Aliquid numquam reprehenderit, unde autem, nam temporibus eligendi totam labore rem eum dolore veritatis, repellat odio aliquam eius.
            </p>
            <p class="text-xs text-center py-5">
                Copyright <span class="var--footer-copyright"></span> &copy; Ciné'Nomade Afrique - Tous droits réservés
            </p>
        </div>
    </footer>
</template>