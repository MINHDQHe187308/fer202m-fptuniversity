import React from 'react';

class MySection extends React.Component {
    render() {
        return (
            <section>
                <h2>This is My Section</h2>
             {this.props.children}
            </section>
        );
    }
}
export default MySection;