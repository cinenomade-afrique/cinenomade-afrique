<script setup lang="ts">
  useHead({
    title: "Cine Nomade Afrique - Le Festival",
  });
</script>

<template>
  <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
    <h1 class="text-5xl mt-14">Le Festival</h1>
    <div class="container my-14 mx-auto">
      <div class="mb-14">
        <div
          class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex flex-wrap items-center">
            <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <NuxtPicture
                format="avif,webp"
                src="/images/festival/festival-cine-nomade-2023.jpg"
                loading="lazy"
                alt="Festival Ciné'Nomade Afrique 2023"
                :imgAttrs="{class: 'w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'}" />
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div class="px-6 py-12 md:px-12">
                <h2 class="mb-4 text-2xl font-bold">
                  PRÉSENTATION de l’édition 2023 du Festival International du Film de Conakry, Ciné’Nomade
                </h2>
                <p class="mb-6">
                  Après une première édition réussie en 2022, la deuxième édition du Festival International du Film de
                  Conakry, Ciné’Nomade se tiendra du 1er au 12 décembre 2023 en République de Guinée. Pour cette
                  édition, le format change avec trois jours de festivités à Conakry et une semaine de cinéma ambulant
                  dans quatre villes de Guinée maritime.
                </p>
                <p class="mb-6">
                  Le festival est porté par l'association franco-guinéenne, Ciné'Nomade Afrique, sous le haut patronage
                  du Ministère de la Culture guinéen en partenariat avec l’Institut Français, l’agence de communication
                  SAKOM et Canal + International.
                </p>
                <p>
                  25 personnalités du cinéma international et africain sont confirmées et 5000 participant.es
                  guinéenn.es, des talents émergents et des passionné.es de culture sont attendu.es.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="background-1">
    <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
      <h3 class="mb-6 ml-3 text-left lg:text-center text-2xl font-bold pt-14">Au programme, 5 temps forts :</h3>
      <div class="flex flex-col lg:flex-row py-10">
        <CalendarTimeLine />
        <div class="flex flex-col lg:max-w-[40rem] lg:px-6 align-center justify-around pt-4 lg:pt-0">
          <NuxtPicture
            format="avif,webp"
            src="/images/phototheque/cine-nomade-afrique-37.jpg"
            loading="lazy"
            alt="ciné nomade afrique 37"
            :imgAttrs="{class: 'w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
          <NuxtPicture
            format="avif,webp"
            src="/images/phototheque/cine-nomade-afrique-14.jpg"
            loading="lazy"
            alt="cié nomade afrique 14"
            :imgAttrs="{
                  class: 'w-full rounded-lg shadow-lg dark:shadow-black/20 pt-4 lg:pt-0',
                  'data-te-img':'/images/actions/cinema-pleine-air-nuit-cna-2.jpg'}" />
        </div>
      </div>
    </div>
  </div>

  <div class="container max-w-screen-xl mx-auto px-5 md:px-10">
    <h2 class="mb-4 text-left lg:text-center text-2xl font-bold pt-14 pb-4">
      Chronologie de nos actions
    </h2>
    <div class="flex-col lg:max-w-[50rem]">
      <TimeLine />
    </div>
  </div>
</template>