export function namedFormSubmit(submitHandler: (formValues: any) => void): (event: React.FormEvent<HTMLFormElement>) => void {
  return event => {
    event.preventDefault();
    const formValues: any = {};
    const elements = event.currentTarget.elements;
    for (let i = 0; i < elements.length; i++) {
      const element: any = elements[i];
      if (element.name) {
        formValues[element.name] = element.value;
      }
    }
    submitHandler(formValues);
  }
}
