// function searchEquipment() {
//     const input = document.getElementById('searchinput').value.toLowerCase();
//     const cards = document.getElementByIdClassName('equipment-card');

//     for (let i =0; i < cards.length; i++) {
//         const card = cards[i];
//         const title = card.querySelectore('h2').textContent.toLowerCase();

//         if (title.inclides(input)) {
//             card.style.display = "block"
//         }else{
//             card.style.display ="none"
//         }
//     }
// }

// function searchEquipment() {
//     const input = document.getElementById('searchInput').value.toLowerCase();
//     const cards = document.getElementsByClassName('equipment-card');

//     for (let i = 0; i < cards.length; i++) {
//         const card = cards[i];
//         const title = card.querySelector('h2').textContent.toLowerCase();

//         if (title.includes(input)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     }
// }


function searchEquipment() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = Array.from(document.getElementsByClassName('equipment-card'));
    const equipmentCardsContainer = document.getElementById('equipmentCards');
    let matchFound = false;

    // Sort cards based on the match
    cards.sort((a, b) => {
        const titleA = a.querySelector('h2').textContent.toLowerCase();
        const titleB = b.querySelector('h2').textContent.toLowerCase();
        
        // Check if card title includes the search input
        const aMatch = titleA.includes(input);
        const bMatch = titleB.includes(input);

        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
    });

    // Reorder cards in the container
    cards.forEach(card => {
        equipmentCardsContainer.appendChild(card);
    });

    // Check if there was a match
    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(input)) {
            matchFound = true;
        }
    });

    // Show or hide the "No match found" message based on matchFound
    const noMatchMessage = document.getElementById('noMatchMessage');
    if (matchFound || input === "") {
        noMatchMessage.classList.add('hidden');
    } else {
        noMatchMessage.classList.remove('hidden');
    }
}