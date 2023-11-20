import './App.css';
// import Ex1 from './components/Ex1';
// import Ex2 from './components/Ex2';
// import Ex3 from './components/Ex3';
// import Ex4 from './components/Ex4';
// import Ex5 from './components/Ex5';
// import Ex6 from './components/Ex6';
// import Ex7 from './components/Ex7';
 import Ex8 from './components/Ex8';
 import Ex9 from './components/Ex9';
 import Ex10 from './components/Ex10';
 import Ex11 from './components/Ex11';

function App() {
  return (
    <div className="container-fluid">
      {/* <div className="row">
        <div className="col">
          <h1 className='bg-primary text-center'>THIS IS APP COMPONENT..! (PARENT COMPONENT)</h1>
        </div>
      </div> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">PARENT-COMP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
        </div>
      </nav>
        {/* <Ex1/> */}

        {/* <Ex2/> */}

        {/* <Ex3/> */}

        {/* <Ex4/> */}

        {/* Syntax for Props: <ComponentName property1="value1" property2="value2" property3="value3" */}

        {/* <Ex5 img="https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png" name="Parent-Card" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id. Corporis laboriosam perspiciatis quo totam in tenetur fugit. Magni quisquam quia, architecto voluptatibus aperiam nulla consequatur laudantium cumque repudiandae nam!"/>       */}

        {/* <Ex6 img="https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png" name="Parent-Card" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id. Corporis laboriosam perspiciatis quo totam in tenetur fugit. Magni quisquam quia, architecto voluptatibus aperiam nulla consequatur laudantium cumque repudiandae nam!"/> */}

        {/* <Ex7/> */}

        <Ex8 img="https://i.pinimg.com/564x/20/d7/48/20d74821f847abd188767831db59074d.jpg" name="Parent-Card" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id. Corporis laboriosam perspiciatis quo totam in tenetur fugit."/>

        <Ex9 img="https://i.pinimg.com/564x/81/ac/9e/81ac9ef6456e8eccbf651fc368e83e4a.jpg" name="Parent-Card" lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, id. Corporis laboriosam perspiciatis quo totam in tenetur fugit. Magni quisquam quia, architecto voluptatibus aperiam nulla consequatur laudantium cumque repudiandae nam!"/>

        <Ex10/>

        <Ex11/>
    </div>
  );
}

export default App;
