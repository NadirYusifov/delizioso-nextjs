import Image from "next/image";
import { Foods } from "@/data/data";
import { Button } from "@/common/button";
import RatingComponents from "@/common/rating";
import { FilledStar, EmptyStar } from "@/common/icon/star";

interface props {
  food: Foods;
}

export default function FoodCard({ food }: props) {
  return (
    <div className="group">
      <div className="card bg-dust-grey/10 group-hover:bg-dark-orange w-[155.34px] lg:w-96 shadow-sm rounded-[70px] px-3.5 py-3.5 transition-all ease-in-out duration-200">
        <figure>
          <Image src={food.image} width={300} height={300} alt={food.name} />
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
