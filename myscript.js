(() => {
    let reservedSeats = {
        record1: {
            seat: "b19",
            owner: {
                fname: "Joe",
                lname: "Smith"
            }
        },
        record2: {
            seat: "b20",
            owner: {
                fname: "Joe",
                lname: "Smith"
            }
        },
        record3: {
            seat: "b21",
            owner: {
                fname: "Joe",
                lname: "Smith"
            }
        },
        record4: {
            seat: "b22",
            owner: {
                fname: "Joe",
                lname: "Smith"
            }
        }
    };

    function highlightReservedSeats() {
        /*   const RESERVED_SEATS = [];
        RESERVED_SEATS.push(reservedSeats.record1.seat);
        RESERVED_SEATS.push(reservedSeats.record2.seat);
        RESERVED_SEATS.push(reservedSeats.record3.seat);
        RESERVED_SEATS.push(reservedSeats.record4.seat);

        RESERVED_SEATS.forEach(eachSeat => {
            console.log(eachSeat);
            const SEAT = document.getElementById(`${eachSeat}`);
            SEAT.className = "r";
            SEAT.innerText = "R";
        }); */
                    for (let key in reservedSeats) {

        if (reservedSeats.hasOwnProperty(key)) {
                const EACH_SEAT = reservedSeats[key];
                const SEAT_ID = EACH_SEAT.seat;
                document.getElementById(SEAT_ID).className = "r";
                document.getElementById(SEAT_ID).innerText = "R";
            }
        }
    }

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

            makeSeatsAndAttachThemInTheRightSection(
                RIGHT_SECTION,
                COLUMN_THREE
            );

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
    highlightReservedSeats();
})();
