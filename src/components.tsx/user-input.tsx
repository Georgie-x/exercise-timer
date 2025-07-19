function UserInput() {
	return (
		<>
			<label htmlFor='exercises'>Number of exercises</label>
			<input type='number' id='exercises' placeholder='4'></input>
			<label htmlFor='sets'>Number of sets</label>
			<input type='number' id='sets' placeholder='2'></input>
			<label htmlFor='reps'>Number of reps</label>
			<input type='number' id='reps' placeholder='10'></input>
			<label htmlFor='repTime'>Time between reps</label>
			<input type='number' id='repTime' placeholder='6'></input>
		</>
	)
}

export default UserInput
