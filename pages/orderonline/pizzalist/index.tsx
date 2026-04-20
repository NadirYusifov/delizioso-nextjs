import { Foods } from "@/data/menu";
import FoodCard from "@/components/foodcard";
import { ChangeEvent, useState } from "react";
import { PaginationComponents } from "@/components/pagination";

const ITEMS_PER_PAGE = 9;

export const PizzaList = ({
    pizzaCount,
    filteredpizzaData,
    handleCategoryTab
}: {
    pizzaCount: number;
    filteredpizzaData: Foods[];
    handleCategoryTab: () => void
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
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                    <article className="text-center mx-auto col-start-2">
                        <span className="text-7xl">🍽️</span>
                        <p className="text-[1.563rem] leading-[200%]">No items found in this category.</p>
                    </article>
                </div>
            )}

            <div className="mt-20">
                <PaginationComponents
                    page={page}
                    size="large"
                    shape="rounded"
                    count={pizzaCount}
                    defaultPage={page}
                    siblingCount={0}
                    boundaryCount={1}
                    onChange={handlePageChange}
                    onClick={handleCategoryTab}
                />
            </div>
        </section>
    );
};
