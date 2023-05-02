// import { useState } from 'react'
import AdminLogin from './Components/Login/AdminLogin'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import RegisterNewLecturer from './Components/Register Lecturers/RegisterNewLecturer';
import Department from './Components/Department/Department'
import Lecturerdashboard from './Components/LecturerDashboard/LecturerDashboard'
import StudentDashboard from './Components/Student Dashboard/StudentDashboard'
import RegisterNewStudent from './Components/Register Students/RegisterNewStudent';
import StudentFileUpload from './Components/Student File Upload/StudentFileUpload'


import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<AdminLogin />}
					/>
					<Route
						path='/adminboard'
						element={<AdminDashboard />}
					/>
					<Route
						path='/newlecturer'
						element={<RegisterNewLecturer />}
					/>
					<Route
						path='/department'
						element={<Department />}
					/>
					<Route
						path='/lecturerboard'
						element={<Lecturerdashboard />}
					/>
					<Route
						path='/register_students'
						element={<RegisterNewStudent />}
					/>
					<Route
						path='/studentboard'
						element={<StudentDashboard />}
					/>
					<Route
						path='/studentupload'
						element={<StudentFileUpload />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App
