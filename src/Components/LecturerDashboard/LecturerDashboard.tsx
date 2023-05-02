import {Link} from 'react-router-dom'
const Lecturerdashboard = () => {
  return (
    <div>
          <h1>Lecturer Dashboard</h1>
          <button>Add Student</button>
          <Link to='/'><button>Home</button></Link>
    </div>
  )
}

export default Lecturerdashboard
