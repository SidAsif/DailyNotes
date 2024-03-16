import { KeyboardArrowRight } from "@mui/icons-material";
import "./Create.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8001/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };
  // const handleVoiceToText = () => {
  //   const recognition = new window.webkitSpeechRecognition();
  //   recognition.lang = "en-US";
  //   recognition.onresult = (event) => {
  //     const speechToText = event.results[0][0].transcript;
  //     setDetails(speechToText);
  //   };
  //   recognition.start();
  // };
  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        label="Note Title"
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
        sx={{ mt: 20, mb: 2, display: "block" }}
      />
      <TextField
        // value={details}
        onChange={(e) => setDetails(e.target.value)}
        label="Details"
        variant="outlined"
        multiline
        color="secondary"
        rows={4}
        fullWidth
        required
        error={detailsError}
        sx={{ mb: 2, display: "block" }}
      />
      {/* 
      <Button
        onClick={handleVoiceToText}
        color="secondary"
        variant="contained"
        size="small"
      >
        <Mic />
      </Button> */}
      <FormControl sx={{ mb: 2, display: "block" }}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <FormControlLabel
            value="Remainders"
            control={<Radio />}
            label="Remainders"
          />
          <FormControlLabel value="Todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="Work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </form>
  );
}
