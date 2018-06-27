import React from 'react';
import glamorous from 'glamorous';
import { Input } from 'mdbreact';

export default class ReduxInput extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        return (
            <div className="form-input">
                <StyledInput
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    label={this.props.labelName}
                    icon={this.props.icon}
                    ref={input => (this.input = input)}
                    error={this.props.meta.invalid}
                    touched={this.props.meta.touched}
                />
            </div>
        );
    }
}

const StyledInput = glamorous(Input)({
    outline: `none !important`
}, ({error, touched, warning}) => ({
    borderBottom: touched && error ? `1px solid red !important` : null
}))