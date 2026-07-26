import { useEffect, useState } from "react";
import API from "../services/api";
import Loader from "../components/Loader";
import TaskCard from "../components/TaskCard";

function Products() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to Load Tasks");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">

      <h1 className="page-title">Task Manager</h1>

      <div className="task-grid">

        {tasks.length === 0 ? (
          <h2>No Tasks Found</h2>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Products;