import { Component } from "react";
import PropTypes from "prop-types";
import { SectionStyled } from "./Section.styled"

export default class Section extends Component{
    render(){
        return(
            <SectionStyled>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </SectionStyled>
        )
    }
}

Section.propTypes = {
    title: PropTypes.string
}