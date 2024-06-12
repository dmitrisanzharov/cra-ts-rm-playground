import React from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
// @ts-ignore

type Props = any;

const Blah: React.FC<any> = (props: Props) => {
    const [dataName1, setDataName1] = React.useState<any>({ loading: true, data: [] });
    React.useEffect(() => {
        async function getData() {
            const url = 'http://localhost:5000/temp-data';
            let req = await fetch(url);
            let res = await req.json();
            // console.log("res: ", res.vehicles);
            setDataName1({ loading: false, data: res.vehicles.filter((el: any) => el.impacts_severities !== null) });
        }
        getData();
    }, []);

    console.log(dataName1);

    React.useEffect(() => {
        let finalData1 = dataName1.data.map((el: any)=> el.impacts_severities);

        const hashMap: any = {};
        for (var i = 0; i < finalData1.length; i++) {
            let el1 = finalData1[i];
            hashMap[el1] = hashMap[el1] + 1 || 1;
        }

        console.log(hashMap);
    }, [dataName1.data]);

    return (
        <div>
            <ul>
                {dataName1.data.map((el: any) => {
                    return <li key={el.id}>{JSON.stringify(el.impacts_severities)}</li>;
                })}
            </ul>
        </div>
    );
};

export default Blah;
