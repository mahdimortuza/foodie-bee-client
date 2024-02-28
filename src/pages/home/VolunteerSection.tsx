import Container from "@/components/Container";

const VolunteerSection = () => {
  return (
    <Container className="py-10">
      <section className="bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-tangerine">
            Virtual Volunteerism
          </h2>
          <p className="text-gray-600 mb-8">
            Make a difference in your community. Become a volunteer and help us
            distribute food to those in need.
          </p>
          <a
            href="/volunteer-signup" // Replace with the actual link to your volunteer signup page
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          >
            Sign Up as a Volunteer
          </a>
        </div>
      </section>
    </Container>
  );
};

export default VolunteerSection;
