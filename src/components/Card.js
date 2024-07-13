import React from "react";
import { FcLike } from "react-icons/fc";

const Card = ({course }) => {
  //  let course = props.course;
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt="" />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
          <button>
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6"> {course.title}</p>
        <p className='mt-2 text-white'> {course.description}</p>
      </div>
    </div>
  );
};

export default Card;