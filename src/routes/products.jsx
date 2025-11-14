import content from '../data/content.json'

export const loadProductById = async ({params}) =>{
    const product = content?.products?.find((product)=>product?.id == params?.productId)
    return {product};
}