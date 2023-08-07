import Card from "@mui/material/Card";
import { CardContent, CardHeader } from "@mui/material";
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

const DevicesCard = () => {
    return (
        <Card sx={{ height: "100%" }}>
            <CardHeader title="Devices"/>
            <CardContent sx={{ px: 0, pt: 0 }}>
                <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
            </CardContent>
        </Card>
    );
};

export default DevicesCard;
