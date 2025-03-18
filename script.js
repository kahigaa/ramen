document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517798/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 4, comment: "Refreshing" },
];

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = "";
    
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById("ramen-detail");

    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating ? `Rating: ${ramen.rating}` : "Rating: N/A";
    document.getElementById("ramen-comment").textContent = ramen.comment ? `Comment: ${ramen.comment}` : "Comment: N/A";

    ramenDetail.style.display = "block";
}

function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const newRamen = {
            id: ramens.length + 1,
            name: this.name.value,
            restaurant: this.restaurant.value,
            image: this.image.value,
            rating: this.rating.value,
            comment: this.comment.value
        };
        ramens.push(newRamen);
        
        const img = document.createElement("img");
        img.src = newRamen.image;
        img.alt = newRamen.name;
        img.addEventListener("click", () => handleClick(newRamen));
        document.getElementById("ramen-menu").appendChild(img);
        
        this.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
