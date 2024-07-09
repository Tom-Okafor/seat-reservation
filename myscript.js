(() => {
    function createAndAddSeats() {
        const LEFT_SECTION = document.getElementById("left");
        const MIDDLE_SECTION = document.getElementById("middle");
        const RIGHT_SECTION = document.getElementById("right");
        const ROWS = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "o",
            "q",
            "r",
            "s",
            "t"
        ];
        let currentRow = 0;
        let currentNumberOfSeats = 15;
        const COLUMN_ONE = 3;
        const COLUMN_TWO = 9;
        const COLUMN_THREE = 3;
        const TOTAL_NUMBER_OF_SEATS = 300;
        function handleSeatCreation() {
            currentRow++;
            labelRow(LEFT_SECTION);
            for (let t = 0; t < COLUMN_ONE; t++) {
                makeSeatsAndAttachThemInTheRightSection(LEFT_SECTION);
            }
            for (let t = 0; t < COLUMN_TWO; t++) {
                makeSeatsAndAttachThemInTheRightSection(MIDDLE_SECTION);
            }
            for (let t = 0; t < COLUMN_THREE; t++) {
                makeSeatsAndAttachThemInTheRightSection(RIGHT_SECTION);
            }
            labelRow(RIGHT_SECTION);
            if (currentNumberOfSeats < TOTAL_NUMBER_OF_SEATS) {
                handleSeatCreation();
            }
        }
        function labelRow(section) {
            const NEW_ROW = document.createElement("div");
            NEW_ROW.className = "label";
            NEW_ROW.innerText = ROWS[currentRow];
            section.appendChild(NEW_ROW);
        }

        function makeSeatsAndAttachThemInTheRightSection(section) {
            currentNumberOfSeats++;
            const NEW_SEAT = document.createElement("div");
            NEW_SEAT.id = `${ROWS[currentRow]}${currentNumberOfSeats}`;
            NEW_SEAT.innerText = currentNumberOfSeats;
            section.appendChild(NEW_SEAT);
        }

        handleSeatCreation();
    }
    createAndAddSeats();
})();
