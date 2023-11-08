<script setup>
    useHead({
        title: "Cine Nomade Afrique - Nous contacter",
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
        console.log("data text ==>", data.message);

        mail.send({
            from: data.email,
            subject: 'Formulaire de contact du site Ciné Nomade Afrique : ' + data.name,
            text: 'Bonjour !' + '\n\n' +
                'Vous avez reçu un nouveau message depuis votre site de la part de : ' + data.name +
                '\n\n' +
                'Email: ' + data.email + '\n\n' + 'Tel: ' + data.phone + '\n\n' + 'Message: ' + data
                .message
        });

        reset('cnaForm');
    }
</script>

<template>
    <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
        <h1 class="text-5xl mt-14">Contact</h1>
        <div class="mt-14">
            <FormKit id="cnaForm" type="form" @submit="handleSubmit">
                <FormKit type="text" name="name" id="name" label="Nom" help="Votre nom" validation="required" />
                <FormKit name="email" label="Email" help="Votre email" validation="required|email" />
                <FormKit type="tel" label="Téléphone" placeholder="xxxxxxxxxx" help="Votre téléphone" name="phone"
                    validation="required|matches:/^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$/"
                    :validation-messages="{matches: 'Le numéro de téléphone doit être au format xxxxxxxxxx',}"
                    validation-visibility="dirty" />
                <FormKit type="textarea" label="Message" rows="10" help="Votre message " name="message" />
            </FormKit>
            <div class="mb-4 rounded-lg bg-success-100 px-6 py-5 text-base text-success-700" role="alert" v-if="submitted">
                Votre message a été envoyé !
            </div>
        </div>
    </div>
</template>