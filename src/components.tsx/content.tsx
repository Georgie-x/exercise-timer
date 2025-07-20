import Button from "./button"
import Display from "./display"
import Instructions from "./instructions"
import UserInput from "./user-input"

function Content() {
	return (
		<div className='content-container'>
			<Instructions />
			<UserInput />
			<Button />
			<Display />
		</div>
	)
}

export default Content
