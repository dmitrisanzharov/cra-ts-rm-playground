import { useEffect, useState } from 'react';

// DOCS: https://chatgpt.com/share/68c95994-e170-8009-b988-d1fbe646cef6
// sheet example: https://docs.google.com/spreadsheets/d/1-tffkTHziGUtE8yt4_E4ZB86Q9dNyvouHGMhNxlTGKk/edit?usp=sharing
// sheet ID is what is between: /d  and /edit
const SHEET_ID = '1-tffkTHziGUtE8yt4_E4ZB86Q9dNyvouHGMhNxlTGKk'; 
const SHEET_NAME = 'Stocks, with Dividends';

const Blah = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchSheet = async () => {
            const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}`;
            const res = await fetch(url);
            console.log("res: ", res);
            const text = await res.text();
            console.log("text: ", text);


            const json = text && JSON.parse(
                text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/)?.[1] as string
            );
            const table = json.table;
            console.log("table: ", table);

            const rows = table.rows.map((row: any) => {
                const obj: any = {};
                row.c.forEach((cell: any, i: number) => {
                    const colName = table.cols[i].label || table.cols[i].id; // fallback to A, B, ...
                    obj[colName as any] = cell ? cell.v : null;
                });
                return obj;
            });

            console.log("rows: ", rows);

            const headers = rows[2];
            console.log("headers: ", headers);

            const data = rows.slice(3).map((row: any) => {
                const obj: any = {};
                for (const key in row) {
                    const newKey = headers[key]; // e.g., "A" -> "name"
                    obj[newKey] = row[key];
                }
                return obj;
            })

            console.log('data final: ', data); 
            setData(data);

        };

        fetchSheet();
    }, []);

    return (
        <div>
            <h1>Sheet Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Blah;