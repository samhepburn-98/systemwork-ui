import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { Summary } from "src/types/profile.ts";
import { fetchCustomerSummary } from "src/services/backend.ts";

const useCustomerSummary = (customerId?: number): UseQueryResult<Summary> => {
    return useQuery<Summary, AxiosError>(
        ["customer", customerId, "summary"],
        () => fetchCustomerSummary(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerSummary;
