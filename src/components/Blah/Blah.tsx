import React from "react";
import { ErrorBoundary } from "react-error-boundary";
const ChildLazy = React.lazy(() => delayForDemo(import("./Child")));

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	return (
		<div>
			<h1>This is error boundary stuff</h1>
			<hr />
			<ErrorBoundary
				fallback={<h1 style={{ color: "red" }}>there was an error</h1>}
			>
				<React.Suspense fallback={<h1 style={{color: 'green'}}>still loading</h1>}>
					<ChildLazy />
				</React.Suspense>
			</ErrorBoundary>
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
