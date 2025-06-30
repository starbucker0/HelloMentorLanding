import { CopyGeneratorForm } from './form';

export default function CopyGeneratorPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">AI Marketing Copy Generator</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Describe your app's purpose and add some keywords to generate compelling headlines and descriptions for your hero section.
        </p>
      </div>
      <CopyGeneratorForm />
    </div>
  );
}
