export default function Sidebar({ books, setId }) {
  return (
    <div>
      <ul>
        {books.map((b) => {
          return <li onClick={() => setId(b.id)}>{b.title}</li>;
        })}
      </ul>
    </div>
  );
}
