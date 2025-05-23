const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeButton = document.querySelector('.close-button');

const gameInfo = {
  "acblackflag": {
    title: "AC Black Flag",
    description: "Um jogo de ação e aventura da franquia Assassin's Creed, ambientado na era de ouro da pirataria."
  },
  "rdr": {
    title: "Red Dead Redemption 1 e 2",
    description: "Explore o velho oeste com uma narrativa épica e jogabilidade envolvente da Rockstar."
  },
  "spiderman": {
    title: "Marvel Spider-Man",
    description: "Aventure-se como o Homem-Aranha em uma Nova York vibrante e cheia de ação."
  },
  "UFC5": {
    title: "UFC 5",
    description: "Lute como um campeão no mais recente simulador de MMA da EA Sports."
  },
  "GOW": {
    title: "God of War 2018",
    description: "Kratos retorna com uma nova jornada emocionante ao lado de seu filho Atreus."
  },
  "AC VALHALLA": {
    title: "AC Valhalla",
    description: "Seja um guerreiro viking e conquiste a Inglaterra em Assassin's Creed Valhalla."
  },
  "The witcher3": {
    title: "The Witcher 3",
    description: "Entre no mundo de Geralt de Rívia e viva uma história fantástica cheia de escolhas."
  },
  "Valorant": {
    title: "Valorant",
    description: "FPS tático da Riot Games com personagens únicos e jogabilidade estratégica."
  },
  "CounterStrike": {
    title: "Counter-Strike: Global Offensive",
    description: "Clássico competitivo de tiro em primeira pessoa, jogado no mundo inteiro."
  },
  "Tekken": {
    title: "Tekken 7",
    description: "Lute com personagens icônicos em batalhas intensas e gráficos impressionantes."
  }
};

document.querySelectorAll(".moldura img").forEach(img => {
  img.addEventListener("click", () => {
    const key = img.alt;
    const info = gameInfo[key];
    if (info) {
      modalTitle.textContent = info.title;
      modalDescription.textContent = info.description;
      modal.classList.remove("hidden");
    } else {
      console.warn("Jogo não encontrado:", key);
    }
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
