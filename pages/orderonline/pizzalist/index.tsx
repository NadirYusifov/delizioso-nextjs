import { PizzaFood } from "@/data/pizzalist";
import FoodCard from "@/components/foodcard";
import { ChangeEvent, useState } from "react";
import { PaginationComponents } from "@/components/pagination";

const ITEMS_PER_PAGE = 9;

export const PizzaList = ({
    pizzaCount,
    filteredpizzaData,
}: {
    pizzaCount: number;
    filteredpizzaData: PizzaFood[];
}) => {
    const [page, setPage] = useState<number>(1);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pizzaProducts = filteredpizzaData.slice(startIndex, endIndex);

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <section className="mt-50">
            <article className="pb-15">
                <h2 className="uppercase inline-block font-popins font-semibold text-[1.875rem] leading-[100%] border-b-2 border-dark-orange">Pizza</h2>
            </article>
            {pizzaProducts.length > 0 ? (
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                    {pizzaProducts.map((item) => (
                        <FoodCard key={item.id} food={item} />
                    ))}
                </div>
            ) : (
                <p>No items found in this category.</p>
            )}

            <div className="mt-20">
                <PaginationComponents
                    size="large"
                    shape="rounded"
                    count={pizzaCount}
                    defaultPage={startIndex}
                    siblingCount={0}
                    boundaryCount={1}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    );
};
