document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create an object to store job data
        const jobData = {
            jobImage: form['job-image'].files[0],
            jobTitle: form['job-title'].value,
            companyName: form['company-name'].value,
            location: form['location'].value,
            employmentStatus: form['employment-status'].value,
            salary: form['salary'].value,
            vacancy: form['vacancy'].value,
            hours: form['hours'].value,
            jobDescription: form['job-description'].value,
            workplace: form['workplace'].value,
            educationalRequirements: form['educational-requirements'].value,
            experienceRequirements: form['experience-requirements'].value,
        };

        // Convert the job image to a Base64 string if needed
        const reader = new FileReader();
        reader.onload = function () {
            jobData.jobImage = reader.result; // Convert image file to Base64 string
            // Store job data in localStorage
            localStorage.setItem('jobData', JSON.stringify(jobData));
            alert('Job posted successfully!');
            form.reset(); // Reset the form
        };

        if (jobData.jobImage) {
            reader.readAsDataURL(jobData.jobImage); // Read the image file
        } else {
            localStorage.setItem('jobData', JSON.stringify(jobData));
            alert('Job posted successfully!');
            form.reset(); // Reset the form
        }
    });
});
