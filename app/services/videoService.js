import { createClient } from "@supabase/supabase-js";

const PROJETO_URL = process.env.PROJETO_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const supabase = createClient(PROJETO_URL, PUBLIC_KEY);


export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}