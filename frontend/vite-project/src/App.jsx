import Courses from "./courses/Courses";
import Home from "./homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext, themes } from "./store/store";
import { useEffect, useState } from "react";
import Signup from "./components/Signup";
function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleOnClick = () => {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  };
  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-black");
        body.classList.remove("text-white");
        body.classList.add("bg-white");
        body.classList.add("text-black");
        break;
      case themes.dark:
        body.classList.remove("bg-white");
        body.classList.remove("text-black");
        body.classList.add("bg-black");
        body.classList.add("text-yellow");

        break;
    }
  }, [theme]);
  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Courses />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
