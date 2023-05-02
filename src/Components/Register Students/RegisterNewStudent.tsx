import { Link } from 'react-router-dom'

const RegisterNewStudent = () => {
	return (
		<div>
			<h1>Register New Students</h1>
			<Link to='/lecturerboard'>
				<button>Home</button>
			</Link>
		</div>
	);
};

export default RegisterNewStudent;
