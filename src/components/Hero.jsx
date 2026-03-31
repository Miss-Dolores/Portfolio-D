
export const Hero = () => {
  return (
    <section className="hero bg-gray-800 text-white py-20 text-center text-sm md:text-lg">
      <div className="max-w-4xl mx-auto px-4">
         <div className="flex-col h-1/2 gap-4  md:flex-row md:flex items-center justify-center"> 
            <div>
        <h1 className="text-2xl font-bold md:text-5xl">Hello, Ici c'est DoloresDev</h1>
        <p className="mt-4 text-md md:text-xl"> Une developpeuse web full-stack en formation.
          Je suis à quelques mois de formation mais j'espère pouvoir contribuer à des projets passionnants. </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100">
        Contactez-moi
        </button> </div>
        <div className="w-full overflow-hidden flex justify-center items-center"> 
          <img src="image.jpg" alt="photo" className="border-10 border-blue-800/20 w-70 h-100 md:w-120 lg:h-140 xl:h-160 object-cover object-center"
          style={{ borderRadius: '17% 83% 56% 44% / 58% 71% 29% 42%' }} />
       </div> 
          
         </div>
        </div>
  
    </section>
  );
}
