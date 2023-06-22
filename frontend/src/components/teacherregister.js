import React, { useState } from "react";

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [otherNames, setOtherNames] = useState("");
    const [teacherNumber, setTeacherNumber] = useState("");
    const [specialitySubjects, setSpecialitySubjects] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [teachingExpertise, setTeachingExpertise] = useState("");
    const [school, setSchool] = useState("");
    const [location, setLocation] = useState("");
    const [yearOfIncorporation, setYearOfIncorporation] = useState("");
    const [schoolNumber, setSchoolNumber] = useState("");
    const [curriculum, setCurriculum] = useState("");
    const [teachingAvailability, setTeachingAvailability] = useState("");
}

const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // Validate and process the form data
};

return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="first-name">First Name</label>
            <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="last-name">Last Name</label>
            <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="other-names">Other Names</label>
            <input
                type="text"
                id="other-names"
                value={otherNames}
                onChange={(e) => setOtherNames(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="teacher-number">Teacher Number</label>
            <input
                type="text"
                id="teacher-number"
                value={teacherNumber}
                onChange={(e) => setTeacherNumber(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="speciality-subjects">Speciality Subjects</label>
            <select
                id="speciality-subjects"
                value={specialitySubjects}
                onChange={(e) => setSpecialitySubjects(e.target.value)}
                required
            >
                <option value="">Select a subject</option>
                {/* Add more options for subjects */}
            </select>
        </div>

        <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
                type="text"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />
        </div>

        <div>
            <label htmlFor="email">Email Address</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>

        <select
            id="teaching-expertise"
            value={teachingExpertise}
            onChange={(e) => setTeachingExpertise(e.target.value)}
            required
        >
            <option value="">Select expertise</option>
            <option value="Junior">Junior</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
        </select>
        </form>
        );







