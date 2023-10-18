'use client'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function CardDefault(props) {
    const handleDelete = async () => {
        try {
            const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:eaXUv0bD/products/${props.id}`, {
                method: 'DELETE', // Use the DELETE method to delete the item
            });

            if (response.ok) {
                // Item successfully deleted
                console.log(`Item with ID ${props.id} deleted`);
            } else {
                // Handle errors or display a message if needed
                console.error(`Failed to delete item with ID ${props.id}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={props.path}
                        alt="card-image"
                        className="absolute w-full h-full rounded-xl object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex justify-between">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            {props.name}
                        </Typography>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Price: {props.price}/Kg
                        </Typography>
                    </div>

                    <Typography className="font-bold">
                        Stocks:{props.stock}
                    </Typography>

                    <Typography>
                        {props.desc}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0  flex justify-between">
                    <Button color="yellow">Edit</Button>
                    <Button color="red" onClick={handleDelete}>Delete</Button>
                </CardFooter>
            </Card>
        </>
    );
}