import { useContext } from "react";
import Book from "./Book";
import { BooksContext } from "../contexts/BookContext";

export default function Books() {
  const list = useContext(BooksContext);
  return (
    <ul>
      {list.map((item, index) => {
        return (
          <Book
            key={index}
            item={item}
          />
        );
      })}
    </ul>
  );
}
