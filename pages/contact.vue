<script setup>
    useHead({
        title: "Cine Nomade Afrique - Nous Contactez",
    });

    const mail = useMail();
    const submitted = ref(false);

    const handleSubmit = async (data) => {
        await new Promise((r) => setTimeout(r, 1000));
        submitted.value = true;

        console.log("data ==>", data);
        console.log("data name ==>", data.name);
        console.log("data email ==>", data.email);
        console.log("data tel ==>", data.phone);
        console.log("data tel ==>", data.interest);
        console.log("data text ==>", data.message);

        mail.send({
            from: data.email,
            subject: 'Formulaire de contact du site Ciné Nomade Afrique : ' + data.name,
            text: 'Bonjour !' + '\n\n' +
                'Vous avez reçu un nouveau message depuis votre site de la part de : ' + data.name +
                '\n\n' +
                'Email: ' + data.email + '\n\n' + 'Tel: ' + data.phone + 'Vous êtes intéressé par: ' + data.interest + '\n\n' + 'Message: ' + data.message
        });

        reset('cnaForm');
    }
</script>

<template>
    <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
        <h1 class="text-5xl mt-14">Contact</h1>
        <div class="mb-12 grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12 mt-14">
            <div class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <FormKit id="cnaForm" type="form" @submit="handleSubmit">
                    <FormKit type="text" name="name" id="name" label="Nom" help="Votre nom" validation="required" prefix-icon="avatarMan" />
                    <FormKit name="email" label="Email" help="Votre email" validation="required|email" prefix-icon="email" />
                    <FormKit type="tel" label="Téléphone" help="Votre téléphone" name="phone" prefix-icon="telephone"
                        validation="required|matches:/^\+?[0-9]+$/"
                        :validation-messages="{matches: 'Le numéro de téléphone doit être au bon format',}"
                        validation-visibility="dirty" />
                    <FormKit
                        type="select"
                        label="Vous êtes intéressé par"
                        name="interest"
                        prefix-icon="select"
                        :options="[
                            'Le Volontariat',
                            'Le Sponsoring',
                            'Autre',
                        ]"
                    />
                    <FormKit type="textarea" label="Message" rows="10" help="Votre message" name="message" prefix-icon="textarea" />
                </FormKit>
                <div class="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700" role="alert" v-if="submitted">
                    Votre message a été envoyé !
                </div>
            </div>
            <div class="mt-6 md:mt-0">
                <NuxtPicture
                    format="avif,webp"
                    src="/images/phototheque/cine-nomade-afrique-51.jpg"
                    loading="lazy"
                    alt="ciné nomade afrique 37"
                    :imgAttrs="{class: 'w-full rounded-lg shadow-lg dark:shadow-black/20'}" />
            </div>
        </div>
    </div>
</template>