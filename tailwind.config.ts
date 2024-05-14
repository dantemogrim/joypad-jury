import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				mona: ["Monaspace Neon Regular", "Helvetica", "Arial"],
				neue: ["Neuebit Bold", "Helvetica", "Arial"]
			}
		}
	},
	plugins: []
} satisfies Config;
