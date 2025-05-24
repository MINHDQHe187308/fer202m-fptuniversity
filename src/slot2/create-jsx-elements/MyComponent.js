import React from 'react';
class First extends React.Component {
    render() {
        return (
            <p>This is First</p>
        );
    }
}
class Second extends React.Component {
    render() {
        return (
            <p>This is Second</p>
        );
    }
}
class Mycomponent extends React.Component {
    render() {
        return (
            <section>
             {this.props.children}
            </section>
        );
    }
}
Mycomponent.First = First;
Mycomponent.Second = Second;
export default Mycomponent;
export { First, Second };