
import Rating from "@mui/material/Rating";
import { styled } from "@mui/system";

interface RatingComponentProps {
  name?: string;
  defaultValue?: number;
  max?: number;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  precision?: number;
}

const StyleRating = styled(Rating)({
  "& .MuiRating-decimal": {
    marginLeft: 5,
    marginRight: 5
  }
})

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
      <StyleRating
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
