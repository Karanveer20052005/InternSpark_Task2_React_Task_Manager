import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function AddProduct() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false,
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            await API.post("/tasks", formData);

            alert("✅ Task Added Successfully");

            navigate("/products");

        } catch (err) {

            console.error(err);

            alert("❌ Failed to Add Task");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container">

            <h1 className="page-title">
                Add New Task
            </h1>

            <form className="task-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="title"
                    placeholder="Task Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Task Description"
                    rows="5"
                    value={formData.description}
                    onChange={handleChange}
                />

                <label>

                    <input
                        type="checkbox"
                        name="completed"
                        checked={formData.completed}
                        onChange={handleChange}
                    />

                    Completed

                </label>

                <button type="submit">

                    {loading ? "Saving..." : "Add Task"}

                </button>

            </form>

        </div>

    );

}

export default AddProduct;