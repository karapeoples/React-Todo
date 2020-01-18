import React from "react";

const Todo = ({ item, toggleCompleted }) => {
	return (
		<div>
			<p onClick={() => toggleCompleted(item.id)} className={`item ${item.completed ? "completed" : ""}`}>
				{item.task}
			</p>
		</div>
	);
};

export default Todo;
