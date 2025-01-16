


const App = () => {
  return (
    <div>
    <div className="bg-bg font-druck flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Conteneur principal pour le texte "PORTFOLIO" */}
        <div className="relative font-bold text-bleuFoncé leading-none">
          {/* Ligne 1 */}
          <div className="flex text-[15vw] relative">
            <span className="mr-4 translate-x-1">P</span>
            <span className="text-rougeFoncé -translate-y-16 -translate-x-0">O</span>
            <span className="ml-8 translate-y-6 translate-x-2">R</span>
            <span className="ml-8 -translate-y-12 -translate-x-6">T</span>
          </div>


          {/* Ligne 2 */}
          <div className="flex mt-6 text-[15vw] relative">
            <span className="mr-4 translate-y-8 -translate-x-0">F</span>
            <span className="text-rougeFoncé -translate-y-12 translate-x-2">O</span>
            <span className="ml-6 translate-y-4 translate-x-4">L</span>
            <span className="ml-6 -translate-y-10 -translate-x-2">I</span>
            <span className="ml-8 text-rougeFoncé translate-y-8 -translate-x-4">O</span>
          </div>
        </div>

        {/* Texte "2024-2025" */}
        <div className="flex flex-row-reverse text-[5vw] sm:text-[3vw] text-rose font-semibold">
          2024-2025
        </div>
      </div>
      </div>
  
    
    <div className="bg-bg overflow-hidden">
    <div class="  w-full mb-5 border-t-2 border-b-2 border-black flex "></div>
    <div className="flex gap-24 animate-leftToRight space-x-16 text-xl sm:text-2xl font-semibold whitespace-nowrap">
          <span className="whitespace-nowrap">Graphisme</span>
          <span className="whitespace-nowrap">UX design</span>
          <span className="whitespace-nowrap">UI design</span>
          <span className="whitespace-nowrap">Motion design</span>
          <span className="whitespace-nowrap">Développement web</span>
          
          
        </div>
        <div class=" w-full mt-5 border-t-2 border-b-2 border-black flex overflow-hidden"></div>
        </div>

        {/* PRÉSENTATION */}

        <div className="bg-bg py-20 px-6 flex flex-col items-center">
  {/* Section d'introduction */}
  <div className="relative bg-bleuFoncé text-white p-8 rounded-lg w-2/3">
    {/* Hello ! */}
    <h1 className="absolute ml-16 -top-16 left-10 right-40 text-9xl font-druck font-bold text-rose text-shadow-textShadow">
      Hello <span className="text-rose">!</span>
    </h1>

    {/* Rectangle gris */}
    {/* <div className="absolute -top-10 right-20 bg-gray-300 rounded-lg w-64 h-96"></div> */}

    {/* Texte principal */}
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

 {/* BOUTONS */}

<div className="justify-between flex w-2/3 mt-10">
  {/* Bouton PROJETS */}
  <a href=" /portfolio/public/Components/projets.jsx" className="">
  <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
  MES PROJETS
  </button>
</a>


  {/* Bouton MON CV */}
  <a href=" /portfolio/public/Components/cv.jsx" className="">
  <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
    MON CV
  </button>
  </a>

  {/* Bouton CONTACT */}
  <a href="/portfolio/public/Components/contacts.jsx " className="">
  <button className="flex-1 bg-rose text-white font-bold w-80 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
  CONTACTEZ-MOI
  </button>
  </a>

</div>



  {/* PROJETS */}

  {/* <div className="mt-20 px-10 py-10 bg-bg rounded-lg flex flex-col space-y-8">
  <div className="flex flex-col md:w-1/2 font-druck">
    <h2 className="text-9xl font-bold text-rose">01.</h2>
    <h3 className="text-8xl font-semibold mt-2 text-rose">AFFICHES DE MATCHS</h3>
  </div> */}

  {/* Contenu principal : texte descriptif et galerie d'images */}
  {/* <div className="flex flex-col md:flex-row gap-10">  */}
    {/* Colonne gauche : Texte descriptif */}
    {/* <div className="w-full md:w-1/2 flex flex-col space-y-4">
      <p className="text-lg font-light">GRAPHISME</p>
      <p className="text-lg leading-relaxed text-justify">
      Lors de mon stage au Limoges CSP, j'avais pour mission de réaliser les visuels de matchs pour l'équipe espoir. Ces affiches étaient destinées à promouvoir les rencontres sportives sur les réseaux sociaux et à maintenir l’engouement des supporters autour de cette catégorie de jeunes talents. Mon travail impliquait de créer des designs attractifs et dynamiques, en cohérence avec la charte graphique du club, tout en mettant en avant les informations essentielles du match. Cette responsabilité m’a permis de contribuer directement à la communication du club et de perfectionner mes compétences en graphisme, notamment sur des outils tels que Photoshop.
      </p>
    </div> */} 

    {/* Colonne droite : Galerie d'images */}
    {/* <div className="grid grid-cols-3 gap-4 w-full md:w-1/2 top-9">
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
      <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
    </div>
  </div>
</div> */}




</div>




    </div>
  );
};

export default App;
