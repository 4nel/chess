
fetch("/php/sessionState.php", {});

fetch("/php/adminStatus.php", {
        method: "POST",
        body: new URLSearchParams()
})
.then(response => response.text())
.then(response => {
        if(response.trim() == "offline") {
                window.location.replace("/admin.html");
        }else {
                window.location.replace("/user.html");
        }
});
