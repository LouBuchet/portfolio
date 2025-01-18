import React from "react";
import { Link } from "react-router-dom";

const Cv = () => {
  return (
    <div className="bg-bg min-h-screen">
        <Link to="/Test">
                  <button className="flex-1 bg-rose text-bg font-bold mt-5 ml-5 w-64 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
                        ACCUEIL
                  </button>
                </Link>
      <div className="font-druck flex items-center justify-center pt-64">
        <div className="text-left">
          <h2 className="text-[6rem] font-bold text-bleuFoncé leading-none">
            A PROPOS
          </h2>
          <h1 className="text-rougeFoncé text-[12rem] font-bold leading-none">
            DE MOI
          </h1>
          
        </div>
      </div>
       <div className="bg-bg py-20 px-6 flex flex-col items-center">
         <div className="relative bg-bleuFoncé text-bg p-8 rounded-lg w-2/3">
         <h1 className=" absolute ml-16 -top-14 left-11 text-9xl font-druck font-bold text-rose text-shadow-textShadow">
             <span className="text-bg">Hello!</span>
           </h1>
           <h1 className="absolute ml-16 -top-16 left-10 right-40 text-9xl font-druck font-bold text-rose text-shadow-textShadow">
             <span className="text-rougeFoncé">Hello!</span>
           </h1>
           <div className="mt-10 ml-24 text-justify">
             <h2 className="text-2xl font-semibold mb-6">Bienvenue sur mon portfolio!</h2>
             <p className="text-xl font-light max-w-3xl leading-relaxed">
             Je suis actuellement en 3ème année de BUT Métiers du Multimédia et de
         l’Internet à Limoges. J’étudie la communication digitale, le graphisme,
         l’audiovisuel ainsi que le développement web.
         Passionnée par les nouvelles technologies, je souhaite explorer de
         nouvelles approches créatives tout en renforçant mes compétences
         techniques. Mon objectif est de contribuer à des projets novateurs
         qui allient design et technologie.
             </p>
           </div>
         </div>

         {/* <div className="w-full bg-rougeFoncé flex justify-center items-center mt-9">
  <div className="">
    <img
      className="rounded-lg shadow-md h-96"
      src="/public/assets/CV.jpg"
      alt="Aperçu du CV"
    />
  </div>
</div> */}




      
       
         <div className="justify-between flex w-2/3 mt-10 gap-10">
           <Link to="/projets">
             <button className="flex-1 bg-rose text-bg font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
               MES PROJETS
             </button>
           </Link>
           <Link to="/cv">
             <button className="flex-1 bg-rose text-bg font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
               À PROPOS DE MOI
             </button>
           </Link>
           <Link to="/contacts">
             <button className="flex-1 bg-rose text-bg font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
               CONTACTEZ-MOI
             </button>
           </Link>
         </div>
       </div>
    </div>
  );
};

export default Cv;

  