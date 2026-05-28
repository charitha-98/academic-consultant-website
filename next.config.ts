import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 👈 Next.js 16 වලදී මොබයිල් එකෙන් එන WebSocket Block එක නැති කරන්නේ මේ පේළියෙන් විතරයි
  allowedDevOrigins: ['192.168.43.163'],

  /* වෙනත් config (Sanity projectId වගේ ඒවා) තියෙනවා නම් විතරක් මෙතනින් පල්ලෙහාට දාන්න මචං */
};

export default nextConfig; // 👈 TypeScript වලදී export කරන්නේ මෙහෙමයි