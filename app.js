const title = document.querySelector(".title-heading");
const largeImage = document.querySelector(".large-picture");
const largeImageCard = document.querySelector(".large-picture__card");
const largeImageCardTitle = document.querySelector(".card--title");
const largeImageCardDescription = document.querySelector(".card--description");
const changeHero = [
  {
    hero: "Aquaman",
    bgColor: "#28a0bc",
    description:
      "Arthur Curry is Aquaman, an adventurer who is half-human and half-Atlantean. This gives him a variety of powers including superhuman strength, telepathic control over marine life, and the ability to survive both in water and on land. He belongs to the royal family of Atlantis, and normally acts as their king",
  },

  {
    hero: "Cyborg",
    bgColor: "#838996",
    description:
      "Victor Stone is a former college athlete and football star. Following a horrific accident that resulted in the death of his mother, Victor was gravely injured and was extremely close to death. His father, Silas Stone, was able to save him via the use of advanced, experimental tech, managing to save his life but leaving him alienated and detached from the rest of humanity due to complications with his new form.",
  },

  {
    hero: "The Batman",
    bgColor: "#000000",
    description:
      "The protector of Gotham City, a tortured, brooding vigilante dressed as a sort of human bat who fights against evil and strikes fear into the hearts of criminals everywhere. In his public identity he is Bruce Wayne, billionaire industrialist and notorious playboy.",
  },

  {
    hero: "Green Lantern",
    bgColor: "#067A52",
    description:
      "Hal Jordan is the most well-known Green Lantern. He was the first human ever inducted into the Green Lantern Corps, and has been heralded as possibly the greatest Green Lantern of all time. Hal is also a founding member of the Justice League of America. He has also been known as Parallax and The Spectre.",
  },

  {
    hero: "Superman",
    bgColor: "#b6131b",
    description:
      "Superman was born Kal-El on an alien planet — later named Krypton — and rocketed to Earth as an infant by his scientist father moments before the planet's destruction. The rocket landed on Earth, where he was found by passing motorists who adopted him and gave him the name Clark Kent. As Clark reached maturity, he learned he has superhuman abilities, which he resolved to use to help others, fighting anything from petty crime to universal threats.",
  },

  {
    hero: "The Flash",
    bgColor: "#FACB33",
    description:
      "Barry Allen is a police scientist. He got his powers when a lightning bolt hit his lab and splashed a number of chemicals on him. Becoming Flash was ironic as Barry was slow, methodical, and often late prior to gaining his powers.",
  },

  {
    hero: "Wonder Woman",
    bgColor: "#f6576d",
    description:
      "Raised on the hidden island of Themyscira, also known as Paradise Island, Diana is an Amazon, like the figures of Greek legend, and her people's gift to humanity. As Themyscira's emissary to Man's World, Diana has made it her duty to lead by example, even if the differences between her birthplace and new home sometimes present hurdles for her to jump.",
  },

  {
    hero: "Hawk Girl",
    bgColor: "#e46d28",
    description:
      "Shayera Hol, formerly known on Earth as Hawkgirl, is one of the founding members of the Justice League and a former member of the Thanagarian military. She played a key role in the Thanagarian invasion on both sides. Hawkgirl is a fiery and considerably aggressive person who exhibits a wild temperament but nonetheless fights on the side of good.",
  },
];

const aquaman = document.querySelector(".smaller-pictures__one");
const cyborg = document.querySelector(".smaller-pictures__two");
const batman = document.querySelector(".smaller-pictures__three");
const greenLantern = document.querySelector(".smaller-pictures__four");
const superman = document.querySelector(".smaller-pictures__five");
const theFlash = document.querySelector(".smaller-pictures__six");
const wonderWoman = document.querySelector(".smaller-pictures__seven");
const hawkGirl = document.querySelector(".smaller-pictures__eight");

const selectAquaman = function () {
  const aquamanTitle = changeHero[0].hero;
  const aquamanDescription = changeHero[0].description;
  const aquamanBgColor = changeHero[0].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[0]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = aquamanTitle;
      largeImageCardDescription.innerHTML = aquamanDescription;
      title.innerHTML = aquamanTitle;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/aquaman.jpg)";
      document.querySelector(".main").style.background = aquamanBgColor;
    }
  }
};

