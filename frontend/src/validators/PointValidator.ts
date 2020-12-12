import {IPoint} from "../models/IPoint";

const PointValidator = (point: IPoint): string => {
    const isNumber = (obj: any) => !isNaN(parseFloat(obj));
    const min = (min: number, actual: number) => actual >= min;
    const max = (max: number, actual: number) => actual <= max;

    if (!isNumber(point.x)) {
        return `X must be a number but is ${typeof point.x}`;
    } else if (!min(-5, point.x)) {
        return `X must be bigger than -5 but is ${point.x}`;
    } else if (!max(3, point.x)) {
        return `X must be smaller than 3 but is ${point.x}`;
    }

    if (!isNumber(point.y)) {
        return `Y must be a number but is ${typeof point.y}`;
    } else if (!min(-5, point.y)) {
        return `Y must be bigger than -5 but is ${point.y}`;
    } else if (!max(5, point.y)) {
        return `Y must be smaller than 5 but is ${point.y}`;
    }

    if (!isNumber(point.r)) {
        return `R must be a number but is ${typeof point.r}`;
    } else if (!min(-5, point.r)) {
        return `R must be bigger than -5 but is ${point.r}`;
    } else if (!max(3, point.r)) {
        return `R must be smaller than 3 but is ${point.r}`;
    }

    return "";
};

export default PointValidator;