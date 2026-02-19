import Image from "next/image";
import { Foods } from "@/data/data";
import { Button } from "@/common/button";
import RatingComponents from "@/common/rating";
import { FilledStar, EmptyStar } from "@/common/icon/star";
import { useWindowWidth } from "@react-hook/window-size";

interface props {
  food: Foods;
}

export default function FoodCard({ food }: props) {
  const windowWidth = useWindowWidth()

  return (
    <div className="group">
      <div className="card bg-dust-grey/10 group-hover:bg-dark-orange max-w-full lg:w-96 shadow-sm rounded-[18.6px] lg:rounded-[70px] p-0 lg:p-3.5 transition-all ease-in-out duration-200">
        <figure>
          <Image src={food.image} width={300} height={300} alt={food.name} />
        </figure>
        <div className="card-body p-3.5 lg:p-4">
          <div className="flex justify-center items-center flex-col">
            <article className="card-title">
              <h2 className="text-dark-coffee group-hover:text-white text text-[1.875rem] font-semibold leading-[200%] font-popins">
                {food.name}
              </h2>
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
            <p className="text-shadow-deep-walnut-2 truncate group-hover:text-white text-[0.875rem] font-normal font-popins leading-[200%]">
              {food.description}
            </p>
          </article>
          <div className="card-actions flex justify-between items-center">
            <p className="text-dark-orange lg:text-dark-coffee group-hover:text-white text-[1.25rem] md:text-[1.45rem] lg:text-[1.563rem] font-semibold leading-[100%] font-popins">
              ${food.price}
            </p>
            {windowWidth >= 1024 ? (
              <Button
                className="h-[3.438rem] text-[1rem] font-semibold leading-[200%] font-popins group-hover:bg-white group-hover:text-dark-orange py-[0.719rem] px-[2.279rem]"
                title="Order now"
              />
            ) : (
              <Button
                className="w-10 h-10 md:w-[2.878rem] md:h-[2.878rem] lg:w-[3.078rem] lg:h-[3.078rem] text-[1.125rem] md:text-[1.125rem] lg:text-[1rem] font-semibold leading-[200%] font-popins group-hover:bg-white group-hover:text-dark-orange"
                title="+"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
