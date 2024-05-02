import React from 'react'
import TeacherAssistantFormParent from './TeacherAssistantForm/TeacherAssistantFormParent';
import ApplicantListParent from './ApplicantList/ApplicantListParent';
const TAapplication = () => {
    const handleSubmit = async (formData) => {
        try {
          // Log form data
          console.log("Form submitted:", formData);
      
          // Send form data to the server
          const response = await axios.post("http://localhost:3045/ta/create", formData);
          console.log("Server response:", response.data);
          
          // Handle any additional logic based on server response
        } catch (error) {
          console.error("Error submitting form:", error);
          // Handle error if needed
        }
      };
  return (
<>
    <TeacherAssistantFormParent onSubmit={handleSubmit} />
    <ApplicantListParent />
</>
    
    // <div>TAapplication</div>
  )
}

export default TAapplication