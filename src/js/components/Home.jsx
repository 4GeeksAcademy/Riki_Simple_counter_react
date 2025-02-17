import React from "react";

export default function Counter(props) {

	return (
		<h1 id="counter"> Los segundos son: {props.time.toString()}</h1>
	);
}
