type THeroItemsProps = {
  img: string;
  name: string;
  des: string;
  price: number;
};

const HeroItemCard = ({ img, name, des, price }: THeroItemsProps) => {
  return (
    <div className="text-center bg-white rounded-2xl m-5 mt-10">
      <div className="-mt-10 flex flex-col justify-between font-inter">
        <img className="w-[200px] h-auto mx-auto" src={img} />
        <h3 className="text-xl font-bold">{name}</h3>
        <p>{des}</p>
        <h4>
          <span>$</span>
          {price}
        </h4>
      </div>
    </div>
  );
};

export default HeroItemCard;
