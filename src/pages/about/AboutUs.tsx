import Container from "@/components/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import VolunteerCard from "@/components/volunteerCard/VolunteerCard";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/volunteer")
      .then((response) => response.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <Container className="py-5">
      <SectionTitle title="Volunteer" des="Our Volunteers" />

      <div id="our-volunteers">
        <h2 className="text-2xl font-bold mb-4">Our Volunteers</h2>
        {volunteers.map((item, index) => (
          <VolunteerCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default AboutUs;
