'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateCopyAction } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';

const initialState = {
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? 'Generating...' : 'Generate Copy'}
    </Button>
  );
}

export function CopyGeneratorForm() {
  const [state, formAction] = useFormState(generateCopyAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'An unexpected error occurred.') {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
        title: "Copied to clipboard!",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form action={formAction} className="space-y-6 bg-card p-8 rounded-lg border">
        <div className="space-y-2">
          <Label htmlFor="appPurpose">App Purpose</Label>
          <Textarea
            id="appPurpose"
            name="appPurpose"
            placeholder="e.g., A project management tool that helps teams collaborate."
            rows={4}
          />
          {state.errors?.appPurpose && (
            <p className="text-sm font-medium text-destructive">{state.errors.appPurpose[0]}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="keywords">Keywords</Label>
          <Input
            id="keywords"
            name="keywords"
            placeholder="e.g., productivity, collaboration, tasks"
          />
          {state.errors?.keywords && (
            <p className="text-sm font-medium text-destructive">{state.errors.keywords[0]}</p>
          )}
        </div>
        <SubmitButton />
      </form>

      {state.data && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold font-headline text-center mb-6">Generated Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {state.data.map((variation, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="font-headline">{variation.headline}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleCopyToClipboard(variation.headline)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex justify-between items-start">
                  <p className="text-muted-foreground">{variation.description}</p>
                   <Button variant="ghost" size="icon" onClick={() => handleCopyToClipboard(variation.description)}>
                      <Copy className="h-4 w-4" />
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
