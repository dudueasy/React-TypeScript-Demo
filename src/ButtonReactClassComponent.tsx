import React from 'react';

interface Props {
    size?: string,
    yyy?: number,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface State {
    n: number
}


class ButtonReactClassComponent extends React.Component<Props, State> {
    static displayName = 'classButton';
    static defaultProps = {
        size: 'normal'
    };

    constructor(props: Props) {
        super(props);
        this.state = {n: 100};

        // console.log(this.props.yyy! + 1) // eslint-disable-line

        if (this.props.yyy) {
            console.log(this.props.yyy + 1);
        }
    }

    render() {
        return (
            <button className="button"
                    onClick={this.props.onClick}
            >
                {this.props.children}
                {this.props.size}
                {this.state.n}
            </button>
        );
    }
}


export default ButtonReactClassComponent;
