import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";

const dataTableData = {
    columns: [
        { Header: "user", accessor: "user", width: "20%" },
        { Header: "email", accessor: "email" },
        { Header: "mobile", accessor: "mobile" },
        { Header: "landline", accessor: "landline" },
    ],

    rows: [
        {
            user: "Katie Taylor",
            email: "katie@rli.co.uk",
            mobile: "07888 456987",
            landline: "01924 287456",
        }
    ]
};

const UsersContent = () => {
    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Users"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default UsersContent;
