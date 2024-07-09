import {CurrentUser} from './CurrentUser';
import {UserType, UsersObjectType} from './HW2';

type UserList2PropsType = {
	users: UserType[],
	filterUsers:()=>void
};

export const UserList2 = ({users, filterUsers}: UserList2PropsType) => {
	const handleFilterUsers = () => {
		filterUsers();
	  };

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={() => {handleFilterUsers()}}>SHOW ME FRIENDS FROM LA</button>

			<ul>
			 {users.map((user) => (
			   <CurrentUser key={user.id} user={user} />
			 ))}
			</ul>
		</div>
	);
};
