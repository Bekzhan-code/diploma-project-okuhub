import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";

import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";

const Flashcards = ({ questions, totalCardsNum }) => {
  const [cardIndex, setCardIndex] = React.useState(1);
  const [toggleFlipcard, setToggleFlipcard] = React.useState(false);

  const onToggleFlipcard = () => {
    setToggleFlipcard(!toggleFlipcard);
  };

  const handleNextCard = () => {
    if (cardIndex < totalCardsNum && !toggleFlipcard) {
      setCardIndex(cardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (cardIndex > 1) {
      setCardIndex(cardIndex - 1);
    }
  };

  React.useEffect(() => {
    setCardIndex(1);
    setToggleFlipcard(false);
  }, [questions]);

  return (
    <div
      style={{
        width: 600,
        height: 300,
        background: "none",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "all 0.4s ease",
          transform: toggleFlipcard ? "rotateY(180deg)" : "",
        }}
      >
        {/* Front */}
        <Card
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            overflow: "hidden",
          }}
        >
          <CardMedia
            sx={{
              height: "15%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton>
              <Check />
            </IconButton>
          </CardMedia>
          <CardContent
            sx={{
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={onToggleFlipcard}
          >
            <Typography variant="h4" align="center">
              {questions[cardIndex - 1]?.question}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "15%",
            }}
          >
            <IconButton onClick={handlePreviousCard} disabled={cardIndex === 1}>
              <ArrowBack />
            </IconButton>
            <span>{`${cardIndex}/${totalCardsNum}`}</span>
            <IconButton
              onClick={handleNextCard}
              disabled={cardIndex === totalCardsNum}
            >
              <ArrowForward />
            </IconButton>
          </CardActions>
        </Card>

        {/* Back */}
        <Card
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            overflow: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <CardMedia
            sx={{
              height: "15%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton>
              <Check />
            </IconButton>
          </CardMedia>
          <CardContent
            sx={{
              height: "70%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={onToggleFlipcard}
          >
            <Typography variant="h4" align="center">
              {questions[cardIndex - 1]?.answer}
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "15%",
            }}
          >
            <IconButton onClick={handlePreviousCard} disabled={cardIndex === 1}>
              <ArrowBack />
            </IconButton>
            <span>{`${cardIndex}/${totalCardsNum}`}</span>
            <IconButton
              onClick={handleNextCard}
              disabled={cardIndex === totalCardsNum}
            >
              <ArrowForward />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Flashcards;
