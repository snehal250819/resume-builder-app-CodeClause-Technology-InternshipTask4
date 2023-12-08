function generateResume() {
    const form = document.getElementById('resumeForm');
    const outputFullName = document.getElementById('outputFullName');
    const outputEmail = document.getElementById('outputEmail');
    const outputPhone = document.getElementById('outputPhone');
    const outputEducation = document.getElementById('outputEducation');
    const outputExperience = document.getElementById('outputExperience');
    const outputSkills = document.getElementById('outputSkills');
    const resumeOutput = document.getElementById('resumeOutput');

    outputFullName.textContent = `Full Name: ${form.fullName.value}`;
    outputEmail.textContent = `Email: ${form.email.value}`;
    outputPhone.textContent = `Phone: ${form.phone.value}`;
    outputEducation.textContent = `Education: ${form.education.value}`;
    outputExperience.textContent = `Work Experience: ${form.experience.value}`;
    outputSkills.textContent = `Skills: ${form.skills.value}`;

    // Show the generated resume
    resumeOutput.classList.remove('hidden');
}
