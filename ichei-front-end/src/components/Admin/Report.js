const Report = ({ reports }) => {
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
                    {reports.map((reports, index) => (
                        <tr key={index}>
                            <td>{reports.name}</td>
                            <td>{reports.object}</td>
                            <td>{reports.local}</td>
                            <td>{reports.data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Report;