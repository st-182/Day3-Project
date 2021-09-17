import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,body{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

  text-align: center;
  text-transform: uppercase;
  /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; */
     /* font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}


*,*::after,*::before{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 1000ms;
}





body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
  background-color: #ff7700;
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}

#root {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  /* min-height: calc(100vh - 35px); */
  min-height: 100vh;
  padding-bottom: 35px;
}

/*! Navigation */
header {
  border-radius: 0 0 50px 50px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  height: 30px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

}
header div {
  background: rgba(128, 128, 128, 0.8);
  min-width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}
header div img {
  width: 20%;
  height: 30px;
  object-fit: cover;
  object-position: 0% 100%;
}

nav {
  width: calc(100% - 250px);
}
ul {
  display: grid;
  grid-template-columns: auto auto auto auto;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  backdrop-filter: blur(10px);
  background-color: rgba(51, 51, 51, 0.4);
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 5px 26px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgba(17, 17, 17, 0.8);
}
/*! Navigation Ended */

/*! Footer */
footer {
  position: absolute;
  bottom: 0;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  background-color: rgba(51, 51, 51, 0.4);
  width: 100%;
  padding: 5px 16px;
  border-radius: 50px 50px 0 0;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);

}


button, input[type=submit] {
  border-radius: 10px;
  width: 100px;
  height: 30px;
  background: #ffffff2c;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border:1px solid #fb8d17;
  
  margin: 0 auto;
}

button:hover, input[type=submit]:hover {
  
}

button:active, input[type=submit]:active {
  
}
form{
  display: grid;
  grid-template-columns: 1fr 1fr;
input:not([type="submit"]) {
          padding: 10px;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 10px;
          border: 1px solid white;
          color: rgb(61, 60, 71);
        }
}

.container {
  display: grid;

  

  @media (min-width:786px){
    grid-template-columns: repeat(2, 1fr); 
  
  }

  @media (min-width: 1024px){
    grid-template-columns: repeat(3,1fr);

    
  }
}
`;
