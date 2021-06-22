const matrixBg = document.querySelector(".matrix-bg");
const characters = [
  ...Array.from(
    " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMENPQRSTUVWXYZ1234567890"
  ),
];

const matrixFiller = [
  ...Array(
    Math.ceil(
      (window.screen.height * window.screen.width) / 400 +
        (Math.max(window.screen.height, window.screen.width) / 20) * 3
    )
  ).keys(),
];

const createCharacterSpan = (character) => {
  const span = document.createElement("span");
  span.innerText = character;
  span.setAttribute("class", "matrix-style");

  if (5 === Math.floor(Math.random() * 10)) {
    span.classList.add("will-change");
  }
  if (5 === Math.floor(Math.random() * 10)) {
    span.classList.add("matrix-neon");
  }

  return span;
};

const getRandomCharacter = () => {
  var character = characters[Math.floor(Math.random() * characters.length)];
  return character;
};

const changeCharacters = () => {
  Array.from(document.getElementsByClassName("will-change")).forEach((span) => {
    span.textContent = "";
    span.innerText = `${getRandomCharacter()}`;
    span.setAttribute("class", "matrix-style");
  });

  Array.from(document.getElementsByClassName("matrix-style")).forEach(
    (span) => {
      if (5 === Math.floor(Math.random() * 10)) {
        span.classList.add("will-change");
      }
      if (5 === Math.floor(Math.random() * 10)) {
        span.classList.add("matrix-neon");
      }
    }
  );
};

const fillMatrix = () => {
  matrixFiller.forEach((space) => {
    matrixBg.appendChild(createCharacterSpan(getRandomCharacter()));
  });

  setInterval(changeCharacters, 100);
};

fillMatrix();
