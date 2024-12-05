function tryLogin() {
        const keypass = document.getElementById("key").value;
        
        fetch("/php/attemptAdminLogin.php", {
                method: "POST",
                body: new URLSearchParams({key: keypass}) 
        })
        .then(response => response.text())
        .then(response => {
                window.location.replace(response);      
        });
        
}