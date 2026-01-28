import Rating from "@mui/material/Rating";

interface RatingComponentProps {
  name?: string;
  defaultValue?: number;
  max?: number;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  precision?: number;
}

export default function RatingComponents({
  name,
  defaultValue,
  max,
  icon,
  emptyIcon,
  precision,
}: RatingComponentProps) {
  return (
    <div>
      <Rating
        name={name}
        defaultValue={defaultValue}
        precision={precision}
        max={max}
        icon={icon}
        emptyIcon={emptyIcon}
      />
    </div>
  );
}
