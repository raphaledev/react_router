import "./Trailer.css"
import { useParams } from "react-router-dom";
import { moviesArr } from "../App";

const Trailer = () => {
    const { id } = useParams();

    const data = moviesArr.filter((movie) => {
        return movie.id === Number(id);
    });
    console.log(data);
    return (
        <div className="trailer">{id && (
            <div className="content">
                <h1>{data[0].title}</h1>
                <p>{data[0].description}</p>
                <iframe className="video"
                    width="600"
                    height="400"
                    src= {data[0].trailer}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
        </div>
    )}
    </div>
);
}

export default Trailer;