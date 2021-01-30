import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Search() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	const searchInput = (e) => {
		e.preventDefault();
		let info;}
	return (
			<Form onSubmit={searchInput}>
				<FormGroup className='form'>
					<Label htmlFor='query' className='label'>
						Movie Name
					</Label>
					<Input
						className='input form-control form-group'
						type='text'
						name='query'
						placeholder='Search'
						autoComplete='off'
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<Button className='btn form-group' type='submit'>
						Search
					</Button>
				</FormGroup>
			</Form>
	);
}

export default Search;