document.getElementById('predictBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    const progressBar = document.getElementById('progressBar').querySelector('::after');
    const resultDiv = document.getElementById('predictionResult');

    if (fileInput.files.length === 0) {
        resultDiv.textContent = "Please select an image.";
        resultDiv.classList.add('error');
        return;
    }

    // Simulate the prediction process with a smooth progress bar
    progressBar.style.width = "0%";
    resultDiv.textContent = "";
    let progress = 0;

    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            clearInterval(interval);

            // Mock prediction result
            const isDiseaseDetected = Math.random() < 0.5;
            if (isDiseaseDetected) {
                resultDiv.textContent = "Disease Detected: Blight. Recommended treatment: Use fungicide.";
                resultDiv.classList.remove('error');
                resultDiv.classList.add('success');
            } else {
                resultDiv.textContent = "No disease detected. Your crops are healthy!";
                resultDiv.classList.remove('error');
                resultDiv.classList.add('success');
            }
        }
    }, 100);
});
