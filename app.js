function openPopup() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closePopup() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();

    if (validateForm()) {
        const postInput = document.getElementById('postInput').value;
        console.log('Posting content:', postInput);

        document.getElementById('postInput').value = '';
    }
}

function validateForm() {
    const postInput = document.getElementById('postInput');
    const postValue = postInput.value.trim();

    if (postValue === '') {
        postInput.style.borderColor = '#dc3545';
        showErrorMessage(postInput);
        return false;
    } else {
        postInput.style.borderColor = '';
        hideErrorMessage(postInput);
        return true;
    }
}

function showErrorMessage(inputElement) {
    const errorMessage = inputElement.nextElementSibling;
    errorMessage.style.display = 'block';
}

function hideErrorMessage(inputElement) {
    const errorMessage = inputElement.nextElementSibling;
    errorMessage.style.display = 'none';
}

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postInput = document.getElementById('postInput');
    const postContent = postInput.value.trim();

    if (postContent !== '') {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.textContent = postContent;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            postElement.remove();
        });

        postElement.appendChild(deleteButton);

        document.getElementById('postBox').appendChild(postElement);

        postInput.value = '';
    }
});

const postContainer = document.querySelector('.post-container');
postContainer.style.padding = '20px';
postContainer.style.backgroundColor = '#f8f9fa';

const modalContent = document.querySelector('.modal-content');
modalContent.style.backgroundColor = 'white';
modalContent.style.padding = '20px';
