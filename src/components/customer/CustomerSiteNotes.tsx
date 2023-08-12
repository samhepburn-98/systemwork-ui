import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import DataTable from "src/examples/Tables/DataTable";
import useCustomerSiteNotes from "src/hooks/query/useCustomerSiteNotes.ts";
import { useMemo } from "react";

interface SiteNotesContentProps {
    customerId?: number;
}

const CustomerSiteNotes = ({ customerId = 1 }: SiteNotesContentProps) => {
    const { data: siteNotes } = useCustomerSiteNotes(customerId);

    const dataTableData = useMemo(
        () => ({
            columns: [
                { Header: "note", accessor: "note", width: "20%" },
                { Header: "description", accessor: "description" },
                { Header: "detail", accessor: "detail" }
            ],

            rows: siteNotes ?? []
        }),
        [siteNotes]
    );

    return (
        <Card sx={{ boxShadow: "none", height: "100%", width: "100%" }}>
            <CardHeader title="Site Notes"/>
            <DataTable table={dataTableData} entriesPerPage={false} showTotalEntries={false}/>
        </Card>
    );
};

export default CustomerSiteNotes;
