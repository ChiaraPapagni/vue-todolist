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
        completed: [],
        trashed: [],
    },
    methods: {
        addItem() {
            if (this.newItem.length > 5) {
                this.tasks.push(this.newItem);
                this.error = false;
            } else {
                this.error = true;
            }
            this.newItem = '';
        },
        completedTask(item, i) {
            this.completed.push(item);
            this.tasks.splice(i, 1);
        },
        removeItem(item, i) {
            this.tasks.splice(i, 1);
            this.trashed.push(item);
        },
        restoreItemFromComplete(item, i) {
            this.completed.splice(i, 1);
            this.tasks.push(item);
        },
        restoreItemFromTrash(item, i) {
            this.trashed.splice(i, 1);
            this.tasks.push(item);
        },
        emptyBin() {
            const confirm = prompt(`This will delete all tasks forever! 
Are you sure you want to proceed? [Y/N]`).toLowerCase();
            if (confirm === 'y') {
                this.trashed = [];
            }
        },
    },
});