const selectCyborg = function () {
  const cyborgTitle = changeHero[1].hero;
  const cyborgDescription = changeHero[1].description;
  const cyborgBgColor = changeHero[1].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[1]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = cyborgTitle;
      largeImageCardDescription.innerHTML = cyborgDescription;
      title.innerHTML = cyborgTitle;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/cyborg.jpg)";
      document.querySelector(".main").style.background = cyborgBgColor;
    }
  }
};

const selectBatman = function () {
  const batmanTitle = changeHero[2].hero;
  const batmanDescription = changeHero[2].description;
  const batmanBgColor = changeHero[2].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[2]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = batmanTitle;
      title.innerHTML = batmanTitle;
      largeImageCardDescription.innerHTML = batmanDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/batman.jpg)";
      document.querySelector(".main").style.background = batmanBgColor;
    }
  }
};

const selectgreenLantern = function () {
  const greenLanternTitle = changeHero[3].hero;
  const greenLanternDescription = changeHero[3].description;
  const greenLanternBgColor = changeHero[3].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[3]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = greenLanternTitle;
      title.innerHTML = greenLanternTitle;
      largeImageCardDescription.innerHTML = greenLanternDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/greenlantern.jpg)";
      document.querySelector(".main").style.background = greenLanternBgColor;
    }
  }
};

const selectSuperman = function () {
  const supermanTitle = changeHero[4].hero;
  const supermanDescription = changeHero[4].description;
  const supermanBgColor = changeHero[4].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[4]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = supermanTitle;
      title.innerHTML = supermanTitle;
      largeImageCardDescription.innerHTML = supermanDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/superman.jpg)";
      document.querySelector(".main").style.background = supermanBgColor;
    }
  }
};

const selectTheFlash = function () {
  const theFlashTitle = changeHero[5].hero;
  const theFlashDescription = changeHero[5].description;
  const theFlashBgColor = changeHero[5].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[5]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = theFlashTitle;
      title.innerHTML = theFlashTitle;
      largeImageCardDescription.innerHTML = theFlashDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/theflash.jpg)";
      document.querySelector(".main").style.background = theFlashBgColor;
    }
  }
};

const selectWonderWoman = function () {
  const wonderWomanTitle = changeHero[6].hero;
  const wonderWomanDescription = changeHero[6].description;
  const wonderWomanBgColor = changeHero[6].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[6]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = wonderWomanTitle;
      title.innerHTML = wonderWomanTitle;
      largeImageCardDescription.innerHTML = wonderWomanDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/wonderwoman.jpg)";
      document.querySelector(".main").style.background = wonderWomanBgColor;
    }
  }
};

const selectHawkGirl = function () {
  const hawkGirlTitle = changeHero[7].hero;
  const hawkGirlDescription = changeHero[7].description;
  const hawkGirlBgColor = changeHero[7].bgColor;
  for (let i = 0; i < changeHero.length; i++) {
    if (changeHero[i] === changeHero[7]) {
      largeImageCard.style.opacity = "1";
      largeImageCardTitle.innerHTML = hawkGirlTitle;
      title.innerHTML = hawkGirlTitle;
      largeImageCardDescription.innerHTML = hawkGirlDescription;
      document.querySelector(".large-picture").style.backgroundImage =
        "url(/img/hawkgirl.jpg)";
      document.querySelector(".main").style.background = hawkGirlBgColor;
    }
  }
};

aquaman.addEventListener("click", function () {
  selectAquaman();
});

cyborg.addEventListener("click", function () {
  selectCyborg();
});

batman.addEventListener("click", function () {
  selectBatman();
});

greenLantern.addEventListener("click", function () {
  selectgreenLantern();
});

superman.addEventListener("click", function () {
  selectSuperman();
});

theFlash.addEventListener("click", function () {
  selectTheFlash();
});

wonderWoman.addEventListener("click", function () {
  selectWonderWoman();
});

hawkGirl.addEventListener("click", function () {
  selectHawkGirl();
});
