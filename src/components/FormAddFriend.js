import React, { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48");

	function handleSubmit(e) {
		e.preventDefault();

		if (!name || !image) return;

		const id = crypto.randomUUID();

		const newFriend = {
			name,
			image: `${image}?u=${id}`,
			balance: 0,
			id,
		};

		console.log(newFriend);

		onAddFriend(newFriend);

		setName("");
		setImage("https://i.pravatar.cc/48?u=");
	}

	return (
		<form onSubmit={handleSubmit} className="form-add-friend">
			<label>👫 Friend name</label>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
			/>

			<label>🏞️ Image URL</label>
			<input
				value={image}
				onChange={(e) => setImage(e.target.value)}
				type="text"
			/>

			<Button>Add</Button>
		</form>
	);
}
