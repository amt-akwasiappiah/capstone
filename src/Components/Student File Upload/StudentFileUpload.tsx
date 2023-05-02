import {Link} from 'react-router-dom'

const StudentFileUpload = () => {
  return (
      <div>
          <h1>Submit File for Verification</h1>
          <button>Submit</button>
          <Link to='/studentboard' ><button>Home</button></Link>   
    </div>
  )
}

export default StudentFileUpload
