function searchJob() {
    var input = document.getElementById("jobSearch").value.toLowerCase();
    var sections = document.querySelectorAll("section[id^='job']");
    for (var i = 0; i < sections.length; i++) {
        var jobTitle = sections[i].querySelector("h2").textContent.toLowerCase();
        if (jobTitle.includes(input)) {
            // Scroll to the section
            sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
            break;
        }
    }
}

