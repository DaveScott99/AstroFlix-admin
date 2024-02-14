interface FormProps {
  watch: any;
}

export function VerifyAndSave({ watch }: FormProps) {
  return (
    <section>
      <h1 className="text-xl font-bold mb-6">Verify & Save</h1>

      <div className="flex">
        <h2 className="font-semibold text-base mr-2">Title: </h2>
        <p>{watch("media.title")}</p>
      </div>
    </section>
  );
}
