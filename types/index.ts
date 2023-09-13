export interface PopularProductCardProps {
    name: string,
    price: string,
    imgURL: string;
}


export interface ButtonProps {
    label?: string,
    price?: number,
    iconURL?: string,
    backgroundColor?: string | number,
    textColor?: string | number,
    borderColor?: string | number,
    fullWidth?: boolean;
}


export interface ReviewCardProps {
    customerName: string,
    rating: number,
    imgURL: string,
    feedback: string,
}

export interface ServiceCardProps {
    label: string,
    subtext: string,
    imgURL: string,
}

export interface ShoeCardProps {
    changeBigShoeImage: string | any,
    bigShoeImg: any,
    imgURL: string | any,
    index?: number;
}