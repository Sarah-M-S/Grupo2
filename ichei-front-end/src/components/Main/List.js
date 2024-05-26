import React from "react";


class List extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8083/")
        .then(res => res.json())
        .then(data => {
            this.setState({ objects : data.itens })
        })
        
    }

    componentWillUnmount() {
        console.log(this.state.objects)
    }



    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Objeto</th>
                            <th>Local</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.objects.map((object, index) => (
                            <tr key={index}>
                                <td>{object.tituloItem}</td>
                                <td>{object.local}</td>
                                <td>{object.dataCadastro}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }

};


export default List;