const OPEN_DATA_URL = 'https://ckan.publishing.service.gov.uk/api/action/package_show';

export const fetchData = async (argument: string): Promise<MetadataObj> => {
    return await fetch(`${OPEN_DATA_URL}?id=${argument}`, {
        method: 'GET',
        mode: 'cors',
      },
    )
    .then((response) => parseJSON(response))
    .catch((response) => {
        console.log(response);
        throw new Error(`Error ${response}`);
    });
};

export const parseJSON = async (response: Response): Promise<MetadataObj> => {
    const payload: MetadataObj = await response.json();
    return payload;
  };