export function CountCats() {
  const countCats = 1

  function getCats() {
    const cats = []
    for(let i = 0; i < countCats; i++) {
        cats.push("🐈 ")
    }
    return cats
  }

  return (
    <>
    <h2>useState</h2>

    <p>{getCats()}</p>

    <button>
      There are {countCats} cats 🥳
    </button>
    </>
  );
}