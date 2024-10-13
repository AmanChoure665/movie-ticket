const movies = [
    {
        title: "Movie One",
        image: "https://via.placeholder.com/300x450.png?text=Movie+One",
        description: "Description for Movie One.",
        genre: "Action",
        duration: "2h 10m",
        releaseDate: "2023-06-15"
    },
    {
        title: "Movie Two",
        image: "https://via.placeholder.com/300x450.png?text=Movie+Two",
        description: "Description for Movie Two.",
        genre: "Drama",
        duration: "1h 45m",
        releaseDate: "2023-07-20"
    },
    {
        title: "Movie Three",
        image: "https://via.placeholder.com/300x450.png?text=Movie+Three",
        description: "Description for Movie Three.",
        genre: "Comedy",
        duration: "1h 30m",
        releaseDate: "2023-08-05"
    },
    {
        title: "Movie Four",
        image: "https://via.placeholder.com/300x450.png?text=Movie+Four",
        description: "Description for Movie Four.",
        genre: "Horror",
        duration: "1h 50m",
        releaseDate: "2023-09-01"
    },
    {
        title: "Movie Five",
        image: "https://via.placeholder.com/300x450.png?text=Movie+Five",
        description: "Description for Movie Five.",
        genre: "Sci-Fi",
        duration: "2h 15m",
        releaseDate: "2023-10-10"
    },
];

function displayMovies() {
    const moviesContainer = document.getElementById('moviesContainer');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');
        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
        `;
        movieDiv.onclick = () => {
            localStorage.setItem('selectedMovie', JSON.stringify(movie));
            window.location.href = 'movie-details.html';
        };
        moviesContainer.appendChild(movieDiv);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('moviesContainer')) {
        displayMovies();
    }

    if (document.getElementById('movieTitle')) {
        const movie = JSON.parse(localStorage.getItem('selectedMovie'));
        document.getElementById('movieTitle').innerText = movie.title;
        document.getElementById('movieImage').src = movie.image;
        document.getElementById('movieDescription').innerText = movie.description;
        document.getElementById('movieGenre').innerText = movie.genre;
        document.getElementById('movieDuration').innerText = movie.duration;
        document.getElementById('movieReleaseDate').innerText = movie.releaseDate;

        document.getElementById('bookBtn').onclick = () => {
            window.location.href = 'booking.html';
        };
    }

    if (document.querySelector('.seat-selection')) {
        const seatSelectionContainer = document.querySelector('.seat-selection');
        for (let i = 1; i <= 30; i++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            seatDiv.innerText = i;
            seatDiv.onclick = function () {
                seatDiv.classList.toggle('selected');
            };
            seatSelectionContainer.appendChild(seatDiv);
        }

        document.getElementById('confirmBookingBtn').onclick = function () {
            const selectedSeats = document.querySelectorAll('.seat.selected');
            const seatNumbers = Array.from(selectedSeats).map(seat => seat.innerText);
            alert(`You have booked seats: ${seatNumbers.join(', ')}`);
        };
    }
});
