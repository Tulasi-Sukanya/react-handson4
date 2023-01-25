import React from 'react'
import {Link} from "react-router-dom"
import "./AddNewStudent.css"
// import { StudentContext } from './Context'

const AddNewStudent = () => {
  return (
    <div className='addnewstudentform'>
        <form>
            <h2>Add New Student</h2>
            <div className="input-container ic1">
                <input name="name" type="text" className="input" placeholder=" " />
                <div className="cut"></div>
                <label htmlFor='name'className="placeholder">Name</label>
            </div>
            <div className="input-container ic2">
                <input name='age'className="input" type="number" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="lastname" className="placeholder">Age</label>
            </div>
            <div className="input-container ic3">
                <input name="course"  className="input" type="text" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="course" className="placeholder">Course</label>
            </div>
            <div className="input-container ic4">
                <input name="batch" className="input" type="text" placeholder=" "/>
                <div className="cut"></div>
                <label htmlFor="batch" className="placeholder">Batch</label>
            </div>
            <Link to="/student"><button className="submit-btn" type='submit'>submit</button></Link>
            <Link to="/student"><button  className="cancel-btn" type='cancel'>Cancel</button></Link>
        </form>
    </div>
  )
}

export default AddNewStudent

// const context=useContext(StudentContext)
// console.log(context);
// const location=useLocation();
// console.log(location);
// const navigate=useNavigate();
// const index=(location.state.newstudent);
// const newObj={
//     name:context.entries[index-1].name,
//     age:context.entries[index-1].age,
//     course:context.entries[index-1].course,
//     batch:context.entries[index-1].batch,
// }
// var list=[
//     {id:1,name:'Sukanya',age:26,course:"MERN",batch:"september"},
//     {id:2,name:'Sumanya',age:28,course:"MERN",batch:"october"},
//     {id:3,name:'Suganya',age:27,course:"MERN",batch:"November"},
//     {id:4,name:'Suvarna',age:25,course:"MERN",batch:"December"},
// ];
// const [input,setInput]=useState("");

// let navigate=useNavigate();
// const addHandler=(e)=>{
//     newObj[e.target.name] = e.target.value;
//     // setInput({...input,[e.target.name] : e.target.value})
// }
// const submitHandler=(e)=>{
//     e.preventDefault()
//     const stuObj={
//         id:input.id,
//         name:input.name,
//         age:input.age,
//         course:input.course,
//         batch:input.batch,
//     }
//     list.push(stuObj)
//     // navigate('/')
// }
// const submitHandler = (event) =>{
//     console.log(context.entries[index-1])
//     context.updateFunction(
//      (prevObj)=>{
//          prevObj[index-1] = newObj;
//          return (prevObj)
//      }
//     );
//     navigate('/');
//  }