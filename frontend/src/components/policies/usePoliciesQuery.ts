import { useQuery } from "react-query";
import { doGetFetch } from "../../utils/doGetFetch";

export default function usePoliciesQuery<T>() {
  return useQuery<any, Error>(["policies query"], () => doGetFetch<T>("policies", null));
}
