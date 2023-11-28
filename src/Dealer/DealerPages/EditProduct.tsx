import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface productData {
    img: string;
    title: string;
    price: string;
    description: string;
    category: string;
}

export const EditProduct = () => {
  const navigate = useNavigate()
    const { id } = useParams();
    const [product, setProduct] = useState<Array<any>>([]);
    const [image, setImage] = useState < File | null>(null);

    console.log(id);

    const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
    const colorRef: React.RefObject<HTMLInputElement> = useRef(null);
    const sizeRef: React.RefObject<HTMLInputElement> = useRef(null);
    const priceRef: React.RefObject<HTMLInputElement> = useRef(null);
    const decRef: React.RefObject<HTMLInputElement> = useRef(null);
    const catRef: React.RefObject<HTMLInputElement> = useRef(null);

    const fetchProduct = async () => {
        const response = await axios.get(`https://ecommerce-api.bridgeon.in/products/${id}?accessKey=b5e90860cce3874bdd3b`);

        console.log("dataaas", response);
        setProduct([response.data.data]);
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log("pddd", product);

    const imageGetHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const updateProductHandler = async () => {
        try {
            const img = image;
            const title = nameRef.current?.value;
            const price = priceRef.current?.value;
            const description = decRef.current?.value;
            const category = catRef.current?.value;

            if (img || title || price || description || category) {
                const productData = new FormData();
                productData.append("img", img);
                productData.append("title", title);
                productData.append("price", price);
                productData.append("description", description);
                productData.append("category", category);
                const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZWFsZXJJZCI6IjY1M2ZkMWMxMmNjZjkzMjgyMzBjNjg3NCIsInVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBtYWlsLmNvbSIsImlhdCI6MTcwMTE3MDc3MCwiZXhwIjoxNzAxNDI5OTcwfQ.iEgYDgczGwXW3sAhigjzGc_-j1FzjknKw4z0YDxSusA";
                
                console.log('prsssss',productData);
                

                const patchResponse = await axios.patch(`https://ecommerce-api.bridgeon.in/products/${id}`,productData,
                  {
                    headers:{
                      Authorization: `Bearer ${token}`,
                      "Content-Type": "multipart/form-data", // Make sure to set the content type

                    }
                  }
                )
                console.log(patchResponse);
                if(patchResponse.status===200){
                  navigate('/dealer')
                }
                
                

            }
        } catch (error) {
          console.log(error);
          
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {product.map((item) => (
                <>
                    <label htmlFor="img">image</label>
                    <input type="file" onChange={(e) => imageGetHandler(e)} />

                    <label htmlFor="name">name</label>
                    <input type="text" defaultValue={item.title} ref={nameRef} />

                    <label htmlFor="color">color</label>
                    <input type="text" ref={colorRef} />

                    <label htmlFor="size">size</label>
                    <input type="text" ref={sizeRef} />

                    <label htmlFor="desc">description</label>
                    <input type="text" defaultValue={item.description} ref={decRef} />

                    <label htmlFor="desc">category</label>
                    <input type="text" defaultValue={item.category} ref={catRef} />

                    <label htmlFor="price">price</label>
                    <input type="number" defaultValue={item.price} ref={priceRef} />

                    <button onClick={()=>updateProductHandler()}>update</button>
                </>
            ))}
        </div>
    );
};
