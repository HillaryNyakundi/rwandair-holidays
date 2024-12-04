import Hero from "../assets/Clip path group.jpg";

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <div>
        <img className="w-full h-auto object-cover" src={Hero} alt="Hero" />
      </div>
    </section>
  );
};

export default Home;
