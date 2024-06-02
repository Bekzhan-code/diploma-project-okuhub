import React from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Grid,
  IconButton,
  Collapse,
  Tooltip,
  styled
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProgress } from "../../redux/slices/userActionSlice";
import LoadingPage from "../../components/LoadingPage";

const StyledPageContainer = styled(Box)({
  position: "relative",
  overflow: "hidden",

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "15%",
    zIndex: -1,
    pointerEvents: "none", // Чтобы не перекрывать интерактивные элементы
  },

  "&::before": {
    left: 0,
    background: "linear-gradient(to bottom, #00539c, #ddf4ff)", // Градиент с синего #00539c к голубому #ddf4ff
    clipPath: "polygon(100% 0%, 0% 0% , 0% 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.75%, 29% 40.8%, 30% 39.9%, 31% 39.1%, 32% 38.35%, 33% 37.65%, 34% 37.05%, 35% 36.5%, 36% 36.05%, 37% 35.65%, 38% 35.35%, 39% 35.15%, 40% 35.05%, 41% 35%, 42% 35.05%, 43% 35.2%, 44% 35.45%, 45% 35.75%, 46% 36.15%, 47% 36.65%, 48% 37.2%, 49% 37.85%, 50% 38.55%, 51% 39.35%, 52% 40.2%, 53% 41.1%, 54% 42.05%, 55% 43.05%, 56% 44.1%, 57% 45.15%, 58% 46.3%, 59% 47.4%, 60% 48.55%, 61% 49.7%, 62% 50.85%, 63% 52%, 64% 53.15%, 65% 54.25%, 66% 55.35%, 67% 56.4%, 68% 57.45%, 69% 58.4%, 70% 59.35%, 71% 60.2%, 72% 61.05%, 73% 61.8%, 74% 62.45%, 75% 63.05%, 76% 63.6%, 77% 64.05%, 78% 64.4%, 79% 64.7%, 80% 64.85%, 81% 65%, 82% 65%, 83% 64.9%, 84% 64.75%, 85% 64.5%, 86% 64.2%, 87% 63.75%, 88% 63.25%, 89% 62.7%, 90% 62.05%, 91% 61.3%, 92% 60.5%, 93% 59.65%, 94% 58.75%, 95% 57.8%, 96% 56.8%, 97% 55.75%, 98% 54.65%, 99% 53.55%, 100% 52.4%)", // Волнистый эффект по левой стороне
  },

  "&::after": {
    top: 0,
    right: 0,
    background: "linear-gradient(to bottom, #00539c, #ddf4ff)", // Градиент с синего #00539c к голубому #ddf4ff
    clipPath: "polygon(100% 0%, 0% 0% , 0% 65%, 1% 64.95%, 2% 64.8%, 3% 64.6%, 4% 64.3%, 5% 63.9%, 6% 63.45%, 7% 62.9%, 8% 62.25%, 9% 61.55%, 10% 60.8%, 11% 59.95%, 12% 59.05%, 13% 58.1%, 14% 57.1%, 15% 56.05%, 16% 55%, 17% 53.9%, 18% 52.8%, 19% 51.65%, 20% 50.5%, 21% 49.35%, 22% 48.2%, 23% 47.05%, 24% 45.9%, 25% 44.8%, 26% 43.75%, 27% 42.75%, 28% 41.75%, 29% 40.8%, 30% 39.9%, 31% 39.1%, 32% 38.35%, 33% 37.65%, 34% 37.05%, 35% 36.5%, 36% 36.05%, 37% 35.65%, 38% 35.35%, 39% 35.15%, 40% 35.05%, 41% 35%, 42% 35.05%, 43% 35.2%, 44% 35.45%, 45% 35.75%, 46% 36.15%, 47% 36.65%, 48% 37.2%, 49% 37.85%, 50% 38.55%, 51% 39.35%, 52% 40.2%, 53% 41.1%, 54% 42.05%, 55% 43.05%, 56% 44.1%, 57% 45.15%, 58% 46.3%, 59% 47.4%, 60% 48.55%, 61% 49.7%, 62% 50.85%, 63% 52%, 64% 53.15%, 65% 54.25%, 66% 55.35%, 67% 56.4%, 68% 57.45%, 69% 58.4%, 70% 59.35%, 71% 60.2%, 72% 61.05%, 73% 61.8%, 74% 62.45%, 75% 63.05%, 76% 63.6%, 77% 64.05%, 78% 64.4%, 79% 64.7%, 80% 64.85%, 81% 65%, 82% 65%, 83% 64.9%, 84% 64.75%, 85% 64.5%, 86% 64.2%, 87% 63.75%, 88% 63.25%, 89% 62.7%, 90% 62.05%, 91% 61.3%, 92% 60.5%, 93% 59.65%, 94% 58.75%, 95% 57.8%, 96% 56.8%, 97% 55.75%, 98% 54.65%, 99% 53.55%, 100% 52.4%)", // Волнистый эффект по правой стороне
  },
});

