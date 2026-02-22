function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_25xt23g',
            'template_3er5edf',
            event.target,
            'kGC0CCkJDKlk1szsH',
    ).then(() => {
        console.log('this worked')
    })
}