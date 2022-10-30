import JSONPretty from "react-json-pretty";
import JSONPrettyMonokai from "react-json-pretty/dist/monikai";

export default function JSONViewer({ data }) {
	return <JSONPretty data={data} theme={JSONPrettyMonokai} />;
}
