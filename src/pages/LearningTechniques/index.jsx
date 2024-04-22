import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import Flashcards from "../../components/Flashcards";
import Quiz from "../../components/Quiz";

import { fetchFlashcards } from "../../redux/slices/flashcardSlice";
import { fetchQuiz } from "../../redux/slices/quizSlice";

const sectionsByGrade = {
  6: ["Палеолит", "Мезолит", "Неолит"],
  7: ["Түрік қағанаты", "Батыс Түрік қағанаты", "Шығыс Түрік қағанаты"],
  8: [
    "Қазақ-Жоңғар соғыстары",
    "Кіші жүздің Ресейдің құрамына кіруі",
    "Абылай хандығы",
  ],
  9: [
    "1916 жылғы ұлт-азаттық көтеріліс",
    "Қазақстандағы 1917 жылғы Ақпан, Қазан төңкерістері",
    "Азамат соғысы жылдарындағы Қазақстан",
  ],
};

const LearningTechniques = () => {
  const dispatch = useDispatch();
  const { flashcardQuestions, totalCardsNum } = useSelector(
    (state) => state.flashcards
  );
  const { quizQuestions } = useSelector((state) => state.quiz);

  const [grade, setGrade] = React.useState(6);
  const [section, setSection] = React.useState("Палеолит");
  const [method, setMethod] = React.useState("Флеш-карта");

  const onChangeGrade = (event) => {
    switch (event.target.value) {
      case 6:
        setSection("Палеолит");
        break;
      case 7:
        setSection("Түрік қағанаты");
        break;
      case 8:
        setSection("Қазақ-Жоңғар соғыстары");
        break;
      case 9:
        setSection("1916 жылғы ұлт-азаттық көтеріліс");
        break;
    }
    setGrade(event.target.value);
  };

  const onChangeSection = (event) => {
    setSection(event.target.value);
  };

  const onChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  React.useEffect(() => {
    if (method === "Флеш-карта") dispatch(fetchFlashcards({ grade, section }));
    else if (method === "Тест") dispatch(fetchQuiz({ grade, section }));
  }, [grade, section, method]);

  return (
    <Container
      sx={{
        // padding: "100px 0",
        width: 600,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Grade</InputLabel>
            <Select value={grade} label="Grade" onChange={onChangeGrade}>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Section</InputLabel>
            <Select value={section} label="Section" onChange={onChangeSection}>
              {sectionsByGrade[grade].map(
                (sectionMenuItem, sectionMenuIndex) => (
                  <MenuItem key={sectionMenuIndex} value={sectionMenuItem}>
                    {sectionMenuItem}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Method</InputLabel>
            <Select value={method} label="Method" onChange={onChangeMethod}>
              <MenuItem value="Флеш-карта">Флеш-карта</MenuItem>
              <MenuItem value="Тест">Тест</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
      {method === "Флеш-карта" ? (
        <Flashcards
          questions={flashcardQuestions}
          totalCardsNum={totalCardsNum}
        />
      ) : (
        <Quiz grade={grade} section={section} questions={quizQuestions} />
      )}
    </Container>
  );
};

export default LearningTechniques;
