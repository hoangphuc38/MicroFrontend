import axiosClient from "./axiosClient";

interface ProductImage {
  id: number;
  productId: string;
  imageURL: string;
}

interface Product {
  productID: string;
  productName: string;
  price: number;
  images: ProductImage[];
}

class SportAPI {
    getAll = async (): Promise<Product[]> => {
        const url = `Product/get-by-category/Indoor`;
        const response = axiosClient.get(url);
        return (await response).data;
      };
}

const sportApi = new SportAPI();
export default sportApi;