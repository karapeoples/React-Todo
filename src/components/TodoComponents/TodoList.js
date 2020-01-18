import React, { useState, useEffect} from "react";
import Todo from "./Todo";
import SearchForm from "../SearchForm";
import style from 'styled-components';

const Li = style.div`
	background: #ccff00;
	height: -10px;
`;


const TodoList = ({ errands,  toggleCompleted , newTask}) => {

	const [searchTerm, setSearchTerm] = useState("");

	const [searchResults, setSearchResults] = useState(errands);

	

	useEffect(() => {
		const results = errands.filter(character => {
			console.log('Info Here', searchResults)
			return character.task.toLowerCase().includes(searchTerm.toLowerCase());
		});
		setSearchResults(results); 
		console.log(searchTerm);
		//eslint-disable-next-line
	}, [searchTerm]);
	console.log(searchResults);

	const handleChange = e => {
		setSearchTerm(e.target.value);
	};

	

	if (searchTerm.length === 0) {
		return (
			<>
				<section className='formGoLeft'>
				<h3>Search</h3>
					<SearchForm handleChange={handleChange} searchTerm={searchTerm}  />
				</section>
				<ol className="errandList">
					{errands.map(item => (
						<li>
							<Todo key={item.id} item={item} toggleCompleted={toggleCompleted} searchTerm={item.task} />
						</li>
					))}
				</ol>
			</>
		);
	} else {
		return (
			<>
				<section className='formGoLeft'>
				<h3>Search</h3>
					<SearchForm handleChange={handleChange} searchTerm={searchTerm}  />
				</section>
				<ol className="errandList">
					{searchResults.map(item => (
						<li>
							<Li>
								<Todo key={item.id} item={item} toggleCompleted={toggleCompleted} searchTerm={item.newTask}  />
							</Li>
						</li>
					))}
				</ol>
			</>
		);
	}
};

export default TodoList;
