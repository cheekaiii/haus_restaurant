// Sample reviews data
const reviewsData = [
    { rating: 5, text: "Excellent food and service!", image: "1.png" },
    { rating: 5, text: "I loved it! Will definitely come back.", image: "2.png"},
    { rating: 5, text: "Five stars! This restaurant is a hidden gem.", image: "3.png"},
    { rating: 5, text: "Highly recommended. We had a memorable dining experience here.", image: "4.png" },
    { rating: 4, text: "Very good food, but there's room for improvement in service.", image: "5.png" },
    { rating: 4, text: "Enjoyed my meal. The atmosphere was pleasant.", image: "6.png" },
    { rating: 3, text: "Decent food, but the wait times were a bit long.", image: "7.png" },
    { rating: 3, text: "Average experience. The dishes were hit or miss.", image: "8.png" },
    { rating: 2, text: "Disappointing. The food quality didn't meet my expectations.", image: "9.png" },
    { rating: 1, text: "Horrible experience. Terrible food and rude staff.", image: "10.png" }
]
// Function to shuffle array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to filter and display reviews
function filterAndDisplayReviews(selectedOption) {
    const reviewsContainer = document.getElementById("reviews-container");
    reviewsContainer.innerHTML = "";

    let filteredReviews = [...reviewsData]; // Create a copy of the original reviews

    switch (selectedOption) {
        case "best-to-worst":
            filteredReviews.sort((a, b) => b.rating - a.rating);
            break;
        case "worst-to-best":
            filteredReviews.sort((a, b) => a.rating - b.rating);
            break;
        case "1-star":
            filteredReviews = filteredReviews.filter(review => review.rating === 1);
            break;
        case "2-star":
            filteredReviews = filteredReviews.filter(review => review.rating === 2);
            break;
        case "3-star":
            filteredReviews = filteredReviews.filter(review => review.rating === 3);
            break;
        case "4-star":
            filteredReviews = filteredReviews.filter(review => review.rating === 4);
            break;
        case "5-star":
            filteredReviews = filteredReviews.filter(review => review.rating === 5);
            break;
        default:
            shuffleArray(filteredReviews); // Random order
    }

    // Display the filtered reviews
    filteredReviews.forEach(review => {
        const reviewElement = document.createElement("div");
        reviewElement.className = "review";
        reviewElement.innerHTML = `
        <div class="rating">${'★'.repeat(review.rating)}</div>
        <img src="${review.image}" alt="User Image" class="user-image">
        <p>${review.text}</p>`;
        reviewsContainer.appendChild(reviewElement);
    });
}

const sortDropdown = document.getElementById("sort-dropdown");

// Listen for changes in the dropdown selection
sortDropdown.addEventListener("change", () => {
    const selectedOption = sortDropdown.value;
    filterAndDisplayReviews(selectedOption);
});

// Initial load: Display reviews in random order
filterAndDisplayReviews("random");