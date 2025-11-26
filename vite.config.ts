import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import AutoImport from "unplugin-auto-import/vite";

<<<<<<< HEAD
// 🛑 CRITICAL FIX: Base path must be '/' for custom domain on HostGator.
const base = "/"; 
=======
// --- CORRECTION FOR HOSTGATOR DEPLOYMENT ---
// Setting base to './' (relative path) ensures that assets (CSS, JS) load correctly
// when the 'docs' folder contents are copied to the root of your domain.
const base = "./";
// ------------------------------------------
>>>>>>> 8256d733ea1ab6fe0049631f2ed77085b76e2477

const isPreview = process.env.IS_PREVIEW ? true : false;

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
    __READDY_PROJECT_ID__: JSON.stringify(process.env.PROJECT_ID || ""),
    __READDY_VERSION_ID__: JSON.stringify(process.env.VERSION_ID || ""),
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          react: [
            "React",
            "useState",
            "useEffect",
            "useContext",
            "useReducer",
            "useCallback",
            "useMemo",
            "useRef",
            "useImperativeHandle",
            "useLayoutEffect",
            "useDebugValue",
            "useDeferredValue",
            "useId",
            "useInsertionEffect",
            "useSyncExternalStore",
            "useTransition",
            "startTransition",
            "lazy",
            "memo",
            "forwardRef",
            "createContext",
            "createElement",
            "cloneElement",
            "isValidElement",
          ],
        },
        {
          "react-router-dom": [
            "useNavigate",
            "useLocation",
            "useParams",
            "useSearchParams",
            "Link",
            "NavLink",
            "Navigate",
            "Outlet",
          ],
        },
        // React i18n
        {
          "react-i18next": ["useTranslation", "Trans"],
        },
      ],
      dts: true,
    }),
  ],
<<<<<<< HEAD
  base,
  build: {
    sourcemap: true,
    outDir: "dist", // ⬅️ CRITICAL FIX: Changed from "docs" to "dist"
=======
  base, // This now uses the corrected relative path: './'
  build: {
    sourcemap: true,
    outDir: "docs", // This correctly matches the folder used in .cpanel.yml
>>>>>>> 8256d733ea1ab6fe0049631f2ed77085b76e2477
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
});
