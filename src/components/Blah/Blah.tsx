import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import countSlice, { countSelector } from "../../store/countSlice";
import generalApiSlice from "../../store/api/generalApiSlice";

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	const dispatch = useDispatch();
	const count = useSelector((storeStateObj: any) => storeStateObj.countSliceStoreObj.count);

	const data = generalApiSlice.useGetTestQuery();
	console.log("data: ", data);

	const dataPost = generalApiSlice.usePostTestMutation();
	console.log("dataPost: ", dataPost);

	function triggerPost() {
		dataPost[0]({ letter: "b2" });
        // dispatch(generalApiSlice.util.invalidateTags(['MyTagName']));
	}

	return (
		<div>
			<h1>Hello to count: {count}</h1>
			<button onClick={() => dispatch(countSlice.actions.inc({}))}>inc</button>

			<hr />
			<button onClick={triggerPost}>trigger post</button>
			<br />
			{JSON.stringify(data?.data?.myArr)}
		</div>
	);
};

export default Blah;
