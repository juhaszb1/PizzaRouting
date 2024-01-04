import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function PizzaDeletePage() {
    const params = useParams();
    const id = params.pizzaId;
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                await fetch(`https://pizza.kando-dev.eu/Pizza/${id}`, {
                    method: "DELETE",
                });
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        })();
    });

    return (
        <></>
    )
}

export default PizzaDeletePage;