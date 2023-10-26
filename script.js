// const modelViewer = document.querySelector("model-viewer");
//   let anchorSet = false;

//   window.switchSrc = (element, name) => {
//     const base = "./assets/" + name;
//     modelViewer.src = base + ".glb";
//     const slides = document.querySelectorAll(".slide");
//     slides.forEach((slide) => {
//       slide.classList.remove("selected");
//     });
//     element.classList.add("selected");
//     anchorSet = false; // Reset the anchor status when switching models.
//   };

//   document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
//     ev.preventDefault();
//     console.log(ev)
//   });