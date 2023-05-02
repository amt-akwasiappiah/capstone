import { useState, useEffect } from "react"
import axios from 'axios'

const useAxiosFetch = (dataurl: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [fetchError, setFetchError] = useState<any>(null);
	const [data, setData] = useState<any>([]);

	useEffect(() => {
		let isMounted = true;
		//oontroller cancells fetch request when not needed
		const controller = new AbortController();

		const fetchData = async (url:string) => {
			try {
				const response = await axios.get<any>(url, {
					signal: controller.signal,
				});
				if (isMounted) {
					setData(response.data);
					setFetchError(null);
				}
			} catch (error) {
				if (isMounted) {
					if (axios.isAxiosError(error)) {
						setFetchError('Axios Error with message' + error.message);
					} else {
						setFetchError(error);
					}
					setData([]);
				}
			} finally {
				isMounted && setIsLoading(false);
			}
		};

		fetchData(dataurl);

		const cleanUp = () => {
			isMounted = false;
			controller.abort();
		};

		return cleanUp;
	}, [dataurl]);

	return { data, isLoading, fetchError };
};

export default useAxiosFetch;