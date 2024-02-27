import { useInfiniteQuery } from "@tanstack/react-query";
import { ASTROFLIX_API } from "../helper/axios-instance";
import React from "react";


export const useInfiniteScroll = (path:string, query_key: string[]) => {

    const {
        data,
        error,
        fetchNextPage,
        isFetching,
        isError
      } = useInfiniteQuery({
        queryKey: [query_key],
        queryFn: async ({ pageParam }) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          const response = await ASTROFLIX_API.get(
            `${path}&page=${pageParam}`
          );
          return response.data.content;
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage, allPages) =>
          lastPage.length ? allPages.length + 1 : undefined,
      });

      React.useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            fetchNextPage();
          }
        });
    
        /*@ts-ignore*/
        intersectionObserver.observe(document.querySelector("#sentinel"));
    
        return () => intersectionObserver.disconnect();
      }, []);
    

    return {
        data,
        error,
        isError,
        isFetching,
        IntersectionObserver
    }

}