import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [angka, setAngka] = useState(0);

  useEffect(() => {
    alert("Jangan takut dimanfaatkan jika dirimu tidak bermanfaat");
  }, []);

  console.log("Tidak bermanfaat!");

  return (
    <>
      <h2>Total Klik : {angka}</h2>
      <button onClick={() => setAngka(angka + 1)}>Piccit on</button>
    </>
  );
}

export default App;
