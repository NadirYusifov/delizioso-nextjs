"use client";

import { data } from "@/data/data";
import { Button } from "@/common/button";
import FoodCard from "@/components/foodcard";
import { ChangeEvent, useState } from "react";
import { PaginationComponents } from "@/components/pagination";

const ITEMS_PER_PAGE = 6;

export default function PopularMenu({ title }: any) {
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All category");

  const categories = ["All category", "Dinner", "Lunch", "Dessert", "Drink"];

  const filteredData =
    selectedCategory === "All category"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  const count = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <section className="my-28">
      <div className="container mx-auto px-4">
        <div className="text-center pb-15">
          <h3 className="text-[60px] lg:text-[80px] text-dark-coffee font-bold leading-[114.9%]">
            {title || "Our popular menu"}
          </h3>
        </div>
        <div className="category-tab flex justify-start lg:justify-center items-center gap-x-6 lg:gap-x-8 py-1.5 mb-15 overflow-x-scroll lg:overflow-hidden">
          {categories.map((category) => (
            <Button
              className={`px-[1.063rem] lg:px-[3.388rem] h-10 lg:h-[4.003rem] font-popins font-semibold leading-[200%] text-[0.975rem] lg:text-[1.25rem] ${category === selectedCategory ? "bg-dark-coffee text-white" : "bg-dust-grey/10"}`}
              variant="default"
              key={category}
              title={category}
              onClick={() => {
                setSelectedCategory(category);
                setPage(1);
              }}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
              {currentProducts.map((item) => (
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
    </section>
  );
}
