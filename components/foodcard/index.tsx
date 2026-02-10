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
    <div className="group">
      <div className="card bg-dust-grey/10 group-hover:bg-dark-orange w-[155.34px] h-63.75 lg:w-96 shadow-sm rounded-[70px] px-8 py-5">
        <figure>
          <Image src={""} width={100} height={100} alt="food" />
        </figure>
        <div className="card-body">
        <div className="flex justify-center items-center flex-col">
          <article className="card-title">
            <h2 className="text-dark-coffee group-hover:text-white text text-[1.875rem] font-semibold leading-[200%] font-popins">{food.name}</h2>
          </article>
          <RatingComponents
            name="customize-star"
            max={5}
            defaultValue={food.rating}
            precision={0.5}
            icon={<FilledStar />}
            emptyIcon={<EmptyStar />}
          />
        </div>
          <article className="text-center">
            <p className="text-shadow-deep-walnut-2 group-hover:text-white text-[0.875rem] font-normal font-popins leading-[200%]">{food.description}</p>
          </article>
          <div className="card-actions flex justify-between items-center">
            <p className="text-dark-coffee group-hover:text-white text-[1.563rem] font-semibold leading-[100%] font-popins">${food.price}</p>
            <Button className="group-hover:bg-white group-hover:text-dark-orange" title="Order now" />
          </div>
        </div>
      </div>
    </div>
  );
}
