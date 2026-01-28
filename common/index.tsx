import usePagination, { UsePaginationProps } from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
});

export default function UsePagination({ totalPage, handlePagination }: any) {
  const { items } = usePagination({
    count: totalPage,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...data }, index) => {
          let children = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className="bg-dark-orange/30 px-4 py-2 mx-2 rounded-lg text-dark-orange"
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...data}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                  handlePagination(page)
                }
              >
                {page}
                {children}
              </button>
            );
          } else {
            children = (
              <ArrowButton
                className="bg-medium-roast text-white py-3 px-3 mx-5 rounded-lg"
                type="button"
                {...data}
              >
                {type}
                {}
              </ArrowButton>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}

interface ArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ArrowButton({ children, ...props }: ArrowButtonProps) {
  return (
    <button {...props}>
      {children === "previous" ? <IoIosArrowBack /> : <IoIosArrowForward />}
    </button>
  );
}
