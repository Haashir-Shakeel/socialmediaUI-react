import { Avatar, Box, Fab, Modal, styled, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon} from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})
const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})


export const Add = () =>{
    const [open,setOpen] = useState(false)
    return(
    <>
    <Tooltip onClick={e=>setOpen(true)} 
    title="Add Post" 
    sx={{position:"fixed",bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}
    >
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
            <Typography variant='h6' color="gray" textAlign="center">Create post</Typography>
            <UserBox >
                    <Avatar 
                        sx={{width:30,height:30}} 
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    />
                    <Typography fontWeight={500} variant="span">Kevin James</Typography>
                </UserBox>
        </Box>  
    </StyledModal>
    </> 
    )
}