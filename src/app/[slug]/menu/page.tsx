import { notFound } from "next/navigation";

import { getRestaurantWithCategories } from "@/data/data-restaurant-by-slug";

import RestaurantCategories from "../components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantsMenuPageProps {
    params: Promise<{slug: string}>
    searchParams: Promise<{ consumptionMethod: string }>
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ["DIVE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
}

const RestaurantsMenuPage = async ({ params, searchParams }: RestaurantsMenuPageProps)  => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;

    if (!isConsumptionMethodValid(consumptionMethod)) return notFound();

    const restaurant = await getRestaurantWithCategories(slug);
    if (!restaurant) return notFound();


    return <div>
        <RestaurantHeader restaurant={restaurant} />
        <RestaurantCategories restaurant={restaurant} />
    </div>
}


export default RestaurantsMenuPage;