"use client";

import { data } from "@/data/menu";
import FoodCard from "@/components/foodcard";
import { ChangeEvent, useState } from "react";
import { CategoryTabs } from "@/components/categorytabs";
import { PaginationComponents } from "@/components/pagination";

const ITEMS_PER_PAGE = 6;

export default function PopularMenu({ title }: { title?: string }) {
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
  const currentProducts = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // ==============================
  /* 
    This code used MDN web site which "scrollIntoView()" use method
    Link: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    
    Thanks!
  */
  const handleCategoryTab = () => {
    const menuCategoryScroll = document.querySelector(".category-tab")
    menuCategoryScroll?.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  // ==============================

  return (
    <section className="my-28">
      <div className="container mx-auto px-4">
        <div className="text-center pb-15">
          <h3 className="text-[60px] lg:text-[80px] text-dark-coffee font-bold font-tinos leading-[114.9%]">
            {title || "Our popular menu"}
          </h3>
        </div>
        <div className="category-tab flex justify-start md:justify-center items-center gap-x-6 lg:gap-x-8 py-1.5 mb-15 overflow-x-scroll lg:overflow-hidden">
          {categories.map((category) => (
            <CategoryTabs
              key={category}
              category={category}
              isSelected={category === selectedCategory}
              onClick={() => {
                setSelectedCategory(category);
                setPage(1);
              }}
            >{category}</CategoryTabs>
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
            <div className="flex flex-col justify-center">
                      <article className="text-center">
                        <span className="text-7xl">🍽️</span>
                        <p className="text-[1.563rem] leading-[200%]">No items found in this category.</p>
                      </article>
                    </div>
          )}
        </div>
        <div className="mt-20">
          <PaginationComponents
            page={page}
            size="large"
            shape="rounded"
            count={count}
            defaultPage={page}
            siblingCount={0}
            boundaryCount={1}
            onChange={handlePageChange}
            onClick={handleCategoryTab}
          />
        </div>
      </div>
    </section>
  );
}

