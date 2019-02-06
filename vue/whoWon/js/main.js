new Vue({
    el: '#app',
    data: {
        state    : true,
        inputName: '',
        names    : [],
        showError: false,
        result   : '',
    },
    methods: {
        addNameToList() {
            if ( this.validate(this.inputName) ) {
                this.names.push(this.inputName);
                this.inputName = '';
                this.showError = false;
            } else {
                this.showError = true;
            }
        },
        validate(value) {
            if (value) {
                return true;
            }
            return false;
        },
        showResults() {
            let random = this.names[Math.floor(Math.random() * this.names.length)];
            this.result = random;
            this.state = false;
        },
        resetApp() {
            this.state  = true;
            this.names  = [];
            this.result = '';
        },
    },
});
