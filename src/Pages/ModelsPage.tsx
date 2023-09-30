
import '../Pages/ModelsPage.css'
import {Stack, Box, Typography, Card, CardMedia, CardContent} from '@mui/material' 


import { ModelData } from '../ModelDatas'

const ModelsPage = () => {

  return (
    <Stack alignItems={'center'} spacing={2}>
        <Typography variant='h4'
        sx={{fontFamily:'Mina', fontWeight:'700', letterSpacing:'.3rem'}}
        >
            MODELS
        </Typography>

        <Box sx={{backgroundColor:'lightlue', display:'flex' , justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            {/* <Paper elevation={24}> */}
            
               {  ModelData.map((data,index) => (
                <>

              {(index%2!=0) &&

                <Card style={{ display: "flex" , backgroundColor:'transparent', boxShadow:'none', width:'80%'}}>
                    <CardMedia
                        component={"img"}
                        height={"100%"}
                        style={{ width: "130px" }}
                        image={data.img}
                    />
                    <Stack sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <CardContent >
                           
                            <Typography variant="body2" color={"text.secondary"} width={'100%'} fontSize={'18px'} fontFamily={'Mina'} fontWeight={'700'} sx={{color:'black'}}>
                                {data.desc}
                            </Typography>
                        </CardContent>
                    </Stack>
                </Card>
             }
             {
                (index%2==0) &&

                
                <Card style={{ display: "flex" , backgroundColor:'transparent', boxShadow:'none', width:'80%'}}>
                    <Stack sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <CardContent >
                            
                            <Typography variant="body2" color={"text.secondary"} width={'100%'} fontSize={'18px'} fontFamily={'Mina'} fontWeight={'700'} sx={{color:'black'}}>
                               {data.desc}
                            </Typography>
                        </CardContent>
                    </Stack>
                    <CardMedia
                        component={"img"}
                        height={"100%"}
                        style={{ width: "130px" }}
                        image={data.img}
                    />
                </Card>
             }

                </>
             )) }
            {/* </Paper> */}
        </Box>


    </Stack>
  )
}

export default ModelsPage