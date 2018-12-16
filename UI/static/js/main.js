function deleteIncident(incidentType) {
    if (confirm("Are you sure you want to delete this record!")) {
        switch (incidentType) {
            case "red-flag":
                window.location.href = "https://kalsmic.github.io/iReporter/UI/user/view_red-flags.html";
                break;
            case "intervention":
                window.location.href = "https://kalsmic.github.io/iReporter/UI/user/view_interventions.html";
                break;
            default:
                console.log("Invalid request");
        }

    }
}
