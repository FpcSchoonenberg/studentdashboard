import React from "react";
import Help from "./Help";

const StudentProfile = (props) => {
  if (props.studentProfile.length > 0) {
    const {
      studentProfile: [
        { photo,
          first_name,
          last_name,
          year_of_birth,
          phone,
          email },
      ],
    } = props;
    return (
      <div className="studentprofile_container">
        <div className="personal_info">
          <h4>Personal information about the student</h4>
          <div className="studentinfo_photo">
            <ul>
              <li>
                firstname:
                {first_name}
              </li>
              <li>
                lastname:
                {last_name}
              </li>
              <li>
                year of birth:
                {year_of_birth}
              </li>
              <li>
                phone:
                {phone}
              </li>
              <li>email:{email}</li>
            </ul>
            <div className="studentprofile_image_container">
              <img
                src={photo}
                alt={first_name}
                className="studentprofile_image"
              />
            </div>
          </div>
        </div>
        <div className="info_additional">
          <h4>Additional information:</h4>
          The profile information is fictional and was created by a mock-data
          generator. Any resemblance to real persons or other real-life entities
          is purely coincidental.
        </div>
      </div>
    );
  } else {
    return <h4 className="noselectedstudent">No studentprofile has been selected</h4>;
  }
};

export default StudentProfile;
