import Image from "next/image";
import { Foods } from "@/data/data";
import RatingComponents from "@/common/rating";
import { FilledStar, EmptyStar } from "@/common/icon/star";
import { Button } from "@/common/button";

interface props {
  food: Foods;
}

export default function FoodCard({ food }: props) {
  return (
    <div>
      <div className="card bg-dust-grey/10 w-96 shadow-sm">
        <figure>
          <Image src={""} width={100} height={100} alt="food" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food.name}</h2>
          <RatingComponents
            name="customize-star"
            max={5}
            defaultValue={food.rating}
            precision={0.5}
            icon={<FilledStar />}
            emptyIcon={<EmptyStar />}
          />
          <p>{food.description}</p>
          <div className="card-actions justify-end">
            <Button title="Order now"/>
          </div>
        </div>
      </div>
    </div>
  );
}
