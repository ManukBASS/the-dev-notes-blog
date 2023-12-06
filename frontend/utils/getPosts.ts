import { API_URL } from "@/lib/api/api.config";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  console.log(
    `Authorization Header: Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
  );

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();
  console.log("Data from server:", data);
  return data;
};

export function usePosts(params: string) {
  const { data, error } = useSWR(`${API_URL.API}/${params}`, fetcher);
  const apiUrl = `${API_URL.API}/${params}`;
  console.log(`API URL: ${apiUrl}`);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
