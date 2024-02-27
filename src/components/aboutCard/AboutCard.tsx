type TAboutProps = { img: string; title: string; des: string };
const AboutCard = ({ img, title, des }: TAboutProps) => {
  return (
    <div
      className="border rounded-2xl text-center font-inter p-10 w-[340px]
    hover:shadow-[0_20px_30px_-5px_rgba(0,0,0,0.3)]  transition-all duration-300
    "
    >
      <img className="mx-auto" src={img} />
      <h2 className="mt-10 text-3xl font-bold">{title}</h2>
      <p className="mt-5 text-base">{des}</p>
    </div>
  );
};

export default AboutCard;
