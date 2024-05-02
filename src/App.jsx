//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Home";
import Signup from "./componets/Signup";
import Navbar2 from "./componets/Navbar2";
import Login from "./componets/Login";
import AddStudent from "./componets/AddStudent";
import "./App.css";
import Dashboard from "./componets/Dashboard";
import FacultyLogin from "./componets/FacultyLogin";
import FacultySignup from "./componets/FacultySignup";
import TAsignup from "./componets/TAsignup";
import TAlogin from "./componets/TAlogin";
import StudentList from "./componets/StudentList";
import { useState } from "react";
import axios from "axios";
import TAForm from "./componets/TAForm";
import ApplicantList from "./componets/ApplicantList";
import HomePage from "./pages/HomePage";
import MarksUploadForm from "./componets/MarksUploadForm";
import MarksList from "./componets/MarksList";
import FacultyPage from "./pages/FacultyPage";
import TAPAGE from "./pages/TAPAGE";
import "./index.css";
import FacultyNavbar from "./componets/FacultyNavbar";
import TANavbar from "./componets/TANavbar";
import ShowStudentsPage from "./pages/ShowStudentsPage";
// // import NavbarMaterial from "./componets/NavbarMaterial";
// import RecipeReviewCard from "./componets/RecipeReviewCard";
// import FixedBottomNavigation from "./componets/MaterialUI/FixedBottomNavigation";
// import SignIn from "./componets/MaterialUI/SignIn";
// // import Card from "./componets/Card";
// // import MaterialComponent from "./componets/MaterialComponent";

// // import MarksUpload from "./componets/MarksUpload";
// import TeacherAssistantForm from "./componets/TeacherAssistantForm";
// import TAapplication from "./componets/TAapplication";
// import TA_SignUp from "./componets/TA_Signup";
// import TA_Login from "./componets/TA_Login";
// import TASignUp from "./componets/TA_Signup";
// // import TASignUp from "./componets/TA_Signup";

function App() {
  const [applicants, setApplicants] = useState([]);

  const handleFormSubmit = (formData) => {
    setApplicants([...applicants, formData]);
  };

  const handleApprove = async (index) => {
    try {
      const approvedTA = applicants[index];
      await axios.post("http://localhost:3045/ta/create", approvedTA);
      const updatedApplicants = [...applicants];
      updatedApplicants.splice(index, 1);
      setApplicants(updatedApplicants);
    } catch (error) {
      console.error("Error approving applicant:", error);
     
    }
  };

  const handleDecline = (index) => {
    const updatedApplicants = [...applicants];
    updatedApplicants.splice(index, 1);
    setApplicants(updatedApplicants);
  };

  const [marksData, setMarksData] = useState([]);

  const handleUpload = (formData) => {
    setMarksData([...marksData, formData]);
  };

  const handleApproveMarks = async (index) => {
    try {
      const approvedMarks = marksData[index];
      await axios.post("http://localhost:3045/marks/upload", approvedMarks);
      const updatedMarks = [...marksData];
      updatedMarks.splice(index, 1);
      setMarksData(updatedMarks);
    } catch (error) {
      console.error("Error approving applicant:", error);
      // Handle error if needed
    }
  };

  const handleDeclineMarks = (index) => {
    const updatedMarksData = [...marksData];
    updatedMarksData.splice(index, 1);
    setMarksData(updatedMarksData);
  };

  return (
    <>
    
      <BrowserRouter>




        <Routes className="routes">
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          ></Route>

          {/* <Route path="/" element={<Home />}></Route> */}

          {/* <Route path="/" element={<HomePage />}></Route> */}

          <Route path="/faculty" element={<FacultyPage />}></Route>
          <Route path="/ta" element={<TAPAGE />}></Route>

          <Route path="/facultysignup" element={<FacultySignup />}></Route>
          <Route path="/facultylogin" element={<FacultyLogin />}></Route>

          <Route path="/tasign" element={<TAsignup />}></Route>
          <Route path="/talogin" element={<TAlogin />}></Route>

          <Route path="/studentlist" element={<ShowStudentsPage/>}></Route>

            
          <Route path="/students" element={<>
          <FacultyNavbar/>
          <StudentList/>
          </>}></Route>


          <Route path="/addstudent" element={
          <>
          <FacultyNavbar/>
          <AddStudent />
          </>
          
          }></Route>

          <Route
            path="/taform"
            element={<TAForm onFormSubmit={handleFormSubmit} />}
          ></Route>

          <Route
            path="/applicants"
            element={
              <>
              <FacultyNavbar/>
              <ApplicantList
                applicants={applicants}
                onApprove={handleApprove}
                onDecline={handleDecline}
                />
                </>
            }
          ></Route>

          <Route
            path="/marksupload"
            element={
              <>
                <TANavbar />
                <MarksUploadForm onUpload={handleUpload} />
              </>
            }
          ></Route>

          <Route
            path="/applyta"
            element={
              <>
                <TANavbar />
                element={<TAForm onFormSubmit={handleFormSubmit} />}
              </>
            }
          ></Route>




          <Route
            path="/markslist"
            element={
              <>
              <FacultyNavbar/>
              <MarksList
                marksData={marksData}
                onApprove={handleApproveMarks}
                onDecline={handleDeclineMarks}
                />
                </>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          <Route path="/signup" element={<Signup />}></Route>



          <Route path="/tapage" element={<TANavbar/>}></Route>
          <Route path="/facultypage" element={<FacultyNavbar/>}></Route>


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
