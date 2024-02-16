// * --------  START of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
export const useUtilizationStatusDoughnutChartHrefs = (): string[] => {
    return [
        'https://www.google.com',
        'https://www.independent.ie',
        'https://www.godaddy.com/en-ie',
        'https://www.music.youtube.comm',
    ];
};
// * --------  END of VICTOR IMPORTS, WILL BE DELETED UPON APPROVAL -------------------
//
// import { getUrlParamName } from '@reactRootOld/hooks/filterUrlBindings';
// import { TABLE_ID as FLEET_TABLE_ID } from '@reactRootOld/pages/FleetPage/FleetPage';

// export const useUtilizationStatusDoughnutChartHrefs2 = (): string[] => {
//     const { hash } = window.location;
//     const urlParamName = getUrlParamName(FLEET_TABLE_ID, null, 'status');

//     return React.useMemo(() => {
//         const [, queryString] = hash.split('?') || ['', ''];
//         const query = new URLSearchParams(queryString);
//         query.delete('urlParamName');

//         const progressLineHrefs: string[] = [
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":true,"available":false%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":false,"onRent":false,"available":true%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":true,"other":false,"onRent":false,"available":false%7D`,
//             `#/fleet?${query.toString()}&${urlParamName}=%7B"nrm":false,"other":true,"onRent":false,"available":false%7D`,
//         ];
//         return progressLineHrefs;
//     }, [hash, urlParamName]);
// };
