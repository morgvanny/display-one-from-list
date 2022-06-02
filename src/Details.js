export default function Details({ book }) {
  return (
    <div>
      {book ? (
        <div>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
        </div>
      ) : (
        <p>Please choose a book to display</p>
      )}
    </div>
  );
}
