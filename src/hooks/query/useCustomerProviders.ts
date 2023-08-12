import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { CustomerProvider } from "src/types/profile.ts";
import { fetchCustomerProviders } from "src/services/backend.ts";

const useCustomerProviders = (customerId?: number): UseQueryResult<CustomerProvider[]> => {
    return useQuery<CustomerProvider[], AxiosError>(
        ["customer", customerId, "providers"],
        () => fetchCustomerProviders(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerProviders;
