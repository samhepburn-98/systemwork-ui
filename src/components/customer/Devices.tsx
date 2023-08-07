import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";

const dataTableData = {
    columns: [
        { Header: "type", accessor: "type", width: "20%" },
        { Header: "serial", accessor: "serial" },
        { Header: "model", accessor: "model" },
        { Header: "ip address", accessor: "ipAddress" },
    ],

    rows: [
        {
            type: "Server",
            serial: "AB3568CX",
            model: "ML350",
            ipAddress: "192.168.0.1",
        }
    ]
};

const Devices = () => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Devices"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default Devices;
