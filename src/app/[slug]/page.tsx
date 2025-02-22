import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/data-restaurant-by-slug";

import ConsumptionMethodOption from "./components/consumption-method-option";

interface RestaurantPageProps {
    params: Promise<{slug: string}>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params;

    const restaurant = await getRestaurantBySlug(slug);
    if (!restaurant) {
        return notFound();
    }

    return <div className="h-screen flex flex-col items-center justify-center px-6 pt-24">
        <div className="flex flex-col items-center gap-2">
            <Image src={restaurant?.avatar_image_url} alt={restaurant?.name} width={82} height={82} />
            <h2 className="fonts-semibold">
                {restaurant.name}
            </h2>
        </div>

        <div className="pt-24 text-center space-y-2 ">
            <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
            <p className="opacity-55">
                Escolha como prefere aproveitar sua refeição. <br /> Estamos aqui para oferecer praticidade e sabor em cada detalhe!
            </p>
        </div>
        <div className="pt-14 grid grid-cols-2 gap-4">
            <ConsumptionMethodOption
                imageUrl="/dine_in.svg"
                buttonText="Para comer aqui"
                imageAlt="Para comer aqui"
                option="DIVE_IN"
                slug={slug}
            />
            <ConsumptionMethodOption
                imageUrl="/takeway.svg"
                buttonText="Para levar"
                imageAlt="Para levar"
                option="TAKEAWAY"
                slug={slug}
            />
        </div>
    </div>;
}

export default RestaurantPage;