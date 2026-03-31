export const About = () => {
  return (
    <section className=" py-20 bg-gray-800 text-white about">
      <div className="max-w-4xl mx-4 px-6 h-screen flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4 md:text-5xl">À propos</h2>
        <div className="hidden md:flex-col  text-center  md:flex">
            <img src='image.jpg' alt="photo" className='w-96 object-cover rounded-xl' />
        <p className="text-lg leading-relaxed md:text-2xl">
          Je suis une développeuse web full-stack en formation. Passionnée par la création de solutions web innovantes, je cherche à contribuer à des projets passionnants et à développer mes compétences techniques.
        </p> </div>
      </div>
    </section>
  );
};
