<script>
    export default {
        name: "CardModal",
        mounted: async function () {
            const {
                Modal,
                Ripple,
                initTE
            } = await import("tw-elements");

            initTE({
                Modal,
                Ripple
            });
        },
        props: {
            id: Number,
            image: String,
            title: String,
            subTitle: String,
            idLabel: String,
            text: String
        }
    };
</script>

<template>
    <div
        class="border-2 border-dashed border-warning relative block max-w-[21rem] md:max-w-[25rem] text-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mb-8">
        <div class="flex justify-center">
          <div class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
              <NuxtPicture
                format="avif,webp"
                v-bind:src="'/images/teams/' + image"
                loading="lazy"
                :alt="`${title}`"
                :imgAttrs="{class: 'h-64'}" />
              <a href="#!">
                  <div
                      class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
              </a>
          </div>
        </div>
        <div class="p-6">
            <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {{ title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 md:h-12">
                {{ subTitle }}
            </p>
            <button
                type="button"
                class="inline-block rounded-full bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-toggle="modal"
                :data-te-target="`#modal-${idLabel}`"
                data-te-ripple-color="light">
                Détail
            </button>
        </div>
    </div>

    <!-- Modal -->
    <div
      data-te-modal-init
      class="fixed left-0 top-32 lg:top-10 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      :id="`modal-${idLabel}`"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true">
      <div
        data-te-modal-dialog-ref
        class="pointer-events-none relative w-auto mx-4 translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
        <div
          class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div
            class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <!--Modal title-->
            <h5
              class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="modalLabel">
              {{ title }}
            </h5>
            <!--Close button-->
            <button
              type="button"
              class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-modal-dismiss
              aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!--Modal body-->
          <div class="relative overflow-y-auto p-4" data-te-modal-body-ref>
            <p>{{ text }}</p>
            <div style="height:100px;"></div>
          </div>

          <!--Modal footer-->
          <div
            class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <button
              type="button"
              class="inline-block rounded bg-red-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red-700 transition duration-150 ease-in-out hover:bg-red-accent-100 focus:bg-red-accent-100 focus:outline-none focus:ring-0 active:bg-red-accent-200"
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light">
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>

</style>