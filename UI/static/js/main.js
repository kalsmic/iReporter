function deleteIncident(incidentType, delStatus) {

    if (delStatus == 1) {
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
    } else {
        alert("You cannot delete this record");
    }
}