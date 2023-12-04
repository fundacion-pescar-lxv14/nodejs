type PostData = {
    postTitle: string;
    postDescription: string;
    postedAt: Date;
    calificacion: 'pesimo' | 'malo' | 'regular' | 'bueno' | 'excelente';
};
type ProductData = {
    price: number;
    stock: number;
    product: string;
    categories: string[];
};
type posts = PostData & ProductData;
declare function Post(this: any, p: posts): void;
