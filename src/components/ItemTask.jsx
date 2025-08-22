import { useState } from "react";
import { FaTrashAlt, FaCheckSquare } from "react-icons/fa";

const ItemTask = ({task, id, deleteTask}) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const switchClick = () => {
        setIsCompleted(!isCompleted)
    }

    return (
    <div className={`taskItem flexContainer ${isCompleted ? "active" : ""}`}>
            <FaCheckSquare size={20} 
                onClick={switchClick}
            /> 
            <span>{task}</span> 
            <FaTrashAlt 
            size={20}
            onClick={ () => {
                deleteTask(id)
            }}/>
        </div>
    )
}
export default ItemTask