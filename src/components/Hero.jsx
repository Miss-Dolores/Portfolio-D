// components/Hero.jsx
export const Hero = () => {
  return (
    <section className="hero bg-blue-600 text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-center space-x-4">
          <img src="" alt="Hero" className="mx-auto rounded-full" /> Dolores<span className="text-yellow">Dev</span>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Accueil</a></li>
              <li><a href="#" className="hover:underline">À propos</a></li>
              <li><a href="#" className="hover:underline">Mes expériences</a></li>
                <li><a href="#" className="hover:underline">Mes projets</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex h-1/2 gap-4"> 
            <div>
        <h1 className="text-4xl font-bold">Hello, Ici c'est DoloresDev</h1>
        <p className="mt-4 text-lg"> Une developpeuse web full-stack en formation. </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded hover:bg-gray-100">
        Contactez-moi
        </button> </div>
        <div className=""> <img src="IMG.jpeg" alt="photo" /></div>
        </div>
      </div>
    </section>
  );
}
