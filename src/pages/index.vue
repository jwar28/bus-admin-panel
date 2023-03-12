<script setup lang="ts">

definePageMeta({
    layout: "login",
});

const client = useSupabaseAuthClient();
const router = useRouter();
const user = useSupabaseUser();

const credentials = reactive({
    email: '',
    password: ''
})
const errorMessage = ref('')

async function login() {
    const { error } = await client.auth.signInWithPassword(credentials);
    if (!error) return router.push('/');
    errorMessage.value = error.message
    console.log(error);
}

watchEffect(async () => {
    if (user.value) {
        await router.push('/protected');
    }
});

</script>

<template>
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <div class="max-w-md mx-auto">
                    <!-- Header -->
                    <div class="mb-5 font-bold text-3xl text-center">
                        <h1>Iniciar sesión</h1>
                    </div>
                    <div class="sm:text-lg sm:leading-7 flex flex-col gap-3">
                        <!-- Email -->
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Correo electrónico</span>
                            </label>
                            <input v-model="credentials.email" type="email" placeholder="correo@unab.edu.co"
                                class="input input-bordered w-full max-w-xs" />
                        </div>

                        <!-- Password -->
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Contraseña</span>
                            </label>
                            <input v-model="credentials.password" type="password" placeholder="Ingrese su contraseña"
                                class="input input-bordered w-full max-w-xs" />
                        </div>

                        <!-- Button -->
                        <div class="mt-5">
                            <button class="btn btn-outline w-full" @click="login">Ingresar</button>
                            <p v-if="errorMessage" class="text-error text-center mt-5">{{ errorMessage }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
