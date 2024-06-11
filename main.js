const seats = document.querySelectorAll('.seat:not(.sold):not(.showcase-seat)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const clearBtn = document.getElementById('clear-count-btn');

const ticketPrice = 13.99;

// Function that will update count and total cost of selected seats
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.seats .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.textContent = (selectedSeatsCount * ticketPrice).toFixed(2);
}

// Event listener to each selectable seat
seats.forEach((seat) => {
  seat.addEventListener('click', () => {
    // toggle the 'selected' class
    seat.classList.toggle('selected');
    // update the count
    updateSelectedCount();
  });
});

// Event listener to the clear button
clearBtn.addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seats .seat.selected');
  selectedSeats.forEach((seat) => {
    seat.classList.remove('selected');
  });
  updateSelectedCount();
});