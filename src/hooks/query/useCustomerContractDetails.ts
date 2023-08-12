import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { Contract } from "src/types/profile.ts";
import { fetchContractDetails } from "src/services/backend.ts";

const useCustomerContractDetails = (customerId?: number): UseQueryResult<Contract> => {
    return useQuery<Contract, AxiosError>(
        ["customer", customerId, "contract"],
        () => fetchContractDetails(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerContractDetails;
