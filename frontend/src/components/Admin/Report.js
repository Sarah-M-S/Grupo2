import './Style/Report.css';
import React from "react";

class Report extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            reports: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8083/admin/perdidos")
        .then(res => res.json())
        .then(data => {
            this.setState({ reports : data.itens })
        })
        
    }

    componentWillUnmount() {
    }

    render() {

        return (
            <div className="lista-objetos-reporte">
                <table className="tabela-objetos-reporte">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Objeto</th>
                            <th>Local</th>
                            <th>Data</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reports.map((reports, index) => (
                            <tr key={index}>
                                <td>{reports.nomePessoa}</td>
                                <td>{reports.tituloItem}</td>
                                <td>{reports.local}</td>
                                <td>{reports.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }

    
}


export default Report;