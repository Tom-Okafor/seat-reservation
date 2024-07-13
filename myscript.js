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

    const SELECTED_SEATS = [];
    const RESERVE_FORM = document.getElementById("resform");

    function highlightReservedSeats() {
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
        let currentNumberOfSeats = 0;
        const COLUMN_ONE = 3;
        const COLUMN_TWO = 9;
        const COLUMN_THREE = 3;
        const TOTAL_NUMBER_OF_SEATS = 300;
        function handleSeatCreation() {
            labelRow(LEFT_SECTION);
            makeSeatsAndAttachThemInTheRightSection(LEFT_SECTION, COLUMN_ONE);

            makeSeatsAndAttachThemInTheRightSection(MIDDLE_SECTION, COLUMN_TWO);

            makeSeatsAndAttachThemInTheRightSection(
                RIGHT_SECTION,
                COLUMN_THREE
            );

            labelRow(RIGHT_SECTION);
            if (currentNumberOfSeats < TOTAL_NUMBER_OF_SEATS) {
                currentRow++;

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

    function handleSeatSelection() {
        const ALL_SEATS = document.querySelectorAll(
            "section > div:not(.label)"
        );

        for (let eachSeat of ALL_SEATS) {
            eachSeat.addEventListener("click", function () {
                const CLICKED_SEAT = document.getElementById(this.id);
                if (CLICKED_SEAT.className == "a") {
                    SELECTED_SEATS.push(CLICKED_SEAT.id);
                    CLICKED_SEAT.className = "s";
                    manageConfirmForm();
                    console.log(SELECTED_SEATS.length);
                } else if (CLICKED_SEAT.className == "s") {
                    const ITEM_POSITION = SELECTED_SEATS.indexOf(
                        CLICKED_SEAT.id
                    );
                    SELECTED_SEATS.splice(ITEM_POSITION, 1);
                    CLICKED_SEAT.className = "a";
                    manageConfirmForm();
                }
            });
        }
    }

    function displayReservationForm() {
        const RESERVE_BUTTON = document.getElementById("reserve");
        RESERVE_BUTTON.addEventListener("click", evt => {
            evt.preventDefault();
            RESERVE_FORM.style.display = "block";
            cancelReservation();
            manageConfirmForm();
        });

        function cancelReservation() {
            const CANCEL_BUTTON = document.getElementById("cancel");
            CANCEL_BUTTON.addEventListener("click", evt => {
                evt.preventDefault();
                RESERVE_FORM.style.display = "none";
            });
        }
    }
    function manageConfirmForm() {
        if (SELECTED_SEATS.length < 1) {
            document.getElementById("confirmres").style.display = "none";
            document.getElementById("selectedseats").innerHTML =
                'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.';
            document.getElementById("error").addEventListener("click", evt => {
                evt.preventDefault();
                RESERVE_FORM.style.display = "none";
            });
        } else {
            document.getElementById("confirmres").style.display = "block";
            let pickedSeats = SELECTED_SEATS.toString();
            pickedSeats = pickedSeats.replace(/,/g, ", ");
            pickedSeats = pickedSeats.replace(/,(?=[^,]*$)/, " and");
            document.getElementById(
                "selectedseats"
            ).innerHTML = `You have selected <strong>${SELECTED_SEATS.length}</strong> seats. They are seats ${pickedSeats}`;
        }
    }

    createAndAddSeats();
    highlightReservedSeats();
    handleSeatSelection();
    displayReservationForm();
})();
