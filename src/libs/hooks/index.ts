// import { AppState } from 'react-native';
// import useSWR, { SWRConfiguration } from 'swr';

// const fetcher = (request: Request): Promise<any> => {
//     return fetch(request.url, {
//         method: 'GET',
//         headers: request.headers,
//     }).then(res => {
//         if (!res.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return res.json();
//     });
// };

// export const swrConfig: SWRConfiguration = {
//     fetcher: (reqeust: Request) => fetcher(reqeust),
//     provider: () => new Map(),
//     isVisible: () => true,
//     initFocus(callback) {
//         let appState = AppState.currentState;

//         const onAppStateChange = (nextAppState: any) => {
//             if (appState.match(/inactive|background/) && nextAppState === 'active') {
//                 callback();
//             }
//             appState = nextAppState;
//         };

//         const subscription = AppState.addEventListener('change', onAppStateChange);

//         return () => {
//             subscription.remove();
//         };
//     },
// };

// export function useData<TData>(key: string, headers?: HeadersInit_) {
//     return useSWR<TData, any, any>(
//         {
//             url: key,
//             headers: headers
//         }, fetcher
//     );
// }

import { AppState } from 'react-native';
import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

interface RequestConfig {
    url: string;
    headers?: HeadersInit_;
}

const fetcher = (request: RequestConfig): Promise<any> => {
    return fetch(request.url, {
        method: 'GET',
        headers: request.headers,
    }).then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    });
};

export const swrConfig: SWRConfiguration = {
    fetcher: (request: RequestConfig) => fetcher(request),
    provider: () => new Map(),
    isVisible: () => true,
    initFocus(callback) {
        let appState = AppState.currentState;

        const onAppStateChange = (nextAppState: any) => {
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
                callback();
            }
            appState = nextAppState;
        };

        const subscription = AppState.addEventListener('change', onAppStateChange);

        return () => {
            subscription.remove();
        };
    },
};

export function useData<TData>(url: string, headers?: HeadersInit_): SWRResponse<TData, any> {
    return useSWR<TData, any, RequestConfig>({ url, headers }, fetcher);
}
