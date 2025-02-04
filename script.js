function convertToSnakeCase() {
    let input = document.getElementById("snakeInput").value;
    let result = input.toLowerCase().replace(/\s+|\.|\t/g, "_");
    document.getElementById("snakeResult").innerText = result;
}

function generateVideo() {
    let url = document.getElementById("videoURL").value;
    let width = document.getElementById("videoWidth").value;
    let controls = document.getElementById("videoControls").checked;
    let videoContainer = document.getElementById("videoContainer");
    
    let video = document.createElement("video");
    video.src = url;
    video.width = width;
    if (controls) video.controls = true;
    
    videoContainer.innerHTML = "";
    videoContainer.appendChild(video);
}

function parseDate() {
    let dateInput = document.getElementById("dateInput").value;
    let datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (datePattern.test(dateInput)) {
        let date = new Date(dateInput);
        let formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        document.getElementById("dateResult").innerText = formattedDate;
    } else {
        document.getElementById("dateResult").innerText = "Invalid date format. Please use YYYY-MM-DD.";
    }
}

function convertDate() {
    let datePicker = document.getElementById("datePicker").value;
    document.getElementById("convertedDate").innerText = datePicker;
}

function parseCoordinates() {
    let input = document.getElementById("geoInput").value.trim();
    let match = input.match(/-?\d+\.\d+,-?\d+\.\d+/);
    let matchBracket = input.match(/\[\s*(-?\d+\.\d+)\s*,\s*(-?\d+\.\d+)\s*\]/);
    
    if (match) {
        let lat = parseFloat(match[1]);
        let lng = parseFloat(match[2]);
        document.getElementById("geoResult").innerText = `(${lat}, ${lng})`;
    } else if (matchBracket) {
        let lat = parseFloat(matchBracket[2]);
        let lng = parseFloat(matchBracket[1]);
        document.getElementById("geoResult").innerText = `(${lat}, ${lng})`;
    } else {
        document.getElementById("geoResult").innerText = "Invalid coordinates. Please enter in the format: 42.9755,-77.4369 or [-77.4369, 42.9755]";
    }
}



function formatCoordinates() {
    let input = document.getElementById("multiGeoInput").value;
    let matches = input.match(/-?\d+\.\d+,-?\d+\.\d+/g);
    if (matches) {
        let formatted = matches.map(coord => {
            let parts = coord.split(",").map(num => parseFloat(num.trim()));
            return `(${parts[0]}, ${parts[1]})`;
        }).join(", ");
        document.getElementById("multiGeoResult").innerText = `(${formatted})`;
    } else {
        document.getElementById("multiGeoResult").innerText = "Invalid coordinates.";
    }
}

function determineMimeType() {
    let input = document.getElementById("mimeInput").value;
    let extension = input.split(".").pop().toLowerCase();
    let mimeTypes = {
        jpg: "image/jpeg",
        png: "image/png",
        pdf: "application/pdf",
        txt: "text/plain"
    };
    document.getElementById("mimeResult").innerText = mimeTypes[extension] || "Unknown MIME type";
}

function generateLicenseLink() {
    let input = document.getElementById("licenseInput").value;
    let link = `https://creativecommons.org/licenses/${input}/4.0/`;
    document.getElementById("licenseResult").innerHTML = `<a href="${link}" target="_blank">${link}</a>`;
}

function convertBoolean() {
    let input = document.getElementById("booleanInput").value.toLowerCase();
    let result = ["yes", "1", "true"].includes(input) ? true : false;
    document.getElementById("booleanResult").innerText = result;
}

function buildURL() {
    let query = document.getElementById("query").value;
    let sort = document.getElementById("sort").value;
    let results = document.getElementById("results").value;
    let license = document.getElementById("license").value;
    let url = `https://api.example.com/search?q=${query}&sort=${sort}&results=${results}&license=${license}`;
    document.getElementById("urlResult").innerText = url;
}
