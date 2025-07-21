import { useState } from "react"
import Display from "./display"
import Instructions from "./instructions"
import UserInput from "./user-input"


function Content() {


const [isPlaying,setIsPlaying] = useState(false)
const [exercises,setExercises] = useState(0)
const [sets,setSets] = useState(0)
const [reps,setReps] = useState(0)
const [repTime,setRepTime] = useState(0)
const [setTime,setSetTime] = useState(0)


	return (
		<div className='content-container'>
			<Instructions exercises={exercises} sets={sets} reps={reps} setTime={setTime} repTime={repTime}/>
			<UserInput exercises={exercises} sets={sets} reps={reps} setTime={setTime} repTime={repTime}/>
			<Display />
		</div>
	)
}

export default Content
