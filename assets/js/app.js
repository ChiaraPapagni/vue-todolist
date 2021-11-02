//istanza vue.js
const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            'Task 1',
            'Task 2',
            'Task 3',
            'Task 4'
        ],
    },
    methods: {
        removeItem(i) {
            this.tasks.splice(i, 1);
        },
    },
});

