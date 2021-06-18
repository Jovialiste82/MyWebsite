const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const matrixBgd = document.querySelector(".matrix-bg");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");
const modalAbout = document.querySelector(".modal-about-bg");
const modalContact = document.querySelector(".modal-contact-bg");
const modalAboutClose = document.querySelector(".modal-about-close");
const modalContactClose = document.querySelector(".modal-contact-close");

if (window.screen.width > 1023 || window.screen.height > 1023) {
  about.addEventListener("click", () => {
    const aboutBox = new WinBox({
      title: "About Me",
      width: "400px",
      height: "400px",
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
      mount: aboutContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });

  contact.addEventListener("click", () => {
    const contactBox = new WinBox({
      title: "Contact Me",
      width: "600px",
      height: "300px",
      top: 100,
      right: 50,
      bottom: 50,
      left: 70,
      padding: "1rem",
      mount: contactContent,
      onfocus: function () {
        this.setBackground("#00aa00");
      },
      onblur: function () {
        this.setBackground("#777");
      },
    });
  });
} else {
  about.addEventListener("click", () => {
    modalAbout.classList.add("modal-bg-active");
  });
  contact.addEventListener("click", () => {
    modalContact.classList.add("modal-bg-active");
  });
  modalAboutClose.addEventListener("click", () => {
    modalAbout.classList.remove("modal-bg-active");
  });
  modalContactClose.addEventListener("click", () => {
    modalContact.classList.remove("modal-bg-active");
  });
}
