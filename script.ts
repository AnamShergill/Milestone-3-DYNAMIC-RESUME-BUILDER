// Listing our elements here

// List of element IDs to check
const ids = ['name', 'email', 'phone', 'cnic', 'address', 'nationality', 'education', 'experience', 'skills'];
const elements = ids.map(id => document.getElementById(id));

elements.forEach((element, index) => {
    if (!element) {
        console.error(`Element with ID '${ids[index]}' not found.`);
    }
});

const form = document.getElementById('resumeform') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumeOutput') as HTMLDivElement;

if (!form || !resumeDisplayElement) {
    console.error('Form or resume display element is missing.');
} else {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault(); // To prevent page reload

        // Getting input values 
        const fileInput = document.getElementById('profilePicture') as HTMLInputElement | null;
        let profilePictureURL: string = '';

        const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
        const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
        const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
        const cnic = (document.getElementById('cnic') as HTMLInputElement)?.value || '';
        const address = (document.getElementById('address') as HTMLInputElement)?.value || '';
        const nationality = (document.getElementById('nationality') as HTMLInputElement)?.value || '';
        const education = (document.getElementById('education') as HTMLInputElement)?.value || '';
        const experience = (document.getElementById('experience') as HTMLInputElement)?.value || '';
        const skills = (document.getElementById('skills') as HTMLInputElement)?.value || '';  // Fixed the ID to 'skills' from 'skill'

        // Handle profile picture
        if (fileInput && fileInput.files && fileInput.files.length > 0) {
            const profilePictureFile = fileInput.files[0]; // Get the first selected file
            // Create a URL for the selected file
            profilePictureURL = URL.createObjectURL(profilePictureFile);
        } else {
            profilePictureURL = ''; // No file selected
        }

        // Generate the image HTML if the profile picture exists
        const imageHTML = profilePictureURL 
            ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
            : '';

        // Create resume output
        const resumeHTML = `
            <h2>RESUME</h2>
            
            
            ${imageHTML} <!-- Inject profile picture here -->
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>Nationality:</strong> ${nationality}</p>
            
            <h3>Education:</h3>
            <p>${education}</p>

            <h3>Experience:</h3>
            <p>${experience}</p>
            
            <h3>Skills:</h3>
            <p>${skills}</p>
        `;

        // Generating Resume
        resumeDisplayElement.innerHTML = resumeHTML;
    });
}
