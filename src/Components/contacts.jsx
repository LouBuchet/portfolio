import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="bg-bg min-h-screen ">
      <div className="font-druck flex items-center justify-center min-h-screen">
        <div className="text-left">
          <h2 className="text-[6rem] font-bold text-bleuFoncé leading-none">
            MES
          </h2>
          <h1 className="text-rougeFoncé text-[12rem] font-bold leading-none">
            CONTACTS
          </h1>
        </div>
      </div>

      {/* Section des boutons */}
      <div className=" flex justify-between w-2/3 mx-auto gap-10">
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

export default Contacts;
