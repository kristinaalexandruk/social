import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
	{ id: 1, message: "Hello guys!", likesCount: 20 },
	{ id: 2, message: "How are you?", likesCount: 50 },
];

let dialogs = [
	{ id: 1, name: "Kris" },
	{ id: 2, name: "Alex" },
	{ id: 3, name: "Dimych" },
	{ id: 4, name: "Misha" },
	{ id: 5, name: "Makkey" },
];

let messages = [
	{ id: 1, text: "Hello guys!" },
	{ id: 2, text: "How are yuor it-kamasutra!" },
	{ id: 3, text: "Yo!" },
	{ id: 4, text: "Yo!" },
];

ReactDOM.render(
	<React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages} />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
