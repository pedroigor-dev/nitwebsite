"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { submitApplication, type ApplicationState } from "@/app/actions";
import { formTracks } from "@/lib/recruitment-data";

const initialState: ApplicationState = {
  ok: false,
  message: "",
};

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="border border-white/10 bg-white/[0.035] p-5 sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nome completo" name="name" placeholder="Seu nome" />
        <Field
          label="E-mail"
          name="email"
          placeholder="voce@email.com"
          type="email"
        />
        <Field
          label="Curso"
          name="course"
          placeholder="Ex: Sistemas de Informação"
        />
        <label className="text-sm text-white/72">
          Trilha de interesse
          <select
            name="track"
            className="mt-2 h-12 w-full border border-white/12 bg-black/50 px-3 text-white outline-none transition focus:border-cyan-300"
            defaultValue=""
          >
            <option value="" disabled>
              Selecione
            </option>
            {formTracks.map((track) => (
              <option key={track}>{track}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm text-white/72">
        Por que você quer entrar no NITE?
        <textarea
          name="motivation"
          rows={6}
          placeholder="Conte sobre interesses, projetos, curiosidades e o que você quer aprender."
          className="mt-2 w-full resize-none border border-white/12 bg-black/50 p-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 bg-white px-5 text-sm font-bold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {pending ? "Enviando" : "Enviar inscrição"}
      </button>

      {state.message ? (
        <p
          className={`mt-4 border p-3 text-sm ${
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

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
};

function Field({ label, name, placeholder, type = "text" }: FieldProps) {
  return (
    <label className="text-sm text-white/72">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 h-12 w-full border border-white/12 bg-black/50 px-3 text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
      />
    </label>
  );
}
