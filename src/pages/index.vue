<script setup lang="ts">
definePageMeta({
  layout: "login",
});

const client = useSupabaseAuthClient();
const router = useRouter();
const user = useSupabaseUser();
const errorMessage = ref("");

const credentials = reactive({
  email: "",
  password: "",
});

const supabaseLogin = async () => {
  const { error } = await client.auth.signInWithPassword(credentials);
  if (!error) return router.push("/dashboard");
  errorMessage.value = error.message;
  console.log(error);
};

watchEffect(async () => {
  if (user.value) {
    await router.push("/dashboard");
  }
});
</script>

<template>
  <div class="h-screen bg-base-100 flex flex-col justify-center">
    <div class="relative sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-orange-300 to-orange-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-12"
      >
        <div class="max-w-md mx-auto">
          <!-- Header -->
          <div
            class="mb-5 font-bold text-2xl text-center flex flex-wrap gap-10 justify-center"
          >
            <img
              src="../assets/unab-logo.png"
              class="h-32 flex justify-center"
            />
            <div class="w-40 flex flex-col justify-center">
              <span class="text-4xl font-semibold text-gray-600">Iniciar</span>
              <br />
              <span class="text-4xl font-semibold text-gray-600">Sesión</span>
            </div>
          </div>

          <!-- Form -->
          <div class="sm:text-lg sm:leading-7 flex flex-col gap-3">
            <!-- Email -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Correo electrónico</span>
              </label>
              <input
                v-model="credentials.email"
                type="email"
                placeholder="correo@unab.edu.co"
                class="input input-bordered w-full"
              />
            </div>

            <!-- Password -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Contraseña</span>
              </label>
              <input
                v-model="credentials.password"
                type="password"
                placeholder="Ingrese su contraseña"
                class="input input-bordered w-full"
              />
            </div>

            <!-- Button -->
            <div class="mt-5">
              <button class="btn btn-outline w-full" @click="supabaseLogin">
                Ingresar
              </button>
              <div v-if="errorMessage" class="mt-5 flex justify-center">
                <UiErrorAlert :message="errorMessage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
