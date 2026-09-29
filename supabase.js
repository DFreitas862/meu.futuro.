// ==========================================
// ARQUIVO DE CONFIGURAÇÃO DO SUPABASE
// ==========================================
const SUPABASE_URL = 'SUA_URL_DO_SUPABASE';
const SUPABASE_ANON_KEY = 'SUA_CHAVE_ANON_DO_SUPABASE';

// Inicializa o cliente do Supabase para o app inteiro usar
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
