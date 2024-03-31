import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
// @ts-ignore
import ContextSyntax3 from "src/components/ContextSyntax3/ContextSyntax3";
import Comp1Syntax3 from "src/components/ContextSyntax3/Comp1Syntax3";

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	return (
		<div>
			<h1>Hello this is Blah!</h1>
			<ContextSyntax3 name="Dmitri">
				<Comp1Syntax3 />
			</ContextSyntax3>

            <hr />
            <h1>Hello this is second use</h1>
            <ContextSyntax3 name="James">
				<Comp1Syntax3 />
			</ContextSyntax3>
		</div>
	);
};

export default Blah;
