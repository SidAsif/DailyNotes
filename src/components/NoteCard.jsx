import { DeleteOutlined } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";

import React from "react";

export default function NoteCard({ note, handleDelete }) {
  const avtr = { backgroundColor: "Red" };
  return (
    <div>
      <Card elevation={2}>
        <CardHeader
          avatar={
            <Avatar sx={{ ...avtr }}>{note.category[0].toUpperCase()}</Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color={"textSecondary"}>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
