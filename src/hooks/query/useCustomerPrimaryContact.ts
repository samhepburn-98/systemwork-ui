import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import useQueryOptions from "src/hooks/query/useQueryOptions.ts";
import { PrimaryContact } from "src/types/profile.ts";
import { fetchPrimaryContact } from "src/services/backend.ts";

const useCustomerPrimaryContact = (customerId?: number): UseQueryResult<PrimaryContact> => {
    return useQuery<PrimaryContact, AxiosError>(
        ["customer", customerId, "primaryContact"],
        () => fetchPrimaryContact(customerId),
        useQueryOptions({ enabled: !!customerId })
    );
};

export default useCustomerPrimaryContact;
