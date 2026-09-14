import { _ as Link, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
import { i as Heart, o as Download } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/model-card-BHlZAPQR.js
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var TASKS = [
	{
		id: "",
		label: "All"
	},
	{
		id: "text-generation",
		label: "Text gen"
	},
	{
		id: "text-classification",
		label: "Classify"
	},
	{
		id: "summarization",
		label: "Summarize"
	},
	{
		id: "translation",
		label: "Translate"
	},
	{
		id: "question-answering",
		label: "Q&A"
	},
	{
		id: "fill-mask",
		label: "Fill-mask"
	},
	{
		id: "token-classification",
		label: "Tokens"
	},
	{
		id: "feature-extraction",
		label: "Embed"
	},
	{
		id: "text-to-image",
		label: "Images"
	},
	{
		id: "image-classification",
		label: "Vision"
	},
	{
		id: "image-to-text",
		label: "Caption"
	},
	{
		id: "automatic-speech-recognition",
		label: "Speech"
	},
	{
		id: "object-detection",
		label: "Detect"
	}
];
var listInput = object({
	q: string().optional(),
	task: string().optional(),
	sort: _enum([
		"downloads",
		"likes",
		"lastModified"
	]).optional(),
	limit: number().int().min(1).max(48).optional()
});
var listModels = createServerFn({ method: "GET" }).validator(listInput).handler(createSsrRpc("b7b16b337c020349f55a60a8fbcab2997c4b15cafcdbab9a27d475f1137e5c41"));
var getModel = createServerFn({ method: "GET" }).validator(object({ id: string().min(1).max(200) })).handler(createSsrRpc("c0c6b6c102b91a86ce841360cbe4d9694a3f0568566fe328b1ed559f0bf96fcf"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatCount(n) {
	if (!Number.isFinite(n) || n < 0) return "0";
	if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
	if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1)}k`;
	return String(n);
}
function formatDate(iso) {
	if (!iso) return "—";
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return "—";
	return d.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: cn("size-5", className),
		fill: "none",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 16.5 12 4l8 12.5",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M8 16.5h8",
				stroke: "currentColor",
				strokeWidth: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M10 20h4",
				stroke: "currentColor",
				strokeWidth: "1.6"
			})
		]
	});
}
var NAV = [{
	to: "/huggingface",
	label: "Models"
}, {
	to: "/conduit",
	label: "Router"
}];
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-border/80 bg-bg/90 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-2 text-sm font-medium tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Forge" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex items-center gap-1",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "inline-flex min-h-11 items-center rounded-lg px-3 text-sm text-muted transition-colors duration-150 hover:bg-raised hover:text-fg",
						activeProps: { className: "text-fg bg-raised" },
						children: item.label
					}, item.to))
				})]
			})
		}), children]
	});
}
function taskHue(task) {
	if (!task) return "bg-raised";
	if (task.includes("image") || task.includes("vision") || task.includes("object")) return "bg-[#1c2228]";
	if (task.includes("speech") || task.includes("audio")) return "bg-[#1a2220]";
	if (task.includes("text") || task.includes("translation") || task.includes("summar")) return "bg-[#1b1d24]";
	return "bg-raised";
}
function ModelCard({ model, selected, onSelect }) {
	const [org, name] = model.id.includes("/") ? model.id.split("/") : ["", model.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("flex w-full flex-col items-start rounded-xl bg-surface p-4 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[var(--shadow-border-hover)]", selected && "shadow-[var(--shadow-border-hover)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-xs font-medium text-muted", taskHue(model.pipeline_tag)),
				"aria-hidden": "true",
				children: (name ?? model.id).slice(0, 2).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[13px] leading-snug text-fg",
				children: org ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-subtle",
					children: [org, "/"]
				}), name] }) : model.id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1.5 line-clamp-1 text-xs text-muted",
				children: [model.pipeline_tag?.replaceAll("-", " ") ?? "untagged", model.library_name ? ` · ${model.library_name}` : ""]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-3 text-xs tabular-nums text-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						className: "size-3.5",
						strokeWidth: 1.75
					}), formatCount(model.downloads ?? 0)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
						className: "size-3.5",
						strokeWidth: 1.75
					}), formatCount(model.likes ?? 0)]
				})]
			})
		]
	});
}
function ModelCardSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-3 size-10 animate-pulse rounded-lg bg-raised" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-3/4 animate-pulse rounded bg-raised" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-2 h-3 w-1/2 animate-pulse rounded bg-raised" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-3 w-1/3 animate-pulse rounded bg-raised" })
		]
	});
}
//#endregion
export { cn as a, getModel as c, TASKS as i, listModels as l, ModelCardSkeleton as n, formatCount as o, Shell as r, formatDate as s, ModelCard as t };
