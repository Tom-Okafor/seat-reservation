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
            makeSeatsAndAttachThemInTheRightSection(LEFT_SECTION, COLUMN_ONE);

            makeSeatsAndAttachThemInTheRightSection(MIDDLE_SECTION, COLUMN_TWO);

                makeSeatsAndAttachThemInTheRightSection(RIGHT_SECTION, COLUMN_THREE);
            
            labelRow(RIGHT_SECTION);
            if (currentNumberOfSeats < TOTAL_NUMBER_OF_SEATS) {
                handleSeatCreation();
            }
        }
        function labelRow(section) {
            const NEW_ROW = `<div class="label">${ROWS[currentRow]}</div>`;
            section.insertAdjacentHTML("beforeEnd", NEW_ROW);
        }

        function makeSeatsAndAttachThemInTheRightSection(section, colummseats) {
            for (let t = 0; t < colummseats; t++) {
                currentNumberOfSeats++;
                const NEW_SEAT = `<div class="a" id=${ROWS[currentRow]}${currentNumberOfSeats}>${currentNumberOfSeats}</div>`;
                section.insertAdjacentHTML("beforeEnd", NEW_SEAT);
            }
        }

        handleSeatCreation();
    }
    createAndAddSeats();
})();
