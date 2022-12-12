const {createApp} = Vue; 

createApp ({
    data() {
        return {
            title: 'Titolo della pagina',
            logoPath: './img/Logo.png'
        }
    }
}).mount('#app')