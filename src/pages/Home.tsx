import Hero from "../assets/Clip path group.jpg";

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <div className="relative h-screen">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={Hero}
          alt="Hero"
        />
      </div>
    </section>
  );
};

export default Home;
