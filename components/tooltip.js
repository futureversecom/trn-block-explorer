import EVMTooltip from "@/components/evm/evmTooltip";

export default function Tooltip({ message, children }) {
	return <EVMTooltip message={message}>{children}</EVMTooltip>;
}
