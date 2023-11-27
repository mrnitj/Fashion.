import * as React from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Product {
    _id: string;
    image: string;
    title: string;
    price: number;
    // Add other fields as needed
}

export const Products = () => {
    const [allProducts, setAllProducts] = React.useState<Product[]>([]);

    const navigate = useNavigate();

    const getAllProducts = async () => {
        try {
            const response = await axios.get<{ data: Product[] }>("https://ecommerce-api.bridgeon.in/products?accessKey=b5e90860cce3874bdd3b");
            console.log(response);
            
            setAllProducts(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getAllProducts();
    }, []);

    const deleteHandler = async (itemid: string) => {
        console.log("item id", itemid);
        const token = localStorage.getItem("dealerToken");

        try {
            await axios.delete(`https://ecommerce-api.bridgeon.in/products/${itemid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            getAllProducts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell sx={{ display: "flex", justifyContent: "center" }}>Image</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Color</TableCell>
                        <TableCell align="right">Sizes</TableCell>
                        <TableCell align="right">PRICE(Rs)</TableCell>
                        <TableCell align="right">Add new</TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allProducts.map((row, index) => (
                        <TableRow key={row._id} sx={{ "&:last-child td, &:last-child th": { border: 0 }, height: "150px" }}>
                            <TableCell component="th" scope="row">
                                {index + 1}
                            </TableCell>
                            <TableCell align="right" sx={{ display: "flex", justifyContent: "center" }}>
                                <img src={row.image} alt={row.title} style={{ width: 100, height: 150 }} />
                            </TableCell>
                            <TableCell align="right">{row.title}</TableCell>
                            <TableCell align="right">sss</TableCell>
                            <TableCell align="right">sss</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">
                                <button
                                    style={{
                                        height: "50px",
                                        width: "60px",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        border: "1px solid grey",
                                        borderRadius: "5px",
                                        color: "white",
                                    }}
                                >
                                    update
                                </button>
                            </TableCell>
                            <TableCell align="right">
                                <button
                                    onClick={() => deleteHandler(row._id)}
                                    style={{
                                        height: "50px",
                                        width: "60px",
                                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                                        border: "1px solid grey",
                                        borderRadius: "5px",
                                        color: "white",
                                    }}
                                >
                                    delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
