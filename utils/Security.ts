/**
 * SafeTrust Security Utilities
 * Este arquivo fornece padrões para proteger dados sensíveis e prevenir injeção de SQL.
 */

/**
 * Exemplo de sanitização de entrada para prevenir injeção (se estiver usando backend customizado)
 * NOTA: O ideal é SEMPRE usar queries parametrizadas no banco de dados.
 */
export const sanitizeInput = (input: string): string => {
    return input.replace(/['";\\]/g, '');
};

/**
 * Função para navegar sem expor IDs ou Tokens na URL
 * Utiliza o state do React Router em vez de query parameters.
 */
export const secureNavigate = (navigate: Function, path: string, data: any) => {
    navigate(path, { state: { secureData: data } });
};

/**
 * Exemplo de uso de Query Parametrizada (Padrão sugerido para o Backend)
 * 
 * const query = {
 *   text: 'SELECT * FROM users WHERE id = $1',
 *   values: [userId],
 * }
 */
