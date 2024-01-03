import { useNavigate } from "react-router-dom";

function NewPizzaPage() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, kepURL, isGlutenFree } = e.target.elements;
        const pizzaData = {
            name: name.value,
            kepURL: kepURL.value,
            isGlutenFree: isGlutenFree.checked,
        };

        try {
            await fetch("https://pizza.kando-dev.eu/Pizza", {
                method: "POST",
                body: JSON.stringify(pizzaData),
            });
            console.log(pizzaData);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <h2 style={{ textAlign: "center" }}>Új pizza</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Név:</label>
                    <div>
                        <input type="text" name="name" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Kép URL:</label>
                    <div>
                        <input type="text" name="kepURL" className="form-control" />
                    </div>
                </div>
                <div className="form-group row pb-3">
                    <label className="col-sm-3 col-form-label">Gluténmentes?</label>
                    <div>
                        <input type="checkbox" name="isGlutenFree" />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">Küldés</button>
            </form>
        </div>
    )
}

export default NewPizzaPage;