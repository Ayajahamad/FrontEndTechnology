import React from 'react';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"

const Operation = () => {
  return (
    <>
      <div className='bg-primary'>
        <div className="accordion p-4" id="accordionExample">
            <h2 className="text-white text-center">Descriptions</h2>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Arithematic Operation
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>
                    Arithmetic operations are fundamental math calculations </strong> like addition, subtraction, multiplication, and division. They are essential for manipulating and analyzing numerical data in various fields, forming the basis for mathematical and computational processes.
                    <a href="/add" className="btn btn-success text-center m-2">Arithematic Operation</a>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Comparison Operation
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>
                    Comparison operators </strong>, such as ==, !=, evaluate conditions and return boolean results in programming. They are vital for comparing values, determining equality, and establishing order, facilitating decision-making in code. These operators contribute to logical evaluations and enable concise expression of relationships between variables.
                    <a href="/sub" className="btn btn-success text-center m-2">Comparison Operation</a>
                    
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Ternary Operation
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>
                    The ternary operator (condition ? expr1 : expr2)</strong> is a concise way in programming to write an if-else statement in a single line. It evaluates a condition, returning expr1 if true and expr2 if false, providing a compact and readable alternative for simple conditional assignments. This operator enhances code efficiency by streamlining conditional expressions.
                    <a href="/mul" className="btn btn-success text-center m-2">Ternary Operatiion</a>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Boolean Operation
                    </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <strong>
                    Boolean operators (&&, ||, !) in programming </strong> manipulate true and false values to control logical operations. They are essential for constructing conditional statements, loops, and decision-making structures. Boolean operators enhance code flexibility by allowing the representation of intricate logical relationships and conditions.
                    <a href="/div" className="btn btn-success text-center m-2">Boolean Operatiion</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="p-4 bg-primary">
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={img1} className="d-block w-100"  alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
    </>
  )
}

export default Operation
