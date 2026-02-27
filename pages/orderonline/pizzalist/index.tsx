import FoodCard from "@/components/foodcard"
import { Foods } from "@/data/data"

interface PizzaListProps {
    pizzaProducts: Foods[]
}

export const PizzaList = ({ pizzaProducts }: PizzaListProps) => {
    return (
        <div>
            {pizzaProducts.length > 0 ? (
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                    {pizzaProducts.map((item) => (
                        <FoodCard key={item.id} food={item} />
                    ))}
                </div>
            ) : (
                <p>No items found in this category.</p>
            )}


        </div>
    )
}
