

const Cards = ({ item }) => {
  return (
    <>
      <div className=" mt-4 my-4  p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions  justify-between">
              <div className="badge badge-outline">${item.price}</div>

              <div
                className=" 
               hover:bg-pink-500 hover:text-white duration-200  cursor-pointer  px-2 py-1 rounded-lg border-[2px]"
              >
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;