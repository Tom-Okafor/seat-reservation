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

    let selected_seats = [];
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
                    selected_seats.push(CLICKED_SEAT.id);
                    CLICKED_SEAT.className = "s";
                    manageConfirmForm();
                    console.log(selected_seats.length);
                } else if (CLICKED_SEAT.className == "s") {
                    const ITEM_POSITION = selected_seats.indexOf(
                        CLICKED_SEAT.id
                    );
                    selected_seats.splice(ITEM_POSITION, 1);
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
        if (selected_seats.length < 1) {
            document.getElementById("confirmres").style.display = "none";
            document.getElementById("selectedseats").innerHTML =
                'You need to select some seats to reserve.<br><a href="#" id="error">Close</a> this dialog box and pick at least one seat.';
            document.getElementById("error").addEventListener("click", evt => {
                evt.preventDefault();
                RESERVE_FORM.style.display = "none";
            });
        } else {
            document.getElementById("confirmres").style.display = "block";
            let pickedSeats = selected_seats.toString();
            pickedSeats = pickedSeats.replace(/,/g, ", ");
            pickedSeats = pickedSeats.replace(/,(?=[^,]*$)/, " and");
            if (selected_seats.length == 1) {
                document.getElementById(
                    "selectedseats"
                ).innerHTML = `You have selected <strong>${selected_seats.length}</strong> seat, which is seat <strong>${pickedSeats}</strong>`;
            } else if (selected_seats.length > 1) {
                document.getElementById(
                    "selectedseats"
                ).innerHTML = `You have selected <strong>${selected_seats.length}</strong> seats. They are seats <strong>${pickedSeats}</strong>`;
            }
        }
    }

    RESERVE_FORM.addEventListener("submit", event => {
        event.preventDefault();
        processReservation();
    });

    function processReservation() {
        const RECORDS = Object.keys(reservedSeats).length;
        const FIRSTNAME = document.getElementById("fname").value;
        const LASTNAME = document.getElementById("lname").value;
        let counter = 1;
        let nextRecord = "";

        selected_seats.forEach(eachSeat => {
            document.getElementById(eachSeat).className = "r";
            document.getElementById(eachSeat).innerText = "R";
            const NEW_PROPERTY = `record${RECORDS + counter}`;
            reservedSeats[NEW_PROPERTY] = {
                seat: eachSeat,
                owner: {
                    fname: FIRSTNAME,
                    lname: LASTNAME
                }
            };
            counter++;
            console.log(Object.keys(reservedSeats).length);
            console.log(reservedSeats);
        });
        RESERVE_FORM.style.display = "none";
        selected_seats = [];
    }

    createAndAddSeats();
    highlightReservedSeats();
    handleSeatSelection();
    displayReservationForm();
})();
