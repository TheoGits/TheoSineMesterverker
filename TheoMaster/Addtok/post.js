function previewImage() {
    var preview = document.getElementById('image-preview');
    var file = document.getElementById('image-upload').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}

function postContent() {
    var postContent = document.querySelector('.post-input').value;
    var imageFile = document.getElementById('image-upload').files[0];
    var formData = new FormData();
    formData.append('postContent', postContent);
    formData.append('imageFile', imageFile);
}
