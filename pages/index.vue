<template>
    <div>
        <MainSection title="Home" :loading="loading">

            <Head>
                <Title>Home / Twitter</Title>
            </Head>

            <div class="border-b" :class="twitterBorderColor">
                <TweetForm :user="user" @on-success="handleFormSuccess" />
            </div>

            <TweetListFeed :tweets="homeTweets" />

        </MainSection>
    </div>
</template>
<script setup>
const { twitterBorderColor } = useTailwindConfig()
const { getHomeTweets } = useTweets()

const loading = ref(false)
const homeTweets = ref([])
const { useAuthUser } = useAuth()

const user = useAuthUser()

onBeforeMount(async () => {
    loading.value = true
    try {
        const { tweets } = await getHomeTweets()

        homeTweets.value = tweets
    } catch (error) {
        console.log(error)
    } finally {
        loading.value = false
    }
})

function handleFormSuccess(tweet) {
    navigateTo({
        path: `/status/${tweet.id}`
    })
}

</script>