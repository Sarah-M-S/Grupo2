import logo from "../images/logo.png";
import cookie from "../images/cookie.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/loginPage");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleWhoWeAre = () => {
    navigate("/whoWeAre");
  };

  const handleFaq = () => {
    navigate("/faq");
  };

  const handleCookies = () => {
    navigate("/cookies");
  };

  const { t } = useTranslation();

  return (
    <div className="w-svw h-svh flex-col">
      <div className="h-[90%] w-full flex flex-col items-center justify-center">
        <div className="flex-col space-y-12">
          <div className="">
            <img src={logo} />
            <h2 className="text-[220%] font-semibold">
            {t("iChei")}
            </h2>
          </div>

          <div className="flex-row space-x-12">
            <button
              onClick={handleLogin}
              className="bg-white rounded-full py-2 px-12 text-[180%] font-semibold"
            >
              {t("login")}
            </button>
            <button
              onClick={handleRegister}
              className="bg-white rounded-full py-2 px-12 text-[180%] font-semibold"
            >
              {t("cadastro")}
            </button>
          </div>
        </div>
      </div>

      <div className="h-[10%] w-full flex-col content-center">
        <div className="flex justify-between px-8">
          <button
          onClick={handleCookies}>
            <img src={cookie} width="50" height="50" />
          </button>
          
          {/* 
          <div className="flex space-x-8 items-center">
            <button>
              <p 
              onClick={handleFaq}
              className="text-[120%] font-semibold">FAQ</p>
            </button>
            <button className="pr-16">
              <p 
              onClick={handleWhoWeAre}
              className="text-[120%] font-semibold">{t("quemSomos")}</p>
            </button>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Home;
