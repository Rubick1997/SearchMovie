import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button} from "reactstrap";
import { Link } from "react-router-dom";


function Search() {
	//states- input querry, movies
	const [query, setQuery] = useState("");
	
	return (
		<React.Fragment>
			<Form>
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
					<Link to={`/results/${query}`}>
						<Button className='btn form-group' type='submit'>
							Search
						</Button>
					</Link>
				</FormGroup>
			</Form>
		</React.Fragment>
	);
}

export default Search;
