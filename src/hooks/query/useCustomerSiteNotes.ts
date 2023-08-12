import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { SiteNote } from "src/types/profile.ts";
import { fetchCustomerSiteNotes } from "src/services/backend.ts";

const useCustomerSiteNotes = (customerId?: number): UseQueryResult<SiteNote[]> => {
    return useQuery<SiteNote[], AxiosError>(
        ["customer", customerId, "siteNotes"],
        () => fetchCustomerSiteNotes(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerSiteNotes;
