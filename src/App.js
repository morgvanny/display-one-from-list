import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Details from "./Details";

function App() {
  const [books, setBooks] = useState([]);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/books")
      .then((r) => r.json())
      .then(setBooks);
  }, []);

  const selectedBook = books.find((b) => b.id == id);

  return (
    <div>
      <Sidebar setId={setId} books={books} />
      <Details book={selectedBook} />
    </div>
  );
}

export default App;
