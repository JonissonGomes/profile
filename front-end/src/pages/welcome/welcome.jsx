//  Importando estilo da página
import "./welcome.css";

//  Importando imagens
import iconProfile from "../../assets/profile.jpeg";
import iconGit from "../../assets/Git-icon.svg";
import iconInstagram from "../../assets/Instagram-icon.svg";
import iconLinkedin from "../../assets/Linkedin-icon.svg";
import iconPortifolio from "../../assets/Portifolio-icon.svg";

function Welcome() {
  return (
    <div className="welcomeContainer">
      <h1>SEJA BEM VINDO</h1>
      <h3>Para quem deseja conhecer um pouco sobre meu mundo.</h3>

      <section className="boxName">
        <img src={iconProfile} alt="Profile" />
        <h3>Jonisson Gomes da Silva</h3>
        <h4>Front-End Engennier</h4>
      </section>

      <section className="boxContainer">
        <section className="box">
          <button>
            <img src={iconGit} alt="logoImage" />
            <h3>GitHub</h3>
          </button>
          <button>
            <img src={iconLinkedin} alt="logoImage" />
            <h3>Linkedin</h3>
          </button>
        </section>

        <section className="box">
          <button>
            <img src={iconInstagram} alt="logoImage" />
            <h3>Instagram</h3>
          </button>

          <button>
            <img src={iconPortifolio} alt="logoImage" />
            <h3>Portifólio</h3>
          </button>
        </section>
      </section>
    </div>
  );
}

export default Welcome;
