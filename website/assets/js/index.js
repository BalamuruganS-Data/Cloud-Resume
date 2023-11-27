const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://ueccwhz6q2wutaj6m6uw3x6cqe0lpnxy.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
updateCounter();
