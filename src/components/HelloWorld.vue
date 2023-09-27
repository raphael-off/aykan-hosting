<template>
  <body class="finisher-header">
    <header>
      <div class="logoContainer">
        <img
          src="https://fantastic-haupia-740af4.netlify.app/assets/logo.png"
        />
      </div>

      <nav>
        <ul>
          <li><a href="#hostingPlan">Nos offres</a></li>
          <li><a href="#whyUs">Pourquoi nous ?</a></li>
          <li><a href="#blogAndRessources">Blog & Ressources</a></li>
          <li><a href="#ourValues">Nos valeurs</a></li>
          <!--<li><a href="#">Contact</a></li>-->
        </ul>
      </nav>

      <div class="buttonContainer">
        <a href="#contactUs">Contact</a>
      </div>
    </header>

    <main>
      <div class="mainContainer">
        <div class="firstSectionBox">
          <section class="firstSection">
            <div class="firstSection-text">
              <h1>Aikyan Hosting</h1>
              <p>
                Vos applications méritent le meilleur - Optez pour nos solutions
                VPS de qualité.
              </p>
            </div>
            <div class="firstSection-sideImage">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/host.png"
              />
            </div>
          </section>
          <aside class="bgHeroBanner"></aside>
        </div>

        <section id="hostingPlan" class="sectionPart hostingPlan">
          <h2>Nos offres d'hébergement VPS</h2>
          <article class="hostingPlanCardContainer">
            <div class="hostingPlanCardBox">
              <div class="hostingPlanCard">
                <h3>KVM1</h3>

                <p><i class="fa-solid fa-check"></i> CPU 2 vCores</p>
                <p><i class="fa-solid fa-check"></i> 4 Go RAM</p>
                <p><i class="fa-solid fa-check"></i> 50 Go de stockage SSD</p>
                <p>
                  <i class="fa-solid fa-check"></i> 500 Mbps de bande passante
                </p>
                <p><i class="fa-solid fa-check"></i> Sous-domaine offert</p>
                <p><i class="fa-solid fa-check"></i> Sauvegarde hebdomadaire</p>
                <p><i class="fa-solid fa-check"></i> Accès root SSH</p>

                <div class="priceHostingPlan">
                  <p><span>4</span> €/mois</p>
                </div>

                <div class="buttonContainer hostingPlanBtn">
                  <a href="#">Commander</a>
                </div>
              </div>
            </div>

            <div class="hostingPlanCardBox">
              <div class="hostingPlanCard">
                <h3>KVM2</h3>

                <p><i class="fa-solid fa-check"></i> CPU 4 vCores</p>
                <p><i class="fa-solid fa-check"></i> 8 Go RAM</p>
                <p><i class="fa-solid fa-check"></i> 100 Go de stockage SSD</p>
                <p>
                  <i class="fa-solid fa-check"></i> 500 Mbps de bande passante
                </p>
                <p><i class="fa-solid fa-check"></i> Sous-domaine offert</p>
                <p><i class="fa-solid fa-check"></i> Sauvegarde hebdomadaire</p>
                <p><i class="fa-solid fa-check"></i> Accès root SSH</p>

                <div class="priceHostingPlan">
                  <p><span>7</span> €/mois</p>
                </div>

                <div class="buttonContainer hostingPlanBtn">
                  <a href="#">Commander</a>
                </div>
              </div>
            </div>

            <div class="hostingPlanCardBox">
              <div class="hostingPlanCard">
                <h3>KVM3</h3>

                <p><i class="fa-solid fa-check"></i> CPU 4 vCores</p>
                <p><i class="fa-solid fa-check"></i> 16 Go RAM</p>
                <p><i class="fa-solid fa-check"></i> 200 Go de stockage SSD</p>
                <p>
                  <i class="fa-solid fa-check"></i> 1 Gbps de bande passante
                </p>
                <p><i class="fa-solid fa-check"></i> Sous-domaine offert</p>
                <p><i class="fa-solid fa-check"></i> Sauvegarde hebdomadaire</p>
                <p><i class="fa-solid fa-check"></i> Accès root SSH</p>

                <div class="priceHostingPlan">
                  <p><span>10</span> €/mois</p>
                </div>

                <div class="buttonContainer hostingPlanBtn">
                  <a href="#">Commander</a>
                </div>
              </div>
            </div>
          </article>
          <article class="operatingSystemContainer">
            <h4>Systèmes d'exploitations disponibles</h4>

            <div class="operatingSystemCardBox">
              <div class="operatingSystemCard" title="Debian">
                <div class="operatingSystem">
                  <img
                    src="https://fantastic-haupia-740af4.netlify.app/assets/os/debian.webp"
                    title="Debian"
                  />
                </div>
              </div>

              <div class="operatingSystemCard" title="Fedora">
                <div class="operatingSystem">
                  <img
                    src="https://fantastic-haupia-740af4.netlify.app/assets/os/Fedora.png"
                    title="Fedora"
                  />
                </div>
              </div>

              <div class="operatingSystemCard" title="Ubuntu">
                <div class="operatingSystem">
                  <img
                    src="https://fantastic-haupia-740af4.netlify.app/assets/os/ubuntu.png"
                    title="Ubuntu"
                  />
                </div>
              </div>
            </div>
          </article>
        </section>

        <aside id="triangle-code"></aside>

        <section id="whyUs" class="sectionPart whyUs">
          <h2>Pourquoi nous choisir ?</h2>
          <article>
            <div class="whyUsCard">
              <div class="whyUsBg">
                <h3>
                  <i class="fa-sharp fa-solid fa-gear"></i
                  >&nbsp;&nbsp;Performances optimales
                </h3>
                <p>
                  Profitez de serveurs VPS puissants pour garantir des
                  performances exceptionnelles de vos sites et applications.
                </p>
              </div>
            </div>
            <div class="whyUsCard">
              <div class="whyUsBg">
                <h3>
                  <i class="fa-sharp fa-solid fa-dollar-sign"></i
                  >&nbsp;&nbsp;Tarifs compétitifs
                </h3>
                <p>
                  Bénéficiez de solutions VPS abordables sans sacrifier la
                  qualité du service.
                </p>
              </div>
            </div>
            <div class="whyUsCard">
              <div class="whyUsBg">
                <h3>
                  <i class="fa-sharp fa-solid fa-arrow-trend-up"></i
                  >&nbsp;&nbsp;Flexibilité et évolutivité
                </h3>
                <p>
                  Notre infrastructure évolutive vous permet de passer à un plan
                  supérieur lorsque votre entreprise se développe.
                </p>
              </div>
            </div>
          </article>
        </section>

        <section id="blogAndRessources" class="sectionPart blogAndRessources">
          <div class="bgBlogAndRessouces bgAbove"></div>
          <div class="blogAndRessourcesContainer">
            <div class="blogAndRessources-photo">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/blogBG.avif"
              />
            </div>
            <div class="blogAndRessources-text">
              <h2>Blog et Ressources</h2>
              <article>
                <p>
                  Explorez notre blog et nos ressources pour rester informé des
                  dernières tendances en matière d'hébergement VPS, des astuces
                  techniques et des bonnes pratiques pour maximiser vos
                  performances en ligne.
                </p>
                <div class="buttonContainer">
                  <a href="#">Visiter le blog</a>
                </div>
              </article>
            </div>
          </div>
          <div class="bgBlogAndRessouces bgUnder"></div>
        </section>

        <section id="ourValues" class="sectionPart ourValues">
          <h2>Nos valeurs</h2>
          <article>
            <div class="ourValuesFirstPart">
              <div class="ourValuesBgs">
                <div class="ourValuesBox box-1 hidden"></div>
                <div class="ourValuesBox box-2 hidden"></div>
                <div class="ourValuesBox box-3 hidden"></div>
              </div>
              <div class="ourValuesContent">
                <div class="ourValuesCard card-1">
                  <h3>
                    <i class="fa-sharp fa-solid fa-thumbs-up"></i
                    >&nbsp;&nbsp;Votre Succès, Notre Priorité :
                  </h3>
                  <p>
                    Notre équipe est dédiée à votre succès. Nous sommes là pour
                    comprendre vos besoins spécifiques et vous offrir des
                    solutions qui répondent exactement à vos attentes.
                  </p>
                </div>
                <div class="ourValuesCard card-2">
                  <h3>
                    <i class="fa-sharp fa-solid fa-handshake"></i
                    >&nbsp;&nbsp;Partenaires dans Votre Croissance :
                  </h3>
                  <p>
                    Nous ne sommes pas simplement un fournisseur, mais un
                    partenaire dans votre parcours. Notre équipe est à votre
                    écoute pour vous guider et vous soutenir dans l'atteinte de
                    vos objectifs.
                  </p>
                </div>
                <div class="ourValuesCard card-3">
                  <h3>
                    <i class="fa-sharp fa-solid fa-lightbulb"></i
                    >&nbsp;&nbsp;Vos Idées, Notre Inspiration :
                  </h3>
                  <p>
                    Vos suggestions et commentaires comptent. Nous sommes
                    inspirés par vos idées pour continuer à améliorer nos
                    services et à innover en permanence.
                  </p>
                </div>
              </div>
            </div>
            <div class="ourValuesSecondPart">
              <div class="ourValuesBgs">
                <div class="ourValuesBox box-4 hidden"></div>
                <div class="ourValuesBox box-5 hidden"></div>
              </div>
              <div class="ourValuesContent">
                <div class="ourValuesCard card-4">
                  <h3>
                    <i class="fa-sharp fa-solid fa-wifi"></i
                    >&nbsp;&nbsp;Connectivité ultime
                  </h3>
                  <p>
                    Notre datacenter en France offre une connectivité de pointe
                    jusqu'à 1Gbps pour chaque VPS, garantissant des temps de
                    chargement ultra-rapides et une expérience utilisateur
                    exceptionnelle.
                  </p>
                </div>
                <div class="ourValuesCard card-5">
                  <h3>
                    <i class="fa-sharp fa-solid fa-shield"></i
                    >&nbsp;&nbsp;Sécurité des Données
                  </h3>
                  <p>
                    Vos données sont essentielles. C'est pourquoi nous
                    effectuons des sauvegardes hebdomadaires pour garantir que
                    vos informations sont sécurisées et récupérables en cas de
                    besoin.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section id="contactUs" class="sectionContact">
          <div class="contactBloc">
            <h2>Nous contacter</h2>
            <article class="contactUs">
              <div>
                <div
                  class="contactInputsBox validate-input lastname"
                  data-validate="Le nom est obligatoire"
                >
                  <input
                    id="lastname"
                    class="input lastname"
                    type="text"
                    name="lastname"
                  />
                  <span class="focus-input" data-placeholder="NOM"></span>
                </div>

                <div
                  class="contactInputsBox validate-input firstname"
                  data-validate="Le prénom est obligatoire"
                >
                  <input
                    id="firstname"
                    class="input firstname"
                    type="text"
                    name="firstname"
                  />
                  <span class="focus-input" data-placeholder="PRENOM"></span>
                </div>

                <div
                  class="contactInputsBox validate-input email"
                  data-validate="L'adresse mail est obligatoire (exemple@domain.com)"
                >
                  <input
                    id="email"
                    class="input email"
                    type="email"
                    name="mail"
                  />
                  <span class="focus-input" data-placeholder="E-MAIL"></span>
                </div>

                <div
                  class="contactInputsBox validate-input message"
                  data-validate="Le message doit être plus long !"
                >
                  <textarea
                    id="message"
                    class="input message"
                    name="message"
                    cols="100"
                    rows="5*"
                  ></textarea>
                  <span class="focus-input" data-placeholder="MESSAGE"></span>
                </div>

                <div class="contactBtnBloc">
                  <button onclick="validate()">Envoyer</button>
                </div>
              </div>
            </article>
          </div>
          <div class="bgContactUs"></div>
        </section>

        <section class="sectionBrands">
          <article class="brandsBox">
            <div class="brandsCard">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/brands/AMD_Epyc_Logo.png"
              />
            </div>

            <div class="brandsCard">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/brands/Crucial_Logo.png"
              />
            </div>

            <div class="brandsCard">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/brands/Intel_Xeon_Logo.png"
              />
            </div>

            <div class="brandsCard">
              <img
                src="https://fantastic-haupia-740af4.netlify.app/assets/brands/SuperMicro_Logo.png"
              />
            </div>
          </article>
        </section>
      </div>
    </main>

    <footer>
      <div class="footerFirstContainer">
        <div class="footerBloc">
          <h3>Services</h3>
          <ul>
            <li><a href="#">VPS</a></li>
            <li><a href="#">Hébergement Web</a></li>
            <li><a href="#">Serveurs de Jeu</a></li>
          </ul>
        </div>

        <div class="footerBloc">
          <h3>A propos</h3>
          <ul>
            <li><a href="#">A propos</a></li>
            <li><a href="#">Notre Team</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        <div class="footerBloc">
          <h3>Légal</h3>
          <ul>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">F.A.Q</a></li>
            <li><a href="#">CGV/CGU</a></li>
          </ul>
        </div>
      </div>

      <div class="footerSecondContainer">
        <div class="social">
          <a href="#"><img width="40" height="40" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></i></a>
          <a href="#"><img width="40" height="40" src="https://img.icons8.com/ios/50/twitterx--v2.png" alt="twitterx--v2"/></i></a>
          <a href="#"
            ><img
              width="40"
              height="40"
              src="https://img.icons8.com/neon/30/discord-logo.png"
              alt="discord-logo"
          /></a>
        </div>
        <p>host.aikyan.fr © 2023</p>
      </div>
    </footer>
  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
};

