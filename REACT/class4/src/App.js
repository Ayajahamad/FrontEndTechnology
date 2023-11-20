import logo from './logo.svg';
import './App.css';
import User from './components/User';
import users from "./data/users"
// import UserClassCompo from './components/UserClassCompo';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="bg-success text-center text-white p-3 rounded shadow">
            <h1>FUNCTIONAL COMPONENT PROPS</h1>
          </div>
        </div>
      </div>

      {/* Functional component Props */}
      <User UsersData={users}/>
    </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    //       <div className="bg-success text-center text-white p-3 rounded shadow">
    //         <h1>CLASS COMPONENT PROPS</h1>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Class Components Props */}
    //   <UserClassCompo UsersDataC={users}/>
    // </div>
  );
}

export default App;
