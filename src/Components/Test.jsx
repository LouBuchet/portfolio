import React from "react";
import { Link } from "react-router-dom";
export default function Test (){

return (
 <div>
 <div className="bg-bg font-druck flex items-center justify-center min-h-screen">
   <div className="relative">

     <div className="relative font-bold text-bleuFoncé leading-none">
      
       <div className="flex text-[15vw] relative">
         <span className="mr-4 translate-x-1">P</span>
         <span className="text-rougeFoncé -translate-y-16 -translate-x-0">O</span>
         <span className="ml-8 translate-y-6 translate-x-2">R</span>
         <span className="ml-8 -translate-y-12 -translate-x-6">T</span>
       </div>


       <div className="flex mt-6 text-[15vw] relative">
         <span className="mr-4 translate-y-8 -translate-x-0">F</span>
         <span className="text-rougeFoncé -translate-y-12 translate-x-2">O</span>
         <span className="ml-6 translate-y-4 translate-x-4">L</span>
         <span className="ml-6 -translate-y-10 -translate-x-2">I</span>
         <span className="ml-8 text-rougeFoncé translate-y-8 -translate-x-4">O</span>
       </div>
     </div>


     <div className="flex flex-row-reverse text-[5vw] sm:text-[3vw] text-rose font-semibold">
       2024-2025
     </div>
   </div>
 </div>


 <div className="bg-bg overflow-hidden">
   <div className="w-full mb-5 border-t-2 border-b-2 border-black flex"></div>
   <div className="flex gap-24 animate-leftToRight space-x-16 text-xl sm:text-2xl font-semibold whitespace-nowrap">
     <span className="whitespace-nowrap">Graphisme</span>
     <span className="whitespace-nowrap">UX design</span>
     <span className="whitespace-nowrap">UI design</span>
     <span className="whitespace-nowrap">Motion design</span>
     <span className="whitespace-nowrap">Développement web</span>
   </div>
   <div className="w-full mt-5 border-t-2 border-b-2 border-black flex overflow-hidden"></div>
 </div>


 <div className="bg-bg py-20 px-6 flex flex-col items-center">
   <div className="relative bg-bleuFoncé text-white p-8 rounded-lg w-2/3">
     <h1 className="absolute ml-16 -top-16 left-10 right-40 text-9xl font-druck font-bold text-rose text-shadow-textShadow">
       <span className="text-rougeFoncé">Hello!</span>
     </h1>
     <div className="mt-10 ml-24 text-justify">
       <h2 className="text-2xl font-semibold mb-6">Je m’appelle Lou-June Buchet</h2>
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

 
   <div className="justify-between flex w-2/3 mt-10 gap-10">
     <Link to="/projets">
       <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
         MES PROJETS
       </button>
     </Link>
     <Link to="/cv">
       <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
         MON CV
       </button>
     </Link>
     <Link to="/contacts">
       <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
         CONTACTEZ-MOI
       </button>
     </Link>
   </div>
 </div>
</div>
);
};