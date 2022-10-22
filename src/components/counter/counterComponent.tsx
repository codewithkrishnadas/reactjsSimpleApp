import React, { ReactNode } from 'react';

interface CounterComponentProps {
    name: string,
    point: number,
    children: ReactNode,
    onDelete: Function
}

interface CounterComponentState {
    count: number
}

class CounterComponent extends React.Component<CounterComponentProps, CounterComponentState> {
    state = {
        count: this.props.point
    }
    style = {
    }

    render() {
        let countLabelClass = this.getCountLabelClassName();
        return (
            <div>
                <div>
                    {this.props.children}
                </div>
                <span style={this.style} className={countLabelClass}>{this.getCount()}</span>
                <button className="btn btn-success btn-sm" onClick={this.increment}>Increament</button>
                <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete()}>Delete</button>
            </div>
        );
    }

    increment = (): void => {
        this.setState({ count: this.state.count + 1 })
    }

    getCount = (): number | string => {
        return this.state.count > 0 ? this.state.count : "zero"
    }

    private getCountLabelClassName() {
        let countLabelClass = "btn btn-";
        countLabelClass += this.state.count > 0 ? "primary" : "warning";
        return countLabelClass;
    }
}

export default CounterComponent;