import Router from "./Router";
import ThemeContext,{themes} from "./contexts/themeContext";
import { useState } from "react";


function App() {
  const [theme,setTheme]=useState(themes.dark);
  const value= {theme,setTheme}
  return (
    <div className="App">
      <ThemeContext.Provider value={value} >
      <Router/>
      </ThemeContext.Provider>
    
    </div>
  );
}

export default App;
