import React from "react";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <div className="bg-bg min-h-screen ">
        <Link to="/Test">
          <button className="flex-1 bg-rose text-bg font-bold mt-5 ml-5 w-64 py-4 rounded-lg border-2 border-transparent hover:border-rose hover:bg-transparent hover:text-rose">
                ACCUEIL
          </button>
        </Link>
      <div className="font-druck flex items-center justify-center pt-56">
        <div className="text-left">
          <h2 className="text-[6rem] font-bold text-bleuFoncé leading-none">
            MES
          </h2>
          <h1 className="text-rougeFoncé text-[12rem] font-bold leading-none">
            CONTACTS
          </h1>
        </div>
      </div>
      <div className="flex flex-row gap-10 mb-20 mt-20 justify-center items-center">
        <div class="product-card w-[300px] rounded-3xl shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-rougeFoncé flex flex-col items-center justify-center gap-5 group">
          <div class="text-center leading-none z-40 justify-center items-center flex flex-row gap-2">
            <img
              class="h-10"
              src="/public/assets/Vector (3).png"
              alt="Image"
            ></img>
            <p class="font-bold text-3xl tracking-wider text-bg flex-shrink-0">
              E-MAIL
            </p>
          </div>
          <a href="mailto:loujunebuchet@gmail.com">
            <p class="font-semibold text-lg text-bg hover:text-rose">
              loujunebuchet@gmail.com
            </p>
          </a>
        </div>

        <div class="product-card w-[300px] rounded-3xl shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-rougeFoncé flex flex-col items-center justify-center gap-5 group">
          <div class="text-center leading-none z-40 justify-center items-center flex flex-row gap-1">
            <img
              class="h-10"
              src="/public/assets/Vector (4).png"
              alt="Image"
            ></img>
            <p class="font-bold text-3xl tracking-wider text-bg flex-shrink-0">
              TÉLÉPHONE
            </p>
          </div>
          <a href="tel:+33608578906">
            <p class="font-semibold text-lg text-bg hover:text-rose">
              06.08.57.89.06
            </p>
          </a>
        </div>

        <div class="product-card w-[300px] rounded-3xl shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-rougeFoncé flex flex-col items-center justify-center gap-5 group">
          <div class="text-center leading-none z-40 justify-center items-center flex flex-row gap-2">
            <img
              class="h-10"
              src="/public/assets/Vector (5).png"
              alt="Image"
            ></img>
            <p class="font-bold text-3xl tracking-wider text-bg flex-shrink-0">
              LINKEDIN
            </p>
          </div>
          <a
            href="https://www.linkedin.com/in/lou-june-buchet-189028259/"
            target="_blank"
          >
            <p class="font-semibold text-base text-bg hover:text-rose text-center">
              linkedin.com/in/lou-june-buchet
            </p>
          </a>
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
