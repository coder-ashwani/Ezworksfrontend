const Card = ({ image, title, description }) => {
  return (
    <div className=" container p-3  mt-6  ml-4   border-2 border-black rounded-md h-[170px] w-[180px] bg-[#112949] ">
      <div className="flex items-center pb-1">
        <img
          src={image}
          // alt={title}
          className="w-[40px] h-[40px] object-cover mr-4"
        />
        <p className="text-[15px] font-semibold text-[#3CC3F2] ">{title}</p>
      </div>
      <p className="text-[13px] text-white mt-1">{description}</p>
    </div>
  );
};

export default Card;
