import React, { ReactNode } from 'react';

interface CounterComponentProps {
    name: string,
    point: number,
    children: ReactNode,
    onDelete: Function,
    onIncrement: Function,
}

class CounterComponent extends React.Component<CounterComponentProps> {
    style = {
    }

    render() {
        let countLabelClass = this.getCountLabelClassName();
        /** destructuring */
        const {children, onIncrement, onDelete} = this.props;
        return (
            <div>
                <div>
                    {children}
                </div>
                <span style={this.style} className={countLabelClass}>{this.getCount()}</span>
                <button className="btn btn-success btn-sm" onClick={() => onIncrement()}>Increament</button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete()}>Delete</button>
            </div>
        );
    }


    getCount = (): number | string => {
        return this.props.point > 0 ? this.props.point : "zero"
    }

    private getCountLabelClassName() {
        let countLabelClass = "btn btn-";
        countLabelClass += this.props.point > 0 ? "primary" : "warning";
        return countLabelClass;
    }
}

export default CounterComponent;