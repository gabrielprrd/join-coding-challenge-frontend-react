import useSearch from "@/hooks/useSearch";
import { FormProvider } from "react-hook-form";
import { Form } from "@/components/Form";

export default function SearchBikesForm() {
  const { createSearchForm, search, searchInputHint } = useSearch();

  const { handleSubmit } = createSearchForm;

  return (
    <FormProvider {...createSearchForm}>
      <form
        onSubmit={handleSubmit(search)}
        className="flex flex-col sm:flex-row gap-2 w-full items-end"
      >
        <div className="w-full">
          <Form.Input
            name="search"
            label="Search case descriptions:"
            placeholder="i.e Decathlon"
            aria-describedby={searchInputHint}
          />
          <Form.ErrorMessage id={searchInputHint} field="search" />
        </div>
        <Form.Button type="submit">Search</Form.Button>
      </form>
    </FormProvider>
  );
}
