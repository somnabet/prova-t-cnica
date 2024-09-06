import { useEffect, useState } from "react";
import "./App.css";

const DOG_CEO_API = "https://dog.ceo/api/breeds/image/random";
const RANDOM_USER_API = "https://randomuser.me/api/";

function App() {
  const [dog, setDog] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch(DOG_CEO_API)
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
      });
  }, []);

  useEffect(() => {
    fetch(RANDOM_USER_API)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0].name.first);
      });
  }, []);

  const onHandleSubmit = () => {
    fetch(DOG_CEO_API)
      .then((res) => res.json())
      .then((data) => {
        setDog(data.message);
      });
    fetch(RANDOM_USER_API)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0].name.first);
      });
  };

  return (
    <main>
      <img src={dog} alt="Imagen de un perro obtenida por la API dog.ceo"></img>
      <h1>{user}</h1>
      <button onClick={() => onHandleSubmit()}>♻️</button>
    </main>
  );
}

export default App;
