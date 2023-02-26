import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <About />
      break
    case "/portfolio":
      component = <Portfolio />
      break
    case "/contact":
      component = <Contact />
      break
    case "/resume":
      component = <Resume />
      break
  }
  return (
    <div>
      <Navbar />
      {component}
      <Footer />
  </div>
);

}

export default App;
