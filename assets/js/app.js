//istanza vue.js
const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],
        newItem: '',
    },
    methods: {
        removeItem(i) {
            this.tasks.splice(i, 1);
        },
        addItem() {
            this.tasks.push(this.newItem);
            this.newItem = '';
        },
    },
});

