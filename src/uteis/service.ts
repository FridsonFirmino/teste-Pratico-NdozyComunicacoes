export const Angola_Api = 'https://angolaapi.onrender.com/api/v1/geography/provinces'

export interface Angola_Api_Data {
    id: string
    nome: string
    fundada: string
    capital: string
    prefixo_telefonico: string
    site_governo_provincial: string
    municipios: [string]
}


export const DATAS: Angola_Api_Data[] = []
  