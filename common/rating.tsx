
import { styled } from "@mui/system";
import Rating from "@mui/material/Rating";

interface RatingComponentProps {
  name?: string;
  defaultValue?: number;
  max?: number;
  icon?: React.ReactNode;
  emptyIcon?: React.ReactNode;
  precision?: number;
}

const StyleRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-decimal": {
    marginLeft: 5,
    marginRight: 5
  },
  "& .css-xbcal6-MuiSvgIcon-root": {
    [theme.breakpoints.down("md")]: {
      width: "16px",
      height: "16px"
    }
  }
}));

export default function RatingComponents({
  name,
  defaultValue,
  max,
  icon,
  emptyIcon,
  precision,
}: RatingComponentProps) {

  return (
    <>
      <StyleRating
        name={name}
        defaultValue={defaultValue}
        precision={precision}
        max={max}
        icon={icon}
        emptyIcon={emptyIcon}
      />
    </>
  );
}
