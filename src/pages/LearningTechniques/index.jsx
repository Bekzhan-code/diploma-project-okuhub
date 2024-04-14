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

import { fetchFlashcards } from "../../redux/slices/flashcardSlice";

const LearningTechniques = () => {
  const dispatch = useDispatch();
  const { flashcardQuestions, totalCardsNum } = useSelector(
    (state) => state.flashcards
  );

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
      case 7:
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
    dispatch(fetchFlashcards({ grade, section }));
  }, [grade, section]);

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
              <MenuItem value="Палеолит">Палеолит</MenuItem>
              <MenuItem value="Мезолит">Мезолит</MenuItem>
              <MenuItem value="Неолит">Неолит</MenuItem>
              <MenuItem value="Түрік қағанаты">Түрік қағанаты</MenuItem>
              <MenuItem value="Батыс Түрік қағанаты">
                Батыс Түрік қағанаты
              </MenuItem>
              <MenuItem value="Шығыс Түрік қағанаты">
                Шығыс Түрік қағанаты
              </MenuItem>
              <MenuItem value="Қазақ-Жоңғар соғыстары">
                Қазақ-Жоңғар соғыстары
              </MenuItem>
              <MenuItem value="Кіші жүздің Ресейдің құрамына кіруі">
                Кіші жүздің Ресейдің құрамына кіруі
              </MenuItem>
              <MenuItem value="Абылай хандығы">Абылай хандығы</MenuItem>
              <MenuItem value="1916 жылғы ұлт-азаттық көтеріліс">
                1916 жылғы ұлт-азаттық көтеріліс
              </MenuItem>
              <MenuItem value="Қазақстандағы 1917 жылғы Ақпан, Қазан төңкерістері">
                Қазақстандағы 1917 жылғы Ақпан, Қазан төңкерістері
              </MenuItem>
              <MenuItem value="Азамат соғысы жылдарындағы Қазақстан">
                Азамат соғысы жылдарындағы Қазақстан
              </MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Grade</InputLabel>
            <Select value={method} label="Method" onChange={onChangeMethod}>
              <MenuItem value="Флеш-карта">Флеш-карта</MenuItem>
              <MenuItem value="Тест">Тест</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>
      <Flashcards
        questions={flashcardQuestions}
        totalCardsNum={totalCardsNum}
      />
    </Container>
  );
};

export default LearningTechniques;
