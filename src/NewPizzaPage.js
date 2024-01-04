import { useNavigate } from "react-router-dom";

function NewPizzaPage() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch("https://pizza.kando-dev.eu/Pizza", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "name": e.target.elements.name.value,
                    "kepURL": e.target.elements.kepURL.value,
                    "isGlutenFree": (e.target.elements.isGlutenFree.checked? (1):(0)),
                }),
            });
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