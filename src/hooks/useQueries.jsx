import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchCoinsMarket, fetchGlobalData, fetchSearch, fetchTrandData } from "../services/queries";

export const useGetCoinsMarket = (page) => {
  const res = useQuery({
    queryKey: ["coinsMarket", page || 1],
    queryFn: () => fetchCoinsMarket(page),
    placeholderData: keepPreviousData,
    refetchInterval: 1 * 60 * 1000,
  });

  return res;
};

export const useGet = (page) => {
  const res = useQuery({
    queryKey: ["coinsMarket", page || 1],
    queryFn: () => fetchCoinsMarket(page),
    placeholderData: keepPreviousData,
    refetchInterval: 1 * 60 * 1000,
  });

  return res;
};

export const useGetTrandData = () => {
  const res = useQuery({
    queryKey: ["trandData"],
    queryFn: fetchTrandData,
    placeholderData: keepPreviousData,
  });

  return res;
};

export const useGetSearch = (value = "btc") => {
  const res = useQuery({
    queryKey: ["searchData", value],
    queryFn: () => fetchSearch(value),
    placeholderData: keepPreviousData,
  });

  return res;
};

export const useGetGlobalData = () => {
  const res = useQuery({
    queryKey: ["globalData"],
    queryFn: fetchGlobalData,
    placeholderData: keepPreviousData,
  });

  return res;
};
