import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function EditProduct() {

    const { id } = useParams();

    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        title: "",
        description: "",
        completed: false
    });


    const [loading, setLoading] = useState(true);



    useEffect(() => {

        getTask();

    }, []);



    const getTask = async () => {

        try {

            const res = await API.get(`/tasks/${id}`);

            const task = res.data.data;


            setFormData({

                title: task.title,

                description: task.description,

                completed: task.completed

            });


        } catch(error) {

            console.log(error);

            alert("Task Load Failed");

        }
        finally{

            setLoading(false);

        }

    };



    const handleChange = (e)=>{

        const {name,value,type,checked}=e.target;


        setFormData({

            ...formData,

            [name]:
            type==="checkbox"
            ? checked
            : value

        });

    };




    const handleSubmit = async(e)=>{

        e.preventDefault();


        try{

            await API.put(
                `/tasks/${id}`,
                formData
            );


            alert("✅ Task Updated");


            navigate("/products");


        }
        catch(error){

            console.log(error);

            alert("Update Failed");

        }

    };



    if(loading)
        return <h2>Loading...</h2>;



    return (

        <div className="container">


            <h1 className="page-title">
                Edit Task
            </h1>



            <form
            className="task-form"
            onSubmit={handleSubmit}
            >


                <input

                type="text"

                name="title"

                value={formData.title}

                onChange={handleChange}

                required

                />



                <textarea

                name="description"

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



                <button>

                    Update Task

                </button>



            </form>


        </div>

    );

}


export default EditProduct;