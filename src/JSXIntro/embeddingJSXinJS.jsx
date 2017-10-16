// After the compilation JSX becomes a JavaScript object, so you can use it inside JavaScript statements like if, for, etc.

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

let user = null;

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('root')
);