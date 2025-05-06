import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ rating,value }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
      )} <span className="text-sm ml-2 text-[rgba(0,0,0,0.5)]">({value})</span>
    </div>

  );
};

export default Rating