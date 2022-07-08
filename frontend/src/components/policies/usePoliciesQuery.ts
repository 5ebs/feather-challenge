import { useQuery } from "react-query";
import { doGetFetch } from "../../utils/doGetFetch";

// Possibility
// export default function usePoliciesQuery<T>(controller: IPoliciesController) {
//   const payload = controller?.selectedProvider
//     ? {
//         search: controller?.selectedProvider,
//       }
//     : null;
//   return useQuery<any, Error>(["policies query", payload.selectedProvider], () => doGetFetch<T>("policies", payload ? JSON.stringify(payload) : null), {
//     keepPreviousData: true, // to avoid layout jumps during pagination
//   });
// }

export default function usePoliciesQuery<T>() {
  return useQuery<any, Error>(["policies query"], () => doGetFetch<T>("policies", null));
}
