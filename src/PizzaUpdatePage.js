import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function PizzaUpdatePage() {
    const params = useParams();
    const id = params.pizzaId;
    const navigate = useNavigate();
    const [pizza, setPizza] = useState([]);
    const [updatename, setUpdateName] = useState('');
    const [updateisGlutenFree, setUpdateIsGlutenFree] = useState('');
    const [updatekepURL, setUpdateKepURL] = useState('');

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`)
                const pizza = await res.json();
                setPizza(pizza);
                setUpdateName(pizza.name);
                setUpdateIsGlutenFree(pizza.isGlutenFree);
                setUpdateKepURL(pizza.kepURL);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id, updatename, updateisGlutenFree, updatekepURL]);

    const updateName = event => {
        setUpdateName(event.target.value);
    }

    const updateIsGlutenFree = event => {
        setUpdateIsGlutenFree(event.target.value);
    }

    const updateKepURL = event => {
        setUpdateKepURL(event.target.value);
    }

    return (
        <div className="container">
            <h2>Pizza módosítása</h2>
            <form
                onSubmit={(e) => {
                    e.persist();
                    e.preventDefault();
                    fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: e.target.elements.name.value,
                            isGlutenFree: e.target.elements.isGlutenFree.checked,
                            kepURL: e.target.elements.kepURL.value
                        })
                    })
                        .then((res) => res.json())
                        .then(() => navigate("/"));
                }}
            >
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div>
                        <input type="text" name="name" className="form-control" defaultValue={pizza.name} onChange={updateName} />
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Gluténmentes?:</label>
                        <div>
                            <input type="checkbox" name="isGlutenFree" defaultValue={pizza.isGlutenFree} onChange={updateIsGlutenFree} />
                        </div>
                    </div>
                    <div className="form-group row pb-3">
                        <label className="col-sm-3 col-form-label">Kép URL:</label>
                        <div>
                            <input type="text" name="kepURL" className="form-control" defaultValue={pizza.kepURL} onChange={updateKepURL} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-success">Küldés</button>
                </div>
            </form>
        </div>
    )
}

export default PizzaUpdatePage;