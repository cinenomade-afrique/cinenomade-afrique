<script setup>
    useHead({
        title: "Cine Nomade Afrique - Nous contacter",
    });

    const mail = useMail()


    function handleSubmit(data) {
        console.log(data);

        mail.send({
            from: data.email,
            subject: 'Contact from message',
            text: data.message
        })
    }
</script>

<template>
    <div class="container max-w-screen-xl mx-auto my-14 px-5 md:px-10">
        <h1 class="text-5xl mt-14">Contact</h1>
        <div class="mt-14">
            <FormKit type="form" @submit="handleSubmit">
                <FormKit type="text" name="name" id="name" label="Nom" help="Votre nom" validation="required" />
                <FormKit name="email" label="Email" help="Votre email" validation="required|email" />
                <FormKit type="tel" label="Téléphone" placeholder="xxxxxxxxxx" help="Votre téléphone" name="phone"
                    validation="required|matches:/^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$/"
                    :validation-messages="{matches: 'Le numéro de téléphone doit être au format xxxxxxxxxx',}"
                    validation-visibility="dirty" />
                <FormKit type="textarea" label="Message" rows="10" help="Votre message " name="message" />
            </FormKit>
        </div>
    </div>
</template>