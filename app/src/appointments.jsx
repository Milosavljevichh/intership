import {useNavigate} from 'react-router-dom'

const Appointment = () => {
    let navigate = useNavigate()

    return (
        <div className = "client">
            <h1>Add new a <i>appointment!</i></h1>
            <br></br>
            <button onClick={() => {navigate("/")}}>Go back</button>
        </div>
      );
}
 
export default Appointment;