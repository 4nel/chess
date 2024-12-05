export function refresh() {
    fetch("/php/refresh.php", {}).then(response => {});
}