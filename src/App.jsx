import { useEffect,useState } from "react";

async function fetchData(){
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

export default function App() {
  const [content,setContent] = useState([]);
  useEffect (() => {
    (async () =>{ 
      const newContent = await fetchData();
      setContent(newContent);
    })();
  },[]);
  return (
    <>
      <header>
        <h1>The Can Store</h1>
      </header>
      <div>
        <aside>
          <form>
            <div>
              <label htmlFor="category">Choose a category:</label>
              <select id="category">
                <option>All</option>
                <option>Vegetables</option>
                <option>Meat</option>
                <option>Soup</option>
              </select>
            </div>
            <div>
              <label htmlFor="searchTerm">Enter search term:</label>
              <input type="text" id="searchTerm" placeholder="e.g. beans" />
            </div>
            <div>
              <button>Filter results</button>
            </div>
          </form>
        </aside>
        <main>
          {content.map((data) => {
            return (
              <section key={data.name} className={data.type}>
                <h2>{data.name}</h2>
                <p>${data.price}</p>
                <img src={"image/"+data.image} alt={data.name}/>
            </section>
            );
          })}
            
        </main>
      </div>
      <footer>
        <p>All icons found at the Noun Project:</p>
        <ul>
          <li>
            Bean can icon by{" "}
            <a href="https://thenounproject.com/yalanis/">Yazmin Alanis</a>
          </li>
          <li>
            Vegetable icon by{" "}
            <a href="https://thenounproject.com/skatakila/">Ricardo Moreira</a>
          </li>
          <li>
            Soup icon by{" "}
            <a href="https://thenounproject.com/ArtZ91/">Arthur Shlain</a>
          </li>
          <li>
            Meat Chunk icon by{" "}
            <a href="https://thenounproject.com/smashicons/">Oliviu Stoian</a>.
          </li>
        </ul>
      </footer>
    </>
  );
}