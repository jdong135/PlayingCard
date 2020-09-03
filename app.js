//♥♦♣♠
window.addEventListener('load', function() {
    for(let i=1; i<11; i++) {
        generateCard(i, "heart", "♥");
    }
    for(let i=11; i<14; i++){
        generateFaceCard(i, "heart", "♥");
    }
});

function generateFaceCard(value, suit, symbol) {
    // Create card
    const card = document.createElement("div");
    card.className = "card "+suit;
    // Create header
    const header = document.createElement("div");
    header.className = "face_card_header";
    const img_div = document.createElement("div");
    img_div.className = "face_card_image";
    const footer = document.createElement("div");
    footer.className = "face_card_footer";
    if(value == 11) {
        header.innerHTML = "J <br>" + symbol;
        img_div.innerHTML = "<img src='jack.gif'/>";
        footer.innerHTML = "J <br>" + symbol;
    }
    else if(value == 12) {
        header.innerHTML = "Q <br>" + symbol;
        img_div.innerHTML = "<img src='queen.gif'/>";
        footer.innerHTML = "J <br>" + symbol;
    }
    else if(value == 13) {
        header.innerHTML = "K <br>" + symbol;
        img_div.innerHTML = "<img src='king.gif'/>";
        footer.innerHTML = "J <br>" + symbol;
    }
    card.appendChild(header);
    card.appendChild(img_div);
    card.appendChild(footer);
    console.log(card);
    document.body.appendChild(card);
}

function generateCard(value, suit, symbol) {
    // Create card
    const card = document.createElement("div");
    card.className = "card "+suit;
    // Create header
    const header = document.createElement("div");
    header.className = "card_header";
    if(value != 1)
        header.innerHTML = value + "<br>" + symbol;
    else if(value < 11)
        header.innerHTML = "A <br>" + symbol;
    card.appendChild(header);
    // Create container for suits
    const symbol_container = document.createElement("div");
    symbol_container.className = "symbol_container";
    card.appendChild(symbol_container);
    if(value <= 10) {
        // Create vertical & horizontal divs
        let count = 1;
        for(let i=0; i<7; i++) {
            const vertical_div = document.createElement("div");
            vertical_div.className = "vertical_section";
            for(let j=0; j<3; j++) {
                const horizontal_div = document.createElement("div");
                horizontal_div.className = "horizontal_section";
                if(suitPosition(value).includes(count)) {
                    horizontal_div.innerHTML = symbol;
                    horizontal_div.style.fontSize = suitPosition(value)[suitPosition(value).length-1];
                } else {
                    horizontal_div.innerHTML = symbol;
                    horizontal_div.style.visibility = "hidden";
                }
                vertical_div.appendChild(horizontal_div);
                count++;
            }
            symbol_container.appendChild(vertical_div);
        }
    }

    const footer = document.createElement("div");
    footer.className = "card_footer";
    if(value != 1)
        footer.innerHTML = value + "<br>" + symbol;
    else if(value < 11)
        footer.innerHTML = "A<br>" + symbol;
    card.appendChild(footer);
    console.log(card);
    document.body.appendChild(card);
}

//Return font size as last array value
function suitPosition(value) {
    if(value == 1)
        return [11,"40px"]
    else if(value == 2)
        return [2,20,"40px"]
    else if(value == 3)
        return [2,11,20,"40px"]
    else if(value == 4)
        return [1,3,19,21, "40px"]
    else if(value == 5)
        return [1,3,11,19,21,"40px"]
    else if(value == 6)
        return [1,3,10,12,19,21, "40px"]
    else if(value == 7)
        return [1,3,8,10,12,19,21, "40px"]
    else if(value == 8)
        return [1,3,5,10,12,17,19,21, "40px"]
    else if(value == 9)
        return [1,3,7,9,11,13,15,19,21, "40px"]
    else if(value == 10)
        return [1,3,5,7,9,13,15,17,19,21, "40px"]
}
