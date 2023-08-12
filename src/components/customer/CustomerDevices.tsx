import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";
import useCustomerDevices from "src/hooks/query/useCustomerDevices";

interface CustomerDevicesProps {
    customerId?: number;
}

const CustomerDevices = ({ customerId = 1 }: CustomerDevicesProps) => {
    const { data: devices } = useCustomerDevices(customerId);

    const dataTableData = {
        columns: [
            { Header: "type", accessor: "type", width: "20%" },
            { Header: "serial", accessor: "serial" },
            { Header: "model", accessor: "model" },
            { Header: "ip address", accessor: "ipAddress" },
        ],

        rows: devices ?? []
    };

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Devices"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default CustomerDevices;
