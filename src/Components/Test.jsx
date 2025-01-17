import React from "react";
import { Link } from "react-router-dom";
export default function Test (){

return (
 <div>
 <div className="bg-bg font-druck flex items-center justify-center min-h-screen">
   

   <div className="font-druck flex items-center justify-center min-h-screen bg-bg">
  <div className="text-left">
    <h2 className="text-[10rem] font-bold text-bleuFoncé leading-none">MON</h2>
    <h1 className="text-rougeFoncé text-[17rem] font-bold leading-none">PORTFOLIO</h1>
    <p className="text-[3rem] text-bleuFoncé font-semibold text-right">2024-2025</p>
  </div>
</div>
 </div>


 <div className="bg-bg overflow-hidden">
   <div className="w-full  mb-5 border-t-2 border-b-2 border-bleuFoncé flex"></div>
   <div className="flex gap-24 text-bleuFoncé animate-leftToRight space-x-16 text-xl sm:text-2xl font-semibold whitespace-nowrap">
     <span className="whitespace-nowrap">Graphisme</span>
     <span className="whitespace-nowrap">UX design</span>
     <span className="whitespace-nowrap">UI design</span>
     <span className="whitespace-nowrap">Motion design</span>
     <span className="whitespace-nowrap">Développement web</span>
   </div>
   <div className="w-full mt-5 border-t-2 border-b-2 border-bleuFoncé flex overflow-hidden"></div>
 </div>


 <div className="bg-bg py-20 px-6 flex flex-col items-center">
   <div className="relative bg-bleuFoncé text-bg p-8 rounded-lg w-2/3">
     <h1 className="absolute ml-16 -top-16 left-10 right-40 text-9xl font-druck font-bold text-rose text-shadow-textShadow">
       <span className="text-rougeFoncé">Hello!</span>
     </h1>
     <div className="mt-10 ml-24 text-justify">
       <h2 className="text-2xl font-semibold mb-6">Bienvenue sur mon portfolio!</h2>
       <p className="text-xl font-light max-w-3xl leading-relaxed">
     Ici, vous pourrez découvrir mes projets personnels et professionnels. Chaque projet est une occasion pour moi de tester de nouvelles idées, d'explorer des solutions créatives et de relever des défis techniques. Que ce soit en design graphique, développement web ou communication visuelle, vous trouverez un aperçu de mon travail et de ce que je peux apporter à un projet.
       </p>
     </div>
   </div>

 
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