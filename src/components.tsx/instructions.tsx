import type { UserInputs } from "../types"

function Instructions({ exercises, sets, reps, setTime, repTime }: UserInputs) {
	const totalTime = exercises * sets * (repTime * reps) + setTime
	return (
		<>
			<h2>
				Hello, if you would like to hear chimes between sets and reps please enter your workout
				details below
			</h2>
			<p>
				Currently your audio track is a total of {totalTime} minutes long. You are doing {sets} sets of {exercises} exercises with a {setTime} second break in between. You are doing {reps} reps with a {repTime} second interval.
			</p>
		</>
	)
}

export default Instructions
