import tailwindcss from "@tailwindcss/postcss"; // Updated import
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss(), // Updated usage
    autoprefixer(),
  ],
};
