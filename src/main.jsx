import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/Home/Home";
import Search from "../src/pages/Search/Search";
import MyBookings from "../src/pages/MyBookings/MyBookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export const theme = createTheme({
  typography: {
    fontFamily: "Poppins , sans-serif",
  },
  palette: {
    primary: {
      main: "#2AA7FF",
      green: "#00A500",
      secondary: "#1B3C74",
    },
  },
  components: {
    MuiGrid2: {
      defaultProps: {
        disableEqualOverflow: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
        contained: {
          color: "#fff",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "90%",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#000000",
          fontSize: "56px",
          fontWeight: "700",
        },
        h2: {
          color: "#1B3C74",
          fontWeight: "600",
          fontSize: "48px",
          lineHeight: 1.2,
        },
        h3: {
          color: "#102851",
          fontSize: "30px",
          fontWeight: "500",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: "#FAFBFE",
          borderRadius: "8px",
          color: "#ABB6C7",
          "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#F0F0F0",
            },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme.typography.h2 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
};

theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "36px",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
  },
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
