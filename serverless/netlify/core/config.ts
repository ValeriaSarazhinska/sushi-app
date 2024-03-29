export const config = {
    //HASURA
    hasuraEndpoint: process.env.HASURA_ENDPOINT,
    hasuraAdminSecret: process.env.HASURA_ADMIN_SECRET,
    hasuraSushiappSecret:process.env.HASURA_SUSHIAPP_SECRET,
    //CLOUDINARY
    cloudinaryCloudName: process.env.CLOUD_NAME,
    cloudinaryApiKey: process.env.API_KEY,
    cloudinaryApiSecret: process.env.API_SECRET,
    //MISC
    jwtSecret: process.env.JWT_SECRET,
    passwordSalt: process.env.PASSWORD_SALT,
}