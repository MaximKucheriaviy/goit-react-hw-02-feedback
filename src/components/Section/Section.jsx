import { Component } from "react";
import PropTypes from "prop-types";

export default class Section extends Component{
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </section>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string
}