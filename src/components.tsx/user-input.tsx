function UserInput() {
	//const handleSubmit

	return (
		<>
			<form action=''>
				<label htmlFor='exercises'>Number of exercises</label>
				<input type='number' id='exercises'></input>
				<label htmlFor='sets'>Number of sets</label>
				<input type='number' id='sets'></input>
				<label htmlFor='reps'>Number of reps</label>
				<input type='number' id='reps'></input>
				<label htmlFor='repTime'>Time between sets</label>
				<input type='number' id='setTime'></input>
				<label htmlFor='repTime'>Time between reps</label>
				<input type='number' id='repTime'></input>
			</form>
			<button>I'm button</button>
		</>
	)
}

export default UserInput
