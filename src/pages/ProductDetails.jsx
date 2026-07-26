import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState(null);


    useEffect(() => {

        getTask();

    }, []);



    const getTask = async () => {

        try {

            const res = await API.get(`/tasks/${id}`);

            setTask(res.data.data);


        } catch(error) {

            console.log(error);

            alert("Task Not Found");

        }

    };



    if(!task)
        return <h2>Loading...</h2>;



    return (

        <div className="container">


            <div className="task-card details">


                <h1>
                    {task.title}
                </h1>


                <p>
                    {task.description}
                </p>


                <h3>

                    Status:

                    {
                        task.completed
                        ? " Completed ✅"
                        : " Pending ⏳"
                    }

                </h3>



                <button

                className="edit-btn"

                onClick={() =>
                    navigate(`/edit-product/${task._id}`)
                }

                >

                    Edit Task

                </button>


            </div>


        </div>

    );

}


export default ProductDetails;