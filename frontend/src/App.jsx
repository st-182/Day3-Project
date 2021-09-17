import React from "react";
// importing Header and Footer molecules
import Header from "./components/molecules/Header";
import Footer from "./components/molecules/Footer";

//Importing styled-components Global style
import { GlobalStyle } from "./GlobalStyles";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <h1>Administratoriaus puslapis</h1>
        <HomeScreen />
      </main>
      <Footer />
    </>
  );
}

export default App;
