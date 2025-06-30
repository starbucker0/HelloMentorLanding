import { getPostBySlug, Post } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      <header className="mb-8 text-center">
        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight">{post.title}</h1>
        <div className="mt-6 flex justify-center items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author.name}</span>
          </div>
          <span>&middot;</span>
          <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
        </div>
      </header>

      <Image
        src={post.image}
        alt={post.title}
        width={1200}
        height={600}
        className="w-full rounded-lg shadow-lg mb-8"
        data-ai-hint={post.imageHint}
      />

      <div
        className="prose prose-lg dark:prose-invert max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      <footer className="mt-12">
        <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
        </div>
      </footer>
    </article>
  );
}

// Generate static paths for blog posts
import { getAllPosts } from '@/lib/blog';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
