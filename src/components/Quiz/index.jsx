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
