import Button from "./button"
import Instructions from "./instructions"
import UserInput from "./user-input"

function Content() {
	return (
		<div className='content-container'>
			<Instructions />
			<UserInput />
			<Button />
		</div>
	)
}

export default Content
