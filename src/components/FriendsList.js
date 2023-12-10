import React from "react";
import Friend from "./Friend";

export default function FriendsList({ friends, selectedFriend, onSelection }) {
	return (
		<ul>
			{friends.map((friend) => (
				<Friend
					onSelection={onSelection}
					selectedFriend={selectedFriend}
					friend={friend}
					key={friend.id}
				/>
			))}
		</ul>
	);
}
