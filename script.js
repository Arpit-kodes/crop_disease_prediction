document.getElementById('cropForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cropType = document.getElementById('cropType').value.toLowerCase();
    const location = document.getElementById('location').value.toLowerCase();
    const temperature = parseFloat(document.getElementById('temperature').value);
    const humidity = parseFloat(document.getElementById('humidity').value);
    const rainfall = parseFloat(document.getElementById('rainfall').value);

    let predictionResult = "";
    let recommendation = "";

    // Mock Prediction Logic
    if (cropType === "tomato" && temperature >= 28 && humidity >= 80 && rainfall >= 150) {
        predictionResult = "Blight Disease";
        recommendation = "Apply fungicide immediately and ensure proper drainage to avoid waterlogging.";
    } else if (cropType === "wheat" && temperature <= 25 && humidity >= 60 && rainfall <= 100) {
        predictionResult = "Rust Disease";
        recommendation = "Use resistant wheat varieties and consider spraying with a fungicide.";
    } else if (cropType === "potato" && temperature <= 20 && humidity >= 85 && rainfall >= 100) {
        predictionResult = "Late Blight";
        recommendation = "Remove and destroy infected plants. Use copper-based fungicides.";
    } else if (cropType === "corn" && temperature >= 25 && humidity >= 65 && rainfall >= 100) {
        predictionResult = "Gray Leaf Spot";
        recommendation = "Rotate crops and avoid planting corn on corn. Use foliar fungicides if needed.";
    } else if (cropType === "rice" && temperature >= 30 && humidity >= 75 && rainfall >= 200) {
        predictionResult = "Blast Disease";
        recommendation = "Ensure proper spacing to avoid dense planting, and apply recommended fungicides.";
    } else {
        predictionResult = "No disease detected. Continue monitoring the crop.";
        recommendation = "Ensure regular watering and nutrient supply.";
    }

    const predictionText = document.getElementById('predictionText');
    predictionText.innerHTML = `<strong>${predictionResult}</strong><br>${recommendation}`;

    // Display the result
    document.getElementById('result').style.display = 'block';
});
