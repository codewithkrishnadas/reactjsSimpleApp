import React from 'react'
import CounterComponent from './counterComponent';

export interface User {
    id: number,
    name: string,
    point: number,
}

interface CountersComponentProps {

}

interface CountersComponentState {
    employe: User[]
}

class CountersComponent extends React.Component<CountersComponentProps, CountersComponentState> {
    state = {
        employe: [
            { id: 1, name: "das", point: 5 },
            { id: 2, name: "KD", point: 0 },
            { id: 3, name: "jovin", point: 3 },
            { id: 4, name: "sachin", point: 0 },
            { id: 5, name: "jay", point: 5 },
        ]
    }

    componentDidMount(): void {
        /** ajax calls */ 
    }

    componentDidUpdate(prevProps: Readonly<CountersComponentProps>, prevState: Readonly<CountersComponentState>, snapshot?: any): void {
        /** actions that do when changes occured  */
    }

    componentWillUnmount(): void {
        // when component removed from DOM
        // mainly for avoid memory leaks 
    }

    render() {
        return (
            <React.Fragment>

                <button className="btn btn-primary" onClick={this.resetpoint}>Reset</button>
                {
                    this.state.employe.map(
                        employe => <CounterComponent
                            key={employe.id}
                            name={employe.name}
                            point={employe.point}
                            onDelete={() => this.delete(employe.id)}
                            onIncrement={() => this.increment(employe)}
                        >
                            <strong>{employe.name}</strong>
                        </CounterComponent>)
                }
            </React.Fragment>
        );
    }

    delete = (employeId: number) => {
        const employe = this.state.employe.filter(e => e.id !== employeId);
        this.setState({ employe: employe });
    }

    increment = (employe: User) => {
        const employes = [...this.state.employe]
        const index = employes.indexOf(employe);
        employes[index] = { ...employe };
        employes[index].point++;
        this.setState({ employe: employes });
    }
    resetpoint = () => {
        const employes = this.state.employe.map(e => {
            e.point = 0;
            return e;
        });
        this.setState({ employe: employes });
    }
}

export default CountersComponent;