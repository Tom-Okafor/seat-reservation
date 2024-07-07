(() => {
    function createAndAddSeats() {
        const LEFT_SECTION = document.getElementById("left");
        const MIDDLE_SECTION = document.getElementById("middle");
        const RIGHT_SECTION = document.getElementById("right");
        const ROWS = [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T"
        ];
        let currentRow = 0;
        let currentNumberOfSeats = 15;
        function handleSeatCreation() {
            currentRow++;
            const NEW_ROW = document.createElement("div");
            NEW_ROW.className = "label";
            NEW_ROW.innerText = ROWS[currentRow];
            LEFT_SECTION.appendChild(NEW_ROW);
        }
        handleSeatCreation()
    }
    createAndAddSeats();
})();
