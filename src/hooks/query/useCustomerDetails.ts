import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { Customer } from "src/types/profile.ts";
import { fetchCustomerDetails } from "src/services/backend.ts";

const useCustomerDetails = (customerId?: number): UseQueryResult<Customer> => {
    return useQuery<Customer, AxiosError>(
        ["customer", customerId, "details"],
        () => fetchCustomerDetails(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerDetails;
