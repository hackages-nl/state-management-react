import axios from "axios";
import {SERVER_URL} from "../config";
import {IMovie} from "../types";
import image1 from "../assets/placeholder.1.jpeg";
import image2 from "../assets/placeholder.2.jpeg";
import image3 from "../assets/placeholder.3.jpeg";
import image4 from "../assets/placeholder.4.jpeg";
import image5 from "../assets/placeholder.5.jpeg";

const posters = [image1, image2, image3, image4, image5];

export const fetchMovies = async () => {
  try {
    return await axios.get<IMovie[]>(`${SERVER_URL}/movies`).then((response) =>
      response.data.map((movie) => {
        const index = Math.floor(Math.random() * 5) + 1;
        console.log(index);

        return {
          ...movie,
          poster_path: posters[index - 1],
        };
      })
    );
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchCategories = async () => {
  try {
    return await axios
      .get(`${SERVER_URL}/genres`)
      .then((response) => response.data.slice(0, 6));
  } catch (err) {
    throw new Error(err);
  }
};
