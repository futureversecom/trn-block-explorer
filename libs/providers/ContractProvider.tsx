import { useQuery } from "@tanstack/react-query";
import { utils as ethers } from "ethers";
import {
	createContext,
	type FC,
	type PropsWithChildren,
	useContext,
	useState,
} from "react";

import { getContractData } from "@/libs/evm-api";

export interface ContractData {
	bytecode: string;
	contractCreator: string;
	deploymentTransactionHash: string;
	files?: Array<{
		name: string;
		path: string;
		content: string;
	}>;
}

interface ContractContextType {
	isContract: boolean;
	contractData: ContractData;
}

const ContractContext = createContext<ContractContextType>(
	{} as ContractContextType
);

interface ContractProviderProps extends PropsWithChildren {
	address: `0x${string}`;
}

export const ContractProvider: FC<ContractProviderProps> = ({
	children,
	address,
}) => {
	const [isContractFetched, setIsContractFetched] = useState(false);

	const contractQuery = useQuery(
		[address, "contractData"],
		async () => {
			const data = await getContractData(address);
			if (data?.files) setIsContractFetched(true);

			return data;
		},
		{
			enabled: !isContractFetched && ethers.isAddress(address),
			refetchInterval: 30000,
		}
	);

	return (
		<ContractContext.Provider
			value={{
				contractData: contractQuery?.data?.contractData,
				isContract: contractQuery?.data?.isContract ?? false,
			}}
		>
			{children}
		</ContractContext.Provider>
	);
};

export function useContract(): ContractContextType {
	return useContext(ContractContext);
}
