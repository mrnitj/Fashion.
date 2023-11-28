import axios from "axios";
import { useRef, useState } from "react";

// interface productData {
//     img: string;
//     title: string;
//     price: string;
//     description: string;
//     category: string;
// }

export const AddProducts = () => {

    
    const [image, setImage] = useState<File | null>(null);


    const imageGetHandler= (e)=>{
        setImage(e.target.files[0])
    }
    console.log('image' , image);
    

    const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
    const colorRef: React.RefObject<HTMLInputElement> = useRef(null);
    const sizeRef: React.RefObject<HTMLInputElement> = useRef(null);
    const priceRef: React.RefObject<HTMLInputElement> = useRef(null);
    const decRef: React.RefObject<HTMLInputElement> = useRef(null);
    const catRef: React.RefObject<HTMLInputElement> = useRef(null);
    const addProductHandler = async () => {
        try {
            const img = image;
            const title = nameRef.current?.value;
            const price = priceRef.current?.value;
            const description = decRef.current?.value;
            const category = catRef.current?.value;
    
            if (img && title && price && description && category) {
                const productData = new FormData();
                productData.append('img', img);
                productData.append('title', title);
                productData.append('price', price);
                productData.append('description', description);
                productData.append('category', category);
    
                console.log(productData);
    
                const token = localStorage.getItem("dealerToken");
    
                const response = await axios.post("https://ecommerce-api.bridgeon.in/products", productData, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data', // Make sure to set the content type
                    },
                });
    
                // Handle the response as needed
                console.log(response);
            }

            setImage(null);
            nameRef.current!.value = "";
            priceRef.current!.value = "";
            colorRef.current!.value="";
            sizeRef.current!.value="";
            decRef.current!.value = "";
            catRef.current!.value = "";
    

        } catch (error) {
            console.log(error);
        }
    };
    

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <label htmlFor="img">image</label>
            <input type="file" onChange={(e)=>imageGetHandler(e)} />

            <label htmlFor="name">name</label>
            <input type="text" ref={nameRef} />

            <label htmlFor="color">color</label>
            <input type="text" ref={colorRef} />

            <label htmlFor="size">size</label>
            <input type="text" ref={sizeRef} />

            <label htmlFor="desc">description</label>
            <input type="text" ref={decRef} />

            <label htmlFor="desc">category</label>
            <input type="text" ref={catRef} />

            <label htmlFor="price">price</label>
            <input type="number" ref={priceRef} />

            <button onClick={addProductHandler}>add</button>
        </div>
    );
};
