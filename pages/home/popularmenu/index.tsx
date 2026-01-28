"use client";

import FoodCard from "@/components/foodcard";
import { data } from "@/data/data";
import { Pagination } from "@mui/material";
import { useWindowWidth } from "@react-hook/window-size";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;

export default function PopularMenu() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const windowWidth = useWindowWidth();

  const count = Math.ceil(data.length / ITEMS_PER_PAGE);
  console.log(count);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentProducts = data.slice(startIndex, endIndex);

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  return (
    <section className="my-28">
      <div className="container mx-auto px-4">
        <div className="text-center pb-15">
          <h3 className="text-[60px] lg:text-[80px] text-medium-roast font-bold leading-[114.9%]">
            Our Popular Menu
          </h3>
        </div>
        <div className="p-4 flex justify-center items-center">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((data) => (
              <FoodCard key={data.id} food={data} />
            ))}
          </div>
        </div>
        <Pagination
          sx={{
            "& .MuiPagination-ul": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            },
            "& .MuiPaginationItem-previousNext": {
              backgroundColor: "#311F09",
              color: "white",
              marginX: "20px",
            },
            "& .MuiPaginationItem-previousNext:hover": {
              backgroundColor: "#382610",
            },
            "& .MuiPaginationItem-page": {
              backgroundColor: "#FFF4E6",
              color: "#FF8A00",
              fontWeight: "bold",
              marginX: "5px",
            },
            "& .MuiPaginationItem-page:hover": { backgroundColor: "#FFE2BF" },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#FFDBB0",
            },
          }}
          size="medium"
          shape="rounded"
          defaultPage={startIndex}
          count={count}
          onChange={handlePageChange}
        />
      </div>
    </section>
  );
}
