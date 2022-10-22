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
    render() {
        return (
            <React.Fragment>
                {
                    this.state.employe.map(
                        employe => <CounterComponent key={employe.id} name={employe.name} point={employe.point} onDelete={() => this.delete(employe.id)} > <strong>{employe.name}</strong> </CounterComponent>)
                }
            </React.Fragment>
        );
    }

    delete = (employeId: number) => {
        const employe = this.state.employe.filter(e => e.id !== employeId);
        this.setState({employe: employe});
    }
}

export default CountersComponent;