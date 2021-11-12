import React from "react"
import {
    CardRestaurant,
    ContainerInfo,
    CardMedias,
} from './styled'
import { 
    CardActionArea, 
    CardContent, 
    Typography 
} from "@material-ui/core"



export const RestaurantCard = ({name, deliveryTime, shipping, logoUrl, onClick }) => {
    return (
        <CardRestaurant>
            <CardActionArea
                onClick={onClick}
            >
                <CardMedias
                    component="img"
                    height="140"
                    image={logoUrl}
                    alt="Logo restaurant"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2">
                        <ContainerInfo>
                            <span>{(deliveryTime) - 10} - {deliveryTime} min</span>
                            <span>
                                {shipping ? (
                                    <span>Frete R$ {shipping},00</span>
                                ) : (
                                    <span>Frete grátis</span>
                                )}
                            </span>
                        </ContainerInfo>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardRestaurant>
    )
}