import { useState } from "react"
import Display from "./display"

function Content() {
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [exercises, setExercises] = useState<number>(4)
	const [sets, setSets] = useState<number>(2)
	const [reps, setReps] = useState<number>(10)
	const [repTime, setRepTime] = useState<number>(6)
	const [setTime, setSetTime] = useState<number>(10)

	const totalTime = 0

	return (
		<main className='content-container'>
			<h2>
				Hello, if you would like to hear chimes between sets and reps please edit your workout
				details below
			</h2>
			<form action=''>
				<label htmlFor='exercises'>Number of exercises: </label>
				<input type='number' id='exercises'></input>
				<br />
				<label htmlFor='sets'>Number of sets: </label>
				<input type='number' id='sets'></input>
				<br />
				<label htmlFor='reps'>Number of reps: </label>
				<input type='number' id='reps'></input>
				<br />
				<label htmlFor='repTime'>Time between sets (seconds): </label>
				<input type='number' id='setTime'></input>
				<br />
				<label htmlFor='repTime'>Time between reps (seconds): </label>
				<input type='number' id='repTime'></input>

				<p>
					Currently your audio track is a total of {totalTime} minutes long. You are doing {sets}
					sets of {exercises} exercises with a {setTime} second break in between. Each set contains
					{reps} reps with a {repTime} second interval.
				</p>
				<audio
					src='/src/assets/mariostart.mp3'
					controls
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
				></audio>
			</form>
			<Display />
		</main>
	)
}

export default Content
