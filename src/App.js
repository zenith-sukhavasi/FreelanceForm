import logo from './logo.svg';
import './App.css';
// import './APP.SCSS';
import { Home } from './Home';
import { DegreeButton } from './Components/FormComponents/DegreeButton';
import { FormProvider } from './Data/FormContext';

function App() {
  return (
    <FormProvider>
    <div className="App">
      {/* <DegreeButton></DegreeButton> */}
     <Home></Home>
    </div>
    </FormProvider>
  );
}

export default App;
