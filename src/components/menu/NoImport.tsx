import { useState } from "react"

const NoImport = () => (
	<div>
		<p> TypeScript error: Cannot find anme 'useState'</p>

		<p> Remember to import useState </p>

		<code> import {useState} from 'react' </code>
	</div>
)

export default NoImport