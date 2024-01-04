import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Pizza.css';

function PizzaListPage() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("https://pizza.kando-dev.eu/Pizza")
            .then((res) => res.json())
            .then((pizzak) => setPizzas(pizzak))
            .catch(console.log)
    })

    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}>Pizzák</h2>
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.id + 3} className="col-sm-3">
                        <div className="card" style={{ width: "18rem", height: "28rem" }}>
                            <div className="card-body">
                                <NavLink key={pizza.id} to={`/pizza/${pizza.id}`}>
                                    <img className="img-fluid"
                                        style={{ width: "18rem", height: "18rem" }}
                                        alt="hello world, ide kéne a képed!"
                                        src={pizza.kepURL ? pizza.kepURL : "https://via.placeholder.com/400x800"}
                                    />
                                </NavLink>
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">{pizza.isGlutenFree ? "Gluténmentes" : "Nem gluténmentes"}</p>
                                <hr></hr>
                                <NavLink key={pizza.id + 2} to={`/update-pizza/${pizza.id}`} className="btn btn-warning">Módosítás</NavLink>
                                <NavLink key={pizza.id + 1} to={`/delete-pizza/${pizza.id}`} className="btn btn-danger">Törlés</NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PizzaListPage;