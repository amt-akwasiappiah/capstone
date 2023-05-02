// import { useState } from 'react'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import AddNewLecturers from './Components/AddLecturers/AddNewLecturers'
import Department from './Components/Department/Department'
import Lecturerdashboard from './Components/LecturerDashboard/LecturerDashboard'
import StudentDashboard from './Components/Student Dashboard/StudentDashboard'


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
						path='/lecturerboard'
						element={<Lecturerdashboard />}
          />
					<Route
						path='/studentboard'
						element={<StudentDashboard />}
          />
					<Route
						path='/newlecturer'
						element={<AddNewLecturers />}
					/>
					<Route
						path='/department'
						element={<Department />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App
