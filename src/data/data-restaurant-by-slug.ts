import { db } from "@/lib/prisma"

export const getRestaurantBySlug = async (slug: string) => {
    return await db.restaurant.findUnique({
        where: { slug_url: slug }
    })
}


export const getRestaurantWithCategories = async (slug: string) => {
    return await db.restaurant.findUnique({
        where: { slug_url: slug },
        include: {
            menu_categories: {
                include: {
                    products: true
                }
            }
        }
    })
}