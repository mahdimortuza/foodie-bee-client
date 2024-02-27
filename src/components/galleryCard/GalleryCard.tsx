type TGalleryProps = {
  img: string;
};

const GalleryCard = ({ img }: TGalleryProps) => {
  return (
    <div>
      <img src={img} />
    </div>
  );
};

export default GalleryCard;
