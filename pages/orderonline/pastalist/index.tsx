"use client"

import { CategoryTabs } from "@/components/categorytabs";
import FoodCard from "@/components/foodcard";
import { PaginationComponents } from "@/components/pagination";
import { data } from "@/data/data";
import { ChangeEvent, useState } from "react";
import { PizzaList } from "../pizzalist";

const ITEMS_PER_PAGE = 6

export const PastaList = () => {
    const [page, setPage] = useState<number>(1);
    const [selectedCategory, setSelectedCategory] = useState<string>("All category");

    const categories = ["All category", "Dinner", "Lunch", "Dessert", "Drink"];

    const filteredData =
        selectedCategory === "All category"
            ? data
            : data.filter((item) => item.category === selectedCategory);

    const count = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const pastaProducts = filteredData.slice(startIndex, endIndex);
    const pizzaProducts = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <div>
            <section className="my-28">
                <div className="container mx-auto px-4">
                    <div className="text-center pb-15">
                        <h3 className="text-[60px] lg:text-[80px] text-dark-coffee font-bold leading-[114.9%]">
                            {"Menu"}
                        </h3>
                    </div>
                    <div className="category-tab flex justify-start md:justify-center items-center gap-x-6 lg:gap-x-8 py-1.5 mb-15 overflow-x-scroll lg:overflow-hidden">
                        {categories.map((category) => (
                            <CategoryTabs
                                key={category}
                                title={category}
                                category={category}
                                isSelected={category === selectedCategory}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setPage(1);
                                }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center items-center">
                        {pastaProducts.length > 0 ? (
                            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                                {pastaProducts.map((item) => (
                                    <FoodCard key={item.id} food={item} />
                                ))}
                            </div>
                        ) : (
                            <p>No items found in this category.</p>
                        )}
                    </div>
                    <div className="mt-20">
                        <PaginationComponents
                            size="large"
                            shape="rounded"
                            count={count}
                            defaultPage={startIndex}
                            siblingCount={0}
                            boundaryCount={1}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
                <PizzaList pizzaProducts={pizzaProducts} />
            </section>
        </div>
    )
}
