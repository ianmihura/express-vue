// You can import here your npm modules

export default {
    name: 'App',
    methods: {
        HelloWorld: function () {
            const greetings = "Hello World!";
            // Works!
            console.log(greetings);
            // You can also send and recieve data (including JSON objects) through the HTML
            document.getElementById("vue-data").innerHTML += greetings + " ";
            document.getElementById("vue-data").value = {
                greetings: greetings
            };
        }
    }
};
