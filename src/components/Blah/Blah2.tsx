import React from 'react'
import { Box } from '@mui/material';

type Props = {}

type MainObjType<T = any> = {
    data?: T[],
    myKey: string,
}



const Blah2 = (props: Props) => {


    const myObj: MainObjType = {
        myKey: 'test'
    }

    



  return (
    <Box sx={{display: 'flex', gap: '20px', p: 2, m: 3, border: '2px solid red', flexWrap: 'wrap'}}>
        <Box sx={{flex: 1, minWidth: '300px', backgroundColor: 'blue'}} >Box 1</Box>
        <Box sx={{flex: 1, minWidth: '300px', backgroundColor: 'violet'}} >Box 2, {myObj.myKey}</Box>
    </Box>
  )
}

export default Blah2