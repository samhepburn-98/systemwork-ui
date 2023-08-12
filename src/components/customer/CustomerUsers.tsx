import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";
import useCustomerUsers from "src/hooks/query/useCustomerUsers.ts";

interface UsersContentProps {
    customerId?: number;
}

const CustomerUsers = ({ customerId = 1 }: UsersContentProps) => {
    const { data: users } = useCustomerUsers(customerId);

    const dataTableData = {
        columns: [
            { Header: "user", accessor: "name", width: "20%" },
            { Header: "email", accessor: "email" },
            { Header: "mobile", accessor: "mobile" },
            { Header: "landline", accessor: "landline" },
        ],

        rows: users ?? []
    };

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Users"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default CustomerUsers;
