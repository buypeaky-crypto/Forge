import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const TASKS = [
  { id: "", label: "All" },
  { id: "text-generation", label: "Text gen" },
  { id: "text-classification", label: "Classify" },
  { id: "summarization", label: "Summarize" },
  { id: "translation", label: "Translate" },
  { id: "question-answering", label: "Q&A" },
  { id: "fill-mask", label: "Fill-mask" },
  { id: "token-classification", label: "Tokens" },
  { id: "feature-extraction", label: "Embed" },
  { id: "text-to-image", label: "Images" },
  { id: "image-classification", label: "Vision" },
  { id: "image-to-text", label: "Caption" },
  { id: "automatic-speech-recognition", label: "Speech" },
  { id: "object-detection", label: "Detect" },
] as const;

export type PipelineTask = (typeof TASKS)[number]["id"];

export type HubModel = {
  id: string;
  pipeline_tag?: string;
  library_name?: string;
  downloads?: number;
  likes?: number;
  tags?: string[];
  lastModified?: string;
  createdAt?: string;
  private?: boolean;
};

export type HubModelDetail = HubModel & {
  cardData?: {
    license?: string;
    language?: string[] | string;
    datasets?: string[] | string;
    pretty_name?: string;
  };
  siblings?: { rfilename: string }[];
  safetensors?: { total?: number; parameters?: Record<string, number> };
};

const listInput = z.object({
  q: z.string().optional(),
  task: z.string().optional(),
  sort: z.enum(["downloads", "likes", "lastModified"]).optional(),
  limit: z.number().int().min(1).max(48).optional(),
});

async function hubFetch<T>(path: string): Promise<T> {
  const res = await fetch(`https://huggingface.co/api/${path}`, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Forge/1.0 (Hugging Face model workshop)",
    },
  });
  if (!res.ok) {
    throw new Error(`Hugging Face Hub returned ${res.status}`);
  }
  return (await res.json()) as T;
}

export const listModels = createServerFn({ method: "GET" })
  .validator(listInput)
  .handler(async ({ data }): Promise<HubModel[]> => {
    const params = new URLSearchParams();
    const q = data.q?.trim();
    if (q) params.set("search", q);
    if (data.task) params.set("pipeline_tag", data.task);
    params.set("sort", data.sort ?? "downloads");
    params.set("direction", "-1");
    params.set("limit", String(data.limit ?? 24));
    params.set("config", "0");
    return hubFetch<HubModel[]>(`models?${params.toString()}`);
  });

export const getModel = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string().min(1).max(200) }))
  .handler(async ({ data }): Promise<HubModelDetail> => {
    const id = data.id.replace(/^\/+|\/+$/g, "");
    if (id.includes("..") || id.startsWith("http")) {
      throw new Error("Invalid model id");
    }
    return hubFetch<HubModelDetail>(`models/${id}`);
  });
