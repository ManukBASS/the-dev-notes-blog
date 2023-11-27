import { API_URL } from "@/lib/api/api.config";

export async function getPosts(params: string) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  };

  try {
    const req = await fetch(`${API_URL.API}/${params}`, options);
    const res = await req.json();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
