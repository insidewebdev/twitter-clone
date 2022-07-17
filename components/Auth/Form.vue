<template>
    <div class="w-full">
        <div class="flex justify-center">
            <div class="w-10 h-10">
                <LogoTwitter />
            </div>
        </div>

        <div class="pt-5 space-y-6">

            <UIInput v-model="data.username" label="Username" placeholder="@username" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />


            <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
                Login
            </UIButton>

        </div>
    </div>
</template>
<script setup>

const data = reactive({
    username: '',
    password: '',
    loading: false
})

async function handleLogin() {
    const { login } = useAuth()

    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
    } catch (error) {
        console.log(error)
    } finally {
        data.loading = false
    }

}

const isButtonDisabled = computed(() => {
    return (!data.username || !data.password) || data.loading
})

</script>