import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as string, i as object, r as number, t as _enum } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hf-Ykz27mcd.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
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
async function hubFetch(path) {
	const res = await fetch(`https://huggingface.co/api/${path}`, { headers: {
		Accept: "application/json",
		"User-Agent": "Forge/1.0 (Hugging Face model workshop)"
	} });
	if (!res.ok) throw new Error(`Hugging Face Hub returned ${res.status}`);
	return await res.json();
}
var listModels_createServerFn_handler = createServerRpc({
	id: "b7b16b337c020349f55a60a8fbcab2997c4b15cafcdbab9a27d475f1137e5c41",
	name: "listModels",
	filename: "src/lib/hf.ts"
}, (opts) => listModels.__executeServer(opts));
var listModels = createServerFn({ method: "GET" }).validator(listInput).handler(listModels_createServerFn_handler, async ({ data }) => {
	const params = new URLSearchParams();
	const q = data.q?.trim();
	if (q) params.set("search", q);
	if (data.task) params.set("pipeline_tag", data.task);
	params.set("sort", data.sort ?? "downloads");
	params.set("direction", "-1");
	params.set("limit", String(data.limit ?? 24));
	params.set("config", "0");
	return hubFetch(`models?${params.toString()}`);
});
var getModel_createServerFn_handler = createServerRpc({
	id: "c0c6b6c102b91a86ce841360cbe4d9694a3f0568566fe328b1ed559f0bf96fcf",
	name: "getModel",
	filename: "src/lib/hf.ts"
}, (opts) => getModel.__executeServer(opts));
var getModel = createServerFn({ method: "GET" }).validator(object({ id: string().min(1).max(200) })).handler(getModel_createServerFn_handler, async ({ data }) => {
	const id = data.id.replace(/^\/+|\/+$/g, "");
	if (id.includes("..") || id.startsWith("http")) throw new Error("Invalid model id");
	return hubFetch(`models/${id}`);
});
//#endregion
export { getModel_createServerFn_handler, listModels_createServerFn_handler };