const UserPage = () => {
  const dispatch = useDispatch();
  const { userProgress,status } = useSelector((state) => state.userActions);
  const {userData} = useSelector((state) => state.auth)

  const [openTopics, setOpenTopics] = React.useState(
    userProgress?.map(() => false)
  );

  const toggleTopic = (index) => {
    setOpenTopics((prev) => {
      const newOpenTopics = [...prev];
      newOpenTopics[index] = !newOpenTopics[index];
      return newOpenTopics;
    });
  };

  React.useEffect(() => {
    dispatch(fetchUserProgress());
  }, []);

  return status === "loading" ? <LoadingPage/> : (
    <StyledPageContainer>
      <Box textAlign="center" m={2}>
      <Box textAlign="center" mb={4}>
      <Typography variant="h4" component="div">
      {userData.email}
      </Typography>
      <Typography variant="body1" component="div">
        Тіркелген күн: {userData.createdAt.split('T')[0]}
      </Typography>
    </Box>
      <Grid container direction="column" alignItems="center" spacing={4}>
        {userProgress?.map((topic, index) => {
          const totalProgress =
            Math.round(topic.subTopics.reduce(
              (acc, subTopic) => acc + subTopic.progress,
              0
            ) / topic.subTopics.length);
          const totalTestPercentage = Math.round(topic.subTopics.reduce(
            (acc,subTopic) => acc + subTopic.averageTestScore,
            0
          ) / topic.subTopics.length)
          return (
            <Grid item key={index}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  position="relative"
                  display="inline-flex"
                  flexDirection="column"
                  alignItems="center"
                  m={2}
                >
                  <CircularProgress
                    variant="determinate"
                    value={totalProgress}
                    size={100}
                    sx={{ backgroundColor: "orange", borderRadius: "50%" }}
                  />
                  <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={100}
                    height={100}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      color="textSecondary"
                    >
                      {`${Math.round(totalProgress)}%`}
                    </Typography>
                  </Box>
                  <Typography variant="body1" mt={2}>
                    {topic.name}
                  </Typography>
                  <IconButton
                    size="large"
                    onClick={() => toggleTopic(index)}
                    sx={{ position: "absolute", bottom: -15, right: -15 }}
                  >
                    {openTopics[index] ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </Box>
                <Box>
                  <Tooltip title="Тақырып бойынша орташа балл">
                    <Typography variant="h5">{totalTestPercentage}%</Typography>
                  </Tooltip>
                  <Tooltip title="Тестті тапсыру саны">
                    <Typography variant="h5">{topic.numOfAttempts} рет</Typography>
                  </Tooltip>
                </Box>
              </Box>
              <Collapse in={openTopics[index]}>
                <Grid
                  container
                  spacing={2}
                  direction="column"
                  alignItems="center"
                  mt={2}
                >
                  {topic.subTopics.map((subTopic, subIndex) => (
                    <Grid item key={subIndex} style={{ position: "relative" }}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        width="350px"
                      >
                        <Box
                          position="relative"
                          display="inline-flex"
                          flexDirection="column"
                          alignItems="center"
                          width="150px"
                        >
                          <CircularProgress
                            variant="determinate"
                            value={subTopic.progress}
                            size={60}
                            sx={{
                              backgroundColor: "yellow",
                              borderRadius: "50%",
                            }}
                          />
                          <Box
                            top={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            height={63}
                          >
                            <Typography
                              variant="h6"
                              component="div"
                              color="textSecondary"
                            >
                              {subTopic.progress}%
                            </Typography>
                          </Box>
                          <Typography variant="body1">
                            {subTopic.name}
                          </Typography>
                        </Box>
                        <Box>
                          <Tooltip title="Орташа балл">
                            <Typography variant="h5">{subTopic.averageTestScore}%</Typography>
                          </Tooltip>
                          <Tooltip title="Тестті тапсыру саны">
                            <Typography variant="h5">{subTopic.numOfAttempts} рет</Typography>
                          </Tooltip>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Collapse>
            </Grid>
          );
        })}
      </Grid>
    </Box>
    </StyledPageContainer>
  );
};

export default UserPage;
