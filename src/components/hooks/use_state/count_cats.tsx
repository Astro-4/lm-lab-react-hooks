import { useState } from "react";

export function CountCats() {
  //const cats: string[] = [];
  const [CountCats, setCountCats] = useState<Array<string>>([]);

  const handelClick = () => {
    setCountCats([...CountCats, "🐈"]);
  };

  return (
    <>
      <h2>useState</h2>

      <p>{CountCats}</p>

      <button onClick={handelClick}>
        There are {CountCats.length} cats 🥳
      </button>
    </>
  );
}
