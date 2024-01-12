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

export function ExtrairTextosDaString(jsonString:any) {
    try {
        // Parse a string JSON para obter um array de strings
        const arrayDeStrings = JSON.parse(jsonString);

        // Verifica se o resultado é um array
        if (Array.isArray(arrayDeStrings)) {
            // Filtra o array para garantir que apenas strings são incluídas
            const apenasTextos = arrayDeStrings.filter(item => typeof item === 'string');
            
            return apenasTextos;
        } else {
            throw new Error('A entrada não é um array.');
        }
    } catch (error) {
        return null; // Ou pode retornar um array vazio ou outra indicação de erro, conforme necessário
    }
}
  