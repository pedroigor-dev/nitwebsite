"use server";

export type ApplicationState = {
  ok: boolean;
  message: string;
};

const requiredFields = [
  "name",
  "email",
  "course",
  "period",
  "track",
  "portfolio",
  "availability",
  "experience",
  "motivation",
  "projectIdea",
] as const;

export async function submitApplication(
  _previousState: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const missingField = requiredFields.find((field) => {
    const value = formData.get(field);
    return typeof value !== "string" || value.trim().length < 2;
  });

  if (missingField) {
    return {
      ok: false,
      message: "Preencha as 10 perguntas antes de enviar.",
    };
  }

  const email = String(formData.get("email"));

  if (!email.includes("@")) {
    return {
      ok: false,
      message: "Use um e-mail válido para a equipe conseguir te encontrar.",
    };
  }

  return {
    ok: true,
    message:
      "Inscrição registrada no protótipo. A próxima etapa é conectar este envio ao destino oficial do NITE.",
  };
}
