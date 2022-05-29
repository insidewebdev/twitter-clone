import { userTransformer } from "~~/server/transformers/user"

export default defineEventHandler(async (event) => {

    return {
        user: userTransformer(event.context.auth?.user)
    }

})