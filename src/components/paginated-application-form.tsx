"use client";

import { useActionState, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { submitApplication, type ApplicationState } from "@/app/actions";
import {
  applicationQuestions,
  type ApplicationQuestion,
} from "@/lib/recruitment-data";

const initialState: ApplicationState = {
  ok: false,
  message: "",
};

const pageSize = 3;

export function PaginatedApplicationForm() {
  const [page, setPage] = useState(0);
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initialState,
  );

  const pages = useMemo(() => {
    const chunks: ApplicationQuestion[][] = [];

    for (let index = 0; index < applicationQuestions.length; index += pageSize) {
      chunks.push(applicationQuestions.slice(index, index + pageSize));
    }

    return chunks;
  }, []);

  const currentPage = pages[page];
  const isFirstPage = page === 0;
  const isLastPage = page === pages.length - 1;
  const progress = ((page + 1) / pages.length) * 100;

  return (
    <form
      action={formAction}
      className="border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-7"
    >
      <div className="mb-7">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
            Página {page + 1} de {pages.length}
          </p>
          <p className="text-sm text-white/48">
            {currentPage.length} pergunta{currentPage.length > 1 ? "s" : ""}
          </p>
        </div>
        <div className="mt-4 h-1.5 bg-white/10">
          <div
            className="h-full bg-cyan-300 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-5">
        {pages.map((questionPage, index) => (
          <div
            key={index}
            className={index === page ? "space-y-5" : "hidden"}
            aria-hidden={index !== page}
          >
            {questionPage.map((question) => (
              <QuestionField key={question.id} question={question} />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          disabled={isFirstPage}
          onClick={() => setPage((current) => Math.max(current - 1, 0))}
          className="inline-flex h-11 items-center justify-center gap-2 border border-white/15 px-4 text-sm font-semibold text-white/72 transition hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </button>

        {isLastPage ? (
          <button
            type="submit"
            disabled={pending}
            className="inline-flex h-11 items-center justify-center gap-2 bg-cyan-300 px-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-white disabled:cursor-wait disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {pending ? "Enviando" : "Enviar"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              setPage((current) => Math.min(current + 1, pages.length - 1))
            }
            className="inline-flex h-11 items-center justify-center gap-2 bg-white px-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-200"
          >
            Próxima
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {state.message ? (
        <p
          className={`mt-5 border p-3 text-sm ${
            state.ok
              ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-100"
              : "border-red-300/30 bg-red-500/10 text-red-100"
          }`}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

type QuestionFieldProps = {
  question: ApplicationQuestion;
};

function QuestionField({ question }: QuestionFieldProps) {
  return (
    <label className="block text-sm font-medium text-white/78">
      {question.label}
      {question.type === "textarea" ? (
        <textarea
          name={question.id}
          rows={5}
          placeholder={question.placeholder}
          className="mt-2 w-full resize-none border border-white/12 bg-black/50 p-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
        />
      ) : question.type === "select" ? (
        <select
          name={question.id}
          defaultValue=""
          className="mt-2 h-12 w-full border border-white/12 bg-black/50 px-3 text-white outline-none transition focus:border-cyan-300"
        >
          <option value="" disabled>
            {question.placeholder}
          </option>
          {question.options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          name={question.id}
          type={question.type}
          placeholder={question.placeholder}
          className="mt-2 h-12 w-full border border-white/12 bg-black/50 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
        />
      )}
    </label>
  );
}
