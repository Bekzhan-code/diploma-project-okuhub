import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchLogin } from "../../redux/slices/authSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isShownPassword, setIsShownPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setIsShownPassword(!isShownPassword);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    const data = await dispatch(fetchLogin({ email, password }));

    if (!data.payload) window.alert("Неправильный логин или пароль");
    else {
      window.localStorage.setItem("token", data.payload.token);
      navigate("/learning-techniques");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      component="main"
      maxWidth="sm"
    >
      <Paper elevation={3}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Кіру
        </Typography>
        <div
          style={{
            width: "100%",
            maxWidth: 400,
            padding: 24,
            backgroundColor: "#fff", // Белый фон формы
            borderRadius: 8,
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Тень
            textAlign: "center",
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChangeEmail}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Құпиясөз"
            type={isShownPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChangePassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    edge="end"
                  >
                    {isShownPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={onSubmit}
          >
            Кіру
          </Button>
          <Link to="/auth/sign-up">
            <Button
              fullWidth
              variant="outlined"
              size="large"
              sx={{ marginTop: "10px" }}
            >
              Тіркелу
            </Button>
          </Link>
        </div>
      </Paper>
    </Container>
  );
};

export default LoginPage;
