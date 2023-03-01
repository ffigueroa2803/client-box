import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios'
import urlJoin from 'url-join'
import cookies from 'js-cookie'
export const BaseConfigRequest = (domain: string, token?: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${cookies.get(
      'AccesToken',
    )}`
  }
  const get = async (subDomain: string, config?: AxiosRequestConfig) =>
    await axios.get(urlJoin(domain, subDomain), config)

  const post = async (
    subDomain: string,
    payload?: any,
    config?: AxiosRequestConfig,
  ) => await axios.post(urlJoin(domain, subDomain), payload, config)

  return { get, post, headers: axios.defaults.headers.common }
}
