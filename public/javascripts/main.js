// Front-end Js file

function ExpressButton() {
    // Hit that click by its id
    document.getElementById("vue-button").click();
    // Get the data stored in the HTML
    let vueData = document.getElementById("vue-data").value;
    // Works!
    console.log("Data returned from the Vue app: " + vueData.greetings);
}