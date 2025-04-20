const zod = require("zod")

const CreateProduct = zod.object({
    name : zod.string(),
    price : zod.string(),
    image : zod.string()
})

module.exports = {
    CreateProduct : CreateProduct
}