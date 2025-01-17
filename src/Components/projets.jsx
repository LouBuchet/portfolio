import React from "react";
import { Link } from "react-router-dom";

const Projets = () => {
  return (
    <div className="bg-bg min-h-screen">
      <div className="font-druck flex items-center justify-center pt-64">
        <div className="text-left">
          <h2 className="text-[6rem] font-bold text-bleuFoncé leading-none">
            MES
          </h2>
          <h1 className="text-rougeFoncé text-[12rem] font-bold leading-none">
            PROJETS
          </h1>
        </div>
      </div>

      {/* Carte avec image de fond */}
      <div className="relative w-[300px] h-[200px] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-[1.2] hover:shadow-lg">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{ backgroundImage: "url('your-image-url.jpg')" }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full p-5 box-border bg-gray-200 transform rotate-x-[-90deg] origin-bottom transition-all duration-700 ease-in-out opacity-0 hover:opacity-100 hover:rotate-x-0">
          <p className="m-0 text-2xl text-[#333] font-bold">Card Title</p>
          <p className="mt-2 text-sm text-[#777] leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>

      {/* Section des boutons */}
      <div className="flex justify-between w-2/3 mx-auto gap-10">
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
  );
};

export default Projets;
