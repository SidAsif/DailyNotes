import { Container } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import "./Create.css";
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8001/notes/" + id, { method: "DELETE" });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container className="mainNote">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