document.addEventListener('DOMContentLoaded', function () {
  new FinisherHeader({
    count: 100,
    size: {
      min: 2,
      max: 8,
      pulse: 0,
    },
    speed: {
      x: {
        min: 0,
        max: 0.4,
      },
      y: {
        min: 0,
        max: 0.6,
      },
    },
    colors: {
      background: '#201e30',
      particles: ['#fbfcca', '#d7f3fe', '#ffd0a7'],
    },
    blending: 'overlay',
    opacity: {
      center: 1,
      edge: 0,
    },
    skew: -2,
    shapes: ['c'],
  });
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  color: #04080f;
}

body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: #201e30;
}

/* Style Button */
.buttonContainer {
  display: flex;
  justify-content: center;
}

.buttonContainer a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #507dbc;
  color: white;
  transition: all 0.25s ease-in-out;
}

.buttonContainer a:hover {
  background-color: #a1c6ea;
  color: #04080f;
  transition: all 0.25s ease-in-out;
}

/* Navigation */
header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
  padding-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
  /*background-color: white;
    position: sticky;
    top: 0;
    z-index: 50;*/
}

.logoContainer {
  display: flex;
  justify-content: center;
}

.logoContainer img {
  width: 50px;
  /*height: 100%;*/
}

nav ul {
  list-style: none;
  height: 100%;
  display: flex;
  justify-content: center;
}

