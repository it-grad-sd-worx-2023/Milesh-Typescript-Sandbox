//aliases
type CarYears = number;
type CarTypes = string;
type CarModels = string;
type CarPrices = number;

type car = {
    year: CarYears,
    type: CarTypes,
    model: CarModels,
    price: CarPrices
}

const Year : CarYears = 2023;
const Type : CarTypes = "Toyota";
const Model : CarModels = "Corolla";
const Price : CarPrices = 451755886;

const Box : car = {
    year : Year,
    type : Type,
    model : Model,
    price : Price
};

console.log(Box);

//interfaces
interface Rectangle{
    height: number,
    width: number,
    horizontal: boolean,
    vertical: boolean
}

interface ColoredRectangle extends Rectangle{
    color: string
}

const Parking: ColoredRectangle = {
    height:20,
    width:10.5,
    horizontal:true,
    vertical:false,
    color: "Black"
}

console.log(Parking);