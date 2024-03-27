import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const ChildComponent: any = React.lazy(() => import('./MyChild')); 

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const suspenseJSX: any = <h2 style={{ color: "blue" }}>data is loading</h2>
	return (
		<div>
			<h1>This is parent</h1>
				<React.Suspense fallback={suspenseJSX}>
					<ChildComponent />
				</React.Suspense>
		</div>
	);
};

export default Blah;


function delayForDemo(component: any) {
	return new Promise(resolve => {
	  setTimeout(resolve, 2000);
	}).then(() => {
		return component;
	});
  }