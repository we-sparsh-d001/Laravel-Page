import {defineStore} from "pinia";

export const useFormStore = defineStore('formStore', {
    state: () => ({
        user_info: [],
        name_error: false,
        emailError: false,
        subject_error: false,
        user_feedback_error: false,
        terms: false,
        showCard: false,
        name: '',
        email: '',
        subject: '',
        user_feedback: '',

    }),
    getters: {},
    actions: {
        checkMail() {

            let check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return check.test(this.email);
        },
        agreeTerms() {
            return this.terms.value;
        },
        submitForm() {
            if (this.email === '' || !this.checkMail()) {
                this.emailError = true;
            } else {
                this.emailError = false;
            }
            if (this.name === '') {
                this.name_error = true;
            } else {
                this.name_error = false;
            }

            if (this.subject === '') {
                this.subject_error = true;
            } else {
                this.subject_error = false;
            }

            if (this.user_feedback === '') {
                this.user_feedback_error = true;
            } else {
                this.user_feedback_error = false;
            }

            if (!this.emailError && !this.name_error && !this.subject_error && !this.user_feedback_error) {
                this.user_info.push({
                    name: this.name,
                    email: this.email,
                    user_feedback: this.user_feedback,
                    subject: this.subject
                });
                this.name = '';
                this.email = '';
                this.subject = '';
                this.user_feedback = '';
                this.terms = false;
                alertify.alert('Go It!', 'We have received your message  sucessfully', function () {
                    alertify.success('Recived sucessfully');
                });
            } else {

            }

        },

    }
})