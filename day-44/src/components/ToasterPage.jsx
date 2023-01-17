import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'


export default function ToasterPage() {

    const notify = () => toast("Amjilttai hadgallaa.!");


    return(
        <div>
            <button onClick={notify}>Hadgalah</button>
            <ToastContainer/>
            <Link to="/">back</Link>
        </div>
    )
}


