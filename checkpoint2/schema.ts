import {buildSchema} from "type-graphql";
import {CountryResolver} from "./src/resolvers/country";

export const getSchema = async ()=>{
    return buildSchema({
        resolvers: [CountryResolver]
    });
}