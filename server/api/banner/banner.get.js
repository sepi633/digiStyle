export default defineEventHandler(async(event) => {
    const { public: { baseUrl } } = useRuntimeConfig()


    try {
        const data = await $fetch(`${baseUrl}/api/Banner`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            query: getQuery(event)
        })

        return data;
    } catch (error) {
console.log(error);

        return error
    }
})



