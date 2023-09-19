import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
	console.log(contacts.map((x) => x));

	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			<img
				className="circle-img"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/553e9750160831.58c8ff8bc2909.png"
				alt="avatar_img"
			/>

			{contacts.map((x) => (
				<Card
					key={x.name + x.name.indexOf().toString()}
					name={x.name}
					imgURL={x.imgURL}
					phone={x.phone}
					email={x.email}
				/>
			))}
		</div>
	);
}

export default App;
