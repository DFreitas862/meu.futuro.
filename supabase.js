// ==========================================
// ARQUIVO DE CONFIGURAÇÃO DO SUPABASE
// ==========================================
const SUPABASE_URL = 'https://uno-familia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZWF6c2NvZW1qbGl4aGxhenBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxODM0NTcsImV4cCI6MjEwNDc1OTQ1N30.rQ3CBN5RWu1YuFpxoaGJe72lrneO_6uVrjpVwY0MLb0';

// Inicializa o cliente do Supabase para o app inteiro usar
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
