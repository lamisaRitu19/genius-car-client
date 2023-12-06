export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    }

    // get jwt token
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genius-token', data.token);
            // toast.success('The user logged in successfully!');
            // form.reset();
            // navigate(from, { replace: true });
        });
}