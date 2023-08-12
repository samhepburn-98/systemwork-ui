import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { CustomerUser } from "src/types/profile.ts";
import { fetchCustomerUsers } from "src/services/backend.ts";

const useCustomerUsers = (customerId?: number): UseQueryResult<CustomerUser[]> => {
    return useQuery<CustomerUser[], AxiosError>(
        ["customer", customerId, "users"],
        () => fetchCustomerUsers(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerUsers;
