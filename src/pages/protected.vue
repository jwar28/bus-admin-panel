<script lang="ts" setup>

definePageMeta({
    middleware: 'auth'
})

const supaAuth = useSupabaseAuthClient().auth

const logout = async () => {
    const { error } = await supaAuth.signOut()
    if (error) {
        alert(error.message)
    } else {
        return navigateTo('/')
    }
}
</script>


<template>
    <div>
        <h1 class="text-2xl">Protected page</h1>
        <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
</template>
