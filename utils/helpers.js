export const config = {
    Appname: process.env.APP_NAME ?? "Aplicacion",
    description: process.env.APP_DESCRIPTION ?? "Aplicacion desarrollada con NodeJS",
    author: process.env.APP_AUTHOR ?? "muchos desarrolladores",
}
export const resolve = (data) => JSON.parse(JSON.stringify(data))
