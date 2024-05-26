import React from "react";
import {
  Typography,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Box,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { postUserAction } from "../../redux/slices/userActionSlice";

const Quiz = ({ grade, section, questions }) => {
  const [userAnswers, setUserAnswers] = React.useState({});
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isOpenModal, setIsOpenModal] = React.useState(false);

  const onSelectVariant = (event, quesId) => {
    setUserAnswers({
      ...userAnswers,
      [quesId]: event.target.value,
    });
  };

  const onPassAgain = () => {
    setIsSubmitted(false);
    window.scrollTo({ top: 0 });
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    postUserAction({
      grade,
      section,
      methodType: "Тест",
      quizResult: countCorrectAnswers(),
    });

    setIsOpenModal(true);
  };

  const countCorrectAnswers = () => {
    let count = 0;
    questions.forEach((q) => {
      if (q.answer === userAnswers[q._id]) count++;
    });

    return count;
  };

  return (
    <div style={{ marginBottom: "20px" }}>
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
        {isSubmitted ? (
          <Button variant="contained" color="primary" onClick={onPassAgain}>
            Қайта тапсыру
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Тапсыру
          </Button>
        )}
      </Box>
      <Modal open={isOpenModal} onClose={onCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            {section}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onCloseModal}
            sx={{ position: "absolute", right: 0, top: 0 }}
          >
            <Close />
          </IconButton>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Результаты теста: {countCorrectAnswers()}/10
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Quiz;
