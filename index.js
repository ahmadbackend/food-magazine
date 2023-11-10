/**navigation area script over all pages */
/**declare variables as var instead of const or let so they can be applied in all pages */
/**my own code after learning the trick from several websites */
var toggleButton = document.querySelector('.menu-toggle');
var menu = document.querySelector('.menu');

toggleButton.addEventListener('click', () => {
menu.classList.toggle("active")
});

window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggleButton.contains(e.target)) {
        menu.classList.remove('active');
    }
});
window.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});
////////////////////////////////////////////////////////////////////////
/*******************publish page script *******************************/
/**my own work to append child after learning the concept from w3school */
var ingr= document.getElementById("ingr");
var text= document.getElementById("text");
/* to avoid enlarged list of igredients*/
text.style.maxHeight="30vh";
text.style.overflow="scroll";

function addTextInput() {
const newInput = document.createElement('input');
newInput.type ='text';
text.classList.remove("publish-inv");
newInput.placeholder="ingredient and amount";
newInput.style.display="block";
newInput.style.margin="1rem auto";
newInput.style.width="70%";
newInput.style.textAlign="center";
text.appendChild(newInput);
}

// Add a click event listener to the button
ingr.addEventListener('click', addTextInput);
/**this code i took from stackoverflow for image but edited it to fit with my needs */
// i added file size procedure
// validating the uploaded file 
document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file');
    const uploadButton = document.getElementById('uploadButton');
    const validationMessage = document.getElementById('validationMessage');

    uploadButton.addEventListener('click', function () {
        const selectedFile = fileInput.files[0];

        if (!selectedFile) {
            validationMessage.textContent = 'Please select a file.';
            return;
        }

        // Check file type
        if (!isValidFileType(selectedFile)) {
            validationMessage.textContent = 'Invalid file type. Please upload a zip or rar file.';
            return;
        }

        // Check file size
        const maxSizeInBytes = 50 * 1024 * 1024; // 5 MB
        if (selectedFile.size > maxSizeInBytes) {
            validationMessage.textContent = 'File size exceeds the maximum allowed limit (5 MB).';
            return;
        }

        // If file passes validation, you can upload/process it here
        validationMessage.textContent = 'File is valid and can be uploaded.';
    });
    function isValidFileType(file) {
        const allowedExtensions = /(\.rar|\.zip)$/i;
        return allowedExtensions.test(file.name);
    }
});