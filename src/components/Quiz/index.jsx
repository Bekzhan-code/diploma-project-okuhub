import React from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Button,
} from "@mui/material";

const Quiz = ({ questions }) => {
  // const questions = [
  //   {
  //     _id: "6621cddcd13fff91c93369b3",
  //     question: "Адамзат тарихы дамуының ең алғашқы кезеңі:",
  //     variants: [
  //       "Қола дәуірі",
  //       "Темір дәуірі.",
  //       "Рулық тайпалық кезең.",
  //       "Андронов кезеңі",
  //       "Тас дәуірі",
  //     ],
  //     answer: "Тас дәуірі",
  //   },
  //   {
  //     _id: "6621cddcd13fff91c93369b4",
  //     question: "Ежелгі Қазақстан тарихына жатпайтын тарихи үдеріс:",
  //     variants: [
  //       "Ислам дінінің таралуы",
  //       "Христиан дінінің таралуы",
  //       "Будда дінінің таралуы",
  //       "Салафиттердің таралуы",
  //       "Будда, салафит діндерінің таралуы",
  //     ],
  //     answer: "Ислам дінінің таралуы",
  //   },
  //   {
  //     _id: "6621cddcd13fff91c93369b5",
  //     question: "Адам баласы жер бетінде пайда болған мерзім:",
  //     variants: [
  //       "1 мың жыл бұрын",
  //       "2 млн жыл бұрын",
  //       "1 млн жыл бұрын",
  //       "3 млн жыл бұрын",
  //       "3 мың жыл бұрын",
  //     ],
  //     answer: "3 млн жыл бұрын",
  //   },
  //   {
  //     _id: "6621cddcd13fff91c93369b6",
  //     question:
  //       "Ғылыми жүйе бойынша тас дәуірі бөлінетін кезеңдеріне жатпайтыны:",
  //     variants: ["Палеолит", "Мезолит", "Неолит", "Энеолит", "Қола дәуірі"],
  //     answer: "Энеолит",
  //   },
  //   {
  //     _id: "6621cddcd13fff91c93369b7",
  //     question: "Палеолит дәуірі қамтыған кезең:",
  //     variants: [
  //       "б.з.б. 40 – 12 мыңжылдықтар",
  //       "б.з.б. 6 – 4 мыңжылдықтар",
  //       "б.з.б. 2,6 млн – 12 мыңжылдық",
  //       "б.з.б. 5 – 3 мыңжылдықтар",
  //       "б.з.б. 1 млн – 5 мыңжылдық",
  //     ],
  //     answer: "б.з.б. 2,6 млн – 12 мыңжылдық",
  //   },
  // ];

  const [userAnswers, setUserAnswers] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSelectVariant = (event, quesId) => {
    setUserAnswers({
      ...userAnswers,
      [quesId]: event.target.value,
    });
  };

  const handleSubmit = () => {
    // Handle submission logic here
    setIsSubmitted(true);
    // For demonstration purposes, log the answers
    console.log("Submitted answers:", userAnswers);
  };

  return (
    <div>
      {questions.map((ques, qNum) => (
        <div key={ques._id}>
          {/* sx={{ color: "#ef5350" }} add to typography this code */}
          <Typography variant="subtitle1">
            {qNum + 1}. {ques.question}
          </Typography>
          <FormControl
            sx={{ marginLeft: "7%" }}
            component="fieldset"
            margin="dense"
            required
          >
            <RadioGroup
              value={userAnswers[ques._id] || ""}
              onChange={(e) => onSelectVariant(e, ques._id)}
            >
              {ques.variants.map((variant, index) => (
                <FormControlLabel
                  disabled={isSubmitted}
                  sx={{
                    backgroundColor:
                      isSubmitted && ques.answer === variant ? "#4caf50" : "",
                  }}
                  key={index}
                  value={variant}
                  control={<Radio />}
                  label={variant}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      ))}
      <Box textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isSubmitted}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Quiz;
