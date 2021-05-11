const badCode = "<button onClick={chooseNoImport()}> No import </button>"
const goodCode = "<button onClick={chooseNoImport}> No import </button>"

const CallFunctionInEvent = () => (
	<div>
		<p> Type 'void' is not assigable to type...</p>
		<p>Avoid paranthese when declaring event listeners. </p>
		<p> Bad: <code> {badCode} </code> </p>
		<p> Good: <code> {goodCode} </code> </p>
	</div>
)

export default CallFunctionInEvent