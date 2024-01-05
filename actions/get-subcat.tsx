import { Subcat } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/subcat`;

const getSubcat = async (): Promise<Subcat[]> => {
    const res = await fetch(URL);

    return res.json();
};

export default getSubcat;