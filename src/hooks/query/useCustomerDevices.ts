import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { CustomerDevice } from "src/types/profile.ts";
import { fetchCustomerDevices } from "src/services/backend.ts";

const useCustomerDevices = (customerId?: number): UseQueryResult<CustomerDevice[]> => {
    return useQuery<CustomerDevice[], AxiosError>(
        ["customer", customerId, "devices"],
        () => fetchCustomerDevices(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerDevices;
