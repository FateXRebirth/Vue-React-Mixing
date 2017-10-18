var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    },
    beforeCreate: function() {
        console.log("beforeCreate");
    },
    created: function() {
        console.log("created");
    },
    beforeMount: function() {
        console.log("beforeMount");
    },
    mounted: function() {
        console.log('mounted');
    },
    beforeUpdate: function() {
        console.log('beforeUpdate');
    },
    updated: function() {
        console.log('updated');
    },
    beforeDestroy: function() {
        console.log('beforeDestroy');
    },
    destroyed: function() {
        console.log('destroyed');
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var computed = new Vue({
    el: '#computed',
    data: {
    message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('')
        }
    },
    methods: {
        reverseMessage2: function () {
            return this.message.split('').reverse().join('')
        }
    }
})

var watch = new Vue({
    el: '#watch',
    data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val
        }
    },
    computed: {
        fullName2: {
            // getter
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            // setter
            set: function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})

var bindClass = new Vue({
    el: '#bindClass',
    data: {
    isActive: true,
    error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})

var bindStyle = new Vue({
    el: '#bindStyle',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})
