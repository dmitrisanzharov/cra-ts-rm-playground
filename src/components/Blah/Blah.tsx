import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material";
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
	return (
		<div>
			<h1>....</h1>
			<Autocomplete

				renderInput={(params) => {
					return <TextField {...params} label="numbers" />;
				}}
				sx={{ width: "50vw" }}

				//   YOUTUBE DEMO
				options={["1", "2", "3"]} // joe, jane, foo

                filterOptions={(originalOption: any, state: any) => {

                    if(state.inputValue === 'names'){
                        return ['foo', 'joe', 'jane'];
                    }

                    return originalOption;
                }}

                isOptionEqualToValue={(originalOptionsArrayValue: any, valueSelectedByUser: any) => {

                    console.log('originalOptionsArray', originalOptionsArrayValue);
                    console.log('valueSelectedByUser', valueSelectedByUser);

                    if(originalOptionsArrayValue === '1' && valueSelectedByUser === 'joe'){
                        return true;
                    }
                    
                    if(valueSelectedByUser === 'jane' && originalOptionsArrayValue === "2"){
                        return true;
                    }

                    if(valueSelectedByUser === 'foo' && originalOptionsArrayValue === "3"){
                        return true;
                    }

                    return false;

                }}


			/>
		</div>
	);
};

export default Blah;
