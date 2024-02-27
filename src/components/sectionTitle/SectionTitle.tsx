type TTitleProps = {
  title: string;
  des: string;
};

const SectionTitle = ({ title, des }: TTitleProps) => {
  return (
    <div className="text-center mt-8 mb-10">
      <h5 className="text-xl font-semibold text-tangerine"> {title} </h5>
      <h2 className=" text-4xl font-bold  mx-auto">{des}</h2>
    </div>
  );
};

export default SectionTitle;