nav ul li {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

nav ul li a {
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  color: white;
}

nav ul li a:hover {
  color: #507dbc;
  transition: all 0.25s ease-in-out;
}

/* Main */
main {
  display: flex;
  justify-content: center;
  /*background-color: #DAE3E5;*/
}

.mainContainer {
  /*padding: 25px 0;*/
  /*max-width: 1400px;*/
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.firstSectionBox {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
}

.firstSection {
  /*background : linear-gradient(90deg, #3aadc0 0%, #24116a 45%);*/
  width: 100%;
  align-items: unset;
  max-height: 1000px;
  height: 100%;
  position: relative;
}

.firstSection-text {
  /*border: 2px solid green;*/
  width: 50%;
  padding: 350px 0px 350px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  text-align: center;
}

.firstSection .firstSection-text h1 {
  font-size: 45px;
  color: white;
}

.firstSection .firstSection-text p {
  font-size: 25px;
  color: white;
}

.firstSection-sideImage {
  /*border: 2px solid orange;*/
  width: 80%;
  position: absolute;
  right: 0;
  height: 100%;
}

.firstSection-sideImage img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
}

.sectionPart {
  /*border: 2px solid red;*/
  border-radius: 10px;
  margin-top: 40px;
  padding: 25px 10px;
  max-width: 1400px;
  width: 100%;
  /*position: relative;
    top: -5%;*/
  /*background-color: rgba(255, 255, 255, 0.7);*/
}

.sectionPart h2 {
  margin-bottom: 20px;
}

.bgHeroBanner {
  /*border: 2px solid yellow;*/
  width: 100%;
  height: 200px;
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
  transform-origin: left bottom;
  transform: skewY(-5deg);
  position: relative;
  /*top: -5%;*/
}

/* Main - Hosting Plan */
.hostingPlan {
  position: relative;
  z-index: 10;
  margin-top: 0;
  padding-top: 0;
}

.hostingPlan h2,
.hostingPlan article div h3,
.hostingPlan article div p,
.hostingPlan article div p i,
.hostingPlan div p span,
.operatingSystemContainer h4 {
  color: white;
}

.hostingPlanCardContainer {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.hostingPlanCardBox {
  position: relative;
  background: linear-gradient(90deg, #3aadc0, #24116a, #3aadc0);
  background-size: 300%;
  /*animation: glow 8s linear infinite;*/
  border-radius: 5px;
}

.hostingPlanCardBox::before {
  position: absolute;
  content: '';
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background: inherit;
  background-size: inherit;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;

  opacity: 1;
  filter: blur(20px);
  animation: glow 8s linear infinite;
}

.hostingPlanCard {
  padding: 40px 32px;
  /*border: 2px solid #507DBC;*/
  background-color: rgb(32, 30, 48);
  border-radius: 5px;
  transition: all 0.25s ease-in-out;
}

.hostingPlanCard h3 {
  margin-bottom: 10px;
}

.priceHostingPlan {
  margin: 10px 0 20px 0;
}

.priceHostingPlan p span {
  font-size: 35px;
}

.hostingPlanBtn a {
  background-color: #ffe5f4;
  color: #cc0078;
  font-weight: 700;
}

.hostingPlanBtn a:hover {
  background-color: #cc0078;
  color: #ffe5f4;
}

.operatingSystemContainer {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.operatingSystemContainer h4 {
  margin: 10px 0 20px 0;
}

.operatingSystemCardBox {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.operatingSystemCard {
  position: relative;
  border-radius: 5px;
  width: 100%;
  margin: 0 15px 0 15px;
  background: linear-gradient(90deg, #3aadc0, #24116a, #3aadc0);
  background-size: 300%;
  animation: glow 8s linear infinite;
}

.operatingSystemCard::before {
  position: absolute;
  content: '';
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background: inherit;
  background-size: inherit;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
}

.operatingSystemCard:hover::before {
  opacity: 1;
  filter: blur(20px);
  animation: glow 8s linear infinite;
}

.operatingSystem {
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgb(32, 30, 48);
}

.operatingSystemCard img {
  width: 70px;
  object-fit: contain;
}

/* Triangle */
#triangle-code {
  display: inline-block;
  height: 0;
  width: 100%;
  border-top: 50px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 950px solid #24116a;
  transform-origin: left bottom;
  /*transform: skewY(10deg);*/
  transform: skewY(5deg);
  position: relative;
  top: -1%;
}

/* Main - Why Us */
.whyUs h2,
.whyUs article div h3,
.whyUs article div p {
  color: #bbd1ea;
}

.whyUs h2,
.whyUs article {
  position: relative;
  z-index: 2;
}

.sectionPart.whyUs article {
  display: flex;
  flex-direction: row;
}

.sectionPart.whyUs article .whyUsCard {
  position: relative;
  flex: 1;
  margin-right: 25px;
  border: 2px solid #bbd1ea;
  border-radius: 5px;
  background: linear-gradient(90deg, #3aadc0, #24116a, #3aadc0);
  background-size: 300%;
}

.sectionPart.whyUs article .whyUsCard::before {
  position: absolute;
  content: '';
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background: inherit;
  background-size: inherit;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
}

.sectionPart.whyUs article .whyUsCard:nth-child(1) {
  margin-left: 25px;
}

.sectionPart.whyUs article .whyUsCard:hover::before {
  opacity: 1;
  filter: blur(20px);
  animation: glow 8s linear infinite;
}

.whyUsBg {
  background-color: rgb(32, 30, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  padding: 40px 32px;
}

.sectionPart.whyUs article .whyUsBg h3 {
  margin-bottom: 5px;
}

.sectionPart.whyUs article .whyUsBg h3 i {
  color: #507dbc;
}

/* Main - Blog and Ressources */
.blogAndRessourcesContainer {
  position: relative;
  width: 100%;
  z-index: 1;
}

.sectionPart.blogAndRessources {
  display: block;
}

.blogAndRessources-photo {
  margin-left: 15%;
}

.blogAndRessources-photo img {
  max-width: 600px;
  width: 100%;
  transform: scaleX(-1);
}

.blogAndRessources-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  width: 100%;
  height: 50%;
  padding: 15px;
  border: 2px solid #bbd1ea;
  border-radius: 5px;
  position: absolute;
  right: 15%;
  top: 300px;
}

.blogAndRessources-text article p {
  margin-bottom: 25px;
  text-align: center;
}

.blogAndRessources-text h2,
.blogAndRessources-text article p {
  color: #bbd1ea;
}

.bgBlogAndRessouces {
  width: 110%;
  position: absolute;
  left: -10%;
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
}

.bgAbove {
  height: 100px;
  transform: skew(-5deg, -7deg);
}

.bgUnder {
  height: 50px;
  margin-top: 70px;
  transform: skew(5deg, 10deg);
}

/* Main - Nos Valeurs */
.sectionPart.ourValues {
  margin-top: 200px;
}

.sectionPart.ourValues h2 {
  color: #bbd1ea;
}

.ourValuesFirstPart,
.ourValuesSecondPart {
  position: relative;
}

.ourValuesFirstPart {
  margin-bottom: 20px;
}

.ourValuesBgs {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
}

.ourValuesBox {
  width: 100%;
  height: 100%;
  margin-right: 25px;
  border-radius: 5px;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  opacity: 1;
}

.hidden {
  transition: 0.5s;
  background: none;
}

.show {
  transition: 0.5s;
  filter: blur(20px);
  background: linear-gradient(90deg, #3aadc0, #24116a, #3aadc0);
  background-size: 300%;
  animation: glow 8s linear infinite;
}

.ourValuesBox:nth-child(1) {
  margin-left: 25px;
}

.ourValuesContent {
  display: flex;
}

.ourValuesCard {
  width: 100%;
  padding: 40px 32px;
  margin-right: 25px;
  border-radius: 5px;
  border: 2px solid #bbd1ea;
  background-color: rgb(32, 30, 48);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.ourValuesCard:nth-child(1) {
  margin-left: 25px;
}

.ourValuesCard h3 i {
  color: #507dbc;
}

.ourValuesCard h3 {
  margin-bottom: 5px;
}

.ourValuesCard h3,
.ourValuesCard p {
  color: #bbd1ea;
}
.ourValuesCard::before {
  position: absolute;
  content: '';
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background: inherit;
  background-size: inherit;
  border-radius: 5px;
  opacity: 0;
  transition: 0.5s;
}
.ourValuesCard:hover::before {
  opacity: 1;
  filter: blur(20px);
  animation: glow 8s linear infinite;
}
/* Contact Us */
.sectionContact {
  width: 100%;
  padding: 50px 0 50px 0;
  /*background-image: url('https://fantastic-haupia-740af4.netlify.app/assets/772.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;*/
  margin-top: 40px;
}

.sectionContact h2 {
  text-align: center;
}

.contactBloc {
  max-width: 600px;
  width: 100%;
  background-color: white;
  border-radius: 5px;
  padding: 50px;
  position: relative;
  z-index: 1;
}

.contactBloc h2 {
  margin-bottom: 20px;
}

.contactUs > .contactFirstPart {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}

.contactUs > .contactFirstPart > form {
  margin-top: 25px;
  width: 100%;
}

.contactInputsBox {
  width: 100%;
  position: relative;
  border: none;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
}

.input {
  display: block;
  width: 100%;
  font-size: 15px;
  line-height: 1.2;
  outline: none;
  border: none;
}

.focus-input {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
  background: #24116a;
  background: linear-gradient(45deg, #3aadc0, #24116a);
}

.focus-input::after {
  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 13px;
  color: #999;
  line-height: 1.2;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

input.input {
  height: 45px;
}

input.input + .focus-input::after {
  top: 16px;
  left: 0;
}

textarea.input {
  max-height: 115px;
  max-width: 500px;
  padding-top: 13px;
  padding-bottom: 13px;
}

textarea.input + .focus-input::after {
  top: 16px;
  left: 0;
}

.input:focus + .focus-input::after {
  top: -13px;
}

.input:focus + .focus-input::before {
  width: 100%;
}

.has-val.input + .focus-input::after {
  top: -13px;
}

.has-val.input + .focus-input::before {
  width: 100%;
}

.contactBtnBloc {
  display: flex;
  justify-content: center;
}

.contactBtnBloc > button {
  width: 50%;
  padding: 10px 20px;
  background-image: linear-gradient(
    90deg,
    #3aadc0,
    #24116a 33%,
    #24116a 66%,
    #3aadc0
  );
  background-size: 300%;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 18px;
  transition: all 0.55s ease-in-out;
}

.contactBtnBloc > button:hover {
  background-position: right;
  cursor: pointer;
}

.bgContactUs {
  width: 100%;
  height: 400px;
  position: absolute;
  transform: skewY(7deg);
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
}

.validate-input[data-validate]::after {
  content: attr(data-validate);
  font-size: 13px;
  color: #e54858;
  display: block;
  margin-top: 7px;
  margin-bottom: 7px;
  text-align: right;
  line-height: 0.3;
  opacity: 0;
  transition: 0.3s;
}

.validate-input[data-validate-visible='true']::after {
  opacity: 1;
}

.validate-input[data-validate-visible='true']::after
  input[data-validate]::after {
  content: attr(data-validate);
  font-size: 0.4em;
  color: red;
}

/* Main - Brands */
.sectionBrands {
  /*width: 100%;*/
  margin-top: 15px;
}

.sectionBrands h2 {
  margin-bottom: 20px;
}

.brandsBox {
  /*border: 2px solid green;*/
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.brandsCard {
  /*background-color: white;*/
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  margin-right: 15px;
}

.brandsCard:nth-child(1) {
  margin-left: 15px;
}

.brandsCard img {
  width: 100px;
}

/*.bgBrands {
    border: 2px solid orange;
    height: 10px;
    width: 100%;
}*/

/* Footer */
footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(90deg, #3aadc0 0%, #24116a 45%);
}

.footerFirstContainer {
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.footerBloc {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footerBloc h3 {
  width: 50%;
  margin-bottom: 5px;
  color: white;
  text-decoration: underline;
  text-underline-offset: 5px;
}

.footerBloc ul {
  width: 50%;
  list-style-type: none;
}

.footerBloc ul li a {
  text-decoration: none;
  transition: all 0.25s ease-in-out;
  color: white;
}

.footerBloc ul li a:hover {
  color: #507dbc;
  transition: all 0.25s ease-in-out;
}

.footerSecondContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 25px 10px 0;
  margin-top: 10px;
}

.social > a {
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  margin-left: 10px;
  margin: 10px 0px;
  transition: all 0.25s ease-in-out;
}

.social > a:hover {
  opacity: 0.75;
}

.footerSecondContainer > p {
  opacity: 0.75;
  color: white;
}

#finisher-canvas {
  transform: none !important;
  width: 100%;
}

/* Animations */
@keyframes glow {
  to {
    background-position: 300%;
  }
}
</style>
