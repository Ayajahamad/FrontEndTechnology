import React from "react";

// Function
function testFunction(name){
  return name.toLowerCase();
}

function App() {
  // Variables
  const title = "WELCOME TO REACT";
  const endCode = "Welcome to Be-Practical Tech Solutions..!"

  const heading1 = React.createElement("h1",{id:"title1"},"Heading-1");
  const heading2 = React.createElement("h2",{id:"title1"},"Heading-2");
  const section = React.createElement("section",{id:"container"},[
    heading1,heading2
  ]);

  // Object
  const websiteLink = {
    url : "https://www.youtube.com/"
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-primary p-3 text-white text-center">
            {title + endCode}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="bg-secondary p-3 text-white text-center">
              {heading1}
              {heading2}
              {section}

              <a href={websiteLink.url} target="_blank">YOU TUBE</a>
              <br />

              FUNCTION CALLING : {testFunction(title)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
