"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'cover_image_url' | 'name'>
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const router = useRouter();

    const handleBack = () => router.back();

    return <div className="relative h-[15.625rem] w-full">
    <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBack}
    >
        <ChevronLeftIcon />
    </Button>
    <Image
        src={restaurant.cover_image_url}
        alt={restaurant.name}
        fill
        className="object-cover"
    />
</div>
}

export default RestaurantHeader;