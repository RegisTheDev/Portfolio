// Selectionner les boutons du filtre et les images

const categories = document.querySelectorAll('.categories button');
const images = document.querySelectorAll('.gallery-image .pic');

console.log(categories, images);

// Definition de la fonction filtreCategorie
const filtreCategorie = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    //filtrer les bonnes images pour chaque categorie
    images.forEach(pic => {
        pic.classList.add("hide");

        if(pic.dataset.name === e.target.dataset.name || e.target.dataset.name === "tout")
        {
        pic.classList.remove("hide");
        }
    });
}



// Ajouter l'évènement click à chaque bouton du filtre
categories.forEach(button => button.addEventListener("click", filtreCategorie));