import './App.css';
import Inline from './components/inline-style/Inline';
import ObjectStyle1 from './components/object-style/ObjectStyle1';
import ObjectStyle2 from './components/object-style/ObjectStyle2';
import StyledComponents from './components/styled.component/StyledComponents';

function App() {
  return (
    <div>
      <div className="container-fluid">
          <div className="col">
            <h1 className="display-4 text-success text-center">STYLES IN REACT</h1>
            <h2 className="globalClass">1) INDEX.CSS (GLOBAL CSS FILE : MODULE CSS)</h2>
            <h2 className="appClass">2) APP.CSS (GLOBAL CLASS : PARENT COMPONENT CSS)</h2>
          </div>
      </div>
      <Inline />
      <ObjectStyle1 />
      <ObjectStyle2 />
      <StyledComponents />
    </div>
  );
}

export default App;
