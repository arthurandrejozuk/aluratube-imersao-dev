import { createClient } from "@supabase/supabase-js";

const PROJETO_URL = "https://scpsabciznwgbkctdfyp.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjcHNhYmNpem53Z2JrY3RkZnlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4ODQ2NDIsImV4cCI6MjAwNjQ2MDY0Mn0.lY6l2EYF-rrH9PnDHwwhpHu9SFRZ1ec4ZiSJ2YOPXUU"
const supabase = createClient(PROJETO_URL, PUBLIC_KEY);


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}