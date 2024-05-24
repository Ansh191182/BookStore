import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-20px px-4">
        <div className=" mt-28 items-center justify-center  text-center">
          <h1 className=" text-2xl font-semibold md:text-4xl  ">
            We're delighted to have you{" "}
            <span className=" text-pink-500">Here! :</span>
          </h1>
          <p className=" mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo magnam
            dolor recusandae, fugiat nisi corporis optio iste minima quia sint
            sequi quaerat suscipit totam? Asperiores doloremque similique
            repellat assumenda nihil! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Dignissimos inventore atque nisi consectetur
            voluptate animi aliquam vitae autem, laboriosam quam eos
            reprehenderit et suscipit aperiam repellendus obcaecati assumenda,
            blanditiis ipsum!
          </p>
          <Link to="/">
            <button className=" bg-pink-500 text-white px-4 py-2  rounded-md mt-7 hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
