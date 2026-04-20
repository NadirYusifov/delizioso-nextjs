"use client";

import { data } from "@/data/menu";
import { PizzaList } from "../pizzalist";
import { OrderList } from "../orderlist";
import FoodCard from "@/components/foodcard";
import { useAppSelector } from "@/lib/hooks";
import { ChangeEvent, useState } from "react";
import { CategoryTabs } from "@/components/categorytabs";
import { PaginationComponents } from "@/components/pagination";
import { OrderListMobile } from "../orderlist/orderlistmobile";
import { selectCartItems, selectTotalPrice } from "@/lib/features/cartSlice";

const ITEMS_PER_PAGE = 9;

export const PastaList = () => {
  const items = useAppSelector(selectCartItems)
  const totalPrice = useAppSelector(selectTotalPrice)
  const [open, setOpen] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All category");

  const categories = ["All category", "Dinner", "Lunch", "Dessert", "Drink"];

  const filteredpastaData =
    selectedCategory === "All category"
      ? data.filter((item) => item.title === "pasta")
      : data.filter((item) => item.category === selectedCategory && item.title === "pasta");
  const filteredpizzaData =
    selectedCategory === "All category"
      ? data.filter((item) => item.title === "pizza")
      : data.filter((item) => item.category === selectedCategory && item.title === "pizza");

  const pastaCount = Math.ceil(filteredpastaData.length / ITEMS_PER_PAGE);
  const pizzaCount = Math.ceil(filteredpizzaData.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pastaProducts = filteredpastaData.slice(startIndex, endIndex);

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
    const menuCatgeoryScroll = document.querySelector(".category-tab")
    menuCatgeoryScroll?.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  // ==============================

  return (
    <section className="my-28">
      <div className="">
        <div className="container mx-auto px-4">
          <div className="text-center pb-15">
            <h3 className="text-[60px] lg:text-[80px] text-dark-coffee font-bold font-tinos leading-[114.9%]">
              {"Menu"}
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
          <div className="flex justify-between">
            <div className="flex flex-col">
              <article className="pb-15">
                <h2 className="uppercase inline-block text-[1.875rem] font-semibold font-popins leading-[100%] border-b-2 border-dark-orange">
                  Pasta
                </h2>
              </article>
              <div className="">
                {pastaProducts.length > 0 ? (
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                    {pastaProducts.map((item) => (
                      <FoodCard key={item.id} food={item} />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 lg:gap-10">
                    <article className="col-start-2 text-center">
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
                  count={pastaCount}
                  defaultPage={page}
                  siblingCount={0}
                  boundaryCount={1}
                  onChange={handlePageChange}
                  onClick={handleCategoryTab}
                />
              </div>
              <PizzaList
                filteredpizzaData={filteredpizzaData}
                pizzaCount={pizzaCount}
                handleCategoryTab = {handleCategoryTab}
              />
            </div>
            <aside className="hidden lg:block">
              <OrderList />
            </aside>
          </div>
          <div className="lg:hidden flex justify-between items-center my-20">
            {items.length > 0 ? (
              <article className="space-y-2">
                <p className="text-dark-coffee font-popins text-[1rem] leading-[100%]">{items.length} items</p>
                <span className="text-dark-orange text-[1.563rem] font-semibold font-popins leading-[100%]">${totalPrice.toFixed(2)}</span>
              </article>
            ) : (
              <article className="space-y-2">
                <p className="text-dark-coffee font-popins text-[1rem] leading-[100%]">0 items</p>
                <span className="text-dark-orange text-[1.563rem] font-semibold font-popins leading-[100%]">$0</span>
              </article>
            )}

            {/* <Button onClick={() => console.log(open)} className="rounded-[0.625rem] font-popins font-semibold text-[1rem] leading-[100%] bg-emerald text-white px-12.5 py-6" variant="default" title="Order now" /> */}
            <button onClick={() => setOpen(!open)} className="rounded-[0.625rem] font-popins font-semibold text-[1rem] leading-[100%] bg-emerald text-white px-12.5 py-6 cursor-pointer">
              {open && <OrderListMobile onClose={() => setOpen(false)} />} Order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
