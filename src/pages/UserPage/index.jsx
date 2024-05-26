import React from "react";
import {
  CircularProgress,
  Typography,
  Box,
  Grid,
  IconButton,
  Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProgress } from "../../redux/slices/userActionSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  const { userProgress } = useSelector((state) => state.userActions);

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

  return (
    <Box textAlign="center" m={2}>
      <Grid container direction="column" spacing={4}>
        {userProgress?.map((topic, index) => {
          const totalProgress =
            topic.subTopics.reduce(
              (acc, subTopic) => acc + subTopic.progress,
              0
            ) / topic.subTopics.length;
          return (
            <Grid item key={index}>
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
                  sx={{backgroundColor: "orange", borderRadius: "50%"}}
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
                        position="relative"
                        display="inline-flex"
                        flexDirection="column"
                        alignItems="center"
                        
                      >
                        <CircularProgress
                          variant="determinate"
                          value={subTopic.progress}
                          size={60}
                          sx={{backgroundColor: "yellow", borderRadius: "50%"}}
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
                        <Typography variant="body1">{subTopic.name}</Typography>
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
  );
};

export default UserPage;
