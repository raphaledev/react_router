import "./App.css";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import MovieCardList from "./components/MovieCardList";
import Trailer from "./components/Trailer";

export const moviesArr = [
  {
    id: 1,
    title: "Misssion cléopatre",
    poster: "https://fr.web.img3.acsta.net/medias/nmedia/00/02/39/29/aff_asterix.jpg",
    description: "Un film d'Alain Chabat",
    trailer: "https://www.youtube.com/embed/K1PRQytKW5w"
  },
  {
    id: 2,
    title: "La vie scolaire",
    poster: "https://fr.web.img6.acsta.net/pictures/19/07/02/10/20/5292692.jpg",
    description: "Un film de Grand Corps Malade et Mehdi Idir",
    trailer: "https://www.youtube.com/embed/n05KRM4Qbq0"
  },
  {
    id: 3,
    title: "Les misérables",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9vOn9ObTE1sYsV9ymtIXKOZidCWoe7dNpYzWMY-rY&s",
    description: "Un film de Ladj Ly",
    trailer: "https://www.youtube.com/embed/_RBAqv0VQH8"

  },
  {
    id: 4,
    title: "Bac Nord",
    poster: "https://fr.web.img3.acsta.net/pictures/21/06/07/13/11/2832970.jpg",
    description: "Un film de Cédric Jimenez",
    trailer: "https://www.youtube.com/embed/iyVLnChTs8w"

  },
  {
    id: 5,
    title: "Django Unchained",
    poster: "https://images.affiches-et-posters.com//albums/3/4395/medium/4395-affiche-film-tarantino-django-unchained.jpg",
    description: "Un film de Quentin Tarantino",
    trailer: "https://www.youtube.com/embed/K2XjgsfzDrU"

  },
  {
    id: 6,
    title: "Les 3 frères",
    poster: "https://www.cine-songes.com/images/produits/1/thumbs_500/01000745.1.jpg",
    description: "Un film des inconnus",
    trailer: "https://www.youtube.com/embed/vy_dzIuPjpM"

  },
  {
    id: 7,
    title: "Les visiteurs",
    poster: "https://images2.medimops.eu/product/d94278/M0B0014C5Y7C-large.jpg",
    description: "Un film de Jean Marie Poiré",
    trailer: "https://www.youtube.com/embed/EFp7mBA5hIs"

  },
  {
    id: 8,
    title: "Camping 2",
    poster: "https://media.senscritique.com/media/000004672218/300/camping_2.jpg",
    description: "Un film de Fabien Onteniente",
    trailer: "https://www.youtube.com/embed/3COirsto5GI"
  }, 

];

function App() {
  return (
      <div className="App container">
        <Header title="Movie App" />
        <Routes>
          <Route path="/" element={<MovieCardList movies={moviesArr} />}/>
          <Route path="/trailer/:id" element={<Trailer />} />
        </Routes>
      </div>
  
  );
}

export default App;