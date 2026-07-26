import { useNavigate } from "react-router-dom";
import API from "../services/api";

function TaskCard({ task }) {

    const navigate = useNavigate();


    const deleteTask = async () => {

        const confirmDelete = window.confirm(
            "Delete this task?"
        );

        if(!confirmDelete) return;


        try {

            await API.delete(`/tasks/${task._id}`);

            window.location.reload();

        } catch(error){

            console.log(error);

            alert("Delete Failed");

        }

    };


    return (

        <div className="task-card">

            <h2>
                {task.title}
            </h2>


            <p>
                {task.description}
            </p>


            <span className="status">

                {
                    task.completed
                    ? "Completed ✅"
                    : "Pending ⏳"
                }

            </span>


            <div className="buttons">

                <button
className="view-btn"
onClick={() =>
navigate(`/product/${task._id}`)
}
>
View
</button>
                <button
                    className="edit-btn"
                    onClick={() =>
                        navigate(`/edit-product/${task._id}`)
                    }
                >
                    Edit
                </button>


                <button
                    className="delete-btn"
                    onClick={deleteTask}
                >
                    Delete
                </button>


            </div>


        </div>

    );

}

export default TaskCard;