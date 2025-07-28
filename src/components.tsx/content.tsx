import { useRef, useState } from "react"
import { playWorkoutAudioSequence } from "../utils.js"
import type { UserInputs } from "../types.ts"
import Display from "./display"

function Content() {
	const audioRef = useRef<HTMLAudioElement>(null)
	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [status, setStatus] = useState({ exercise: 0, set: 0, rep: 0, done: false })

	const [formValues, setFormValues] = useState<UserInputs>({
		exercises: 4,
		sets: 2,
		reps: 10,
		setTime: 10,
		repTime: 6,
	})

	const fields: {
		id: keyof UserInputs
		label: string
	}[] = [
		{ id: "exercises", label: "Number of exercises" },
		{ id: "sets", label: "Number of sets" },
		{ id: "reps", label: "Number of reps" },
		{ id: "setTime", label: "Time between sets (seconds)" },
		{ id: "repTime", label: "Time between reps (seconds)" },
	]

	const handleChange = (id: keyof UserInputs, value: number) => {
		setFormValues((prev) => ({ ...prev, [id]: value }))
	}

	const handleStart = async () => {
		setIsPlaying(true)
		setStatus({ exercise: 0, set: 0, rep: 0, done: false })

		await playWorkoutAudioSequence(audioRef, formValues, (update) => {
			setStatus((prev) => ({ ...prev, ...update }))
		})
		setIsPlaying(false)
	}

	const { exercises, sets, reps, setTime, repTime } = formValues
	const totalSeconds = exercises * sets * (reps * repTime + setTime)
	const totalMinutes = (totalSeconds / 60 + 1).toFixed(0)

	return (
		<main className='content-container'>
			<h2>
				Hello, if you would like to hear chimes between sets and reps please edit your workout
				details below
			</h2>

			<form>
				{fields.map(({ id, label }) => (
					<div key={id}>
						<label htmlFor={id}>{label}: </label>
						<input
							type='number'
							id={id}
							value={formValues[id]}
							onChange={(e) => handleChange(id, Number(e.target.value))}
							disabled={isPlaying}
						/>
					</div>
				))}

				<p>
					Currently your audio track is {totalMinutes} minutes long. You are doing {sets} sets of{" "}
					{exercises} exercises with a {setTime}-second break in between. Each set contains {reps}{" "}
					reps with a {repTime}-second interval.
				</p>


				<audio ref={audioRef} controls onPlay={handleStart}/>
			</form>

			<Display status={status} />
		</main>
	)
}

export default Content
