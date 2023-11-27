import React from 'react'

export const EditProduct = () => {

  const imgRef: React.RefObject<HTMLInputElement> = useRef(null);
  const nameRef: React.RefObject<HTMLInputElement> = useRef(null);
  const colorRef: React.RefObject<HTMLInputElement> = useRef(null);
  const sizeRef: React.RefObject<HTMLInputElement> = useRef(null);
  const priceRef: React.RefObject<HTMLInputElement> = useRef(null);
  const decRef: React.RefObject<HTMLInputElement> = useRef(null);
  const catRef: React.RefObject<HTMLInputElement> = useRef(null);
  const addProductHandler = async () => {
      try {
          const img = imgRef.current?.value;
          const title = nameRef.current?.value;
          const price = priceRef.current?.value;
          const description = decRef.current?.value;
          const category = catRef.current?.value;

          if (img && title && price && description && category) {
              const productData: productData = {
                  img: img,
                  title: title,
                  price: price,
                  description: description,
                  category: category,
              };

              const token = localStorage.getItem("dealerToken");

              const response = await axios.post("https://ecommerce-api.bridgeon.in/products", productData, {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              });

              console.log(response);
          }
      } catch (error) {
          console.log(error);
      }
  };



  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <label htmlFor="img">image</label>
    <input type="file" ref={imgRef} />

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
  )
}
