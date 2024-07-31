import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
const Child1Lazy = React.lazy(() => import("./Child1"));
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const errorJSX: any = <h1>error</h1>;

	return (
		<div>
			<h1>Hello</h1>
			<ErrorBoundary fallback={errorJSX}>
				<React.Suspense fallback={<h1 style={{ color: "red" }}>Loading</h1>}>
					<Child1Lazy />
				</React.Suspense>
			</ErrorBoundary>
		</div>
	);
};

export default Blah;

function delayForDemo(component: any) {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => {
		return component;
	});
}
