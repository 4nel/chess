
function ValidateMove(m) {
    return fetch("/php/processMove.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(m)
    })
    .then(response => response.text())
    .then(response => {
        return response.trim();
    })
    .catch((error) => {
        console.error("Mishap:", error);
        return "no";
    });
}

export function startListening() {

    const allSquares = document.querySelectorAll("#gameboard .square");

    allSquares.forEach(square => {
        square.addEventListener("click", clickEvent);
        square.addEventListener("dragstart", dragStart);
        square.addEventListener("dragover", dragOver);
        square.addEventListener("drop", dragDrop);
    })

    let startSquare=-1;
    let draggedElement=-1;

    function clickEvent(e) {

        if(startSquare == -1) {
            startSquare = e.target.parentNode.getAttribute("square-id");
        } else {
            endSquare = e.target.parentNode.getAttribute("square-id");
        }
        
    }

    function dragStart(e) {
        startSquare = e.target.parentNode.getAttribute("square-id");
        draggedElement = e.target;
    }

    function dragOver(e) {
        e.preventDefault();   
    }

    function dragDrop(e) {
        e.stopPropagation();
        
        let pieceType = draggedElement.getAttribute("id");
        let endingSquare = e.target;
        let pieceColor = draggedElement.classList.contains("white") ? "white" : "black";
        
        while(!endingSquare.getAttribute("square-id")) {
            endingSquare = endingSquare.parentNode;
        }

        let endSquare=endingSquare.getAttribute("square-id");

        const move = {

            piece: pieceType,
            color: pieceColor,
            start: startSquare,
            end: endSquare

        };

        ValidateMove(move).then (result => {

            if(result == "yes") {

                endingSquare.firstChild?.remove();
                endingSquare.append(draggedElement);

                startSquare=-1;
                endSquare=-1;

            }
            else console.log(result);

        })

    } 

}