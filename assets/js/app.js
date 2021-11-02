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
        error: false,
        logoBoolean: 'https://www.boolean.careers/images/misc/logo.png',
    },
    methods: {
        removeItem(i) {
            this.tasks.splice(i, 1);
        },
        addItem() {
            if (this.newItem.length > 5) {
                this.tasks.push(this.newItem);
                this.error = false;
            } else {
                this.error = true;
            }
            this.newItem = '';
        },
    },
});
