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
import { fetchUserActions } from "../../redux/slices/userActionSlice";

const sectionsByGrade = {
  6: [
    "Палеолит",
    "Мезолит",
    "Неолит",
    "Ежелгі адамдар",
    "Энеолит",
    "Қола дәуірі",
    "Темір дәуірі",
    "Сақтар",
    "Сарматтар",
    "Ғұндар",
    "Үйсіндер",
    "Қаңлылар",
  ],
  7: [
    "Түрік қағанаты",
    "Батыс Түрік қағанаты",
    "Шығыс Түрік қағанаты",
    "Түркеш қағанаты",
    "Қарлұқ қағанаты",
    "Оғыз мемлекеті",
    "Қимақ қағанаты",
    "Қарахан мемлекеті",
    "Қарақытай мемлекеті",
    "Наймандар, Керейіттер, Жалайырлар",
    "Қыпшақ хандығы",
    "Шыңғысхан құрған монғол мемлекеті",
    "Алтын Орда",
    "Ақ Орда",
    "Моғолстан",
    "Әмір Темірдің басқыншылық жорықтары",
    "Ноғай Ордасы",
    "Сібір, Әбілқайыр хандығы",
    "Қазақ хандығы",
  ],
  8: [
    "Қазақ-Жоңғар соғыстары",
    "Кіші жүздің Ресейдің құрамына кіруі",
    "Абылай хандығы",
    "Е. Пугачев, С. Датұлы көтерілістері",
    "Қазақстанда хандық биліктің жойылуы",
    "1836-1838 жж. Бөкей ордасындағы шаруалар көтерілісі",
    "Жоламан Тіленшіұлы, К. Қасымұлы бастаған көтерілістер",
    "ХІХ ғасырдың 50 жылдарындағы қазақ шаруаларының азаттық күресі",
    "ХІХ ғасырдың 50 жылдарындағы қазақ шаруаларының азаттық күресі",
    "1867-1868 жылдардағы Қазақстандағы реформалар",
    "ХІХ ғ. Қазақстан",
    "ХІХ ғғ. Қазақстан мәдениеті",
    "ХХ ғасырдың басындағы Қазақстан",
  ],
  9: [
    "1916 жылғы ұлт-азаттық көтеріліс",
    "Қазақстандағы 1917 жылғы Ақпан, Қазан төңкерістері",
    "Азамат соғысы жылдарындағы Қазақстан",
    "Индустрияландыру және ұжымдастыру жылдарындағы Қазақстан",
    "1930 жылдардағы қоғамдық-саяси өмір, мәдениет",
    "Ұлы отан соғысы жылдарындағы Қазақстан",
    "1940-1960 жылдардағы Қазақстан",
    "Қазақстан түбегейлі бетбұрыстар кезінде",
    "Тәуелсіз Қазақстан",
  ],
};

const LearningTechniques = () => {
  const dispatch = useDispatch();
  const { flashcardQuestions, totalCardsNum } = useSelector(
    (state) => state.flashcards
  );
  const { quizQuestions } = useSelector((state) => state.quiz);
  const { userActions } = useSelector((state) => state.userActions);

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
    dispatch(fetchUserActions());
  }, []);

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
          grade={grade}
          section={section}
          questions={flashcardQuestions}
          totalCardsNum={totalCardsNum}
          userActions={userActions}
        />
      ) : (
        <Quiz grade={grade} section={section} questions={quizQuestions} />
      )}
    </Container>
  );
};

export default LearningTechniques;
