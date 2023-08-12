import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";
import useCustomerProviders from "src/hooks/query/useCustomerProviders.ts";
import { useMemo } from "react";

interface ProvidersContentProps {
    customerId?: number;
}

const CustomerProviders = ({customerId = 1}: ProvidersContentProps) => {
    const { data: providers } = useCustomerProviders(customerId);

    const dataTableData = useMemo(
        () => ({
            columns: [
                { Header: "company", accessor: "company", width: "20%" },
                { Header: "service", accessor: "service" },
                { Header: "number", accessor: "number" },
                { Header: "email", accessor: "email", width: "20%" },
            ],

            rows: providers ?? []
        }),
        [providers]
    );

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Providers"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default CustomerProviders;
