import { useState } from "react"
import NoImport from './NoImport'
import CallFunctionInEvent from './CallFuntionInEvent'

const Menu = () => {
	// state
	const [selectedItem, setSelectedItem] = useState('')
	const NO_IMPORT = 'no import', CALL_FUNCTION = 'call function with () in event'

	let content = null 
	if ( selectedItem == NO_IMPORT ) {
		content = <NoImport />
	} else if( selectedItem == CALL_FUNCTION ) {
		content = <CallFunctionInEvent />
	}

	// Olika alternativ att sätta i onClick. 1: en vanlig funktion: 
	function chooseNoImport() {
		setSelectedItem(NO_IMPORT)
	}
	

	return (
		<div className="menu">
			<nav>
				<button onClick={() => setSelectedItem ('')}> Reset</button>
				<button onClick={chooseNoImport}> No Import </button>
				<button onClick={() => setSelectedItem (CALL_FUNCTION)}> Call function with () in event </button>

			</nav>
			<main>
				{content}
			</main>
		</div>
	)
}

export default Menu 