export type TVolunteerProps = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
};
type TVolunteerItem = {
  item: TVolunteerProps;
};
const VolunteerCard = ({ item }: TVolunteerItem) => {
  const { name, email, phone, location } = item;
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default VolunteerCard;
