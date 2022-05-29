export default (url, options = {}) => {
    const { useAuthToken } = useAuth()


    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${useAuthToken().value}`
        }
    })
}