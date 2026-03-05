/* ============================================================
 * Supabase 客户端（Supabase Client）
 * 逻辑：封装 createClient，集中读取环境变量，供前端与服务端复用。
 * 术语：
 * - Supabase：后端即服务（Backend-as-a-Service），提供数据库 + API。
 * - createClient：Supabase 官方 JS SDK 提供的工厂函数（Factory Function）。
 * - Environment Variables（环境变量）：通过 import.meta.env 读取的配置值。
 * ============================================================ */
import { createClient } from '@supabase/supabase-js';

// 注意：在前端使用的环境变量必须以 PUBLIC_ 前缀命名（Astro 要求）		
const supabaseUrl = "https://mgpvaiilmqskjdschiei.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ncHBhdWlsbXFzc2tqZHNjaGllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMTUyOTAsImV4cCI6MjA1NjY5MTI5MH0.qdUq71NzRk4xB4Cn3ZQh_mDmC9Hc-tQwLJZpB8jx8k";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('缺少 Supabase 环境变量：请在 .env 中设置 PUBLIC_SUPABASE_URL 和 PUBLIC_SUPABASE_ANON_KEY');
}

/* 创建并导出 Supabase 客户端实例（Client Instance） */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 调试日志（Debug Log）：确认客户端是否成功创建
console.log(
  'Supabase Client Initialized:',
  !!supabase,
  {
    hasUrl: !!supabaseUrl,
    hasAnonKey: !!supabaseAnonKey,
  }
);

