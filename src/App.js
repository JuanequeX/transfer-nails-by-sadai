import logo from "../src/assets/LOGO-SADAI-NAILS.jpeg"
import Footer from "./components/Footer";
import Inputs from "./components/inputs"
import Whatapp from './components/Whatapp';

function App() {
  return (
    <div className="main-container">
      <img src={logo} alt='logo' className='main-container__logo' />
      <Inputs />
      <Whatapp />
      <Footer />
    </div>
  );
}

export default App;
