async function chooseDate(e) {

    const myKey = "FojaTxB4miDno4LNvymgfc5TF60Q7g0v6wQ4doRK";
    const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${myKey}&date=${e.target.value}`;

    const response = await fetch(baseURL);
    const data = await response.json();
    console.log(data)

    const APOD = data.url;
    const ex = data.explanation;

    const img = document.querySelector("img");
    const p = document.querySelector("p");

    img.src = APOD;
    p.textContent = ex;

    document.querySelector("button").classList.add("show");
    
    return data
    
}

function changeDate() {

    document.querySelector("button").classList.add("show");
    const p = document.querySelector("p");

    if (p.classList.contains("show")) {
        p.classList.remove("show");
        
        document.querySelector("input").addEventListener("change", changeDate)
    } else {
        p.classList.add("show");
        document.querySelector("input").addEventListener("change", changeDate)
    }
}

function showP() {
    
    const p = document.querySelector("p");

    if (p.classList.contains("show")) {
        p.classList.remove("show");
        
        document.querySelector("input").addEventListener("change", changeDate)
    } else {
        p.classList.add("show");
        document.querySelector("input").addEventListener("change", changeDate)
    }
    
    
    const button = document.querySelector("button");

    if (button.classList.contains("show")) {
        button.classList.remove("show");
        
        document.querySelector("input").addEventListener("change", changeDate)
    } else {
        button.classList.add("show");
        document.querySelector("input").addEventListener("change", changeDate)
    }

    

}






function onLoad() {
    
    const root = document.getElementById("root");

    const input = `
        <div id="input">
            <label for="start">Choose Day:</label>
            
            <input type="date" id="start" name="trip-start"
            value=""
            min="2018-01-01" max="2023-01-01">
        </div>
    `;
    
    root.insertAdjacentHTML("beforeend", input);
    
    const inputEL = document.querySelector("input");
    
    inputEL.addEventListener("change", chooseDate);
    
    const content = `
        <img src="">
        <button type="button">Tell Me More</button>                
        <p></p>
    `;

    
    root.insertAdjacentHTML("beforeend", content);
    
    document.querySelector("img").src = "galaxy.jpg";
    document.querySelector("button").addEventListener("click", showP)

    
    
}
window.addEventListener("load", onLoad)