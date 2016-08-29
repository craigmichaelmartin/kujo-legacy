import Model from './model';

const Contact = Model.extend({
    defaults() {
        return {
            type: ''
        };
    }
});

export default Contact;
