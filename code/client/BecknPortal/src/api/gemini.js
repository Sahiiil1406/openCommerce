import { GoogleGenerativeAI } from "@google/generative-ai"
import {useSearchMutation} from "../store/slice/product.js"

const key="AIzaSyC9-49S1Q3xFfcbOiHywOrzym8Nkj1xiSg"
const genAI = new GoogleGenerativeAI(key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
import {useSearchMutation} from '../store/slice/product.js'

export const getRecommendation=async()=>{
    const [search] = useSearchMutation();
    const savedSearches =await search({ search:query }).unwrap();
    const searches =savedSearches.gateway.result
    JSON.parse(localStorage.getItem("recentSearches")) || [];
    const products=[]
    const prompt = `Give product recommendations based on the following searches: ${searches.join(", ")} from the following products: ${products.join(", ")}.return an array of recommended products.`;
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return result.response.text();
}

