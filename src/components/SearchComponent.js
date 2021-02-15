import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function Search() {
	//states- input querry, movies
	const [query, setQuery] = useState("");

	return (

			<Form>
				<FormGroup className='form'>
					<Label htmlFor='query' className='label'>
						Movie/Show/Person Name
					</Label>
					<Input
						className='input form-control form-group'
						type='text'
						name='query'
						placeholder='Search'
						autoComplete='off'
						value={query}
						onChange={(e) => {
							e.preventDefault();
							setQuery(e.target.value);
						}}
					/>
					<Link to={`/results/${query}`}>
						<Button className='btn form-group' type='submit'>
							Search
						</Button>
					</Link>
				</FormGroup>
			</Form>
	);
}

export default Search;
