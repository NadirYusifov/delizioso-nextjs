import { Button } from "@/common/button";

interface CategoryTabsProps {
  category: string;
  title: string;
  onClick: () => void;
  isSelected: boolean;
}

export const CategoryTabs = ({ category, title, onClick, isSelected }: CategoryTabsProps) => {
  return (
    <Button
      className={`px-[1.063rem] lg:px-[3.388rem] h-10 lg:h-[4.003rem] font-popins font-semibold leading-[200%] text-[0.975rem] lg:text-[1.25rem] ${isSelected ? "bg-dark-coffee text-white" : "bg-dust-grey/10"}`}
      variant="default"
      key={category}
      title={title}
      onClick={onClick}
    />
  );
};
